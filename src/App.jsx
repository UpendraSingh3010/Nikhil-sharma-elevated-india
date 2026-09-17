import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { JourneyFlow } from './components/JourneyFlow';
import { CurationsAndVentures } from './components/CurationsAndVentures';
import { PhilosophySection } from './components/PhilosophySection';
import { GlobalFootprint } from './components/GlobalFootprint';
import { StoriesSection } from './components/StoriesSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen ${
        isDark
          ? 'bg-[#06080E] text-slate-100'
          : 'bg-[#FBFBFA] text-slate-900'
      } bg-ambient-luxury font-sans selection:bg-amber-400 selection:text-black antialiased relative overflow-x-hidden transition-colors duration-500`}
    >
      {/* Subtle tactile film grain noise for royal matte editorial feel */}
      <div
        className={`fixed inset-0 bg-noise ${
          isDark ? 'opacity-25' : 'opacity-[0.14]'
        } pointer-events-none z-[1]`}
      />

      {/* Modern luminous background mesh orbs for light mode */}
      {!isDark && (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Vibrant Golden Saffron Sun Aura */}
          <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-amber-300/25 via-amber-200/20 to-transparent blur-[120px]" />
          {/* Modern Lapis / Azure Ambient Accent */}
          <div className="absolute top-1/3 -right-48 w-[550px] h-[550px] rounded-full bg-gradient-to-bl from-sky-200/35 via-indigo-100/30 to-transparent blur-[140px]" />
          {/* Emerald Oasis Glow */}
          <div className="absolute top-2/3 -left-48 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-emerald-100/30 via-amber-100/25 to-transparent blur-[130px]" />
          {/* Bottom Warm Hearth Glow */}
          <div className="absolute bottom-10 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-t from-amber-200/25 to-transparent blur-[140px]" />
        </div>
      )}

      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Sections with z-10 relative positioning */}
      <main className="relative z-10">
        {/* 1. Hero Showcase with Founder Portrait, Recognition & Metrics */}
        <Hero />

        {/* 2. About Section: The Mind Behind the Journey & 4 Core Pillars */}
        <AboutSection />

        {/* 3. The Bespoke Journey Flow: 4 Cinematic Movements */}
        <JourneyFlow />

        {/* 4. Curations & The Strategic Ecosystem (Elevated India, Fabulous Media, NS Transform) */}
        <CurationsAndVentures />

        {/* 5. The Elevated Philosophy: 3 Tenets & The Comparison Standard */}
        <PhilosophySection />

        {/* 6. Global Footprint & Connoisseur Relations (ETNOW Award 2026 Spotlight) */}
        <GlobalFootprint />

        {/* 7. Traveler Narratives & Real Experiences */}
        <StoriesSection />

        {/* 8. Cinematic Field Notes Gallery with Lightbox */}
        <GallerySection />

        {/* 9. Private Consultation & Direct Founder Desk */}
        <ContactSection />
      </main>

      {/* Executive Footer */}
      <Footer />
    </div>
  );
}

