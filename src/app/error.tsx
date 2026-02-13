'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">エラーが発生しました</h1>
      <p className="mt-2 text-muted-foreground">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary-800"
      >
        もう一度試す
      </button>
    </div>
  )
}
