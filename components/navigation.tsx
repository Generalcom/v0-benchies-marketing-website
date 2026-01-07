"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/icon.svg"
              alt="Benchies Logo"
              className="h-8 md:h-10 w-auto brightness-0 invert"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("screenshots")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Screenshots
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors"
            >
              Download
            </button>
            <Button onClick={() => scrollToSection("download")} className="bg-white text-black hover:bg-gray-100">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-base font-medium text-white hover:text-gray-300 transition-colors py-2"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-left text-base font-medium text-white hover:text-gray-300 transition-colors py-2"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("screenshots")}
              className="text-left text-base font-medium text-white hover:text-gray-300 transition-colors py-2"
            >
              Screenshots
            </button>
            <button
              onClick={() => scrollToSection("download")}
              className="text-left text-base font-medium text-white hover:text-gray-300 transition-colors py-2"
            >
              Download
            </button>
            <Button
              onClick={() => scrollToSection("download")}
              className="bg-white text-black hover:bg-gray-100 w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
