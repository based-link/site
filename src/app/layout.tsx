import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

import '@/app/globals.css'
import { ContextProvider, config } from '@/core/services/walletconnect'
import cn from 'classnames'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'
import { cookieToInitialState } from 'wagmi'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  description: 'Your plan B in the world of social networking',
  title: 'Based.link',
}

export default function RootLayout({ children }: PropsWithChildren) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))

  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'mx-auto my-0 w-full max-w-6xl px-6')}
      >
        <ContextProvider initialState={initialState}>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
