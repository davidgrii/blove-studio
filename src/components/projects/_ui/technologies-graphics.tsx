import React from 'react'

import { Card } from '@/components/ui/card'

import { ACHIEVEMENTS_DATA } from '@/constants'

interface IProps {
  className?: string
}

export const AchievementsCards: React.FC<IProps> = () => {
  return (
    <div className={'grid grid-cols-1 gap-2.5 w-full sm:gap-5 sm:grid-cols-2 '}>
      {ACHIEVEMENTS_DATA.map(({ title, Icon, value, description }, index) => (
        <Card
          key={index}
          className={
            'text-card-foreground border-border/60 bg-card/30 backdrop-blur'
          }
        >
          <div className='p-4 pb-2 flex flex-row gap-2 items-start justify-between sm:p-6 sm:pb-2'>
            <h3 className='text-sm tracking-tight font-medium'>{title}</h3>
            <Icon className='h-4 w-4 text-muted-foreground' />
          </div>

          <div className={'p-4 pt-0 sm:p-6 sm:pt-0'}>
            <span className={'text-lg font-bold sm:text-2xl'}>{value}</span>
            <p className='text-xs text-muted-foreground underline'>
              {description}
            </p>
          </div>
        </Card>
      ))}
    </div>
  )
}
