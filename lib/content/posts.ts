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
      "Mansa brings conversational AI, autonomous agents, translation, transcription, and speech together in one platform built for African languages and contexts.",
    category: "Announcements",
    date: "2026-07-01",
    authorId: "team",
    readMinutes: 14,
    featured: true,
    body: [
      {
        type: "paragraph",
        text: "The African Languages Lab today introduced Mansa, an AI platform designed specifically for African languages and contexts. Mansa brings conversational AI, autonomous agents, translation, transcription, and speech capabilities together in one place.",
      },
      {
        type: "paragraph",
        text: "Most AI tools reach African languages, if at all, through translation layers wrapped around models built primarily for other markets. Mansa takes a different approach. It is built around African-language data and research, helping AI better capture the meaning, linguistic nuance, and cultural context that can be lost through word-for-word translation.",
      },
      { type: "heading", text: "What Mansa offers" },
      {
        type: "list",
        items: [
          "Mansa Chat — conversational AI for African languages and everyday tasks.",
          "Mansa Agent — an autonomous AI assistant that can research, work with connected tools, remember context, automate tasks, and take action on your behalf.",
          "Mansa Translate — translation across supported African languages and other languages, with attention to local linguistic context.",
          "Mansa Transcribe — speech-to-text capabilities designed for supported African languages, accents, and dialects.",
          "Mansa Speech — speech generation that enables African languages to power voice-based experiences.",
          "Mansa API — a developer platform for integrating Mansa's AI, translation, transcription, and speech capabilities into applications and workflows.",
        ],
      },
      { type: "heading", text: "Built for African languages" },
      {
        type: "paragraph",
        text: "Mansa is built around African-language data gathered through research, partnerships, and community-driven language initiatives. This approach is designed to help capture linguistic diversity, dialectal variation, tone, and cultural context that general-purpose AI systems may overlook.",
      },
      {
        type: "paragraph",
        text: "Mansa is designed to work across both text and speech, reflecting the reality that many African languages are deeply rooted in oral communication.",
      },
      { type: "heading", text: "Available today" },
      {
        type: "paragraph",
        text: "Mansa is available on the web and through mobile applications. Users can start exploring supported capabilities, including chat, translation, transcription, and speech, with additional features and usage available through paid plans.",
      },
      { type: "heading", text: "For developers and organizations" },
      {
        type: "paragraph",
        text: "Developers and organizations can integrate African-language AI into their own products through the Mansa API, with capabilities for chat, translation, transcription, and speech.",
      },
      {
        type: "paragraph",
        text: "Organizations requiring custom deployments, dedicated support, higher usage, or specialized language and dialect requirements can work directly with the African Languages Lab team to explore an appropriate deployment.",
      },
      { type: "heading", text: "More than a launch" },
      { type: "paragraph", text: "This launch is a starting point." },
      {
        type: "paragraph",
        text: "The African Languages Lab will continue expanding language and dialect coverage, improving speech and language models, strengthening evaluation, and advancing the research behind Mansa.",
      },
      {
        type: "paragraph",
        text: "The goal is simple: to make AI more accessible, useful, and relevant to people across Africa in the languages they actually speak.",
      },
      {
        type: "paragraph",
        text: "Mansa is built for a future where African languages are not an afterthought in AI, but a fundamental part of it.",
      },

      // ----- What to know: product & developer FAQs --------------------
      { type: "heading", text: "What to know: Mansa product & developer FAQs" },

      { type: "subheading", text: "Mansa products" },
      {
        type: "faq",
        question: "What products are available within Mansa?",
        answer: [
          "Mansa brings several AI capabilities together in one platform:",
          "Language and feature availability may vary across products.",
        ],
        list: [
          "Mansa AI — conversational AI for understanding, generating, and working with African-language content.",
          "Mansa Agent — an autonomous, tool-using AI assistant that can research, remember context, use connected services, and perform tasks on a user's behalf.",
          "Mansa Translate — translation between supported African and other languages.",
          "Mansa Transcribe — speech-to-text transcription for supported languages.",
          "Mansa Interpreter — multilingual interpretation designed to facilitate communication between speakers of different languages.",
        ],
      },

      { type: "subheading", text: "Mansa AI" },
      {
        type: "faq",
        question: "What can I use Mansa AI for?",
        answer:
          "Mansa AI can be used for conversational AI, content generation, research, education, localization, language assistance, and other workflows requiring African-language understanding and generation.",
      },
      {
        type: "faq",
        question: "How is Mansa AI different from a general-purpose AI model?",
        answer:
          "Mansa is designed specifically around African languages and contexts. Its language resources and development focus are intended to improve performance across African languages, dialects, and culturally relevant use cases that may receive limited representation in general-purpose models.",
      },

      { type: "subheading", text: "Mansa Agent" },
      {
        type: "faq",
        question: "What is Mansa Agent?",
        answer: [
          "Mansa Agent is an autonomous AI assistant that can use tools, maintain persistent memory, conduct research, and perform tasks on a user's behalf.",
          "Unlike standard Mansa Chat, which primarily responds within the current conversation, Mansa Agent can work across sessions and interact with connected services.",
        ],
      },
      {
        type: "faq",
        question: "What can Mansa Agent do?",
        answer: "Depending on the services connected to your account, Mansa Agent can:",
        list: [
          "Read, search, summarize, draft, reply to, and send emails",
          "Read and manage Google Calendar events",
          "Create and update Google Docs and Sheets",
          "Manage files in Google Drive",
          "Search and work with GitHub repositories",
          "Review pull requests and check CI status",
          "Conduct web and academic research",
          "Analyze attached documents and PDFs",
          "Execute code and shell commands where authorized",
          "Create recurring automations",
          "Work toward persistent goals across multiple sessions",
          "Remember user preferences and relevant information across sessions",
        ],
      },
      {
        type: "faq",
        question: "Does Mansa Agent remember previous conversations?",
        answer:
          "Yes. Mansa Agent has persistent memory that can carry relevant information across sessions, app restarts, and redeployments.",
      },
      {
        type: "faq",
        question: "Can Mansa Agent take actions on my behalf?",
        answer: [
          "Yes. When supported services are connected, Mansa Agent can perform actions such as sending emails, creating calendar events, updating documents, and working with GitHub.",
          "Actions that create a real-world side effect may require user approval.",
        ],
      },
      {
        type: "faq",
        question: "Can I automate tasks with Mansa Agent?",
        answer: [
          "Yes. You can schedule recurring tasks such as:",
          "Automations can run according to their configured schedule even when the application is closed.",
        ],
        list: [
          "Daily inbox summaries",
          "Weekly research reports",
          "GitHub PR digests",
          "Recurring information monitoring",
          "Scheduled business workflows",
        ],
      },
      {
        type: "faq",
        question: "Can Mansa Agent work on a task over several sessions?",
        answer:
          "Yes. You can create a persistent goal for a task and continue working with the Agent across multiple sessions until the goal is completed, paused, resumed, or cleared.",
      },
      {
        type: "faq",
        question: "What services can I connect to Mansa Agent?",
        answer: [
          "Current supported integrations include:",
          "Additional integrations may be introduced over time.",
        ],
        list: ["Google Workspace", "Email through supported IMAP/SMTP providers", "GitHub"],
      },
      {
        type: "faq",
        question: "Can Mansa Agent make payments or purchases?",
        answer:
          "No. Mansa Agent cannot currently complete purchases, move money, or manage payments or subscriptions on your behalf.",
      },

      { type: "subheading", text: "Mansa Translate" },
      {
        type: "faq",
        question: "What is Mansa Translate?",
        answer:
          "Mansa Translate provides translation between supported African and other languages, helping organizations localize content and communicate across language barriers.",
      },
      {
        type: "faq",
        question: "What can I use Mansa Translate for?",
        answer: "Potential applications include:",
        list: [
          "Website and product localization",
          "Customer communications",
          "Educational content",
          "Public information",
          "Business documents",
          "Multilingual content creation",
          "Community communications",
        ],
      },
      {
        type: "faq",
        question: "Is Mansa Translate suitable for sensitive content?",
        answer:
          "For legal, medical, financial, regulatory, or other high-stakes content, translations should be reviewed and approved by an appropriately qualified human before publication or use.",
      },

      { type: "subheading", text: "Mansa Transcribe" },
      {
        type: "faq",
        question: "What is Mansa Transcribe?",
        answer: "Mansa Transcribe converts supported African-language speech and audio into text.",
      },
      {
        type: "faq",
        question: "What can I use Mansa Transcribe for?",
        answer: "Potential applications include:",
        list: [
          "Interviews",
          "Meetings",
          "Research",
          "Oral history preservation",
          "Podcasts and media",
          "Customer conversations",
          "Field recordings",
          "Speech and language datasets",
        ],
      },
      {
        type: "faq",
        question: "Can Mansa Transcribe handle African languages?",
        answer:
          "Yes. Mansa Transcribe is designed to support African-language speech and is continuously improved as language and speech resources expand.",
      },
      {
        type: "faq",
        question: "Will every recording be transcribed perfectly?",
        answer: [
          "No AI transcription system should be assumed to be perfect. Accuracy can vary depending on language, dialect, recording quality, background noise, speaker characteristics, code-switching, and other factors.",
          "For research, legal, medical, or other high-stakes applications, human review is recommended.",
        ],
      },

      { type: "subheading", text: "Mansa Interpreter" },
      {
        type: "faq",
        question: "What is Mansa Interpreter?",
        answer:
          "Mansa Interpreter is designed to facilitate communication between speakers of different languages by interpreting conversations across supported languages.",
      },
      {
        type: "faq",
        question: "Who can use Mansa Interpreter?",
        answer: "Potential applications include:",
        list: [
          "Healthcare communication",
          "Customer service",
          "Government services",
          "Education",
          "Travel and hospitality",
          "Community services",
          "Multilingual meetings",
          "Field operations",
        ],
      },
      {
        type: "faq",
        question: "Can Mansa Interpreter replace a human interpreter?",
        answer:
          "Mansa Interpreter is designed to assist with multilingual communication but should not automatically be treated as a replacement for qualified human interpreters, particularly in legal, medical, emergency, or other high-stakes situations.",
      },

      { type: "subheading", text: "API & integration" },
      {
        type: "faq",
        question: "Can I integrate Mansa into my application?",
        answer:
          "Yes. Mansa provides API access for supported AI, translation, and speech capabilities, allowing developers to incorporate Mansa into their own applications and workflows.",
      },
      {
        type: "faq",
        question: "What can I build with the Mansa API?",
        answer: "Depending on the available API capabilities, developers can build:",
        list: [
          "African-language chatbots",
          "Translation applications",
          "Voice applications",
          "Customer support systems",
          "Education tools",
          "Research applications",
          "Content localization workflows",
          "Multilingual business applications",
        ],
      },
      {
        type: "faq",
        question: "Is the Mansa API suitable for production applications?",
        answer:
          "Mansa is designed to support real-world application development and integration. Organizations should evaluate the relevant model, language, latency, accuracy, security, and usage requirements before deploying Mansa in production.",
      },
      {
        type: "faq",
        question: "Do I need to build my own AI infrastructure?",
        answer:
          "No. The Mansa API is designed to provide access to Mansa capabilities without requiring organizations to build and maintain their own underlying AI model infrastructure.",
      },
      {
        type: "faq",
        question: "Are SDKs available?",
        answer:
          "Mansa provides API documentation and integration examples. SDK availability may vary by programming language and product capability.",
      },

      { type: "subheading", text: "Data, privacy & security" },
      {
        type: "faq",
        question: "Is my data used to train Mansa?",
        answer: "Customer data is not used to train Mansa models without explicit consent.",
      },
      {
        type: "faq",
        question: "Who owns the data I submit?",
        answer:
          "Your data remains yours. Using Mansa does not transfer ownership of your submitted business or customer data to African Languages Lab.",
      },
      {
        type: "faq",
        question: "Is my data secure?",
        answer:
          "Mansa applies appropriate security controls to protect customer data and access across its services. Organizations should review the applicable Mansa privacy, security, and data-processing terms before deploying Mansa for sensitive workloads.",
      },
      {
        type: "faq",
        question: "Should I send confidential information to Mansa?",
        answer:
          "Organizations should follow their internal security and data-governance requirements when using Mansa. Do not submit sensitive or confidential information unless the relevant Mansa service and your organization's policies permit such use.",
      },

      { type: "subheading", text: "Language support" },
      {
        type: "faq",
        question: "How many African languages does Mansa support?",
        answer:
          "Mansa currently supports 30+ African languages, with additional languages and dialects being added as the platform and language resources continue to develop.",
      },
      {
        type: "faq",
        question: "Does every Mansa product support the same languages?",
        answer:
          "Not necessarily. Language availability can vary between Mansa AI, Agent, Translate, Transcribe, Interpreter, and other capabilities.",
      },
      {
        type: "faq",
        question: "Does Mansa support dialects?",
        answer:
          "Mansa is designed with linguistic diversity in mind, including variation across languages and dialects. Availability and performance may vary depending on the language and dialect.",
      },

      { type: "subheading", text: "Performance & accuracy" },
      {
        type: "faq",
        question: "How accurate is Mansa?",
        answer: [
          "Performance varies by language, task, input type, and use case. Mansa is continuously evaluated and improved across supported languages and capabilities.",
          "Organizations should test Mansa against their specific use case and language requirements before production deployment.",
        ],
      },
      {
        type: "faq",
        question: "Why can Mansa perform differently across languages?",
        answer:
          "African languages have different levels of available digital resources, linguistic structures, dialectal variation, and speech characteristics. As a result, performance can vary between languages and tasks.",
      },
      {
        type: "faq",
        question: "Should Mansa outputs be reviewed by humans?",
        answer:
          "For high-stakes applications, including healthcare, legal services, financial services, government decisions, and safety-critical workflows, appropriate human review and oversight should be maintained.",
      },

      { type: "subheading", text: "Mansa Agent: safety & approvals" },
      {
        type: "faq",
        question: "Does Mansa Agent automatically perform every action I request?",
        answer:
          "No. Mansa Agent uses approval controls for actions that may have real-world side effects. Certain connected services may also operate under standing authorization once you connect and authorize them.",
      },
      {
        type: "faq",
        question: "Can I control what Mansa Agent is allowed to do?",
        answer:
          "Mansa Agent uses connected-service permissions and approval controls to manage access and actions. More granular permission controls may be introduced as the product evolves.",
      },
      {
        type: "faq",
        question: "What happens if an automation and another Agent task run at the same time?",
        answer:
          "Mansa Agent manages concurrent tasks within its available resources. Tasks may queue when multiple resource-intensive operations are running simultaneously.",
      },

      { type: "subheading", text: "Getting started" },
      {
        type: "faq",
        question: "How long does it take to set up Mansa Agent?",
        answer:
          "Initial Agent provisioning typically takes approximately five minutes and may occasionally take longer.",
      },
      {
        type: "faq",
        question: "Do I need to install anything to use Mansa Agent?",
        answer:
          "No additional local server or machine setup is required. Mansa Agent operates through its managed environment and is accessed through the Mansa application.",
      },
      {
        type: "faq",
        question: "What happens when I disconnect a connected service?",
        answer:
          "The Agent can only interact with services that are connected and synchronized with your Agent environment. Disconnecting a service prevents the Agent from using that service until it is connected again.",
      },

      { type: "subheading", text: "Important use & safety notice" },
      {
        type: "paragraph",
        text: "Mansa is an AI system and may generate inaccurate, incomplete, or inappropriate outputs. Users and organizations remain responsible for reviewing outputs and determining whether they are suitable for their intended purpose.",
      },
      {
        type: "paragraph",
        text: "For healthcare, legal, financial, regulatory, security, emergency, or other high-stakes applications, Mansa should be used with appropriate human oversight, validation, and escalation procedures.",
      },
      {
        type: "paragraph",
        text: "Product capabilities, supported languages, integrations, and availability may change as Mansa continues to evolve.",
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
