"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

export function AgentTestimonial() {
  return (
    <section className="bg-cream pb-8 md:pb-12">
      <div className="container-page">
        <motion.figure
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-4xl rounded-3xl bg-cream-dark/60 px-8 py-12 text-center md:px-16"
        >
          <blockquote className="text-lg leading-relaxed text-ink/80 md:text-xl">
            &ldquo;Mansa Agent has transformed how we support customers across multiple African
            markets. Instead of maintaining separate support teams for different languages, we now
            deploy one intelligent agent that understands our products, our policies, and our
            customers, delivering fast, localized support around the clock.&rdquo;
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold text-ink">
            Customer Success Team &middot; Base
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
