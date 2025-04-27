'use client'

import React, { useState } from 'react'

import { ConfirmationModal } from '@/components/contact/_ui/info-modal'
import { cn } from '@/components/ui/utils'

import { BgcGradients, Container } from '@/components'

interface IProps {
  form: React.ReactNode
  className?: string
}

export const Layout: React.FC<IProps> = ({ form, className }) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(true)

  return (
    <div className={cn(className, 'relative isolate')}>
      <BgcGradients position={'top-left'} />

      <Container>
        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          setIsOpen={setIsConfirmationModalOpen}
        />
        <div className='mx-auto max-w-3xl'>{form}</div>
      </Container>

      <BgcGradients position={'bottom'} />
    </div>
  )
}
