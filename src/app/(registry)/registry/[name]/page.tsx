import { notFound } from "next/navigation"
import Link from "next/link"
import { getRegistryItem, getRegistryItems } from "@/lib/registry"
import { ComponentCard } from "@/components/registry/component-card"

export function generateStaticParams() {
  return getRegistryItems().map((item) => ({ name: item.name }))
}

export default async function RegistryItemPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const item = getRegistryItem(name)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            &larr; 一覧に戻る
          </Link>
          <h1 className="mt-2 text-3xl font-bold text-primary">{item.title ?? item.name}</h1>
          {item.description && (
            <p className="mt-2 text-muted-foreground">{item.description}</p>
          )}
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12">
        <ComponentCard
          name={item.name}
          type={item.type}
          title={item.title ?? item.name}
          description={item.description}
        />

        {item.dependencies && item.dependencies.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-lg font-bold">Dependencies</h2>
            <ul className="list-inside list-disc text-sm text-muted-foreground">
              {item.dependencies.map((dep) => (
                <li key={dep}>{dep}</li>
              ))}
            </ul>
          </section>
        )}

        {item.registryDependencies && item.registryDependencies.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 text-lg font-bold">Registry Dependencies</h2>
            <ul className="flex gap-2">
              {item.registryDependencies.map((dep) => (
                <li key={dep}>
                  <Link
                    href={`/registry/${dep}`}
                    className="rounded-md bg-muted px-3 py-1 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                  >
                    {dep}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  )
}
