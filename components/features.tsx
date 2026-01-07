"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, CreditCard, Send, Smartphone, Bell, DollarSign, TrendingUp, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "Meet Your AI Financial Assistant",
    description:
      "Get personalized insights about your spending, receive investment advice, and ask questions about your finances in natural language.",
    image: "/ai-chat-interface-financial-assistant.jpg",
  },
  {
    icon: CreditCard,
    title: "All Your Cards in One Place",
    description:
      "Add multiple cards, track balances in real-time, view transaction history, and manage your finances effortlessly.",
    image: "/multiple-credit-cards-stack-app-screen.jpg",
  },
  {
    icon: Send,
    title: "Send Money Instantly",
    description:
      "Transfer funds to any wallet instantly with minimal network fees. No traditional bank delays or hidden charges.",
    image: "/money-transfer-send-screen-mobile.jpg",
  },
  {
    icon: Smartphone,
    title: "Tap to Pay Anywhere",
    description: "Shake your device to activate Tap to Pay. Quick, secure, and convenient payments at your fingertips.",
    image: "/nfc-tap-to-pay-contactless-payment.jpg",
  },
  {
    icon: Bell,
    title: "Request Payments from Merchants",
    description: "Restaurants and merchants can send you payment requests. Approve or decline with a single tap.",
    image: "/payment-request-notification-mobile.jpg",
  },
  {
    icon: DollarSign,
    title: "View Balances in Multiple Currencies",
    description: "Switch between ZAR, USD, BTC, ETH, and TRX. Real-time currency conversion at your fingertips.",
    image: "/multi-currency-exchange-dropdown-screen.jpg",
  },
  {
    icon: TrendingUp,
    title: "Track Every Transaction",
    description: "View detailed transaction history, spending analytics, and get insights into your financial habits.",
    image: "/transaction-history-analytics-charts.jpg",
  },
  {
    icon: Shield,
    title: "Blockchain-Powered Security",
    description:
      "Optional blockchain logging for transparent, immutable transaction records. Connect your wallet for enhanced security.",
    image: "/blockchain-network-security-connection.jpg",
  },
]

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof features)[0]
  index: number
}) {
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

  const Icon = feature.icon
  const isEven = index % 2 === 0

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
      style={{ transitionDelay: `${(index % 2) * 100}ms` }}
    >
      <Card className="overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300 h-full group">
        <CardContent className="p-0">
          <div className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-6 md:gap-8`}>
            {/* Image */}
            <div className="w-full md:w-1/2 bg-gray-100 flex items-center justify-center p-8 md:p-12">
              <div className="relative w-full max-w-[280px] aspect-[9/16] bg-white rounded-3xl shadow-lg overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-black text-white rounded-2xl mb-6">
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 text-balance">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-pretty">{feature.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 text-balance">
            Everything You Need in One App
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-pretty">
            Experience the future of decentralized finance with powerful features designed to give you complete control
            over your money.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-8 md:space-y-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
