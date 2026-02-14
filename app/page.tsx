import Link from "next/link";

const products = [
  {
    name: "ACME会計",
    href: "/accounting",
    category: "経理・財務",
    description:
      "請求・支払業務から会計帳簿・決算書の作成、経営管理まで。経理をスムーズに行える会計ソフト。",
    color: "bg-primary-400",
    icon: "📊",
  },
  {
    name: "ACME労務",
    href: "/hr",
    category: "人事労務",
    description:
      "給与計算や労務管理を大幅に効率化。給与明細や年末調整、入社手続きから勤怠管理まで。",
    color: "bg-green-500",
    icon: "👥",
  },
  {
    name: "ACME起業",
    href: "/launch",
    category: "起業・会社設立",
    description:
      "会社設立に必要な書類を無料で一括作成。設立コストを大幅に削減。",
    color: "bg-orange-500",
    icon: "🏢",
  },
];

const stats = [
  { value: "15,000+", label: "導入企業数", note: "※2026年2月時点" },
  {
    value: "98%",
    label: "顧客満足度",
    note: "※自社調査",
  },
  { value: "500+", label: "外部サービス連携数", note: "※2026年2月時点" },
];

const solutions = [
  {
    title: "経理・財務",
    description: "請求書作成から決算書まで一元管理したい",
    href: "/accounting",
  },
  {
    title: "人事労務",
    description: "給与計算と勤怠管理を自動化したい",
    href: "/hr",
  },
  {
    title: "起業・会社設立",
    description: "会社設立の手続きを簡単にしたい",
    href: "/launch",
  },
  {
    title: "データ分析",
    description: "経営データを可視化して意思決定したい",
    href: "/analytics",
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
              ビジネス統合プラットフォーム
            </p>
            <h1 className="mb-6 text-[2.5rem] font-bold leading-tight text-foreground md:text-[3rem]">
              ビジネスの流れを
              <br />
              一つにまとめる。
              <br />
              <span className="text-primary">ACMEで。</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-sub-text">
              ACMEは、バラバラだった業務システムを統合し、中小企業の生産性を最大化するクラウドプラットフォームです。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="h-12 rounded-sm bg-primary px-8 text-lg font-bold text-white transition-colors hover:bg-primary-800">
                無料トライアル
              </button>
              <button className="h-12 rounded-sm border border-primary bg-background px-8 text-lg font-bold text-primary transition-colors hover:bg-primary-50">
                機能を見る
              </button>
            </div>
            <p className="mt-4 text-sm text-sub-text">
              クレジットカード不要 / 14日間無料
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
              ACMEがさまざまなビジネス課題の解決を支援します
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
              ACMEで業務を一元管理
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
              すべての機能を見る →
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
                個人事業主・フリーランスの方へ
              </p>
              <h2 className="mb-4 text-xl font-bold leading-snug text-foreground">
                本業に集中できる
                <br />
                環境を。
              </h2>
              <p className="mb-6 text-base leading-relaxed text-sub-text">
                ACMEは、フリーランスの方々が事務作業から解放され、本来の仕事に集中できる環境を提供します。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="h-10 rounded-sm bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary-800">
                  ACME会計で確定申告
                </button>
                <button className="h-10 rounded-sm border border-primary bg-background px-6 text-base font-bold text-primary transition-colors hover:bg-primary-50">
                  個人プランを見る
                </button>
              </div>
            </div>
            <div className="rounded-lg bg-background p-8 shadow-card">
              <blockquote className="border-l-4 border-primary-brand pl-4">
                <p className="mb-4 text-base italic leading-relaxed text-foreground">
                  「事務作業が半分に減り、クライアントワークに集中できるようになりました。」
                </p>
                <footer className="text-sm text-sub-text">
                  Webデザイナー | 田中様
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
                date: "2026/02/10",
                title: "【新機能】AIによる経費自動分類機能をリリース",
              },
              {
                date: "2026/01/25",
                title:
                  "【モバイルアプリ】iOS/Android版アップデート v2.5.0",
              },
              {
                date: "2026/01/15",
                title:
                  "確定申告シーズンのサポート時間延長のお知らせ",
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

      {/* CTA */}
      <section className="bg-primary-600 py-16 text-center text-white">
        <div className="mx-auto max-w-[70rem] px-6">
          <h2 className="mb-2 text-xl font-bold">まずは14日間無料でお試し</h2>
          <p className="mb-8 text-base opacity-90">メールアドレスだけで今すぐ開始。自動課金なし。</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="h-12 rounded-sm bg-white px-8 text-lg font-bold text-primary transition-colors hover:bg-primary-50">
              無料トライアル開始
            </button>
            <button className="h-12 rounded-sm border-2 border-white px-8 text-lg font-bold text-white transition-colors hover:bg-white/10">
              資料をダウンロード
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
