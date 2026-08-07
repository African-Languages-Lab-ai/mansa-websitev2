"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { asset } from "@/lib/assets";

export function PluginsSection() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left copy */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <Pill>Plugins</Pill>
          <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Extend Mansa with plugins built for how you work.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
            Plugins are available to help you fact-check claims with live web evidence, catch up on
            local news, and study smarter, right inside your conversation, no extra apps required.
          </p>
        </motion.div>

        {/* Right: plugins UI */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative flex justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#E4C486] to-[#CDA45A] p-6 md:p-8 dark:from-[#E4C486]/25 dark:to-[#CDA45A]/25"
        >
          <div className="w-full max-w-[300px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={asset("/assets/agent-plugins-ui.webp")}
              alt="Mansa plugins interface"
              width={1170}
              height={1569}
              className="h-auto w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
