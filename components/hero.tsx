"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-black text-white pt-20 md:pt-24 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Your Wallet, Your Rules. <span className="text-gray-400">Decentralized Finance Made Simple.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl text-pretty">
                Manage cards, send money, track expenses, and get AI-powered insights - all in one secure app.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-base font-semibold group">
                Download for iOS
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black text-base font-semibold bg-transparent"
              >
                <Download className="mr-2 w-5 h-5" />
                Download for Android
              </Button>
            </div>

            {/* App Store Badges Placeholder */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="h-12 w-36 bg-white/10 rounded-lg flex items-center justify-center text-xs text-gray-400">
                App Store Badge
              </div>
              <div className="h-12 w-36 bg-white/10 rounded-lg flex items-center justify-center text-xs text-gray-400">
                Google Play Badge
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Phone mockup placeholder */}
              <div className="relative aspect-[9/19] bg-gray-900 rounded-[3rem] border-8 border-gray-800 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-3xl" />
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <img
                    src="/modern-mobile-banking-app-dashboard.jpg"
                    alt="Benchies App Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 -top-8 -right-8 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
