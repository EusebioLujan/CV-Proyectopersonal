import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond, UnifrakturMaguntia, Playfair_Display, Old_Standard_TT } from "next/font/google"
import "./globals.css"

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-garamond",
})

const fraktur = UnifrakturMaguntia({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fraktur",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
})

const oldStandard = Old_Standard_TT({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-old-standard",
})

export const metadata: Metadata = {
  title: "Eugenia Gramajo | Vintage Newspaper CV",
  description: "Full-stack developer portfolio in a vintage newspaper style",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${garamond.variable} ${fraktur.variable} ${playfair.variable} ${oldStandard.variable} font-serif`}
      >
        {children}
      </body>
    </html>
  )
}
