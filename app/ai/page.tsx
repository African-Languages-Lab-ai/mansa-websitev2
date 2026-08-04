import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductHero } from "@/components/product/ProductHero";
import { EmptyFeatureCards } from "@/components/product/EmptyFeatureCards";
import { CtaBand } from "@/components/product/CtaBand";
import { AiOneForEvery } from "@/components/ai/AiOneForEvery";
import { AiWhatAsk } from "@/components/ai/AiWhatAsk";
import { PluginsSection } from "@/components/product/PluginsSection";
import { PageFAQ } from "@/components/product/PageFAQ";
import { asset } from "@/lib/assets";

const faqs = [
  {
    id: "what-is",
    title: "What is Mansa AI?",
    content:
      "Mansa AI is a conversational assistant for everyday tasks, learning, writing, and brainstorming, built on AI trained specifically for African languages and context.",
  },
  {
    id: "languages",
    title: "What languages can I use with Mansa AI?",
    content:
      "Chat naturally in English and 30+ African languages, including Swahili, Hausa, Yoruba, Igbo, Amharic, Twi, and Zulu.",
  },
  {
    id: "different",
    title: "How is Mansa AI different from other AI assistants?",
    content:
      "Mansa AI is trained on billions of African-language tokens gathered through direct research, so it understands nuance, accents, and cultural context that general models often miss.",
  },
  {
    id: "work",
    title: "Can I use Mansa AI for work?",
    content:
      "Yes. Draft emails, summarize documents, translate content, and think through decisions, all in the language your team actually works in.",
  },
  {
    id: "plugins",
    title: "Can I add plugins to Mansa AI?",
    content:
      "Yes. Install plugins like Fact Checker, Study Helper, and Ghana News Brief to extend what Mansa AI can do inside your conversation.",
  },
  {
    id: "mistakes",
    title: "Does Mansa AI make mistakes?",
    content:
      "Like any AI, Mansa AI can make mistakes. We recommend double-checking important responses, especially for high-stakes decisions.",
  },
];

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
          mediaAspect="aspect-[4/5]"
          cards={[
            { title: "Multilingual by design.", body: "Communicate naturally across English and 30+ African languages with AI built for Africa.", img: asset("/assets/ai-section-ui.webp") },
            { title: "Have natural conversations.", body: "Understand complex questions, plan, generate thoughtful responses, and solve problems.", img: asset("/assets/ai-engineered-3.webp") },
            { title: "Write with confidence.", body: "Draft emails, reports, proposals, articles, presentations, and creative content in seconds.", img: asset("/assets/ai-engineered-2.webp") },
          ]}
        />

        <PluginsSection />
        <AiOneForEvery />
        <AiWhatAsk />
        <PageFAQ faqs={faqs} />

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
