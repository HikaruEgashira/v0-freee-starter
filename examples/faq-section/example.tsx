/**
 * FAQ Section Template
 * よくある質問をアコーディオン形式で表示するセクション
 *
 * 参考実装:
 * - app/accounting/page.tsx (行281-308)
 *
 * カスタマイズポイント:
 * - faqs 配列の質問と回答を変更
 * - bg-column と bg-background を入れ替えることで背景色を変更可能
 * - 矢印を別の記号（▶ など）に変更可能
 */

interface FAQ {
  q: string;
  a: string;
}

const faqs: FAQ[] = [
  {
    q: "質問1",
    a: "この質問に対する回答です。ユーザーが知りたい情報を簡潔に、かつ詳しく説明します。",
  },
  {
    q: "質問2",
    a: "この質問に対する回答です。ユーザーが知りたい情報を簡潔に、かつ詳しく説明します。",
  },
  {
    q: "質問3",
    a: "この質問に対する回答です。ユーザーが知りたい情報を簡潔に、かつ詳しく説明します。",
  },
  {
    q: "質問4",
    a: "この質問に対する回答です。ユーザーが知りたい情報を簡潔に、かつ詳しく説明します。",
  },
];

/**
 * FAQ セクション
 * - details/summary 要素でネイティブアコーディオン実装
 * - CSSで回転アニメーション
 */
export function FaqSection() {
  return (
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
  );
}
