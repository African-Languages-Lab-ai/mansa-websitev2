"use client";

import { useState } from "react";

// Static export has no backend, so joining opens the visitor's mail client
// with a pre-addressed email to the team (the entered address as the subject),
// same approach as the Newsletter component.
const WAITLIST_TO = "info@africanlanguageslab.com";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;
    const href = `mailto:${WAITLIST_TO}?subject=${encodeURIComponent(
      `Mansa waitlist: ${value}`
    )}`;
    window.location.href = href;
    setSent(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label className="flex-1">
          <span className="sr-only">Email address</span>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-full border border-onbrand/20 bg-onbrand/10 px-5 py-3.5 text-base text-onbrand placeholder:text-onbrand/50 backdrop-blur focus:border-sunset-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-1"
          />
        </label>
        <button
          type="submit"
          className="shrink-0 rounded-full bg-sunset-1 px-7 py-3.5 text-base font-semibold text-espresso shadow-sm transition-colors hover:bg-sunset-1/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset-1"
        >
          Join the waitlist
        </button>
      </form>
      <p className="mt-3 text-sm text-onbrand/50">
        {sent
          ? "Almost there — hit send in your mail app to confirm."
          : "We'll email you the moment it's ready. No spam."}
      </p>
    </div>
  );
}
