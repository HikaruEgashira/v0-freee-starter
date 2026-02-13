import Link from "next/link";
import { CtaSection } from "@/components/cta-section";

const products = [
  {
    name: "freee会計",
    href: "/accounting",
    category: "経理・財務",
    description:
      "請求・支払業務から会計帳簿・決算書の作成、経営管理まで。経理をスムーズに行える会計ソフト。",
    color: "bg-primary-400",
    icon: "📊",
  },
  {
    name: "freee人事労務",
    href: "/hr",
    category: "人事労務",
    description:
      "給与計算や労務管理を大幅に効率化。給与明細や年末調整、入社手続きから勤怠管理まで。",
    color: "bg-green-500",
    icon: "👥",
  },
  {
    name: "freee会社設立",
    href: "/launch",
    category: "起業・会社設立",
    description:
      "会社設立に必要な書類を無料で一括作成。設立コストを大幅に削減。",
    color: "bg-orange-500",
    icon: "🏢",
  },
];

const stats = [
  { value: "62万", label: "有料課金ユーザー企業数", note: "※2025年3月末時点" },
  {
    value: "No.1",
    label: "クラウド会計ソフト市場シェア",
    note: "※リードプラス調べ",
  },
  { value: "1,043社", label: "金融機関との連携社数", note: "※2023年6月末時点" },
];

const solutions = [
  {
    title: "経理・財務",
    description: "自分で決算、経営状況を見える化したい",
    href: "/accounting",
  },
  {
    title: "人事労務",
    description: "紙から解放されて、労務管理を正しく行いたい",
    href: "/hr",
  },
  {
    title: "起業・会社設立",
    description: "コストを抑えつつ、自分でミスなく会社設立したい",
    href: "/launch",
  },
  {
    title: "確定申告",
    description: "はじめてでもカンタンに確定申告を完了させたい",
    href: "/accounting",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 md:py-28">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-base font-bold text-primary">
              統合型経営プラットフォーム
            </p>
            <h1 className="mb-6 text-[2.5rem] font-bold leading-tight text-foreground md:text-[3rem]">
              すべての
              <br />
              スモールビジネスを
              <br />
              <span className="text-primary">支える。</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-sub-text">
              freeeは、従来バラバラに存在していた業務やデータを、フロントオフィスからバックオフィスまで一気通貫させ、スモールビジネスが専門家や取引先とつながるプラットフォームです。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="h-12 rounded-sm bg-primary px-8 text-lg font-bold text-white transition-colors hover:bg-primary-800">
                無料で始める
              </button>
              <button className="h-12 rounded-sm border border-primary bg-background px-8 text-lg font-bold text-primary transition-colors hover:bg-primary-50">
                製品一覧はこちら
              </button>
            </div>
            <p className="mt-4 text-sm text-sub-text">
              クレジットカード不要 / 30日間無料
            </p>
          </div>
        </div>
        <div className="absolute -right-20 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary-100/50 md:block" />
        <div className="absolute -right-10 top-1/3 hidden h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-primary-200/30 md:block" />
      </section>

      {/* Stats */}
      <section className="border-b border-base2 bg-background py-12">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[2rem] font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-base font-bold text-foreground">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm text-sub-text">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Segments */}
      <section className="bg-column py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-xl font-bold text-foreground">
              お客さまの課題に合わせたソリューション
            </h2>
            <p className="text-base text-sub-text">
              freeeではさまざまなバックオフィス領域の課題解決への手段を紹介しています
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="group rounded-md bg-background p-6 shadow-card transition-shadow hover:shadow-floating"
              >
                <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary">
                  {solution.title}
                </h3>
                <p className="text-sm text-sub-text">{solution.description}</p>
                <span className="mt-4 inline-block text-sm font-bold text-link">
                  詳しく見る →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 text-base font-bold text-primary">
              製品・サービス
            </p>
            <h2 className="mb-2 text-xl font-bold text-foreground">
              freeeなら最適なサービスに出会える
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group overflow-hidden rounded-lg bg-background shadow-card transition-shadow hover:shadow-floating"
              >
                <div className={`${product.color} p-8 text-center`}>
                  <span className="text-[3rem]">{product.icon}</span>
                </div>
                <div className="p-6">
                  <p className="mb-1 text-sm font-bold text-primary">
                    {product.category}
                  </p>
                  <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-sub-text">
                    {product.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-bold text-link">
                    もっと知る →
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="#"
              className="text-base font-bold text-link hover:underline"
            >
              すべての製品・サービスをみる →
            </Link>
          </div>
        </div>
      </section>

      {/* For Individual */}
      <section className="bg-gradient-to-r from-primary-50 to-green-100 py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-2 text-base font-bold text-primary">
                個人事業主・副業のお客さまへ
              </p>
              <h2 className="mb-4 text-xl font-bold leading-snug text-foreground">
                好きなことをする時間を
                <br />
                大切にして欲しいから。
              </h2>
              <p className="mb-6 text-base leading-relaxed text-sub-text">
                freeeは、フリーランスの皆さまを煩わしさから解放し、もっと自由にビジネスができる環境を提供しています。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="h-10 rounded-sm bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary-800">
                  freee会計で確定申告をはじめる
                </button>
                <button className="h-10 rounded-sm border border-primary bg-background px-6 text-base font-bold text-primary transition-colors hover:bg-primary-50">
                  個人向け製品をみる
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-background p-8 shadow-card">
              <blockquote className="border-l-4 border-primary-brand pl-4">
                <p className="mb-4 text-base italic leading-relaxed text-foreground">
                  「締め作業はほぼゼロに、freee会計導入後は家族と過ごす幸せな時間が増えました。」
                </p>
                <footer className="text-sm text-sub-text">
                  宿泊・旅行サービス業 | ひといき荘アウトドアサービス 藤井様
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <h2 className="mb-8 text-xl font-bold text-foreground">お知らせ</h2>
          <div className="space-y-4">
            {[
              {
                date: "2026/01/29",
                title: "【2025.12月度】新機能情報",
              },
              {
                date: "2025/11/04",
                title:
                  "【freee会計モバイル・freee経費精算モバイル】強制アップデートのお知らせ",
              },
              {
                date: "2025/01/22",
                title:
                  "2026年確定申告時期におけるサポートデスクの営業日時について",
              },
            ].map((news) => (
              <Link
                key={news.title}
                href="#"
                className="group flex items-start gap-4 border-b border-base1 pb-4 last:border-b-0"
              >
                <span className="shrink-0 text-sm text-sub-text">
                  {news.date}
                </span>
                <span className="text-base text-foreground group-hover:text-link">
                  {news.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
