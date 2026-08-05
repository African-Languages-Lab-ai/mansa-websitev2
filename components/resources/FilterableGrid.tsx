"use client";

import { useMemo, useState } from "react";
import type { Post } from "@/lib/content/types";
import { PostCard } from "./PostCard";

/** Client-side category filter + search over a set of posts (Blog index). */
export function FilterableGrid({
  posts,
  categories,
}: {
  posts: Post[];
  categories: string[];
}) {
  const [active, setActive] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter((p) => {
      const catOk = active === "All" || p.category === active;
      const qOk =
        q === "" ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q);
      return catOk && qOk;
    });
  }, [posts, active, query]);

  const chips = ["All", ...categories];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
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
        <label className="relative w-full sm:w-64">
          <span className="sr-only">Search posts</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts"
            className="w-full rounded-full border border-ink/15 bg-offwhite px-4 py-2 text-sm text-ink placeholder:text-ink-muted/70 focus:border-maroon focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          />
        </label>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </div>
      ) : (
        <p className="mt-16 text-center text-ink-muted">
          No posts match your search yet.
        </p>
      )}
    </div>
  );
}
