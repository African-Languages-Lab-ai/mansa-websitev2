import type { UseCase, UseCaseCategory } from "./types";

// Illustrative, scenario based use cases. These do not name specific customers.
// Named, verified examples live in customer-stories.ts.
//
// NOTE: the African-language sample text in each `demo` is illustrative and
// should be reviewed by a native speaker before it is treated as authoritative.
export const useCases: UseCase[] = [
  {
    slug: "language-preservation-and-documentation",
    title: "Turn a box of cassette tapes into a searchable Yoruba archive",
    summary:
      "Mansa transcribes oral recordings across African languages and keeps the original wording intact, so preservation work doesn't depend on how many hours one researcher has free this month.",
    category: "Language preservation",
    icon: "◈",
    meta: {
      category: "Research & Archives",
      languages: "30+ African languages",
      product: "Mansa Transcribe",
    },
    challenge:
      "A lot of what makes up a community's linguistic memory only exists as sound: an elder's folktale on a cassette, a griot's praise-song recorded on a phone, a linguist's decades-old field tapes sitting in a box. None of it is searchable. None of it can be cited, indexed, or cross-referenced until someone sits down and transcribes it by hand, which is slow, expensive, and rare for languages most transcription services don't support well. Every year that passes without documentation is a year closer to losing a dialect, a story, or a way of speaking for good.",
    solution:
      "Mansa Transcribe is a standalone tool. You select the source language, then either upload an audio file or record directly in the app, and hit Transcribe. It returns the speech as text in that same source language, preserving the speaker's exact wording.",
    steps: [
      {
        title: "Select the source language",
        body: "Choose the language being spoken in the recording, for example Yoruba.",
      },
      {
        title: "Upload or record",
        body: "Upload an existing audio file, a cassette digitization, a phone recording, a field tape, or record live if you're sitting with the elder or interviewee in person.",
      },
      {
        title: "Hit Transcribe",
        body: "Mansa returns the full transcript as text in the source language, with the speaker's original wording preserved.",
      },
    ],
    altNote: {
      heading: "If you need it in another language too",
      body: "To get an English version of the transcript, take the output and run it through Mansa Translate separately: choose Yoruba as the source, English as the target, and paste the transcript in.",
    },
    tips: [
      "Upload the highest quality audio you have. Background noise and low bitrate audio reduce transcription accuracy more than dialect or accent does.",
      "If a recording mixes two languages, select whichever language dominates the recording as the source language, since Transcribe works from a single selected source language.",
    ],
  },
  {
    slug: "education-and-literacy-tools",
    title: "Turn one science concept into three reading levels, in Swahili",
    summary:
      "Mansa explains, tutors, and checks understanding in a learner's mother tongue, so kids aren't learning a new concept and a second language at the same time.",
    category: "Education & literacy",
    icon: "✦",
    meta: {
      category: "EdTech & Classroom Tools",
      languages: "30+ African languages",
      product: "Mansa AI",
    },
    challenge:
      "Most digital learning tools only work in a handful of global languages, which means a student who thinks in Swahili or Hausa has to translate a concept into a second language before they can even start learning it. That extra step slows everyone down and quietly disadvantages the kids who need the most support. Teachers rarely have leveled materials in their pupils' home language, and generic AI tutors either refuse to answer in the language at all or answer confidently in ways that are subtly wrong.",
    solution:
      "Mansa explains concepts, answers follow-up questions, and supports reading and writing practice across African languages and English, adjusted to a learner's grade level. Teachers and edtech builders can use the same underlying model to generate leveled handouts, quizzes, and lesson explanations in one pass.",
    steps: [
      {
        title: "Describe the task",
        quote:
          "Explain photosynthesis for a Primary 5 class in Swahili. Then give me the same explanation again for a Primary 3 class using simpler vocabulary, and write three short comprehension questions in Swahili for each level.",
      },
      {
        title: "Give Mansa context",
        bullets: [
          "The grade or reading level you're targeting",
          "Any curriculum standard or textbook section the explanation should match",
          "Whether you want English alongside the Swahili, or Swahili only",
        ],
      },
      {
        title: "What Mansa returns",
        body: "Two leveled explanations delivered, Primary 5 and Primary 3, each under 80 words with an English line beneath for teacher reference. Six comprehension questions total, three per level, plus a short vocabulary list flagging which words were simplified for the younger group.",
      },
    ],
    tryItNext: [
      "Turn the Primary 5 version into a one-page worksheet with a fill-in-the-blank section.",
      "Explain the same concept in Hausa and Amharic too, so I can compare across my three classrooms.",
    ],
    tips: [
      'Name the grade level and subject standard explicitly. Mansa\'s vocabulary choices shift a lot between "explain simply" and "explain for a Primary 3 pupil."',
      "Ask for a vocabulary list alongside any simplified explanation. It's the fastest way to check what got cut or changed before sharing the material with a class.",
    ],
  },
  {
    slug: "customer-support-and-localization",
    title: "Reply to an angry customer in Swahili, in the tone your brand actually uses",
    summary:
      "Mansa reads and replies in the customer's own language with local nuance, so one support team can cover many African-language markets without hiring an agent per language.",
    category: "Customer support & localization",
    icon: "⇄",
    meta: {
      category: "Customer Experience & Support Ops",
      languages: "30+ African languages",
      product: "Mansa AI (Mansa Translate for literal text conversion)",
    },
    challenge:
      "Serving customers across multiple African languages usually means one of two bad options: hire native-speaking agents for every market you operate in, which is expensive and slow to scale, or run everything through generic machine translation, which strips out tone, politeness markers, and cultural context that make a reply feel like it came from a real person. Support tickets pile up in languages the core team can't read, and customers get pushed toward a second language they'd rather not use.",
    solution: [
      "This one runs through Mansa AI chat. Drafting a reply with a specific tone, in your brand voice, with a discount code worked in, is a generation task, so it needs the chat, which writes directly in the customer's language.",
      "If you've already written the reply in English and want it converted as-is, Mansa Translate handles that: choose English as the source, Swahili as the target, paste the text in.",
    ],
    steps: [
      {
        title: "Describe the task, in chat",
        quote:
          "This customer messaged in Swahili, frustrated their order arrived five days late. Draft a warm, apologetic reply in our brand voice, offer a 10% discount code, and keep it under 60 words so it works as an SMS too.",
      },
      {
        title: "Give Mansa context",
        bullets: [
          "The original customer message",
          "Your brand's tone guide or a couple of example replies in English to match",
          "Any policy limits, refund caps, discount rules, escalation triggers",
        ],
      },
      {
        title: "What Mansa returns",
        body: "Reply drafted in Swahili, apologetic but not over-apologizing, discount code inserted, 54 words.",
      },
    ],
    tryItNext: [
      "Rewrite that reply for a customer who's messaged us three times this month. Slightly firmer, still polite.",
      "Now write the same kind of apologetic reply for a late delivery complaint in Hausa.",
    ],
  },
];

