import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { SunsetBand } from "@/components/sections/SunsetBand";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { AgentTestimonial } from "@/components/agent/AgentTestimonial";
import { PageFAQ } from "@/components/product/PageFAQ";
import { asset } from "@/lib/assets";

const faqs = [
  {
    id: "free",
    title: "What's included in the Free plan?",
    content: "Mansa Chat with limited monthly credits that reset each billing cycle, no credit card required.",
  },
  {
    id: "out-of-credits",
    title: "What happens when I run out of monthly credits?",
    content:
      "Depending on your plan, Chat and Agent can continue using your All Lab balance once your plan credits run out.",
  },
  {
    id: "change-plan",
    title: "Can I change plans at any time?",
    content: "Yes. Upgrade, downgrade, or cancel your plan at any time from your account settings.",
  },
  {
    id: "custom",
    title: "Do you offer custom pricing for large teams?",
    content:
      "Yes. Contact sales for a custom monthly allowance, dedicated support, and volume pricing for your organization.",
  },
  {
    id: "api-usage",
    title: "Is Translate and Transcribe API usage included in my plan?",
    content:
      "Translate and Transcribe continue to bill against your All Lab balance directly, separate from your monthly Chat and Agent plan credit.",
  },
  {
    id: "rollover",
    title: "Do unused credits roll over?",
    content: "No. Monthly plan credit resets each billing cycle and does not roll over.",
  },
];

export const metadata: Metadata = {
  title: "Mansa Pricing",
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
        <PageFAQ faqs={faqs} />

        <SunsetBand
          bgSrc={asset("/assets/final-cta-bg.webp")}
          title="Unlock the power of African language AI"
          subtitle="Download the app"
          buttons={["appstore", "playstore"]}
        />
      </main>
      <Footer />
    </>
  );
}
