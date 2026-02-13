/**
 * Steps Section Template
 * 手順やプロセスを段階的に表示するセクション
 *
 * 参考実装:
 * - app/launch/page.tsx (行118-151)
 *
 * カスタマイズポイント:
 * - steps 配列の段階数や内容を変更
 * - 色（primary を別の色に置き換え）
 * - md:grid-cols-3 を md:grid-cols-2 や md:grid-cols-4 に変更可能
 */

interface Step {
  step: number;
  title: string;
  description: string;
  time: string;
}

const steps: Step[] = [
  {
    step: 1,
    title: "ステップ1",
    description: "最初のステップについて説明します。ユーザーが実施すべき具体的なアクションを記載します。",
    time: "約5分",
  },
  {
    step: 2,
    title: "ステップ2",
    description: "次のステップについて説明します。システムが何をするか、またはユーザーが何をするかを明確にします。",
    time: "自動",
  },
  {
    step: 3,
    title: "ステップ3",
    description: "最後のステップについて説明します。完了までに何をするか、次に何ができるかを説明します。",
    time: "ガイド付き",
  },
];

/**
 * ステップ表示セクション
 * - 水平方向のコネクタ付き
 * - 各ステップの所要時間を表示
 */
export function StepsSection() {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[70rem] px-6">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold text-foreground">
            たった{steps.length}ステップで完了
          </h2>
          <p className="mt-2 text-base text-sub-text">
            画面の案内に沿って進めるだけ。専門知識は不要です。
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.step} className="relative text-center">
              {/* コネクタ線 */}
              {i < steps.length - 1 && (
                <div className="absolute right-0 top-12 hidden h-0.5 w-8 -translate-x-4 bg-primary-300 md:block" />
              )}

              {/* ステップ番号 */}
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                {step.step}
              </div>

              {/* ステップ内容 */}
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mb-3 text-sm leading-relaxed text-sub-text">
                {step.description}
              </p>

              {/* 所要時間 */}
              <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary">
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
