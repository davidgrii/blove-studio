'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { INavItems } from 'src/shared/constants'

interface IProps {
  navItems: INavItems[]
  className?: string
}

export const SidebarMenu: React.FC<IProps> = ({ navItems }) => {
  const currentPage = usePathname()

  return (
    <div className='flex flex-col h-full justify-between pt-1 overflow-y-scroll max-h-screen p-5 mt-4'>
      <div>
        <Logo size={'medium'} text={'Blove Studio'} />

        <ul className='flex flex-col space-y-2 opacity-80 my-5'>
          {navItems.map(({ id, label, href, Icon }) => (
            <li key={id}>
              <Link
                href={href}
                className={`${currentPage === href ? 'text-foreground font-normal' : 'text-foreground/60'} rounded-lg flex items-center text-foreground transition-colors hover:text-foreground/90 hover:bg-foreground/5 py-2`}
              >
                <div className='flex mx-2 gap-3'>
                  <Icon />
                  <span className={'font-normal text-lg'}>{label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={
          'bg-card/70 h-full rounded-xl p-5 mb-8 text-xs font-normal text-secondary-foreground'
        }
      ></div>

      <Button
        variant='outline'
        className='rounded-full mb-4 w-full py-7 bg-none font-medium text-foreground border-solid border border-border'
      >
        <span className='font-medium text-xl tracking-wide'>Get in touch</span>
      </Button>
    </div>
  )
}
