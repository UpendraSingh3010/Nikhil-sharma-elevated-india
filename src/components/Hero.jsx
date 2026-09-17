import React, { useState } from 'react';
import { nikhilData } from '../data/nikhilData';
import { Award, Compass, ArrowRight, Sparkles, MapPin, ShieldCheck, ChevronDown } from 'lucide-react';
import { AdaptiveImage } from './AdaptiveImage';

export const Hero = () => {
  const [pointer, setPointer] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    const y = Math.round(((e.clientY - rect.top) / rect.height) * 100);
    setPointer({ x, y });
  };

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const marqueeItems = [
    "SOVEREIGN GROUND INFRASTRUCTURE",
    "PRIVATE PALACE ACCESS",
    "BESPOKE HIMALAYAN & RAJASTHAN EXPEDITIONS",
    "ROYAL CITADEL PRIVILEGE",
    "100% IN-HOUSE CHAUFFEURED FLEET",
    "ZERO MIDDLEMEN",
    "24/7 MISSION CONTROL DESK",
    "DISCREET CULTURAL DIPLOMACY",
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        '--pointer-x': `${pointer.x}%`,
        '--pointer-y': `${pointer.y}%`,
      }}
      className="interactive-section relative min-h-screen overflow-hidden text-white pt-24 sm:pt-28 pb-0 flex flex-col justify-between bg-[#050508]"
    >
      {/* 1. Cinematic Background Image (Royal Rajasthan Twilight Citadel Courtyard) */}
      <div className="absolute inset-0 z-0">
        <AdaptiveImage
          srcList={[
            '/assets/twilight shot.png',
            '/assets/twilight_shot.png',
            '/assets/twilight-shot.png',
            '/assets/hero-twilight.png',
            '/twilight shot.png',
            '/twilight_shot.png',
          ]}
          fallbackSrc="/assets/curated/images.unsplash.com/photo-1599661046289-e31897846e41.w_1000_q_80.jpg"
          alt="Royal Citadel Twilight Courtyard"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.65] contrast-[1.15] transition-opacity duration-1000"
        />
      </div>

      {/* 2. Layered Matte Vignette Gradient Overlay */}
      <div className="hero-vignette-radial absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,rgba(5,5,8,0.45)_0%,rgba(5,5,8,0.85)_75%,#050508_100%)] pointer-events-none" />
      <div className="hero-vignette-linear absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,rgba(5,5,8,0.50)_0%,rgba(5,5,8,0.70)_45%,#050508_100%)] pointer-events-none" />

      {/* 3. Floating Ethereal Golden Dust & Constellation Orbs */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#C9A84C]/70 blur-[1px] animate-float-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-[#E6B84A]/60 blur-[1px] animate-float-particle" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#C9A84C]/50 blur-[1px] animate-float-particle" style={{ animationDelay: '4.2s' }} />
        <div className="absolute top-2/3 right-1/6 w-2 h-2 rounded-full bg-[#B8C4D0]/50 blur-[1px] animate-float-particle" style={{ animationDelay: '1.2s' }} />
        <div className="absolute top-1/2 left-1/12 w-1 h-1 rounded-full bg-[#C9A84C] animate-constellation" />
        <div className="absolute top-1/5 right-1/10 w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-constellation" style={{ animationDelay: '1.8s' }} />
      </div>

      {/* 4. Atmospheric Hero Fog & Spotlight */}
      <div className="hero-fog z-[2] pointer-events-none" />
      <div className="hero-spotlight z-[2] pointer-events-none" />

      {/* 5. Tactile Matte Noise Texture */}
      <div className="absolute inset-0 bg-noise opacity-30 z-[3] pointer-events-none" />

      {/* 6. Expedition Route Celestial Geometry (SVG) */}
      <div className="absolute inset-0 z-[3] pointer-events-none hidden lg:block opacity-30">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="none">
          <path
            d="M 120 700 C 360 480 620 320 880 350 C 1080 380 1220 590 1480 520"
            stroke="rgba(201,168,76,0.3)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6 8"
          />
          <circle cx="120" cy="700" r="5" fill="rgba(201,168,76,0.9)" />
          <circle cx="620" cy="320" r="6" fill="rgba(230,184,74,0.85)" />
          <circle cx="880" cy="350" r="7" fill="rgba(201,168,76,0.95)" />
          <circle cx="1480" cy="520" r="6" fill="rgba(201,168,76,0.85)" />
        </svg>
      </div>

      {/* 7. Main Hero Content Container */}
      <div className="relative z-[4] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 pb-8 flex-grow flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Monumental Identity & Vision (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Monumental Display Headline */}
            <div>
              <h1 className="font-heading font-black leading-[0.88] tracking-[-0.04em] text-[clamp(3.8rem,9.2vw,8.5rem)] select-none">
                <span className="text-gradient-gold-royal">Nikhil</span>
                <br />
                <span className="text-white dark:text-white light:text-slate-900 drop-shadow-sm">Sharma</span>
              </h1>

              {/* Tag Badges Row connected with hairline dividers */}
              <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="hero-tag-pill rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#FDF6E2] backdrop-blur-md shadow-sm">
                  Founder &amp; CEO
                </span>
                <span className="hidden sm:inline-block h-px w-4 bg-[#C9A84C]/50" />
                <span className="hero-tag-pill rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 backdrop-blur-md">
                  Luxury Travel Architect
                </span>
                <span className="hidden sm:inline-block h-px w-4 bg-[#C9A84C]/50" />
                <span className="hero-tag-pill rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 backdrop-blur-md">
                  Proprietary Ground Sovereign
                </span>
              </div>
            </div>

            {/* Editorial Lead Paragraph */}
            <p className="text-base sm:text-lg text-slate-200/90 font-light leading-relaxed max-w-2xl font-sans">
              Bridging two decades of enterprise mastery with India’s rarest heritage corridors,{' '}
              <span className="text-white font-medium">Nikhil Sharma</span> architects private expeditions of quiet
              access, living royalty, and sovereign ground control across India and Nepal.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('#contact')}
                className="relative group overflow-hidden inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#C9A84C] via-[#E6B84A] to-[#C9A84C] px-8 py-4 text-sm sm:text-base font-semibold text-black shadow-xl shadow-[#C9A84C]/25 hover:shadow-[#C9A84C]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <Compass className="w-5 h-5 text-black" />
                <span>Begin Your Journey</span>
              </button>

              <button
                onClick={() => scrollTo('#about')}
                className="hero-secondary-btn relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-8 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-[#C9A84C]/50"
              >
                <span>Discover His Story</span>
                <ArrowRight className="w-4 h-4 text-[#E6B84A]" />
              </button>
            </div>

            {/* Accreditations Chip */}
            <div className="pt-2 flex items-center gap-2 text-xs text-[#E6B84A]/90 font-mono">
              <Award className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
              <span>ETNOW Conclave Award 2026 Winner · Excellence in Curated Luxury Travel</span>
            </div>

          </div>

          {/* Right Column: Refined Editorial Portrait Presentation (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Golden Aura Glow */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-[#C9A84C]/30 via-[#E6B84A]/15 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Luxury Frame Container */}
              <div className="relative luxury-box rounded-2xl overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                
                {/* Etched Gold Corner Brackets */}
                <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#C9A84C] pointer-events-none z-20 group-hover:border-[#E6B84A] transition-colors" />
                <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#C9A84C] pointer-events-none z-20 group-hover:border-[#E6B84A] transition-colors" />
                <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#C9A84C] pointer-events-none z-20 group-hover:border-[#E6B84A] transition-colors" />
                <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#C9A84C] pointer-events-none z-20 group-hover:border-[#E6B84A] transition-colors" />

                {/* Editorial Portrait Container with Nikhil Sir Photo */}
                <div className="relative h-[390px] sm:h-[430px] overflow-hidden bg-[#050508]">
                  <img
                    src="/assets/nikhil-sir-photo.jpeg"
                    alt={nikhilData.founder.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/nikhil_sharma.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#080B12] via-transparent to-black/20 pointer-events-none" />
                  
                  {/* Royal Seal Emblem Top-Right */}
                  <div className="absolute top-4 right-4 bg-[#050508]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A84C]/40 flex items-center gap-2 text-xs text-amber-200 shadow-lg z-10">
                    <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
                    <span className="font-mono text-[10px] uppercase tracking-wider">Royal Heritage Standard</span>
                  </div>

                  {/* Location badge bottom-left */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-slate-300 bg-[#050508]/85 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 z-10">
                    <MapPin className="w-3 h-3 text-[#C9A84C]" />
                    <span className="font-mono text-[11px]">New Delhi · Jaipur · Gurugram</span>
                  </div>
                </div>

                {/* Card Footer Plaque */}
                <div className="portrait-footer-plaque p-5 sm:p-6 space-y-3.5 bg-[#080B12]/98 border-t border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                        {nikhilData.founder.name}
                      </h3>
                      <p className="text-xs text-[#E6B84A] font-sans tracking-wide">
                        Visionary &amp; Serial Entrepreneur
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">Direct Access</span>
                      <span className="text-xs text-emerald-400 flex items-center gap-1 justify-end font-mono">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                        Executive Desk
                      </span>
                    </div>
                  </div>

                  {/* Authentic Founder Quote */}
                  <p className="text-xs sm:text-sm text-slate-300 italic border-l-2 border-[#C9A84C] pl-3 leading-relaxed">
                    &ldquo;{nikhilData.philosophy.quote}&rdquo;
                  </p>

                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#C9A84C]" />
                      100% In-House Fleet
                    </span>
                    <span className="text-[#C9A84C] font-semibold">Zero Middlemen</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 8. Bottom Metrics: Interactive Boxes with Lift & Hover Light Glow */}
        <div className="mt-12 pt-8 border-t border-[#C9A84C]/20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {nikhilData.metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-obsidian glass-obsidian-hover group p-5 sm:p-6 rounded-2xl flex flex-col justify-between cursor-default"
            >
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-gradient-gold-royal leading-none group-hover:scale-105 transition-transform duration-300 origin-left inline-block">
                  {m.value}
                </span>
                <span className="text-xs font-mono text-[#E6B84A] uppercase tracking-widest font-semibold">
                  {m.suffix}
                </span>
              </div>
              <span className="mt-3 text-xs uppercase tracking-[0.2em] text-slate-400 font-sans font-medium group-hover:text-slate-200 transition-colors">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll down indicator */}
        <div className="pt-6 flex justify-center">
          <button
            onClick={() => scrollTo('#about')}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 hover:border-[#C9A84C]/40 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors duration-200"
          >
            <span>SCROLL TO DISCOVER</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#C9A84C] animate-bounce" />
          </button>
        </div>

      </div>

      {/* 9. Luxury Marquee Ticker Strip (Directly below stats, mirroring Manu's layout) */}
      <div className="relative z-10 w-full overflow-hidden border-y border-[#C9A84C]/25 bg-[#080B12]/95 backdrop-blur-md py-3.5 select-none">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center mx-6">
              <span className="text-xs sm:text-sm font-heading font-semibold uppercase tracking-[0.24em] text-amber-200/90 dark:text-amber-200/90 light:text-amber-900">
                {item}
              </span>
              <span className="inline-block w-1.5 h-1.5 mx-6 rounded-full bg-[#C9A84C]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

