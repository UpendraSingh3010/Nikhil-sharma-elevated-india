import React from 'react';
import { nikhilData } from '../data/nikhilData';
import { Quote, Check, X, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AdaptiveImage } from './AdaptiveImage';
import ladakhRoyalSilkImg from '../assets/Ladakh with royal silk.png';

export const PhilosophySection = () => {
  const { isDark } = useTheme();

  return (
    <section 
      id="philosophy" 
      className={`relative py-24 sm:py-32 overflow-hidden transition-colors duration-500 ${
        isDark ? 'bg-[#06080E]' : 'bg-[#FBFBFA]'
      }`}
    >
      {/* Background Graphic: Ladakh Royal Silk High Himalayas Pavilion Across the Entire Section */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AdaptiveImage
          srcList={[
            ladakhRoyalSilkImg,
            '/assets/ladakh-royal-silk.png',
            '/assets/Ladakh with royal silk.png',
            '/assets/ladakh_royal_silk.png',
            '/assets/ladakh-silk.png',
          ]}
          fallbackSrc="/assets/ladakh-royal-silk.png"
          alt="Ladakh Royal Silk Expedition Pavilion - High Himalayas"
          className={`w-full h-full object-cover object-center transition-all duration-700 ${
            isDark 
              ? 'opacity-65 filter brightness-[0.75] contrast-[1.10]' 
              : 'opacity-40 filter brightness-[0.95] contrast-[1.05]'
          }`}
        />
        {/* Soft Vignette Overlay allowing the Ladakh mountain & silk photo to be clearly visible */}
        <div 
          className="absolute inset-0"
          style={{
            background: isDark
              ? 'radial-gradient(ellipse 110% 80% at 50% 35%, rgba(6, 8, 14, 0.30) 0%, rgba(6, 8, 14, 0.65) 70%, rgba(6, 8, 14, 0.90) 100%)'
              : 'radial-gradient(ellipse 110% 80% at 50% 35%, rgba(251, 251, 250, 0.25) 0%, rgba(251, 251, 250, 0.60) 70%, rgba(251, 251, 250, 0.88) 100%)'
          }}
        />
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isDark
              ? 'linear-gradient(to bottom, #06080E 0%, transparent 12%, transparent 88%, #06080E 100%)'
              : 'linear-gradient(to bottom, #FBFBFA 0%, transparent 12%, transparent 88%, #FBFBFA 100%)'
          }}
        />
        <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C9A84C]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A84C] font-semibold block">
              {nikhilData.philosophy.eyebrow}
            </span>
            <span className="w-5 h-px bg-[#C9A84C]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {nikhilData.philosophy.heading}
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Why Elevated India rejects the commercial tourism handbook in favor of quiet access, authentic diplomacy, and sovereign ground control.
          </p>
        </div>

        {/* Master Quote Banner with Ladakh Royal Silk High Himalayas Pavilion Backdrop */}
        <div className={`quote-banner-container relative max-w-5xl mx-auto rounded-3xl overflow-hidden p-0 shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-500 hover:-translate-y-1.5 border ${
          isDark 
            ? 'border-[#C9A84C]/50 bg-[#06080F]' 
            : 'border-[#C9A84C]/60 bg-[#0A0E18] shadow-xl'
        }`}>
          {/* Background Atmospheric Expedition Image */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <AdaptiveImage
              srcList={[
                ladakhRoyalSilkImg,
                '/assets/ladakh-royal-silk.png',
                '/assets/Ladakh with royal silk.png',
                '/assets/ladakh_royal_silk.png',
                '/assets/ladakh-silk.png',
              ]}
              fallbackSrc="/assets/ladakh-royal-silk.png"
              alt="Ladakh Royal Silk Expedition Pavilion - High Himalayas"
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12] transition-all duration-500"
            />
            {/* Deep Cinematic Matte Gradient Overlay for pristine text legibility */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(to bottom, rgba(5, 5, 8, 0.65) 0%, rgba(5, 5, 8, 0.82) 50%, rgba(5, 5, 8, 0.96) 100%)'
              }}
            />
            <div className="absolute inset-0 bg-noise opacity-25 pointer-events-none" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 md:p-16 text-center max-w-4xl mx-auto text-white">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/80 border border-[#C9A84C]/60 text-amber-300 text-xs font-mono uppercase tracking-widest mb-6 shadow-lg backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A84C]" />
              <span className="font-semibold text-amber-200 tracking-wider">Ladakh Royal Silk Pavilion · High Himalayas</span>
            </div>

            <Quote className="w-12 h-12 text-[#C9A84C]/80 mx-auto mb-6 drop-shadow-md" />
            
            <blockquote className="philosophy-quote-text font-heading text-2xl sm:text-3xl md:text-4xl font-normal text-white leading-relaxed italic drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              &ldquo;{nikhilData.philosophy.quote}&rdquo;
            </blockquote>

            <div className="mt-8 flex flex-col items-center">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mb-4" />
              <h4 className="philosophy-quote-author font-heading text-xl sm:text-2xl font-bold text-amber-200 tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
                {nikhilData.philosophy.author}
              </h4>
              <span className="philosophy-quote-role text-xs sm:text-sm font-mono uppercase tracking-widest text-slate-300 mt-1 drop-shadow-[0_1px_8px_rgba(0,0,0,0.95)]">
                {nikhilData.philosophy.role}
              </span>
            </div>
          </div>
        </div>

        {/* 3 Core Tenets - Interactive Glass Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nikhilData.philosophy.tenets.map((tenet, idx) => (
            <div
              key={tenet.id}
              className="glass-obsidian glass-obsidian-hover group p-8 rounded-2xl flex flex-col justify-between space-y-4 cursor-default relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs text-[#C9A84C] font-bold px-2.5 py-1 rounded bg-[#C9A84C]/15 border border-[#C9A84C]/30 group-hover:bg-[#C9A84C] group-hover:text-black transition-colors">
                    0{idx + 1}
                  </span>
                  <h3 className={`font-heading text-xl font-bold transition-colors ${
                    isDark ? 'text-white group-hover:text-[#E6B84A]' : 'text-slate-900 group-hover:text-[#9B7B2C]'
                  }`}>
                    {tenet.title}
                  </h3>
                </div>
                <p className={`text-sm font-light leading-relaxed transition-colors ${
                  isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  {tenet.description}
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-[#C9A84C]/80 group-hover:text-[#E6B84A] flex items-center justify-between transition-colors">
                <span>The Elevated Creed</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* The Elevated Standard vs Conventional Tourism Matrix */}
        <div className="glass-obsidian rounded-3xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] font-semibold block mb-1">
              OPERATIONAL RIGOR
            </span>
            <h3 className={`font-heading text-2xl sm:text-3xl font-black ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              The Elevated India Standard vs. Standard Commercial Tourism
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className={`border-b text-xs font-mono uppercase tracking-wider ${
                  isDark ? 'border-white/10 text-slate-300' : 'border-slate-300 text-slate-700 font-bold'
                }`}>
                  <th className="py-4 px-4">Journey Dimension</th>
                  <th className={`elevated-table-col py-4 px-4 font-bold rounded-t-lg ${
                    isDark ? 'text-[#E6B84A] bg-[#C9A84C]/15' : 'text-amber-900 bg-[#C9A84C]/25'
                  }`}>
                    Elevated India Standard
                  </th>
                  <th className="py-4 px-4 text-slate-400">
                    Conventional Agency Tourism
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y text-xs sm:text-sm ${
                isDark ? 'divide-white/5' : 'divide-slate-200'
              }`}>
                {nikhilData.philosophy.comparison.map((row, idx) => (
                  <tr key={idx} className={isDark ? "hover:bg-white/[0.03] transition-colors" : "hover:bg-[#C9A84C]/[0.08] transition-colors"}>
                    <td className={`py-4 px-4 font-medium ${
                      isDark ? 'text-slate-200' : 'text-slate-900 font-semibold'
                    }`}>
                      {row.aspect}
                    </td>
                    <td className={`elevated-table-col py-4 px-4 font-medium ${
                      isDark ? 'text-amber-200 bg-[#C9A84C]/[0.06]' : 'text-amber-950 bg-[#C9A84C]/[0.12] font-semibold'
                    }`}>
                      <div className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#C9A84C] flex-shrink-0" />
                        <span>{row.elevated}</span>
                      </div>
                    </td>
                    <td className={`py-4 px-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                      <div className="flex items-center gap-2">
                        <X className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                        <span>{row.standard}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
