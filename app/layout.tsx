import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'

const work = Work_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PeakEye',
  description: 'PeakEye Bilişim Teknolojileri A.Ş',
}
import { ThemeProvider } from "@/components/providers/theme-providers"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body className={work.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          >
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  )
}
