import { Helmet } from "@dr.pogodin/react-helmet";
import { CtaSection } from "@/components/cta-section";

const principles = [
  {
    name: "アクセシブル",
    category: "Accessible",
    description:
      "すべての人が使えるデザイン。年齢、性別、障がいの有無に関わらず、誰もが快適に使える。",
    color: "bg-primary-400",
    icon: "♿",
  },
  {
    name: "シンプル",
    category: "Simple",
    description:
      "複雑な業務をシンプルに。必要な機能だけを、わかりやすく提供する。",
    color: "bg-green-500",
    icon: "✨",
  },
  {
    name: "直感的",
    category: "Intuitive",
    description:
      "考えなくても使える。ユーザーの期待に沿った動作で、迷わず操作できる。",
    color: "bg-orange-500",
    icon: "💡",
  },
];

const stats = [
  { value: "4つ", label: "デザイン原則", note: "※アクセシブル、シンプル、直感的、一貫性" },
  {
    value: "3つ",
    label: "コアバリュー",
    note: "※ユーザーファースト、スピード、透明性",
  },
  { value: "∞", label: "可能性", note: "※すべての人に開かれたデザイン" },
];

const applications = [
  {
    title: "誰もが使える",
    description: "専門知識がなくても、直感的に操作できる",
    href: "#",
  },
  {
    title: "ミスを防ぐ",
    description: "適切なガイドで、正確に処理できる",
    href: "#",
  },
  {
    title: "集中できる",
    description: "煩雑な作業から解放され、本来の仕事に専念",
    href: "#",
  },
  {
    title: "学習不要",
    description: "一貫したUIで、学習コストを最小限に",
    href: "#",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>freee Design Philosophy</title>
        <meta
          name="description"
          content="すべての人が使えるデザイン。freeeは、複雑な業務をシンプルにし、誰もが使いやすいプロダクトを創ります。"
        />
      </Helmet>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 md:py-28">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="max-w-2xl">
            <p className="mb-4 text-base font-bold text-primary">
              Design Philosophy
            </p>
            <h1 className="mb-6 text-[2.5rem] font-bold leading-tight text-foreground md:text-[3rem]">
              スモールビジネスを
              <br />
              世界の主役に。
              <br />
              <span className="text-primary">デザインで実現する。</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-sub-text">
              freeeは、複雑な業務をシンプルにし、誰もが使いやすいプロダクトを創ります。専門知識がなくても、直感的に操作できる。それが、freeeのデザイン哲学です。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="h-12 rounded-sm bg-primary px-8 text-lg font-bold text-white transition-colors hover:bg-primary-800">
                今すぐ始める
              </button>
              <button className="h-12 rounded-sm border border-primary bg-background px-8 text-lg font-bold text-primary transition-colors hover:bg-primary-50">
                デモを見る
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

      <section className="bg-column py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-xl font-bold text-foreground">
              デザインがもたらす体験
            </h2>
            <p className="text-base text-sub-text">
              freeeのデザイン哲学が実現する、4つの価値
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((app) => (
              <a
                key={app.title}
                href={app.href}
                className="group rounded-md border border-base1 bg-background p-6 shadow-card transition-shadow hover:shadow-floating"
              >
                <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary">
                  {app.title}
                </h3>
                <p className="text-sm text-sub-text">{app.description}</p>
                <span className="mt-4 inline-block text-sm font-bold text-link">
                  詳しく見る →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 text-base font-bold text-primary">
              Design Principles
            </p>
            <h2 className="mb-2 text-xl font-bold text-foreground">
              3つのデザイン原則
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <a
                key={principle.name}
                href="#"
                className="group overflow-hidden rounded-lg border border-base1 bg-background shadow-card transition-shadow hover:shadow-floating"
              >
                <div className={`${principle.color} p-8 text-center`}>
                  <span className="text-[3rem]">{principle.icon}</span>
                </div>
                <div className="p-6">
                  <p className="mb-1 text-sm font-bold text-primary">
                    {principle.category}
                  </p>
                  <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary">
                    {principle.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-sub-text">
                    {principle.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-bold text-link">
                    もっと知る →
                  </span>
                </div>
              </a>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://brand.freee.co.jp/designphilosophy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-bold text-link hover:underline"
            >
              すべてのデザイン原則をみる →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary-50 to-green-100 py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-2 text-base font-bold text-primary">
                ユーザーファースト
              </p>
              <h2 className="mb-4 text-xl font-bold leading-snug text-foreground">
                本来やるべき仕事に
                <br />
                集中できる未来を。
              </h2>
              <p className="mb-6 text-base leading-relaxed text-sub-text">
                freeeは、煩雑な業務から解放し、もっと自由にビジネスができる環境を提供します。すべての判断の中心にユーザーを置き、本質的な価値を届けます。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="h-10 rounded-sm bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary-800">
                  デザインの実例を見る
                </button>
                <button className="h-10 rounded-sm border border-primary bg-background px-6 text-base font-bold text-primary transition-colors hover:bg-primary-50">
                  ブランドサイトへ
                </button>
              </div>
            </div>
            <div className="rounded-lg border border-base1 bg-background p-8 shadow-card">
              <blockquote className="border-l-4 border-primary-brand pl-4">
                <p className="mb-4 text-base italic leading-relaxed text-foreground">
                  「直感的に使えるから、マニュアルいらず。本来の仕事に集中できる時間が増えました。」
                </p>
                <footer className="text-sm text-sub-text">
                  デザインチーム
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

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
              <a
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
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
