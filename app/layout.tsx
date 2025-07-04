import type React from "react"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Aniketh Paul - DeFi Researcher & Product Ops",
  description:
    "Building at the intersection of DeFi, product, and community. Product Ops, DeFi Research, and Community Building.",
  keywords: ["DeFi", "Product Ops", "Crypto", "Research", "Community Building", "Web3"],
  authors: [{ name: "Aniketh Paul" }],
  openGraph: {
    title: "Aniketh Paul - DeFi Researcher & Product Ops",
    description: "Building at the intersection of DeFi, product, and community.",
    url: "https://anikethpaul.xyz",
    siteName: "Aniketh Paul",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aniketh Paul - DeFi Researcher & Product Ops",
    description: "Building at the intersection of DeFi, product, and community.",
    creator: "@Alphooor",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
