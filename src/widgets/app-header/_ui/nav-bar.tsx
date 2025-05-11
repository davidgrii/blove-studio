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

export const NavBar: React.FC<IProps> = ({ navItems, className }) => {
  const currentPage = usePathname()

  return (
    <nav className={cn(className, 'flex items-start gap-6 text-sm flex-col')}>
      <div className='flex items-center text-xl'>
        <ul className='flex gap-7 text-[1rem]'>
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                className={cn(
                  currentPage.slice(1) === id
                    ? 'text-foreground font-normal'
                    : 'text-foreground/60 font-light',
                  'transition-colors hover:text-foreground/90'
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
