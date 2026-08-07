import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SunsetBand } from "@/components/sections/SunsetBand";
import { AgentHero } from "@/components/agent/AgentHero";
import { AgentMeet } from "@/components/agent/AgentMeet";
import { AgentWhy } from "@/components/agent/AgentWhy";
import { AgentCapabilities } from "@/components/agent/AgentCapabilities";
import { AgentGetStarted } from "@/components/agent/AgentGetStarted";
import { AgentUsing } from "@/components/agent/AgentUsing";
import { AgentSecurity } from "@/components/agent/AgentSecurity";
import { AgentFAQ } from "@/components/agent/AgentFAQ";
import { asset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Mansa Agent: Your autonomous AI assistant",
  description:
    "Mansa Agent remembers, researches, and gets work done. Connect your tools, automate repetitive work, and complete tasks across African languages.",
};

export default function AgentPage() {
  return (
    <>
      <Navbar solid />
      <main>
        <AgentHero />
        <AgentMeet />
        <AgentWhy />
        <AgentCapabilities />
        <AgentUsing />
        <AgentSecurity />
        <AgentGetStarted />
        <AgentFAQ />
        <SunsetBand
          bgSrc={asset("/assets/final-cta-bg.webp")}
          title="Let your AI do more than answer questions."
          buttons={["appstore", "playstore"]}
        />
      </main>
      <Footer />
    </>
  );
}
