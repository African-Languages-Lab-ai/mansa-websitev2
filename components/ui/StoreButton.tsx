"use client";

import { motion } from "framer-motion";
import { APP_URL } from "@/lib/links";

type StoreButtonProps = {
  store: "appstore" | "playstore";
  variant?: "filled" | "outline" | "badge";
  /** dark surface? affects outline colors */
  onDark?: boolean;
  className?: string;
  /** link target; defaults to the Mansa web app */
  href?: string;
};

function AppleIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function PlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden>
      <path fill="#EA4335" d="M325 234 90 12c-8-8-19-12-30-10l253 253z" />
      <path fill="#00A0FF" d="M60 2C52 6 47 15 47 27v458c0 12 5 21 13 25l248-248z" />
      <path fill="#FFBD00" d="M325 234 78 481l255-142c19-10 19-38 0-49z" opacity="0" />
      <path fill="#34A853" d="M60 502c8 4 18 3 30-3l235-133-77-77z" />
      <path fill="#FBBC04" d="M333 253 256 256l-8 8 77 77 47-26c22-12 22-38 0-50z" />
    </svg>
  );
}

export function StoreButton({ store, variant = "filled", onDark = true, className = "", href = APP_URL }: StoreButtonProps) {
  const isApp = store === "appstore";
  const label = isApp ? "App Store" : "Play Store";
  const sub = isApp ? "Download on the" : "Get it on";

  const filled = "bg-offwhite text-espresso hover:bg-white focus-visible:ring-offwhite";
  const outline = onDark
    ? "border border-offwhite/40 text-offwhite hover:bg-offwhite hover:text-espresso focus-visible:ring-offwhite"
    : "border border-ink/25 text-ink hover:bg-ink hover:text-cream focus-visible:ring-ink";
  // Classic black store badge (Get Started section)
  const badge = "rounded-xl bg-black text-white hover:bg-black/85 focus-visible:ring-black";

  const isBadge = variant === "badge";
  const shape = isBadge ? "rounded-xl px-5 py-2.5" : "rounded-full px-6 py-3";
  const variantClass = variant === "filled" ? filled : isBadge ? badge : outline;

  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={`inline-flex cursor-pointer items-center gap-2.5 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${shape} ${variantClass} ${className}`}
    >
      {isApp ? (
        <AppleIcon className="h-6 w-6" />
      ) : (
        <PlayIcon className="h-6 w-6" />
      )}
      <span className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-normal opacity-80">{sub}</span>
        <span className="text-sm font-semibold">{label}</span>
      </span>
    </motion.a>
  );
}
