import type { Metadata } from "next";
import { openRunde } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mansa-web-six.vercel.app"),
  title: "Mansa: The AI built for African languages",
  description:
    "Chat, translate, transcribe, and work across African languages with AI designed to understand the continent. Mansa by African Languages Lab.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openRunde.variable}>
      <body>{children}</body>
    </html>
  );
}
