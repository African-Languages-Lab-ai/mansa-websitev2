import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SunsetBand } from "@/components/sections/SunsetBand";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { WhyMansa } from "@/components/sections/WhyMansa";
import { MansaAgent } from "@/components/sections/MansaAgent";
import { SupportedLanguages } from "@/components/sections/SupportedLanguages";
import { UseCases } from "@/components/sections/UseCases";
import { AppSteps } from "@/components/sections/AppSteps";
import { ImpactVideo } from "@/components/sections/ImpactVideo";
import { EnterpriseCTA } from "@/components/sections/EnterpriseCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <SunsetBand
          bgSrc="/assets/sunset-band-bg.png"
          title="Your AI partner in thinking for Africa."
          subtitle="Download the app"
          buttons={["appstore", "playstore"]}
        />

        <ProductsShowcase />
        <WhyMansa />
        <MansaAgent />
        <SupportedLanguages />
        <UseCases />
        <AppSteps />
        <ImpactVideo />
        <EnterpriseCTA />
        <FAQ />

        {/* Final CTA reuses the sunset band with different copy */}
        <SunsetBand
          bgSrc="/assets/final-cta-bg.png"
          title="Unlock the power of African language AI"
          buttons={["appstore", "playstore"]}
        />
      </main>
      <Footer />
    </>
  );
}
