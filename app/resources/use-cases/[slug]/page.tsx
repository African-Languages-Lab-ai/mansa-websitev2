import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { getUseCases, getUseCase } from "@/lib/content/use-cases";
import { APP_URL, CONTACT_MAILTO } from "@/lib/links";

export function generateStaticParams() {
  return getUseCases().map((u) => ({ slug: u.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const uc = getUseCase(params.slug);
  if (!uc) return { title: "Use Cases | Mansa" };
  return {
    title: `${uc.title} | Mansa Use Cases`,
    description: uc.summary,
  };
}

export default function UseCasePage({ params }: { params: { slug: string } }) {
  const uc = getUseCase(params.slug);
  if (!uc) notFound();

  return (
    <>
      <Navbar solid />
      <main className="bg-cream pb-24 pt-[128px] md:pt-[160px]">
        <div className="container-page max-w-3xl">
          <Link
            href="/resources/use-cases"
            className="inline-flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
          >
            <span aria-hidden>←</span> Back to use cases
          </Link>

          <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sunset-1 text-3xl text-white">
            <span aria-hidden>{uc.icon}</span>
          </div>
          <span className="mt-6 block text-sm font-medium uppercase tracking-wide text-sunset-3">
            {uc.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {uc.title}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-ink-muted">
            {uc.summary}
          </p>

          {uc.placeholder && (
            <p className="mt-8 rounded-xl border border-sunset-1/40 bg-sunset-1/10 px-4 py-3 text-sm text-ink-muted">
              Illustrative scenario shown to demonstrate the format. Named, verified examples live in Customer Stories.
            </p>
          )}

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                The challenge
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                {uc.challenge}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold tracking-tight text-ink">
                How Mansa helps
              </h2>
              <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                {uc.solution}
              </p>
            </section>

            {uc.example && (
              <section className="rounded-2xl bg-offwhite p-6 ring-1 ring-black/5">
                <h2 className="text-lg font-semibold text-ink">In practice</h2>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">
                  {uc.example}
                </p>
              </section>
            )}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col gap-3 rounded-3xl bg-cream-dark p-8 text-center sm:flex-row sm:justify-center">
            <Button href={APP_URL}>
              Try Mansa <ArrowGlyph />
            </Button>
            <Button variant="outline" href={CONTACT_MAILTO}>
              Contact us
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
