import { Helmet } from "@dr.pogodin/react-helmet";
import { CtaSection } from "@/components/cta-section";

const features = [
  {
    title: "入力は一度だけ",
    subtitle: "だから速い、だから早い",
    description:
      "同じ情報を別々のシステムに、形を変えて入力する「転記作業」とはおさらば。freeeでは1回の入力で、請求書発行も期日管理も仕訳の作成も同時に完了。",
  },
  {
    title: "経理を軽やかに",
    subtitle: "迷わない・悩まない・安心",
    description:
      "直感的で使いやすいUIが、経理作業をスムーズにサポート。困ったときには、すぐに対応するサポートデスクが心強い味方に。",
  },
  {
    title: "自動化で業務をフリーに",
    subtitle: '一瞬で作業が"無くなる"体験を',
    description:
      "銀行や決済・レジサービス等、1,000を超えるサービスと連携。受け取った領収書や請求書はスマホアプリで画像データを取込みOCRで自動解析。",
  },
  {
    title: "最新の法改正に常に対応",
    subtitle: "即時アップデートで作業レス",
    description:
      "毎年の法改正に悩まされることはありません。freee会計なら、インストール不要で最新の機能に即時アップデート。追加料金もかかりません。",
  },
  {
    title: "手に取るように会社経営",
    subtitle: "「いま見たい」情報を想いのままに",
    description:
      "取引先毎・商品毎の売上推移、今月の売上代金の入金予定一覧…freee会計は、見たい情報を、いつでもどこでも、最新の状態でサッとお届け。",
  },
];

const plans = [
  {
    name: "はじめて法人",
    target: "初めて会計業務を行う",
    badge: "1年目",
  },
  {
    name: "小〜中小企業",
    target: "経理業務をラクにしたい",
    badge: "1-300名",
  },
  {
    name: "エンタープライズ",
    target: "内部統制・IPOに完全対応",
    badge: "300名+",
  },
];

const faqs = [
  {
    q: "freee会計とはなんですか？",
    a: "経理業務に関するあらゆる便利機能を備えたクラウド型の会計ソフトです。一度の入力・修正で複数の業務が完了するため、重複作業や転記作業はほぼ発生しません。",
  },
  {
    q: "freee会計は法人向けですか？個人向けですか？",
    a: "freee会計は、大きく個人事業主向けプランと法人向けプランに分かれています。法人向けfreee会計は、1人から1000人規模まであらゆる企業の会計を効率よく行える機能を備えています。",
  },
  {
    q: "freee会計の無料お試しでは何ができますか？",
    a: "一部機能制限はありますが、有料プランの機能を30日間無料でお試しいただけます。無料体験後に自動で費用が発生することはありません。",
  },
  {
    q: "他の会計ソフトからデータをインポートできますか？",
    a: "可能です。現在ご利用中の会計ソフトからエクスポートいただき、freee用の雛形に整えたうえでインポートいただければデータを引き継ぐことができます。",
  },
];

