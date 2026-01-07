"use client"

import { useState, useEffect } from "react"

const launchDate = new Date("2026-06-06T00:00:00").getTime()

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = launchDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const interval = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-white text-sm md:text-base font-medium">Official Launch</p>
      <div className="flex gap-3 md:gap-6">
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{timeLeft.days}</div>
          <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">Days</div>
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{String(timeLeft.hours).padStart(2, "0")}</div>
          <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">Hours</div>
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{String(timeLeft.minutes).padStart(2, "0")}</div>
          <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">Minutes</div>
        </div>
        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">:</div>
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">{String(timeLeft.seconds).padStart(2, "0")}</div>
          <div className="text-xs md:text-sm text-white/80 uppercase tracking-wide">Seconds</div>
        </div>
      </div>
      <p className="text-white/80 text-sm md:text-base">June 6, 2026</p>
    </div>
  )
}
