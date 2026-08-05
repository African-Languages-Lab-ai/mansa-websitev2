import type { UseCase, UseCaseCategory } from "./types";

// Illustrative, scenario based use cases. These do not name specific customers.
// Named, verified examples live in customer-stories.ts.
export const useCases: UseCase[] = [
  {
    slug: "language-preservation-and-documentation",
    title: "Preserve and document endangered languages",
    summary:
      "Turn recordings and field notes into searchable, structured records across African languages.",
    category: "Language preservation",
    icon: "◈", // ◈
    challenge:
      "Much of Africa's linguistic heritage lives in audio recordings and handwritten notes that are hard to search, share, or study at scale.",
    solution:
      "Mansa transcribes speech and organizes it across dozens of African languages, so researchers and communities can document, search, and revisit their languages with far less manual effort.",
    example:
      "A community archive uploads oral history recordings and receives searchable transcripts in the original language.",
  },
  {
    slug: "education-and-literacy-tools",
    title: "Build education and literacy tools",
    summary:
      "Give learners tutoring and study help in their mother tongue, at any level.",
    category: "Education & literacy",
    icon: "✦", // ✦
    challenge:
      "Students learn best in their first language, yet most digital learning tools are only available in a handful of global languages.",
    solution:
      "Mansa explains concepts, answers questions, and supports reading and writing practice across African languages, making learning material accessible to more students.",
    example:
      "A learner asks for a concept to be explained in Twi, then practices writing with instant feedback.",
  },
  {
    slug: "customer-support-and-localization",
    title: "Support customers in the languages they speak",
    summary:
      "Resolve conversations and localize products for African language markets.",
    category: "Customer support & localization",
    icon: "⇄", // ⇄
    challenge:
      "Teams struggle to serve users across many African languages without large localization budgets and native speaking staff for every market.",
    solution:
      "Mansa translates and responds with local nuance, so support and product teams can meet users in their own language and localize content faster.",
    example:
      "A support team routes a Swahili conversation through Mansa and replies with culturally aware responses.",
  },
  {
    slug: "government-and-public-service-translation",
    title: "Translate government and public services",
    summary:
      "Make public information and services available in local languages.",
    category: "Government & public service",
    icon: "◉", // ◉
    challenge:
      "Critical public information often reaches citizens only in official languages, leaving many communities underserved.",
    solution:
      "Mansa translates public service content across African languages while preserving meaning, helping agencies communicate clearly with the communities they serve.",
  },
  {
    slug: "media-and-content-localization",
    title: "Localize media and content",
    summary:
      "Translate and adapt media for audiences across the continent.",
    category: "Media & content",
    icon: "◎", // ◎
    challenge:
      "Publishers and creators want to reach African audiences but cannot localize at the speed and scale their output demands.",
    solution:
      "Mansa localizes articles, scripts, and subtitles across African languages, keeping tone and context intact so content feels native rather than machine translated.",
  },
  {
    slug: "developer-and-api-use-cases",
    title: "Build on the Mansa API",
    summary:
      "Bring African language AI into your own products with a single API.",
    category: "Developer & API",
    icon: "⚙", // ⚙
    challenge:
      "Developers building for African markets lack reliable language infrastructure to power translation, transcription, and chat.",
    solution:
      "The Mansa platform exposes African language capabilities through a well documented API, so teams can add translation, transcription, and assistant features without building models from scratch.",
    example:
      "A fintech app integrates Mansa to offer in app support across several African languages.",
  },
];

export function getUseCases(): UseCase[] {
  return useCases;
}

export function getUseCase(slug: string): UseCase | undefined {
  return useCases.find((u) => u.slug === slug);
}

export function getUseCaseCategories(): UseCaseCategory[] {
  return Array.from(new Set(useCases.map((u) => u.category))) as UseCaseCategory[];
}
