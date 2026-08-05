import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResourceHero } from "@/components/resources/ResourceHero";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { getCustomerStories } from "@/lib/content/customer-stories";
import { CONTACT_MAILTO } from "@/lib/links";

export const metadata: Metadata = {
  title: "Customer Stories | Mansa",
  description:
    "Real organizations and teams building with Mansa's African-language AI. Named customer stories coming soon.",
};

export default function CustomerStoriesPage() {
  const stories = getCustomerStories();

  return (
    <>
      <Navbar solid />
      <main>
        <ResourceHero
          eyebrow="Customer stories"
          title="Built with Mansa"
          subtitle="Real teams putting African-language AI to work."
        />

        <section className="bg-cream pb-24">
          <div className="container-page">
            {stories.length === 0 ? (
              // Coming-soon state: never fabricate named customers or quotes.
              <div className="mx-auto max-w-2xl rounded-3xl bg-cream-dark p-10 text-center sm:p-14">
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  Stories coming soon
                </h2>
                <p className="mx-auto mt-3 max-w-lg text-lg text-ink-muted">
                  We are preparing customer stories with early users and partners.
                  If your team is building with Mansa and would like to be featured,
                  we would love to hear from you.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <Button href={CONTACT_MAILTO}>
                    Get in touch <ArrowGlyph />
                  </Button>
                  <Button variant="outline" href="/resources/use-cases">
                    Explore use cases
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {stories.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/resources/customer-stories/${s.slug}`}
                    className="group flex flex-col rounded-2xl bg-offwhite p-7 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-soft"
                  >
                    <span className="text-xs font-medium uppercase tracking-wide text-sunset-3">
                      {s.industry}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-ink group-hover:text-accent">
                      {s.org}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {s.oneLiner}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
