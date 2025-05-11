'use client'

import React from 'react'
import { NAV_ITEMS } from 'src/constants'

import { Layout } from '@/widgets/app-footer/_ui/layout'

export const AppFooter = () => {
  return <Layout navItems={NAV_ITEMS} />
}
