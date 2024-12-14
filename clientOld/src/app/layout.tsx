import type { Metadata } from "next";
import localFont from 'next/font/local/'
import "./globals.css";

const font_roboto_regular = localFont({
  src: './fonts/Roboto-Regular.woff2',
  variable: '--font-roboto-regular',
  display: 'swap',
})
const font_roboto_bolt = localFont({
  src: './fonts/Roboto-Bold.woff2',
  variable: '--font_roboto_bolt',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'exp-messenger',
  description: 'exp-messenger for exps',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${font_roboto_regular.variable} ${font_roboto_bolt.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
