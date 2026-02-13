import { Helmet } from "@dr.pogodin/react-helmet";
import { CtaSection } from "@/components/cta-section";

const principles = [
  {
    number: "01",
    name: "アクセシブル",
    category: "Accessible",
    description:
      "すべての人が使えるデザイン。年齢、性別、障がいの有無に関わらず、誰もが快適に使える。",
    benefit: "すべての人に開かれた体験",
    color: "bg-primary-400",
  },
  {
    number: "02",
    name: "シンプル",
    category: "Simple",
    description:
      "複雑な業務をシンプルに。必要な機能だけを、わかりやすく提供する。",
    benefit: "迷わない操作性",
    color: "bg-green-500",
  },
  {
    number: "03",
    name: "直感的",
    category: "Intuitive",
    description:
      "考えなくても使える。ユーザーの期待に沿った動作で、迷わず操作できる。",
    benefit: "学習コストゼロ",
    color: "bg-orange-500",
  },
];

const stats = [
  {
    value: "4つ",
    label: "デザイン原則",
    note: "※アクセシブル、シンプル、直感的、一貫性",
  },
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

const testimonials = [
  {
    name: "スモールビジネス経営者",
    quote:
      "直感的に使えるから、マニュアルいらず。本来の仕事に集中できる時間が増えました。",
  },
  {
    name: "個人事業主（デザイナー）",
    quote:
      "複雑な経理業務もfreeeなら迷わず操作できます。デザインの力を実感しています。",
  },
  {
    name: "フリーランスエンジニア",
    quote:
      "学習コストがほぼゼロ。初めて触った日から普通に使えました。すごい体験です。",
  },
];

const faqs = [
  {
    q: "freeeのデザイン哲学とは何ですか？",
    a: "freeeは「スモールビジネスを世界の主役に。」というミッションのもと、アクセシブル・シンプル・直感的・一貫性の4つの原則でプロダクトを設計しています。",
  },
  {
    q: "専門知識がなくても使えますか？",
    a: "はい。freeeは専門知識がなくても直感的に操作できるよう設計されています。ガイドやサポート機能も充実しています。",
  },
  {
    q: "デザインの詳細はどこで確認できますか？",
    a: "freeeのブランドサイト（brand.freee.co.jp）で、デザイン哲学やビジュアルガイドラインの詳細をご覧いただけます。",
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32 before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary-50/50 before:via-white before:to-transparent">
        <div className="relative z-10 mx-auto max-w-[70rem] px-6">
          <div className="max-w-3xl">
            <p className="mb-4 text-base font-bold text-primary">
              Design Philosophy
            </p>
            <h1 className="mb-6 text-[2.5rem] font-bold leading-tight text-foreground md:text-[3.5rem] text-balance">
              スモールビジネスを
              <br />
              世界の主役に。
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-sub-text">
              freeeは、複雑な業務をシンプルにし、誰もが使いやすいプロダクトを創ります。専門知識がなくても、直感的に操作できる。それが、freeeのデザイン哲学です。
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="h-12 rounded-lg bg-primary px-8 text-lg font-bold text-white transition-colors hover:bg-primary-800">
                今すぐ始める
              </button>
              <button className="h-12 rounded-lg border border-primary bg-background px-8 text-lg font-bold text-primary transition-colors hover:bg-primary-50">
                デモを見る
              </button>
            </div>
            <p className="mt-6 text-sm text-sub-text">
              クレジットカード不要・30日間無料
            </p>
          </div>
        </div>
        <div className="absolute -right-20 top-1/2 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary-100/40 md:block" />
        <div className="absolute -left-10 -top-20 hidden h-[300px] w-[300px] rounded-full bg-primary-200/20 md:block" />
      </section>

      {/* Key Stats */}
      <section className="border-b border-base2 bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-[2.5rem] font-bold text-primary">
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

      {/* Applications */}
      <section className="bg-column py-20">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-[1.875rem] font-bold text-foreground text-balance">
              デザインがもたらす体験
            </h2>
            <p className="text-lg text-sub-text">
              freeeのデザイン哲学が実現する、4つの価値
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {applications.map((app) => (
              <a
                key={app.title}
                href={app.href}
                className="group relative overflow-hidden rounded-2xl border border-base2 bg-white p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-floating"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <h3 className="mb-3 text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-sub-text">
                    {app.description}
                  </p>
                  <span className="mt-4 inline-block text-sm font-bold text-link">
                    詳しく見る →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-16 text-center">
            <p className="mb-2 text-base font-bold text-primary">
              Design Principles
            </p>
            <h2 className="mb-4 text-[1.875rem] font-bold text-foreground text-balance">
              3つのデザイン原則
            </h2>
            <p className="text-lg text-sub-text">
              すべてのプロダクトに一貫して適用される原則
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((principle) => (
              <div
                key={principle.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-base2 bg-white p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-floating"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10 mb-6 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-2xl font-bold text-primary">
                    {principle.number}
                  </div>
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {principle.benefit}
                  </span>
                </div>
                <p className="relative z-10 mb-1 text-sm font-bold text-primary">
                  {principle.category}
                </p>
                <h3 className="relative z-10 mb-4 text-2xl font-bold text-foreground">
                  {principle.name}
                </h3>
                <p className="relative z-10 leading-relaxed text-sub-text">
                  {principle.description}
                </p>
              </div>
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

      {/* User First */}
      <section className="relative overflow-hidden bg-white py-20 before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary-50/60 before:via-primary-100/30 before:to-transparent">
        <div className="relative mx-auto max-w-[70rem] px-6">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <p className="mb-2 text-base font-bold text-primary">
                ユーザーファースト
              </p>
              <h2 className="mb-4 text-[1.875rem] font-bold leading-snug text-foreground">
                本来やるべき仕事に
                <br />
                集中できる未来を。
              </h2>
              <p className="mb-6 text-base leading-relaxed text-sub-text">
                freeeは、煩雑な業務から解放し、もっと自由にビジネスができる環境を提供します。すべての判断の中心にユーザーを置き、本質的な価値を届けます。
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="h-12 rounded-lg bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary-800">
                  デザインの実例を見る
                </button>
                <button className="h-12 rounded-lg border border-primary bg-background px-6 text-base font-bold text-primary transition-colors hover:bg-primary-50">
                  ブランドサイトへ
                </button>
              </div>
            </div>
            <div className="rounded-2xl border border-base2 bg-white p-8 shadow-card">
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

      {/* Testimonials */}
      <section className="bg-column py-20">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-[1.875rem] font-bold text-foreground text-balance">
              利用者からの声
            </h2>
            <p className="text-lg text-sub-text">
              多くのユーザーがデザインの力を実感しています。
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-8 shadow-card transition-shadow duration-300 hover:shadow-floating"
              >
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-lg text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-6 italic leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm font-bold text-sub-text">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-background py-20">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-[1.875rem] font-bold text-foreground text-balance">
              よくあるご質問
            </h2>
            <p className="text-lg text-sub-text">
              不安なことがあれば、ここで解決できます。
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-base2 bg-white p-6 transition-all hover:shadow-card"
              >
                <summary className="flex cursor-pointer items-center justify-between text-lg font-bold text-foreground">
                  {faq.q}
                  <span className="ml-4 transition-transform group-open:rotate-180">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-sub-text">{faq.a}</p>
              </details>
            ))}
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
