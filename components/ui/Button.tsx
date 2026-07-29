"use client";

import { forwardRef, type ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Variant = "filled" | "outline" | "ghost" | "light";
type Size = "sm" | "default" | "lg";

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  /** dark section? flips outline/ghost colors for contrast */
  onDark?: boolean;
  className?: string;
  /** when set, renders as a link. External (http/mailto) opens in a new tab. */
  href?: string;
} & Omit<HTMLMotionProps<"button">, "children" | "ref">;

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-200 ease-out focus:outline-none " +
  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent " +
  "disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  default: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base",
};

function variantClasses(variant: Variant, onDark: boolean): string {
  switch (variant) {
    case "filled":
      return (
        "bg-maroon text-offwhite shadow-sm hover:bg-maroon-dark " +
        "hover:shadow-lg hover:shadow-maroon/30 focus-visible:ring-maroon " +
        "focus-visible:shadow-lg focus-visible:shadow-maroon/30"
      );
    case "outline":
      return onDark
        ? "border border-offwhite/40 text-offwhite hover:bg-offwhite hover:text-espresso focus-visible:bg-offwhite focus-visible:text-espresso focus-visible:ring-offwhite"
        : "border border-ink/25 text-ink hover:bg-ink hover:text-cream focus-visible:bg-ink focus-visible:text-cream focus-visible:ring-ink";
    case "light":
      return (
        "bg-offwhite text-espresso hover:bg-white shadow-sm hover:shadow-lg " +
        "hover:shadow-black/20 focus-visible:ring-offwhite focus-visible:shadow-lg"
      );
    case "ghost":
      return onDark
        ? "text-offwhite hover:bg-white/10 focus-visible:bg-white/10 focus-visible:ring-offwhite"
        : "text-ink hover:bg-black/5 focus-visible:bg-black/5 focus-visible:ring-ink";
  }
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "filled", size = "default", onDark = false, className = "", children, href, ...props },
    ref
  ) => {
    const cls = `${base} ${sizes[size]} ${variantClasses(variant, onDark)} ${className}`;
    const motionProps = {
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.97 },
      transition: { type: "spring" as const, stiffness: 400, damping: 22 },
    };

    if (href) {
      const external = /^(https?:|mailto:)/.test(href);
      return (
        <motion.a
          href={href}
          target={external && href.startsWith("http") ? "_blank" : undefined}
          rel={external && href.startsWith("http") ? "noopener noreferrer" : undefined}
          className={cls}
          {...motionProps}
        >
          {children}
        </motion.a>
      );
    }

    return (
      <motion.button ref={ref} className={cls} {...motionProps} {...props}>
        {children}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

/** Small helper so any button/link with a → gets a consistent nudge on hover. */
export function ArrowGlyph() {
  return (
    <span
      aria-hidden
      className="inline-block transition-transform duration-200 group-hover:translate-x-1"
    >
      →
    </span>
  );
}
