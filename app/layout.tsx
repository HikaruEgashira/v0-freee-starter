import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "v0 freee Starter",
  description: "v0 starter template with freee vibes design tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">{children}</body>
    </html>
  );
}
