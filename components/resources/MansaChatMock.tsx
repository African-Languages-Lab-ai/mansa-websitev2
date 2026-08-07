import type { DemoResponseLine } from "@/lib/content/types";

/**
 * A faithful, static reproduction of the Mansa web chat UI (desktop), showing a
 * single prompt and its response. Sidebar / history are intentionally omitted so
 * the focus is the prompt and the answer, matching the product reference.
 */
export function MansaChatMock({
  prompt,
  response,
}: {
  prompt: string;
  response: DemoResponseLine[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-cream shadow-soft ring-1 ring-black/5">
      {/* Top bar: model / language selector */}
      <div className="flex justify-end px-4 pt-4 sm:px-6">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-offwhite px-3 py-1.5 text-xs font-medium text-ink/70">
          <GlobeIcon />
          Auto
          <ChevronDown />
        </span>
      </div>

      {/* Conversation */}
      <div className="px-4 pb-2 pt-4 sm:px-8">
        {/* User prompt bubble */}
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-[1.35rem] bg-gradient-to-br from-[#3b2519] to-[#1c0f08] px-5 py-3 text-sm font-semibold leading-snug text-white shadow-sm">
            {prompt}
          </p>
        </div>
        <div className="mt-2 flex justify-end pr-1 text-ink/40">
          <CopyIcon />
        </div>

        {/* Assistant response */}
        <div className="mt-6 space-y-3 text-sm leading-relaxed text-[#3c525a]">
          {response.map((line, i) =>
            typeof line === "string" ? (
              <p key={i}>{line}</p>
            ) : "code" in line ? (
              <pre
                key={i}
                className="overflow-x-auto rounded-xl bg-espresso px-4 py-3 text-xs leading-relaxed text-onbrand"
              >
                <code>{line.code}</code>
              </pre>
            ) : (
              <p key={i} className="italic text-[#3c525a]/90">
                &ldquo;{line.quote}&rdquo;
              </p>
            )
          )}
        </div>
      </div>

      {/* Input bar */}
      <div className="px-4 pb-5 pt-3 sm:px-8">
        <div className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-ink/15">
          <PlusIcon />
          <div className="flex min-w-0 flex-1 items-center gap-1">
            <span className="truncate text-sm text-ink-muted/70">Message Mansa...</span>
          </div>
          <span className="hidden items-center gap-1 text-xs font-medium text-ink/70 sm:inline-flex">
            <SparkleIcon />
            Balanced
            <ChevronDown />
          </span>
          <MicIcon />
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream-dark text-ink/70">
            <ChevronUp />
          </span>
        </div>
      </div>
    </div>
  );
}

/* ---- icons (kept minimal to match the reference) ---- */

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" />
    </svg>
  );
}

function ChevronDown() {
  return (
    <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function ChevronUp() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m6 15 6-6 6 6" />
    </svg>
  );
}

function CopyIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="9" width="11" height="11" rx="2" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink/60" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 text-accent" fill="currentColor" aria-hidden>
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
    </svg>
  );
}

function MicIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 text-ink/60" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  );
}
