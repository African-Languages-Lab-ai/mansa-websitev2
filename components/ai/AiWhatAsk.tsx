"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const prompts = [
  { tag: "Marketing", q: "What campaigns are our top three competitors running right now, and how does our messaging compare?" },
  { tag: "Legal", q: "What are the latest regulatory changes affecting solar in the EU this year, and what should counsel be tracking?" },
  { tag: "Product", q: "Pull our open PO bugs from Linear and group them by product team." },
  { tag: "Finance", q: "Summarize John Deere's latest 10-Q, flag the three biggest changes from last quarter, and tell me what isn't reported qualitatively." },
  { tag: "Consulting", q: "Size the total addressable market for supermarkets in the EU and walk me through your assumptions." },
  { tag: "Technology", q: "Map the value chain for phone manufacturing and flag where margin is concentrating and where it's being disrupted." },
];

export function AiWhatAsk() {
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
          What will you ask?
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {prompts.map((p) => (
            <motion.div
              key={p.tag}
              variants={fadeUp}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-offwhite/50">{p.tag}</span>
                <span aria-hidden className="text-offwhite/30 transition-transform group-hover:translate-x-1">↗</span>
              </div>
              <p className="mt-3 text-base leading-relaxed text-offwhite/85">{p.q}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
