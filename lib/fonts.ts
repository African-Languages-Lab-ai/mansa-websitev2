import localFont from "next/font/local";

// Open Runde — the single typeface for the entire site.
// Self-hosted woff2 files under public/fonts, loaded via next/font/local.
export const openRunde = localFont({
  src: [
    { path: "../public/fonts/OpenRunde-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/OpenRunde-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/OpenRunde-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../public/fonts/OpenRunde-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-open-runde",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
