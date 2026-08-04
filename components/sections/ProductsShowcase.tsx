"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { APP_URL } from "@/lib/links";
import { asset } from "@/lib/assets";

// Landscape art shown behind the UI, swapped with the open accordion item.
const productImages: Record<string, string> = {
  agent: asset("/assets/product-agent.webp"),
  ai: asset("/assets/product-ai.webp"),
  translate: asset("/assets/product-translate.webp"),
  transcribe: asset("/assets/product-transcribe.webp"),
  interpret: asset("/assets/product-asr.webp"),
};

// The product's app UI floated over the art. Width/height are each image's
// native size: mismatched values here stretch the screenshot off its real
// aspect ratio, which reads as blur.
const productUIs: Record<string, { src: string; width: number; height: number } | null> = {
  agent: { src: asset("/assets/agent-section-ui-static.webp"), width: 394, height: 807 },
  ai: { src: asset("/assets/ai-section-ui.webp"), width: 394, height: 795 },
  translate: { src: asset("/assets/translate-section-ui.webp"), width: 394, height: 793 },
  transcribe: { src: asset("/assets/transcribe-section-ui.webp"), width: 394, height: 798 },
  interpret: { src: asset("/assets/asr-section-ui.webp"), width: 394, height: 786 },
};

function Body({ text, href }: { text: string; href: string }) {
  return (
    <div>
      <p>{text}</p>
      <Link
        href={href}
        className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sunset-1 transition-colors hover:text-offwhite focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-1 rounded"
      >
        Learn More →
      </Link>
    </div>
  );
}

const items: AccordionItem[] = [
  {
    id: "agent",
    title: "Mansa Agent",
    content: (
      <Body
        href="/agent"
        text="An autonomous assistant that takes action across your tools. Research, manage email, calendars, and more."
      />
    ),
  },
  {
    id: "ai",
    title: "Mansa AI",
    content: (
      <Body
        href="/ai"
        text="Your everyday AI assistant for learning, writing, brainstorming, coding, and answering questions in English and 30+ African languages."
      />
    ),
  },
  {
    id: "translate",
    title: "Mansa Translate",
    content: (
      <Body
        href="/translate"
        text="Fast, natural translation across 30+ African languages, tuned for local nuance and context."
      />
    ),
  },
  {
    id: "transcribe",
    title: "Mansa Transcribe",
    content: (
      <Body
        href="/transcribe"
        text="Turn speech from English and 30+ African languages into accurate text, recognizing African accents and dialects."
      />
    ),
  },
  {
    id: "interpret",
    title: "Mansa Interpret",
    content: (
      <Body
        href="/interpret"
        text="Production-grade text-to-speech for Hausa, Igbo, Yoruba, Twi and Ewe, with natural African accents and dialects."
      />
    ),
  },
];

export function ProductsShowcase() {
  const [activeId, setActiveId] = useState("ai");
  const activeImage = productImages[activeId] ?? productImages.ai;
  const activeUI = productUIs[activeId] ?? null;

  return (
    <section id="products" className="bg-cream py-14 md:py-20">
      <div className="container-page">
       <div className="rounded-3xl bg-espresso px-6 py-16 sm:px-10 md:px-14 md:py-20">
        {/* Heading block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <Pill onDark>Products</Pill>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-offwhite sm:text-4xl">
            Everything you need to work across African languages
          </h2>
          <p className="mt-3 max-w-xl text-lg text-offwhite/60">
            Mansa provides the AI infrastructure designed specifically for Africa.
          </p>
        </motion.div>

        {/* Two-column */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-2"
        >
          <Accordion
            items={items}
            defaultOpenId="ai"
            onDark
            iconStyle="plus"
            onOpenChange={(id) => id && setActiveId(id)}
          />

          {/* Product art + floating app UI, swapped with the open accordion item */}
          <div className="group relative aspect-square w-full overflow-hidden rounded-3xl bg-cream-dark">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeId}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={activeImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-espresso/25" />

                {activeUI ? (
                  <Image
                    src={activeUI.src}
                    alt=""
                    width={activeUI.width}
                    height={activeUI.height}
                    className="absolute left-1/2 top-1/2 h-auto w-[52%] max-w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl transition-transform duration-300 ease-out group-hover:scale-105"
                  />
                ) : (
                  <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40 px-5 py-2 text-sm font-semibold text-offwhite backdrop-blur">
                    Coming soon
                  </span>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Button variant="light" size="default" href={APP_URL}>
            Try Mansa
          </Button>
        </div>
       </div>
      </div>
    </section>
  );
}
