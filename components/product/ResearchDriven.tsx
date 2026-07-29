"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const items = [
  {
    icon: "▤",
    title: "Ethical Data Collection",
    body: "Language data sourced responsibly from authentic African contexts.",
  },
  {
    icon: "◫",
    title: "Language Model Training",
    body: "Multilingual AI trained specifically for African language understanding.",
  },
  {
    icon: "◑",
    title: "Human-in-the-Loop Evaluation",
    body: "Translations continuously improved by native speakers and expert linguists.",
  },
  {
    icon: "↻",
    title: "Continuous Model Improvement",
    body: "Ongoing research ensures the model becomes more accurate over time.",
  },
];

export function ResearchDriven({ product = "Mansa" }: { product?: string }) {
  return (
    <section className="bg-cream pb-24 pt-4 md:pb-28">
      <div className="container-page rounded-3xl bg-cream-dark/50 px-6 py-14 md:px-12 md:py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Research-driven language technology.
          </h2>
          <p className="mt-3 max-w-2xl text-base text-ink-muted">
            Behind every result is years of African language research, multilingual model
            development, and continuous improvement by African Languages Lab.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {items.map((it) => (
            <motion.div key={it.title} variants={fadeUp}>
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-maroon/25 text-lg text-maroon">
                {it.icon}
              </span>
              <h3 className="mt-4 text-base font-semibold text-ink">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                {it.body.replace("the model", `${product} becomes`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
