export default function Home() {
  return (
    <div className="min-h-screen bg-column">
      {/* Header */}
      <header className="border-b border-base2 bg-background px-6 py-4">
        <div className="mx-auto flex max-w-[70rem] items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">
            freee Design Tokens
          </h1>
          <nav className="flex gap-6">
            <a href="#" className="text-base text-link hover:underline">
              ダッシュボード
            </a>
            <a href="#" className="text-base text-link hover:underline">
              設定
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-[70rem] px-6 py-8">
        {/* Hero */}
        <section className="mb-12">
          <h2 className="mb-2 text-xl font-bold text-foreground">
            v0 + freee vibes スターターテンプレート
          </h2>
          <p className="max-w-prose text-base leading-normal text-sub-text">
            このテンプレートは freee の vibes
            デザインシステムのトークンを Tailwind CSS 4
            に統合したものです。v0 での開発にそのまま利用できます。
          </p>
        </section>

        {/* Color Palette */}
        <section className="mb-12">
          <h3 className="mb-4 text-lg font-bold text-foreground">
            カラーパレット
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="rounded-sm bg-primary-50 p-4 text-sm">P01</div>
            <div className="rounded-sm bg-primary-200 p-4 text-sm">P03</div>
            <div className="rounded-sm bg-primary-400 p-4 text-sm text-white">
              P05 (Brand)
            </div>
            <div className="rounded-sm bg-primary-600 p-4 text-sm text-white">
              P07 (Main)
            </div>
            <div className="rounded-sm bg-primary-900 p-4 text-sm text-white">
              P10
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="rounded-sm bg-red-500 p-4 text-sm text-white">
              Error
            </div>
            <div className="rounded-sm bg-yellow-500 p-4 text-sm">Warning</div>
            <div className="rounded-sm bg-green-500 p-4 text-sm text-white">
              Success
            </div>
            <div className="rounded-sm bg-teal-500 p-4 text-sm text-white">
              Teal
            </div>
            <div className="rounded-sm bg-purple-500 p-4 text-sm text-white">
              Purple
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h3 className="mb-4 text-lg font-bold text-foreground">ボタン</h3>
          <div className="flex flex-wrap gap-4">
            <button className="h-9 rounded-sm bg-primary px-4 text-base font-bold text-white transition-[background-color,color,box-shadow,border-color] duration-200 hover:bg-primary-800">
              プライマリ
            </button>
            <button className="h-9 rounded-sm border border-gray-100 bg-background px-4 text-base font-bold text-foreground transition-[background-color,color,box-shadow,border-color] duration-200 hover:border-primary-700 hover:bg-primary-100 hover:text-primary-700">
              セカンダリ
            </button>
            <button className="h-9 rounded-sm border border-transparent bg-transparent px-2 text-base font-bold text-foreground transition-[background-color,color,box-shadow,border-color] duration-200 hover:bg-primary-100/30 hover:text-primary-700">
              テキスト
            </button>
            <button className="h-9 rounded-sm bg-alert px-4 text-base font-bold text-white transition-[background-color,color,box-shadow,border-color] duration-200 hover:bg-red-700">
              危険
            </button>
            <button
              className="pointer-events-none h-9 cursor-not-allowed rounded-sm bg-base2 px-4 text-base text-sub-text opacity-50"
              disabled
            >
              無効
            </button>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-12">
          <h3 className="mb-4 text-lg font-bold text-foreground">カード</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-md bg-background p-6 shadow-card">
              <h4 className="mb-2 text-lg font-bold text-foreground">
                shadow-card
              </h4>
              <p className="text-base leading-normal text-sub-text">
                標準的なカードコンポーネントのシャドウです。
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-floating">
              <h4 className="mb-2 text-lg font-bold text-foreground">
                shadow-floating
              </h4>
              <p className="text-base leading-normal text-sub-text">
                フローティング要素に使用するシャドウです。
              </p>
            </div>
            <div className="rounded-lg bg-background p-6 shadow-popup">
              <h4 className="mb-2 text-lg font-bold text-foreground">
                shadow-popup
              </h4>
              <p className="text-base leading-normal text-sub-text">
                モーダルやポップアップに使用するシャドウです。
              </p>
            </div>
          </div>
        </section>

        {/* Form Elements */}
        <section className="mb-12">
          <h3 className="mb-4 text-lg font-bold text-foreground">
            フォーム要素
          </h3>
          <div className="max-w-md space-y-4">
            <div>
              <label className="mb-1 block text-sm font-bold text-foreground">
                ラベル
              </label>
              <input
                type="text"
                placeholder="テキスト入力"
                className="h-9 w-full rounded-sm border border-gray-100 bg-background px-2 text-base text-foreground transition-[border-color,background-color,color] duration-200 placeholder:text-base3 disabled:cursor-not-allowed disabled:bg-base1"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-foreground">
                セレクト
              </label>
              <select className="h-9 w-full rounded-sm border border-gray-100 bg-background px-2 text-base text-foreground transition-[border-color,background-color,color] duration-200">
                <option>選択してください</option>
                <option>オプション 1</option>
                <option>オプション 2</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="check1"
                className="h-4 w-4 rounded-xs border border-gray-100 accent-primary"
              />
              <label htmlFor="check1" className="text-base text-foreground">
                チェックボックス
              </label>
            </div>
          </div>
        </section>

        {/* Alerts */}
        <section className="mb-12">
          <h3 className="mb-4 text-lg font-bold text-foreground">アラート</h3>
          <div className="space-y-4">
            <div className="rounded-sm border-l-4 border-alert bg-red-100 p-4">
              <p className="text-base font-bold text-alert">エラー</p>
              <p className="text-base text-foreground">
                エラーメッセージの表示例です。
              </p>
            </div>
            <div className="rounded-sm border-l-4 border-notice bg-yellow-100 p-4">
              <p className="text-base font-bold text-notice">警告</p>
              <p className="text-base text-foreground">
                警告メッセージの表示例です。
              </p>
            </div>
            <div className="rounded-sm border-l-4 border-primary-brand bg-primary-50 p-4">
              <p className="text-base font-bold text-primary">情報</p>
              <p className="text-base text-foreground">
                情報メッセージの表示例です。
              </p>
            </div>
            <div className="rounded-sm border-l-4 border-green-500 bg-green-100 p-4">
              <p className="text-base font-bold text-green-700">成功</p>
              <p className="text-base text-foreground">
                成功メッセージの表示例です。
              </p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h3 className="mb-4 text-lg font-bold text-foreground">
            タイポグラフィ
          </h3>
          <div className="space-y-3 rounded-md bg-background p-6 shadow-card">
            <p className="text-xl font-bold">
              Headline 1 (1.5rem / 24px, bold)
            </p>
            <p className="text-lg font-bold">
              Headline 2 (1rem / 16px, bold)
            </p>
            <p className="text-base font-bold">
              Headline 3 (0.875rem / 14px, bold)
            </p>
            <p className="text-base">本文テキスト (0.875rem / 14px)</p>
            <p className="text-sm text-sub-text">
              キャプション (0.75rem / 12px)
            </p>
            <p className="text-xs text-base3">最小テキスト (0.625rem / 10px)</p>
          </div>
        </section>

        {/* Spacing & Radius */}
        <section className="mb-12">
          <h3 className="mb-4 text-lg font-bold text-foreground">
            角丸 (Border Radius)
          </h3>
          <div className="flex flex-wrap gap-6">
            {(
              [
                ["rounded-xs", "4px", "bg-primary-100"],
                ["rounded-sm", "8px (Button/Input)", "bg-primary-200"],
                ["rounded-md", "12px (Card)", "bg-primary-300"],
                ["rounded-lg", "16px (Floating)", "bg-primary-400"],
                ["rounded-xl", "24px (Dialog)", "bg-primary-600"],
                ["rounded-full", "Full", "bg-primary-800"],
              ] as const
            ).map(([cls, label, bg]) => (
              <div key={cls} className="flex flex-col items-center gap-2">
                <div className={`h-16 w-16 ${cls} ${bg}`} />
                <span className="text-sm text-sub-text">{label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-base2 bg-background px-6 py-6">
        <div className="mx-auto max-w-[70rem] text-sm text-sub-text">
          Built with freee vibes design tokens + Tailwind CSS 4 + Next.js
        </div>
      </footer>
    </div>
  );
}
