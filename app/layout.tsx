import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import AnalyticsWrapper from "@/components/analytics-wrapper"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const dynamic = "error"
export const revalidate = false

export const metadata: Metadata = {
  title: "Benchies - Decentralized Finance Made Simple",
  description:
    "Manage cards, send money, track expenses, and get AI-powered insights with Benchies. Your all-in-one decentralized finance app.",
  keywords: "fintech, decentralized finance, mobile wallet, AI finance, crypto, blockchain",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
