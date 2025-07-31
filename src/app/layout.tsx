import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'spaq - AI-Powered Decision Intelligence',
  description: 'Transform your team\'s decisions into searchable, actionable intelligence. Capture, connect, and learn from every choice with spaq.',
  keywords: ['decision intelligence', 'AI', 'team collaboration', 'knowledge management', 'decision tracking'],
  authors: [{ name: 'spaq' }],
  creator: 'spaq',
  publisher: 'spaq',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://spaq.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'spaq - AI-Powered Decision Intelligence',
    description: 'Transform your team\'s decisions into searchable, actionable intelligence. Capture, connect, and learn from every choice.',
    url: 'https://spaq.ai',
    siteName: 'spaq',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'spaq - Decision Intelligence Platform',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'spaq - AI-Powered Decision Intelligence',
    description: 'Transform your team\'s decisions into searchable, actionable intelligence.',
    creator: '@spaq_ai',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png' },
      { url: '/favicon.ico' }
    ],
    apple: [
      { url: '/apple-icon.png' }
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-text-primary`}>
        {children}
      </body>
    </html>
  )
}