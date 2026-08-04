"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const prompts = [
  { tag: "Support", q: "A customer in Lagos is asking why their order hasn't shipped, in Yoruba. Help me write a polite, on-brand reply." },
  { tag: "Marketing", q: "Translate this product launch email into Swahili, Hausa, and Igbo while keeping the tone upbeat and on-brand." },
  { tag: "Product", q: "Review this onboarding screen and flag any copy that won't translate naturally into Twi." },
  { tag: "Research", q: "Summarize these Amharic customer interviews in English and pull out the top three recurring complaints." },
  { tag: "Sales", q: "How do I say \"thank you for your business, we look forward to working with you\" politely in Xhosa?" },
  { tag: "Operations", q: "Turn these mixed English and Hausa meeting notes into a clear action list for the team." },
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
