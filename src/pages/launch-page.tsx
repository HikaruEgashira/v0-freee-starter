import { Helmet } from "@dr.pogodin/react-helmet";
import { CtaSection } from "@/components/cta-section";

const steps = [
  {
    step: 1,
    title: "情報入力",
    description:
      "画面の案内に沿って、会社名や資本金などの基本情報をフォームに入力。わからない項目はヘルプで解説。",
    time: "約5分",
  },
  {
    step: 2,
    title: "書類の自動作成",
    description:
      "入力した情報をもとに、定款や登記申請書など設立に必要な書類を自動で作成。手書き不要。",
    time: "自動",
  },
  {
    step: 3,
    title: "届出・申請",
    description:
      "作成した書類の提出先や届出方法をガイド。電子定款にも対応し、印紙代4万円を節約可能。",
    time: "ガイド付き",
  },
];

const merits = [
  {
    title: "設立費用を大幅に節約",
    description:
      "電子定款に対応することで、紙の定款で必要な収入印紙代4万円が不要に。freee会社設立自体の利用は完全無料。",
    highlight: "4万円",
    highlightLabel: "節約",
    icon: "💰",
  },
  {
    title: "専門知識がなくてもOK",
    description:
      "会社設立の手続きは複雑ですが、freeeなら画面の案内に沿って入力するだけ。初めての方でも安心。",
    highlight: "0円",
    highlightLabel: "利用料",
    icon: "📖",
  },
  {
    title: "設立後の手続きもサポート",
    description:
      "会社設立後に必要な届出書類の作成や、freee会計・freee人事労務との連携もスムーズ。",
    highlight: "ALL",
    highlightLabel: "一気通貫",
    icon: "🔗",
  },
];

const requiredDocs = [
  "定款",
  "登記申請書",
  "発起人の決定書",
  "代表社員の就任承諾書",
  "払込を証する書面",
  "印鑑届出書",
];

const comparisonData = [
  { item: "利用料", freee: "無料", other: "有料 or 自分で調べる" },
  { item: "電子定款", freee: "対応（印紙代0円）", other: "非対応の場合あり" },
  { item: "所要時間", freee: "最短1日", other: "1〜2週間" },
  { item: "書類作成", freee: "自動作成", other: "手書き or テンプレート" },
  { item: "設立後サポート", freee: "会計・労務と連携", other: "なし" },
];

