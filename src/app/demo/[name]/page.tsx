import { notFound } from "next/navigation"
import { getRegistryItem, getRegistryItems } from "@/lib/registry"
import { DemoRenderer } from "./demo-renderer"

export function generateStaticParams() {
  return getRegistryItems().map((item) => ({ name: item.name }))
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ name: string }>
}) {
  const { name } = await params
  const item = getRegistryItem(name)

  if (!item) {
    notFound()
  }

  return <DemoRenderer name={name} />
}
