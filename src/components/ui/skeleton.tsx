import { cn } from '@/components/ui/utils'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'animate-pulse rounded-md bg-card-foreground/25 border backdrop-blur',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
