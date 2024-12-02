import './globals.css'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Victor Assis | Portfolio',
  description: 'A personal website to showcase my work as a Software Engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
