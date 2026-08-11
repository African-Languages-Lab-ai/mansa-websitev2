import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { MansaChatMock } from "@/components/resources/MansaChatMock";
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
            {uc.productLabel ?? uc.category}
          </span>
          <h1 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            {uc.title}
          </h1>
          <p className="mt-4 text-xl leading-relaxed text-ink-muted">
            {uc.summary}
          </p>

          {uc.meta && (
            <p className="mt-4 text-sm font-medium text-ink-muted">
              Category: {uc.meta.category} · Languages: {uc.meta.languages} · Product:{" "}
              {uc.meta.product}
            </p>
          )}

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
              <div className="mt-3 space-y-3 text-lg leading-relaxed text-ink-muted">
                {(Array.isArray(uc.solution) ? uc.solution : [uc.solution]).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              {uc.applications && (
                <>
                  <p className="mt-5 font-semibold text-ink">
                    {uc.applicationsHeading ?? "Potential applications include:"}
                  </p>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-lg leading-relaxed text-ink-muted">
                    {uc.applications.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </>
              )}
            </section>

            {uc.steps && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  In practice
                </h2>
                {uc.stepsIntro && (
                  <p className="mt-2 text-base leading-relaxed text-ink-muted">{uc.stepsIntro}</p>
                )}
                <ol className="mt-5 space-y-6">
                  {uc.steps.map((step, i) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-dark text-sm font-semibold text-ink">
                        {i + 1}
                      </span>
                      <div className="pt-0.5">
                        <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                        {step.body && (
                          <p className="mt-1.5 text-base leading-relaxed text-ink-muted">
                            {step.body}
                          </p>
                        )}
                        {step.quote && (
                          <p className="mt-1.5 text-base italic leading-relaxed text-ink-muted">
                            &ldquo;{step.quote}&rdquo;
                          </p>
                        )}
                        {step.bullets && (
                          <ul className="mt-1.5 list-disc space-y-1 pl-5 text-base leading-relaxed text-ink-muted">
                            {step.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </li>
                  ))}
                </ol>
              </section>
            )}

            {!uc.steps && uc.demo && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  In practice
                </h2>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">
                  A quick look at how this works inside Mansa.
                </p>
                <div className="mt-5">
                  <MansaChatMock
                    prompt={uc.demo.prompt}
                    response={uc.demo.response}
                  />
                </div>
              </section>
            )}

            {uc.altNote && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  {uc.altNote.heading}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-ink-muted">
                  {uc.altNote.body}
                </p>
              </section>
            )}

            {uc.tryItNext && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  Try it next
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink-muted">
                  {uc.tryItNext.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </section>
            )}

            {uc.tips && (
              <section>
                <h2 className="text-2xl font-bold tracking-tight text-ink">
                  Tips
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-relaxed text-ink-muted">
                  {uc.tips.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </section>
            )}

            {uc.disclaimer && (
              <section className="rounded-2xl border border-sunset-1/40 bg-sunset-1/10 p-6">
                <h2 className="text-base font-semibold uppercase tracking-wide text-sunset-3">
                  Important disclaimer
                </h2>
                <p className="mt-2 text-base leading-relaxed text-ink-muted">{uc.disclaimer}</p>
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
