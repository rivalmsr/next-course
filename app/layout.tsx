import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local';
import { Suspense } from 'react';
import NavBar from './NavBar';

const poppins = localFont({
  src: '../public/fonts/poppins-regular-webfont.woff2',
  variable: '--font-poppins'
});


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  openGraph: {
    title: '...',
    description: '...'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={poppins.variable}>
        <NavBar />
        <main className='p-5'>
          {children}
        </main>
      </body>
    </html>
  )
}
