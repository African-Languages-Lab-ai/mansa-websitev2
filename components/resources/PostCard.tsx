import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/content/types";
import { formatDate } from "@/lib/content/format";
import { getAuthor } from "@/lib/content/authors";
import { asset } from "@/lib/assets";

/** Card used in the Blog grid (and anywhere a post needs a thumbnail card). */
export function PostCard({ post }: { post: Post }) {
  const author = getAuthor(post.authorId);
  return (
    <Link
      href={`/resources/${post.type}/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-offwhite shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-cream-dark">
        {post.heroImage ? (
          <Image
            src={asset(post.heroImage)}
            alt={post.heroAlt ?? ""}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          // Fallback: on-brand gradient tile when no hero image is set yet.
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-sunset-1/30 via-cream-dark to-cream">
            <span className="text-4xl font-bold text-sunset-2/40">mansa</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs font-medium">
          <span className="rounded-full bg-sunset-1/20 px-2.5 py-1 text-sunset-3">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-ink-muted">
            {formatDate(post.date)}
          </time>
        </div>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-muted">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
          <span>{author.name}</span>
          <span aria-hidden>·</span>
          <span>{post.readMinutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
