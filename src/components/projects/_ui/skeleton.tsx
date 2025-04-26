import React from 'react'

import { Skeleton } from '@/components/ui/skeleton'

interface IProps {
  className?: string
}
export const ProjectSkeleton: React.FC<IProps> = ({ className }) => {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[280px] w-full rounded-lg' />
      <div className='space-y-2'>
        <Skeleton className='h-5 w-[330px]' />
        <Skeleton className='h-4 w-[200px]' />
      </div>
    </div>
  )
}
