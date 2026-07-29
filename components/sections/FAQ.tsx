"use client";

import { motion } from "framer-motion";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const faqs: AccordionItem[] = [
  {
    id: "features",
    title: "What are the core features of Mansa?",
    content:
      "Mansa brings together chat, translation, transcription, and an autonomous agent — all tuned specifically for African languages, dialects, and cultural context.",
  },
  {
    id: "usage",
    title: "How is Mansa typically used?",
    content:
      "Teams use Mansa for multilingual customer support, product localization, research analysis, education, and internal operations across the languages their people actually speak.",
  },
  {
    id: "benefits",
    title: "What are the benefits of Mansa to my team?",
    content:
      "You reach more users in their mother tongue, cut translation overhead, and ship language-aware features faster — with responses that feel local rather than machine-translated.",
  },
  {
    id: "trial",
    title: "Can I try Mansa before deploying it?",
    content:
      "Yes. You can start free in the app and test the API with a generous trial before rolling Mansa out across your organization.",
  },
  {
    id: "difference",
    title: "What makes Mansa different compared to ChatGPT?",
    content:
      "Mansa is trained on billions of African-language tokens gathered through direct, community-driven research — so it understands nuance and context that general models treat as an afterthought.",
  },
  {
    id: "integrate",
    title: "Can I integrate Mansa into my existing applications?",
    content:
      "Absolutely. Mansa exposes a simple, well-documented REST API for chat, translation, and speech, with SDKs and examples to get you integrated quickly.",
  },
  {
    id: "pricing",
    title: "How is Mansa priced?",
    content:
      "The app is free to get started, and API usage is priced transparently per request with volume discounts for enterprise. Contact us for a tailored plan.",
  },
  {
    id: "data",
    title: "How do you train on data? Is our data private and secure?",
    content:
      "Your data stays yours. We do not train on customer data without explicit consent, and all requests are encrypted in transit and at rest.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-cream py-24 md:py-32">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[0.5fr_1.5fr] lg:gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <p className="text-sm font-medium uppercase tracking-wide text-maroon">FAQs</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Questions, answered
          </h2>
          <p className="mt-3 max-w-xs text-base text-ink-muted">
            Everything you need to know about Mansa and how it works.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <Accordion items={faqs} defaultOpenId="features" iconStyle="cross" />
        </motion.div>
      </div>
    </section>
  );
}
