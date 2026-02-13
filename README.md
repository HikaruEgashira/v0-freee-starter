# freee Starter Registry

freee ブランドデザイントークンを提供する [shadcn/ui registry](https://ui.shadcn.com/docs/registry) テンプレート。

## Install

```bash
npx shadcn add https://v0-freee-starter.vercel.app/r/theme.json
```

## Design Tokens

`registry/common/globals.css` に freee ブランドトークンを定義:

- **Colors**: Primary blue (#285ac8), Sand neutrals, Semantic colors (alert, notice)
- **Typography**: 日本語対応システムフォントスタック、14px ベース
- **Spacing**: 4px (0.25rem) ベースユニット
- **Border Radius**: xs(4px) ~ xl(24px)
- **Shadows**: card, floating, popup
- **Focus Ring**: 白-青(#2864f0)-白 の3層リング

## Getting Started

```bash
pnpm install
pnpm registry:build  # /public/r/*.json を生成
pnpm dev             # http://localhost:3000
```

## References

- [freee Brand Design Philosophy](https://brand.freee.co.jp/designphilosophy/)
- [freee vibes](https://github.com/freee/vibes)
- [shadcn/ui Registry](https://ui.shadcn.com/docs/registry)
- [vercel/registry-starter](https://github.com/vercel/registry-starter)
