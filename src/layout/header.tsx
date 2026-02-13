import { Link, useLocation } from "wouter";

const navItems = [
  { href: "/", label: "トップ" },
  { href: "/accounting", label: "freee会計" },
  { href: "/hr", label: "freee人事労務" },
  { href: "/launch", label: "freee会社設立" },
];

export function Header() {
  const [location] = useLocation();

  return (
    <header className="sticky top-0 z-[var(--z-floating)] border-b border-base2 bg-background">
      <div className="mx-auto flex max-w-[70rem] items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary">freee</span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-sm px-3 py-2 text-base transition-colors ${
                location === item.href
                  ? "bg-primary-50 font-bold text-primary"
                  : "text-foreground hover:bg-primary-50 hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
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
