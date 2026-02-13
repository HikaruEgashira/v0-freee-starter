export interface Stat {
  value: string
  label: string
}

export interface StatsBarProps {
  stats?: Stat[]
}

export function StatsBar({
  stats = [
    { value: "120+", label: "コンポーネント数" },
    { value: "14px", label: "ベースフォントサイズ" },
    { value: "4px", label: "スペーシング単位" },
  ],
}: StatsBarProps) {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid max-w-[70rem] grid-cols-1 divide-y divide-border px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="py-8 text-center">
            <p className="text-xl font-bold text-primary">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
