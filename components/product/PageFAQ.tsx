"use client";

import { motion } from "framer-motion";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  faqs: AccordionItem[];
  defaultOpenId?: string;
};

export function PageFAQ({ faqs, defaultOpenId }: Props) {
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
          <Accordion items={faqs} defaultOpenId={defaultOpenId ?? faqs[0]?.id} iconStyle="cross" />
        </motion.div>
      </div>
    </section>
  );
}
