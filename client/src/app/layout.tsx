import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const font_roboto_regular = localFont({
  src: '../font/Roboto-Regular.ttf',
  variable: '--font-roboto-regular',
  display: 'swap',
})
const font_roboto_bolt = localFont({
  src: '../font/Roboto-Bold.ttf',
  variable: '--font_roboto_bolt',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'exp-messenger',
  description: 'exp-messenger',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${font_roboto_regular.variable} ${font_roboto_bolt.variable} antialiased flex min-h-screen`}
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
