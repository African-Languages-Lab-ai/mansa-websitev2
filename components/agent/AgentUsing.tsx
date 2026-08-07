"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const content: Record<string, { title: string; body: string }[]> = {
  Individuals: [
    { title: "Manage your inbox", body: "Summarize unread emails, draft replies, and keep conversations moving." },
    { title: "Research faster", body: "Analyze websites, PDFs, and academic papers in minutes." },
    { title: "Stay organized", body: "Manage your calendar, remember preferences, and automate recurring tasks." },
    { title: "Break language barriers", body: "Translate messages seamlessly before sending across African languages." },
  ],
  Teams: [
    { title: "Localized support", body: "Deploy one agent that handles support across every language your customers speak." },
    { title: "Shared knowledge", body: "Give your team an assistant that knows your products, policies, and docs." },
    { title: "Automated reporting", body: "Schedule digests and briefs that keep everyone aligned without the busywork." },
    { title: "Governed access", body: "Control which services and data each agent can reach across your organization." },
  ],
};

const tabs = Object.keys(content);

export function AgentUsing() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <section className="bg-espresso py-24 md:py-28">
      <div className="container-page">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center text-3xl font-bold tracking-tight text-onbrand sm:text-4xl"
        >
          How people are using Mansa Agent
        </motion.h2>

        {/* Tabs */}
        <div className="mt-8 flex justify-center gap-2">
          {tabs.map((t) => {
            const on = t === tab;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                aria-pressed={on}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-onbrand ${
                  on ? "bg-cream-dark text-espresso" : "text-onbrand/70 hover:text-onbrand"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Cards */}
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
              {content[tab].map((c) => (
                <div key={c.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
                  <h3 className="text-lg font-semibold text-onbrand">{c.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-onbrand/90">{c.body}</p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
