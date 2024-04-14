import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Victor Assis | Portfolio',
  description: 'A personal website to showcase my work',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
