"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/links";

type Props = {
  bgSrc: string;
  title: string;
  cta: string;
  objectPosition?: string;
};

/** Sunset-style parallax band with a single plain button. */
export function CtaBand({ bgSrc, title, cta, objectPosition = "center" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute -inset-8">
        <Image src={bgSrc} alt="" fill className="object-cover" style={{ objectPosition }} sizes="100vw" />
        <div className="absolute inset-0 bg-espresso/20" />
      </motion.div>

      <div className="container-page relative flex flex-col items-center py-20 text-center md:py-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-onbrand drop-shadow sm:text-4xl"
        >
          {title}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7"
        >
          <Button variant="light" size="lg" href={APP_URL}>
            {cta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
