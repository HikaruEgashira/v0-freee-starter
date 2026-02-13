/**
 * Testimonial Section Template
 * ユーザーやクライアントからの声・推薦文を表示するセクション
 *
 * 参考実装:
 * - app/hr/page.tsx (行248-275)
 *
 * カスタマイズポイント:
 * - 背景色（bg-green-100 など）を別の色に変更
 * - ユーザー情報（名前、肩書き）をカスタマイズ
 * - アバター画像の背景色を変更
 * - 複数の testimonial を並べる場合はグリッドに変更
 */

/**
 * シンプルな単一推薦文セクション
 */
export function TestimonialSectionSimple() {
  return (
    <section className="bg-primary-100 py-16">
      <div className="mx-auto max-w-[70rem] px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-8 text-xl font-bold text-foreground">
            ユーザーの声
          </h2>
          <div className="rounded-lg bg-background p-8 shadow-card">
            {/* 推薦文 */}
            <p className="mb-6 text-lg leading-relaxed text-foreground">
              「サービス導入により、作業時間が
              <span className="font-bold text-primary">3分の1</span>
              に短縮されました。チーム全体の生産性が大幅に向上し、満足しています。」
            </p>

            {/* ユーザー情報 */}
            <div className="flex items-center justify-center gap-3">
              {/* アバター */}
              <div className="h-10 w-10 rounded-full bg-primary-300" />
              <div className="text-left">
                <p className="text-base font-bold text-foreground">
                  山田 太郎 様
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
  );
}

/**
 * 複数推薦文をグリッド表示するセクション
 */
export function TestimonialSectionGrid() {
  const testimonials = [
    {
      quote: "導入後の効率化に驚きました。強く推薦します。",
      name: "田中 太郎 様",
      position: "株式会社A 代表取締役",
      color: "bg-primary-300",
    },
    {
      quote: "問題解決までの時間が大幅に短縮されました。",
      name: "佐藤 花子 様",
      position: "株式会社B マネージャー",
      color: "bg-green-300",
    },
    {
      quote: "チーム全体の生産性が向上し、感謝しています。",
      name: "鈴木 次郎 様",
      position: "株式会社C 部長",
      color: "bg-blue-300",
    },
  ];

  return (
    <section className="bg-column py-16">
      <div className="mx-auto max-w-[70rem] px-6">
        <h2 className="mb-10 text-center text-xl font-bold text-foreground">
          ユーザーの声
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-lg bg-background p-6 shadow-card"
            >
              {/* 推薦文 */}
              <p className="mb-6 leading-relaxed text-foreground">
                「{testimonial.quote}」
              </p>

              {/* ユーザー情報 */}
              <div className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-full ${testimonial.color}`} />
                <div>
                  <p className="text-sm font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-sub-text">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
