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
      className="interactive-section relative h-screen min-h-[580px] max-h-[100vh] lg:max-h-[820px] overflow-hidden text-white pt-16 sm:pt-20 pb-0 flex flex-col justify-between bg-[#050508]"
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
          className="w-full h-full object-cover object-center filter brightness-[0.78] contrast-[1.08] transition-all duration-1000 scale-100"
        />
      </div>

      {/* 2. Focused Contrast Scrim (Ensures 100% crisp text readability while keeping the Amber Fort visible) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050508]/96 via-[#050508]/82 via-45% to-black/25 pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-24 z-[1] bg-gradient-to-b from-[#050508]/75 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-28 z-[1] bg-gradient-to-t from-[#050508] via-[#050508]/70 to-transparent pointer-events-none" />

      {/* 3. Floating Ethereal Golden Dust & Constellation Orbs */}
      <div className="absolute inset-0 z-[2] overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#C9A84C]/70 blur-[1px] animate-float-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-[#E6B84A]/60 blur-[1px] animate-float-particle" style={{ animationDelay: '2.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-[#C9A84C]/50 blur-[1px] animate-float-particle" style={{ animationDelay: '4.2s' }} />
        <div className="absolute top-1/2 left-1/12 w-1 h-1 rounded-full bg-[#C9A84C] animate-constellation" />
      </div>

      {/* 4. Celestial Route Geometry (Hairline overlay) */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden lg:block opacity-25">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1600 900" preserveAspectRatio="none">
          <path
            d="M 120 700 C 360 480 620 320 880 350 C 1080 380 1220 590 1480 520"
            stroke="rgba(201,168,76,0.3)"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="6 8"
          />
          <circle cx="120" cy="700" r="4" fill="rgba(201,168,76,0.9)" />
          <circle cx="620" cy="320" r="5" fill="rgba(230,184,74,0.85)" />
          <circle cx="880" cy="350" r="6" fill="rgba(201,168,76,0.95)" />
          <circle cx="1480" cy="520" r="5" fill="rgba(201,168,76,0.85)" />
        </svg>
      </div>

      {/* 5. Main Hero Content (Vertically centered, fits in 1 screen) */}
      <div className="relative z-[4] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex flex-col justify-center py-2 sm:py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Monumental Identity & Vision (7 cols) */}
          <div className="lg:col-span-7 relative space-y-3.5 sm:space-y-4 text-left">
            {/* Frosted Glass Backdrop Blur Shield behind content */}
            <div className="absolute -inset-4 sm:-inset-5 bg-[#060812]/75 backdrop-blur-md rounded-3xl -z-10 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.6)] pointer-events-none" />

            {/* Headline on One Single Line with High-Contrast Drop Shadow */}
            <div>
              <h1 className="font-heading font-black leading-[1.02] tracking-[-0.03em] text-[clamp(2.2rem,4.6vw,4.4rem)] select-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">
                <span className="text-gradient-gold-royal drop-shadow-[0_2px_12px_rgba(201,168,76,0.5)]">Nikhil </span>
                <span className="text-white drop-shadow-[0_4px_16px_rgba(0,0,0,1)]">Sharma</span>
              </h1>

              {/* Tag Badges Row (Solid high-contrast glass backing) */}
              <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[11px]">
                <span className="hero-tag-pill rounded-full border border-[#C9A84C]/60 bg-[#0B0F1C]/95 px-3.5 py-1 font-mono font-semibold uppercase tracking-wider text-amber-200 shadow-md">
                  Founder &amp; CEO
                </span>
                <span className="hidden sm:inline-block h-px w-3 bg-[#C9A84C]/60" />
                <span className="hero-tag-pill rounded-full border border-white/20 bg-[#0B0F1C]/90 px-3.5 py-1 font-mono font-semibold uppercase tracking-wider text-slate-100 shadow-md">
                  Luxury Travel Architect
                </span>
                <span className="hidden sm:inline-block h-px w-3 bg-[#C9A84C]/60" />
                <span className="hero-tag-pill rounded-full border border-white/20 bg-[#0B0F1C]/90 px-3.5 py-1 font-mono font-semibold uppercase tracking-wider text-slate-100 shadow-md">
                  Proprietary Ground Sovereign
                </span>
              </div>
            </div>

            {/* Editorial Lead Paragraph with Crisp Readability */}
            <p className="text-xs sm:text-sm lg:text-[15px] text-white font-normal leading-relaxed max-w-xl font-sans drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              Bridging two decades of enterprise mastery with India’s rarest heritage corridors,{' '}
              <strong className="text-white font-semibold underline decoration-[#C9A84C]/60 underline-offset-4">Nikhil Sharma</strong> architects private expeditions of quiet
              access, living royalty, and sovereign ground control across India and Nepal.
            </p>

            {/* Dual CTAs with Vivid Contrast */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => scrollTo('#contact')}
                className="relative group overflow-hidden inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D8B44A] via-[#F3CE65] to-[#C9A84C] hover:from-[#F3CE65] hover:to-[#D8B44A] px-6 py-2.5 text-xs sm:text-sm font-bold text-black shadow-xl shadow-[#C9A84C]/35 hover:shadow-[#C9A84C]/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <Compass className="w-4 h-4 text-black stroke-[2.5]" />
                <span>Begin Your Journey</span>
              </button>

              <button
                onClick={() => scrollTo('#about')}
                className="hero-secondary-btn relative overflow-hidden inline-flex items-center gap-2 rounded-full border border-white/30 bg-[#0A0D18]/90 hover:bg-[#141B2D] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-md transition-all duration-200 hover:border-[#C9A84C]/60 cursor-pointer shadow-lg"
              >
                <span>Discover His Story</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E6B84A]" />
              </button>
            </div>

            {/* Accreditations Micro-Chip */}
            <div className="pt-1 flex items-center gap-2 text-[11px] text-amber-300 font-mono font-medium drop-shadow-md">
              <Award className="w-3.5 h-3.5 text-[#E6B84A] flex-shrink-0" />
              <span>ETNOW Conclave Award 2026 Winner · Excellence in Curated Luxury Travel</span>
            </div>

          </div>

          {/* Right Column: Interactive Luxury Editorial Portrait Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[370px] group">
              
              {/* Outer Golden Backlight Glow with hover intensity */}
              <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#C9A84C]/40 via-[#E6B84A]/25 to-amber-500/15 rounded-3xl blur-xl -z-10 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:blur-2xl" />

              {/* Luxury Frame Container with smooth hover lift & glow */}
              <div className="relative rounded-2xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_25px_rgba(201,168,76,0.2)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(201,168,76,0.35)] border-2 border-[#C9A84C]/45 hover:border-[#E6B84A] bg-[#0A0D18]">
                
                {/* Etched Gold Corner Brackets with hover scale */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#C9A84C] pointer-events-none z-20 transition-all duration-300 group-hover:scale-125 group-hover:border-[#F3CE65]" />
                <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#C9A84C] pointer-events-none z-20 transition-all duration-300 group-hover:scale-125 group-hover:border-[#F3CE65]" />
                <div className="absolute bottom-14 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#C9A84C] pointer-events-none z-20 transition-all duration-300 group-hover:scale-125 group-hover:border-[#F3CE65]" />
                <div className="absolute bottom-14 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#C9A84C] pointer-events-none z-20 transition-all duration-300 group-hover:scale-125 group-hover:border-[#F3CE65]" />

                {/* Editorial Portrait Container with Light Shimmer Sweep */}
                <div className="relative h-[250px] sm:h-[280px] lg:h-[300px] overflow-hidden bg-[#0A0D18]">
                  <img
                    src="/assets/nikhil-sir-photo.jpeg"
                    alt={nikhilData.founder.name}
                    className="w-full h-full object-cover object-top transition-all duration-700 ease-out group-hover:scale-108 group-hover:brightness-115 filter brightness-[1.18] contrast-[1.08] saturate-[1.08]"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/nikhil_sharma.jpeg";
                    }}
                  />

                  {/* Diagonal Light Shimmer Beam Effect on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none z-10" />
                  
                  {/* Subtle bottom gradient where image meets plaque */}
                  <div className="absolute bottom-0 inset-x-0 h-10 bg-gradient-to-t from-[#080C18]/90 to-transparent pointer-events-none" />
                  
                  {/* High-Contrast Royal Seal Badge Top-Right */}
                  <div className="absolute top-3 right-3 bg-[#060812]/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C9A84C]/70 flex items-center gap-1.5 text-[11px] text-amber-200 shadow-xl z-20 font-mono font-semibold">
                    <Sparkles className="w-3.5 h-3.5 text-[#E6B84A]" />
                    <span>Royal Heritage Standard</span>
                  </div>

                  {/* High-Contrast Location Badge Bottom-Left */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] text-white bg-[#060812]/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#C9A84C]/60 z-20 font-mono font-medium shadow-xl">
                    <MapPin className="w-3.5 h-3.5 text-[#E6B84A]" />
                    <span>New Delhi · Jaipur · Gurugram</span>
                  </div>
                </div>

                {/* Card Footer Plaque (Bold, High-Contrast & Clearly Readable) */}
                <div className="p-3.5 sm:p-4 bg-[#080C18] border-t-2 border-[#C9A84C]/50 flex items-center justify-between z-20 relative">
                  <div>
                    <h3 className="font-heading text-base sm:text-lg font-black text-white group-hover:text-amber-200 transition-colors drop-shadow-md">
                      {nikhilData.founder.name}
                    </h3>
                    <p className="text-xs text-[#E6B84A] font-mono font-semibold tracking-wide">
                      Founder &amp; Chief Executive
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-200 uppercase block tracking-wider font-bold">Direct Desk</span>
                    <span className="text-xs text-emerald-300 flex items-center gap-1.5 justify-end font-mono font-bold drop-shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Active
                    </span>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* 6. Integrated Compact Metrics Shelf (Fits seamlessly in 1 screen) */}
        <div className="mt-4 pt-3 border-t border-[#C9A84C]/20 grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3">
          {nikhilData.metrics.map((m, idx) => (
            <div
              key={idx}
              className="glass-obsidian p-2.5 sm:p-3 rounded-xl flex items-center justify-between border border-[#C9A84C]/20 hover:border-[#C9A84C]/40 transition-all"
            >
              <div className="flex items-baseline gap-1">
                <span className="text-xl sm:text-2xl font-heading font-black text-gradient-gold-royal leading-none inline-block">
                  {m.value}
                </span>
                <span className="text-[10px] font-mono text-[#E6B84A] font-semibold">
                  {m.suffix}
                </span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 font-medium">
                {m.label}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* 7. Slim Luxury Marquee Ticker Strip (Anchored at the bottom edge) */}
      <div className="relative z-10 w-full overflow-hidden border-t border-[#C9A84C]/25 bg-[#060810]/95 backdrop-blur-md py-2 select-none">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center mx-5">
              <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.22em] text-amber-200/90">
                {item}
              </span>
              <span className="inline-block w-1 h-1 mx-5 rounded-full bg-[#C9A84C]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
