import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SunsetBand } from "@/components/sections/SunsetBand";
import { FAQ } from "@/components/sections/FAQ";
import { ProductHero } from "@/components/product/ProductHero";
import { EmptyFeatureCards } from "@/components/product/EmptyFeatureCards";
import { StatsStrip } from "@/components/product/StatsStrip";
import { ResearchDriven } from "@/components/product/ResearchDriven";
import { BuiltForTeams } from "@/components/product/BuiltForTeams";
import { asset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Mansa ASR: Automatic speech recognition for African languages",
  description:
    "Production-grade automatic speech recognition for Hausa, Igbo, Yoruba, Twi and Ewe, preserving African accents and dialects.",
};

export default function AsrPage() {
  return (
    <>
      <Navbar solid />
      <main>
        <ProductHero
          bgSrc={asset("/assets/product-asr.webp")}
          eyebrow="Mansa ASR"
          title="Accurate Speech Recognition Built for Africa."
          subtitle="Production-grade automatic speech recognition for Hausa, Igbo, Yoruba, Twi and Ewe, preserving African accents and dialects."
          cta="Try Mansa ASR"
          objectPosition="center 45%"
        />

        <EmptyFeatureCards
          heading="Speech recognition built for African languages."
          subheading="Clear, accurate, and true to how people actually speak."
          mediaAspect="aspect-[4/5]"
          fit="float"
          cards={[
            {
              title: "Clear, Accurate Speech Recognition",
              body: "Convert spoken language into clear, accurate text with AI tuned for real-world audio.",
              img: asset("/assets/asr-ui-1.webp"),
              imgWidth: 326,
              imgHeight: 557,
            },
            {
              title: "Built for African Languages",
              body: "Recognizes speech accurately across Hausa, Igbo, Yoruba, Twi and Ewe, preserving African accents and dialects.",
              img: asset("/assets/asr-ui-2.webp"),
              imgWidth: 326,
              imgHeight: 485,
            },
          ]}
        />

        <StatsStrip />
        <ResearchDriven product="Mansa ASR" />

        <BuiltForTeams
          heading="Mansa ASR is built for every team"
          individuals={[
            { title: "Transcribe conversations", body: "Turn spoken conversations into accurate text across African languages." },
            { title: "Voice notes to text", body: "Convert voice memos and recordings into clear, searchable text." },
            { title: "Learn by listening", body: "Practice and understand African languages through accurate speech recognition." },
            { title: "Accessible communication", body: "Make spoken content accessible to everyone, in any supported language." },
          ]}
          teams={[
            { title: "Call center transcription", body: "Accurately transcribe customer calls across African languages and accents." },
            { title: "Meeting transcripts", body: "Capture accurate transcripts from multilingual team meetings." },
            { title: "Voice-driven workflows", body: "Power voice interfaces and IVR systems with reliable speech recognition." },
            { title: "Quality at scale", body: "Recognize speech accurately across accents and dialects, at any volume." },
          ]}
        />

        <FAQ />

        <SunsetBand
          bgSrc={asset("/assets/final-cta-bg.webp")}
          title="Speech recognition that understands African languages."
          subtitle="Download the app"
          buttons={["appstore", "playstore"]}
        />
      </main>
      <Footer />
    </>
  );
}
