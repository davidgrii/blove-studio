'use client'

import React from 'react'
import { NAV_ITEMS } from 'src/constants'

import { ContactButton } from '@/components/contact-button'
import { Logo } from '@/components/ui/logo'

import { Layout } from '@/widgets/app-header/_ui/layout'
import { NavBar } from '@/widgets/app-header/_ui/nav-bar'
import { SidebarMenu } from '@/widgets/app-header/_ui/sidebar-menu'

export const AppHeader = () => {
  return (
    <Layout
      logo={<Logo size={'large'} text={'Blove Studio'} />}
      nav={<NavBar navItems={NAV_ITEMS} />}
      button={<ContactButton />}
      sidebar={<SidebarMenu navItems={NAV_ITEMS} />}
    />
  )
}
