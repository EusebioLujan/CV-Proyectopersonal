import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond, UnifrakturMaguntia, Playfair_Display, Old_Standard_TT } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "./contexts/language-context"

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
})

const fraktur = UnifrakturMaguntia({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-fraktur",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

const oldStandard = Old_Standard_TT({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-old-standard",
})

export const metadata: Metadata = {
  title: "Eugenia Gramajo - Portfolio",
  description: "Full Stack Developer Portfolio",
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
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
