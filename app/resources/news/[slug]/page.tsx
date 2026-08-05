import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArticlePage } from "@/components/resources/ArticlePage";
import { getPosts, getPost } from "@/lib/content/posts";

export function generateStaticParams() {
  return getPosts("news").map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost("news", params.slug);
  if (!post) return { title: "News | Mansa" };
  return {
    title: `${post.title} | Mansa News`,
    description: post.excerpt,
  };
}

export default function NewsPostPage({ params }: { params: { slug: string } }) {
  const post = getPost("news", params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar solid />
      <main>
        <ArticlePage post={post} />
      </main>
      <Footer />
    </>
  );
}
