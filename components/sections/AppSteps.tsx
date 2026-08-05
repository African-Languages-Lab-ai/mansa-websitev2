"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { StoreButton } from "@/components/ui/StoreButton";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

/** Stroke icons drawn to match the site's simple glyph style. */
function DownloadIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden
    >
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  );
}

function AccountIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
      aria-hidden
    >
      <path d="M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-5.5A8 8 0 1 1 21 12z" />
    </svg>
  );
}

/**
 * Dashed curved connector between two steps (desktop only).
 * The arrowhead is a marker with orient="auto" so it always points along the
 * curve, and the SVG keeps its aspect ratio (no stretch) so nothing distorts.
 */
function StepArrow({ variant }: { variant: "hump" | "valley" }) {
  const id = `appsteps-arrow-${variant}`;
  const d =
    variant === "hump"
      ? "M2 44 C 46 6, 114 6, 156 40"
      : "M2 30 C 46 60, 114 60, 156 34";
  return (
    <svg
      viewBox="0 0 160 64"
      fill="none"
      className="h-auto w-full text-ink/35"
      aria-hidden
    >
      <defs>
        <marker
          id={id}
          viewBox="0 0 8 8"
          markerWidth={7}
          markerHeight={7}
          refX={6}
          refY={4}
          orient="auto"
        >
          <path
            d="M1 1 L6 4 L1 7"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="2 7"
        markerEnd={`url(#${id})`}
      />
    </svg>
  );
}

const steps = [
  {
    icon: <DownloadIcon />,
    title: "Download the app",
    body: "Get Mansa free on the App Store or Google Play in seconds.",
  },
  {
    icon: <AccountIcon />,
    title: "Create your account",
    body: "Sign up and choose the African languages you work in.",
  },
  {
    icon: <ChatIcon />,
    title: "Start using Mansa",
    body: "Start chatting, automating, translating, transcribing, or generating speech with Mansa.",
  },
];

export function AppSteps() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Start thinking with Mansa in minutes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted sm:text-lg">
            Go from download to your first conversation in three simple steps.
          </p>
        </motion.div>

        {/* Steps with connecting arrows */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:justify-center lg:gap-2"
        >
          {steps.map((s, i) => (
            <Fragment key={s.title}>
              <motion.div
                variants={fadeUp}
                className="flex w-full max-w-xs flex-col items-center text-center lg:w-64 lg:max-w-none lg:flex-none"
              >
                {/* Icon card: light rounded tile with a sunset glyph inside */}
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-offwhite shadow-soft">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sunset-1 text-white">
                    {s.icon}
                  </div>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-sunset-2">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {s.body}
                </p>
              </motion.div>

              {/* Arrow cell — h-24 matches the icon tile so the curve centers
                  on the icon row; hidden on mobile where steps stack. */}
              {i < steps.length - 1 && (
                <div
                  aria-hidden
                  className="hidden h-24 flex-1 items-center px-2 lg:flex"
                >
                  <StepArrow variant={i === 0 ? "hump" : "valley"} />
                </div>
              )}
            </Fragment>
          ))}
        </motion.div>

        {/* Store badges */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 flex flex-wrap justify-center gap-3"
        >
          <StoreButton store="appstore" variant="badge" />
          <StoreButton store="playstore" variant="badge" />
        </motion.div>
      </div>
    </section>
  );
}
