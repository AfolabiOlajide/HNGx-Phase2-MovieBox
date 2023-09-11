import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

// local imports
import './globals.css'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['700'] })

export const metadata: Metadata = {
  title: 'Movie Box',
  description: 'Best movie application on the planet',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Nav />
          {children}
        <Footer />
      </body>
    </html>
  )
}
