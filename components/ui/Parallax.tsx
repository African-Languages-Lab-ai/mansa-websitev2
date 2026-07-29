"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type ParallaxProps = {
  children: ReactNode;
  /** total vertical drift in px across the section's scroll span (subtle: 10-40) */
  distance?: number;
  className?: string;
};

/**
 * Wraps a background layer so it drifts slower than the foreground as the
 * section scrolls through the viewport. Disabled under prefers-reduced-motion.
 */
export function Parallax({ children, distance = 30, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
