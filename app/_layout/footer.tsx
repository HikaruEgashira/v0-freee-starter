import Link from "next/link";

const productLinks = [
  { label: "ACME会計", href: "/accounting" },
  { label: "ACME労務", href: "/hr" },
  { label: "ACME起業", href: "/launch" },
];

const supportLinks = [
  { label: "ヘルプセンター", href: "#" },
  { label: "セキュリティ", href: "#" },
  { label: "お知らせ", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-base2 bg-sand-900 text-sand-300">
      <div className="mx-auto max-w-[70rem] px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <span className="text-xl font-bold text-white">ACME</span>
            <p className="mt-3 text-sm leading-relaxed">
              スモールビジネスを世界の主役に。
            </p>
            <p className="mt-2 text-xs text-sand-500">
              ※これはv0デモテンプレートです
            </p>
          </div>
          <nav aria-label="製品・サービス">
            <h3 className="mb-3 text-base font-bold text-white">
              製品・サービス
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="サポート">
            <h3 className="mb-3 text-base font-bold text-white">サポート</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-sand-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 border-t border-sand-700 pt-6 text-center text-sm text-sand-500">
          © 2026 ACME Demo | v0 Template Showcase
        </div>
      </div>
    </footer>
  );
}
