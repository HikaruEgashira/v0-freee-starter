import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export interface CardItem {
  title: string
  desc: string
}

export interface CardGridProps {
  title?: string
  subtitle?: string
  cards?: CardItem[]
}

export function CardGrid({
  title = "カードグリッド",
  subtitle = "md:grid-cols-2 → lg:grid-cols-3 のレスポンシブカードレイアウト",
  cards = [
    { title: "会計機能", desc: "日々の取引を自動で記帳し、帳簿を効率的に管理できます。" },
    { title: "請求書管理", desc: "請求書の作成から送付、入金管理までをワンストップで対応。" },
    { title: "経費精算", desc: "レシート撮影で経費を自動入力。承認フローも簡単設定。" },
    { title: "給与計算", desc: "勤怠データから給与を自動計算。明細発行もスムーズに。" },
    { title: "レポート", desc: "売上・経費・利益をリアルタイムでダッシュボード表示。" },
    { title: "API連携", desc: "外部サービスとの連携で業務フローを最適化できます。" },
  ],
}: CardGridProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[70rem] px-6 py-16">
        <h2 className="mb-2 text-lg font-bold text-foreground">{title}</h2>
        <p className="mb-8 text-base text-muted-foreground">{subtitle}</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card key={`${card.title}-${index}`}>
              <CardHeader>
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                  <div className="h-5 w-5 rounded bg-primary-300" />
                </div>
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{card.desc}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
