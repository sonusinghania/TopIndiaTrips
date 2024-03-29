import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import favicon from '../../public/videos/favicon.png'
import BootstrapClient from './components/bootstrapClient'
import Head from 'next/head';
import Link from 'next/link';
// import fabicons from '@/public/videos/fabicons'
import './globals.css'
import Topbar from './components/Topbar'
// import Navigationbar from '@/app/components/Navigationbar'
import Header from '@/app/components/Header'
import Footer from './components/Footer'
import styles from '@/app/styles/main.css'
import '@/app/loading'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Top India Trips',
  description: 'Generated by create next app',

  // icons: {
  //   icon: [
  //     '/favicon.ico?v=4'
  //   ],
  //   apple: [
  //     '/apple-touch-icon.png?v=4'
  //   ],
  //   shortcut: [
  //     ['/favicon.png'],
  //   ]

  // },
  // manifest: '/site.webmanifest'
}

export default function RootLayout({ children }) {
  return (
    <>

      <html lang="en">
        <head>
          <link rel="icon" type="image/png" href={favicon.src} />
        </head>


        <body className={inter.className}>
          <BootstrapClient />
          <Topbar />
          <Header />
          {/* <Navigationbar/> */}
          {children}
          <Footer />
        </body>
      </html>
    </>
  )
}
