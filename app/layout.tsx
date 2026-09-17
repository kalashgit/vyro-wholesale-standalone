import { Analytics } from '@vercel/analytics/next'
import { PostHogProvider } from './posthog-provider'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VYRO | Wholesale PlayStation Distribution in Greece',
  description: 'Authentic PlayStation stock for retailers and distributors across Greece. Explore VYRO wholesale catalogue and request trade pricing.',
  generator: 'VYRO',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  colorScheme: 'dark',
  themeColor: '#06080c',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
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