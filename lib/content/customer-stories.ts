import type { CustomerStory } from "./types";

// Named customer stories require real, verified participation. Until early
// users and partners confirm they are willing to be featured, this list stays
// empty and the index page renders a "coming soon" state (never fabricated
// names, quotes, or metrics).
export const customerStories: CustomerStory[] = [];

export function getCustomerStories(): CustomerStory[] {
  return customerStories;
}

export function getCustomerStory(slug: string): CustomerStory | undefined {
  return customerStories.find((s) => s.slug === slug);
}
