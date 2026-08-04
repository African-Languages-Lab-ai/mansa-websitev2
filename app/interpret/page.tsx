import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SunsetBand } from "@/components/sections/SunsetBand";
import { ProductHero } from "@/components/product/ProductHero";
import { EmptyFeatureCards } from "@/components/product/EmptyFeatureCards";
import { StatsStrip } from "@/components/product/StatsStrip";
import { ResearchDriven } from "@/components/product/ResearchDriven";
import { BuiltForTeams } from "@/components/product/BuiltForTeams";
import { PageFAQ } from "@/components/product/PageFAQ";
import { asset } from "@/lib/assets";

const faqs = [
  {
    id: "what-is",
    title: "What is Mansa Interpret?",
    content: "Mansa Interpret converts written text into clear, natural-sounding speech across African languages.",
  },
  {
    id: "languages",
    title: "What languages does Mansa Interpret support?",
    content: "Hausa, Igbo, Yoruba, Twi, Ewe, and more, all with natural African accents and dialects.",
  },
  {
    id: "ivr",
    title: "Can I use Mansa Interpret for voice prompts and IVR?",
    content:
      "Yes. Teams use Mansa Interpret to generate natural call center prompts and voice interfaces across African languages.",
  },
  {
    id: "documents",
    title: "Can Mansa Interpret read long documents aloud?",
    content: "Yes. Turn reports, articles, and updates into natural spoken audio for listening on the go.",
  },
  {
    id: "natural",
    title: "How natural does the generated speech sound?",
    content:
      "Mansa Interpret is tuned specifically for African languages, so the speech it generates preserves natural accents and pronunciation instead of sounding robotic.",
  },
  {
    id: "integrate",
    title: "Can I integrate Mansa Interpret into my own product?",
    content:
      "Yes. Mansa Interpret is built on the same API platform as the rest of Mansa, so you can generate speech directly inside your app.",
  },
];

export const metadata: Metadata = {
  title: "Mansa Interpret: Natural text-to-speech for African languages",
  description:
    "Production-grade text-to-speech for Hausa, Igbo, Yoruba, Twi and Ewe, with natural African accents and dialects.",
};

export default function InterpretPage() {
  return (
    <>
      <Navbar solid />
      <main>
        <ProductHero
          bgSrc={asset("/assets/product-asr.webp")}
          eyebrow="Mansa Interpret"
          title="Natural Text-to-Speech Built for Africa."
          subtitle="Production-grade text-to-speech for Hausa, Igbo, Yoruba, Twi and Ewe, with natural African accents and dialects."
          cta="Try Mansa Interpret"
          objectPosition="center 45%"
        />

        <EmptyFeatureCards
          heading="Natural speech generation for African languages."
          subheading="Clear, natural, and true to how people actually speak."
          mediaAspect="aspect-[551/523]"
          fit="float"
          cards={[
            {
              title: "Clear, Natural Text-to-Speech",
              body: "Convert written text into clear, natural-sounding speech with AI tuned for African languages.",
              img: asset("/assets/asr-ui-1.webp"),
              imgWidth: 326,
              imgHeight: 524,
            },
            {
              title: "Built for African Languages",
              body: "Generates natural speech across Hausa, Igbo, Yoruba, Twi and Ewe, preserving African accents and dialects.",
              img: asset("/assets/asr-ui-2.webp"),
              imgWidth: 326,
              imgHeight: 524,
            },
          ]}
        />

        <StatsStrip />
        <ResearchDriven product="Mansa Interpret" />

        <BuiltForTeams
          heading="Mansa Interpret is built for every team"
          individuals={[
            { title: "Read text aloud", body: "Turn written content into clear, natural spoken audio across African languages." },
            { title: "Text to voice notes", body: "Turn written notes and messages into natural-sounding voice recordings." },
            { title: "Learn by listening", body: "Practice pronunciation and understand African languages through natural generated speech." },
            { title: "Accessible communication", body: "Make written content accessible to everyone by turning it into spoken audio." },
          ]}
          teams={[
            { title: "Automated voice prompts", body: "Generate natural IVR and call center prompts across African languages and accents." },
            { title: "Narrated content", body: "Turn reports, articles, and updates into natural spoken audio for your team." },
            { title: "Voice-driven workflows", body: "Power voice interfaces and IVR systems with natural, reliable speech generation." },
            { title: "Quality at scale", body: "Generate natural speech across accents and dialects, at any volume." },
          ]}
        />

        <PageFAQ faqs={faqs} />

        <SunsetBand
          bgSrc={asset("/assets/final-cta-bg.webp")}
          title="Text-to-speech that understands African languages."
          subtitle="Download the app"
          buttons={["appstore", "playstore"]}
        />
      </main>
      <Footer />
    </>
  );
}
