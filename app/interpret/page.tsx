import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pill } from "@/components/ui/Pill";

export const metadata: Metadata = {
  title: "Mansa Interpret: Real-time speech translation for African languages",
  description:
    "Mansa Interpret brings real-time speech translation to African languages, letting two people speak different languages and understand each other instantly. Coming soon.",
};

export default function InterpretPage() {
  return (
    <>
      <Navbar solid />
      <main className="flex min-h-[80vh] items-center bg-cream">
        <section className="container-page py-24 text-center md:py-32">
          <div className="mx-auto flex max-w-2xl flex-col items-center">
            <Pill>Mansa Interpret</Pill>
            <span className="mt-6 inline-block rounded-full bg-sunset-1/20 px-4 py-1.5 text-sm font-semibold uppercase tracking-wide text-sunset-3">
              Coming soon
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl md:text-6xl">
              Speak across African languages, in real time.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
              Mansa Interpret is real-time speech translation for African
              languages. Two people speak different languages, and Mansa listens
              in one and speaks back in another, so conversations flow naturally
              across the language barrier. We are building it now.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
