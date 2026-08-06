"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { LogoMarquee } from "@/components/LogoMarquee";
import { TypewriterTagline } from "@/components/sections/TypewriterTagline";
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

  // Panel drifts slightly on scroll.
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
          <TypewriterTagline />
          <h1 className="max-w-xl text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Meet Africa&apos;s AI Thinking Partner
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-muted">
            Think clearly and ask freely with AI agents, chat, translation, transcription,
            and speech in 30+ African languages, all in one place with Mansa.
          </p>

          {/* Search-bar-style input */}
          <div className="mt-8 max-w-md">
            <div className="flex items-center gap-2 rounded-full border border-ink/10 bg-offwhite/80 p-2 pl-5 shadow-soft backdrop-blur">
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
                  <span aria-hidden className="text-accent">
                    {p.icon}
                  </span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: rounded panel showing just the landscape art, gently animated */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={reduce ? undefined : { y: panelY }}
          className="relative"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            {/* Animated hero (GIF), no frame so it blends into the page
                background. The GIF is 16:9 inside a 4:3 panel, so object-cover
                crops the sides in — biased slightly up and left so the star mark
                near the bottom-right corner is cropped out. */}
            <Image
              src={asset("/assets/hero-section.gif")}
              alt="Mansa hero animation"
              fill
              priority
              unoptimized
              className="scale-[1.06] object-cover object-[45%_44%]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              // Radial feather: opaque around the centered coin, fading to
              // transparent toward the edges so the GIF's rectangular frame and
              // darker corner vignette dissolve into the page background.
              style={{
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 64% at 50% 46%, #000 34%, transparent 82%)",
                maskImage:
                  "radial-gradient(ellipse 60% 64% at 50% 46%, #000 34%, transparent 82%)",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Trust bar: hidden for now per request — may come back later, keep as-is. */}
      {/* <div className="pb-16 md:pb-24">
        <p className="container-page mb-8 text-center text-sm font-medium uppercase tracking-wide text-ink-muted">
          Trusted by enterprise organisations
        </p>
        <LogoMarquee />
      </div> */}
    </section>
  );
}
