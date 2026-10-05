import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'SSME LAB - Software and Systems Model Engineering',
  description: 'Advancing software development through automated software engineering and model-driven design at VNU-UET-FIT',
  generator: 'v0.app',
  icons: {
    icon: '/ssme-lab-logo.png',
    apple: '/ssme-lab-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html className="scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
