import React from 'react'

import { Icons } from '@/assets/icons/icons'

export const NotFoundProjects = () => {
  return (
    <>
      <div
        className={
          'flex justify-center items-center gap-2 font-normal text-secondary-foreground p-6 pt-0 px-4 sm:px-6'
        }
      >
        <Icons.Projects />
        <span>No projects found</span>
      </div>
    </>
  )
}
