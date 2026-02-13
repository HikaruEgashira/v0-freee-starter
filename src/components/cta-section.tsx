import { Button } from './ui/button'

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
          <Button size="lg" className="bg-white text-primary hover:bg-primary-50">
            無料で始める
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10">
            資料をダウンロード
          </Button>
        </div>
      </div>
    </section>
  );
}
