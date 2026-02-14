# v0-freee-starter

[![Open in v0](https://v0-freee-starter.vercel.app/open-in-v0.svg)](https://v0.dev/chat/api/open?title=ACME+Dashboard&prompt=These+are+existing+design+system+styles+and+files.+Please+utilize+them+alongside+base+components+to+build.&url=https%3A%2F%2Fv0-freee-starter.vercel.app%2Fr%2Fdashboard.json)

[v0-starter-template](https://github.com/vercel/v0-starter-template) をベースに、[freee vibes](https://vibes.freee.co.jp/) デザインシステムのトークンを Tailwind CSS 4 に統合したスターターテンプレートです。

## Design Tokens

`app/globals.css` に以下の freee vibes トークンを定義しています:

- **Colors**: Primary (P01-P10), Sand, Gray, Red, Orange, Yellow, Green, Teal, Purple + セマンティックカラー
- **Typography**: システムフォントスタック、14px ベース
- **Spacing**: 4px (0.25rem) ベースユニット
- **Border Radius**: xs(4px), sm(8px), md(12px), lg(16px), xl(24px)
- **Shadows**: card, floating, popup
- **Focus Ring**: 白-青(#2864f0)-白 の3層リング

## Getting Started

```bash
pnpm install
pnpm dev
```

http://localhost:3000 を開いてデザイントークンのデモページを確認できます。

## References

- [freee vibes](https://vibes.freee.co.jp/)
- [freee Brand](https://brand.freee.co.jp/designphilosophy/)
- [v0](https://v0.dev/)
