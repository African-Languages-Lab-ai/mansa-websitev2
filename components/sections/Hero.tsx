"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { LogoMarquee } from "@/components/LogoMarquee";
import { APP_URL } from "@/lib/links";
import { asset } from "@/lib/assets";

const inputPills = [
  { icon: "◎", label: "Transcribe" },
  { icon: "⇄", label: "Translate" },
  { icon: "✦", label: "Agent" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background art drifts slower (~0.3x) than the foreground panel.
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const panelY = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden bg-cream pt-[72px]">
      <div className="container-page grid grid-cols-1 items-center gap-12 py-16 md:py-24 lg:grid-cols-2 lg:gap-10">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            The AI built for African languages.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
            Chat, translate, transcribe, and work across 30+ African languages with AI
            designed to understand the continent.
          </p>

          {/* Search-bar-style input */}
          <div className="mt-8 max-w-md">
            <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 p-2 pl-5 shadow-soft backdrop-blur">
              <input
                type="text"
                placeholder="How can I help you today?"
                className="min-w-0 flex-1 bg-transparent text-base text-ink placeholder:text-ink-muted/70 focus:outline-none"
                aria-label="Ask Mansa"
              />
              <Button size="default" className="shrink-0" href={APP_URL}>
                Ask Mansa <ArrowGlyph />
              </Button>
            </div>

            {/* inline pills */}
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {inputPills.map((p) => (
                <button
                  key={p.label}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-cream-dark/60 px-3.5 py-1.5 text-sm font-medium text-ink/75 transition-all hover:bg-cream-dark hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                >
                  <span aria-hidden className="text-maroon">
                    {p.icon}
                  </span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: maroon panel with parallax art + floating mockups */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={reduce ? undefined : { y: panelY }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-maroon shadow-soft">
            {/* Parallax background art */}
            <motion.div style={reduce ? undefined : { y: bgY }} className="absolute -inset-6">
              <Image
                src={asset("/assets/hero-bg.webp")}
                alt="Illustrated African landscape at sunset"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-dark/30 via-transparent to-transparent" />
            </motion.div>

            {/* Floating app UI */}
            <Image
              src={asset("/assets/hero-section-ui.webp")}
              alt="Mansa app interface"
              width={398}
              height={799}
              unoptimized
              className="absolute left-1/2 top-1/2 z-10 h-auto w-[48%] -translate-x-1/2 -translate-y-1/2 rounded-2xl shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Trust bar: label in the gutter, marquee full-bleed to the screen edges */}
      <div className="pb-16 md:pb-24">
        <p className="container-page mb-8 text-center text-sm font-medium uppercase tracking-wide text-ink-muted">
          Trusted by enterprise organisations
        </p>
        <LogoMarquee />
      </div>
    </section>
  );
}
