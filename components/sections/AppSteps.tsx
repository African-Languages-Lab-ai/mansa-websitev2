"use client";

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

/** Dashed curved connector between two steps (desktop only). */
function StepArrow({ variant }: { variant: "hump" | "valley" }) {
  const d =
    variant === "hump"
      ? "M4 52 C 55 8, 145 8, 194 44"
      : "M4 36 C 55 72, 145 72, 194 28";
  const head =
    variant === "hump"
      ? "M185 34 L195 45 L183 47"
      : "M183 18 L195 29 L184 32";
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      className="hidden h-20 w-full flex-1 text-ink/30 lg:block"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d={d}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray="2 8"
      />
      <path
        d={head}
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
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
    body: "Start using Mansa agent, chatting, translating, or transcribing.",
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
            Get Started on the app in Minutes
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
          className="mt-16 flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-4"
        >
          {steps.map((s, i) => (
            <div key={s.title} className="contents">
              <motion.div
                variants={fadeUp}
                className="flex w-full max-w-xs flex-col items-center text-center lg:flex-1"
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

              {/* Arrow between cards, aligned with the icon row */}
              {i < steps.length - 1 && (
                <motion.div
                  variants={fadeUp}
                  className="flex flex-1 items-start pt-6"
                >
                  <StepArrow variant={i === 0 ? "hump" : "valley"} />
                </motion.div>
              )}
            </div>
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
