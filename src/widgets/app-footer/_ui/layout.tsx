'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { cn } from '@/components/ui/utils'

import { INavItem } from '@/types'

interface IProps {
  navItems: INavItem[]
  className?: string
}

export const Layout: React.FC<IProps> = ({ navItems }) => {
  const currentPage = usePathname()

  return (
    <footer className='flex pt-8 pb-5 flex-col rounded-tl-3xl rounded-tr-3xl bg-card/70 backdrop-blur justify-center border'>
      <ul className='flex px-5 flex-wrap text-lg justify-center gap-6 sm:flex-row sm:gap-20'>
        {navItems.map(({ href, label }) => (
          <li key={label}>
            <Link
              href={href}
              className={cn(
                currentPage === href || currentPage.startsWith(href)
                  ? 'text-foreground font-normal'
                  : 'text-foreground/60 font-light',
                'transition-colors hover:text-foreground/90 text-sm md:text-lg'
              )}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <div className='flex w-10/12 mx-auto text-sm justify-center text-center mt-6 text-secondary-foreground font-light sm:mt-10'>
        © 2025 Blove Studio Company, Inc. All rights reserved
      </div>
    </footer>
  )
}
