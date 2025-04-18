'use client'

import React, { useState } from 'react'
import { Project } from '@/components/projects/_ui/project'
import { ProjectSkeleton } from '@/components/projects/_ui/skeleton'
import { useFilterStore } from '@/shared/store/filter.store'
import { PROJECTS } from 'src/shared/constants'
import { ProjectsIcon } from '@/shared/icons/icons'

interface IProps {
  className?: string
}

export const ProjectsList: React.FC<IProps> = () => {
  const [isLoading, setIsLoading] = useState(true)
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

        {filteredProjects.length > 0 ? (
          <div className='grid grid-cols-1 gap-5 p-6 pt-0 px-4 sm:gap-7 sm:px-6 lg:grid-cols-2'>
            {!isLoading
              ? Array.from({ length: 4 }).map((project, index) => (
                  <ProjectSkeleton key={index} />
                ))
              : filteredProjects.length > 0 &&
                filteredProjects.map((project) => (
                  <Project
                    key={project.id}
                    project={project}
                    index={project.id}
                  />
                ))}
          </div>
        ) : (
          <div
            className={
              'flex justify-center items-center gap-2 font-normal text-secondary-foreground p-6 pt-0 px-4 sm:px-6'
            }
          >
            <ProjectsIcon />
            <span>No projects found</span>
          </div>
        )}
      </div>
    </>
  )
}
