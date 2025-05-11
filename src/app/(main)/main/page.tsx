import React from 'react'
import { BgcGradients, Container } from 'src/components'

import { CTASection } from '@/components/main/cta-section'
import { Hero } from '@/components/main/hero'
import { PreviewProjects } from '@/components/main/preview-projects'
import { ReviewsShowcase } from '@/components/main/reviews-showcase'

export default function HomePage() {
  return (
    <>
      <BgcGradients position={'top-left'} />

      <Container>
        <Hero />

        <PreviewProjects />

        <ReviewsShowcase />

        <CTASection />
      </Container>

      <BgcGradients position={'bottom'} />
    </>
  )
}
