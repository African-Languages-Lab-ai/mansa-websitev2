import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductHero } from "@/components/product/ProductHero";
import { EmptyFeatureCards } from "@/components/product/EmptyFeatureCards";
import { CtaBand } from "@/components/product/CtaBand";
import { AiOneForEvery } from "@/components/ai/AiOneForEvery";
import { AiWhatAsk } from "@/components/ai/AiWhatAsk";

export const metadata: Metadata = {
  title: "Mansa AI — Chat with AI that understands Africa",
  description:
    "Ask questions, solve problems, write better, and learn faster with an AI assistant built on Africa's leading multilingual language technology.",
};

export default function AiPage() {
  return (
    <>
      <Navbar solid />
      <main>
        <ProductHero
          bgSrc="/assets/hero-ai.png"
          title="Chat with AI that understands Africa."
          subtitle="Ask questions, solve problems, write better, learn faster, with an AI assistant built on Africa's leading multilingual language technology."
          cta="Try Mansa"
          objectPosition="center 40%"
        />

        <EmptyFeatureCards
          heading="Engineered for intelligent conversations"
          subheading="The best models, the recent data, and a source behind every claim."
          theme="dark"
          panel="surface"
          columns={3}
          glow
          cards={[
            { title: "Have natural conversations.", body: "Understand complex questions, plan, generate thoughtful responses, and solve problems.", img: "/assets/ai-engineered-3.png" },
            { title: "Write with confidence.", body: "Draft emails, reports, proposals, articles, presentations, and creative content in seconds.", img: "/assets/ai-engineered-2.png" },
            { title: "Multilingual by design.", body: "Communicate naturally across English and 30+ African languages with AI built for Africa.", img: "/assets/ai-engineered-1.png" },
          ]}
        />

        <AiOneForEvery />
        <AiWhatAsk />

        <CtaBand
          bgSrc="/assets/hero-ai.png"
          title="Start your next conversation with Mansa AI."
          cta="Try Mansa"
          objectPosition="center 40%"
        />
      </main>
      <Footer />
    </>
  );
}
