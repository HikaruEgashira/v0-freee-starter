import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2 text-lg text-muted-foreground">ページが見つかりません</p>
      <Link href="/" className="mt-6 text-primary hover:underline">
        ホームに戻る
      </Link>
    </div>
  )
}
