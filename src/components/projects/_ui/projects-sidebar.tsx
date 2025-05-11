'use client'

import React from 'react'

import { Sorted } from '@/components/projects/_ui/sorted'
import { AchievementsCards } from '@/components/projects/_ui/technologies-graphics'
import { cn } from '@/components/ui/utils'

import { useFilterStore } from '@/store/filter.store'

interface IProps {
  className?: string
}

export const ProjectsSidebar: React.FC<IProps> = ({ className }) => {
  const NAV = ['All projects', 'Web App', 'Websites', 'Tilda', 'WordPress']
  const stack = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']

  const { selectedCategory, setSelectedCategory } = useFilterStore()

  const handleChange = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <div
      className={cn(
        className,
        'text-card-foreground mb-3 border-border/60 bg-card/30 backdrop-blur rounded-lg border shadow-sm'
      )}
    >
      <div className={'p-4 border-b sm:p-6'}>
        <AchievementsCards />
      </div>

      <div className={'flex justify-between py-4 px-4 sm:px-6'}>
        <div className='hidden h-full space-x-2 bg-card/35 backdrop-blur border rounded-lg sm:block items-center justify-center p-1 text-muted-foreground'>
          {NAV.map((item, index) => (
            <div
              onClick={() => handleChange(item)}
              key={index}
              className={cn(
                'text-sm inline-flex items-center justify-center rounded-sm px-3 py-1.5 font-medium transition-colors hover:text-foreground cursor-pointer',
                item === selectedCategory && 'text-foreground bg-primary'
              )}
            >
              {item}
            </div>
          ))}
        </div>

        <Sorted nav={NAV} />
      </div>
    </div>
  )
}
