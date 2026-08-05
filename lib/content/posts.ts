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
    readMinutes: 6,
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "Africa is home to more than two thousand languages, yet the vast majority have almost no presence in modern AI systems. When a language is missing from the data that models learn from, the people who speak it are effectively locked out of the tools that are reshaping how the rest of the world works, learns, and communicates.",
      },
      { type: "heading", text: "The representation gap" },
      {
        type: "paragraph",
        text: "General purpose models are trained mostly on text scraped from the open web, where African languages are severely underrepresented. The result is a feedback loop. Less data leads to weaker performance, weaker performance discourages use, and low use produces even less data. Left alone, the gap widens with every new model release.",
      },
      {
        type: "quote",
        text: "A language without AI representation is a community without a seat at the table.",
      },
      { type: "heading", text: "Building from the languages up" },
      {
        type: "paragraph",
        text: "Mansa, developed by the African Languages Lab, takes the opposite approach. Instead of bolting African languages onto a model designed for other markets, Mansa is trained on billions of African language tokens gathered through direct, community driven research. The model learns meaning, expression, and cultural context rather than translating word for word.",
      },
      {
        type: "list",
        items: [
          "Trained on community sourced data across 30 or more African languages.",
          "Designed to respect dialect, tone, and cultural nuance.",
          "Continuously refined as new languages and speech data are added.",
        ],
      },
      { type: "heading", text: "Why it matters" },
      {
        type: "paragraph",
        text: "Representation is not only a technical goal. It decides who can use AI to learn in their first language, run a business, access public services, and preserve their culture. Closing the gap is a long term effort, and it is the reason the African Languages Lab exists.",
      },
    ],
  },
  {
    slug: "one-ecosystem-mansa-all-voices-base-swarm",
    type: "blog",
    title: "One ecosystem: how Mansa, All Voices, Base, and Swarm fit together",
    excerpt:
      "Mansa is one part of a larger effort. Here is how the pieces connect into a single ecosystem for African language AI.",
    category: "Product",
    date: "2026-05-30",
    authorId: "team",
    readMinutes: 5,
    body: [
      {
        type: "paragraph",
        text: "Mansa does not stand alone. It sits inside a broader ecosystem built by the African Languages Lab, where data collection, model development, and applications reinforce each other. Each part solves a different piece of the same problem, and together they create a flywheel for African language AI.",
      },
      { type: "heading", text: "The pieces" },
      {
        type: "list",
        items: [
          "All Voices: a crowdsourced platform where communities contribute speech and text data in their own languages.",
          "Base: shared infrastructure that turns contributed data into clean, training ready datasets.",
          "Swarm Intelligence Hub: research that pushes the modeling frontier for low resource languages.",
          "Mansa: the assistant that brings all of this to people through chat, translation, transcription, and speech.",
        ],
      },
      { type: "heading", text: "Why one ecosystem" },
      {
        type: "paragraph",
        text: "Data collected through All Voices improves the models developed in the Swarm Intelligence Hub. Those models power Mansa. As more people use Mansa, more communities are motivated to contribute through All Voices. The loop is deliberate, and it is what lets progress compound instead of stalling on any single bottleneck.",
      },
    ],
  },
  {
    slug: "inside-mansa-multimodal-capabilities",
    type: "blog",
    title: "Inside Mansa: working across text and speech",
    excerpt:
      "A high level tour of how Mansa works across text and speech, and why that matters for African languages.",
    category: "Research",
    date: "2026-04-22",
    authorId: "team",
    readMinutes: 7,
    body: [
      {
        type: "paragraph",
        text: "Many African languages are primarily spoken rather than written, and even where a writing system exists, day to day communication often happens through voice. An assistant that only reads and writes text would miss how people actually use their languages. That is why Mansa is designed to work across more than one kind of input.",
      },
      { type: "heading", text: "Text and speech, together" },
      {
        type: "paragraph",
        text: "Mansa brings chat, translation, transcription, and speech into a single system. You can type a question, speak it, or move between the two. Transcription turns African language audio into accurate text, and speech turns text back into natural sounding voice, so the assistant meets people wherever they are most comfortable.",
      },
      {
        type: "list",
        items: [
          "Chat and reasoning in English and 30 or more African languages.",
          "Translation tuned for local nuance rather than literal word swaps.",
          "Transcription that recognizes African accents and dialects.",
          "Speech that produces natural voice output in supported languages.",
        ],
      },
      { type: "heading", text: "Why multimodal matters here" },
      {
        type: "paragraph",
        text: "For oral first communities, voice is not a convenience feature, it is the primary interface. Supporting speech end to end is what makes AI genuinely usable for millions of people who have been left out so far.",
      },
    ],
  },
  {
    slug: "ghana-ai-summit-2026-recap",
    type: "blog",
    title: "Ghana AI Summit 2026: what we took away",
    excerpt:
      "A recap of the conversations, ideas, and momentum from the Ghana AI Summit 2026.",
    category: "Events",
    date: "2026-03-12",
    authorId: "team",
    readMinutes: 4,
    body: [
      {
        type: "paragraph",
        text: "The African Languages Lab joined builders, researchers, and policymakers at the Ghana AI Summit 2026 to talk about one question that ran through the whole event: how do we make sure the next wave of AI includes African languages and the people who speak them.",
      },
      { type: "heading", text: "Themes we heard" },
      {
        type: "list",
        items: [
          "Local data and local ownership are the foundation of trustworthy AI for Africa.",
          "Speech matters as much as text for languages that are primarily spoken.",
          "Access should reach everyday people, not just enterprises and researchers.",
        ],
      },
      {
        type: "paragraph",
        text: "We came away more convinced than ever that community driven data and models built from African languages up are the path forward. Thank you to everyone who stopped by to talk with the Mansa team.",
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
    readMinutes: 3,
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "The African Languages Lab today introduced Mansa, an AI assistant built specifically for African languages. Mansa understands African languages, dialects, and cultural context natively, rather than treating them as an afterthought.",
      },
      { type: "heading", text: "What Mansa offers" },
      {
        type: "list",
        items: [
          "Chat and an autonomous agent that can research, plan, and take action.",
          "Translation and transcription across 30 or more African languages.",
          "Natural speech output in supported languages.",
          "A single API for developers who want to build on the platform.",
        ],
      },
      {
        type: "paragraph",
        text: "Mansa is available on the web and on mobile through the App Store and Google Play. Developers can start building on the Mansa platform through the developer documentation.",
      },
    ],
  },
  {
    slug: "pan-african-ai-innovation-summit-2026",
    type: "news",
    title: "Mansa at the Pan African AI and Innovation Summit 2026",
    excerpt:
      "The African Languages Lab will join the Pan African AI and Innovation Summit in Accra on September 22 and 23, 2026.",
    category: "Events",
    date: "2026-06-25",
    authorId: "team",
    readMinutes: 2,
    body: [
      {
        type: "paragraph",
        text: "The African Languages Lab will be at the Pan African AI and Innovation Summit in Accra on September 22 and 23, 2026. The team will share how Mansa is built for African languages and where the platform is headed next.",
      },
      {
        type: "paragraph",
        text: "If you are attending, come and meet the Mansa team. We will update this post with highlights after the event.",
      },
    ],
  },
  {
    slug: "mansa-at-deep-learning-indaba",
    type: "news",
    title: "Mansa at the Deep Learning Indaba",
    excerpt:
      "Notes from the African Languages Lab at the Deep Learning Indaba, one of the continent's largest gatherings of AI researchers.",
    category: "Events",
    date: "2026-05-10",
    authorId: "team",
    readMinutes: 2,
    body: [
      {
        type: "paragraph",
        text: "The African Languages Lab joined the Deep Learning Indaba to connect with researchers working to strengthen machine learning across Africa. The Indaba is one of the continent's largest gatherings of AI researchers and practitioners.",
      },
      {
        type: "paragraph",
        text: "Conversations centered on low resource languages, community sourced data, and building tools that reach everyday people. We are grateful to be part of this growing community.",
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
