"use client";

import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { asset } from "@/lib/assets";

// width/height are each logo's real cropped aspect ratio at a shared 36px
// render height — a mismatched ratio here is what made Phrase/Base look
// tiny and unevenly sized against Blackbird/the Lab mark.
const logos = [
  { src: asset("/assets/partner-phrase.webp"), alt: "Phrase", width: 127, height: 36 },
  { src: asset("/assets/partner-blackbird.webp"), alt: "Blackbird.io", width: 122, height: 36 },
  { src: asset("/assets/partner-african-languages-lab.webp"), alt: "African Languages Lab", width: 238, height: 36 },
  { src: asset("/assets/partner-base.webp"), alt: "Base", width: 92, height: 36 },
];

function LogoRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={ariaHidden}>
      {logos.map((logo, i) => (
        <div key={`${logo.alt}-${i}`} className="flex h-9 items-center justify-center">
          <Image
            src={logo.src}
            alt={ariaHidden ? "" : logo.alt}
            width={logo.width}
            height={logo.height}
            className="h-9 w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
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
