"use client";

import { useReducedMotion } from "framer-motion";

const stats = [
  { value: "30+", label: "African Languages" },
  { value: "100B+", label: "African Language Tokens" },
  { value: "98%", label: "API Integration Success Rate" },
  { value: "100%", label: "Research Backed" },
];

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-36 w-56 shrink-0 flex-col justify-center rounded-2xl bg-cream-dark px-7">
      <span className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">{value}</span>
      <span className="mt-2 text-sm text-ink-muted">{label}</span>
    </div>
  );
}

function Row({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-6 pr-6" aria-hidden={ariaHidden}>
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}

export function StatsStrip({ heading = "Developed with African language expertise." }: { heading?: string }) {
  const reduce = useReducedMotion();
  return (
    <section className="overflow-hidden bg-cream py-16 md:py-20">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
        <h2 className="container-page shrink-0 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:w-80 lg:pr-0">
          {heading}
        </h2>
        {reduce ? (
          <div className="flex gap-6 overflow-x-auto px-6 pb-2">
            <Row />
          </div>
        ) : (
          <div className="marquee-mask relative flex-1 overflow-hidden">
            <div className="animate-marquee flex w-max">
              <Row />
              <Row ariaHidden />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
