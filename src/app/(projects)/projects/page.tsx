import React from 'react'

import { BgcGradients, Container } from '@/components'
import { ProjectsList } from '@/components/projects/_ui/projects-list'
import { ProjectsSidebar } from '@/components/projects/_ui/projects-sidebar'

export default function ProjectsPage() {
  return (
    <>
      <div className={'relative isolate'}>
        <BgcGradients position={'top-left'} />

        <Container>
          <ProjectsSidebar />

          <ProjectsList />
        </Container>

        <BgcGradients position={'bottom'} />
      </div>
    </>
  )
}
