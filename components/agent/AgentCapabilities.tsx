"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { asset } from "@/lib/assets";

const caps = [
  {
    img: asset("/assets/agent-cap-google.webp"),
    title: "Connect your Google Workspace",
    body: "Connect your Google Workspace to manage emails, schedule meetings, and create or edit documents with AI.",
  },
  {
    img: asset("/assets/agent-cap-github.webp"),
    title: "Collaborate on GitHub",
    body: "Review repositories, create issues, manage pull requests, check CI status, and help you ship code faster.",
  },
  {
    img: asset("/assets/agent-cap-research.webp"),
    title: "Research the Web",
    body: "Search the web, analyze webpages, extract information from PDFs, and explore academic papers with cited results.",
  },
  {
    img: asset("/assets/agent-cap-automate.webp"),
    title: "Automate Repetitive Work",
    body: "Schedule recurring tasks like daily inbox summaries, GitHub digests, or weekly reports that continue running even when the app is closed.",
  },
  {
    img: asset("/assets/agent-cap-goals.webp"),
    title: "Complete Long-Term Goals",
    body: "Assign ongoing objectives and let Mansa Agent keep working until the task is complete.",
  },
  {
    img: asset("/assets/agent-cap-teach.webp"),
    title: "Teach Your Agent",
    body: "Upload PDFs, documents, spreadsheets, or images and ask questions about their contents.",
  },
];

export function AgentCapabilities() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          <Pill>Capabilities</Pill>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Mansa Agent streamlines workflows across multiple areas
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2"
        >
          {caps.map((c) => (
            <motion.div key={c.title} variants={fadeUp} className="flex flex-col">
              {/* Gold panel holding the full app screenshot (not cropped) */}
              <div className="group relative aspect-[13/11] w-full overflow-hidden rounded-3xl bg-gradient-to-b from-[#E4C486] to-[#CDA45A]">
                <Image
                  src={c.img}
                  alt=""
                  fill
                  className="object-contain object-top p-4 transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 560px"
                />
              </div>
              <h3 className="mt-6 text-center text-xl font-semibold text-ink">{c.title}</h3>
              <p className="mx-auto mt-2 max-w-md text-center text-base leading-relaxed text-ink-muted">
                {c.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
