'use client'

import { Header } from "./components/header"
import { Navigation } from "./components/navigation"
import { BreakingNews } from "./components/breaking-news"
import { Profile } from "./components/profile"
import { TechnologicalAdventure } from "./components/technological-adventure"
import { TechSkills } from "./components/tech-skills"
import { CalendlySection } from "./components/calendly-section"
import { SoftSkills } from "./components/soft-skills"
import { WeatherWidget } from "./components/weather-widget"
import { ClassifiedAd } from "./components/classified-ad"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-old-paper text-gray-900 font-serif relative overflow-hidden">
      {/* Vintage paper edges effect */}
      <div className="paper-edge-top"></div>
      <div className="paper-edge-bottom"></div>
      <div className="paper-edge-left"></div>
      <div className="paper-edge-right"></div>

      {/* Fold line */}
      <div className="fold-line"></div>

      <Header />
      <Navigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <BreakingNews />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Left Column - 8 units */}
          <div className="md:col-span-8 space-y-6">
            <Profile />
            <TechnologicalAdventure />
            <TechSkills />
          </div>

          {/* Right Column - 4 units */}
          <div className="md:col-span-4 space-y-6">
            <CalendlySection />
            <SoftSkills />
            <WeatherWidget />
            <ClassifiedAd />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
