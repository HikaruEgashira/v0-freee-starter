import { Button } from '@/components/ui/button'

export interface CtaBannerProps {
  title?: string
  description?: string
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
}

export function CtaBanner({
  title = "CTAバナーパターン",
  description = "全幅のカラー背景にテキストとボタンを中央配置。ユーザーにアクションを促すセクションに使用します。",
  primaryAction = { label: "無料で試す", href: "#" },
  secondaryAction = { label: "詳しく見る", href: "#" },
}: CtaBannerProps) {
  return (
    <section className="bg-primary">
      <div className="mx-auto max-w-[70rem] px-6 py-16 text-center">
        <h2 className="mb-4 text-lg font-bold text-white">{title}</h2>
        <p className="mx-auto mb-8 max-w-xl text-base text-primary-100">{description}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild className="bg-white text-primary hover:bg-primary-50">
            <a href={primaryAction.href}>{primaryAction.label}</a>
          </Button>
          <Button asChild variant="outline" className="border border-white text-white hover:bg-primary-800">
            <a href={secondaryAction.href}>{secondaryAction.label}</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
