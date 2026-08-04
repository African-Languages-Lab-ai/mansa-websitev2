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
    id: "languages",
    title: "What languages does Mansa Transcribe support?",
    content:
      "English and 30+ African languages, including Hausa, Igbo, Yoruba, Twi, and Ewe, with accurate recognition of local accents and dialects.",
  },
  {
    id: "formats",
    title: "What audio formats can I upload?",
    content: "WAV is recommended, but MP3, M4A, and WEBM are also supported.",
  },
  {
    id: "length",
    title: "How long can my recordings be?",
    content:
      "Mansa Transcribe automatically chunks longer recordings, so meetings, lectures, and calls of any length can be transcribed.",
  },
  {
    id: "calls",
    title: "Can I use Mansa Transcribe for call centers and meetings?",
    content:
      "Yes. Teams use Mansa Transcribe to capture accurate transcripts from multilingual customer calls and team meetings.",
  },
  {
    id: "integrate",
    title: "Can I integrate Mansa Transcribe into my own app?",
    content: "Yes. Mansa Transcribe exposes a simple REST API so you can transcribe audio directly inside your product.",
  },
  {
    id: "privacy",
    title: "Is my audio data kept private?",
    content:
      "Yes. Audio and transcripts are encrypted in transit and at rest, and stored only as long as needed for troubleshooting.",
  },
];

export const metadata: Metadata = {
  title: "Mansa Transcribe: Automatic speech recognition for African languages",
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

        <PageFAQ faqs={faqs} />

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
