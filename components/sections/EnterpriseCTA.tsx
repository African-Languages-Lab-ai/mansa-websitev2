"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { CONTACT_MAILTO, ALL_LAB_PORTAL } from "@/lib/links";

export function EnterpriseCTA() {
  return (
    <section className="relative overflow-hidden bg-espresso py-20 md:py-24">
      {/* Full-bleed backdrop */}
      <div className="absolute inset-0">
        <Image src="/assets/enterprise-cta-bg.png" alt="" fill className="object-cover opacity-40" sizes="100vw" />
        <div className="absolute inset-0 bg-espresso/60" />
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="container-page relative flex flex-col items-center text-center"
      >
        <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-offwhite sm:text-4xl">
          Want to Integrate our API&apos;s to your Enterprise?
        </h2>
        <p className="mt-3 max-w-xl text-lg text-offwhite/70">
          Bring African-language AI into your products with a single, well-documented API.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button variant="filled" href={CONTACT_MAILTO}>Contact Us</Button>
          <Button variant="outline" onDark href={ALL_LAB_PORTAL}>
            Check Our API Documentation <ArrowGlyph />
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
