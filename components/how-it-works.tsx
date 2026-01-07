"use client"

import { useEffect, useRef, useState } from "react"
import { UserPlus, CreditCard, Zap } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    number: "01",
    title: "Sign Up",
    description: "Create your account in seconds with email and password",
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Add Cards",
    description: "Link your cards and start managing your finances",
  },
  {
    icon: Zap,
    number: "03",
    title: "Start Using",
    description: "Send money, track expenses, and chat with AI - all in one app",
  },
]

function StepCard({ step, index }: { step: (typeof steps)[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const Icon = step.icon

  return (
    <div
      ref={cardRef}
      className={`relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Connector line (hidden on mobile, visible on desktop after first step) */}
      {index < steps.length - 1 && (
        <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gray-200 z-0" />
      )}

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon Circle */}
        <div className="w-32 h-32 bg-black text-white rounded-full flex items-center justify-center mb-6 shadow-lg relative">
          <Icon className="w-12 h-12" />
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold shadow-md">
            {step.number}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">{step.title}</h3>
        <p className="text-gray-600 max-w-xs leading-relaxed">{step.description}</p>
      </div>
    </div>
  )
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 text-balance">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-pretty">
            Join thousands of users who have already taken control of their financial future with Benchies.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
