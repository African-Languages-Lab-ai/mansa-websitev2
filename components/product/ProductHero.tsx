"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/links";

type ProductHeroProps = {
  bgSrc: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  cta: string;
  /** object-position for the background image */
  objectPosition?: string;
};

export function ProductHero({ bgSrc, eyebrow, title, subtitle, cta, objectPosition = "center" }: ProductHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section ref={ref} className="relative flex min-h-[560px] items-center overflow-hidden bg-espresso pt-[72px]">
      {/* Parallax background */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute -inset-x-0 -bottom-24 -top-0">
        <Image src={bgSrc} alt="" fill priority className="object-cover" style={{ objectPosition }} sizes="100vw" />
        <div className="absolute inset-0 bg-espresso/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-espresso to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container-page relative flex flex-col items-center py-24 text-center md:py-28"
      >
        {eyebrow && (
          <span className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-offwhite/80">
            {eyebrow}
          </span>
        )}
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-offwhite drop-shadow sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-lg font-medium text-offwhite/90 drop-shadow">
          {subtitle}
        </p>
        <div className="mt-8">
          <Button variant="light" size="lg" href={APP_URL}>
            {cta}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
