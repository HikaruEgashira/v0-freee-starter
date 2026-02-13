import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./_layout/footer";

export const metadata: Metadata = {
  title: "freee | 統合型経営プラットフォーム",
  description:
    "すべてのスモールビジネスを支える統合型経営プラットフォーム。会計、人事労務、会社設立まで。",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
