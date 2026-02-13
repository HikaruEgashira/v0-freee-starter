export function CtaSection({
  title = "今なら30日間無料でお試し可能",
  subtitle = "登録はメールアドレスのみ。自動でお支払いは発生しません。",
}) {
  return (
    <section className="bg-primary-600 py-16 text-center text-white">
      <div className="mx-auto max-w-[70rem] px-6">
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <p className="mb-8 text-base opacity-90">{subtitle}</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button className="h-12 rounded-sm bg-white px-8 text-lg font-bold text-primary transition-colors hover:bg-primary-50">
            無料で始める
          </button>
          <button className="h-12 rounded-sm border-2 border-white px-8 text-lg font-bold text-white transition-colors hover:bg-white/10">
            資料をダウンロード
          </button>
        </div>
      </div>
    </section>
  );
}
