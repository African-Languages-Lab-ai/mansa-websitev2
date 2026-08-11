// Lightweight, build-time content layer.
//
// This site is a static export (output: "export"), so all content is resolved
// at build time from typed data files below. There is no headless CMS in the
// stack today; see lib/content/README for the recommended no-code upgrade path.

/** A single block of rich body content, rendered by <ContentBlocks />. */
export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "quote"; text: string; cite?: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Author = {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar?: string;
};

export type PostType = "blog" | "news";

export type PostCategory =
  | "Product"
  | "Research"
  | "Impact"
  | "Community"
  | "Events"
  | "Announcements"
  | "Press";

export type Post = {
  slug: string;
  type: PostType;
  title: string;
  excerpt: string;
  category: PostCategory;
  /** ISO date, e.g. "2026-03-14". */
  date: string;
  authorId: string;
  heroImage?: string;
  heroAlt?: string;
  readMinutes: number;
  featured?: boolean;
  /** True for seeded sample content that should be replaced before launch. */
  placeholder?: boolean;
  body: ContentBlock[];
};

export type UseCaseCategory =
  | "Language & localization"
  | "Education"
  | "Government & public service"
  | "Developer & API"
  | "Healthcare"
  | "Financial services"
  | "Voice & conversational AI"
  // Not offered as a filter chip (see getUseCaseCategories) — items keep
  // this as their category since it doubles as their product-label badge.
  | "Mansa Agent";

/** A line in a demo response: a plain paragraph, a quoted output, or a code block. */
export type DemoResponseLine =
  | string
  | { quote: string }
  | { code: string };

/** A sample Mansa chat exchange shown in the "In practice" UI mock. */
export type UseCaseDemo = {
  prompt: string;
  response: DemoResponseLine[];
};

/** Quick-facts strip shown under the summary on a use case detail page. */
export type UseCaseMeta = {
  category: string;
  languages: string;
  product: string;
};

/** A single numbered step in the "In practice" walkthrough. Exactly one of
 * body / quote / bullets should be set. */
export type UseCaseStep = {
  title: string;
  body?: string;
  quote?: string;
  bullets?: string[];
};

export type UseCase = {
  slug: string;
  title: string;
  summary: string;
  category: UseCaseCategory;
  /** Short product name shown as the card/detail-page eyebrow (e.g. "Mansa AI",
   * "Mansa Transcribe"). Falls back to `category` when omitted — this is how
   * the "Mansa Agent" items already read, since their category IS the product. */
  productLabel?: string;
  /** Simple glyph shown on the card, consistent with the site's icon style. */
  icon: string;
  challenge: string;
  /** One or more paragraphs under "How Mansa helps". */
  solution: string | string[];
  example?: string;
  meta?: UseCaseMeta;
  /** Optional bullet list under the solution, e.g. "Potential applications include" / "It can:". */
  applications?: string[];
  /** Heading for `applications`. Defaults to "Potential applications include" when omitted. */
  applicationsHeading?: string;
  /** Optional lead-in sentence shown above the numbered "In practice" steps. */
  stepsIntro?: string;
  /** Numbered "In practice" walkthrough. Takes priority over `demo` when set. */
  steps?: UseCaseStep[];
  /** Prompt + response rendered as a Mansa chat UI in "In practice" (legacy/fallback). */
  demo?: UseCaseDemo;
  /** Optional callout, e.g. how to get the output in another language. */
  altNote?: { heading: string; body: string };
  /** Optional "Try it next" follow-up prompt suggestions. */
  tryItNext?: string[];
  /** Optional "Tips" bullets. */
  tips?: string[];
  /** Optional safety/scope disclaimer shown in a highlighted callout. */
  disclaimer?: string;
  placeholder?: boolean;
};

export type CustomerStory = {
  slug: string;
  org: string;
  industry: string;
  oneLiner: string;
  quote?: string;
  quoteAttribution?: string;
  logo?: string;
  body: ContentBlock[];
  metrics?: { label: string; value: string }[];
  placeholder?: boolean;
};
