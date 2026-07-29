import Image from "next/image";
import type { ReactNode } from "react";
import { asset } from "@/lib/assets";

type PillProps = {
  children: ReactNode;
  className?: string;
  /** kept for API compatibility; the pill is always the light cream style in the design */
  onDark?: boolean;
};

/**
 * Eyebrow label pill used at the top of most sections. In the reference the pill
 * is always the same light cream chip with the maroon "accordion" mark, on both
 * light and dark sections.
 */
export function Pill({ children, className = "" }: PillProps) {
  return (
    <span
      className={
        "inline-flex items-center gap-2 rounded-full bg-cream-dark px-4 py-1.5 text-sm font-medium text-ink shadow-sm ring-1 ring-black/5 " +
        className
      }
    >
      <Image
        src={asset("/assets/accordion-icon.webp")}
        alt=""
        width={10}
        height={18}
        className="h-[14px] w-auto"
      />
      {children}
    </span>
  );
}
