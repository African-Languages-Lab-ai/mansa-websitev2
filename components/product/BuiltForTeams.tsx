"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Card = { title: string; body: string };

type Props = {
  heading: string;
  individuals: Card[];
  teams: Card[];
};

export function BuiltForTeams({ heading, individuals, teams }: Props) {
  const groups: Record<string, Card[]> = { Individuals: individuals, Teams: teams };
  const tabs = Object.keys(groups);
  const [tab, setTab] = useState(tabs[0]);

  return (
    <section className="bg-espresso py-24 md:py-28">
      <div className="container-page">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-3xl font-bold tracking-tight text-offwhite sm:text-4xl"
        >
          {heading}
        </motion.h2>

        <div className="mt-8 flex justify-center gap-2">
          {tabs.map((t) => {
            const on = t === tab;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                aria-pressed={on}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offwhite ${
                  on ? "bg-cream-dark text-espresso" : "text-offwhite/70 hover:text-offwhite"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2"
            >
              {groups[tab].map((c) => (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <h3 className="text-lg font-semibold text-offwhite">{c.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-offwhite/60">{c.body}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
