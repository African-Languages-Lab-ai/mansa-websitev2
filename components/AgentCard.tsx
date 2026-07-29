function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1a6.2 6.2 0 010-12.4c1.9 0 3.2.8 3.9 1.5l2.7-2.6C16.9 2.6 14.7 1.6 12 1.6a10.4 10.4 0 100 20.8c6 0 10-4.2 10-10.1 0-.7-.1-1.2-.2-1.8H12z" />
    </svg>
  );
}
function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="#1C130E" aria-hidden>
      <path d="M12 1.5A10.5 10.5 0 001.5 12c0 4.6 3 8.5 7.2 9.9.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.4-3.5-1.4-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.3-.3-4.7-1.2-4.7-5.1 0-1.1.4-2 1-2.7-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 2.8 1a9.6 9.6 0 015 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.5.1 2.8.7.7 1 1.6 1 2.7 0 3.9-2.3 4.8-4.6 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10.5 10.5 0 0022.5 12 10.5 10.5 0 0012 1.5z" />
    </svg>
  );
}
function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="#3B82F6" strokeWidth="2" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

/** Static styled replica of the Mansa Agent app card used in the reference. */
export function AgentCard() {
  const connected = [
    { name: "Google", icon: <GoogleIcon /> },
    { name: "GitHub", icon: <GithubIcon /> },
    { name: "Email", icon: <EmailIcon /> },
  ];
  const featured = [
    { title: "Inbox triage", sub: "Scan unread mail and flag what needs a reply today." },
    { title: "Morning brief", sub: "Summarize overnight email and top headlines." },
    { title: "GitHub PR digest", sub: "Open pull requests and CI status across your repos." },
  ];
  return (
    <div className="w-full max-w-sm rounded-3xl bg-white p-5 shadow-2xl">
      <div className="flex items-center justify-between">
        <span aria-hidden className="text-lg text-ink-muted">≡</span>
        <span className="text-sm font-semibold text-ink">Mansa Agent</span>
        <span aria-hidden className="text-ink-muted">✎</span>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-full border border-ink/10 bg-cream/50 px-4 py-2">
        <span aria-hidden className="text-ink-muted">⌕</span>
        <span className="text-xs text-ink-muted">Search capabilities and recents</span>
      </div>

      <div className="mt-5 flex flex-col items-center text-center">
        <span className="grid h-10 w-10 place-items-center rounded-full border border-ink/10 text-lg text-ink">✦</span>
        <p className="mt-2 text-base font-semibold text-ink">Mansa Agent</p>
        <p className="mt-1 max-w-[15rem] text-xs text-ink-muted">
          Connect services to unlock email, calendar, and GitHub
        </p>
      </div>

      <button className="mt-4 w-full rounded-full bg-ink py-2.5 text-sm font-medium text-cream transition-colors hover:bg-espresso">
        New chat with Mansa Agent
      </button>

      <div className="mt-5 flex items-center justify-between">
        <p className="text-xs font-semibold text-ink">Connected</p>
        <p className="text-xs text-ink-muted">Manage</p>
      </div>
      <div className="mt-2 flex gap-2">
        {connected.map((c) => (
          <div key={c.name} className="flex flex-1 flex-col items-center gap-1 rounded-xl border border-ink/10 bg-cream/40 py-2">
            {c.icon}
            <span className="text-[10px] font-medium text-ink">{c.name}</span>
          </div>
        ))}
        <div className="flex flex-1 flex-col items-center gap-1 rounded-xl border border-dashed border-ink/20 py-2 text-ink-muted">
          <span className="text-sm leading-none">+</span>
          <span className="text-[10px] font-medium">Add more</span>
        </div>
      </div>

      <p className="mt-5 text-xs font-semibold text-ink">Featured</p>
      <div className="mt-2 space-y-2">
        {featured.map((f) => (
          <div key={f.title} className="flex items-center gap-3 rounded-xl border border-ink/5 bg-cream/40 p-3">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-maroon/10 text-maroon">◍</span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-ink">{f.title}</p>
              <p className="truncate text-xs text-ink-muted">{f.sub}</p>
            </div>
            <span aria-hidden className="text-ink-muted">›</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-2 border-t border-ink/5 pt-3 text-sm font-medium text-ink">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-maroon/10 text-maroon">◎</span>
        Research watch
      </div>
    </div>
  );
}
