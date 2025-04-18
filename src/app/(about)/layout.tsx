import React from 'react'

import { AppHeader } from '@/widgets/app-header/app-header'
import { AppFooter } from '@/widgets/app-footer/app-footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  )
}
