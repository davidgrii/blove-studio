'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { INavItems } from '@/types'

interface IProps {
  navItems: INavItems[]
  className?: string
}

export const SidebarMenu: React.FC<IProps> = ({ navItems }) => {
  const currentPage = usePathname()

  return (
    <div className="flex flex-col h-full justify-between pt-1 overflow-y-scroll max-h-screen p-5 mt-4">
      <Logo size={'medium'} text={'Blove Studio'} />

      <ul
        className="flex flex-col space-y-2 border my-5 bg-card/10 h-full rounded-lg p-5 mb-8 text-xs font-normal text-secondary-foreground"
      >
        {navItems.map(({ id, label, href, Icon }) => (
          <li key={id}>
            <Link
              href={href}
              className={`${currentPage === href ? 'text-foreground font-normal' : 'text-foreground/60'} border py-2 rounded-lg flex items-center text-foreground transition-colors hover:text-foreground/90 hover:bg-foreground/5`}
            >
              <span className={'flex items-center mx-2 gap-3 font-normal text-[1rem]'}>
                  <Icon /> {label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <Button
        variant="outline"
        className="rounded-full mb-4 w-full py-7 bg-none font-medium text-foreground border-solid border border-border"
      >
        <span className="font-medium text-xl tracking-wide">Get in touch</span>
      </Button>
    </div>
  )
}
