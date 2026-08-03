"use client";

import Image from "next/image";
import Link from "next/link";
import { LAB_ABOUT, LAB_RESEARCH } from "@/lib/links";
import { asset } from "@/lib/assets";

type FooterLink = { label: string; href: string };

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: LAB_ABOUT },
      { label: "Research", href: LAB_RESEARCH },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "Mansa AI", href: "/ai" },
      { label: "Translate", href: "/translate" },
      { label: "Transcribe", href: "/transcribe" },
      { label: "Agent", href: "/agent" },
    ],
  },
  {
    heading: "Resources",
    links: [{ label: "Documentation", href: "/docs" }],
  },
  {
    heading: "API Platform",
    links: [{ label: "Pricing", href: "/pricing" }],
  },
];

const socials = ["X", "LinkedIn", "Instagram", "YouTube"];

export function Footer() {
  return (
    <footer className="bg-espresso pt-16 text-offwhite">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-14 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image src={asset("/assets/logo-mark-white.webp")} alt="" width={30} height={26} className="h-[26px] w-auto" />
              <span className="text-xl font-bold tracking-tight text-offwhite">mansa</span>
            </div>
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-offwhite/50">
              The AI built for African languages, by the African Languages Lab.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-offwhite">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => {
                  const external = l.href.startsWith("http");
                  return (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="text-sm text-offwhite/55 transition-colors hover:text-offwhite focus:outline-none focus-visible:text-offwhite"
                      >
                        {l.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Follow us */}
          <div>
            <h3 className="text-sm font-semibold text-offwhite">Follow Us</h3>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-offwhite/55 transition-colors hover:text-offwhite focus:outline-none focus-visible:text-offwhite"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-sm text-offwhite/50">
            © Copyright 2026 Mansa by African Languages Lab.
          </p>
        </div>
      </div>
    </footer>
  );
}
