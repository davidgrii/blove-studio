import React from 'react'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { cn } from '@/components/ui/utils'

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
      <body className={cn('bg-background scroll-smooth', manrope.className)}>
        {children}
      </body>
    </html>
  )
}
