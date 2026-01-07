import Hero from "@/components/hero"
import Features from "@/components/features"
import HowItWorks from "@/components/how-it-works"
import Screenshots from "@/components/screenshots"
import VideoDemo from "@/components/video-demo"
import Download from "@/components/download"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Features />
      <HowItWorks />
      <Screenshots />
      <VideoDemo />
      <Download />
      <Footer />
    </main>
  )
}
