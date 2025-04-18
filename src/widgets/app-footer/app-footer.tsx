'use client'

import React from 'react'
import { Layout } from '@/widgets/app-footer/_ui/layout'
import { NAV_ITEMS } from 'src/shared/constants'

export const AppFooter = () => {
  return <Layout navItems={NAV_ITEMS} />
}
