"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { APP_URL } from "@/lib/links";

const prompts = [
  { tag: "Support", q: "A customer in Lagos is asking why their order hasn't shipped, in Yoruba. Help me write a polite, on-brand reply." },
  { tag: "Marketing", q: "Translate this product launch email into Swahili, Hausa, and Igbo while keeping the tone upbeat and on-brand." },
  { tag: "Product", q: "Review this onboarding screen and flag any copy that won't translate naturally into Twi." },
  { tag: "Research", q: "Summarize these Amharic customer interviews in English and pull out the top three recurring complaints." },
  { tag: "Sales", q: "How do I say \"thank you for your business, we look forward to working with you\" politely in Xhosa?" },
  { tag: "Operations", q: "Turn these mixed English and Hausa meeting notes into a clear action list for the team." },
];

const topRow = prompts.slice(0, 3);
const bottomRow = prompts.slice(3);

function PromptCard({ tag, q, ariaHidden = false }: { tag: string; q: string; ariaHidden?: boolean }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={ariaHidden ? -1 : undefined}
      aria-hidden={ariaHidden}
      className="group flex w-[340px] shrink-0 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/20 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-1"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-onbrand/50">{tag}</span>
        <span aria-hidden className="text-onbrand/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-onbrand/70">
          ↗
        </span>
      </div>
      <p className="mt-3 text-base leading-relaxed text-onbrand/85">{q}</p>
    </a>
  );
}

function MarqueeRow({ items, reverse = false }: { items: typeof prompts; reverse?: boolean }) {
  const anim = reverse
    ? "[animation:marquee_28s_linear_infinite_reverse]"
    : "[animation:marquee_28s_linear_infinite]";

  return (
    <div className="group relative w-full overflow-hidden">
      <div className={`flex w-max gap-6 ${anim} group-hover:[animation-play-state:paused]`}>
        {items.map((p) => (
          <PromptCard key={p.tag} tag={p.tag} q={p.q} />
        ))}
        {items.map((p) => (
          <PromptCard key={`${p.tag}-dup`} tag={p.tag} q={p.q} ariaHidden />
        ))}
      </div>
    </div>
  );
}

export function AiWhatAsk() {
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
          What will you ask?
        </motion.h2>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="marquee-mask mt-12 flex flex-col gap-6"
      >
        {/* base "marquee" keyframes drift the track left, so the row that
            should visually scroll right needs the reversed playback */}
        <MarqueeRow items={topRow} reverse />
        <MarqueeRow items={bottomRow} />
      </motion.div>
    </section>
  );
}
