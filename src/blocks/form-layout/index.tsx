import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export interface FormField {
  name: string
  label: string
  type?: string
  placeholder?: string
  rows?: number
}

export interface FormLayoutProps {
  title?: string
  subtitle?: string
  fields?: FormField[]
  submitLabel?: string
  onSubmit?: (formData: Record<string, FormDataEntryValue>) => void
}

export function FormLayout({
  title = "フォームレイアウト",
  subtitle = "max-w-lg で幅を制限し、ラベルとインプットを縦積みに配置",
  fields = [
    { name: "company", label: "会社名", placeholder: "例: 株式会社サンプル" },
    { name: "email", label: "メールアドレス", type: "email", placeholder: "例: info@example.com" },
    { name: "message", label: "お問い合わせ内容", placeholder: "お問い合わせ内容をご記入ください", rows: 4 },
  ],
  submitLabel = "送信する",
  onSubmit,
}: FormLayoutProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (onSubmit) {
      const formData = new FormData(e.currentTarget)
      const data = Object.fromEntries(formData)
      onSubmit(data)
    }
  }

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[70rem] px-6 py-16">
        <h2 className="mb-2 text-lg font-bold text-foreground">{title}</h2>
        <p className="mb-8 text-base text-sub-text">{subtitle}</p>
        <form className="max-w-lg space-y-6" onSubmit={handleSubmit}>
          {fields.map((field) => (
            <div key={field.name}>
              <Label htmlFor={field.name} className="mb-1.5">{field.label}</Label>
              {field.rows ? (
                <textarea
                  id={field.name}
                  name={field.name}
                  rows={field.rows}
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-base2 bg-white px-3 py-2 text-base text-foreground placeholder:text-base3 focus-visible:border-primary focus-visible:outline-none disabled:bg-column disabled:text-base3 disabled:cursor-not-allowed"
                />
              ) : (
                <Input
                  id={field.name}
                  name={field.name}
                  type={field.type || 'text'}
                  placeholder={field.placeholder}
                />
              )}
            </div>
          ))}
          <Button type="submit">{submitLabel}</Button>
        </form>
      </div>
    </section>
  )
}
