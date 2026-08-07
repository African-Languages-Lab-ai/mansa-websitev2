"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollNav } from "@/lib/useScrollNav";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SIGNUP_URL, LOGIN_URL } from "@/lib/links";
import { asset } from "@/lib/assets";

const products = [
  { name: "Mansa Agent", href: "/agent", img: asset("/assets/product-agent.webp") },
  { name: "Mansa AI", href: "/ai", img: asset("/assets/product-ai.webp") },
  { name: "Mansa Transcribe", href: "/transcribe", img: asset("/assets/product-transcribe.webp") },
  { name: "Mansa Translate", href: "/translate", img: asset("/assets/product-translate.webp") },
  { name: "Mansa TTS", href: "/tts", img: asset("/assets/product-tts.png") },
  { name: "Mansa Interpret", href: "/interpret", img: asset("/assets/product-interpret.png") },
];

const resources: { name: string; href: string; external?: boolean }[] = [
  { name: "Blog", href: "/resources/blog" },
  { name: "News", href: "/resources/news" },
  { name: "Use Cases", href: "/resources/use-cases" },
  { name: "Customer Stories", href: "/resources/customer-stories" },
  { name: "Documentation", href: "https://all-lab-portal.com/docs", external: true },
];

export function Navbar({ solid = false }: { solid?: boolean }) {
  const scrolledRaw = useScrollNav(40);
  const scrolled = solid || scrolledRaw;
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const [mobileResources, setMobileResources] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const resourcesTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const anyOpen = productsOpen || resourcesOpen;

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };
  const openResources = () => {
    if (resourcesTimer.current) clearTimeout(resourcesTimer.current);
    setResourcesOpen(true);
  };
  const scheduleCloseResources = () => {
    resourcesTimer.current = setTimeout(() => setResourcesOpen(false), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProductsOpen(false);
        setResourcesOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || anyOpen
          ? "border-b border-ink/10 bg-cream/95 shadow-soft backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        {/* Logo — original maroon lockup in light mode; brand-yellow tint in
            dark mode (mask + bg-accent, which is brand yellow when .dark). */}
        <Link href="/" className="flex items-center" aria-label="Mansa home">
          <Image
            src={asset("/assets/nav-logo-lockup.webp")}
            alt="Mansa, by African Languages Lab"
            width={1696}
            height={449}
            className="h-9 w-auto dark:hidden"
            priority
          />
          <span
            aria-hidden
            className="hidden h-9 w-[136px] bg-accent dark:block"
            style={{
              WebkitMaskImage: `url(${asset("/assets/nav-logo-lockup.webp")})`,
              maskImage: `url(${asset("/assets/nav-logo-lockup.webp")})`,
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              maskSize: "contain",
              WebkitMaskPosition: "left center",
              maskPosition: "left center",
            }}
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          <div onMouseEnter={openProducts} onMouseLeave={scheduleClose}>
            <button
              type="button"
              onClick={() => setProductsOpen((v) => !v)}
              aria-expanded={productsOpen}
              className="group inline-flex items-center gap-1 rounded-full px-2 py-1 text-base font-medium text-ink/80 transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
            >
              Product
              <span
                aria-hidden
                className={`text-base text-ink/50 transition-transform ${productsOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
          </div>
          <Link
            href="/overview"
            className="rounded-full px-2 py-1 text-base font-medium text-ink/80 transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          >
            Overview
          </Link>

          {/* Resources — vertical dropdown; the button itself does not navigate. */}
          <div
            className="relative"
            onMouseEnter={openResources}
            onMouseLeave={scheduleCloseResources}
          >
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              aria-expanded={resourcesOpen}
              className="group inline-flex items-center gap-1 rounded-full px-2 py-1 text-base font-medium text-ink/80 transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
            >
              Resources
              <span
                aria-hidden
                className={`text-base text-ink/50 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>

            <AnimatePresence>
              {resourcesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 top-full mt-3 w-56 -translate-x-1/2 rounded-2xl border border-ink/10 bg-cream/95 p-2 shadow-soft backdrop-blur-md"
                >
                  {resources.map((r) =>
                    r.external ? (
                      <a
                        key={r.name}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setResourcesOpen(false)}
                        className="flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-black/5 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                      >
                        {r.name}
                        <span aria-hidden className="text-xs">↗</span>
                      </a>
                    ) : (
                      <Link
                        key={r.name}
                        href={r.href}
                        onClick={() => setResourcesOpen(false)}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-black/5 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                      >
                        {r.name}
                      </Link>
                    )
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/pricing"
            className="rounded-full px-2 py-1 text-base font-medium text-ink/80 transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          >
            Pricing
          </Link>
          <ThemeToggle />
          <a
            href={LOGIN_URL}
            className="rounded-full px-2 py-1 text-base font-medium text-accent transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          >
            Login
          </a>
          <Button size="default" href={SIGNUP_URL}>
            Get started
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon md:hidden"
        >
          <div className="flex flex-col gap-[5px]">
            <span className={`h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-5 bg-ink transition-transform duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Product mega-dropdown (desktop) */}
      <AnimatePresence>
        {productsOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={openProducts}
            onMouseLeave={scheduleClose}
            className="absolute inset-x-0 top-full hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md md:block"
          >
            <div className="container-page py-6">
              <div className="grid grid-cols-3 gap-4 lg:grid-cols-6 lg:gap-5">
                {products.map((p) => (
                  <Link
                    key={p.name}
                    href={p.href}
                    onClick={() => setProductsOpen(false)}
                    className="group relative aspect-square w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                  >
                    <Image
                      src={p.img}
                      alt=""
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 768px) 20vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <span className="absolute left-4 top-3 text-base font-semibold text-onbrand drop-shadow">
                      {p.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-t border-ink/10 bg-cream/95 backdrop-blur-md md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-5">
              <button
                type="button"
                onClick={() => setMobileProducts((v) => !v)}
                aria-expanded={mobileProducts}
                className="flex items-center justify-between rounded-lg px-2 py-3 text-lg font-medium text-ink hover:bg-black/5"
              >
                Product
                <span aria-hidden className={`text-sm transition-transform ${mobileProducts ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
              {mobileProducts && (
                <div className="mb-2 flex flex-col gap-1 pl-4">
                  {products.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-2 py-2 text-base text-ink/80 hover:bg-black/5 hover:text-ink"
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="/overview"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-lg font-medium text-ink hover:bg-black/5"
              >
                Overview
              </Link>

              <button
                type="button"
                onClick={() => setMobileResources((v) => !v)}
                aria-expanded={mobileResources}
                className="flex items-center justify-between rounded-lg px-2 py-3 text-lg font-medium text-ink hover:bg-black/5"
              >
                Resources
                <span aria-hidden className={`text-sm transition-transform ${mobileResources ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
              {mobileResources && (
                <div className="mb-2 flex flex-col gap-1 pl-4">
                  {resources.map((r) =>
                    r.external ? (
                      <a
                        key={r.name}
                        href={r.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setOpen(false)}
                        className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-base text-ink/80 hover:bg-black/5 hover:text-ink"
                      >
                        {r.name}
                        <span aria-hidden className="text-xs">↗</span>
                      </a>
                    ) : (
                      <Link
                        key={r.name}
                        href={r.href}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-2 py-2 text-base text-ink/80 hover:bg-black/5 hover:text-ink"
                      >
                        {r.name}
                      </Link>
                    )
                  )}
                </div>
              )}

              <Link
                href="/pricing"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-lg font-medium text-ink hover:bg-black/5"
              >
                Pricing
              </Link>
              <a
                href={LOGIN_URL}
                className="rounded-lg px-2 py-3 text-lg font-medium text-accent hover:bg-black/5"
              >
                Login
              </a>

              <div className="mt-1 flex items-center justify-between rounded-lg px-2 py-2">
                <span className="text-lg font-medium text-ink">Appearance</span>
                <ThemeToggle />
              </div>

              <Button className="mt-2 w-full" href={SIGNUP_URL}>
                Get started <ArrowGlyph />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
