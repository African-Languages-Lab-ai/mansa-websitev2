"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { APP_URL, CONTACT_MAILTO } from "@/lib/links";

type Row = { label: string; value: string };
type Plan = {
  name: string;
  tagline: string;
  badge?: string;
  highlight?: boolean;
  rows: Row[];
  cta: string;
};

const mutedValues = new Set(["Not included", "None", "-"]);

const plans: Plan[] = [
  {
    name: "Free",
    tagline: "Free",
    cta: "Get started",
    rows: [
      { label: "Price", value: "Free" },
      { label: "Monthly credit", value: "Free limited credits, resets each cycle" },
      { label: "Mansa Chat", value: "Included" },
      { label: "Mansa Agent", value: "Not included" },
      { label: "Deep research", value: "Not included" },
      { label: "Delegation", value: "Not included" },
      { label: "Active automations", value: "None" },
      { label: "Agent workspace", value: "-" },
      { label: "After credit", value: "Chat can use All Lab balance when overflow is on" },
    ],
  },
  {
    name: "Plus",
    tagline: "$12/mo",
    cta: "Get started",
    rows: [
      { label: "Price", value: "$12/mo" },
      { label: "Monthly credit", value: "More credits than Free, resets each cycle" },
      { label: "Mansa Chat", value: "Included" },
      { label: "Mansa Agent", value: "Quick answer and Act" },
      { label: "Deep research", value: "Not included" },
      { label: "Delegation", value: "Not included" },
      { label: "Active automations", value: "3" },
      { label: "Agent workspace", value: "1 GB" },
      { label: "After credit", value: "Chat and Agent can use All Lab balance when overflow is on" },
    ],
  },
  {
    name: "Pro",
    tagline: "$35/mo",
    badge: "Recommended",
    highlight: true,
    cta: "Get started",
    rows: [
      { label: "Price", value: "$35/mo" },
      { label: "Monthly credit", value: "More credits than Plus, resets each cycle" },
      { label: "Mansa Chat", value: "Included" },
      { label: "Mansa Agent", value: "Quick answer, Act, and Deep research" },
      { label: "Deep research", value: "Included" },
      { label: "Delegation", value: "Included" },
      { label: "Active automations", value: "15" },
      { label: "Agent workspace", value: "3 GB" },
      { label: "After credit", value: "Chat and Agent can use All Lab balance when overflow is on" },
    ],
  },
  {
    name: "Max",
    tagline: "$100/mo",
    cta: "Get started",
    rows: [
      { label: "Price", value: "$100/mo" },
      { label: "Monthly credit", value: "More credits than Pro, resets each cycle" },
      { label: "Mansa Chat", value: "Included" },
      { label: "Mansa Agent", value: "Quick answer, Act, and Deep research" },
      { label: "Deep research", value: "Included" },
      { label: "Delegation", value: "Included" },
      { label: "Active automations", value: "50" },
      { label: "Agent workspace", value: "8 GB" },
      { label: "After credit", value: "Chat and Agent can use All Lab balance when overflow is on" },
    ],
  },
];

const enterprise: Plan = {
  name: "Enterprise",
  tagline: "Custom pricing for teams",
  cta: "Contact sales",
  rows: [
    { label: "Price", value: "Custom" },
    { label: "Monthly credit", value: "Custom allowance" },
    { label: "Mansa Chat", value: "Included" },
    { label: "Mansa Agent", value: "Full access with custom limits" },
    { label: "Deep research", value: "Included" },
    { label: "Delegation", value: "Included" },
    { label: "Active automations", value: "Custom" },
    { label: "Agent workspace", value: "Custom storage" },
    { label: "Support", value: "Contact All Lab for sales" },
  ],
};

function PlanRow({ label, value }: Row) {
  const muted = mutedValues.has(value);
  return (
    <div className="flex items-start justify-between gap-3 border-t border-ink/10 py-2.5 first:border-t-0">
      <span className="shrink-0 text-sm text-ink-muted">{label}</span>
      <span className={`text-right text-sm font-medium ${muted ? "text-ink-muted/70" : "text-ink"}`}>
        {value}
      </span>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`flex h-full flex-col rounded-3xl p-6 ${
        plan.highlight
          ? "border-2 border-maroon bg-cream-dark/40 shadow-soft"
          : "border border-ink/10 bg-cream-dark/25"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-2xl font-bold tracking-tight text-ink">{plan.name}</h3>
          <p className="mt-0.5 text-sm text-ink-muted">{plan.tagline}</p>
        </div>
        {plan.badge && (
          <span className="rounded-full bg-maroon px-3 py-1 text-xs font-semibold text-offwhite">
            {plan.badge}
          </span>
        )}
      </div>

      <div className="mt-5 flex-1">
        {plan.rows.map((r) => (
          <PlanRow key={r.label} {...r} />
        ))}
      </div>

      <Button variant={plan.highlight ? "filled" : "outline"} className="mt-6 w-full" href={APP_URL}>
        {plan.cta}
      </Button>
    </motion.div>
  );
}

export function PricingPlans() {
  return (
    <section className="bg-cream pb-24 pt-4 md:pb-28">
      <div className="container-page">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {plans.map((p) => (
            <PlanCard key={p.name} plan={p} />
          ))}
        </motion.div>

        {/* Enterprise — full width */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-6 rounded-3xl border border-ink/10 bg-cream-dark/25 p-6 md:p-8"
        >
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-12">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-ink">{enterprise.name}</h3>
              <p className="mt-1 text-sm text-ink-muted">{enterprise.tagline}</p>
              <Button variant="filled" className="mt-6" href={CONTACT_MAILTO}>
                {enterprise.cta}
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-x-10 sm:grid-cols-2">
              {enterprise.rows.map((r) => (
                <PlanRow key={r.label} {...r} />
              ))}
            </div>
          </div>
        </motion.div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-muted">
          Monthly plan credit resets each billing cycle and does not roll over. Translate and
          Transcribe continue to use your All Lab balance directly.
        </p>
      </div>
    </section>
  );
}
