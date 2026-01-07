"use client"

import { Analytics } from "@vercel/analytics/next"

export default function AnalyticsWrapper() {
  // Only render Analytics if we're on Vercel (not GitLab Pages)
  if (process.env.NEXT_PUBLIC_VERCEL_ENV) {
    return <Analytics />
  }
  return null
}

