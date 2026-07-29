import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { SunsetBand } from "@/components/sections/SunsetBand";
import { FAQ } from "@/components/sections/FAQ";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { AgentTestimonial } from "@/components/agent/AgentTestimonial";
import { asset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Pricing — Mansa",
  description:
    "Simple pricing. Powerful AI. Start using Mansa AI for free and upgrade to Mansa Agent when you're ready.",
};

export default function PricingPage() {
  return (
    <>
      <Navbar solid />
      <main>
        {/* Hero */}
        <section className="bg-cream px-6 pb-16 pt-[128px] text-center md:pb-20 md:pt-[160px]">
          <div className="container-page">
            <h1 className="text-4xl font-bold tracking-tight text-ink sm:text-5xl">
              Simple pricing. Powerful AI.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-muted">
              Start using Mansa AI for free. Upgrade to Mansa Agent when you&apos;re ready for a
              personal AI that remembers, works, and gets things done.
            </p>
          </div>
        </section>

        <PricingPlans />

        {/* Trust bar */}
        <section className="bg-cream pb-20">
          <p className="container-page mb-8 text-center text-sm font-medium uppercase tracking-wide text-ink-muted">
            Trusted by enterprise organisations
          </p>
          <LogoMarquee />
        </section>

        <AgentTestimonial />
        <FAQ />

        <SunsetBand
          bgSrc={asset("/assets/final-cta-bg.png")}
          title="Unlock the power of African language AI"
          subtitle="Download the app"
          buttons={["appstore", "playstore"]}
        />
      </main>
      <Footer />
    </>
  );
}
