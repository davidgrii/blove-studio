'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/components/ui/utils'

interface IProps {
  className?: string
}

export const ContactButton: React.FC<IProps> = ({ className }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/contact')
  }

  return (
    <Button
      className={cn(
        'text-sm h-10 px-5 rounded-full text-foreground border-solid border border-border sm:px-8 sm:text-lg md:h-12',
        className
      )}
      variant='outline'
      onClick={handleClick}
    >
      <span className='text-[14px] font-medium sm:text-[16px] tracking-wide'>
        Get in touch
      </span>
    </Button>
  )
}
