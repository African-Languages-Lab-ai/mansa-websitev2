"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const cards = [
  {
    icon: "◈",
    title: "Trained for Africa",
    body: "Built using billions of African language tokens collected through direct, community-driven research.",
  },
  {
    icon: "❖",
    title: "Cultural Understanding",
    body: "Understands meaning, expressions, and context instead of translating word for word.",
  },
  {
    icon: "↻",
    title: "Always Improving",
    body: "Continuously refined with new languages, better speech recognition, and ongoing research.",
  },
];

const stats = [
  { value: "30+", label: "African Languages" },
  { value: "19B+", label: "African Language Tokens" },
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

function StatRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 gap-6 pr-6" aria-hidden={ariaHidden}>
      {stats.map((s) => (
        <StatCard key={s.label} {...s} />
      ))}
    </div>
  );
}

export function WhyMansa() {
  const reduce = useReducedMotion();

  return (
    <section className="overflow-hidden bg-cream pb-24 pt-10 md:pb-32 md:pt-14">
      <div className="container-page">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <Pill>Why Mansa</Pill>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Mansa is built to understand African languages
          </h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">
            Mansa, developed by{" "}
            <span className="font-semibold text-maroon">the African Languages Lab</span>, natively
            understands African languages, dialects, and cultural contexts, unlike most AI models
            that treat them as an afterthought.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8"
        >
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="rounded-2xl border border-ink/10 bg-cream-dark/40 p-7 transition-shadow hover:shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-maroon/20 text-xl text-maroon">
                {c.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Numbers — heading in the gutter, cards auto-scroll to the right screen edge */}
      <div className="mt-16 flex flex-col gap-8 md:mt-24 lg:flex-row lg:items-center">
        <h3 className="container-page shrink-0 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:w-72 lg:pr-0">
          Some of the
          <br className="hidden lg:block" /> numbers
        </h3>

        {reduce ? (
          <div className="flex gap-6 overflow-x-auto px-6 pb-2 lg:pr-16">
            <StatRow />
          </div>
        ) : (
          <div className="marquee-mask relative flex-1 overflow-hidden">
            <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
              <StatRow />
              <StatRow ariaHidden />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
