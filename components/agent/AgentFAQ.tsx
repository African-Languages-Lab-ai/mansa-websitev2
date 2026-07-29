"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const faqs = [
  {
    q: "What is Mansa Agent?",
    a: "Mansa Agent is an autonomous AI assistant that connects to your tools to research, write, schedule, and complete tasks on your behalf across African languages.",
  },
  {
    q: "How does Mansa Agent keep my organization's data secure?",
    a: "Data is encrypted in transit and at rest, each user gets a private agent environment, and the agent only accesses the services you explicitly connect.",
  },
  {
    q: "What admin controls are available for the AI assistant?",
    a: "Admins can manage connected services, set approval requirements for sensitive actions, and control which capabilities are available to each user.",
  },
  {
    q: "How do I deploy Mansa Agent across my organization?",
    a: "Invite your team, connect your shared workspaces, and roll out access by role. Onboarding takes minutes and we support SSO for larger organizations.",
  },
  {
    q: "Can I monitor how employees are using Mansa Agent and its AI features?",
    a: "Yes. Usage dashboards give visibility into activity and connected accounts while respecting user privacy and your data policies.",
  },
];

export function AgentFAQ() {
  const [openId, setOpenId] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-espresso py-24 md:py-28">
      <div className="absolute inset-0">
        <Image src="/assets/agent-faq-bg.png" alt="" fill className="object-cover object-top" sizes="100vw" />
        <div className="absolute inset-0 bg-maroon-dark/50" />
        {/* fade the bottom into the section so it doesn't clash with the CTA below */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-espresso to-transparent" />
      </div>

      <div className="container-page relative grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_1.6fr] lg:gap-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-3xl font-bold tracking-tight text-offwhite sm:text-4xl"
        >
          FAQs
        </motion.h2>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-3"
        >
          {faqs.map((f, i) => {
            const open = openId === i;
            return (
              <div key={f.q} className="overflow-hidden rounded-2xl border border-white/10 bg-black/25 backdrop-blur-sm">
                <button
                  type="button"
                  onClick={() => setOpenId(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-offwhite"
                >
                  <span className="text-base font-medium text-offwhite">{f.q}</span>
                  <span aria-hidden className="grid h-6 w-6 shrink-0 place-items-center text-lg text-offwhite/80">
                    {open ? "−" : "+"}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-sm leading-relaxed text-offwhite/70">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
