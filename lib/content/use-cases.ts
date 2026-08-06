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
      "Much of Africa's linguistic heritage lives in audio recordings, oral histories, and handwritten field notes that are hard to search, share, or study at scale. Elders carry knowledge that has never been written down, archives sit on shelves in formats no one can query, and every year that passes without documentation means stories, dialects, and entire ways of speaking are quietly lost. Manual transcription is slow and expensive, and few tools handle African languages well enough to help.",
    solution:
      "Mansa transcribes speech and organizes it across dozens of African languages, turning hours of recordings into clean, searchable text without changing the speaker's original wording. Researchers and communities can index oral histories, add English translations side by side, and build living archives that are easy to revisit and share. What used to take weeks of manual work becomes something a small team, or a single community member, can do in an afternoon.",
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
      "Students learn best in the language they think in, yet most digital learning tools speak only a handful of global languages. Across the continent, children are asked to grasp new concepts and a foreign language at the same time, which slows learning and leaves many behind. Teachers rarely have materials in their pupils' mother tongue, and off-the-shelf AI tutors either refuse local languages or answer with confident mistakes.",
    solution:
      "Mansa explains concepts, answers questions, and supports reading and writing practice across African languages and English, matched to a learner's level. A pupil can ask for a science idea to be broken down in their first language, practice writing with instant feedback, and check their understanding with follow-up questions. Teachers and edtech builders can use the same capabilities to generate lessons, quizzes, and explanations that finally meet students where they are.",
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
      "Teams want to serve customers across many African languages, but hiring native-speaking agents for every market and dialect is expensive and slow. Support tickets pile up in languages the team cannot read, machine translation strips out tone and politeness, and users are pushed to a second language they may not be comfortable in. The result is longer resolution times, frustrated customers, and markets that feel like an afterthought.",
    solution:
      "Mansa reads and replies in the customer's own language with the right tone and local nuance, so a single team can support many markets at once. It drafts warm, on-brand responses, summarizes incoming messages, and helps localize help centers, product copy, and onboarding flows. Support and product teams move faster, reach more people, and make every market feel first class rather than translated.",
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
      "Critical public information, health guidance, tax notices, election details, and emergency alerts, often reaches citizens only in official languages that many people do not read fluently. When a message is misunderstood or never reaches a community at all, the cost is measured in missed clinic visits, unclaimed services, and eroded trust. Translating every notice by hand into dozens of local languages is simply not feasible for most agencies.",
    solution:
      "Mansa translates public service content across African languages while preserving the exact meaning, keeping notices short, clear, and appropriate for posters, SMS, or radio scripts. Agencies can push the same message out in many languages at once, adapt reading levels for different audiences, and reach communities in the languages they actually use. Clear communication becomes something a small public-sector team can deliver at national scale.",
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
      "Publishers, broadcasters, and creators want to reach African audiences, but localization is slow, costly, and rarely keeps up with the pace they publish. Word-for-word translation flattens humor, idiom, and cultural references, so content that lands in one language falls flat in another. As a result, huge audiences are served thin, awkward versions of stories, or skipped entirely.",
    solution:
      "Mansa localizes articles, scripts, subtitles, taglines, and captions across African languages, adapting tone and cultural context instead of translating literally. Creators can produce several native-sounding versions of the same piece in minutes, tune copy for different regions or age groups, and keep a consistent voice across every market. Content feels made for the audience, not translated at them.",
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
      "Developers building for African markets lack reliable language infrastructure. General translation and speech APIs support few African languages, handle dialects poorly, and often return fluent but wrong results that are hard to catch in production. Building this capability in-house means collecting data, training models, and maintaining them, an effort most teams cannot justify, so African-language features get cut from the roadmap.",
    solution:
      "The Mansa platform exposes African-language translation, transcription, chat, and speech through a single, well-documented API, so teams can ship these features without building models from scratch. Clean endpoints, SDKs, and examples make integration a matter of hours, and the same models that power the Mansa app power your product. Developers get dependable African-language AI as infrastructure, and can focus on what they are building on top of it.",
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
