import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/providers/Providers'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className} suppressHydrationWarning>
    <ThemeProvider             
    attribute="class"
    defaultTheme="system"
>
        <Providers>
          {children}
        </Providers>
        </ThemeProvider>
        </body>
    </html>
  )
}
