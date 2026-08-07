import { Sora } from "next/font/google";

// Sora — the single typeface for the entire site, loaded via next/font/google
// (self-hosted and optimized at build time). Every element uses Tailwind's
// font-sans, which resolves to the --font-sora variable set on <html>.
export const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
