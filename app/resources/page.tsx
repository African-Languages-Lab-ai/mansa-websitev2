"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// Resources has no hub page of its own (matching claude.com). This route only
// exists so /resources does not 404 on the static export; it redirects to Use
// Cases. (Blog is hidden from nav for now — see components/Navbar.tsx.)
export default function ResourcesIndex() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/resources/use-cases");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-cream">
      <p className="text-ink-muted">Redirecting to the blog…</p>
    </main>
  );
}
