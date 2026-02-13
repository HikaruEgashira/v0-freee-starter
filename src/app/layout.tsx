import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "freee Starter Registry",
  description: "freee design system registry",
  robots: "noindex, nofollow",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  )
}
