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
    title: "What languages does Mansa Translate support?",
    content:
      "30+ African languages including Swahili, Hausa, Yoruba, Igbo, Amharic, Twi, and Zulu, translating to and from English.",
  },
  {
    id: "accuracy",
    title: "How accurate is Mansa Translate?",
    content:
      "Mansa Translate is tuned for local nuance and context, so translations read naturally rather than word for word.",
  },
  {
    id: "integrate",
    title: "Can I integrate Mansa Translate into my product?",
    content:
      "Yes. Mansa Translate exposes a REST API with SDKs and glossary support so you can translate content directly inside your app.",
  },
  {
    id: "glossary",
    title: "Does Mansa Translate support glossaries for consistent terminology?",
    content:
      "Yes. Save glossary entries so brand names, product terms, and technical vocabulary translate consistently every time.",
  },
  {
    id: "files",
    title: "Can I translate documents and files, not just text?",
    content:
      "Yes. Upload CSV, XLSX, or TXT files and Mansa Translate will translate every row or line automatically.",
  },
  {
    id: "privacy",
    title: "Is my data kept private?",
    content:
      "Yes. Your data is encrypted in transit and at rest, and we do not train on customer data without explicit consent.",
  },
];

export const metadata: Metadata = {
  title: "Mansa Translate: Machine translation for African languages",
  description:
    "Translate across 30+ African languages with AI that understands meaning, context, and culture.",
};

export default function TranslatePage() {
  return (
    <>
      <Navbar solid />
      <main>
        <ProductHero
          bgSrc={asset("/assets/hero-translate.webp")}
          eyebrow="Mansa Translate"
          title="Contextualized Machine Translation for African Languages."
          subtitle="Translate across 30+ African languages with AI that understands meaning, context, and culture."
          cta="Try Mansa Translate"
          objectPosition="center 30%"
        />

        <EmptyFeatureCards
          heading="Built for African language understanding."
          subheading="More than translation."
          mediaAspect="aspect-[551/523]"
          fit="float"
          cards={[
            {
              title: "Contextualized Machine Translation",
              body: "Preserves meaning, intent, and cultural context instead of translating word for word.",
              img: asset("/assets/translate-ui-1.webp"),
              imgWidth: 326,
              imgHeight: 499,
            },
            {
              title: "Translate between over 30 African Languages",
              body: "Translate text accurately across 30+ African languages while preserving meaning, context, and cultural nuance.",
              img: asset("/assets/translate-ui-2.webp"),
              imgWidth: 326,
              imgHeight: 466,
            },
          ]}
        />

        <StatsStrip />
        <ResearchDriven product="Mansa Translate" />

        <BuiltForTeams
          heading="Mansa Translate is built for every team"
          individuals={[
            { title: "Communicate", body: "Translate messages and conversations across African languages." },
            { title: "Learn", body: "Explore new languages with context-aware translations." },
            { title: "Business", body: "Communicate confidently with multilingual customers and teams." },
            { title: "Community", body: "Make information accessible across diverse language communities." },
          ]}
          teams={[
            { title: "Localized products", body: "Translate your product and content for every market you serve." },
            { title: "Governed access", body: "Give everyone controlled access to the same translation tools and glossaries." },
            { title: "Scale support", body: "Serve multilingual customers at scale without extra headcount." },
            { title: "Quality insights", body: "Track translation usage and quality across your organization." },
          ]}
        />

        <PageFAQ faqs={faqs} />

        <SunsetBand
          bgSrc={asset("/assets/sunset-band-bg.webp")}
          title="Translate with AI that understands African languages."
          subtitle="Download the app"
          buttons={["appstore", "playstore"]}
        />
      </main>
      <Footer />
    </>
  );
}
