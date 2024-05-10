import { GeistSans } from 'geist/font/sans'
import './globals.css'
import Providers from '@/redux/Providers'
import NavBar from './components/nav/Navbar'
import HeaderContainer from './components/nav/HeaderContainer'
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: 'ProResuMaker',
  description: 'Create professional resumes in minutes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <main>
          <Providers>
            <HeaderContainer>{children}</HeaderContainer>
          </Providers>
        </main>
      </body>
    </html>
  )
}
