import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'

import './globals.css'
import { Providers } from '@/components/providers/Providers'

const work = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MetaBlog',
  description: 'MetaBlog Blog',
}

import { ThemeProvider } from "@/components/providers/theme-providers"
import { Toaster } from '@/components/ui/toaster'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" suppressHydrationWarning>
      
      <body
        className={work.className}  suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          >
          <Providers>
            {children}
          </Providers>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
