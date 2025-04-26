import * as AlertDialog from '@radix-ui/react-alert-dialog'
import React from 'react'

interface IProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  className?: string
}

export const InfoModal: React.FC<IProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <AlertDialog.Root open={isOpen}>
        <AlertDialog.Portal>
          <AlertDialog.Overlay className='fixed bg-black/15 backdrop-blur blur-sm inset-0 bg-blackA6 data-[state=open]:animate-overlayShow' />

          <AlertDialog.Content className='fixed shadow-lg shadow-white/5 bg-card/80 border backdrop-blur left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[500px] rounded-lg -translate-x-1/2 -translate-y-1/2 bg-gray1 p-6 focus:outline-none'>
            <AlertDialog.Title className='m-0 text-lg font-medium'>
              ⚠️ Note: Some projects may not include live preview links, as they
              are no longer active or relevant for the original clients.
            </AlertDialog.Title>
            <AlertDialog.Description className='mb-5 mt-[15px] text-sm leading-normal font-normal text-secondary-foreground'>
              If needed, feel free to contact me — I’ll be happy to provide full
              layout previews or visual demos of any specific project.
            </AlertDialog.Description>

            <AlertDialog.Action asChild onClick={() => setIsOpen(false)}>
              <button className='inline-flex h-12 items-center justify-center rounded-full border px-6 font-medium leading-none outline-none focus-visible:outline-2 select-none'>
                Sure, I understand
              </button>
            </AlertDialog.Action>
          </AlertDialog.Content>
        </AlertDialog.Portal>
      </AlertDialog.Root>
    </>
  )
}
