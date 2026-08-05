# Content layer

This site is a **static export** (`next.config.mjs` → `output: "export"`,
deployed to GitHub Pages). All Resources content is resolved at build time from
the typed data files in this folder:

- `posts.ts` — Blog + News (shared type, distinguished by `type: "blog" | "news"`)
- `use-cases.ts` — illustrative, scenario-based use cases
- `customer-stories.ts` — named, verified stories (empty until partners opt in)
- `authors.ts` — bylines

## Editing content

Today, editing requires a code change + redeploy (edit a `.ts` file, commit,
push). A non-developer **cannot** update content without a deploy on the current
static-export / GitHub Pages setup.

## Recommended no-code upgrade (flagged for the team)

Lightest options that fit this stack, in order of effort:

1. **MDX files** (`@next/mdx` or Contentlayer) for Blog/News bodies, kept in a
   `/content` folder. Marketing can edit Markdown; still needs a git commit.
2. **A headless CMS** (Sanity, Contentful, or a Git-based CMS like Decap/TinaCMS)
   for true no-code editing. Decap/Tina commit to the repo and rebuild, which
   fits GitHub Pages well; Sanity/Contentful need a build hook.

No fabricated customer quotes, pricing figures, or attributions are stored here.
Items marked `placeholder: true` are sample copy to replace before launch.
