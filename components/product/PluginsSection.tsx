"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { APP_URL } from "@/lib/links";
import { asset } from "@/lib/assets";

const plugins = [
  {
    name: "Fact Checker",
    body: "Verify claims with live web evidence before you trust an answer.",
    color: "bg-blue-50 text-blue-600",
    icon: "🛡",
  },
  {
    name: "Ghana News Brief",
    body: "Get a quick, curated briefing on the day's Ghana headlines.",
    color: "bg-orange-50 text-orange-600",
    icon: "📰",
  },
  {
    name: "Study Helper",
    body: "Explain concepts step by step, tuned for how you learn best.",
    color: "bg-emerald-50 text-emerald-600",
    icon: "📖",
  },
];

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
            Install plugins to bring live web evidence, local news, and guided learning straight into
            your conversation, no extra apps required.
          </p>

          <ul className="mt-8 space-y-4">
            {plugins.map((p) => (
              <li key={p.name} className="flex items-start gap-4">
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-lg ${p.color}`}>
                  <span aria-hidden>{p.icon}</span>
                </span>
                <div>
                  <p className="font-semibold text-ink">{p.name}</p>
                  <p className="text-sm text-ink-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button variant="filled" size="default" href={APP_URL}>
              Explore Plugins
            </Button>
          </div>
        </motion.div>

        {/* Right: plugins UI */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative flex justify-center overflow-hidden rounded-3xl bg-gradient-to-b from-[#E4C486] to-[#CDA45A] p-6 md:p-8"
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
