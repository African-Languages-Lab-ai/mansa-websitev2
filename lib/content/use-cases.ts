import type { UseCase, UseCaseCategory } from "./types";

// Illustrative, scenario based use cases. These do not name specific customers.
// Named, verified examples live in customer-stories.ts.
//
// NOTE: the African-language sample text in each `demo` is illustrative and
// should be reviewed by a native speaker before it is treated as authoritative.
export const useCases: UseCase[] = [
  {
    slug: "language-preservation-and-documentation",
    title: "Preserve and document endangered languages",
    summary:
      "Turn recordings and field notes into searchable, structured records across African languages.",
    category: "Language preservation",
    icon: "◈",
    challenge:
      "Much of Africa's linguistic heritage lives in audio recordings and handwritten notes that are hard to search, share, or study at scale.",
    solution:
      "Mansa transcribes speech and organizes it across dozens of African languages, so researchers and communities can document, search, and revisit their languages with far less manual effort.",
    demo: {
      prompt:
        "I recorded an elder telling a Yoruba folktale. Transcribe it and give me a clean version to archive.",
      response: [
        "Done. I detected the language as Yoruba and transcribed the full recording, keeping the storyteller's original phrasing.",
        "I split it into timed segments and tidied the punctuation so it reads clearly, without changing any of the wording.",
        "Segment 1 (0:00 to 0:38): the narrator introduces Ijapa, the tortoise, and sets up the lesson of the tale.",
        "Want me to add an English translation next to the Yoruba for the archive?",
      ],
    },
  },
  {
    slug: "education-and-literacy-tools",
    title: "Build education and literacy tools",
    summary:
      "Give learners tutoring and study help in their mother tongue, at any level.",
    category: "Education & literacy",
    icon: "✦",
    challenge:
      "Students learn best in their first language, yet most digital learning tools are only available in a handful of global languages.",
    solution:
      "Mansa explains concepts, answers questions, and supports reading and writing practice across African languages, making learning material accessible to more students.",
    demo: {
      prompt: "Explain photosynthesis to a Primary 5 pupil in simple Swahili.",
      response: [
        "Here's a simple explanation at a Primary 5 level, in Swahili:",
        {
          quote:
            "Mimea hutumia mwanga wa jua, maji, na hewa kutengeneza chakula chao. Kwa kufanya hivyo, hutoa hewa safi tunayovuta.",
        },
        "In English: plants use sunlight, water, and air to make their own food, and by doing so they release the fresh air we breathe.",
        "Want a few practice questions in Swahili to go with it?",
      ],
    },
  },
  {
    slug: "customer-support-and-localization",
    title: "Support customers in the languages they speak",
    summary:
      "Resolve conversations and localize products for African language markets.",
    category: "Customer support & localization",
    icon: "⇄",
    challenge:
      "Teams struggle to serve users across many African languages without large localization budgets and native speaking staff for every market.",
    solution:
      "Mansa translates and responds with local nuance, so support and product teams can meet users in their own language and localize content faster.",
    demo: {
      prompt:
        "A customer messaged in Swahili, upset that their order arrived late. Draft a warm, apologetic reply in Swahili.",
      response: [
        "Here's a warm, apologetic reply in Swahili you can send as is:",
        {
          quote:
            "Samahani sana kwa kuchelewa kwa oda yako. Tunaelewa jinsi hili linavyoudhi, na tunalishughulikia sasa hivi. Utapata taarifa mpya leo, na tumekuandalia punguzo dogo kama radhi.",
        },
        "It stays friendly and respectful, and offers a small goodwill discount. Want a shorter version for SMS?",
      ],
    },
  },
  {
    slug: "government-and-public-service-translation",
    title: "Translate government and public services",
    summary:
      "Make public information and services available in local languages.",
    category: "Government & public service",
    icon: "◉",
    challenge:
      "Critical public information often reaches citizens only in official languages, leaving many communities underserved.",
    solution:
      "Mansa translates public service content across African languages while preserving meaning, helping agencies communicate clearly with the communities they serve.",
    demo: {
      prompt:
        'Translate this malaria notice into clear, simple Swahili for a poster: "Sleep under a treated mosquito net every night and remove standing water near your home."',
      response: [
        "Here's a clear, simple Swahili translation suited to a public poster:",
        {
          quote:
            "Lala ndani ya chandarua chenye dawa kila usiku, na ondoa maji yaliyotuama karibu na nyumbani kwako.",
        },
        "I kept it short and direct so it's easy to read at a glance. Want it in Hausa and Yoruba as well?",
      ],
    },
  },
  {
    slug: "media-and-content-localization",
    title: "Localize media and content",
    summary:
      "Translate and adapt media for audiences across the continent.",
    category: "Media & content",
    icon: "◎",
    challenge:
      "Publishers and creators want to reach African audiences but cannot localize at the speed and scale their output demands.",
    solution:
      "Mansa localizes articles, scripts, and subtitles across African languages, keeping tone and context intact so content feels native rather than machine translated.",
    demo: {
      prompt:
        'Localize this tagline for an East African audience: "Banking made simple." Give me a Swahili version and a warmer alternative.',
      response: [
        "Here's a natural Swahili localization, not a word for word translation:",
        { quote: "Benki iliyorahisishwa." },
        "A warmer, more conversational alternative:",
        { quote: "Huduma za benki, bila usumbufu." },
        'That second line reads as "banking services, without the hassle." Want variations tuned for a younger, social audience?',
      ],
    },
  },
  {
    slug: "developer-and-api-use-cases",
    title: "Build on the Mansa API",
    summary:
      "Bring African language AI into your own products with a single API.",
    category: "Developer & API",
    icon: "⚙",
    challenge:
      "Developers building for African markets lack reliable language infrastructure to power translation, transcription, and chat.",
    solution:
      "The Mansa platform exposes African language capabilities through a well documented API, so teams can add translation, transcription, and assistant features without building models from scratch.",
    demo: {
      prompt:
        "Show me a quick example of calling the Mansa API to translate English into Swahili.",
      response: [
        "Here's a minimal request to the Mansa translation endpoint:",
        {
          code: 'curl https://api.mansa.ai/v1/translate \\\n  -H "Authorization: Bearer $MANSA_API_KEY" \\\n  -H "Content-Type: application/json" \\\n  -d \'{ "text": "Welcome to Mansa", "source": "en", "target": "sw" }\'',
        },
        "The response returns the translated text along with the detected source language and a confidence score. Want a Python example next?",
      ],
    },
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
