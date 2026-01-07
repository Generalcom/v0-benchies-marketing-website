"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"
import QRCode from "qrcode"

export default function Download() {
  const [email, setEmail] = useState("")
  const [isVisible, setIsVisible] = useState(false)
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("")
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Generate QR code with "Feature coming soon" text
    const generateQRCode = async () => {
      try {
        const url = await QRCode.toDataURL("Feature coming soon", {
          width: 200,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#FFFFFF",
          },
        })
        setQrCodeUrl(url)
      } catch (error) {
        console.error("Error generating QR code:", error)
      }
    }

    generateQRCode()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle email submission for updates/beta
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <section
      id="download"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12 text-pretty">
            Download Benchies today and experience the future of decentralized finance.
          </p>

          {/* Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100 text-base font-semibold group">
              Download for iOS
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black text-base font-semibold bg-transparent"
            >
              Download for Android
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="#"
              className="inline-block hover:opacity-80 transition-opacity"
              aria-label="Download on the App Store"
            >
              <img
                src="/app-store-badge.svg"
                alt="Download on the App Store"
                className="h-12 w-auto"
              />
            </a>
            <a
              href="#"
              className="inline-block hover:opacity-80 transition-opacity"
              aria-label="Get it on Google Play"
            >
              <img
                src="/google-play-badge.svg"
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* QR Code */}
          <div className="mb-12">
            <div className="inline-block p-6 bg-white rounded-2xl shadow-2xl">
              <div className="w-48 h-48 bg-white rounded-lg flex items-center justify-center">
                {qrCodeUrl ? (
                  <img
                    src={qrCodeUrl}
                    alt="QR Code - Feature coming soon"
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-gray-400 text-sm">Loading QR Code...</div>
                  </div>
                )}
              </div>
              <p className="text-black text-sm font-medium mt-4 text-center">Scan to download</p>
            </div>
          </div>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            <p className="text-gray-400 mb-4">Get notified about updates and new features</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-500"
                  required
                />
              </div>
              <Button type="submit" className="bg-white text-black hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
