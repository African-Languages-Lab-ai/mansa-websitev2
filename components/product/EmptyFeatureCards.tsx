"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Pill } from "@/components/ui/Pill";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

type Card = { title: string; body: string; img?: string };

type Props = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  cards: Card[];
  theme?: "light" | "dark";
  /** empty media panel style — matches where the UI will later be dropped in */
  panel?: "gold" | "surface";
  columns?: 2 | 3;
  /** soft glow behind the UI (used on dark sections) */
  glow?: boolean;
  /** aspect ratio of the media panel */
  mediaAspect?: string;
  /** how the UI fills the panel — "cover" fills edge-to-edge, "contain" letterboxes */
  fit?: "cover" | "contain";
};

/**
 * Feature section whose media panels are intentionally left empty (only the
 * background), ready for the product UIs to be added later.
 */
export function EmptyFeatureCards({
  eyebrow,
  heading,
  subheading,
  cards,
  theme = "light",
  panel = "gold",
  columns = 2,
  glow = false,
  mediaAspect = "aspect-[4/3]",
  fit = "contain",
}: Props) {
  const dark = theme === "dark";
  const imgClass =
    fit === "cover" ? "object-cover object-top" : "object-contain object-center p-4";
  const panelClass =
    panel === "gold"
      ? "bg-gradient-to-b from-[#E4C486] to-[#CDA45A]"
      : "border border-white/10 bg-white/[0.04]";
  const grid = columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <section className={dark ? "bg-espresso py-24 md:py-28" : "bg-cream py-24 md:py-28"}>
      <div className="container-page">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center"
        >
          {eyebrow && <Pill>{eyebrow}</Pill>}
          <h2
            className={`${eyebrow ? "mt-4" : ""} max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl ${
              dark ? "text-offwhite" : "text-ink"
            }`}
          >
            {heading}
          </h2>
          {subheading && (
            <p className={`mt-3 max-w-xl text-lg ${dark ? "text-offwhite/60" : "text-ink-muted"}`}>
              {subheading}
            </p>
          )}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className={`mt-14 grid grid-cols-1 gap-8 ${grid} lg:gap-10`}
        >
          {cards.map((c) => (
            <motion.div key={c.title} variants={fadeUp} className="flex flex-col">
              {/* Media panel — shows the product UI when provided, else empty */}
              <div className="group relative">
                {glow && (
                  <div className="pointer-events-none absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(232,177,92,0.4),transparent_70%)] blur-2xl" />
                )}
                <div
                  className={`relative ${mediaAspect} w-full overflow-hidden rounded-3xl transition-transform duration-300 ease-out group-hover:scale-[1.03] ${panelClass}`}
                >
                  {c.img && (
                    <Image
                      src={c.img}
                      alt=""
                      fill
                      className={imgClass}
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                  )}
                </div>
              </div>
              <h3 className={`mt-6 text-center text-xl font-semibold ${dark ? "text-offwhite" : "text-ink"}`}>
                {c.title}
              </h3>
              <p
                className={`mx-auto mt-2 max-w-md text-center text-base leading-relaxed ${
                  dark ? "text-offwhite/60" : "text-ink-muted"
                }`}
              >
                {c.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
