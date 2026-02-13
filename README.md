# freee Starter Registry

[![Open in v0](https://v0.dev/chat/api/badge)](https://v0.dev/chat/api/open?url=https://v0-freee-starter.vercel.app/r/hero-split.json)

freee ブランドデザイントークンを組み込んだ [shadcn/ui registry](https://ui.shadcn.com/docs/registry)。`npx shadcn add` でコンポーネントをインストールできます。

## Registry

### UI Components

| Component | Install |
|-----------|---------|
| Button | `npx shadcn add https://v0-freee-starter.vercel.app/r/button.json` |
| Card | `npx shadcn add https://v0-freee-starter.vercel.app/r/card.json` |
| Input | `npx shadcn add https://v0-freee-starter.vercel.app/r/input.json` |
| Label | `npx shadcn add https://v0-freee-starter.vercel.app/r/label.json` |

### Blocks

| Block | Install | Open in v0 |
|-------|---------|------------|
| Hero Split | `npx shadcn add https://v0-freee-starter.vercel.app/r/hero-split.json` | [![Open](https://v0.dev/chat/api/badge)](https://v0.dev/chat/api/open?url=https://v0-freee-starter.vercel.app/r/hero-split.json) |
| Stats Bar | `npx shadcn add https://v0-freee-starter.vercel.app/r/stats-bar.json` | [![Open](https://v0.dev/chat/api/badge)](https://v0.dev/chat/api/open?url=https://v0-freee-starter.vercel.app/r/stats-bar.json) |
| Card Grid | `npx shadcn add https://v0-freee-starter.vercel.app/r/card-grid.json` | [![Open](https://v0.dev/chat/api/badge)](https://v0.dev/chat/api/open?url=https://v0-freee-starter.vercel.app/r/card-grid.json) |
| Split Section | `npx shadcn add https://v0-freee-starter.vercel.app/r/split-section.json` | [![Open](https://v0.dev/chat/api/badge)](https://v0.dev/chat/api/open?url=https://v0-freee-starter.vercel.app/r/split-section.json) |
| CTA Banner | `npx shadcn add https://v0-freee-starter.vercel.app/r/cta-banner.json` | [![Open](https://v0.dev/chat/api/badge)](https://v0.dev/chat/api/open?url=https://v0-freee-starter.vercel.app/r/cta-banner.json) |
| Form Layout | `npx shadcn add https://v0-freee-starter.vercel.app/r/form-layout.json` | [![Open](https://v0.dev/chat/api/badge)](https://v0.dev/chat/api/open?url=https://v0-freee-starter.vercel.app/r/form-layout.json) |

### Theme

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

## MCP (AI IDE連携)

Cursor や Windsurf で利用する場合:

```json
{
  "mcpServers": {
    "shadcn": {
      "command": "npx",
      "args": ["-y", "@anthropic-ai/shadcn-mcp-server", "https://v0-freee-starter.vercel.app"]
    }
  }
}
```

## References

- [freee Brand Design Philosophy](https://brand.freee.co.jp/designphilosophy/)
- [freee vibes](https://github.com/freee/vibes)
- [shadcn/ui Registry](https://ui.shadcn.com/docs/registry)
- [vercel/registry-starter](https://github.com/vercel/registry-starter)
