"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { APP_URL } from "@/lib/links";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { asset } from "@/lib/assets";

export function AgentMeet() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left copy */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <Pill>Meet Mansa Agent</Pill>
          <h2 className="mt-4 max-w-lg text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            The autonomous AI assistant that thinks, remembers, and gets work done.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-muted">
            Mansa Agent goes beyond conversation. Connect your tools, automate repetitive work,
            conduct deep research, write code, and complete tasks on your behalf from one intelligent
            assistant.
          </p>
          <div className="mt-8">
            <Button variant="filled" size="default" href={APP_URL}>
              Explore Mansa Agent
            </Button>
          </div>
        </motion.div>

        {/* Right: agent card on a warm panel */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative flex justify-center overflow-hidden rounded-3xl p-6 md:p-8"
        >
          <Image
            src={asset("/assets/mansa-agent-bg.webp")}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-espresso/30" />
          <div className="group relative w-full max-w-[280px] overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src={asset("/assets/agent-section-ui.webp")}
              alt="Mansa Agent app interface"
              width={394}
              height={807}
              unoptimized
              className="h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
