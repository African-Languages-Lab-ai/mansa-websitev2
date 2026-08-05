import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { PageFAQ } from "@/components/product/PageFAQ";
import { Newsletter } from "@/components/overview/Newsletter";
import { getUseCases } from "@/lib/content/use-cases";
import { APP_URL, CONTACT_MAILTO } from "@/lib/links";

// General Mansa FAQ, shown on Overview (and Pricing keeps its own pricing FAQ).
const faqs = [
  {
    id: "features",
    title: "What are the core features of Mansa?",
    content:
      "Mansa combines AI chat, autonomous agents, translation, transcription, and speech capabilities into one platform designed for African languages and contexts.",
  },
  {
    id: "usage",
    title: "How is Mansa typically used?",
    content:
      "Teams use Mansa for multilingual customer support, product localization, research analysis, education, and internal operations across the languages their people actually speak.",
  },
  {
    id: "benefits",
    title: "What are the benefits of Mansa to my team?",
    content:
      "You reach more users in their mother tongue, cut translation overhead, and ship language-aware features faster, with responses that feel local rather than machine-translated.",
  },
  {
    id: "trial",
    title: "Can I try Mansa before deploying it?",
    content:
      "Yes. You can start free in the app and test the API with a generous trial before rolling Mansa out across your organization.",
  },
  {
    id: "difference",
    title: "What makes Mansa different compared to ChatGPT?",
    content:
      "Mansa is trained on billions of African-language tokens gathered through direct, community-driven research, so it understands nuance and context that general models treat as an afterthought.",
  },
  {
    id: "integrate",
    title: "Can I integrate Mansa into my existing applications?",
    content:
      "Absolutely. Mansa exposes a simple, well-documented REST API for chat, translation, and speech, with SDKs and examples to get you integrated quickly.",
  },
  {
    id: "data",
    title: "How do you train on data? Is our data private and secure?",
    content:
      "Your data stays yours. We do not train on customer data without explicit consent, and all requests are encrypted in transit and at rest.",
  },
];

export const metadata: Metadata = {
  title: "Platform Overview | Mansa",
  description:
    "Build on the Mansa platform. Add African-language AI to your products with a single API: chat, agents, translation, transcription, and speech across 30+ languages.",
};

// The five Mansa products plus the API, used for the capabilities grid.
const capabilities = [
  { icon: "✦", name: "Mansa AI", href: "/ai", desc: "Everyday chat assistant across English and 30+ African languages." },
  { icon: "◈", name: "Mansa Agent", href: "/agent", desc: "An autonomous agent that researches, plans, and takes action." },
  { icon: "⇄", name: "Mansa Translate", href: "/translate", desc: "Natural translation across 30+ African languages." },
  { icon: "◎", name: "Mansa Transcribe", href: "/transcribe", desc: "Accurate speech to text for African languages and accents." },
  { icon: "◉", name: "Mansa Interpret", href: "/interpret", desc: "Production-grade text to speech in African languages." },
  { icon: "⚙", name: "Mansa API", href: "/docs", desc: "Build all of this into your own products with one API." },
];

// Mansa features listed under "Use on your own".
const mansaFeatures = [
  "Mansa AI for chat and everyday tasks",
  "Mansa Agent for autonomous work",
  "Mansa Translate across 30+ languages",
  "Mansa Transcribe for speech to text",
  "Mansa Interpret for speech",
];

