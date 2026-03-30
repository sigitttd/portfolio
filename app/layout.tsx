import type { Metadata } from 'next'
import '@fontsource-variable/inter'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rahmat Sigit Hidayat — Data Analyst',
  description:
    'Portfolio of Rahmat Sigit Hidayat, a Data Analyst and Data Science graduate specializing in data visualization, machine learning, and business intelligence.',
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Rahmat Sigit Hidayat — Data Analyst',
    description:
      'Portfolio of Rahmat Sigit Hidayat, a Data Analyst and Data Science graduate specializing in data visualization, machine learning, and business intelligence.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-orbit-navy text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
