"use client"

import { HeroSplit } from "../../../../registry/blocks/hero-split"
import { StatsBar } from "../../../../registry/blocks/stats-bar"
import { CardGrid } from "../../../../registry/blocks/card-grid"
import { SplitSection } from "../../../../registry/blocks/split-section"
import { CtaBanner } from "../../../../registry/blocks/cta-banner"
import { FormLayout } from "../../../../registry/blocks/form-layout"
import { Button } from "../../../../registry/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../../../../registry/ui/card"
import { Input } from "../../../../registry/ui/input"
import { Label } from "../../../../registry/ui/label"

const demos: Record<string, React.ComponentType> = {
  "hero-split": HeroSplit,
  "stats-bar": StatsBar,
  "card-grid": CardGrid,
  "split-section": SplitSection,
  "cta-banner": CtaBanner,
  "form-layout": FormLayout,
  button: () => (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  card: () => (
    <div className="p-8">
      <Card className="max-w-sm">
        <CardHeader>
          <CardTitle>カードタイトル</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>カードの説明文がここに入ります。</CardDescription>
        </CardContent>
      </Card>
    </div>
  ),
  input: () => (
    <div className="max-w-sm space-y-4 p-8">
      <Input placeholder="テキストを入力" />
      <Input type="email" placeholder="メールアドレス" />
      <Input disabled placeholder="無効な入力" />
    </div>
  ),
  label: () => (
    <div className="max-w-sm space-y-4 p-8">
      <div>
        <Label htmlFor="demo-name">名前</Label>
        <Input id="demo-name" placeholder="山田太郎" />
      </div>
      <div>
        <Label htmlFor="demo-email">メールアドレス</Label>
        <Input id="demo-email" type="email" placeholder="taro@example.com" />
      </div>
    </div>
  ),
}

export function DemoRenderer({ name }: { name: string }) {
  const DemoComponent = demos[name]

  if (!DemoComponent) {
    return null
  }

  return (
    <div className="bg-background">
      <DemoComponent />
    </div>
  )
}
