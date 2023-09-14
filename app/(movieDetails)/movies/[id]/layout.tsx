import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'

// local imports
import '../../../(main)/globals.css'
import SideBar from './components/SideBar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Movies List',
  description: 'List of Top Rated Movies',
}

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className={`layout lg:grid lg:grid-cols-[15%_85%] ${dmSans.className} h-screen`}>
          <SideBar />
          <div className="content w-[90%] mx-auto overflow-y-auto">
            {children}
            <div className="footer block md:hidden">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
