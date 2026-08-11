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
    category: "Language & localization",
    productLabel: "Mansa Transcribe",
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
    category: "Education",
    productLabel: "Mansa AI",
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
    category: "Language & localization",
    productLabel: "Mansa AI",
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
  {
    slug: "media-and-content-localization",
    title: "Turn one tagline into five versions that don't sound translated",
    summary:
      "Mansa AI adapts tone and cultural context when localizing copy, scripts, and captions, so content reads the way a native speaker would actually write it.",
    category: "Language & localization",
    productLabel: "Mansa AI",
    icon: "◎",
    meta: {
      category: "Media, Marketing & Content",
      languages: "30+ African languages",
      product: "Mansa AI (Mansa Translate for direct, meaning-preserving translation)",
    },
    challenge:
      "Publishers and creators want to reach African audiences, but localization is usually slow, costly, and out of sync with how fast content actually gets published. Literal, word-for-word translation flattens humor, idiom, and cultural reference points, so a tagline or joke that lands perfectly in English falls flat, or reads strangely, in another language. The result is that huge audiences get a thin, awkward version of a story, or the content skips their language entirely.",
    solution: [
      "For Mansa AI chat. Adapting tone, coming up with a warmer alternative, or writing a version aimed at a younger audience is drafting work, so the chat writes each version directly in the target language.",
      "Mansa Translate is the right tool once you've picked a final version and need it converted into another language exactly as written.",
    ],
    steps: [
      {
        title: "Describe the task in chat",
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
      "Now adapt all three for a Nigerian audience in Ewe, keeping the same three tone options.",
      "Write subtitle timing cues for the warm version so it fits a 6-second video clip.",
    ],
    tips: [
      "Always ask for an English back-translation alongside the localized copy. It's the fastest way for a non-speaker on your team to sanity-check tone before it ships.",
      'Give Mansa the platform, not just the message. "Billboard tagline" and "TikTok caption" call for very different sentence rhythm even when the core idea is identical.',
    ],
  },
  {
    slug: "healthcare-and-clinical-communication",
    title: "Healthcare & Clinical Communication",
    summary:
      "Mansa helps healthcare organizations translate, simplify, and communicate health information in patients' preferred African languages across text and speech.",
    category: "Healthcare",
    productLabel: "Mansa AI",
    icon: "✚",
    challenge:
      "Healthcare information is often delivered in languages that patients may not fully understand. This can create communication barriers between healthcare professionals, patients, caregivers, and community health workers, particularly where African languages are the primary language of communication.",
    solution:
      "Mansa can help healthcare organizations translate, simplify, and communicate health information in patients' preferred African languages across text and speech-based applications.",
    applications: [
      "Patient education and health information",
      "Medication and prescription instructions",
      "Multilingual communication between health workers and patients",
      "Community health campaigns",
      "Health information delivered through voice assistants",
      "Translation and localization of healthcare content",
    ],
    steps: [
      {
        title: "Describe the task in chat",
        quote:
          "Explain these prescription instructions in Yoruba using simple language that a patient with limited medical knowledge can understand.",
      },
      {
        title: "What Mansa returns",
        body: "Mansa can generate a localized explanation that can then be reviewed and approved by a qualified healthcare professional before being shared with the patient.",
      },
    ],
    tryItNext: [
      "Explain the importance of completing a prescribed course of medication in Hausa using simple language.",
    ],
    disclaimer:
      "Mansa is an AI language technology and should not be used as a substitute for qualified medical professionals. Healthcare organizations should have appropriately qualified professionals review and approve medical, clinical, diagnostic, or prescription-related content before it is provided to patients.",
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    summary:
      "Mansa helps financial institutions localize customer communications and explain financial information in customers' preferred languages.",
    category: "Financial services",
    productLabel: "Mansa AI",
    icon: "◆",
    challenge:
      "Financial products and services can be difficult to understand when customers are required to interact in languages they are not most comfortable with. Banks, fintechs, insurers, microfinance institutions, and other financial organizations need ways to communicate complex information clearly across multiple African languages.",
    solution:
      "Mansa can help financial institutions localize customer communications and explain financial information in customers' preferred languages.",
    applications: [
      "Customer support",
      "Financial education and literacy",
      "Loan and savings information",
      "Insurance communications",
      "Mobile money services",
      "Product explanations and onboarding",
      "Multilingual notifications and customer communications",
    ],
    steps: [
      {
        title: "Describe the task in chat",
        quote:
          "Explain the key terms of this loan agreement in Yoruba using simple language, while keeping all important financial terms and conditions unchanged.",
      },
      {
        title: "What Mansa returns",
        body: "Mansa can help produce a localized explanation that makes financial information easier to understand while maintaining the original context.",
      },
    ],
    tryItNext: [
      "Explain how interest works on a personal loan in Hausa for someone with no financial background.",
    ],
    disclaimer:
      "Mansa should not be relied upon as a substitute for qualified financial, legal, or regulatory advice. Financial institutions should review and approve contracts, financial advice, regulatory communications, and other legally or financially sensitive content before publication or use.",
  },
  {
    slug: "voice-and-conversational-ai",
    title: "Voice & Conversational AI",
    summary:
      "Mansa connects speech recognition, language understanding, and speech generation into a multilingual voice AI workflow for natural African-language experiences.",
    category: "Voice & conversational AI",
    productLabel: "Mansa AI",
    icon: "≋",
    challenge:
      "Many African-language AI experiences remain text-first, even though speech is the primary way many people interact with technology. Businesses and organizations need voice interfaces that can understand and respond to customers in the languages they actually speak.",
    solution: [
      "Mansa can serve as part of a multilingual voice AI workflow, connecting speech recognition, language understanding, and speech generation to create more natural African-language experiences.",
      "A typical workflow combines ASR (Automatic Speech Recognition), which converts spoken language into text, Mansa, which processes, understands, and generates the appropriate response, and TTS (Text-to-Speech), which converts the response back into spoken language.",
    ],
    applications: [
      "Voice-based customer support",
      "Interactive voice assistants",
      "Call-center automation",
      "Voice search",
      "Community information services",
      "Banking and fintech voice interfaces",
      "Healthcare and public-service information systems",
    ],
    stepsIntro: "Example: a customer calls a support line and speaks in Hausa. The system can:",
    steps: [
      { title: "Convert the customer's speech to text" },
      { title: "Process the request using Mansa" },
      { title: "Generate a response in Hausa" },
      { title: "Convert the response back into speech" },
      { title: "Deliver the response to the customer" },
    ],
    tryItNext: [
      "Build a Hausa-speaking customer service assistant that can answer common questions about account registration, opening hours, and available services.",
    ],
    disclaimer:
      "AI-generated voice interactions should be appropriately monitored and tested before deployment in customer-facing environments. For high-stakes applications, organizations should implement human escalation, quality assurance, and appropriate review processes to ensure that AI-generated responses are accurate, safe, and suitable for the intended use.",
  },
  {
    slug: "personal-ai-executive-assistant",
    title: "Personal AI Executive Assistant",
    summary:
      "Mansa Agent acts as a persistent AI assistant that works across connected email, calendar, documents, files, and web research tools.",
    category: "Mansa Agent",
    icon: "✎",
    challenge:
      "Professionals spend significant time managing emails, calendars, documents, research, and repetitive administrative tasks. Switching between different applications and manually coordinating these tasks can reduce productivity.",
    solution:
      "Mansa Agent can act as a persistent AI assistant that works across connected email, calendar, documents, files, and web research tools.",
    applicationsHeading: "It can:",
    applications: [
      "Read, search, and summarize emails",
      "Draft and send email responses",
      "Create and manage calendar events",
      "Research topics and compile findings",
      "Read and analyze documents and PDFs",
      "Remember preferences and ongoing tasks across sessions",
      "Schedule recurring tasks and reminders",
    ],
    steps: [
      {
        title: "Describe the task",
        quote:
          "Review my inbox, identify the emails that require a response, draft replies for each, and summarize the items that need my attention.",
      },
      {
        title: "What Mansa Agent does",
        body: "Mansa Agent can review the connected inbox, organize the relevant messages, prepare responses, and present them for review where appropriate.",
      },
    ],
    tryItNext: [
      "Every weekday at 9 AM, summarize my important emails and today's calendar events and send me a brief priority list.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
  {
    slug: "research-and-intelligence",
    title: "Research & Intelligence",
    summary:
      "Mansa Agent can conduct web research, extract information from web pages and PDFs, search academic resources, and delegate complex research tasks to sub-agents.",
    category: "Mansa Agent",
    icon: "◍",
    challenge:
      "Research often requires searching multiple sources, reviewing documents, comparing information, and producing a structured summary. This can take hours when done manually.",
    solution:
      "Mansa Agent can conduct web research, extract information from web pages and PDFs, search academic resources, and delegate complex research tasks to sub-agents.",
    applicationsHeading: "It can:",
    applications: [
      "Search and compare multiple sources",
      "Extract information from web pages and PDFs",
      "Research academic papers",
      "Find citations and generate BibTeX references",
      "Compile research findings",
      "Delegate large or parallel research tasks",
      "Maintain context across ongoing research goals",
    ],
    steps: [
      {
        title: "Describe the task",
        quote:
          "Research the latest developments in African language AI, review relevant academic papers, identify the major organizations working in the space, and prepare a structured briefing with sources.",
      },
      {
        title: "What Mansa Agent does",
        body: "Mansa Agent can conduct the research, analyze the sources, and organize the findings into a usable report.",
      },
    ],
    tryItNext: [
      "Find recent academic research on speech recognition for low-resource African languages and summarize the key findings and datasets used.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
  {
    slug: "business-operations-and-productivity",
    title: "Business Operations & Productivity",
    summary:
      "With connected Google Workspace or email accounts, Mansa Agent can work across documents, spreadsheets, Drive, Gmail, and Calendar.",
    category: "Mansa Agent",
    icon: "▦",
    challenge:
      "Businesses manage information across email, documents, spreadsheets, calendars, and other systems. Employees often spend valuable time moving information between these tools.",
    solution:
      "With connected Google Workspace or email accounts, Mansa Agent can work across documents, spreadsheets, Drive, Gmail, and Calendar.",
    applications: [
      "Preparing meeting summaries",
      "Updating spreadsheets",
      "Creating documents",
      "Organizing files",
      "Preparing reports",
      "Managing follow-up tasks",
      "Coordinating meetings",
      "Monitoring recurring business activities",
    ],
    steps: [
      {
        title: "Describe the task",
        quote:
          "Review this week's meeting notes, identify all outstanding action items, update the project tracker in Google Sheets, and draft follow-up emails for the responsible team members.",
      },
      {
        title: "What Mansa Agent does",
        body: "Mansa Agent can work across the connected services to complete the workflow rather than simply telling the user what to do.",
      },
    ],
    tryItNext: [
      "Create a weekly project status report using the latest information in my Google Drive and project spreadsheet.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
  {
    slug: "email-and-customer-communication",
    title: "Email & Customer Communication",
    summary:
      "Mansa Agent can read, search, summarize, draft, reply to, and send emails through connected email services.",
    category: "Mansa Agent",
    icon: "✉",
    challenge:
      "Managing large volumes of email and customer communication can be repetitive and time-consuming, particularly for teams that need to respond consistently and quickly.",
    solution:
      "Mansa Agent can read, search, summarize, draft, reply to, and send emails through connected email services.",
    applicationsHeading: "It can help users:",
    applications: [
      "Triage inboxes",
      "Identify urgent messages",
      "Draft responses",
      "Prepare follow-ups",
      "Summarize long email threads",
      "Track outstanding communication",
      "Send approved responses",
    ],
    steps: [
      {
        title: "Describe the task",
        quote:
          "Find all emails from potential clients that haven't received a response in the last seven days. Summarize each opportunity and draft a follow-up email.",
      },
      {
        title: "What Mansa Agent does",
        body: "Mansa Agent can identify the relevant conversations, prepare the summaries, and draft the required responses.",
      },
    ],
    tryItNext: [
      "Review my inbox and create a list of all partnership opportunities that require follow-up.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
  {
    slug: "software-development-and-engineering",
    title: "Software Development & Engineering",
    summary: "When GitHub is connected, Mansa Agent can interact with repositories and development workflows.",
    category: "Mansa Agent",
    icon: "⌘",
    challenge:
      "Software teams spend significant time reviewing repositories, investigating issues, checking CI status, reviewing pull requests, and performing repetitive development tasks.",
    solution: "When GitHub is connected, Mansa Agent can interact with repositories and development workflows.",
    applicationsHeading: "It can:",
    applications: [
      "Search repositories",
      "Read and analyze code",
      "Create and review GitHub issues",
      "Review pull requests",
      "Check CI status",
      "Execute code and shell commands",
      "Help investigate technical problems",
      "Support multi-step engineering tasks",
    ],
    steps: [
      {
        title: "Describe the task",
        quote:
          "Review the open pull requests in this repository, identify any potential issues, check their CI status, and summarize which ones are ready for review.",
      },
      {
        title: "What Mansa Agent does",
        body: "Mansa Agent can inspect the repository, analyze the relevant files and pull requests, and provide a structured engineering summary.",
      },
    ],
    tryItNext: [
      "Review the latest failed CI run, identify the likely cause of the failure, and propose a fix.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
  {
    slug: "persistent-projects-and-goals",
    title: "Persistent Projects & Goals",
    summary:
      "Mansa Agent maintains persistent memory and can work toward ongoing goals across multiple conversations and sessions.",
    category: "Mansa Agent",
    icon: "∞",
    challenge:
      "Complex projects rarely fit into a single conversation. Important context can be lost when tasks span multiple sessions or require several stages of work.",
    solution:
      "Mansa Agent maintains persistent memory and can work toward ongoing goals across multiple conversations and sessions. Users can give the Agent a goal and continue working with it over time.",
    steps: [
      {
        title: "Describe the task",
        quote:
          "Track this research project and continue working on it until the literature review is complete. Keep track of the sources you've already reviewed and identify gaps that still need research.",
      },
      {
        title: "What Mansa Agent does",
        body: "Mansa Agent can maintain the context of the project and continue working toward the defined goal.",
      },
    ],
    tryItNext: [
      "Create a persistent goal to monitor developments in African language AI and prepare a weekly summary of important updates.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
  {
    slug: "automated-recurring-work",
    title: "Automated Recurring Work",
    summary: "Mansa Agent can schedule recurring automations that continue running even when the application is closed.",
    category: "Mansa Agent",
    icon: "⟲",
    challenge:
      "Many tasks need to happen repeatedly, daily, weekly, or on a defined schedule. Manually performing these tasks creates unnecessary administrative work.",
    solution: "Mansa Agent can schedule recurring automations that continue running even when the application is closed.",
    applications: [
      "Daily inbox summaries",
      "Weekly research digests",
      "GitHub PR monitoring",
      "Recurring reports",
      "Scheduled information gathering",
      "Routine administrative workflows",
    ],
    steps: [
      {
        title: "Describe the task",
        quote:
          "Every Monday morning, review our GitHub repositories, summarize open pull requests and outstanding issues, and send me a development status report.",
      },
      {
        title: "What Mansa Agent does",
        body: "The automation can run according to the configured schedule and deliver the results through notifications.",
      },
    ],
    tryItNext: [
      "Every weekday morning, give me a summary of my priority emails and today's calendar.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
  {
    slug: "document-and-file-intelligence",
    title: "Document & File Intelligence",
    summary: "Users can attach documents or connect their Google Workspace so Mansa Agent can analyze and work with files.",
    category: "Mansa Agent",
    icon: "▤",
    challenge:
      "Organizations work with large volumes of PDFs, documents, spreadsheets, and other files. Finding relevant information and turning it into actionable insights can be time-consuming.",
    solution: "Users can attach documents or connect their Google Workspace so Mansa Agent can analyze and work with files.",
    applicationsHeading: "It can:",
    applications: [
      "Analyze PDFs and office documents",
      "Extract information",
      "Summarize documents",
      "Create new documents",
      "Update existing documents",
      "Work with spreadsheets",
      "Organize information from multiple files",
    ],
    steps: [
      {
        title: "Describe the task",
        quote:
          "Review these project documents, identify the key requirements, compare them with the project tracker, and prepare a list of outstanding deliverables.",
      },
      {
        title: "What Mansa Agent does",
        body: "Mansa Agent can analyze the supplied materials and produce a structured output based on the information available.",
      },
    ],
    tryItNext: [
      "Review these three proposals and create a comparison of their objectives, budgets, timelines, and deliverables.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
  {
    slug: "multilingual-ai-assistant",
    title: "Multilingual AI Assistant",
    summary:
      "Mansa Agent can interact with users in their preferred language through Mansa's translation pipeline while carrying out its underlying tasks in English.",
    category: "Mansa Agent",
    icon: "❖",
    challenge:
      "AI assistants often require users to communicate in a limited number of languages, creating barriers for people who prefer African languages.",
    solution:
      "Mansa Agent can interact with users in their preferred language through Mansa's translation pipeline while carrying out its underlying tasks in English. This enables users to interact with an AI agent without needing to communicate with it exclusively in English.",
    steps: [
      {
        title: "Describe the task",
        quote: "Please find all my important emails from this week and summarize them in Yoruba.",
      },
      {
        title: "What Mansa Agent does",
        body: "Mansa Agent can process the request, work with the connected tools, and return the response in the user's language.",
      },
    ],
    tryItNext: [
      "Research the latest developments in my industry and give me the summary in Hausa.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
  {
    slug: "ai-powered-business-workflows",
    title: "AI-Powered Business Workflows",
    summary:
      "Mansa Agent can combine multiple tools and capabilities to complete multi-step workflows, rather than just explaining how to do them.",
    category: "Mansa Agent",
    icon: "▶",
    challenge:
      "Many business processes involve multiple steps across different tools, for example researching information, updating a document, sending an email, and scheduling a meeting. Traditional AI chat systems can provide instructions but cannot complete the workflow on the user's behalf.",
    solution:
      "Mansa Agent can combine multiple tools and capabilities to complete multi-step workflows, for example: Research → Analyze → Create → Update → Communicate → Schedule.",
    steps: [
      {
        title: "Describe the task",
        quote:
          "Research five potential partners, create a comparison in Google Sheets, prepare a short briefing document, and draft an outreach email for each company.",
      },
      {
        title: "What Mansa Agent does",
        body: "Instead of simply explaining how to perform these steps, Mansa Agent can work through the connected tools to execute the workflow, subject to the required approvals.",
      },
    ],
    tryItNext: [
      "Find potential partners in the African AI ecosystem, create a shortlist based on their capabilities, and prepare personalized outreach emails.",
    ],
    disclaimer:
      "Mansa Agent can take actions on a user's behalf when the relevant services are connected. Actions with real-world side effects may require user approval, while connected accounts may provide standing authorization for certain actions. Users should review important outputs and actions before relying on them, particularly for sensitive, financial, legal, healthcare, security, or business-critical activities. Mansa Agent does not currently make payments or purchases, control a user's phone or personal device, place calls or send SMS, or provide direct SSH access to its underlying virtual machine.",
  },
];

/* ----------------------------------------------------------------------
 * Retired for now (kept for easy restoration): Government & public service,
 * Developer & API. Re-add to `useCases` above to bring them back — content
 * and copy are unchanged.
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

// "Mansa Agent" is deliberately excluded here — its items already read as
// "Mansa Agent" via their category-as-badge, but they're broad enough (and
// numerous enough) that giving them their own filter chip would crowd out
// the product use-case filters. They still show up under "All".
export function getUseCaseCategories(): UseCaseCategory[] {
  return Array.from(new Set(useCases.map((u) => u.category))).filter(
    (c) => c !== "Mansa Agent"
  ) as UseCaseCategory[];
}
