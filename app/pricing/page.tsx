import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SunsetBand } from "@/components/sections/SunsetBand";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { AgentTestimonial } from "@/components/agent/AgentTestimonial";
import { PageFAQ } from "@/components/product/PageFAQ";
import { asset } from "@/lib/assets";

const faqs = [
  {
    id: "free",
    title: "What's included in the Free plan?",
    content:
      "The Free plan includes Mansa Chat with limited monthly credits that reset each billing cycle. No credit card is required to get started.",
  },
  {
    id: "out-of-credits",
    title: "What happens when I run out of monthly credits?",
    content:
      "Depending on your plan, you may continue using Chat and Agent through your available account balance once your included monthly credits have been exhausted.",
  },
  {
    id: "change-plan",
    title: "Can I change my plan at any time?",
    content: "Yes. You can upgrade, downgrade, or cancel your plan from your account settings.",
  },
  {
    id: "custom",
    title: "Do you offer custom pricing for large teams?",
    content:
      "Yes. Contact our sales team for custom plans, higher usage allowances, dedicated support, and volume pricing for your organization.",
  },
  {
    id: "api-usage",
    title: "Is Translate and Transcribe API usage included in my plan?",
    content:
      "Translate and Transcribe API usage is billed separately against your available account balance and is not deducted from your monthly Chat and Agent plan credits.",
  },
  {
    id: "rollover",
    title: "Do unused credits roll over?",
    content: "No. Monthly plan credits reset at the end of each billing cycle and do not roll over.",
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

        <AgentTestimonial />
        <PageFAQ faqs={faqs} />

        <SunsetBand
          bgSrc={asset("/assets/final-cta-bg.webp")}
          title="Start thinking without language barriers."
          subtitle="Download the app"
          buttons={["appstore", "playstore"]}
        />
      </main>
      <Footer />
    </>
  );
}
