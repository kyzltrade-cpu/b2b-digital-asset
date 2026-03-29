import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N8N ZENDESK WORKFLOW",
  description: "Stop doing support manually.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-mono bg-[#f4f4f0] text-black">{children}</body>
    </html>
  );
}
