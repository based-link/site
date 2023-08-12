import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import cn from 'classnames'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  description: 'Your plan B in the world of social networking',
  title: 'Based.link',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'mx-auto my-0 w-full max-w-6xl px-6')}
      >
        {children}
      </body>
    </html>
  )
}
