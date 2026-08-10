"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const KNOB_TRAVEL = 22; // px the knob slides from its light-mode resting position

function SunIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

function MoonIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>
  );
}

/**
 * Dark-mode toggle rendered as a sliding pill: sun and moon sit at either end
 * of the track, and a knob slides over whichever is active, picking it up in
 * the brand accent color (maroon in light mode, gold in dark). The initial
 * class is set before paint by the inline script in app/layout.tsx (no
 * flash); this just reads the current state on mount and flips it,
 * persisting the choice to localStorage.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* ignore storage errors */
    }
  }

  const isDark = mounted && dark;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className={`relative inline-flex h-7 w-[52px] shrink-0 items-center justify-between rounded-full border border-ink/10 bg-black/5 px-1.5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2 focus-visible:ring-offset-transparent dark:border-onbrand/15 dark:bg-white/10 ${className}`}
    >
      <SunIcon className="h-3.5 w-3.5 shrink-0 text-ink/25 dark:text-onbrand/20" />
      <MoonIcon className="h-3.5 w-3.5 shrink-0 text-ink/25 dark:text-onbrand/20" />

      <motion.span
        className="absolute left-1 flex items-center justify-center rounded-full bg-onbrand shadow-sm"
        style={{ height: 22, width: 22 }}
        animate={{ x: isDark ? KNOB_TRAVEL : 0 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 500, damping: 32 }}
      >
        {isDark ? (
          <MoonIcon className="h-3 w-3 text-accent" />
        ) : (
          <SunIcon className="h-3 w-3 text-accent" />
        )}
      </motion.span>
    </button>
  );
}
