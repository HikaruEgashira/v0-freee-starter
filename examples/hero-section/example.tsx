/**
 * Hero Section Template
 * ページトップのヒーロー領域
 *
 * 参考実装:
 * - app/accounting/page.tsx (行77-118)
 * - app/hr/page.tsx (行65-124)
 * - app/launch/page.tsx (行75-116)
 *
 * カスタマイズポイント:
 * - gradient-to-br from-* to-* の色を変更
 * - 右側の要素（統計情報やダッシュボード）の内容をカスタマイズ
 */

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20">
      <div className="mx-auto max-w-[70rem] px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* 左側: テキスト領域 */}
          <div>
            <p className="mb-2 text-base font-bold text-primary">
              サブタイトル
            </p>
            <h1 className="mb-4 text-[2rem] font-bold leading-tight text-foreground md:text-[2.5rem]">
              メインタイトル
              <br />
              <span className="text-primary">強調テキスト</span>
            </h1>
            <p className="mb-6 text-base leading-relaxed text-sub-text">
              説明文が入ります。このセクションでは製品やサービスの主要な価値提案を伝えます。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button className="h-11 rounded-sm bg-primary px-6 text-base font-bold text-white transition-colors hover:bg-primary-800">
                プライマリアクション
              </button>
              <button className="h-11 rounded-sm border border-primary bg-background px-6 text-base font-bold text-primary transition-colors hover:bg-primary-50">
                セカンダリアクション
              </button>
            </div>
            <p className="mt-3 text-sm text-sub-text">
              補足情報
            </p>
          </div>

          {/* 右側: 視覚要素（統計情報やダッシュボード例） */}
          <div className="flex gap-6">
            <div className="flex flex-col items-center rounded-lg bg-background p-6 shadow-card">
              <p className="text-sm text-sub-text">カテゴリ1</p>
              <p className="text-lg font-bold text-foreground">ラベル</p>
              <p className="text-[2.5rem] font-bold text-primary">数値</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-background p-6 shadow-card">
              <p className="text-sm text-sub-text">カテゴリ2</p>
              <p className="text-lg font-bold text-foreground">ラベル</p>
              <p className="text-[2.5rem] font-bold text-primary">数値</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
