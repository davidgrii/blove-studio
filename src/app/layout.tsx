import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import React from 'react'

import { cn } from '@/components/ui/utils'

import './globals.css'

const manrope = Manrope({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Blove studio | by david_gri',
  description: ''
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-background scroll-smooth relative isolate',
          manrope.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
