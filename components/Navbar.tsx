"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useScrollNav } from "@/lib/useScrollNav";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { APP_URL } from "@/lib/links";
import { asset } from "@/lib/assets";

const products = [
  { name: "Mansa Agent", href: "/agent", img: asset("/assets/product-agent.png") },
  { name: "Mansa AI", href: "/ai", img: asset("/assets/product-ai.png") },
  { name: "Mansa Transcribe", href: "/transcribe", img: asset("/assets/product-transcribe.png") },
  { name: "Mansa Translate", href: "/translate", img: asset("/assets/product-translate.png") },
];

export function Navbar({ solid = false }: { solid?: boolean }) {
  const scrolledRaw = useScrollNav(40);
  const scrolled = solid || scrolledRaw;
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProducts, setMobileProducts] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const openProducts = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setProductsOpen(true);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setProductsOpen(false), 120);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setProductsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor:
          scrolled || productsOpen ? "rgba(246,241,231,0.95)" : "rgba(246,241,231,0)",
      }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
        scrolled || productsOpen
          ? "border-b border-ink/10 shadow-soft backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="container-page flex h-[72px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" aria-label="Mansa home">
          <Image src={asset("/assets/logo-mark.png")} alt="" width={34} height={30} className="h-[30px] w-auto" priority />
          <span className="flex flex-col leading-none">
            <span className="text-2xl font-bold tracking-tight text-ink">mansa</span>
            <span className="text-[9px] font-normal tracking-wide text-ink-muted">
              by African Languages Lab
            </span>
          </span>
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
                className={`text-xs text-ink/50 transition-transform ${productsOpen ? "rotate-180" : ""}`}
              >
                ▾
              </span>
            </button>
          </div>
          <Link
            href="/pricing"
            className="rounded-full px-2 py-1 text-base font-medium text-ink/80 transition-colors hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          >
            Pricing
          </Link>
          <Button size="default" className="ml-2" href={APP_URL}>
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
            <div className="container-page grid grid-cols-4 gap-5 py-6">
              {products.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  onClick={() => setProductsOpen(false)}
                  className="group relative aspect-[5/4] overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                >
                  <Image
                    src={p.img}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1280px) 25vw, 300px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />
                  <span className="absolute left-4 top-3 text-lg font-semibold text-offwhite drop-shadow">
                    {p.name}
                  </span>
                </Link>
              ))}
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
                href="/pricing"
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-lg font-medium text-ink hover:bg-black/5"
              >
                Pricing
              </Link>
              <Button className="mt-2 w-full" href={APP_URL}>
                Get started <ArrowGlyph />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
