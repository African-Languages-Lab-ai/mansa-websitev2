"use client";

import { useState, type ReactNode } from "react";

export function CodeBlock({ code, label }: { code: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="mt-3 overflow-hidden rounded-xl border border-white/10 bg-espresso">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2">
        <span className="text-[11px] font-semibold uppercase tracking-wide text-onbrand/40">
          {label ?? "Code"}
        </span>
        <button
          type="button"
          onClick={() => {
            navigator.clipboard?.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className="text-[11px] font-medium text-onbrand/50 transition-colors hover:text-onbrand focus:outline-none"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-[13px] leading-relaxed text-onbrand/90">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export type Param = { name: string; type: string; required: boolean; desc: string };

export function ParamTable({ rows, headField = "Parameter" }: { rows: Param[]; headField?: string }) {
  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-ink/10">
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-ink/10 bg-cream-dark/60 text-left">
            <th className="px-4 py-2.5 font-semibold text-ink">{headField}</th>
            <th className="px-4 py-2.5 font-semibold text-ink">Type</th>
            <th className="px-4 py-2.5 font-semibold text-ink">Required</th>
            <th className="px-4 py-2.5 font-semibold text-ink">Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name} className="border-b border-ink/5 last:border-0">
              <td className="px-4 py-3 font-mono text-[13px] text-accent">{r.name}</td>
              <td className="px-4 py-3 text-ink-muted">{r.type}</td>
              <td className="px-4 py-3 text-ink-muted">{r.required ? "Yes" : "No"}</td>
              <td className="px-4 py-3 text-ink-muted">{r.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Endpoint({ method, path }: { method: string; path: string }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-ink/10 bg-cream-dark/40 px-4 py-3 font-mono text-sm">
      <span className="rounded-md bg-maroon px-2 py-1 text-xs font-bold text-onbrand">{method}</span>
      <span className="break-all text-ink">{path}</span>
    </div>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 text-lg font-semibold text-ink first:mt-0">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 leading-relaxed text-ink-muted">{children}</p>;
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-ink-muted">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}

export function OrderedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="mt-3 list-decimal space-y-1.5 pl-5 leading-relaxed text-ink-muted">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ol>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-cream-dark px-3 py-1 text-sm text-ink">
      {children}
    </span>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-4 rounded-xl border border-sunset-2/25 bg-sunset-1/10 px-4 py-3 text-sm leading-relaxed text-ink">
      {children}
    </div>
  );
}
