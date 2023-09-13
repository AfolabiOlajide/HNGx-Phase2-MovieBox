import SideBar from './components/SideBar';

export const metadata = {
  title: 'Movies List',
  description: 'List of Top Rated Movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="layout grid grid-cols-[20%_80%]">
          <SideBar />
          <div className="content">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
