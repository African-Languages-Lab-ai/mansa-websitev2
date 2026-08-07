"use client";

import { motion } from "framer-motion";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { APP_URL } from "@/lib/links";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  { n: "1", title: "Open Mansa on the web", body: "Head to Mansa in your browser, no download needed." },
  { n: "2", title: "Create your account", body: "Sign up and set up your workspace in a minute." },
  {
    n: "3",
    title: "Start automating",
    body: "Go to Mansa Agent and choose your plan and start automating your tasks.",
  },
];

export function AgentGetStarted() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <h2 className="max-w-xs text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Get Started with Mansa Agent in Minutes
          </h2>
          <div className="mt-8">
            <Button size="lg" href={APP_URL}>
              Try Mansa <ArrowGlyph />
            </Button>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {steps.map((s) => (
            <motion.div key={s.n} variants={fadeUp} className="flex flex-col rounded-2xl bg-cream-dark p-7">
              <span className="text-5xl font-bold leading-none text-ink">{s.n}</span>
              <h3 className="mt-8 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
