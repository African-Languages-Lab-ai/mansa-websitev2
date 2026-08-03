"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { asset } from "@/lib/assets";

const features = [
  "Persistent memory",
  "Web research",
  "Email assistant",
  "Calendar management",
  "GitHub integration",
  "Recurring automations",
  "Long-term goals",
  "Multilingual by default",
];

export function MansaAgent() {
  return (
    <section className="relative overflow-hidden bg-espresso py-16 md:py-20">
      {/* Silhouette background (per reference) with overlays for legibility */}
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={asset("/assets/mansa-agent-bg.webp")}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso via-espresso/70 to-espresso/85" />
      </div>

      <div className="container-page relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left copy */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <Pill>Mansa Agent</Pill>
          <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight tracking-tight text-offwhite sm:text-4xl">
            An AI that doesn&apos;t just answer, it gets things done.
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-offwhite/70">
            Research the web, manage your email and calendar, work with GitHub, automate recurring
            tasks, remember your preferences, and act on your behalf, all from one intelligent
            assistant.
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-offwhite/85">
                <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-maroon text-[10px] text-offwhite">
                  ✓
                </span>
                <span className="text-base font-medium">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Button variant="light" size="default" href="/agent">
              Explore Mansa Agent
            </Button>
          </div>
        </motion.div>

        {/* Right mockup */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex justify-center lg:justify-end"
        >
          <div className="group w-full max-w-[300px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={asset("/assets/agent-section-ui-static.webp")}
              alt="Mansa Agent app interface"
              width={394}
              height={807}
              className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
