import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "freee Starter Registry",
  description: "Production-ready shadcn registry with freee brand design tokens and layout patterns",
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
