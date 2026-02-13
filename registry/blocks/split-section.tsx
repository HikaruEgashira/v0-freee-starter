export interface SplitSectionProps {
  title?: string
  description?: string
  features?: string[]
  visualSide?: 'left' | 'right'
}

export function SplitSection({
  title = "スプリットセクション",
  description = "テキストとメディアを左右に配置するパターンです。説明文を左に、図やスクリーンショットを右に配置して情報を整理します。",
  features = [
    "レスポンシブで縦積みに切り替わる",
    "items-center で上下中央揃え",
    "gap-12 で十分な余白を確保",
  ],
  visualSide = 'right',
}: SplitSectionProps) {
  const textContent = (
    <div>
      <h2 className="mb-4 text-lg font-bold text-foreground">{title}</h2>
      <p className="mb-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      <ul className="space-y-2 text-base text-muted-foreground">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )

  const visualContent = (
    <div className="rounded-xl bg-muted p-8">
      <div className="aspect-video rounded-lg bg-border" />
    </div>
  )

  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-[70rem] items-center gap-12 px-6 py-16 md:grid-cols-2">
        {visualSide === 'left' ? (
          <>
            {visualContent}
            {textContent}
          </>
        ) : (
          <>
            {textContent}
            {visualContent}
          </>
        )}
      </div>
    </section>
  )
}
