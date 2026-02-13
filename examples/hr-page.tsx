import { CtaSection } from "@/examples/cta-section";

const features = [
  {
    title: "給与計算の自動化",
    description:
      "勤怠データをもとに給与を自動計算。社会保険料や所得税の計算もすべて自動で行います。手作業による計算ミスのリスクを大幅に削減。",
    icon: "💰",
  },
  {
    title: "年末調整のペーパーレス化",
    description:
      "従業員はスマホやPCから必要情報を入力するだけ。書類の回収・チェック・計算をすべてオンラインで完結。",
    icon: "📄",
  },
  {
    title: "入退社手続きの効率化",
    description:
      "入社時に必要な社会保険・雇用保険の届出書類を自動作成。電子申請にも対応し、役所に行く手間も削減。",
    icon: "🚀",
  },
  {
    title: "勤怠管理との連携",
    description:
      "打刻データを自動で集計し、給与計算にそのまま連携。残業時間の管理や有給休暇の取得状況も一目で把握。",
    icon: "⏰",
  },
  {
    title: "給与明細のWeb配信",
    description:
      "給与明細をオンラインで配信。印刷・封入・配布の手間がゼロに。従業員はいつでもスマホから確認可能。",
    icon: "📱",
  },
  {
    title: "マイナンバー管理",
    description:
      "従業員のマイナンバーを安全に収集・管理。必要な届出書類への自動反映にも対応。",
    icon: "🔐",
  },
];

const painPoints = [
  {
    before: "給与計算に毎月3日かかる",
    after: "自動計算で半日に短縮",
  },
  {
    before: "年末調整の書類回収が大変",
    after: "オンライン回収で手間ゼロ",
  },
  {
    before: "入退社の届出書類を手書き",
    after: "自動作成＆電子申請",
  },
  {
    before: "勤怠データの集計に時間がかかる",
    after: "リアルタイム自動集計",
  },
];

export default function HrPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-100 via-white to-teal-100 py-20">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-2 text-base font-bold text-green-700">
                クラウド人事労務ソフト
              </p>
              <h1 className="mb-4 text-[2rem] font-bold leading-tight text-foreground md:text-[2.5rem]">
                一元管理で労務の
                <br />
                <span className="text-green-700">
                  作業時間とミスを大幅削減
                </span>
              </h1>
              <p className="mb-6 text-base leading-relaxed text-sub-text">
                給与計算や労務管理を大幅に効率化。給与明細や年末調整、入社手続きから勤怠管理まで対応。
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button className="h-11 rounded-sm bg-green-700 px-6 text-base font-bold text-white transition-colors hover:bg-green-900">
                  無料で始める
                </button>
                <button className="h-11 rounded-sm border border-green-700 bg-background px-6 text-base font-bold text-green-700 transition-colors hover:bg-green-100">
                  資料をダウンロード
                </button>
              </div>
              <p className="mt-3 text-sm text-sub-text">
                クレジットカード不要 / 30日間無料
              </p>
            </div>
            <div className="rounded-xl bg-background p-8 shadow-floating">
              <div className="mb-4 flex items-center gap-3 border-b border-base1 pb-4">
                <div className="h-10 w-10 rounded-full bg-green-100" />
                <div>
                  <p className="text-base font-bold text-foreground">
                    従業員ダッシュボード
                  </p>
                  <p className="text-sm text-sub-text">
                    2026年2月の労務状況
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "給与計算", status: "完了", color: "bg-green-100 text-green-700" },
                  { label: "勤怠集計", status: "完了", color: "bg-green-100 text-green-700" },
                  { label: "社保手続き", status: "進行中", color: "bg-yellow-100 text-yellow-700" },
                  { label: "年末調整", status: "準備中", color: "bg-primary-50 text-primary" },
                ].map((item) => (
                  <div key={item.label} className="rounded-md border border-base1 p-3">
                    <p className="text-sm text-sub-text">{item.label}</p>
                    <span className={`mt-1 inline-block rounded-full px-2 py-0.5 text-sm font-bold ${item.color}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              freee人事労務で、こう変わる
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {painPoints.map((point) => (
              <div
                key={point.before}
                className="flex items-center gap-4 rounded-lg bg-column p-6"
              >
                <div className="flex-1">
                  <p className="text-sm text-sub-text">Before</p>
                  <p className="text-base font-bold text-red-500 line-through">
                    {point.before}
                  </p>
                </div>
                <span className="text-xl text-green-500">→</span>
                <div className="flex-1">
                  <p className="text-sm text-sub-text">After</p>
                  <p className="text-base font-bold text-green-700">
                    {point.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-column py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mb-10 text-center">
            <h2 className="text-xl font-bold text-foreground">
              freee人事労務の主な機能
            </h2>
            <p className="mt-2 text-base text-sub-text">
              人事労務に必要な機能をすべてカバー
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-lg bg-background p-6 shadow-card transition-shadow hover:shadow-floating"
              >
                <span className="mb-3 inline-block text-[2rem]">
                  {feature.icon}
                </span>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-sub-text">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-bold text-foreground">
                freee会計との連携で
                <br />
                さらに効率アップ
              </h2>
              <p className="mb-6 text-base leading-relaxed text-sub-text">
                freee人事労務で計算した給与データは、freee会計に自動連携。仕訳の手入力が不要になり、経理業務全体が効率化されます。
              </p>
              <ul className="space-y-3">
                {[
                  "給与仕訳の自動作成",
                  "社会保険料の自動連携",
                  "年末調整データの自動反映",
                  "マスタデータの一元管理",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-base text-foreground"
                  >
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-sm text-white">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { name: "freee会計", color: "border-primary bg-primary-50" },
                { name: "freee人事労務", color: "border-green-500 bg-green-100" },
                { name: "freee勤怠管理", color: "border-teal-500 bg-teal-100" },
              ].map((product, i) => (
                <div
                  key={product.name}
                  className={`rounded-md border-2 p-4 ${product.color}`}
                >
                  <p className="text-base font-bold text-foreground">
                    {product.name}
                  </p>
                  {i < 2 && (
                    <div className="mt-2 flex justify-center">
                      <span className="text-lg text-sub-text">↕</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-green-100 py-16">
        <div className="mx-auto max-w-[70rem] px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-8 text-xl font-bold text-foreground">
              お客さまの声
            </h2>
            <div className="rounded-lg bg-background p-8 shadow-card">
              <p className="mb-6 text-lg leading-relaxed text-foreground">
                「freee人事労務の導入で、給与計算にかかる時間が
                <span className="font-bold text-green-700">3分の1</span>
                に。年末調整もペーパーレスになり、従業員からも好評です。」
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-300" />
                <div className="text-left">
                  <p className="text-base font-bold text-foreground">
                    田中 太郎 様
                  </p>
                  <p className="text-sm text-sub-text">
                    株式会社サンプル 管理部長
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        title="freee人事労務を30日間無料でお試し"
        subtitle="給与計算・年末調整・入退社手続きまで。すべての機能をお試しいただけます。"
      />
    </div>
  );
}
