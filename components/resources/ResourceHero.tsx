import type { ReactNode } from "react";
import { Pill } from "@/components/ui/Pill";

/** Shared header for Resources index pages. */
export function ResourceHero({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-cream px-6 pb-12 pt-[128px] text-center md:pb-16 md:pt-[160px]">
      <div className="container-page flex flex-col items-center">
        <Pill>{eyebrow}</Pill>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
