import { BgcGradients, Container } from '@/components'
import { Reviews } from '@/components/reviews/reviews'
import { CTASection } from '@/components/main/cta-section'
import React from 'react'

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
