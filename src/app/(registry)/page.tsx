import Link from "next/link"
import { getBlocks } from "@/lib/registry"

export default function Home() {
  const blocks = getBlocks()

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <h1 className="text-3xl font-bold text-primary">freee Starter</h1>
          <p className="mt-2 text-muted-foreground">Component registry</p>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <section>
          <h2 className="mb-6 text-2xl font-bold">Blocks</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {blocks.map((block) => (
              <Link
                key={block.name}
                href={`/registry/${block.name}`}
                className="rounded-lg border border-border bg-white p-4 hover:border-primary hover:shadow-floating"
              >
                <h3 className="font-bold text-foreground">{block.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{block.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
