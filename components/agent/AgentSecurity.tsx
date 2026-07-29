"use client";

import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const cards = [
  {
    icon: "◈",
    title: "Private Agent Environment",
    body: "Every user receives their own private agent environment.",
  },
  {
    icon: "⚿",
    title: "Trusted Connected Accounts",
    body: "Only the services you choose to connect are accessible to your agent.",
  },
  {
    icon: "◷",
    title: "Approval Before Action",
    body: "Important actions require your confirmation before they're carried out.",
  },
];

export function AgentSecurity() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <Pill>Security</Pill>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Powerful, with you in control.
          </h2>
        </motion.div>

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
              className="rounded-2xl border border-maroon/20 bg-cream-dark/40 p-7 transition-shadow hover:shadow-soft"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-maroon/25 text-xl text-maroon">
                {c.icon}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted">{c.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
