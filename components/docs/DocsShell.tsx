"use client";

import { useMemo, useState } from "react";
import { docGroups } from "@/lib/docs-content";
import { CostCalculator } from "@/components/docs/CostCalculator";

const startingHeading = docGroups.find((g) => g.pages.some((p) => p.id === "overview"))?.heading ?? "";

export function DocsShell() {
  const [activeId, setActiveId] = useState("overview");
  const [query, setQuery] = useState("");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Set<string>>(() => new Set([startingHeading]));

  const active = useMemo(() => {
    for (const g of docGroups) {
      const p = g.pages.find((p) => p.id === activeId);
      if (p) return p;
    }
    return docGroups[0].pages[0];
  }, [activeId]);

  const activeHeading = useMemo(() => {
    return docGroups.find((g) => g.pages.some((p) => p.id === activeId))?.heading ?? "";
  }, [activeId]);

  const filteredGroups = useMemo(() => {
    if (!query.trim()) return docGroups;
    const q = query.toLowerCase();
    return docGroups
      .map((g) => ({ ...g, pages: g.pages.filter((p) => p.title.toLowerCase().includes(q)) }))
      .filter((g) => g.pages.length > 0);
  }, [query]);

  const searching = query.trim().length > 0;

  const toggleGroup = (heading: string) => {
    setOpenGroups((prev) => {
      const next = new Set(prev);
      if (next.has(heading)) next.delete(heading);
      else next.add(heading);
      return next;
    });
  };

  const select = (id: string, heading: string) => {
    setActiveId(id);
    setOpenGroups((prev) => new Set(prev).add(heading));
    setMobileNavOpen(false);
  };

  const Nav = (
    <nav className="text-sm">
      <div className="mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search docs..."
          className="w-full rounded-full border border-ink/15 bg-offwhite px-4 py-2 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-maroon"
        />
      </div>
      {filteredGroups.map((g) => {
        const isOpen = searching || openGroups.has(g.heading);
        return (
          <div key={g.heading} className="mb-1">
            <button
              type="button"
              onClick={() => toggleGroup(g.heading)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between rounded-lg px-2 py-2 text-left text-xs font-semibold uppercase tracking-wide text-ink-muted transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
            >
              {g.heading}
              <span aria-hidden className={`text-[10px] transition-transform ${isOpen ? "rotate-180" : ""}`}>
                ▾
              </span>
            </button>
            {isOpen && (
              <ul className="mb-3 space-y-0.5">
                {g.pages.map((p) => (
                  <li key={p.id}>
                    <button
                      type="button"
                      onClick={() => select(p.id, g.heading)}
                      className={`block w-full rounded-lg px-2.5 py-1.5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
                        p.id === activeId
                          ? "bg-maroon/10 font-medium text-accent"
                          : "text-ink-muted hover:bg-black/5 hover:text-ink"
                      }`}
                    >
                      {p.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );

  return (
    <div className="container-page grid grid-cols-1 gap-8 py-10 lg:grid-cols-[240px_1fr] lg:gap-12 lg:py-14">
      {/* Mobile nav toggle */}
      <div className="lg:hidden">
        <button
          type="button"
          onClick={() => setMobileNavOpen((v) => !v)}
          aria-expanded={mobileNavOpen}
          className="flex w-full items-center justify-between rounded-xl border border-ink/10 bg-offwhite px-4 py-3 text-sm font-medium text-ink"
        >
          <span>
            {activeHeading} <span className="text-ink-muted">/</span> {active.title}
          </span>
          <span aria-hidden className={`transition-transform ${mobileNavOpen ? "rotate-180" : ""}`}>▾</span>
        </button>
        {mobileNavOpen && (
          <div className="mt-3 rounded-xl border border-ink/10 bg-cream-dark/40 p-4">{Nav}</div>
        )}
      </div>

      {/* Sidebar (desktop) */}
      <aside className="hidden lg:block">
        <div className="sticky top-[96px] max-h-[calc(100vh-120px)] overflow-y-auto pb-8 pr-2">{Nav}</div>
      </aside>

      {/* Content */}
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">{activeHeading}</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-ink sm:text-3xl">{active.title}</h1>
        <div className="mt-6 max-w-3xl">
          {active.id === "cost-calculator" ? <CostCalculator /> : active.node}
        </div>
      </div>
    </div>
  );
}
