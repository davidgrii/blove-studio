import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React from 'react'

import { Button } from '@/components/ui/button'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  className?: string
}

export const ConfirmationModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <AlertDialog.Root open={isOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className='fixed bg-black/15 backdrop-blur blur-sm inset-0' />

          <AlertDialog.Content className='fixed bg-card/80 border backdrop-blur left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[620px] rounded-lg -translate-x-1/2 -translate-y-1/2 bg-gray1 p-6 focus:outline-none'>
            <AlertDialog.Title className='m-0 text-lg font-medium'>
              ⚠️ Note: If you came to this site via <b>Upwork</b> or{' '}
              <b>Fiverr</b> platforms - please continue communicating on those
              platforms
            </AlertDialog.Title>
            <AlertDialog.Description className='mb-8 mt-4 text-sm leading-normal font-normal text-secondary-foreground lg:max-w-[90%] '>
              * I respect the policy of <b>Upwork</b> and <b>Fiverr</b>, and all
              projects that provided these sites - will be paid and take place
              only on them accordingly
            </AlertDialog.Description>

            <AlertDialog.Action asChild onClick={() => setIsOpen(false)}>
              <Button
                variant={'outline'}
                className='inline-flex h-12 items-center justify-center rounded-full border px-8 font-medium leading-none outline-none focus-visible:outline-2 select-none'
              >
                Sure, I understand
              </Button>
            </AlertDialog.Action>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  )
}