export default function OverviewPage() {
  const useCases = getUseCases().slice(0, 4);

  return (
    <>
      <Navbar solid />
      <main>
        {/* 1. Hero */}
        <section className="bg-cream px-6 pb-16 pt-[128px] text-center md:pb-24 md:pt-[160px]">
          <div className="container-page flex flex-col items-center">
            <Pill>Mansa Platform</Pill>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
              Build with Africa&apos;s AI Platform
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-ink-muted sm:text-xl">
              Bring Africa&apos;s AI into your products with one platform. Build chat, AI agents,
              translation, transcription, and speech experiences across 30+ African languages
              with Mansa.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" href={APP_URL}>
                Try Mansa <ArrowGlyph />
              </Button>
              <Button size="lg" variant="outline" href="/docs">
                See developer docs
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Choose how to get started */}
        <section className="bg-cream-dark py-24 md:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Build your way with Mansa
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                Whether you&apos;re using Mansa yourself, integrating our APIs, or deploying AI
                across your organization, there&apos;s a path built for you.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Use on your own */}
              <div className="flex flex-col rounded-3xl bg-offwhite p-8 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-ink">Use Mansa</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Your AI thinking partner for everyday work, creativity, and productivity.
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-ink-muted">
                  {mansaFeatures.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-1 text-sunset-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 self-start" href={APP_URL}>
                  Try Mansa <ArrowGlyph />
                </Button>
              </div>

              {/* Connect our APIs */}
              <div className="flex flex-col rounded-3xl bg-offwhite p-8 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-ink">Build with Mansa APIs</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Bring AI built for African languages into every product you build.
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-ink-muted">
                  {[
                    "Self-serve API access",
                    "Translation and transcription endpoints",
                    "Usage-based pricing",
                    "Guides and full API reference",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-1 text-sunset-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-8 self-start" href="/docs">
                  API docs
                </Button>
              </div>

              {/* Custom solutions */}
              <div className="flex flex-col rounded-3xl bg-offwhite p-8 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-ink">Enterprise AI Solutions</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Deploy Mansa across your organization with dedicated support, custom
                  integrations, and enterprise-grade deployments.
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-ink-muted">
                  {[
                    "Onboarding and integration support",
                    "Custom rate limits and invoicing",
                    "Dedicated language and dialect work",
                    "Deployment and prompting help",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span aria-hidden className="mt-1 text-sunset-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="mt-8 self-start" href={CONTACT_MAILTO}>
                  Contact us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why build on Mansa — platform framing */}
        <section className="bg-espresso py-24 text-center md:py-28">
          <div className="container-page">
            <span className="text-sm font-semibold uppercase tracking-wide text-sunset-1">
              Why build on Mansa?
            </span>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-onbrand sm:text-4xl md:text-5xl">
              One platform. One API. Every African language.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-onbrand/70">
              Build once and access AI chat, autonomous agents, translation, transcription, and
              speech through a unified platform designed specifically for Africa.
            </p>
          </div>
        </section>

        {/* Pricing — reuses the pricing page plans */}
        <section className="bg-cream pt-24 md:pt-28">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                Pricing that grows with you
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                Start with Mansa for free, then scale from individual productivity to enterprise
                deployment.
              </p>
            </div>
          </div>
        </section>
        <PricingPlans />

        {/* 4. Capabilities — the five products plus the API */}
        <section className="bg-cream-dark py-24 md:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                One platform. Every Mansa product.
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                Everything you need to think, automate, translate, transcribe, and build across
                African languages.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c) => (
                <Link
                  key={c.name}
                  href={c.href}
                  className="group rounded-2xl bg-offwhite p-7 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sunset-1 text-2xl text-white">
                    <span aria-hidden>{c.icon}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{c.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Developer docs callout */}
        <section className="bg-cream py-16">
          <div className="container-page">
            <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-espresso p-8 text-center md:flex-row md:p-10 md:text-left">
              <div>
                <h2 className="text-2xl font-bold text-onbrand">
                  Everything developers need to build with Mansa.
                </h2>
                <p className="mt-2 text-onbrand/70">
                  Documentation, SDKs, guides, and API references to help you integrate Mansa in
                  minutes.
                </p>
              </div>
              <Button variant="light" href="/docs">
                View documentation <ArrowGlyph />
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Use cases teaser */}
        <section className="bg-cream-dark py-24 md:py-28">
          <div className="container-page">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                What you can build with Mansa
              </h2>
              <p className="mt-4 text-lg text-ink-muted">
                From multilingual support to education, Mansa helps organizations build products
                that understand Africa.
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {useCases.map((u) => (
                <Link
                  key={u.slug}
                  href={`/resources/use-cases/${u.slug}`}
                  className="group flex flex-col rounded-2xl bg-offwhite p-6 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sunset-1 text-xl text-white">
                    <span aria-hidden>{u.icon}</span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold leading-snug text-ink group-hover:text-accent">
                    {u.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Learn more
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Button variant="outline" href="/resources/use-cases">
                See all use cases
              </Button>
            </div>
          </div>
        </section>

        {/* 7. Mission and Vision */}
        <section className="bg-cream py-24 md:py-28">
          <div className="container-page">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col rounded-3xl bg-maroon p-10 text-onbrand">
                <span className="text-sm font-semibold uppercase tracking-wide text-onbrand/70">
                  Mission
                </span>
                <p className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
                  To build AI that understands Africa, empowering people and organizations to
                  think, create, and connect without language barriers.
                </p>
              </div>
              <div className="flex flex-col rounded-3xl bg-espresso p-10 text-onbrand">
                <span className="text-sm font-semibold uppercase tracking-wide text-sunset-1">
                  Vision
                </span>
                <p className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
                  A world where every person and organization can access intelligence,
                  opportunity, and innovation in their own language.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PageFAQ faqs={faqs} />

        {/* 8. Bottom CTA band */}
        <section className="bg-cream-dark py-20">
          <div className="container-page text-center">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Start building with Africa&apos;s AI Platform
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button size="lg" href={APP_URL}>
                Try Mansa <ArrowGlyph />
              </Button>
              <Button size="lg" variant="outline" href="/pricing">
                See pricing
              </Button>
              <Button size="lg" variant="outline" href={CONTACT_MAILTO}>
                Contact sales
              </Button>
            </div>
          </div>
        </section>

        {/* 9. Newsletter */}
        <section className="bg-cream py-20">
          <div className="container-page">
            <Newsletter />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
