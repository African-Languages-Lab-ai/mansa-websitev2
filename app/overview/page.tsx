import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button, ArrowGlyph } from "@/components/ui/Button";
import { Pill } from "@/components/ui/Pill";
import { PluginsSection } from "@/components/product/PluginsSection";
import { PageFAQ } from "@/components/product/PageFAQ";
import { Newsletter } from "@/components/overview/Newsletter";
import { getUseCases } from "@/lib/content/use-cases";
import { APP_URL, CONTACT_MAILTO, DOCS_URL } from "@/lib/links";

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
    "The Mansa product suite: chat, agents, translation, transcription, text-to-speech, and speech translation built for African languages. Build on one platform.",
};

// Mansa product suite — no icons; each has a two-line benefit description.
const productSuite: {
  name: string;
  href: string;
  desc: string;
  comingSoon?: boolean;
}[] = [
  {
    name: "Mansa AI",
    href: "/ai",
    desc: "Your everyday AI thinking partner for chat, writing, coding, and problem-solving. Ideal for learning, brainstorming, and answers across 30+ African languages.",
  },
  {
    name: "Mansa Agent",
    href: "/agent",
    desc: "An autonomous agent that researches, plans, and acts across your tools. Ideal for automating email, calendars, research, and recurring work.",
  },
  {
    name: "Mansa Translate",
    href: "/translate",
    desc: "Natural, context-aware translation across 30+ African languages. Ideal for localizing products, support, and content without losing meaning.",
  },
  {
    name: "Mansa Transcribe",
    href: "/transcribe",
    desc: "Accurate speech-to-text tuned for African accents and dialects. Ideal for transcribing meetings, interviews, lectures, and voice notes.",
  },
  {
    name: "Mansa TTS",
    href: "/tts",
    desc: "Production-grade text-to-speech in natural African voices. Ideal for narration, voice prompts, and making written content accessible as audio.",
  },
  {
    name: "Mansa Interpret",
    href: "/interpret",
    desc: "Real-time speech translation between African languages. Ideal for live conversations across the language barrier.",
    comingSoon: true,
  },
];

// Relevant, use-case-specific icons.
function UseCaseIcon({ slug }: { slug: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
    "aria-hidden": true,
  };
  switch (slug) {
    case "language-preservation-and-documentation":
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 0 1 2-2h8v18H6a2 2 0 0 1-2-2z" />
          <path d="M14 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M8 8h4M8 12h4" />
        </svg>
      );
    case "education-and-literacy-tools":
      return (
        <svg {...common}>
          <path d="M22 10 12 5 2 10l10 5 10-5z" />
          <path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" />
        </svg>
      );
    case "customer-support-and-localization":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.4 8.4 0 0 1-11.9 7.6L3 21l1.9-6.1A8.4 8.4 0 1 1 21 11.5z" />
        </svg>
      );
    case "government-and-public-service-translation":
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V10m14 11V10M4 10l8-6 8 6M9 21v-6h6v6" />
        </svg>
      );
    case "media-and-content-localization":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="m10 8 5 3-5 3zM8 22h8" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 5l-2 14" />
        </svg>
      );
  }
}

export default function OverviewPage() {
  const useCases = getUseCases();

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
              <Button size="lg" variant="outline" href={DOCS_URL}>
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
              <div className="flex flex-col rounded-3xl bg-offwhite p-8 shadow-sm ring-1 ring-black/5">
                <h3 className="text-xl font-semibold text-ink">Use Mansa</h3>
                <p className="mt-2 text-sm text-ink-muted">
                  Your AI thinking partner for everyday work, creativity, and productivity.
                </p>
                <ul className="mt-6 flex-1 space-y-3 text-ink-muted">
                  {[
                    "Mansa AI for chat and everyday tasks",
                    "Mansa Agent for autonomous work",
                    "Mansa Translate across 30+ languages",
                    "Mansa Transcribe for speech to text",
                    "Mansa TTS for text to speech",
                  ].map((item) => (
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
                <Button variant="outline" className="mt-8 self-start" href={DOCS_URL}>
                  API docs
                </Button>
              </div>

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

        {/* 3. Mansa Product suite */}
        <section className="bg-cream py-24 md:py-28">
          <div className="container-page">
            <h2 className="text-center text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Mansa Product suite
            </h2>
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {productSuite.map((p) => (
                <Link
                  key={p.name}
                  href={p.href}
                  className="group flex flex-col rounded-2xl bg-offwhite p-7 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
                >
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-ink transition-colors group-hover:text-accent">
                      {p.name}
                    </h3>
                    {p.comingSoon && (
                      <span className="rounded-full bg-sunset-1/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sunset-3">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Plugins */}
        <PluginsSection />

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
              <Button variant="light" href={DOCS_URL}>
                View documentation <ArrowGlyph />
              </Button>
            </div>
          </div>
        </section>

        {/* 6. Use cases — header, description, learn more per item */}
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
            <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {useCases.map((u) => (
                <div key={u.slug} className="flex flex-col">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sunset-1/15 text-accent">
                    <UseCaseIcon slug={u.slug} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight text-ink">
                    {u.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-relaxed text-ink-muted">
                    {u.summary}
                  </p>
                  <Link
                    href={`/resources/use-cases/${u.slug}`}
                    className="group mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent focus:outline-none"
                  >
                    Learn more
                    <span aria-hidden className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              ))}
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
