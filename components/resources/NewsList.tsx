"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/lib/content/types";
import { formatDate } from "@/lib/content/format";
import { asset } from "@/lib/assets";

/** Newsroom layout: featured item + dense reverse-chronological list. */
export function NewsList({
  featured,
  items,
  categories,
}: {
  featured?: Post;
  items: Post[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const chips = ["All", ...categories];

  const rows = useMemo(
    () => items.filter((p) => active === "All" || p.category === active),
    [items, active]
  );

  return (
    <div>
      {/* Featured / most recent */}
      {featured && (
        <Link
          href={`/resources/news/${featured.slug}`}
          className="group grid grid-cols-1 gap-6 overflow-hidden rounded-3xl bg-offwhite p-6 shadow-sm ring-1 ring-black/5 transition-all hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon md:grid-cols-2 md:p-8"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-cream-dark">
            {featured.heroImage ? (
              <Image
                src={asset(featured.heroImage)}
                alt={featured.heroAlt ?? ""}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 500px"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sunset-1/30 via-cream-dark to-cream">
                <span className="text-5xl font-bold text-sunset-2/40">mansa</span>
              </div>
            )}
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs font-medium">
              <span className="rounded-full bg-sunset-1/20 px-2.5 py-1 text-sunset-3">
                {featured.category}
              </span>
              <time dateTime={featured.date} className="text-ink-muted">
                {formatDate(featured.date)}
              </time>
            </div>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-muted">
              {featured.excerpt}
            </p>
          </div>
        </Link>
      )}

      {/* Category filter */}
      <div className="mt-12 flex flex-wrap gap-2">
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

      {/* Dense list */}
      <ul className="mt-6 divide-y divide-ink/10">
        {rows.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/resources/news/${p.slug}`}
              className="group flex flex-col gap-2 py-5 transition-colors sm:flex-row sm:items-baseline sm:gap-6 focus:outline-none"
            >
              <div className="flex shrink-0 items-center gap-3 sm:w-56">
                <time
                  dateTime={p.date}
                  className="text-sm tabular-nums text-ink-muted"
                >
                  {formatDate(p.date)}
                </time>
                <span className="rounded-full bg-sunset-1/20 px-2 py-0.5 text-xs font-medium text-sunset-3">
                  {p.category}
                </span>
              </div>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-ink transition-colors group-hover:text-accent">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-ink-muted">{p.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
