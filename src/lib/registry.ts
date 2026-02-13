import registry from "@/../../registry.json"

export function getRegistryItems() {
  return registry.items.filter((item) => item.type !== "registry:theme")
}

export function getRegistryItem(name: string) {
  return registry.items.find((item) => item.name === name)
}

export function getBlocks() {
  return registry.items.filter((item) => item.type === "registry:block")
}

export function getUIPrimitives() {
  return registry.items.filter((item) => item.type === "registry:ui")
}

export function getComponents() {
  return registry.items.filter((item) => item.type === "registry:component")
}
