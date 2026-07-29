"use client";

import type { Variants } from "framer-motion";

/** Shared fade + slide-up reveal used by whileInView across sections. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Container that staggers its children's reveals. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

export const viewportOnce = { once: true, margin: "-100px" } as const;
