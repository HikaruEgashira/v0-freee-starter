export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ============================================================
          pattern: hero-split
          全幅背景 + コンテナ内2カラム（テキスト左 / ビジュアル右）
          key classes: min-h-[28rem], md:grid-cols-2, bg-primary-50
          ============================================================ */}
      <section className="bg-primary-50">
        <div className="mx-auto grid max-w-[70rem] items-center gap-8 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="mb-4 text-xl font-bold text-foreground">
              レイアウトパターン集
            </h1>
            <p className="mb-6 text-base text-sub-text leading-relaxed">
              このページは開発者がコピペして使えるレイアウトパターンのショーケースです。各セクションが独立したパターンとして機能します。
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="h-10 rounded-lg bg-primary px-6 text-base font-bold text-white hover:bg-primary-800">
                はじめる
              </button>
              <button className="h-10 rounded-lg border border-primary bg-white px-6 text-base font-bold text-primary hover:bg-primary-50">
                ドキュメント
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-xl bg-white p-8 shadow-card">
            <div className="grid h-40 w-full grid-cols-3 gap-3">
              <div className="rounded-lg bg-primary-100" />
              <div className="rounded-lg bg-primary-200" />
              <div className="rounded-lg bg-primary-300" />
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          pattern: stats-bar
          3カラム均等グリッド（数値ハイライト）
          key classes: grid-cols-3, text-center, border-b
          ============================================================ */}
      <section className="border-b border-base2 bg-white">
        <div className="mx-auto grid max-w-[70rem] grid-cols-1 divide-y divide-base2 px-6 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { value: "120+", label: "コンポーネント数" },
            { value: "14px", label: "ベースフォントサイズ" },
            { value: "4px", label: "スペーシング単位" },
          ].map((stat) => (
            <div key={stat.label} className="py-8 text-center">
              <p className="text-xl font-bold text-primary">{stat.value}</p>
              <p className="mt-1 text-sm text-sub-text">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          pattern: card-grid
          レスポンシブカードグリッド
          key classes: md:grid-cols-2, lg:grid-cols-3, gap-6, shadow-card
          ============================================================ */}
      <section className="bg-background">
        <div className="mx-auto max-w-[70rem] px-6 py-16">
          <h2 className="mb-2 text-lg font-bold text-foreground">
            カードグリッド
          </h2>
          <p className="mb-8 text-base text-sub-text">
            md:grid-cols-2 → lg:grid-cols-3 のレスポンシブカードレイアウト
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "会計機能", desc: "日々の取引を自動で記帳し、帳簿を効率的に管理できます。" },
              { title: "請求書管理", desc: "請求書の作成から送付、入金管理までをワンストップで対応。" },
              { title: "経費精算", desc: "レシート撮影で経費を自動入力。承認フローも簡単設定。" },
              { title: "給与計算", desc: "勤怠データから給与を自動計算。明細発行もスムーズに。" },
              { title: "レポート", desc: "売上・経費・利益をリアルタイムでダッシュボード表示。" },
              { title: "API連携", desc: "外部サービスとの連携で業務フローを最適化できます。" },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-base2 bg-white p-6 shadow-card transition-shadow hover:shadow-floating"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-50">
                  <div className="h-5 w-5 rounded bg-primary-300" />
                </div>
                <h3 className="mb-2 text-base font-bold text-foreground">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed text-sub-text">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          pattern: split-section
          テキスト + メディアの左右分割
          key classes: md:grid-cols-2, gap-12, items-center
          ============================================================ */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-[70rem] items-center gap-12 px-6 py-16 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-lg font-bold text-foreground">
              スプリットセクション
            </h2>
            <p className="mb-4 text-base leading-relaxed text-sub-text">
              テキストとメディアを左右に配置するパターンです。説明文を左に、図やスクリーンショットを右に配置して情報を整理します。
            </p>
            <ul className="space-y-2 text-base text-sub-text">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                レスポンシブで縦積みに切り替わる
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                items-center で上下中央揃え
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                gap-12 で十分な余白を確保
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-column p-8">
            <div className="aspect-video rounded-lg bg-base2" />
          </div>
        </div>
      </section>

      {/* ============================================================
          pattern: cta-banner
          全幅カラー背景 + 中央寄せテキスト + ボタン群
          key classes: bg-primary, text-white, text-center, py-16
          ============================================================ */}
      <section className="bg-primary">
        <div className="mx-auto max-w-[70rem] px-6 py-16 text-center">
          <h2 className="mb-4 text-lg font-bold text-white">
            CTAバナーパターン
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base text-primary-100">
            全幅のカラー背景にテキストとボタンを中央配置。ユーザーにアクションを促すセクションに使用します。
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button className="h-10 rounded-lg bg-white px-6 text-base font-bold text-primary hover:bg-primary-50">
              無料で試す
            </button>
            <button className="h-10 rounded-lg border border-white px-6 text-base font-bold text-white hover:bg-primary-800">
              詳しく見る
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          pattern: form-layout
          ラベル + インプットの縦積み、max-w-lg 制約
          key classes: max-w-lg, space-y-6, label + input 縦積み
          ============================================================ */}
      <section className="bg-background">
        <div className="mx-auto max-w-[70rem] px-6 py-16">
          <h2 className="mb-2 text-lg font-bold text-foreground">
            フォームレイアウト
          </h2>
          <p className="mb-8 text-base text-sub-text">
            max-w-lg で幅を制限し、ラベルとインプットを縦積みに配置
          </p>
          <div className="max-w-lg space-y-6">
            <div>
              <label className="mb-1.5 block text-sm font-bold text-foreground">
                会社名
              </label>
              <input
                type="text"
                placeholder="例: 株式会社サンプル"
                className="h-10 w-full rounded-lg border border-base2 bg-white px-3 text-base text-foreground placeholder:text-base3 focus-visible:border-primary focus-visible:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold text-foreground">
                メールアドレス
              </label>
              <input
                type="email"
                placeholder="例: info@example.com"
                className="h-10 w-full rounded-lg border border-base2 bg-white px-3 text-base text-foreground placeholder:text-base3 focus-visible:border-primary focus-visible:outline-none"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold text-foreground">
                お問い合わせ内容
              </label>
              <textarea
                rows={4}
                placeholder="お問い合わせ内容をご記入ください"
                className="w-full rounded-lg border border-base2 bg-white px-3 py-2 text-base text-foreground placeholder:text-base3 focus-visible:border-primary focus-visible:outline-none"
              />
            </div>
            <button className="h-10 rounded-lg bg-primary px-6 text-base font-bold text-white hover:bg-primary-800">
              送信する
            </button>
          </div>
        </div>
      </section>

      {/* ============================================================
          Token Reference（簡潔版）
          ============================================================ */}
      <section className="border-t border-base2 bg-white">
        <div className="mx-auto max-w-[70rem] px-6 py-16">
          <h2 className="mb-8 text-lg font-bold text-foreground">
            Token Reference
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Colors */}
            <div>
              <h3 className="mb-3 text-base font-bold text-foreground">Colors</h3>
              <div className="space-y-2">
                {[
                  { name: "primary", cls: "bg-primary" },
                  { name: "primary-brand", cls: "bg-primary-brand" },
                  { name: "accent", cls: "bg-accent" },
                  { name: "alert", cls: "bg-alert" },
                  { name: "notice", cls: "bg-notice" },
                ].map((c) => (
                  <div key={c.name} className="flex items-center gap-2">
                    <div className={`h-5 w-5 shrink-0 rounded ${c.cls}`} />
                    <code className="text-sm text-sub-text">{c.name}</code>
                  </div>
                ))}
              </div>
            </div>
            {/* Typography */}
            <div>
              <h3 className="mb-3 text-base font-bold text-foreground">Typography</h3>
              <div className="space-y-1">
                {["text-xs (10px)", "text-sm (12px)", "text-base (14px)", "text-lg (16px)", "text-xl (24px)"].map((t) => (
                  <p key={t} className="text-sm text-sub-text">{t}</p>
                ))}
              </div>
            </div>
            {/* Shadows & Radius */}
            <div>
              <h3 className="mb-3 text-base font-bold text-foreground">Shadows & Radius</h3>
              <div className="space-y-1 text-sm text-sub-text">
                <p>shadow-card / shadow-floating / shadow-popup</p>
                <p>rounded-xs (.25rem) → rounded-full (99rem)</p>
                <p>spacing: 4px ベースユニット</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
