'use client'

import { FAVORITE_PROJECTS } from 'src/shared/constants'
import { Project } from '@/components/projects/_ui/project'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'

interface IProps {
  className?: string
}

export const PreviewProjects: React.FC<IProps> = () => {
  const router = useRouter()

  const handleClick = () => {
    router.push('/projects#projects-list')
  }

  return (
    <section id={'preview-projects'} className={'mb-20'}>
      <div className={'flex flex-col items-center'}>
        <div className='grid grid-cols-1 gap-5 pt-0 sm:gap-7 lg:grid-cols-2'>
          {FAVORITE_PROJECTS.map((project) => (
            <Project key={project.id} project={project} index={project.id} />
          ))}
        </div>

        <Button
          onClick={handleClick}
          variant={'outline'}
          className={
            'text-lg flex gap-3 items-center w-64 p-7 rounded-full mt-8'
          }
        >
          See more
        </Button>
      </div>
    </section>
  )
}
