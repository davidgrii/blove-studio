import React from 'react'

import { CTASection } from '@/components/main/cta-section'
import { Reviews } from '@/components/reviews/reviews'

import { BgcGradients, Container } from '@/components'

export default function ReviewsPage() {
  return (
    <div className='relative isolate'>
      <BgcGradients position={'top-left'} />

      <Container>
        <Reviews />

        <CTASection />
      </Container>

      <BgcGradients position={'bottom'} />
    </div>
  )
}
