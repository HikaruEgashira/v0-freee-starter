import registry from "../../registry.json"

export interface Component {
  name: string
  type: string
  title: string
  description?: string
  files?: { path: string; type: string; target: string }[]
  dependencies?: string[]
  registryDependencies?: string[]
  cssVars?: Record<string, Record<string, string>>
}

export function getRegistryItems(): Component[] {
  return registry.items.filter(
    (item) => item.type !== "registry:theme",
  ) as Component[]
}

export function getRegistryItem(name: string): Component | undefined {
  return getRegistryItems().find((item) => item.name === name)
}

export function getBlocks() {
  return getRegistryItems()
    .filter((item) => item.type === "registry:block")
    .sort((a, b) => a.title.localeCompare(b.title))
}

export function getUIPrimitives() {
  return getRegistryItems()
    .filter((item) => item.type === "registry:ui")
    .sort((a, b) => a.title.localeCompare(b.title))
}
