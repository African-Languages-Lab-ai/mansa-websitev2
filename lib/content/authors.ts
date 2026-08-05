import type { Author } from "./types";

// Bylines are intentionally attributed to the team for seeded sample content.
// Swap in real, named authors (e.g. founder / research leads) before launch.
export const authors: Record<string, Author> = {
  team: {
    id: "team",
    name: "Mansa Team",
    role: "African Languages Lab",
    bio: "Mansa is built by the African Languages Lab, a research group building AI that natively understands African languages, dialects, and cultural context.",
  },
};

export function getAuthor(id: string): Author {
  return authors[id] ?? authors.team;
}
