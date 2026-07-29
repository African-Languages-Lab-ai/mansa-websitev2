"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { APP_URL } from "@/lib/links";
import { asset } from "@/lib/assets";

type Tab = {
  title: string;
  body: string;
  /** provided screenshot (first tab); others use a generated card */
  img?: string;
  prompt: string;
};

const tabs: Record<string, Tab> = {
  Students: {
    title: "Learn faster with an AI study partner.",
    body: "Get explanations, summarize notes, prepare for exams, solve assignments, and understand complex topics in simple language.",
    img: asset("/assets/ai-oneforevery.webp"),
    prompt: "Explain how the law of aerodynamics works in simple terms, like I'm new to it.",
  },
  Professionals: {
    title: "Get more done at work.",
    body: "Draft emails, summarize documents, prepare reports, and think through decisions with an assistant that understands your context.",
    prompt: "Summarize this contract and flag any unusual clauses I should review.",
  },
  Developers: {
    title: "Build faster with an AI pair.",
    body: "Write, explain, and debug code, scaffold projects, and explore APIs in plain language.",
    prompt: "Write a Python function to parse this CSV and handle missing values.",
  },
  Creators: {
    title: "Create without the blank page.",
    body: "Brainstorm ideas, draft scripts and captions, and shape content across formats and languages.",
    prompt: "Draft five caption ideas for a product launch in a warm, playful tone.",
  },
  "Multilingual Users": {
    title: "Work in your language.",
    body: "Chat, write, and translate naturally across English and 30+ African languages.",
    prompt: 'How do I say "thank you for your patience" politely in Swahili?',
  },
};

const tabNames = Object.keys(tabs);

/** Generated Mansa chat card matching the provided Students screenshot. */
function MansaChatCard({ prompt }: { prompt: string }) {
  return (
    <div className="mx-auto w-full max-w-[300px] rounded-[2rem] bg-white p-5 shadow-xl">
      <div className="flex items-center justify-between text-ink-muted">
        <span aria-hidden>≡</span>
        <span className="text-sm font-medium text-ink">mansa</span>
        <span aria-hidden>✎</span>
      </div>
      <div className="mt-6 flex flex-col items-center text-center">
        <Image src={asset("/assets/logo-mark.webp")} alt="" width={44} height={38} className="h-10 w-auto" />
        <p className="mt-3 text-xl font-bold text-ink">Hi, Anita</p>
        <p className="mt-1 text-sm text-ink-muted">Start with a thought, question, or task.</p>
      </div>
      <div className="mt-5 flex flex-wrap justify-center gap-1.5 text-[11px] font-medium">
        <span className="rounded-full bg-amber-50 px-2 py-1 text-amber-700">Explain a concept</span>
        <span className="rounded-full bg-blue-50 px-2 py-1 text-blue-700">Help me write</span>
        <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">Translate</span>
      </div>
      <div className="mt-4 flex items-start gap-2 rounded-2xl border border-ink/10 bg-cream/50 p-3">
        <span aria-hidden className="text-ink-muted">+</span>
        <p className="flex-1 text-[13px] leading-snug text-ink">{prompt}</p>
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-ink text-[11px] text-cream">↑</span>
      </div>
      <p className="mt-3 text-center text-[10px] text-ink-muted">
        Mansa AI can make mistakes. Please double-check responses.
      </p>
    </div>
  );
}

export function AiOneForEvery() {
  const [tab, setTab] = useState(tabNames[0]);
  const active = tabs[tab];

  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">One AI for every task.</h2>
          <p className="mt-3 max-w-2xl text-lg text-ink-muted">
            Whether you&apos;re writing, coding, brainstorming, learning, or communicating, Mansa AI
            brings everything together in one conversation.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {tabNames.map((t) => {
            const on = t === tab;
            return (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                aria-pressed={on}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon ${
                  on ? "bg-cream-dark text-ink shadow-sm" : "text-ink/60 hover:text-ink"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>

        <div className="mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div>
                <h3 className="max-w-md text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-muted">{active.body}</p>
                <div className="mt-6">
                  <Button variant="outline" href={APP_URL}>Try Mansa</Button>
                </div>
              </div>

              {/* Media panel — provided UI for the first tab, generated card otherwise */}
              <div className="group flex items-center justify-center rounded-3xl bg-gradient-to-b from-[#E4C486] to-[#CDA45A] p-6 transition-transform duration-300 ease-out hover:scale-[1.03]">
                {active.img ? (
                  <Image
                    src={active.img}
                    alt=""
                    width={375}
                    height={432}
                    className="mx-auto w-full max-w-[300px] rounded-[2rem]"
                  />
                ) : (
                  <MansaChatCard prompt={active.prompt} />
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center">
          <Button variant="outline" href={APP_URL}>Get started with Mansa</Button>
        </div>
      </div>
    </section>
  );
}
