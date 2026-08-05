import type { Metadata } from "next";
import { openRunde } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mymansa.ai"),
  title: "Mansa: Africa's AI Thinking Partner",
  description:
    "Chat, translate, transcribe, and work across African languages with AI designed to understand the continent. Mansa by African Languages Lab.",
};

// Runs before paint so the correct theme class is present on first render
// (no flash of the wrong theme). Falls back to the OS preference.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openRunde.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
