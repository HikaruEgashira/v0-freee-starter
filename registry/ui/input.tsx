import * as React from 'react'
import { cn } from '@/lib/utils'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-lg border border-border bg-white px-3 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none disabled:bg-muted disabled:text-muted-foreground disabled:cursor-not-allowed',
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
Input.displayName = 'Input'

export { Input }
