"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail } from "lucide-react"

export default function Download() {
  const [email, setEmail] = useState("")
  const [isVisible, setIsVisible] = useState(false)
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
            <div className="h-14 w-40 bg-white/10 rounded-xl flex items-center justify-center text-sm text-gray-400 border border-white/20">
              App Store Badge
            </div>
            <div className="h-14 w-40 bg-white/10 rounded-xl flex items-center justify-center text-sm text-gray-400 border border-white/20">
              Google Play Badge
            </div>
          </div>

          {/* QR Code Placeholder */}
          <div className="mb-12">
            <div className="inline-block p-6 bg-white rounded-2xl shadow-2xl">
              <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=192&width=192"
                  alt="QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-black text-sm font-medium mt-4">Scan to download</p>
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
