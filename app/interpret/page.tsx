import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductHero } from "@/components/product/ProductHero";
import { asset } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Mansa Interpret: Real-time speech translation for African languages",
  description:
    "Mansa Interpret brings real-time speech translation to African languages, letting two people speak different languages and understand each other instantly. Coming soon.",
};

export default function InterpretPage() {
  return (
    <>
      <Navbar solid />
      <main>
        <ProductHero
          bgSrc={asset("/assets/product-interpret.png")}
          eyebrow="Coming soon"
          title="Speak across African languages, in real time."
          subtitle="Two people speak different languages, and Mansa listens in one and speaks back in another, so conversations flow naturally across the language barrier. We are building it now."
          cta="Try Mansa"
          objectPosition="center"
        />
      </main>
      <Footer />
    </>
  );
}
