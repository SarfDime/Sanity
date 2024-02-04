import type { Metadata } from "next"

import "./style.scss"

import Header from "@/app/components/Header/Header"
import Footer from "@/app/components/Footer/Footer"

export const metadata: Metadata = {
  title: "Dimsanity",
  description: "Next.js and SanityCMS demo page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  )
}
