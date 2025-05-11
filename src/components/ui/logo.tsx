import Link from 'next/link'
import React from 'react'

import { cn } from '@/components/ui/utils'

import { APP_NAVIGATION } from '@/config/pages-url.config'

interface Props {
  text: string
  size: 'small' | 'medium' | 'large'
  className?: string
}

export const Logo: React.FC<Props> = ({ text, size }) => {
  const logoSizes = {
    small: 'text-lg lg:text-xl',
    medium: 'text-xl lg:text-2xl',
    large: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl'
  }

  return (
    <Link href={APP_NAVIGATION.MAIN}>
      <span
        className={cn(
          logoSizes[size],
          'pl-1 font-bold inline-block text-foreground'
        )}
      >
        {text}
      </span>
    </Link>
  )
}
