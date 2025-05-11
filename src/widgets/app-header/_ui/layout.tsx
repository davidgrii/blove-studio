import React from 'react'

import { Button } from '@/components/ui/button'
import { DialogTitle } from '@/components/ui/dialog'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/components/ui/utils'

import { Icons } from '@/assets/icons/icons'

interface IProps {
  logo: React.ReactNode
  nav: React.ReactNode
  button: React.ReactNode
  sidebar: React.ReactNode
  className?: string
}

export const Layout: React.FC<IProps> = ({
  logo,
  nav,
  button,
  sidebar,
  className
}) => {
  return (
    <header
      className={cn(
        'px-2.5 pt-3.5 border-b pb-2 sticky top-0 left-0 right-0 z-50 border-border/60 bg-background/95 backdrop-blur',
        className
      )}
    >
      <div className='flex h-10 items-center justify-between md:h-14 lg:px-4'>
        <div>{logo}</div>

        <div className='items-center flex gap-1'>
          <div className='hidden mr-6 lg:block '>{nav}</div>
          <div>{button}</div>

          <Sheet>
            <DialogTitle />
            <SheetContent side='right'>{sidebar}</SheetContent>

            <SheetTrigger asChild>
              <Button variant='menu' className={'px-2.5'}>
                <Icons.Menu />
              </Button>
            </SheetTrigger>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
