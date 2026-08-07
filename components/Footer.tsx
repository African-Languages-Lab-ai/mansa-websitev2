"use client";

import Link from "next/link";
import {
  LAB_ABOUT,
  LAB_CAREERS,
  LAB_RESEARCH,
  LOGIN_URL,
  SIGNUP_URL,
  DOCS_URL,
} from "@/lib/links";
import { asset } from "@/lib/assets";

type FooterLink = { label: string; href: string };

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "African Languages Lab", href: LAB_ABOUT },
      { label: "Careers", href: LAB_CAREERS },
      { label: "Research", href: LAB_RESEARCH },
      { label: "Login", href: LOGIN_URL },
      { label: "Sign up", href: SIGNUP_URL },
    ],
  },
  {
    heading: "Products",
    links: [
      { label: "Overview", href: "/overview" },
      { label: "Mansa AI", href: "/ai" },
      { label: "Mansa Translate", href: "/translate" },
      { label: "Mansa Transcribe", href: "/transcribe" },
      { label: "Mansa Agent", href: "/agent" },
      { label: "Mansa TTS", href: "/tts" },
      { label: "Mansa Interpret", href: "/interpret" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "News", href: "/resources/news" },
      { label: "Use Cases", href: "/resources/use-cases" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
    ],
  },
  {
    heading: "Mansa platform",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Documentation", href: DOCS_URL },
    ],
  },
];

const socials: FooterLink[] = [
  { label: "X", href: "https://x.com/all__lab" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/african-languages-lab" },
  { label: "Instagram", href: "https://www.instagram.com/africanlanguageslab/" },
];

export function Footer() {
  return (
    <footer className="bg-espresso pt-16 text-onbrand">
      <div className="container-page">
        <div className="grid grid-cols-2 gap-10 border-b border-white/10 pb-14 md:grid-cols-3 lg:grid-cols-6">
          {/* Brand — logo in brand yellow */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="h-[26px] w-[30px] bg-onbrand dark:bg-sunset-1"
                style={{
                  WebkitMaskImage: `url(${asset("/assets/logo-mark-white.webp")})`,
                  maskImage: `url(${asset("/assets/logo-mark-white.webp")})`,
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                  WebkitMaskSize: "contain",
                  maskSize: "contain",
                  WebkitMaskPosition: "center",
                  maskPosition: "center",
                }}
              />
              <span className="text-xl font-bold tracking-tight text-onbrand dark:text-sunset-1">mansa</span>
            </div>
            <p className="mt-4 max-w-[16rem] text-sm leading-relaxed text-onbrand/50">
              Africa&apos;s AI Thinking Partner, built by African Languages Lab.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="text-sm font-semibold text-onbrand">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => {
                  const external = l.href.startsWith("http");
                  return (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 text-sm text-onbrand/55 transition-colors hover:text-onbrand focus:outline-none focus-visible:text-onbrand"
                      >
                        {l.label}
                        {external && (
                          <span aria-hidden className="text-xs">
                            ↗
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

          {/* Follow us */}
          <div>
            <h3 className="text-sm font-semibold text-onbrand">Follow Us</h3>
            <ul className="mt-4 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-onbrand/55 transition-colors hover:text-onbrand focus:outline-none focus-visible:text-onbrand"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 text-center">
          <p className="text-sm text-onbrand/50">
            © Copyright 2026 Mansa by African Languages Lab.
          </p>
        </div>
      </div>
    </footer>
  );
}
