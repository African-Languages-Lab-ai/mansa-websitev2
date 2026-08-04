"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/links";
import { asset } from "@/lib/assets";

export function AgentHero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section ref={ref} className="relative flex min-h-[600px] items-center overflow-hidden bg-espresso pt-[72px]">
      {/* Silhouette + glowing staff backdrop (parallax) */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute -inset-8">
        <Image
          src={asset("/assets/mansa-agent-bg.webp")}
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-espresso/60 to-transparent" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container-page relative flex flex-col items-center py-24 text-center md:py-28"
      >
        <h1 className="text-4xl font-bold tracking-tight text-offwhite drop-shadow sm:text-5xl lg:text-6xl">
          Mansa Agent
        </h1>
        <p className="mt-5 max-w-xl text-lg font-medium text-offwhite/90 drop-shadow sm:text-xl">
          Your autonomous AI assistant that remembers, researches, and gets work done.
        </p>
        <div className="mt-8">
          <Button variant="light" size="lg" href={APP_URL}>
            Get started
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
