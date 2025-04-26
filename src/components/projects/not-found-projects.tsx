import React from 'react'

import { ProjectsIcon } from '@/shared/icons/icons'

interface IProps {
  className?: string
}

export const NotFoundProjects: React.FC<IProps> = ({ className }) => {
  return (
    <>
      <div
        className={
          'flex justify-center items-center gap-2 font-normal text-secondary-foreground p-6 pt-0 px-4 sm:px-6'
        }
      >
        <ProjectsIcon />
        <span>No projects found</span>
      </div>
    </>
  )
}
