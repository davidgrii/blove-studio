'use client'

import { ExternalLink } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface IProps {
  className?: string
}

export const CTASection: React.FC<IProps> = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/contact')
  }

  return (
    <section id={'cta'} className={'mb-4'}>
      <div
        className={
          'bg-card/35 max-w-6xl mx-auto flex flex-col justify-between items-center px-6 py-5 w-full rounded-xl border drop-shadow-xl backdrop-blur sm:gap-4 md:flex-row md:py-10 md:px-12 '
        }
      >
        <span
          className={
            'text-2xl text-nowrap mb-4 md:text-4xl font-semibold md:mb-0'
          }
        >
          Ready to work with us ?
        </span>

        <Button
          onClick={handleClick}
          className={
            'text-lg flex gap-3 items-center w-64 h-14 rounded-full border md:text-lg'
          }
        >
          Get in touch <ExternalLink className={'w-5'} />
        </Button>
      </div>
    </section>
  )
}
