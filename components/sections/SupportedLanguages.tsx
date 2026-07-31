"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { languages, type Language } from "@/lib/languages";
import { fadeUp, viewportOnce } from "@/lib/motion";

// The D3/topojson land data is only needed once this section scrolls into
// view, so split it into its own chunk instead of the main page bundle.
const Globe = dynamic(() => import("@/components/sections/Globe").then((m) => m.Globe), {
  ssr: false,
  loading: () => <div className="h-full w-full animate-pulse rounded-full bg-sunset-1/30" />,
});

// Ring radii as a fraction of the globe wrapper's half-size. The container is
// wider than the globe (w-[60%]) so labels sit just outside the sphere with
// short connectors while still fitting within the section horizontally.
// NOTE: r is a fraction of the container WIDTH — offset from centre = r * width.
// The sphere (globe div w-[84%]) has radius 0.42 * width, so labels hug just past that.
const R_GLOBE = 0.42; // connector line start, right at the sphere edge (sphere radius = 0.84 / 2)
const R_LINE_END = 0.49; // where labels anchor — just outside the sphere

function polar(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  // 0deg = right, positive = counter-clockwise; screen y grows downward.
  // Round to avoid server/client float-precision hydration mismatches.
  const round = (n: number) => Math.round(n * 1000) / 1000;
  return {
    x: round(50 + r * 100 * Math.cos(rad)),
    y: round(50 - r * 100 * Math.sin(rad)),
  };
}

export function SupportedLanguages() {
  const [active, setActive] = useState<Language | null>(null);
  const globeRef = useRef<HTMLDivElement>(null);

  const select = (lang: Language) =>
    setActive((cur) => (cur?.name === lang.name ? null : lang));

  // Escape closes; outside-click closes.
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    const onClick = (e: MouseEvent) => {
      if (globeRef.current && !globeRef.current.contains(e.target as Node)) {
        setActive(null);
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [active]);

  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <Pill>Mansa&apos;s languages</Pill>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Supported Languages
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink-muted">
            Our language base is constantly being updated.
          </p>
        </motion.div>

        {/* Globe + positioned spokes (lg and up) */}
        <div className="mt-14 hidden justify-center lg:flex">
          <div
            ref={globeRef}
            className="relative aspect-square w-[560px] max-w-full"
          >
            {/* Connector lines */}
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden
            >
              {languages.map((l) => {
                const a = polar(l.angle, R_GLOBE);
                const b = polar(l.angle, R_LINE_END);
                const on = active?.name === l.name;
                return (
                  <line
                    key={l.name}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={on ? "#7A2A1D" : "#C2571F"}
                    strokeOpacity={on ? 1 : 0.5}
                    strokeWidth={on ? 1.1 : 0.6}
                    vectorEffect="non-scaling-stroke"
                  />
                );
              })}
            </svg>

            {/* Soft glow behind the globe */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,177,92,0.55),rgba(194,87,31,0.25)_55%,rgba(122,42,29,0)_72%)] blur-2xl" />

            {/* D3 orthographic-projection globe, gold palette matching the original artwork */}
            <div className="absolute left-1/2 top-1/2 aspect-square w-[84%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full shadow-[0_20px_60px_-15px_rgba(122,42,29,0.55)]">
              <Globe className="h-full w-full" />
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-maroon/10" />
            </div>

            {/* Language spoke labels */}
            {languages.map((l) => {
              const p = polar(l.angle, R_LINE_END);
              const on = active?.name === l.name;
              // Near the top/bottom, centre the label so it doesn't extend
              // sideways into its neighbours; otherwise anchor left/right.
              const rad = (l.angle * Math.PI) / 180;
              const tx =
                Math.abs(Math.sin(rad)) > 0.984
                  ? "-50%"
                  : Math.cos(rad) >= 0
                    ? "0"
                    : "-100%";
              return (
                <button
                  key={l.name}
                  type="button"
                  onClick={() => select(l)}
                  aria-pressed={on}
                  style={{
                    left: `${p.x}%`,
                    top: `${p.y}%`,
                    transform: `translate(${tx}, -50%)`,
                  }}
                  className={`absolute whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-medium leading-none transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
                    on
                      ? "scale-110 bg-maroon text-offwhite shadow-md"
                      : "text-ink hover:bg-maroon/10 hover:text-maroon"
                  }`}
                >
                  {l.name}
                </button>
              );
            })}

            {/* Floating description card */}
            <LanguageCard active={active} onClose={() => setActive(null)} />
          </div>
        </div>

        {/* Mobile / tablet: globe + wrapped chip grid */}
        <div className="mt-12 flex flex-col items-center lg:hidden">
          <div className="relative aspect-square w-[240px] overflow-hidden rounded-full shadow-[0_20px_60px_-15px_rgba(122,42,29,0.45)]">
            <Globe className="h-full w-full" />
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {languages.map((l) => {
              const on = active?.name === l.name;
              return (
                <button
                  key={l.name}
                  type="button"
                  onClick={() => select(l)}
                  aria-pressed={on}
                  className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
                    on
                      ? "border-maroon bg-maroon text-offwhite"
                      : "border-ink/10 bg-cream-dark/60 text-ink hover:border-maroon/40 hover:text-maroon"
                  }`}
                >
                  {l.name}
                </button>
              );
            })}
          </div>

          {/* Inline card on mobile */}
          <div className="relative mt-8 min-h-[8px] w-full max-w-sm">
            <AnimatePresence mode="wait">
              {active && (
                <motion.div
                  key={active.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                  className="rounded-2xl border border-ink/10 bg-cream-dark/80 p-5 text-center shadow-soft"
                  aria-live="polite"
                >
                  <h3 className="text-lg font-semibold text-maroon">{active.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {active.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function LanguageCard({
  active,
  onClose,
}: {
  active: Language | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-1/2 z-20 w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-ink/10 bg-cream/95 p-6 text-center shadow-[0_24px_70px_-20px_rgba(28,19,14,0.5)] backdrop-blur"
          aria-live="polite"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          >
            ×
          </button>
          {/* key re-triggers the enter animation on content change (cross-fade) */}
          <motion.div
            key={active.name}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="text-xl font-bold text-maroon">{active.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {active.description}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
