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
  title: "Mansa Translate — Machine translation for African languages",
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
          title="Conceptualized Machine Translation for African Languages."
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
              title: "Conceptualized Machine Translation",
              body: "Preserves meaning, intent, and cultural context instead of translating word for word.",
              img: asset("/assets/translate-ui-2.webp"),
              imgWidth: 326,
              imgHeight: 468,
            },
            {
              title: "Translate between over 30 African Languages",
              body: "Translate text accurately across 30+ African languages while preserving meaning, context, and cultural nuance.",
              img: asset("/assets/translate-ui-1.webp"),
              imgWidth: 326,
              imgHeight: 468,
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

        <FAQ />

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
