"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { APP_URL, CONTACT_MAILTO } from "@/lib/links";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  badge?: string;
  highlight?: boolean;
  cta: string;
  href: string;
  /** name of the tier this one builds on ("Everything in X, plus:"). Omitted for the entry tier. */
  includesFrom?: string;
  features: string[];
};

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "Try Mansa at no cost",
    price: "$0",
    priceNote: "Forever free",
    cta: "Get started",
    href: APP_URL,
    features: [
      "Mansa Chat included",
      "Limited monthly credits, resets each cycle",
      "Chat can draw on your All Lab balance once credits run out",
    ],
  },
  {
    name: "Plus",
    tagline: "For everyday productivity",
    price: "$12",
    priceNote: "Per month",
    cta: "Get started",
    href: APP_URL,
    includesFrom: "Free",
    features: [
      "More monthly credits than Free",
      "Mansa Agent: quick answers and act",
      "3 active automations",
      "1 GB agent workspace",
      "Agent can also use your All Lab balance on overflow",
    ],
  },
  {
    name: "Pro",
    tagline: "For power users and teams",
    price: "$35",
    priceNote: "Per month",
    badge: "Recommended",
    highlight: true,
    cta: "Get started",
    href: APP_URL,
    includesFrom: "Plus",
    features: [
      "More monthly credits than Plus",
      "Mansa Agent: quick answers, act, and deep research",
      "Delegation",
      "15 active automations",
      "3 GB agent workspace",
    ],
  },
  {
    name: "Max",
    tagline: "For heavy, high-volume use",
    price: "$100",
    priceNote: "Per month",
    cta: "Get started",
    href: APP_URL,
    includesFrom: "Pro",
    features: [
      "More monthly credits than Pro",
      "50 active automations",
      "8 GB agent workspace",
      "Highest usage limits on Chat and Agent",
    ],
  },
  {
    name: "Enterprise",
    tagline: "Custom pricing for organizations",
    price: "Custom",
    priceNote: "Contact sales",
    cta: "Contact sales",
    href: CONTACT_MAILTO,
    includesFrom: "Max",
    features: [
      "Custom monthly credit allowance",
      "Full Mansa Agent access with custom limits",
      "Custom active automations",
      "Custom agent workspace storage",
      "Dedicated support",
    ],
  },
];

function Check() {
  return (
    <span className="mt-0.5 grid h-4 w-4 shrink-0 place-items-center rounded-full bg-maroon/15 text-[10px] font-bold text-maroon">
      ✓
    </span>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`flex h-full flex-col rounded-3xl p-6 ${
        plan.highlight
          ? "border-2 border-maroon bg-gradient-to-b from-maroon/10 to-maroon/[0.03] shadow-soft"
          : "border border-ink/10 bg-cream-dark/25"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-2xl font-bold tracking-tight text-ink">{plan.name}</h3>
        {plan.badge && (
          <span className="shrink-0 rounded-full bg-maroon px-3 py-1 text-xs font-semibold text-offwhite">
            {plan.badge}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-ink-muted">{plan.tagline}</p>

      <div className="mt-5">
        <span className="text-4xl font-bold tracking-tight text-ink">{plan.price}</span>
        <p className="mt-1 text-xs text-ink-muted">{plan.priceNote}</p>
      </div>

      <Button variant={plan.highlight ? "filled" : "outline"} className="mt-6 w-full" href={plan.href}>
        {plan.cta}
      </Button>

      <div className="mt-6 border-t border-ink/10 pt-5">
        {plan.includesFrom && (
          <p className="mb-3 text-sm font-semibold text-ink">Everything in {plan.includesFrom}, plus:</p>
        )}
        <ul className="space-y-2.5">
          {plan.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-ink-muted">
              <Check />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export function PricingPlans() {
  const topRow = plans.slice(0, 3);
  const bottomRow = plans.slice(3);

  return (
    <section className="bg-cream pb-24 pt-4 md:pb-28">
      <div className="container-page">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {topRow.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-[calc(66.666%+1.5rem)]"
        >
          {bottomRow.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-muted">
          Monthly plan credit resets each billing cycle and does not roll over. Translate and
          Transcribe continue to use your All Lab balance directly.
        </p>
      </div>
    </section>
  );
}
