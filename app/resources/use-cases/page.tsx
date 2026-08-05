import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResourceHero } from "@/components/resources/ResourceHero";
import { UseCaseGrid } from "@/components/resources/UseCaseGrid";
import { getUseCases, getUseCaseCategories } from "@/lib/content/use-cases";

export const metadata: Metadata = {
  title: "Use Cases | Mansa",
  description:
    "See how Mansa is used for African-language AI: language preservation, education, customer support, public services, media, and developer APIs.",
};

export default function UseCasesIndexPage() {
  const useCases = getUseCases();
  const categories = getUseCaseCategories();

  return (
    <>
      <Navbar solid />
      <main>
        <ResourceHero
          eyebrow="Use cases"
          title="What you can build with Mansa"
          subtitle="Concrete ways teams and communities put African-language AI to work."
        />
        <section className="bg-cream pb-24">
          <div className="container-page">
            <UseCaseGrid useCases={useCases} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
