"use client";

import { useMemo, useState } from "react";
import { P } from "@/components/docs/primitives";

const RATE_PER_CHAR = 0.0001;

export function CostCalculator() {
  const [text, setText] = useState("");
  const chars = text.length;
  const cost = useMemo(() => chars * RATE_PER_CHAR, [chars]);

  return (
    <div>
      <P>Calculate the cost of your translation in real time. Enter text below to see the estimated cost.</P>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type text here..."
        rows={5}
        className="mt-4 w-full rounded-xl border border-ink/15 bg-white p-4 text-sm text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-maroon"
      />

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-ink/10 bg-cream-dark/40 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">Characters</p>
          <p className="mt-1 text-xl font-bold text-ink">{chars.toLocaleString()}</p>
        </div>
        <div className="rounded-xl border border-ink/10 bg-cream-dark/40 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">Rate</p>
          <p className="mt-1 text-xl font-bold text-ink">$100 / 1M</p>
        </div>
        <div className="rounded-xl border border-maroon/20 bg-maroon/5 px-4 py-3">
          <p className="text-xs font-medium uppercase tracking-wide text-maroon">Estimated Cost</p>
          <p className="mt-1 text-xl font-bold text-maroon">${cost.toFixed(4)}</p>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">Cost Breakdown</p>
        <p className="mt-2 text-sm text-ink-muted">
          Per character: $0.0001 &middot; Per 1,000 characters: $0.10 &middot; Per 10,000 characters: $1.00
        </p>
      </div>

      <div className="mt-6">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-muted">Quick Examples</p>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            ["1 page", "2,500 chars", "$0.25"],
            ["1 article", "5,000 chars", "$0.50"],
            ["1 document", "50,000 chars", "$5.00"],
            ["1 book", "500,000 chars", "$50.00"],
          ].map(([label, count, price]) => (
            <div key={label} className="flex items-center justify-between rounded-lg border border-ink/10 px-3 py-2 text-sm">
              <span className="text-ink">{label} <span className="text-ink-muted">({count})</span></span>
              <span className="font-semibold text-ink">{price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
