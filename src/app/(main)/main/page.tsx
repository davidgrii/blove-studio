import React from 'react'

import { CTASection } from '@/components/main/cta-section'
import { Hero } from '@/components/main/hero'
import { PreviewProjects } from '@/components/main/preview-projects'
import { ReviewsShowcase } from '@/components/main/reviews-showcase'

import { BgcGradients, Container } from '@/components'

export default function HomePage() {
  return (
    <>
      <div className='relative isolate'>
        <BgcGradients position={'top-left'} />

        <Container>
          <Hero />

          <PreviewProjects />

          <ReviewsShowcase />

          <CTASection />
        </Container>

        <BgcGradients position={'bottom'} />
      </div>
    </>
  )
}
