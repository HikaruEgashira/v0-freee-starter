"use client"

import { useCallback, useState } from "react"
import { OpenInV0Button } from "@/components/registry/open-in-v0"
import { getPrompt } from "@/lib/utils"

const BASE_URL = "https://v0-freee-starter.vercel.app"

export function ComponentCard({
  name,
  type,
  title,
  description,
}: {
  name: string
  type: string
  title: string
  description?: string
}) {
  const registryUrl = `${BASE_URL}/r/${name}.json`
  const installCommand = `npx shadcn add ${registryUrl}`
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(installCommand)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [installCommand])

  return (
    <div className="rounded-lg border border-border bg-white">
      {type === "registry:block" && (
        <div className="border-b border-border">
          <iframe
            src={`/demo/${name}`}
            title={title}
            className="h-[300px] w-full"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-bold text-foreground">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
        <div className="mt-3 flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex-1 truncate rounded-md border border-border bg-muted px-3 py-1.5 text-left font-mono text-xs text-muted-foreground hover:bg-secondary"
          >
            {copied ? "Copied!" : installCommand}
          </button>
          <OpenInV0Button
            registryUrl={registryUrl}
            title={title}
            prompt={getPrompt()}
            size="sm"
          />
        </div>
      </div>
    </div>
  )
}
