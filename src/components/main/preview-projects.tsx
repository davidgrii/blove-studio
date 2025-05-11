'use client'

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { Project } from '@/components/projects/_ui/project'
import { InfoModal } from '@/components/projects/info-modal'
import { Button } from '@/components/ui/button'

import { APP_NAVIGATION } from '@/config/pages-url.config'

import { PROJECTS } from '@/constants'

export const PreviewProjects = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  const router = useRouter()

  const handleClick = () => {
    router.push(`${APP_NAVIGATION.PROJECTS}/#projects-list`)
  }

  return (
    <section id={'preview-projects'} className={'mb-20'}>
      <div className={'flex flex-col items-center'}>
        <div className='grid grid-cols-1 gap-5 pt-0 sm:gap-7 lg:grid-cols-2'>
          {PROJECTS.slice(1, 3).map((project, index) => (
            <Project
              index={index}
              key={project.id}
              project={project}
              setIsOpen={setIsInfoModalOpen}
            />
          ))}
        </div>

        <InfoModal isOpen={isInfoModalOpen} setIsOpen={setIsInfoModalOpen} />

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
