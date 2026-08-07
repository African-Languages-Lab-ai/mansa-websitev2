"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { APP_URL } from "@/lib/links";

type SunsetBandProps = {
  bgSrc: string;
  title: string;
  /** Deprecated: "Download the app" label — no longer rendered while only the
      web app is live. Kept optional so callers compile. */
  subtitle?: string;
  /** Deprecated: store buttons are hidden for now (web only). Kept optional. */
  buttons?: ("appstore" | "playstore")[];
  className?: string;
};

export function SunsetBand({ bgSrc, title, className = "" }: SunsetBandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Mountain/background layer drifts slower than the text on top. Kept subtle;
  // the image is given overflow headroom (-inset-8) instead of a blurry scale-up.
  const bgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax background — rendered at native sharpness */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute -inset-8">
        <Image src={bgSrc} alt="" fill className="object-cover" sizes="100vw" loading="lazy" />
      </motion.div>

      {/* Content */}
      <div className="container-page relative flex flex-col items-center py-16 text-center md:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-onbrand drop-shadow-sm sm:text-4xl lg:text-[2.75rem]"
        >
          {title}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 flex justify-center"
        >
          <Button size="lg" variant="light" href={APP_URL}>
            Try Mansa <ArrowGlyph />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
