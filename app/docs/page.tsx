import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DocsShell } from "@/components/docs/DocsShell";

export const metadata: Metadata = {
  title: "Mansa API Documentation",
  description: "Complete API reference and guides for translation, transcription, and speech services across African languages.",
};

export default function DocsPage() {
  return (
    <>
      <Navbar solid />
      <main className="min-h-screen bg-cream pt-[72px]">
        <div className="border-b border-ink/10 bg-cream-dark/40 py-10">
          <div className="container-page">
            <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Documentation</h1>
            <p className="mt-2 text-lg text-ink-muted">Complete API reference and guides.</p>
          </div>
        </div>
        <DocsShell />
      </main>
      <Footer />
    </>
  );
}
