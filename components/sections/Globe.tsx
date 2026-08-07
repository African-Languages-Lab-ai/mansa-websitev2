"use client";

import { useId, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { geoOrthographic, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import countriesTopology from "world-atlas/countries-110m.json";

type CountryFeature = {
  type: "Feature";
  id: string;
  properties: { name: string };
  geometry: GeoPermissibleObjects;
};

const topology = countriesTopology as unknown as Topology;
const countries = (
  feature(topology, topology.objects.countries as never) as unknown as { features: CountryFeature[] }
).features;

const SIZE = 560;
// Centers the view on Africa, matching the original artwork's framing.
const INITIAL_ROTATE: [number, number] = [-18, -2];
const DRAG_SENSITIVITY = 0.35;

/** Vector globe (D3 orthographic projection), gold palette, drag-to-rotate,
 * with optional per-country highlighting for the selected language. */
export function Globe({
  className = "",
  highlightCountries = [],
}: {
  className?: string;
  highlightCountries?: string[];
}) {
  const uid = useId();
  const sphereGradId = `globeSphere-${uid}`;
  const landGradId = `globeLand-${uid}`;

  const [rotate, setRotate] = useState<[number, number]>(INITIAL_ROTATE);
  const [dragging, setDragging] = useState(false);
  const lastPos = useRef<{ x: number; y: number } | null>(null);
  const movedRef = useRef(false);

  const path = useMemo(() => {
    const projection = geoOrthographic()
      .scale(SIZE / 2 - 1)
      .translate([SIZE / 2, SIZE / 2])
      .rotate([rotate[0], rotate[1], 0])
      .clipAngle(90);
    return geoPath(projection);
  }, [rotate]);

  const outlineD = useMemo(() => path({ type: "Sphere" } as GeoPermissibleObjects) ?? "", [path]);

  const countryPaths = useMemo(
    () =>
      countries
        .map((c) => ({ name: c.properties.name, d: path(c as unknown as GeoPermissibleObjects) }))
        .filter((c): c is { name: string; d: string } => !!c.d),
    [path],
  );

  const highlightSet = useMemo(() => new Set(highlightCountries), [highlightCountries]);

  const onPointerDown = (e: ReactPointerEvent<SVGSVGElement>) => {
    setDragging(true);
    movedRef.current = false;
    lastPos.current = { x: e.clientX, y: e.clientY };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (!lastPos.current) return;
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    if (Math.abs(dx) > 1 || Math.abs(dy) > 1) movedRef.current = true;
    lastPos.current = { x: e.clientX, y: e.clientY };
    setRotate(([lambda, phi]) => [
      lambda + dx * DRAG_SENSITIVITY,
      Math.max(-90, Math.min(90, phi - dy * DRAG_SENSITIVITY)),
    ]);
  };
  const endDrag = () => {
    setDragging(false);
    lastPos.current = null;
  };

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={`${className} touch-none select-none ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
      role="img"
      aria-label="An interactive golden globe highlighting Africa — drag to rotate"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      onPointerCancel={endDrag}
    >
      <defs>
        <radialGradient id={sphereGradId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#F6DFAE" />
          <stop offset="55%" stopColor="#E8B860" />
          <stop offset="100%" stopColor="#C4842E" />
        </radialGradient>
        <radialGradient id={landGradId} cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#E4C07E" />
          <stop offset="55%" stopColor="#D2A24F" />
          <stop offset="100%" stopColor="#A9741F" />
        </radialGradient>
      </defs>
      <path d={outlineD} fill={`url(#${sphereGradId})`} />
      {countryPaths.map((c) => {
        const on = highlightSet.has(c.name);
        return (
          <path
            key={c.name}
            d={c.d}
            fill={on ? "#7A2A1D" : `url(#${landGradId})`}
            stroke={on ? "#F6DFAE" : "#8A5A22"}
            strokeWidth={on ? 1.6 : 1}
            fillOpacity={on ? 1 : 0.95}
            className="transition-[fill,fill-opacity] duration-300 ease-out"
          />
        );
      })}
      <circle cx={SIZE / 2} cy={SIZE / 2} r={SIZE / 2 - 1} fill="none" stroke="#7A2A1D" strokeOpacity={0.1} />
    </svg>
  );
}
