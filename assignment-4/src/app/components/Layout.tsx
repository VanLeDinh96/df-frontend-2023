'use client'

import { Inter } from 'next/font/google'
import { createContext, useState } from 'react'
import { LayoutProps } from '../types/Layout.types'
import Head from './Head'
import Header from './Header'

const inter = Inter({ subsets: ['latin'] })
const ThemeContext = createContext(false)

const Layout = ({ children }: LayoutProps) => {
  const [dark, setDark] = useState(false)

  const handleSwitchTheme = () => {
    setDark((oldValue) => !oldValue)
  }

  return (
    <ThemeContext.Provider value={dark}>
      <html lang="en" className={`${dark ? 'dark' : ''}`}>
        <Head />
        <body className={inter.className}>
          <Header dark={dark} handleSwitchTheme={handleSwitchTheme} />
          <main
            className={`bg-white px-2 lg:px-4 py-2.5 min-h-[calc(100vh-4rem)] ${
              dark ? 'dark:bg-gray-800' : ''
            }`}
          >
            {children}
          </main>
        </body>
      </html>
    </ThemeContext.Provider>
  )
}

export default Layout
