"use client";

import { useId } from "react";
import { geoOrthographic, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { Topology } from "topojson-specification";
import landTopology from "world-atlas/land-110m.json";

const land = feature(
  landTopology as unknown as Topology,
  (landTopology as unknown as Topology).objects.land as never,
);

const SIZE = 560;
const projection = geoOrthographic()
  .scale(SIZE / 2 - 1)
  .translate([SIZE / 2, SIZE / 2])
  // Centers the view on Africa, matching the original artwork's framing.
  .rotate([-18, -2, 0])
  .clipAngle(90);
const path = geoPath(projection);

const OUTLINE_D = path({ type: "Sphere" } as GeoPermissibleObjects) ?? "";
const LAND_D = path(land as GeoPermissibleObjects) ?? "";

/** Vector globe (D3 orthographic projection) in the same gold palette and
 * framing as the original raster artwork it replaces. */
export function Globe({ className = "" }: { className?: string }) {
  const uid = useId();
  const sphereGradId = `globeSphere-${uid}`;
  const landGradId = `globeLand-${uid}`;

  return (
    <svg
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      className={className}
      role="img"
      aria-label="A golden globe highlighting Africa"
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
      <path d={OUTLINE_D} fill={`url(#${sphereGradId})`} />
      <path d={LAND_D} fill={`url(#${landGradId})`} stroke="#8A5A22" strokeWidth={1.4} fillOpacity={0.95} />
      <circle cx={SIZE / 2} cy={SIZE / 2} r={SIZE / 2 - 1} fill="none" stroke="#7A2A1D" strokeOpacity={0.1} />
    </svg>
  );
}
