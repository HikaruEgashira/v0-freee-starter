export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h1 className="text-3xl font-bold text-primary">freee Starter</h1>
          <p className="mt-2 text-muted-foreground">
            freee ブランドデザイントークンを提供する shadcn/ui registry テンプレート
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section>
          <h2 className="mb-4 text-2xl font-bold">Theme</h2>
          <p className="mb-4 text-muted-foreground">
            freee ブランドカラーを CSS 変数として適用します。
          </p>
          <code className="block rounded-lg border border-border bg-muted px-4 py-3 text-sm">
            npx shadcn add https://v0-freee-starter.vercel.app/r/theme.json
          </code>
        </section>
      </main>
    </div>
  )
}
