'use client'

import {
  IconQuoteFilled,
  IconReload,
  IconStarFilled
} from '@tabler/icons-react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FAVORITE_REVIEWS } from 'src/shared/constants'

import { Button } from '@/components/ui/button'

export const ReviewsShowcase = () => {
  const router = useRouter()

  return (
    <section id={'reviews'} className={'mb-20'}>
      <div className={'flex flex-col justify-center items-center'}>
        <span className={'block text-muted-foreground font-medium mb-2'}>
          Clients Reviews
        </span>

        <h3
          className={
            'text-center text-3xl max-w-80 font-semibold mb-5 sm:max-w-fit md:text-4xl'
          }
        >
          See What Our Clients Say About Us
        </h3>

        <div className={'grid grid-cols-1 gap-5 mt-8 md:grid-cols-3'}>
          {FAVORITE_REVIEWS.map(
            ({ id, name, location, rating, review, platform }) => (
              <div
                key={id}
                className={
                  'flex flex-col justify-between rounded-xl relative bg-card/70 h-full p-7 border'
                }
              >
                <div>
                  <div className={'flex flex-col gap-0.5 mb-6'}>
                    <h4 className={'text-xl font-medium'}>{name}</h4>
                    <span
                      className={'text-sm text-muted-foreground font-normal'}
                    >
                      {location}
                    </span>

                    <IconQuoteFilled
                      width={35}
                      height={35}
                      className={'absolute right-6 top-7 opacity-30'}
                    />

                    <div className={'flex gap-0.5 mt-2'}>
                      <span className={'mr-1'}>{rating}</span>
                      <IconStarFilled className={'text-[#df7606]'} width={18} />
                      <IconStarFilled className={'text-[#df7606]'} width={18} />
                      <IconStarFilled className={'text-[#df7606]'} width={18} />
                      <IconStarFilled className={'text-[#df7606]'} width={18} />
                      <IconStarFilled className={'text-[#df7606]'} width={18} />
                    </div>
                  </div>

                  <p className={'font-light text-secondary-foreground mb-14'}>
                    {review}
                  </p>
                </div>

                <span
                  className={'block font-light text-sm text-muted-foreground'}
                >
                  From{' '}
                  <b className={'font-medium text-secondary-foreground'}>
                    {platform}
                  </b>
                </span>

                <div className={'bottom-0 right-0 absolute rounded-full p-4'}>
                  <IconReload />
                </div>
              </div>
            )
          )}
        </div>

        <Button
          onClick={() => router.push('/reviews')}
          className={'text-lg mt-10 rounded-full w-64 h-full py-3.5 border'}
        >
          See more
        </Button>
      </div>
    </section>
  )
}
