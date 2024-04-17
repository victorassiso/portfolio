import './globals.css'

import type { Metadata } from 'next'
import Head from 'next/head'

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
      <Head>
        <meta property="og:title" content="Victor Assis | Portfolio" />
        <meta property="og:description" content="Description of your page." />
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:url" content="https://victorassis.vercel.app" />
        <meta property="og:type" content="website" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
