"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type AccordionItem = {
  id: string;
  title: ReactNode;
  content: ReactNode;
  /** optional extra node under the title row (e.g. "Learn More" link) */
};

type AccordionProps = {
  items: AccordionItem[];
  defaultOpenId?: string;
  onDark?: boolean;
  /** icon style: "plus" -> +/− ; "cross" -> +/× */
  iconStyle?: "plus" | "cross";
  /** fires whenever the open item changes (used to swap paired media) */
  onOpenChange?: (id: string | null) => void;
};

/**
 * Single-open-at-a-time accordion with smooth height animation.
 * Shared by ProductsShowcase and FAQ.
 */
export function Accordion({
  items,
  defaultOpenId,
  onDark = false,
  iconStyle = "plus",
  onOpenChange,
}: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? null);

  const toggle = (id: string) => {
    const next = openId === id ? null : id;
    setOpenId(next);
    onOpenChange?.(next);
  };

  const divider = onDark ? "border-white/10" : "border-ink/10";
  const titleColor = onDark ? "text-onbrand" : "text-ink";
  const bodyColor = onDark ? "text-onbrand/60" : "text-ink-muted";

  return (
    <div className="w-full">
      {items.map((item) => {
        const open = openId === item.id;
        const closedIcon = "+";
        const openIcon = iconStyle === "cross" ? "×" : "−";
        return (
          <div key={item.id} className={`border-b ${divider}`}>
            <h3>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                aria-expanded={open}
                className={`group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon rounded-lg ${titleColor}`}
              >
                <span className="text-lg font-medium md:text-xl">{item.title}</span>
                <span
                  aria-hidden
                  className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-xl leading-none transition-all duration-300 ${
                    onDark ? "bg-white/10 group-hover:bg-white/20" : "bg-ink/5 group-hover:bg-ink/10"
                  } ${open ? "rotate-0" : ""}`}
                >
                  {open ? openIcon : closedIcon}
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className={`pb-6 pr-10 text-base leading-relaxed ${bodyColor}`}>
                    {item.content}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
