import React from 'react'

import { AppFooter } from '@/widgets/app-footer/app-footer'
import { AppHeader } from '@/widgets/app-header/app-header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  )
}
