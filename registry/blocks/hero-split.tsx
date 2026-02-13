import { Button } from '@/components/ui/button'

export interface HeroSplitProps {
  title?: string
  description?: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export function HeroSplit({
  title = "レイアウトパターン集",
  description = "このページは開発者がコピペして使えるレイアウトパターンのショーケースです。各セクションが独立したパターンとして機能します。",
  primaryAction = { label: "はじめる", href: "#" },
  secondaryAction = { label: "ドキュメント", href: "#" },
}: HeroSplitProps) {
  return (
    <section className="bg-primary-50">
      <div className="mx-auto grid max-w-[70rem] items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h1 className="mb-4 text-xl font-bold text-foreground">{title}</h1>
          <p className="mb-6 text-base text-muted-foreground leading-relaxed">{description}</p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <a href={primaryAction.href}>{primaryAction.label}</a>
            </Button>
            <Button asChild variant="outline">
              <a href={secondaryAction.href}>{secondaryAction.label}</a>
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center rounded-xl bg-white p-8 shadow-card">
          <div className="grid h-40 w-full grid-cols-3 gap-3">
            <div className="rounded-lg bg-primary-100" />
            <div className="rounded-lg bg-primary-200" />
            <div className="rounded-lg bg-primary-300" />
          </div>
        </div>
      </div>
    </section>
  )
}