/* ----------------------------------------------------------------------
 * Retired for now (kept for easy restoration): Government & public service,
 * Media & content, Developer & API. Re-add to `useCases` above to bring
 * them back — content and copy are unchanged.
 * ------------------------------------------------------------------- */
export const retiredUseCases: UseCase[] = [
  {
    slug: "government-and-public-service-translation",
    title: "Get one health notice into five local languages before the print deadline",
    summary:
      "Mansa translates public information while preserving exact meaning, formatted for posters, SMS blasts, or radio scripts, so a small team can communicate at national scale.",
    category: "Government & public service",
    icon: "◉",
    meta: {
      category: "Public Health & Civic Communication",
      languages: "30+ African languages",
      product: "Mansa AI (Mansa Translate for literal text conversion)",
    },
    challenge:
      "Health guidance, tax notices, election information, and emergency alerts often only reach citizens in a country's official language, which many residents don't read fluently day to day. When a notice is misunderstood or never reaches a community at all, the cost shows up as missed clinic visits, unclaimed benefits, or people who simply didn't know what to do in an emergency. Translating every notice into a dozen or more local languages by hand isn't realistic for most agency-sized teams.",
    solution: [
      "This works through Mansa AI chat. Getting a notice down to poster length, or rewritten for a 10-second radio read, means reshaping the text, so it needs the chat's drafting ability, in the target language directly.",
      "For a final, approved translation converted into another language exactly as written, Mansa Translate handles that: choose the language pair, paste the text in, get the translation out.",
    ],
    steps: [
      {
        title: "Describe the task, in chat",
        quote:
          'Translate this into simple, direct Swahili suitable for a wall poster with large text: "Sleep under a treated mosquito net every night and remove standing water near your home." Then give me the same message in Hausa, Yoruba, and Amharic, each under 15 words.',
      },
      {
        title: "Give Mansa context",
        bullets: [
          "The original notice, in full, with any legal or medical phrasing that must stay exact",
          "The output format: poster, SMS, radio script, each has different length and tone constraints",
          "The reading level you're targeting, since public notices often need to work for low-literacy audiences",
        ],
      },
      {
        title: "What Mansa returns",
        body: "Four translations delivered, each under 15 words, formatted for poster display. A radio script variant included for each language as well, written to read naturally aloud in under 10 seconds.",
      },
    ],
    tryItNext: [
      "Turn this into a 3-question SMS survey in the same four languages, to check if the message landed.",
      "Simplify the Swahili version further for an audience with limited literacy. Fewer clauses, shorter words.",
    ],
    tips: [
      "Specify the output format up front. A poster line, an SMS, and a radio script all need different lengths and rhythms even when the underlying message is identical.",
      "For anything legally or medically sensitive, ask Mansa to flag any place where an exact literal translation isn't possible so a native-speaking reviewer can check that specific line before publishing.",
    ],
  },
  {
    slug: "media-and-content-localization",
    title: "Turn one tagline into five versions that don't sound translated",
    summary:
      "Mansa AI adapts tone and cultural context when localizing copy, scripts, and captions, so content reads the way a native speaker would actually write it.",
    category: "Media & content",
    icon: "◎",
    meta: {
      category: "Media, Marketing & Content",
      languages: "30+ African languages",
      product: "Mansa AI (Mansa Translate for literal text conversion)",
    },
    challenge:
      "Publishers and creators want to reach African audiences, but localization is usually slow, costly, and out of sync with how fast content actually gets published. Literal, word-for-word translation flattens humor, idiom, and cultural reference points, so a tagline or joke that lands perfectly in English falls flat, or reads strangely, in another language. The result is that huge audiences get a thin, awkward version of a story, or the content skips their language entirely.",
    solution: [
      "Another one for Mansa AI chat. Adapting tone, coming up with a warmer alternative, or writing a version aimed at a younger audience, is drafting work, so the chat writes each version directly in the target language.",
      "Mansa Translate is the right tool once you've picked a final version and need it converted into another language exactly as written.",
    ],
    steps: [
      {
        title: "Describe the task, in chat",
        quote:
          'Localize this tagline for an East African audience: "Banking made simple." Give me a direct Swahili translation, a warmer conversational alternative, and a third version aimed at a younger, social-media audience.',
      },
      {
        title: "Give Mansa context",
        bullets: [
          "The original copy, plus any brand voice notes (playful, formal, aspirational)",
          "The target region or country, since dialect and slang shift even within one language",
          "The platform: a billboard tagline and an Instagram caption need different rhythm",
        ],
      },
      {
        title: "What Mansa returns",
        body: "Three Swahili versions delivered: a direct translation, a warmer conversational line, and a shorter, punchier version with an English back-translation of each so you can sanity-check tone before approving.",
      },
    ],
    tryItNext: [
      "Now adapt all three for a Nigerian audience in Yoruba, keeping the same three tone options.",
      "Write subtitle timing cues for the warm version so it fits a 6-second video clip.",
    ],
    tips: [
      "Always ask for an English back-translation alongside the localized copy. It's the fastest way for a non-speaker on your team to sanity-check tone before it ships.",
      'Give Mansa the platform, not just the message. "Billboard tagline" and "TikTok caption" call for very different sentence rhythm even when the core idea is identical.',
    ],
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
