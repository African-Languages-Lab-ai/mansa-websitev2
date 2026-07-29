"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the user has scrolled past `threshold` px.
 * Scroll listener is throttled with requestAnimationFrame.
 */
export function useScrollNav(threshold = 40) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      setScrolled(window.scrollY > threshold);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Set initial state (e.g. on reload mid-page)
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
