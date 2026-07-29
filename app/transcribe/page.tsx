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
  title: "Mansa Transcribe — Automatic speech recognition for African languages",
  description:
    "Convert spoken language into clear, readable text with AI-powered transcription built for African languages.",
};

export default function TranscribePage() {
  return (
    <>
      <Navbar solid />
      <main>
        <ProductHero
          bgSrc={asset("/assets/hero-transcribe.webp")}
          eyebrow="Mansa Transcribe"
          title="Accurate Automatic Speech Recognition"
          subtitle="Convert spoken language into clear, readable text with AI-powered transcription."
          cta="Try Mansa Transcribe"
          objectPosition="center 35%"
        />

        <EmptyFeatureCards
          heading="Speech understanding for African languages."
          subheading="Delivering accurate transcription through language-aware AI."
          mediaAspect="aspect-[551/523]"
          fit="float"
          cards={[
            {
              title: "Accurate Speech-to-Text",
              body: "Convert spoken language into clear, readable text in seconds.",
              img: asset("/assets/transcribe-ui-2.webp"),
              imgWidth: 326,
              imgHeight: 524,
            },
            {
              title: "Upload Audio to Text",
              body: "Convert uploaded audio into clear, readable text in seconds.",
              img: asset("/assets/transcribe-ui-1.webp"),
              imgWidth: 326,
              imgHeight: 524,
            },
          ]}
        />

        <StatsStrip />
        <ResearchDriven product="Mansa Transcribe" />

        <BuiltForTeams
          heading="Mansa Transcribe is built for every team"
          individuals={[
            { title: "Communicate", body: "Capture voice notes and conversations across African languages." },
            { title: "Learn", body: "Turn lectures and recordings into searchable, readable notes." },
            { title: "Business", body: "Transcribe meetings and calls with multilingual customers and teams." },
            { title: "Community", body: "Make spoken information accessible across diverse language communities." },
          ]}
          teams={[
            { title: "Shared workflows", body: "Standardize how your team captures and shares transcripts across languages." },
            { title: "Governed access", body: "Give everyone controlled access to the same transcription tools and data." },
            { title: "Scale support", body: "Transcribe at volume without adding extra headcount." },
            { title: "Quality insights", body: "Track transcription usage and accuracy across your organization." },
          ]}
        />

        <FAQ />

        <SunsetBand
          bgSrc={asset("/assets/sunset-band-bg.webp")}
          title="Transcribe with AI that understands African languages."
          subtitle="Download the app"
          buttons={["appstore", "playstore"]}
        />
      </main>
      <Footer />
    </>
  );
}
