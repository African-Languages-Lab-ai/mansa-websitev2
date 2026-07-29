"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { APP_URL, CONTACT_MAILTO } from "@/lib/links";
import { asset } from "@/lib/assets";

export function ImpactVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  const play = () => {
    setPlaying(true);
    videoRef.current?.play();
  };

  return (
    <section ref={ref} className="relative overflow-hidden py-24 md:py-32">
      {/* Illustrated golden savanna backdrop (parallax) */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute -inset-8">
        <Image src={asset("/assets/impact-bg.png")} alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-cream/25" />
      </motion.div>

      <div className="container-page relative flex flex-col items-center text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center"
        >
          <Image src={asset("/assets/logo-mark.png")} alt="" width={34} height={30} className="h-8 w-auto" />
          <h2 className="mt-5 max-w-2xl text-3xl font-bold tracking-tight text-ink drop-shadow-sm sm:text-4xl">
            How Mansa is Making Real Impact
          </h2>
          <p className="mt-3 max-w-xl text-lg text-ink/70">
            Mansa proves that powerful AI shouldn&apos;t leave out African languages.
          </p>
        </motion.div>

        {/* Video card */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-12 aspect-video w-full max-w-4xl overflow-hidden rounded-3xl bg-black shadow-2xl"
        >
          {/* #t forces the first frame to render as a poster without an extra asset */}
          <video
            ref={videoRef}
            src={asset("/assets/impact-video.mp4#t=0.5")}
            preload="metadata"
            playsInline
            controls={playing}
            className="h-full w-full object-cover"
            onPause={() => setPlaying(false)}
          />

          {!playing && (
            <>
              <div className="pointer-events-none absolute inset-0 bg-black/15" />
              <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1.5 text-xs font-medium text-offwhite backdrop-blur">
                Build Inclusive Technology
              </span>
              <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-md bg-white/90 px-2 py-1 text-[11px] font-semibold text-[#FF0000]">
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6Z" />
                </svg>
                YouTube
              </span>
              <button
                type="button"
                onClick={play}
                aria-label="Play the Mansa impact film"
                className="group absolute inset-0 grid place-items-center focus:outline-none"
              >
                <span className="grid h-20 w-20 place-items-center rounded-full bg-offwhite/95 text-espresso shadow-xl transition-all duration-200 group-hover:scale-105 group-hover:bg-white group-focus-visible:ring-4 group-focus-visible:ring-offwhite/60">
                  <svg viewBox="0 0 24 24" className="ml-1 h-8 w-8" fill="currentColor" aria-hidden>
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
              </button>
            </>
          )}
        </motion.div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button variant="filled" href={APP_URL}>Try Mansa</Button>
          <Button variant="outline" href={CONTACT_MAILTO}>Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
