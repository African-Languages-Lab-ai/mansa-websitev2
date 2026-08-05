"use client";

import Link from "next/link";
import { LAB_ABOUT } from "@/lib/links";
import { asset } from "@/lib/assets";

type FooterLink = { label: string; href: string };

const LAB_OUR_RESEARCH = "https://www.africanlanguageslab.com/our-research";

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: LAB_ABOUT },
      { label: "Overview", href: "/overview" },
      { label: "Research", href: LAB_OUR_RESEARCH },
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
    links: [
      { label: "Blog", href: "/resources/blog" },
      { label: "News", href: "/resources/news" },
      { label: "Use Cases", href: "/resources/use-cases" },
      { label: "Customer Stories", href: "/resources/customer-stories" },
      { label: "Documentation", href: "/docs" },
    ],
  },
  {
    heading: "API Platform",
    links: [{ label: "Pricing", href: "/pricing" }],
  },
];

const socials = ["X", "LinkedIn", "Instagram", "YouTube"];

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
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-onbrand/55 transition-colors hover:text-onbrand focus:outline-none focus-visible:text-onbrand"
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
          <p className="text-sm text-onbrand/50">
            © Copyright 2026 Mansa by African Languages Lab.
          </p>
        </div>
      </div>
    </footer>
  );
}
