import type { Metadata} from 'next'
import type { Viewport } from 'next/types'
import localFont from 'next/font/local'
import './globals.css'

const NeuePowerTrial = localFont({
  src: [
   {
     path: "./fonts/Neue Regrade Bold.otf",
     weight: "400",
     style: "normal",
   },
   {
     path: "./fonts/Neue Regrade Bold.otf",
     weight: "700",
     style: "normal",
   },
  ],
  variable: "--font-NeuePowerTrial",
});

export const metadata: Metadata = {
  title: '3 Big Brain®',
  description: 'Discover the creative brilliance of our agency. Let\'s See Talents is your gateway to a world of innovative projects and ideas. Dive into a captivating showcase of young creators and their remarkable works. coded by kl.front',
  icons: {
    icon: [
      {
        url: "/img/favicon.ico",
        href: "/img/favicon.ico",
      },
    ],
  },
  keywords: "kevin labatte, kl.front",
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
  }: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/img/favicon.ico" />
        <meta
          name="viewport"
          content={`width=${viewport.width}, initial-scale=${viewport.initialScale}, maximum-scale=${viewport.maximumScale}, user-scalable=${viewport.userScalable}`}
        />
      </head>
      <body className={NeuePowerTrial.variable}>{children}</body>
    </html>
  )
}
