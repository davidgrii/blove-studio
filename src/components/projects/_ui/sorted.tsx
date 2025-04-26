'use client'

import React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'

interface IProps {
  nav: string[]
  className?: string
}

export const Sorted: React.FC<IProps> = ({ nav }) => {
  return (
    <div className={'visible sm:hidden'}>
      <Select defaultValue={'All projects'}>
        <SelectTrigger className='w-[180px] bg-card border-border'>
          <SelectValue placeholder='Filter by:' />
        </SelectTrigger>

        <SelectContent className={'bg-card text-card-foreground'}>
          <SelectGroup>
            {nav.map((item, index) => (
              <SelectItem
                className={
                  'rounded transition text-muted-foreground hover:text-foreground '
                }
                key={index}
                value={item}
              >
                {item}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
