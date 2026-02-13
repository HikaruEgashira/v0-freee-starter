import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/_layout/header";
import { Footer } from "@/_layout/footer";

export const metadata: Metadata = {
  title: "freee | 統合型経営プラットフォーム",
  description:
    "すべてのスモールビジネスを支える統合型経営プラットフォーム。会計、人事労務、会社設立まで。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
