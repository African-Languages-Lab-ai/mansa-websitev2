"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { CONTACT_MAILTO } from "@/lib/links";
import { asset } from "@/lib/assets";

export function EnterpriseCTA() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-espresso py-20 md:py-24">
      {/* Full-bleed backdrop (parallax) */}
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute -inset-8">
        <Image src={asset("/assets/enterprise-cta-bg.webp")} alt="" fill className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-espresso/60" />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-page relative flex flex-col items-center text-center"
      >
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-onbrand sm:text-4xl">
          Bring African AI into your products.
        </h2>
        <p className="mt-3 max-w-xl text-lg text-onbrand/70">
          Integrate chat, translation, transcription, speech, and AI agents into your products with
          enterprise-ready APIs built for African languages.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="filled" href={CONTACT_MAILTO}>Contact Us</Button>
          <Button variant="outline" onDark href="/docs">
            Check Our API Documentation <ArrowGlyph />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