export default function LaunchPage() {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>freee会社設立 - 会社設立の手続きを無料で、かんたんに。</title>
        <meta
          name="description"
          content="会社設立に必要な書類を無料で一括作成。電子定款にも対応し、設立コストを大幅に削減できます。"
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-100 via-white to-yellow-100 py-20">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-2 text-base font-bold text-orange-700">
                会社設立
              </p>
              <h1 className="mb-4 text-[2rem] font-bold leading-tight text-foreground md:text-[2.5rem]">
                会社設立の手続きを
                <br />
                <span className="text-orange-700">
                  無料で、かんたんに。
                </span>
              </h1>
              <p className="mb-6 text-base leading-relaxed text-sub-text">
                会社設立に必要な書類を無料で一括作成。電子定款にも対応し、設立コストを大幅に削減できます。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="h-11 rounded-sm bg-orange-700 px-6 text-base font-bold text-white transition-colors hover:bg-orange-900">
                  無料で始める
                </button>
                <button className="h-11 rounded-sm border border-orange-700 bg-background px-6 text-base font-bold text-orange-700 transition-colors hover:bg-orange-100">
                  詳しく見る
                </button>
              </div>
              <p className="mt-3 text-sm text-sub-text">
                完全無料 / アカウント登録のみ
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block rounded-xl bg-background p-8 shadow-floating">
                <p className="text-sm text-sub-text">freee会社設立の利用料</p>
                <p className="text-[4rem] font-bold text-orange-700">0</p>
                <p className="text-xl font-bold text-foreground">円</p>
                <p className="mt-4 rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-700">
                  電子定款で印紙代4万円も節約
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              たった3ステップで会社設立
            </h2>
            <p className="mt-2 text-base text-sub-text">
              画面の案内に沿って進めるだけ。専門知識は不要です。
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.step} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-12 hidden h-0.5 w-8 -translate-x-4 bg-orange-300 md:block" />
                )}
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-700 text-xl font-bold text-white">
                  {step.step}
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-sub-text">
                  {step.description}
                </p>
                <span className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                  {step.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merits */}
      <section className="bg-column py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              freee会社設立が選ばれる理由
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {merits.map((merit) => (
              <div
                key={merit.title}
                className="rounded-lg bg-background p-6 shadow-card"
              >
                <span className="mb-3 inline-block text-[2rem]">
                  {merit.icon}
                </span>
                <div className="mb-4">
                  <span className="text-[2rem] font-bold text-orange-700">
                    {merit.highlight}
                  </span>
                  <span className="ml-1 text-sm text-sub-text">
                    {merit.highlightLabel}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {merit.title}
                </h3>
                <p className="text-sm leading-relaxed text-sub-text">
                  {merit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                設立に必要な書類を
                <br />
                すべて自動作成
              </h2>
              <p className="mb-6 text-base leading-relaxed text-sub-text">
                freee会社設立では、会社設立に必要な以下の書類をすべて自動で作成します。手書きの必要はありません。
              </p>
              <ul className="grid grid-cols-2 gap-3">
                {requiredDocs.map((doc) => (
                  <li
                    key={doc}
                    className="flex items-center gap-2 text-base text-foreground"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-sm text-white">
                      ✓
                    </span>
                    {doc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-column p-8">
              <div className="space-y-3">
                {requiredDocs.map((doc, i) => (
                  <div
                    key={doc}
                    className="flex items-center gap-3 rounded-md bg-background p-3 shadow-card"
                    style={{ opacity: 1 - i * 0.1 }}
                  >
                    <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-orange-100 text-sm text-orange-700">
                      📄
                    </div>
                    <span className="text-base text-foreground">{doc}</span>
                    <span className="ml-auto text-sm text-green-700">作成済</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-column py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              freee会社設立と他の方法の比較
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full rounded-lg bg-background shadow-card">
              <thead>
                <tr className="border-b border-base2">
                  <th className="px-6 py-4 text-left text-base font-bold text-foreground">
                    比較項目
                  </th>
                  <th className="bg-orange-50 px-6 py-4 text-left text-base font-bold text-orange-700">
                    freee会社設立
                  </th>
                  <th className="px-6 py-4 text-left text-base font-bold text-sub-text">
                    従来の方法
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row) => (
                  <tr key={row.item} className="border-b border-base1 last:border-b-0">
                    <td className="px-6 py-4 text-base text-foreground">
                      {row.item}
                    </td>
                    <td className="bg-orange-50 px-6 py-4 text-base font-bold text-orange-700">
                      {row.freee}
                    </td>
                    <td className="px-6 py-4 text-base text-sub-text">
                      {row.other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* After Setup */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              設立後もfreeeがサポート
            </h2>
            <p className="mt-2 text-base text-sub-text">
              会社設立後に必要な手続きから日々の経営まで、freeeの製品群がトータルでサポートします
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: "freee会計",
                description: "設立後すぐに帳簿付けをスタート。法人決算にも対応。",
                color: "border-primary",
                href: "/accounting",
              },
              {
                name: "freee人事労務",
                description: "従業員を雇ったら。給与計算・社保手続きをかんたんに。",
                color: "border-green-500",
                href: "/hr",
              },
              {
                name: "freee資金調達",
                description: "融資・補助金・助成金の情報を集約。最適な資金調達を。",
                color: "border-purple-500",
                href: "#",
              },
            ].map((product) => (
              <div
                key={product.name}
                className={`rounded-lg border-l-4 bg-background p-6 shadow-card ${product.color}`}
              >
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {product.name}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-sub-text">
                  {product.description}
                </p>
                <span className="text-sm font-bold text-link">
                  詳しく見る →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        title="会社設立の手続きを無料ではじめよう"
        subtitle="freee会社設立なら、必要書類の作成から届出まですべて無料。電子定款で印紙代4万円も節約。"
      />
    </div>
  );
}
