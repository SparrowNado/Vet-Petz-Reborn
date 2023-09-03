import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Nunito } from 'next/font/google'
import Navbar from './components/navbar/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VetPetz',
  description: 'A Website to Vet your Petz!!',
}


const font  = Nunito ({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
