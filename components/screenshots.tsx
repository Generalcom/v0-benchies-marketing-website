"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const screenshots = [
  {
    title: "Login Screen",
    image: "/modern-login-screen-mobile-app.jpg",
  },
  {
    title: "Dashboard",
    image: "/financial-dashboard-balance-overview.jpg",
  },
  {
    title: "Cards Screen",
    image: "/credit-cards-management-screen.jpg",
  },
  {
    title: "Send Money",
    image: "/send-money-transfer-screen.jpg",
  },
  {
    title: "Receive/Refund",
    image: "/receive-money-refund-screen.jpg",
  },
  {
    title: "AI Chat",
    image: "/ai-assistant-chat-financial-advice.jpg",
  },
  {
    title: "Tap to Pay",
    image: "/placeholder.svg?height=800&width=400",
  },
  {
    title: "Transaction History",
    image: "/placeholder.svg?height=800&width=400",
  },
]

export default function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prevLightbox()
      if (e.key === "ArrowRight") nextLightbox()
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen])

  return (
    <section id="screenshots" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 text-balance">
            See Benchies in Action
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-pretty">
            Explore the intuitive interface and powerful features that make managing your finances effortless.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / 3)}%)`,
              }}
            >
              {screenshots.map((screenshot, index) => (
                <div key={index} className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33.333%] px-4">
                  <button onClick={() => openLightbox(index)} className="block w-full group cursor-pointer">
                    <div className="relative aspect-[9/16] max-w-[280px] mx-auto bg-gray-900 rounded-3xl border-8 border-gray-800 shadow-xl overflow-hidden transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={screenshot.image || "/placeholder.svg"}
                        alt={screenshot.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-center mt-4 font-semibold text-black">{screenshot.title}</p>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 rounded-full shadow-lg"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 rounded-full shadow-lg"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-black w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full"
            aria-label="Close lightbox"
          >
            <X className="w-8 h-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={prevLightbox}
            className="absolute left-4 text-white hover:bg-white/10 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </Button>

          <div className="max-w-md w-full">
            <div className="relative aspect-[9/16] bg-gray-900 rounded-3xl border-8 border-gray-800 overflow-hidden">
              <img
                src={screenshots[lightboxIndex].image || "/placeholder.svg"}
                alt={screenshots[lightboxIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center mt-6 text-xl font-semibold text-white">{screenshots[lightboxIndex].title}</p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={nextLightbox}
            className="absolute right-4 text-white hover:bg-white/10 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </Button>
        </div>
      )}
    </section>
  )
}
