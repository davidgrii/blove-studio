import React from 'react'
import { BgcGradients, Container } from 'src/components'

import { CTASection } from '@/components/main/cta-section'
import { Reviews } from '@/components/reviews/reviews'

export default function ReviewsPage() {
  return (
    <>
      <BgcGradients position={'top-left'} />

      <Container>
        <Reviews />

        <CTASection />
      </Container>

      <BgcGradients position={'bottom'} />
    </>
  )
}
