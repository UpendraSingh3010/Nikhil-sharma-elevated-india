import React from 'react';
import { nikhilData } from '../data/nikhilData';
import { Compass, ShieldCheck, Globe, Cpu, ArrowRight } from 'lucide-react';
import { AdaptiveImage } from './AdaptiveImage';

const iconMap = {
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Globe: Globe,
  Cpu: Cpu,
};

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* 1. Subtle Mughal Arch Architectural Blueprint Watermark (SVG) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04] z-0">
        <svg className="w-[900px] h-[900px] text-amber-300" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          {/* Symmetrical Heritage Arch Geometry */}
          <path d="M 10 90 L 10 45 C 10 25, 30 10, 50 5 C 70 10, 90 25, 90 45 L 90 90 Z" />
          <path d="M 18 90 L 18 48 C 18 30, 34 18, 50 14 C 66 18, 82 30, 82 48 L 82 90 Z" />
          <path d="M 26 90 L 26 52 C 26 38, 38 28, 50 24 C 62 28, 74 38, 74 52 L 74 90 Z" />
          <circle cx="50" cy="45" r="15" />
          <circle cx="50" cy="45" r="8" />
          <line x1="50" y1="5" x2="50" y2="90" strokeDasharray="1 1" />
        </svg>
      </div>

      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">
            {nikhilData.about.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {nikhilData.about.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            {nikhilData.about.subheading}
          </p>
        </div>

        {/* Two-Column Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: The Royal Study & Leadership Credential */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 hover:border-amber-400/60 shadow-2xl group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8),0_0_30px_rgba(245,158,11,0.18)]">
              <AdaptiveImage
                srcList={[
                  '/assets/royal Indian heritage.png',
                  '/assets/royal_indian_heritage.png',
                  '/assets/royal-indian-heritage.png',
                  '/assets/heritage-study.png',
                  '/royal Indian heritage.png',
                ]}
                fallbackSrc="/assets/curated/images.unsplash.com/photo-1548013146-72479768bada.w_1000_q_80.jpg"
                alt="The Founder's Heritage Study & Royal Cartography Library"
                className="w-full h-[460px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Quick credentials interactive chip row */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="luxury-box group p-4 rounded-xl cursor-default">
                <span className="text-amber-400 font-semibold block text-sm group-hover:text-amber-300 transition-colors">ETNOW 2026</span>
                <span className="text-slate-300 text-[11px] group-hover:text-white transition-colors">Excellence in Curated Luxury</span>
              </div>
              <div className="luxury-box group p-4 rounded-xl cursor-default">
                <span className="text-amber-400 font-semibold block text-sm group-hover:text-amber-300 transition-colors">Zero Outsourcing</span>
                <span className="text-slate-300 text-[11px] group-hover:text-white transition-colors">100% In-House Fleet &amp; Escorts</span>
              </div>
            </div>
          </div>

          {/* Right: The Narrative Prose with Editorial Drop-Cap & Founder Signature */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 font-light leading-relaxed text-base sm:text-lg">
            {nikhilData.about.paragraphs.map((p, idx) => (
              <p key={idx} className="border-l-2 border-amber-500/30 pl-4 py-1">
                {idx === 0 ? (
                  <>
                    <span className="float-left text-4xl sm:text-5xl font-serif text-amber-400 font-bold leading-none pr-3 pt-1">
                      {p.charAt(0)}
                    </span>
                    {p.slice(1)}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}

            {/* Founder Accreditation Seal & Signature Plate */}
            <div className="pt-4 p-5 rounded-2xl bg-white/[0.03] border border-amber-400/20 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400 block">
                  Personal Assurance of Direct Oversight
                </span>
                <div className="font-serif italic text-xl sm:text-2xl text-amber-200 tracking-wider font-semibold">
                  Nikhil Sharma
                </div>
                <span className="text-[11px] font-mono text-slate-400 block">
                  Founder &amp; Chief Executive · Elevated India
                </span>
              </div>

              {/* Royal Seal SVG Stamp */}
              <div className="w-16 h-16 rounded-full border border-amber-400/40 bg-gradient-to-tr from-amber-600/20 to-amber-400/10 flex items-center justify-center p-1.5 flex-shrink-0 shadow-inner">
                <div className="w-full h-full rounded-full border border-dashed border-amber-300/60 flex flex-col items-center justify-center text-center">
                  <span className="text-[8px] font-mono font-bold text-amber-300 tracking-tighter">ROYAL</span>
                  <span className="text-[7px] font-mono text-amber-400/80">SEAL</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors uppercase tracking-wider"
              >
                <span>Read The Elevated Philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="#curations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors uppercase tracking-wider"
              >
                <span>Explore Curated Collections</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars - Enhanced Interactive Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {nikhilData.about.pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon] || Compass;
            return (
              <div
                key={pillar.id}
                className="luxury-box group p-7 rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black group-hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400/80 block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-amber-400/60 group-hover:text-amber-300 transition-colors">
                  <span>Pillar {pillar.id.replace('pillar-', '0')}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
