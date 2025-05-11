'use client'

import React, { useState } from 'react'

import { Project } from '@/components/projects/_ui/project'
import { InfoModal } from '@/components/projects/info-modal'
import { NotFoundProjects } from '@/components/projects/not-found-projects'

import { useFilterStore } from '@/store/filter.store'

import { PROJECTS } from '@/constants'

export const ProjectsList = () => {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  const { selectedCategory } = useFilterStore()

  const filteredProjects =
    selectedCategory === 'All projects'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory)

  return (
    <>
      <div className='text-foreground drop-shadow-xl shadow-white/10 border-border bg-card/30 backdrop-blur rounded-lg border shadow-sm'>
        <h3 className='text-2xl text-center p-4 leading-none tracking-tight text-foreground font-semibold sm:p-6 sm:text-3xl'>
          All our projects
        </h3>

        <InfoModal isOpen={isInfoModalOpen} setIsOpen={setIsInfoModalOpen} />

        {filteredProjects.length > 0 ? (
          <div className='grid grid-cols-1 gap-5 p-6 pt-0 px-4 sm:gap-6 sm:px-6 lg:grid-cols-2'>
            {filteredProjects.map((project, index) => (
              <Project
                index={index}
                key={project.id}
                project={project}
                setIsOpen={setIsInfoModalOpen}
              />
            ))}
          </div>
        ) : (
          <NotFoundProjects />
        )}
      </div>
    </>
  )
}
