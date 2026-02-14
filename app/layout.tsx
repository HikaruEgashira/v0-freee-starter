import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "./_layout/footer";
import { DemoBanner } from "./_layout/demo-banner";

export const metadata: Metadata = {
  title: "ACME | ビジネス統合プラットフォーム - Demo",
  description:
    "中小企業の業務を一元管理するクラウドプラットフォーム。会計、労務、起業支援まで。(v0 デモテンプレート)",
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
        <DemoBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
