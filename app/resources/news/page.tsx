import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pill } from "@/components/ui/Pill";

export const metadata: Metadata = {
  title: "News | Mansa",
  description:
    "Product launches, partnerships, and press from Mansa and the African Languages Lab. Coming soon.",
};

export default function NewsIndexPage() {
  return (
    <>
      <Navbar solid />
      <main className="flex min-h-[80vh] items-center bg-cream">
        <section className="container-page py-24 text-center md:py-32">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <Pill>Newsroom</Pill>
            <span className="mt-6 inline-block rounded-full bg-sunset-1/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-sunset-3">
              Coming soon
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
              News and announcements
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              We&apos;re building out our newsroom. Product launches, partnerships, and press from
              Mansa and the African Languages Lab will live here soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
