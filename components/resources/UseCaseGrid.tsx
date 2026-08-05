"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { UseCase } from "@/lib/content/types";

/** Client-side category filter over the use case cards. */
export function UseCaseGrid({
  useCases,
  categories,
}: {
  useCases: UseCase[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const chips = ["All", ...categories];

  const filtered = useMemo(
    () => useCases.filter((u) => active === "All" || u.category === active),
    [useCases, active]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {chips.map((c) => {
          const on = c === active;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              aria-pressed={on}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
                on
                  ? "bg-maroon text-onbrand shadow-sm"
                  : "bg-cream-dark text-ink/70 hover:text-ink"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((u) => (
          <Link
            key={u.slug}
            href={`/resources/use-cases/${u.slug}`}
            className="group flex flex-col rounded-2xl bg-offwhite p-7 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sunset-1 text-2xl text-white">
              <span aria-hidden>{u.icon}</span>
            </div>
            <span className="mt-5 text-xs font-medium uppercase tracking-wide text-sunset-3">
              {u.category}
            </span>
            <h3 className="mt-2 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
              {u.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
              {u.summary}
            </p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
              Learn more
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
