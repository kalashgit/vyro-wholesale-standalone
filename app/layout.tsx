import { Analytics } from '@vercel/analytics/next'
import { PostHogProvider } from './posthog-provider'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './refinements.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.vyro.gr'),
  title: 'VYRO | PlayStation hardware in Greece',
  description: 'Shop PS5 consoles and PlayStation accessories from VYRO. Clear prices with VAT included, factory-sealed hardware and tracked delivery across Greece.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PostHogProvider>
          {children}
        </PostHogProvider>

        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}