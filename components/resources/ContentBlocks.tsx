import Image from "next/image";
import type { ContentBlock } from "@/lib/content/types";
import { asset } from "@/lib/assets";

/** Renders an array of content blocks as an article body. */
export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2
                key={i}
                className="pt-2 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
              >
                {block.text}
              </h2>
            );
          case "paragraph":
            return (
              <p key={i} className="text-lg leading-relaxed text-ink-muted">
                {block.text}
              </p>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-4 border-sunset-1 pl-6 text-xl font-medium italic leading-relaxed text-ink"
              >
                {block.text}
                {block.cite && (
                  <cite className="mt-2 block text-base font-normal not-italic text-ink-muted">
                    {block.cite}
                  </cite>
                )}
              </blockquote>
            );
          case "list":
            return (
              <ul key={i} className="space-y-2 pl-1">
                {block.items.map((item, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-lg leading-relaxed text-ink-muted"
                  >
                    <span aria-hidden className="mt-1 text-sunset-2">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "image":
            return (
              <figure key={i} className="my-2">
                <div className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                  <Image
                    src={asset(block.src)}
                    alt={block.alt}
                    width={1200}
                    height={675}
                    className="h-auto w-full"
                  />
                </div>
                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-ink-muted">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
