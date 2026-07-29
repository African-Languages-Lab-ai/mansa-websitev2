"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";

const logos = [
  // Phrase reads a touch small at a uniform height, so give it slightly more.
  { src: "/assets/partner-phrase.png", alt: "Phrase", h: "h-9" },
  { src: "/assets/partner-blackbird.png", alt: "Blackbird.io", h: "h-8" },
  { src: "/assets/partner-african-languages-lab.png", alt: "African Languages Lab", h: "h-8" },
  { src: "/assets/partner-base.png", alt: "Base", h: "h-8" },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={ariaHidden}>
      {logos.map((logo, i) => (
        <div key={`${logo.alt}-${i}`} className="flex items-center justify-center">
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={200}
            height={50}
            className={`${logo.h} w-auto object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0`}
          />
        </div>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-12">
        <LogoRow />
      </div>
    );
  }

  return (
    <div className="marquee-mask group relative w-full overflow-hidden">
      {/* Track is duplicated back-to-back; -50% translate loops seamlessly.
          Hover pauses the CSS animation so a logo can be read. */}
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        <LogoRow />
        <LogoRow ariaHidden />
      </div>
    </div>
  );
}
