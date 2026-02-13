/**
 * Merits Section Template
 * サービスの主要なメリット・利点を強調して表示するセクション
 *
 * 参考実装:
 * - app/launch/page.tsx (行153-188)
 *
 * カスタマイズポイント:
 * - merits 配列の内容をカスタマイズ
 * - highlight と highlightLabel を変更（例: "4万円" と "節約"）
 * - アイコンを emoji 以外に変更可能
 * - bg-column と bg-background を入れ替え
 */

interface Merit {
  title: string;
  description: string;
  highlight: string;
  highlightLabel: string;
  icon: string;
}

const merits: Merit[] = [
  {
    title: "メリット1",
    description:
      "このメリットについて説明します。ユーザーが得られる具体的な利益や効果を記載します。",
    highlight: "50%",
    highlightLabel: "削減",
    icon: "💰",
  },
  {
    title: "メリット2",
    description:
      "このメリットについて説明します。ユーザーが得られる具体的な利益や効果を記載します。",
    highlight: "0円",
    highlightLabel: "コスト",
    icon: "📖",
  },
  {
    title: "メリット3",
    description:
      "このメリットについて説明します。ユーザーが得られる具体的な利益や効果を記載します。",
    highlight: "ALL",
    highlightLabel: "対応",
    icon: "🔗",
  },
];

/**
 * メリット表示セクション
 * - ハイライト値の表示
 * - アイコン付きカード
 */
export function MeritsSection() {
  return (
    <section className="bg-column py-16">
      <div className="mx-auto max-w-[70rem] px-6">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold text-foreground">
            選ばれている理由
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {merits.map((merit) => (
            <div
              key={merit.title}
              className="rounded-lg bg-background p-6 shadow-card"
            >
              {/* アイコン */}
              <span className="mb-3 inline-block text-[2rem]">
                {merit.icon}
              </span>

              {/* ハイライト値 */}
              <div className="mb-4">
                <span className="text-[2rem] font-bold text-primary">
                  {merit.highlight}
                </span>
                <span className="ml-1 text-sm text-sub-text">
                  {merit.highlightLabel}
                </span>
              </div>

              {/* メリット内容 */}
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
  );
}