export default function AccountingPage() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>freee会計 - 会計業務を、誰でも、流れるように。</title>
        <meta
          name="description"
          content="freee会計は、請求・支払業務から会計帳簿・決算書の作成、経営管理まで、経理をスムーズに行える会計ソフトです。"
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-2 text-base font-bold text-primary">
                クラウド会計ソフト
              </p>
              <h1 className="mb-4 text-[2rem] font-bold leading-tight text-foreground md:text-[2.5rem]">
                会計業務を、
                <br />
                <span className="text-primary">誰でも、流れるように。</span>
              </h1>
              <p className="mb-6 text-base leading-relaxed text-sub-text">
                freee会計は、請求・支払業務から会計帳簿・決算書の作成、経営管理まで、経理をスムーズに行える会計ソフトです。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="h-11 rounded-sm bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary-800">
                  無料で始める
                </button>
                <button className="h-11 rounded-sm border border-primary bg-background px-6 text-base font-bold text-primary transition-colors hover:bg-primary-50">
                  料金表ダウンロード
                </button>
              </div>
              <p className="mt-3 text-sm text-sub-text">
                クレジットカード不要 / 30日間無料
              </p>
            </div>
            <div className="flex gap-6">
              <div className="flex flex-col items-center rounded-lg bg-background p-6 shadow-card">
                <p className="text-sm text-sub-text">クラウド会計ソフト市場</p>
                <p className="text-lg font-bold text-foreground">シェア</p>
                <p className="text-[2.5rem] font-bold text-primary">No.1</p>
              </div>
              <div className="flex flex-col items-center rounded-lg bg-background p-6 shadow-card">
                <p className="text-sm text-sub-text">有料課金ユーザー</p>
                <p className="text-lg font-bold text-foreground">企業数</p>
                <p className="text-[2.5rem] font-bold text-primary">62万</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="bg-column py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-8 text-center">
            <p className="mb-1 text-sm text-sub-text">
              最適な使い方・料金プランをチェック
            </p>
            <h2 className="text-xl font-bold text-foreground">
              <span className="text-primary">企業規模やニーズ</span>
              に合わせて選べるfreee会計
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <button
                key={plan.name}
                className="group rounded-lg bg-background p-6 text-left shadow-card transition-all hover:shadow-floating hover:ring-2 hover:ring-primary"
              >
                <span className="mb-2 inline-block rounded-full bg-primary-50 px-3 py-1 text-sm font-bold text-primary">
                  {plan.badge}
                </span>
                <h3 className="mb-1 text-lg font-bold text-foreground group-hover:text-primary">
                  {plan.name}
                </h3>
                <p className="text-sm text-sub-text">{plan.target}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <p className="mb-1 text-sm text-sub-text">
              他社にはないfreeeの強み
            </p>
            <h2 className="text-xl font-bold text-foreground">
              freee会計の5つの価値
            </h2>
          </div>
          <div className="space-y-6">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`grid items-center gap-8 rounded-lg p-8 md:grid-cols-2 ${
                  i % 2 === 0
                    ? "bg-gradient-to-r from-primary-50 to-transparent"
                    : "bg-gradient-to-l from-primary-50 to-transparent"
                }`}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mb-2 text-base font-bold text-primary">
                    {feature.subtitle}
                  </p>
                  <p className="text-base leading-relaxed text-sub-text">
                    {feature.description}
                  </p>
                </div>
                <div
                  className={`flex h-48 items-center justify-center rounded-md bg-primary-100/50 ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <span className="text-[4rem] opacity-30">
                    {["📝", "✨", "⚡", "📋", "📈"][i]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-column py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              freee会計が支持される理由
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-background p-8 text-center shadow-card">
              <p className="text-sm text-sub-text">クラウド会計ソフト</p>
              <p className="text-lg font-bold text-foreground">国内シェア</p>
              <p className="text-[3rem] font-bold text-primary">No.1</p>
              <p className="text-[1.5rem] font-bold text-primary-brand">
                56.3%
              </p>
            </div>
            <div className="rounded-lg bg-background p-8 text-center shadow-card">
              <p className="text-sm text-sub-text">導入事業所数</p>
              <p className="text-[3rem] font-bold text-primary">62万</p>
              <p className="text-base text-sub-text">事業所</p>
            </div>
            <div className="rounded-lg bg-background p-8 text-center shadow-card">
              <p className="text-sm text-sub-text">金融機関との連携社数</p>
              <p className="text-[3rem] font-bold text-primary">1,043</p>
              <p className="text-base text-sub-text">社</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              金融機関レベルのセキュリティ
            </h2>
            <p className="mt-2 text-base text-sub-text">
              お客さまの情報を保護するためサポート体制を整えています
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "強固な認証機能",
                desc: "リスクベース認証を採用し、なりすましを防ぎます",
              },
              {
                title: "金融機関同等チェック",
                desc: "厳しいセキュリティチェックをパスできる体制を整備",
              },
              {
                title: "堅牢なバックアップ",
                desc: "約1ヶ月前まで1日単位でリストア可能",
              },
              {
                title: "暗号化通信",
                desc: "ファイヤーウォール防御、侵入検知等の多層防御",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-md border border-base2 p-6"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary-50">
                  <span className="text-lg text-primary">🔒</span>
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-sub-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-column py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <h2 className="mb-8 text-center text-xl font-bold text-foreground">
            よくあるご質問
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-md bg-background shadow-card"
              >
                <summary className="cursor-pointer list-none px-6 py-4 text-base font-bold text-foreground">
                  <span className="flex items-center justify-between">
                    {faq.q}
                    <span className="ml-4 text-sub-text transition-transform group-open:rotate-180">
                      ▼
                    </span>
                  </span>
                </summary>
                <div className="border-t border-base1 px-6 py-4 text-base leading-relaxed text-sub-text">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
