import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Guido Risso',
  description: 'Generated by Giuliano Brumatti'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
