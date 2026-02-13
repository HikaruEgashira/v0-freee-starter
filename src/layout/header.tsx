import { Link } from "wouter";

export function Header() {
  return (
    <header className="sticky top-0 z-[var(--z-floating)] border-b border-base2 bg-background">
      <div className="mx-auto flex max-w-[70rem] items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl text-primary">v0-freee-starter</span>
        </Link>
        <div className="flex items-center gap-3">
          <button className="hidden h-9 rounded-sm border border-primary bg-background px-4 text-base font-bold text-primary transition-colors hover:bg-primary-50 md:block">
            ログイン
          </button>
          <button className="h-9 rounded-sm bg-primary px-4 text-base font-bold text-white transition-colors hover:bg-primary-800">
            無料ではじめる
          </button>
        </div>
      </div>
    </header>
  );
}
