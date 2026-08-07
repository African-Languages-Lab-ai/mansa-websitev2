import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { SunsetBand } from "@/components/sections/SunsetBand";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { WhyMansa } from "@/components/sections/WhyMansa";
import { MansaAgent } from "@/components/sections/MansaAgent";
import { SupportedLanguages } from "@/components/sections/SupportedLanguages";
import { UseCases } from "@/components/sections/UseCases";
// import { AppSteps } from "@/components/sections/AppSteps"; // hidden — see below
// import { ImpactVideo } from "@/components/sections/ImpactVideo"; // hidden — see below
import { EnterpriseCTA } from "@/components/sections/EnterpriseCTA";
import { Footer } from "@/components/Footer";
import { asset } from "@/lib/assets";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <SunsetBand
          bgSrc={asset("/assets/sunset-band-bg.webp")}
          title="Your AI partner in thinking for Africa."
        />

        <ProductsShowcase />
        <WhyMansa />
        <MansaAgent />
        <SupportedLanguages />
        <UseCases />
        {/* Get Started 3-step section (AppSteps) is hidden for now.
            To restore it: re-enable the AppSteps import above and
            uncomment the line below. */}
        {/* <AppSteps /> */}
        {/* "How Mansa is Making Real Impact" (video) is hidden for now.
            To restore it: re-enable the ImpactVideo import above and
            uncomment the line below. */}
        {/* <ImpactVideo /> */}
        <EnterpriseCTA />

        {/* Final CTA reuses the sunset band with different copy */}
        <SunsetBand
          bgSrc={asset("/assets/final-cta-bg.webp")}
          title="Start thinking without language barriers."
        />
      </main>
      <Footer />
    </>
  );
}
