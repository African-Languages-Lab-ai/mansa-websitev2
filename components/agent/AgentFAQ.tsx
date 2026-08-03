"use client";

import { motion } from "framer-motion";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const faqs: AccordionItem[] = [
  {
    id: "what-is",
    title: "What is Mansa Agent?",
    content:
      "Mansa Agent is an autonomous AI assistant that connects to your tools to research, write, schedule, and complete tasks on your behalf across African languages.",
  },
  {
    id: "security",
    title: "How does Mansa Agent keep my organization's data secure?",
    content:
      "Data is encrypted in transit and at rest, each user gets a private agent environment, and the agent only accesses the services you explicitly connect.",
  },
  {
    id: "admin",
    title: "What admin controls are available for the AI assistant?",
    content:
      "Admins can manage connected services, set approval requirements for sensitive actions, and control which capabilities are available to each user.",
  },
  {
    id: "deploy",
    title: "How do I deploy Mansa Agent across my organization?",
    content:
      "Invite your team, connect your shared workspaces, and roll out access by role. Onboarding takes minutes and we support SSO for larger organizations.",
  },
  {
    id: "monitor",
    title: "Can I monitor how employees are using Mansa Agent and its AI features?",
    content:
      "Yes. Usage dashboards give visibility into activity and connected accounts while respecting user privacy and your data policies.",
  },
];

export function AgentFAQ() {
  return (
    <section className="bg-cream py-24 md:py-28">
      <div className="container-page grid grid-cols-1 gap-10 lg:grid-cols-[0.4fr_1.6fr] lg:gap-16">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-3xl font-bold tracking-tight text-ink sm:text-4xl"
        >
          FAQs
        </motion.h2>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <Accordion items={faqs} defaultOpenId="what-is" iconStyle="cross" />
        </motion.div>
      </div>
    </section>
  );
}
