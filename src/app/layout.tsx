import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.scss"

import Wrapper from "@/components/Wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Genesis test tasks",
  description: "Mini-Quiz development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Wrapper>{children}</Wrapper>
      </body>
    </html>
  )
}
