import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { asset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Something new is coming | Mansa",
  description:
    "We've been building the next chapter of Mansa, Africa's AI thinking partner. Join the waitlist to be first to know when it's here.",
};

// Standalone, single-section teaser page — deliberately outside the main
// site's Navbar/Footer shell so it stays a focused, separate landing page.
export default function WaitlistPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-espresso px-6 py-20">
      <div className="absolute inset-0">
        <Image
          src={asset("/assets/hero-bg.webp")}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-espresso/85" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center text-center">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="h-[30px] w-[34px] bg-sunset-1"
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
          <span className="text-2xl font-bold tracking-tight text-onbrand">mansa</span>
        </Link>

        <span className="mt-10 inline-block rounded-full bg-sunset-1/15 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-sunset-1">
          Coming soon
        </span>

        <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-onbrand sm:text-5xl md:text-[3.25rem]">
          Something new is coming from Mansa.
        </h1>
        <p className="mt-5 max-w-md text-lg leading-relaxed text-onbrand/70">
          We&apos;ve been building the next chapter of Africa&apos;s AI thinking partner.
          Join the waitlist to be first to know when it&apos;s here.
        </p>

        <div className="mt-10 w-full max-w-md">
          <WaitlistForm />
        </div>

        <p className="mt-12 text-sm text-onbrand/40">Mansa by African Languages Lab</p>
      </div>
    </main>
  );
}
