"use client";

import { useEffect, useState } from "react";

const TEXT = "Ask freely. Think clearly.";
const TYPE_MS = 65;
const DELETE_MS = 35;
const HOLD_FULL_MS = 1400;
const HOLD_EMPTY_MS = 500;

export function TypewriterTagline() {
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!deleting && count === TEXT.length) {
      const t = setTimeout(() => setDeleting(true), HOLD_FULL_MS);
      return () => clearTimeout(t);
    }
    if (deleting && count === 0) {
      const t = setTimeout(() => setDeleting(false), HOLD_EMPTY_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setCount((c) => c + (deleting ? -1 : 1)),
      deleting ? DELETE_MS : TYPE_MS
    );
    return () => clearTimeout(t);
  }, [count, deleting]);

  return (
    <p className="mb-3 h-4 text-sm font-medium tracking-wide text-maroon">
      <span aria-hidden>
        {TEXT.slice(0, count)}
        <span className="animate-pulse">|</span>
      </span>
      <span className="sr-only">{TEXT}</span>
    </p>
  );
}
