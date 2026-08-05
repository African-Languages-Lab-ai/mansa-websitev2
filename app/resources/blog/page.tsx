import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResourceHero } from "@/components/resources/ResourceHero";
import { FilterableGrid } from "@/components/resources/FilterableGrid";
import { getPosts, getCategories } from "@/lib/content/posts";

export const metadata: Metadata = {
  title: "Blog | Mansa",
  description:
    "Thought leadership, research, and mission stories from the African Languages Lab on building AI for African languages.",
};

export default function BlogIndexPage() {
  const posts = getPosts("blog");
  const categories = getCategories("blog");

  return (
    <>
      <Navbar solid />
      <main>
        <ResourceHero
          eyebrow="Blog"
          title="Ideas, research, and impact"
          subtitle="Long-form thinking from the African Languages Lab on the technology and the mission behind Mansa."
        />
        <section className="bg-cream pb-24">
          <div className="container-page">
            <FilterableGrid posts={posts} categories={categories} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
