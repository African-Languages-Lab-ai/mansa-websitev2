import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/content/types";
import { formatDate } from "@/lib/content/format";
import { getAuthor } from "@/lib/content/authors";
import { relatedPosts } from "@/lib/content/posts";
import { ContentBlocks } from "./ContentBlocks";
import { asset } from "@/lib/assets";

const SITE = "https://mymansa.ai";

/** Shared detail template for Blog and News items. */
export function ArticlePage({ post }: { post: Post }) {
  const author = getAuthor(post.authorId);
  const related = relatedPosts(post);
  const label = post.type === "news" ? "News" : "Blog";
  const shareUrl = `${SITE}/resources/${post.type}/${post.slug}`;

  return (
    <article className="bg-cream pb-24 pt-[128px] md:pt-[160px]">
      <div className="container-page max-w-3xl">
        <Link
          href={`/resources/${post.type}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-ink-muted transition-colors hover:text-accent"
        >
          <span aria-hidden>←</span> Back to {label}
        </Link>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
          <span className="rounded-full bg-sunset-1/20 px-3 py-1 font-medium text-sunset-3">
            {post.category}
          </span>
          <time dateTime={post.date} className="text-ink-muted">
            {formatDate(post.date)}
          </time>
          <span aria-hidden className="text-ink-muted">·</span>
          <span className="text-ink-muted">{post.readMinutes} min read</span>
        </div>

        <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          {post.title}
        </h1>

        <div className="mt-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sunset-1 text-sm font-bold text-white">
            {author.name.charAt(0)}
          </div>
          <div className="text-sm">
            <div className="font-semibold text-ink">{author.name}</div>
            <div className="text-ink-muted">{author.role}</div>
          </div>
        </div>

        {post.placeholder && (
          <p className="mt-8 rounded-xl border border-sunset-1/40 bg-sunset-1/10 px-4 py-3 text-sm text-ink-muted">
            Sample content shown to illustrate the layout. Replace with final copy before launch.
          </p>
        )}
      </div>

      {/* Hero image */}
      {post.heroImage && (
        <div className="container-page mt-10 max-w-4xl">
          <div className="overflow-hidden rounded-3xl ring-1 ring-black/5">
            <Image
              src={asset(post.heroImage)}
              alt={post.heroAlt ?? ""}
              width={1400}
              height={788}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="container-page mt-12 max-w-3xl">
        <ContentBlocks blocks={post.body} />

        {/* Share */}
        <div className="mt-12 flex items-center gap-3 border-t border-ink/10 pt-8 text-sm">
          <span className="font-medium text-ink">Share</span>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream-dark px-4 py-2 font-medium text-ink/80 transition-colors hover:text-ink"
          >
            X
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-cream-dark px-4 py-2 font-medium text-ink/80 transition-colors hover:text-ink"
          >
            LinkedIn
          </a>
        </div>

        {/* Author bio */}
        <div className="mt-10 flex gap-4 rounded-2xl bg-offwhite p-6 ring-1 ring-black/5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sunset-1 text-lg font-bold text-white">
            {author.name.charAt(0)}
          </div>
          <div>
            <div className="font-semibold text-ink">{author.name}</div>
            <div className="text-sm text-ink-muted">{author.role}</div>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">
              {author.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="container-page mt-16 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            Related {label.toLowerCase()}
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/resources/${r.type}/${r.slug}`}
                  className="group flex h-full flex-col rounded-2xl bg-offwhite p-5 shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="text-xs font-medium text-sunset-3">
                    {r.category}
                  </span>
                  <span className="mt-2 font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
                    {r.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}
