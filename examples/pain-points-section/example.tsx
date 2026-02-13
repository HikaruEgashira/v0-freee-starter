/**
 * Pain Points Section Template
 * Before/After パターンで問題と解決を対比するセクション
 *
 * 参考実装:
 * - app/hr/page.tsx (行126-157)
 *
 * カスタマイズポイント:
 * - painPoints 配列の before/after を変更
 * - 背景色（bg-column, bg-background）を入れ替え
 * - グリッド列数（md:grid-cols-2）を変更可能
 * - Before/After のテキスト装飾（line-through など）をカスタマイズ
 */

interface PainPoint {
  before: string;
  after: string;
}

const painPoints: PainPoint[] = [
  {
    before: "解決前の課題1",
    after: "解決後の状態1",
  },
  {
    before: "解決前の課題2",
    after: "解決後の状態2",
  },
  {
    before: "解決前の課題3",
    after: "解決後の状態3",
  },
  {
    before: "解決前の課題4",
    after: "解決後の状態4",
  },
];

/**
 * Pain Points セクション
 * - Before/After の対比表示
 * - 矢印でビジュアル的に変化を表現
 */
export function PainPointsSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[70rem] px-6">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold text-foreground">
            ご利用で、こう変わります
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
  );
}
