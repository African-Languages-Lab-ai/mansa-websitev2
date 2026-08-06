import type { Post, PostType } from "./types";

// Blog + news content for the Resources section. Written as real, publishable
// editorial copy. No customer quotes, figures, or attributions are invented.
export const posts: Post[] = [
  // ----- BLOG -------------------------------------------------------------
  {
    slug: "why-88-percent-of-african-languages-have-no-ai",
    type: "blog",
    title:
      "Why most African languages have no AI representation, and what Mansa is doing about it",
    excerpt:
      "Most AI models treat African languages as an afterthought. Mansa was built the other way around, starting from the languages themselves.",
    category: "Impact",
    date: "2026-06-18",
    authorId: "team",
    readMinutes: 9,
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Africa is home to more than two thousand languages, spoken by well over a billion people, yet the vast majority have almost no presence in modern AI systems. When a language is missing from the data that models learn from, the people who speak it are effectively locked out of the tools that are reshaping how the rest of the world works, learns, and communicates.",
      },
      {
        type: "paragraph",
        text: "This is not a small gap at the edges of the technology. It is a structural one. The same models that can draft an email, summarize a contract, tutor a student, or answer a medical question in English, French, or Mandarin often fall apart when asked to do the same in Yoruba, Amharic, Twi, or Swahili. And they fail quietly, producing fluent but wrong answers that are easy to trust and hard to catch.",
      },
      { type: "heading", text: "The representation gap" },
      {
        type: "paragraph",
        text: "General purpose models are trained mostly on text scraped from the open web, where African languages are severely underrepresented. Whole languages that are thriving in daily life appear in only a handful of digitized documents, if any. The result is a feedback loop. Less data leads to weaker performance, weaker performance discourages use, and low use produces even less data. Left alone, the gap widens with every new model release.",
      },
      {
        type: "paragraph",
        text: "The economics make it worse. Because these languages are treated as small markets, they rarely justify dedicated investment from the largest labs, so they are handled with automatic translation pipelines that bolt an African language onto a model designed for somewhere else. That approach can approximate words, but it misses meaning, tone, idiom, and the cultural context that makes language actually work.",
      },
      {
        type: "quote",
        text: "A language without AI representation is a community without a seat at the table.",
      },
      { type: "heading", text: "Why the gap persists" },
      {
        type: "paragraph",
        text: "Three things keep the gap open. First, data: high quality text and speech in African languages is scarce online and scattered offline. Second, orality: many African languages live primarily in speech, so text-only approaches capture only part of how people communicate. Third, evaluation: without benchmarks built by native speakers, it is hard to even measure how badly a model is doing, which lets weak performance go unnoticed.",
      },
      {
        type: "paragraph",
        text: "Solving representation therefore is not a matter of scraping more of the web. It requires going to the source, working with the communities who speak these languages, and building data, models, and tests together rather than after the fact.",
      },
      { type: "heading", text: "Building from the languages up" },
      {
        type: "paragraph",
        text: "Mansa, developed by the African Languages Lab, takes the opposite approach to the industry default. Instead of bolting African languages onto a model designed for other markets, Mansa is trained on billions of African language tokens gathered through direct, community driven research. The model learns meaning, expression, and cultural context rather than translating word for word.",
      },
      {
        type: "list",
        items: [
          "Trained on community sourced data across 30 or more African languages.",
          "Designed to respect dialect, tone, and cultural nuance rather than flatten it.",
          "Built to work across text and speech, so oral first languages are first class.",
          "Continuously refined as new languages, dialects, and speech data are added.",
        ],
      },
      {
        type: "paragraph",
        text: "That data does not appear out of nowhere. It is collected through the wider ecosystem the Lab has built, where communities contribute speech and text in their own languages, that contribution is turned into clean training data, and the resulting models flow back into Mansa. As more people use Mansa, more communities are motivated to contribute, and the loop compounds instead of stalling.",
      },
      { type: "heading", text: "What changes when a language is represented" },
      {
        type: "paragraph",
        text: "Representation is not only a technical goal. It decides who gets to participate. A student can learn science in their mother tongue instead of struggling through a second language. A small business can answer customers in the language they actually speak. A clinic can share health guidance that people understand the first time. A community can transcribe and preserve the stories of its elders before they are lost.",
      },
      {
        type: "paragraph",
        text: "Each of these is ordinary in English today and out of reach in most African languages. Closing that distance is the difference between AI that serves a fraction of the world and AI that serves everyone.",
      },
      { type: "heading", text: "Why it matters" },
      {
        type: "paragraph",
        text: "Language is how people access opportunity, and AI is quickly becoming how people access information, services, and work. If African languages are left out of this shift, the inequality it creates will be far harder to reverse later than it is to prevent now. Building representation from the languages up, with the communities who speak them, is the reason the African Languages Lab exists, and it is the standard Mansa is built to meet.",
      },
    ],
  },

  // ----- NEWS -------------------------------------------------------------
  {
    slug: "mansa-public-launch",
    type: "news",
    title: "Introducing Mansa, the AI built for African languages",
    excerpt:
      "Mansa brings chat, an autonomous agent, translation, transcription, and speech to 30 or more African languages.",
    category: "Announcements",
    date: "2026-07-01",
    authorId: "team",
    readMinutes: 5,
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "The African Languages Lab today introduced Mansa, an AI assistant built specifically for African languages. Mansa understands African languages, dialects, and cultural context natively, rather than treating them as an afterthought, and brings chat, an autonomous agent, translation, transcription, and speech together in one place.",
      },
      {
        type: "paragraph",
        text: "Most AI tools reach African languages, if at all, through translation layers wrapped around models built for other markets. Mansa is built the other way around. It is trained on billions of African language tokens gathered through direct, community driven research, so it works with meaning and nuance instead of word for word approximations.",
      },
      { type: "heading", text: "What Mansa offers" },
      {
        type: "list",
        items: [
          "Chat and an autonomous agent that can research, plan, and take action.",
          "Translation across 30 or more African languages, tuned for local nuance.",
          "Transcription that recognizes African accents and dialects.",
          "Natural speech output, so oral first languages are fully supported.",
          "A single, well documented API for developers who want to build on the platform.",
        ],
      },
      { type: "heading", text: "Built for African languages, natively" },
      {
        type: "paragraph",
        text: "Because Mansa learns from data collected with the communities who speak these languages, it handles dialect, tone, and cultural context that general models tend to miss. It is designed to work across both text and speech, which matters for the many African languages that live primarily in conversation rather than on the page.",
      },
      { type: "heading", text: "Available today" },
      {
        type: "paragraph",
        text: "Mansa is available now on the web and on mobile through the App Store and Google Play. Anyone can start for free, chatting, translating, transcribing, and generating speech across supported languages, and upgrade as their needs grow.",
      },
      { type: "heading", text: "For developers and organizations" },
      {
        type: "paragraph",
        text: "Teams can bring African language AI into their own products through the Mansa API, with endpoints for translation, transcription, chat, and speech. Organizations that need custom deployments, dedicated support, or specific language and dialect work can reach the team directly to plan a rollout.",
      },
      {
        type: "paragraph",
        text: "This launch is a starting point. The African Languages Lab will keep expanding language and dialect coverage, improving speech models, and advancing the research behind Mansa, so that more people can access intelligence, opportunity, and innovation in their own language.",
      },
    ],
  },
];

// ---- accessors -----------------------------------------------------------

export function getPosts(type: PostType): Post[] {
  return posts
    .filter((p) => p.type === type)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(type: PostType, slug: string): Post | undefined {
  return posts.find((p) => p.type === type && p.slug === slug);
}

export function getFeatured(type: PostType): Post | undefined {
  const list = getPosts(type);
  return list.find((p) => p.featured) ?? list[0];
}

export function getCategories(type: PostType): string[] {
  return Array.from(new Set(getPosts(type).map((p) => p.category)));
}

export function relatedPosts(post: Post, limit = 3): Post[] {
  return getPosts(post.type)
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, limit);
}
