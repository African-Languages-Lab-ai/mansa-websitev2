"use client";

import { useState } from "react";

// Static export has no backend, so Subscribe opens the visitor's mail client
// with a pre-addressed email to the team (the entered address as the subject).
const SIGNUP_TO = "info@africanlanguageslab.com";

export function Newsletter() {
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    const href = `mailto:${SIGNUP_TO}?subject=${encodeURIComponent(value)}`;
    window.location.href = href;
  }

  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
        Stay ahead with Mansa
      </h2>
      <p className="mt-2 text-ink-muted">
        Get product updates, research insights, developer resources, and AI news from the
        African Languages Lab.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-3 sm:flex-row"
      >
        <label className="flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-full border border-ink/15 bg-offwhite px-5 py-3 text-sm text-ink placeholder:text-ink-muted/70 focus:border-maroon focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-maroon px-6 py-3 text-sm font-medium text-onbrand shadow-sm transition-colors hover:bg-maroon-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}
