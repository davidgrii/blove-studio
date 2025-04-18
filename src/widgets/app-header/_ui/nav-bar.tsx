'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/components/ui/utils'
import { INavItems } from 'src/shared/constants'

interface IProps {
  navItems: INavItems[]
  className?: string
}

export const NavBar: React.FC<IProps> = ({ navItems, className }) => {
  const currentPage = usePathname()

  return (
    <nav className={cn(className, 'flex items-start gap-6 text-sm flex-col')}>
      <div className='flex items-center text-xl'>
        <ul className='flex gap-7 text-[16px]'>
          {navItems.map(({ id, label, href }) => (
            <li key={id}>
              <Link
                href={href}
                className={cn(
                  currentPage === href
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
