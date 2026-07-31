"use client";

import { motion } from "framer-motion";
import { StoreButton } from "@/components/ui/StoreButton";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  { n: "1", title: "Download the app", body: "Get Mansa free on the App Store or Google Play in seconds." },
  { n: "2", title: "Create your account", body: "Sign up and choose the African languages you work in." },
  {
    n: "3",
    title: "Start using Mansa",
    body: "Start using Mansa agent, chatting, translating, or transcribing.",
  },
];

export function AppSteps() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.6fr] lg:gap-16">
        {/* Left: heading + store badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <h2 className="max-w-xs text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Get Started on the app in Minutes
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <StoreButton store="appstore" variant="badge" />
            <StoreButton store="playstore" variant="badge" />
          </div>
        </motion.div>

        {/* Right: numbered step cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {steps.map((s) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="flex flex-col rounded-2xl bg-cream-dark p-7"
            >
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
