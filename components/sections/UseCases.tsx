"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { asset } from "@/lib/assets";

type Tab = {
  id: string;
  label: string;
  headline: string;
  body: string;
  img: string;
};

const tabs: Tab[] = [
  {
    id: "support",
    label: "Support",
    headline: "Deliver multilingual support that feels local.",
    body: "Resolve customer conversations in the languages your users actually speak, with responses that respect local nuance and tone.",
    img: asset("/assets/teams-6.webp"),
  },
  {
    id: "localization",
    label: "Localization",
    headline: "Localize products for the whole continent.",
    body: "Translate interfaces, docs, and content across dozens of African languages while keeping meaning and context intact.",
    img: asset("/assets/teams-1.webp"),
  },
  {
    id: "research",
    label: "Research",
    headline: "Accelerate research grounded in African data.",
    body: "Analyze interviews, transcripts, and field notes across languages to surface insights faster than ever.",
    img: asset("/assets/teams-2.webp"),
  },
  {
    id: "development",
    label: "Development",
    headline: "Build language-aware apps with one API.",
    body: "Ship chat, translation, and speech features for African languages using a single, well-documented API.",
    img: asset("/assets/teams-3.webp"),
  },
  {
    id: "education",
    label: "Education",
    headline: "Make learning accessible in every language.",
    body: "Give students tutoring, explanations, and study help in their mother tongue, at any level.",
    img: asset("/assets/teams-4.webp"),
  },
  {
    id: "operations",
    label: "Operations",
    headline: "Run operations that speak your team's language.",
    body: "Automate internal workflows, briefs, and reporting across the languages your teams work in every day.",
    img: asset("/assets/teams-5.webp"),
  },
];

export function UseCases() {
  const [activeId, setActiveId] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeId)!;

  return (
    <section className="bg-cream-dark py-24 md:py-32">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <Pill>Use cases</Pill>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            How Teams Use Mansa
          </h2>
        </motion.div>

        {/* Tab bar */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {tabs.map((t) => {
            const on = t.id === activeId;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveId(t.id)}
                aria-pressed={on}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
                  on
                    ? "bg-maroon text-offwhite shadow-sm"
                    : "bg-cream text-ink/70 hover:bg-cream/70 hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <h3 className="max-w-md text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                  {active.headline}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">
                  {active.body}
                </p>
              </div>

              {/* App screenshot for the active use case */}
              <div className="group mx-auto w-full max-w-[300px] overflow-hidden rounded-3xl bg-cream shadow-soft ring-1 ring-black/5">
                <Image
                  src={active.img}
                  alt={active.headline}
                  width={326}
                  height={430}
                  className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
