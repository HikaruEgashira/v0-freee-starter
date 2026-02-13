/**
 * Features Section Template
 * 機能一覧をグリッドで表示するセクション
 *
 * 参考実装:
 * - app/accounting/page.tsx (行151-201): 番号付き交互レイアウト
 * - app/hr/page.tsx (行159-189): 3列グリッド
 *
 * カスタマイズポイント:
 * - data 配列の内容をカスタマイズ
 * - アイコンをemoji以外に変更可能
 * - レイアウト（グリッド列数、交互など）を変更
 */

interface Feature {
  title: string;
  description: string;
  icon?: string;
  subtitle?: string;
}

const features: Feature[] = [
  {
    icon: "📋",
    title: "機能1",
    subtitle: "副見出し",
    description: "この機能について説明します。ユーザーにとっての利点や使用例を含めます。",
  },
  {
    icon: "⚡",
    title: "機能2",
    subtitle: "副見出し",
    description: "この機能について説明します。ユーザーにとっての利点や使用例を含めます。",
  },
  {
    icon: "🎯",
    title: "機能3",
    subtitle: "副見出し",
    description: "この機能について説明します。ユーザーにとっての利点や使用例を含めます。",
  },
];

/**
 * シンプルな3列グリッド表示
 */
export function FeaturesGridSimple() {
  return (
    <section className="bg-column py-16">
      <div className="mx-auto max-w-[70rem] px-6">
        <div className="mb-10 text-center">
          <p className="mb-1 text-sm text-sub-text">セクションの説明</p>
          <h2 className="text-xl font-bold text-foreground">
            <span className="text-primary">主要機能</span>について
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-lg bg-background p-6 shadow-card transition-shadow hover:shadow-floating"
            >
              {feature.icon && (
                <span className="mb-3 inline-block text-[2rem]">
                  {feature.icon}
                </span>
              )}
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {feature.title}
              </h3>
              {feature.subtitle && (
                <p className="mb-2 text-base font-bold text-primary">
                  {feature.subtitle}
                </p>
              )}
              <p className="text-sm leading-relaxed text-sub-text">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * 番号付き交互レイアウト表示
 */
export function FeaturesAlternatingLayout() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[70rem] px-6">
        <div className="mb-10 text-center">
          <p className="mb-1 text-sm text-sub-text">セクションの説明</p>
          <h2 className="text-xl font-bold text-foreground">
            <span className="text-primary">主要機能</span>について
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
                {feature.subtitle && (
                  <p className="mb-2 text-base font-bold text-primary">
                    {feature.subtitle}
                  </p>
                )}
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
                  {feature.icon}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
