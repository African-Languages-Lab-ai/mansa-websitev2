import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Pill } from "@/components/ui/Pill";
import { Button } from "@/components/ui/Button";
import { CONTACT_MAILTO } from "@/lib/links";

export const metadata: Metadata = {
  title: "Mansa Interpret: Real-time voice interpretation, coming soon",
  description:
    "Real-time voice interpretation across African languages. Mansa Interpret is coming soon.",
};

export default function InterpretPage() {
  return (
    <>
      <Navbar solid />
      <main>
        <section className="flex min-h-[calc(100vh-72px)] flex-col items-center justify-center bg-espresso px-6 pt-[72px] text-center">
          <Pill>Mansa Interpret</Pill>
          <span className="mt-5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-offwhite/70">
            Coming soon
          </span>
          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-offwhite sm:text-5xl">
            Real-time voice interpretation for African languages.
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-offwhite/60">
            Mansa Interpret will let people speak naturally in their own language and be
            understood instantly, in conversations, calls, and meetings across 30+ African
            languages. We&apos;re building it now.
          </p>
          <div className="mt-8">
            <Button variant="light" size="default" href={CONTACT_MAILTO}>
              Get notified when it launches
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
