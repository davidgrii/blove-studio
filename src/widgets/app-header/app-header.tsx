'use client'

import React from 'react'
import { Layout } from '@/widgets/app-header/_ui/layout'
import { Logo } from '@/components/ui/logo'
import { NavBar } from '@/widgets/app-header/_ui/nav-bar'
import { SidebarMenu } from '@/widgets/app-header/_ui/sidebar-menu'
import { ContactButton } from '@/components/sign-in-button'
import { NAV_ITEMS, SIDEBAR_NAV_ITEMS } from 'src/shared/constants'

export const AppHeader = () => {
  return (
    <Layout
      logo={<Logo size={'large'} text={'Blove Studio'} />}
      nav={<NavBar navItems={NAV_ITEMS} />}
      button={<ContactButton />}
      sidebar={<SidebarMenu navItems={SIDEBAR_NAV_ITEMS} />}
    />
  )
}
