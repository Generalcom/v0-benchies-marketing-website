"use client"

import { useState, useRef, useEffect } from "react"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
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

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">See Benchies in Action</h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed text-pretty">
            Watch how easy it is to manage your finances, send money, and get AI insights with Benchies.
          </p>
        </div>

        {/* Video Player */}
        <div
          className={`relative max-w-5xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder video - user will replace with actual demo */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/placeholder.svg?height=1080&width=1920"
              controls={isPlaying}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/placeholder-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Play Button Overlay */}
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity hover:bg-black/40">
                <Button
                  size="lg"
                  onClick={handlePlay}
                  className="w-20 h-20 rounded-full bg-white hover:bg-gray-100 text-black shadow-2xl group"
                >
                  <Play className="w-8 h-8 ml-1 group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            )}
          </div>

          {/* Decorative elements */}
          <div className="absolute -z-10 -top-8 -right-8 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute -z-10 -bottom-8 -left-8 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  )
}
