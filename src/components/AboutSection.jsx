import React from 'react';
import { nikhilData } from '../data/nikhilData';
import { Compass, ShieldCheck, Globe, Cpu, ArrowRight, Award, Sparkles } from 'lucide-react';
import { AdaptiveImage } from './AdaptiveImage';

const iconMap = {
  Compass: Compass,
  ShieldCheck: ShieldCheck,
  Globe: Globe,
  Cpu: Cpu,
};

const pillarTags = [
  "01 / ARCHITECT",
  "02 / SOVEREIGN FLEET",
  "03 / PRIVATE ACCESS",
  "04 / DISCRETION",
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* 1. Subtle Mughal Arch Architectural Blueprint Watermark (SVG) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] dark:opacity-[0.03] light:opacity-[0.05] z-0">
        <svg className="w-[950px] h-[950px] text-[#C9A84C]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M 10 90 L 10 45 C 10 25, 30 10, 50 5 C 70 10, 90 25, 90 45 L 90 90 Z" />
          <path d="M 18 90 L 18 48 C 18 30, 34 18, 50 14 C 66 18, 82 30, 82 48 L 82 90 Z" />
          <path d="M 26 90 L 26 52 C 26 38, 38 28, 50 24 C 62 28, 74 38, 74 52 L 74 90 Z" />
          <circle cx="50" cy="45" r="15" />
          <circle cx="50" cy="45" r="8" />
          <line x1="50" y1="5" x2="50" y2="90" strokeDasharray="1 1" />
        </svg>
      </div>

      {/* Ambient lighting glow */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 right-0 w-80 h-80 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C9A84C]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A84C] font-semibold">
              THE STORY BEHIND NIKHIL SHARMA
            </span>
            <span className="w-5 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white dark:text-white light:text-slate-900 tracking-tight">
            {nikhilData.about.heading}
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base font-light">
            {nikhilData.about.subheading}
          </p>
        </div>

        {/* Two-Column Editorial Narrative (Split Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Origin Story Card & Leadership Credential */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#C9A84C]/30 hover:border-[#C9A84C]/60 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group transition-all duration-500 hover:-translate-y-1.5">
              
              {/* Corner Etched Gold Brackets */}
              <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#C9A84C] pointer-events-none z-20" />
              <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#C9A84C] pointer-events-none z-20" />
              <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#C9A84C] pointer-events-none z-20" />
              <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#C9A84C] pointer-events-none z-20" />

              {/* Origin Story Badge (as in Manu's site) */}
              <div className="absolute top-4 right-4 z-20 bg-[#050508]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A84C]/40 flex items-center gap-1.5 shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-amber-200 font-semibold">
                  ORIGIN STORY
                </span>
              </div>

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
                className="w-full h-[440px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.75] contrast-[1.1]"
              />

              <div className="absolute bottom-4 left-4 right-4 bg-[#050508]/90 backdrop-blur-md p-4 rounded-xl border border-white/10 z-10">
                <p className="text-xs font-mono text-[#E6B84A] uppercase tracking-wider mb-1">
                  Heritage Cartography &amp; Sovereign Control
                </p>
                <p className="text-xs text-slate-200">
                  Direct private agreements across Rajasthan, Ladakh, and Nepal corridors.
                </p>
              </div>
            </div>

            {/* Quick credentials interactive chip row */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="glass-obsidian glass-obsidian-hover group p-4 rounded-xl cursor-default">
                <div className="flex items-center gap-1.5 text-[#C9A84C] font-semibold text-sm mb-1">
                  <Award className="w-4 h-4" />
                  <span>ETNOW 2026</span>
                </div>
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] group-hover:text-white transition-colors">
                  Excellence in Curated Luxury Expeditions
                </span>
              </div>
              <div className="glass-obsidian glass-obsidian-hover group p-4 rounded-xl cursor-default">
                <div className="flex items-center gap-1.5 text-[#C9A84C] font-semibold text-sm mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Zero Outsourcing</span>
                </div>
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-[11px] group-hover:text-white transition-colors">
                  100% In-House Chauffeured Fleet &amp; Escorts
                </span>
              </div>
            </div>
          </div>

          {/* Right: The Narrative Prose with Editorial Drop-Cap & Founder Signature */}
          <div className="lg:col-span-6 space-y-6 text-slate-300 dark:text-slate-300 light:text-slate-800 font-light leading-relaxed text-base sm:text-lg">
            {nikhilData.about.paragraphs.map((p, idx) => (
              <p key={idx} className="border-l-2 border-[#C9A84C]/40 pl-4 py-1">
                {idx === 0 ? (
                  <>
                    <span className="float-left text-4xl sm:text-5xl font-heading text-[#C9A84C] font-black leading-none pr-3 pt-1">
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
            <div className="pt-4 p-5 rounded-2xl bg-white/[0.03] dark:bg-white/[0.03] light:bg-amber-50/60 border border-[#C9A84C]/30 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C9A84C] block font-semibold">
                  Personal Assurance of Sovereign Execution
                </span>
                <div className="font-heading italic text-xl sm:text-2xl text-white dark:text-white light:text-slate-900 tracking-wider font-semibold">
                  Nikhil Sharma
                </div>
                <span className="text-[11px] font-mono text-slate-400 dark:text-slate-400 light:text-slate-600 block">
                  Founder &amp; Chief Executive · Elevated India
                </span>
              </div>

              {/* Royal Seal SVG Stamp */}
              <div className="w-16 h-16 rounded-full border border-[#C9A84C]/50 bg-gradient-to-tr from-[#C9A84C]/25 to-[#E6B84A]/10 flex items-center justify-center p-1.5 flex-shrink-0 shadow-inner">
                <div className="w-full h-full rounded-full border border-dashed border-[#C9A84C]/70 flex flex-col items-center justify-center text-center">
                  <span className="text-[8px] font-mono font-bold text-[#E6B84A] tracking-tighter">ROYAL</span>
                  <span className="text-[7px] font-mono text-[#C9A84C]">SEAL</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#philosophy"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E6B84A] hover:text-white transition-colors uppercase tracking-wider font-sans"
              >
                <span>Read The Elevated Philosophy</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <span className="text-slate-600">·</span>
              <a
                href="#curations"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700 hover:text-[#C9A84C] transition-colors uppercase tracking-wider font-sans"
              >
                <span>Explore Curated Collections</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars - Enhanced Luxury Cards with Corner Tags */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {nikhilData.about.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Compass;
            return (
              <div
                key={pillar.id}
                className="glass-obsidian glass-obsidian-hover group p-7 rounded-2xl flex flex-col justify-between relative overflow-hidden"
              >
                {/* Corner Tag Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] group-hover:scale-110 group-hover:bg-[#C9A84C] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(201,168,76,0.5)] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold tracking-wider text-[#C9A84C]/90 bg-[#C9A84C]/10 px-2.5 py-1 rounded-full border border-[#C9A84C]/25">
                    {pillarTags[idx] || `0${idx + 1} / PILLAR`}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 dark:text-slate-400 light:text-slate-600 block mb-1">
                    {pillar.subtitle}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2 group-hover:text-[#E6B84A] transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-300 light:text-slate-700 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#C9A84C]/70 group-hover:text-[#E6B84A] transition-colors">
                  <span>DISCOVER CAPABILITY</span>
                  <span className="group-hover:translate-x-1.5 transition-transform duration-300">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

