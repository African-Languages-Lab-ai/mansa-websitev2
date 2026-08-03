import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductHero } from "@/components/product/ProductHero";
import { EmptyFeatureCards } from "@/components/product/EmptyFeatureCards";
import { CtaBand } from "@/components/product/CtaBand";
import { AiOneForEvery } from "@/components/ai/AiOneForEvery";
import { AiWhatAsk } from "@/components/ai/AiWhatAsk";
import { PluginsSection } from "@/components/product/PluginsSection";
import { asset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Mansa AI: Chat with AI that understands Africa",
  description:
    "Ask questions, solve problems, write better, and learn faster with an AI assistant built on Africa's leading multilingual language technology.",
};

export default function AiPage() {
  return (
    <>
      <Navbar solid />
      <main>
        <ProductHero
          bgSrc={asset("/assets/hero-ai.webp")}
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
            { title: "Multilingual by design.", body: "Communicate naturally across English and 30+ African languages with AI built for Africa.", img: asset("/assets/ai-engineered-multilingual.webp") },
            { title: "Have natural conversations.", body: "Understand complex questions, plan, generate thoughtful responses, and solve problems.", img: asset("/assets/ai-engineered-3.webp") },
            { title: "Write with confidence.", body: "Draft emails, reports, proposals, articles, presentations, and creative content in seconds.", img: asset("/assets/ai-engineered-2.webp") },
          ]}
        />

        <PluginsSection />
        <AiOneForEvery />
        <AiWhatAsk />

        <CtaBand
          bgSrc={asset("/assets/hero-ai.webp")}
          title="Start your next conversation with Mansa AI."
          cta="Try Mansa"
          objectPosition="center 40%"
        />
      </main>
      <Footer />
    </>
  );
}
