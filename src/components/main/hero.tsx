'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui/button'

import { CargoBoltIcon, CoinsAppIcon, TinseleIcon } from '@/assets/icons/icons'

interface IProps {
  className?: string
}

export const Hero: React.FC<IProps> = () => {
  const router = useRouter()

  return (
    <>
      <section id={'main'} className='mt-4 mb-20 sm:mt-12'>
        <div className='relative flex justify-center mb-3 sm:mb-6'>
          <Link
            href={'/contact'}
            className='font-medium text-secondary-foreground bg-card/30 rounded-full px-6 py-2 text-xs ring-ring border sm:text-sm'
          >
            Turnkey development for your business
          </Link>
        </div>

        <div className='text-center mx-auto max-w-2xl'>
          <h1 className='mx-auto mb-4 text-4xl font-bold tracking-tight text-foreground max-w-sm sm:mb-4 sm:text-6xl sm:max-w-2xl'>
            Design your business redesign your mind
          </h1>

          <p className='mb-6 text-sm mx-auto max-w-96 text-muted-foreground font-normal sm:text-lg sm:w-9/12 sm:max-w-full'>
            From idea to finished solution, we create unique websites and apps
            that help your business grow
          </p>

          <Button
            onClick={() => router.push('/contact')}
            variant='outline'
            className='px-16 py-7 font-medium tracking-normal text-lg text-foreground border border-border sm:text-2xl sm:py-8 sm:px-20'
          >
            Get in touch
          </Button>
        </div>
      </section>

      <div
        className={'grid grid-cols-2 gap-1 mt-10 mb-20 md:mx-8 md:grid-cols-3'}
      >
        <div
          className={
            'flex justify-center items-center bg-card/50 py-4 rounded-tl-2xl'
          }
        >
          <CargoBoltIcon width={130} height={25} />
        </div>

        <div
          className={
            'flex justify-center rounded-tr-2xl items-center gap-2 bg-card/50 py-4 md:rounded-tr-none'
          }
        >
          <CoinsAppIcon width={25} height={25} />
          <span className={'text-sm font-bold sm:text-lg'}>Coins App</span>
        </div>
        <div
          className={
            'flex justify-center items-center bg-card/50 py-4 md:rounded-tr-2xl'
          }
        >
          <span className={'text-sm font-bold sm:text-lg'}>CosmoDom</span>
        </div>
        <div
          className={
            'flex justify-center items-center bg-card/50  py-4 md:rounded-bl-2xl'
          }
        >
          <span className={'text-sm font-bold sm:text-lg'}>Green House</span>
        </div>
        <div
          className={
            'flex justify-center items-center bg-card/50 py-4 rounded-bl-2xl md:rounded-bl-none'
          }
        >
          <span className={'text-sm text-center font-bold sm:text-lg'}>
            Major Construction
          </span>
        </div>
        <div
          className={
            'flex justify-center items-center bg-card/50 rounded-br-2xl py-4'
          }
        >
          <TinseleIcon width={110} height={22} />
        </div>
      </div>
    </>
  )
}
