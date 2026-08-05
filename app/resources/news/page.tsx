import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResourceHero } from "@/components/resources/ResourceHero";
import { NewsList } from "@/components/resources/NewsList";
import { getPosts, getFeatured, getCategories } from "@/lib/content/posts";
import { CONTACT_MAILTO } from "@/lib/links";

export const metadata: Metadata = {
  title: "News | Mansa",
  description:
    "Product launches, partnerships, and press from Mansa and the African Languages Lab.",
};

export default function NewsIndexPage() {
  const all = getPosts("news");
  const featured = getFeatured("news");
  const rest = all.filter((p) => p.slug !== featured?.slug);
  const categories = getCategories("news");

  return (
    <>
      <Navbar solid />
      <main>
        <ResourceHero
          eyebrow="Newsroom"
          title="News and announcements"
          subtitle="The latest from Mansa and the African Languages Lab."
        />
        <section className="bg-cream pb-24">
          <div className="container-page">
            <NewsList featured={featured} items={rest} categories={categories} />

            {/* Press inquiries */}
            <div className="mt-16 rounded-2xl bg-cream-dark p-6 text-center">
              <h2 className="text-lg font-semibold text-ink">Press inquiries</h2>
              <p className="mt-1 text-sm text-ink-muted">
                For media requests, reach the African Languages Lab team.
              </p>
              <a
                href={CONTACT_MAILTO}
                className="mt-3 inline-block text-sm font-medium text-accent hover:underline"
              >
                info@africanlanguageslab.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
