import React, { useState } from 'react';
import { nikhilData } from '../data/nikhilData';
import { Globe, Award, Shield, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const GlobalFootprint = () => {
  const { isDark } = useTheme();
  const [selectedRegionIndex, setSelectedRegionIndex] = useState(0);
  const regions = nikhilData.globalFootprint.regions;
  const activeRegion = regions[selectedRegionIndex];

  return (
    <section id="global" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C9A84C]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A84C] font-semibold block">
              {nikhilData.globalFootprint.eyebrow}
            </span>
            <span className="w-5 h-px bg-[#C9A84C]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {nikhilData.globalFootprint.heading}
          </h2>
          <p className={`text-sm sm:text-base font-light leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {nikhilData.globalFootprint.subheading}
          </p>
        </div>

        {/* ETNOW 2026 Award Spotlight Banner */}
        <div className={`glass-obsidian group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1 ${
          isDark
            ? 'shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
            : 'shadow-[0_16px_36px_rgba(15,23,42,0.08)] bg-white/95'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#9B7B2C] via-[#C9A84C] to-[#E6B84A] p-0.5 flex-shrink-0 shadow-lg shadow-[#C9A84C]/25 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#080B12] rounded-[14px] flex items-center justify-center text-[#C9A84C]">
                  <Award className="w-8 h-8" />
                </div>
              </div>
              <div className="space-y-1 text-left">
                <span className="text-[11px] uppercase tracking-widest font-mono text-[#C9A84C] font-semibold block">
                  {nikhilData.globalFootprint.award.event}
                </span>
                <h3 className={`font-heading text-xl sm:text-2xl font-black transition-colors ${
                  isDark ? 'text-white group-hover:text-amber-200' : 'text-slate-900 group-hover:text-[#9B7B2C]'
                }`}>
                  {nikhilData.globalFootprint.award.title}
                </h3>
                <p className={`text-xs font-light max-w-xl ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}>
                  {nikhilData.globalFootprint.award.desc}
                </p>
              </div>
            </div>

            <div className={`flex-shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l pt-4 md:pt-0 md:pl-6 ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <span className="text-2xl font-heading font-black text-gradient-gold-royal block">
                Top Conclave Honor
              </span>
              <span className={`text-[11px] font-mono uppercase tracking-wider ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                India · South Asia
              </span>
            </div>
          </div>
        </div>

        {/* Global Client Regions Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Region Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-[#C9A84C] font-semibold mb-4 px-1">
              Select Regional Footprint:
            </h4>
            {regions.map((region, idx) => {
              const isSelected = selectedRegionIndex === idx;
              return (
                <button
                  key={region.name}
                  onClick={() => setSelectedRegionIndex(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between group hover:-translate-y-0.5 relative overflow-hidden ${
                    isSelected
                      ? isDark
                        ? 'bg-gradient-to-r from-[#C9A84C]/25 to-[#9B7B2C]/30 border-[#C9A84C] shadow-[0_10px_25px_-5px_rgba(201,168,76,0.3)]'
                        : 'bg-amber-50/90 border-[#C9A84C] shadow-md'
                      : isDark
                        ? 'glass-obsidian border-[#C9A84C]/15 hover:border-[#C9A84C]/45 text-slate-400 hover:text-slate-200'
                        : 'bg-white/90 border-slate-200/80 hover:border-[#C9A84C]/50 text-slate-600 hover:text-slate-900 shadow-sm'
                  }`}
                >
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <h5
                      className={`font-heading text-base font-bold transition-colors ${
                        isSelected 
                          ? isDark ? 'text-[#FDF6E2]' : 'text-amber-950 font-black'
                          : isDark ? 'text-slate-200 group-hover:text-white' : 'text-slate-800 group-hover:text-slate-900'
                      }`}
                    >
                      {region.name}
                    </h5>
                    <p className={`text-xs font-mono mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {region.countries}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-[#C9A84C] translate-x-1' : 'text-slate-400 group-hover:translate-x-1 group-hover:text-[#C9A84C]'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Selected Region Card (7 cols) */}
          <div className={`lg:col-span-7 rounded-2xl p-8 sm:p-10 space-y-6 transition-all duration-300 ${
            isDark 
              ? 'glass-obsidian shadow-[0_20px_50px_rgba(0,0,0,0.7)]' 
              : 'bg-white/95 border border-[#C9A84C]/25 shadow-[0_16px_36px_rgba(15,23,42,0.08)]'
          }`}>
            <div className={`flex items-center justify-between border-b pb-4 ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C9A84C] block mb-1 font-semibold">
                  Region Focus
                </span>
                <h3 className={`font-heading text-2xl font-black ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {activeRegion.name}
                </h3>
              </div>
              <div className="p-2.5 rounded-xl bg-[#C9A84C]/15 text-[#C9A84C] border border-[#C9A84C]/30">
                <Globe className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3">
              <h5 className={`text-xs uppercase font-mono tracking-widest font-semibold ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Key Nations Represented:
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeRegion.countries.split('·').map((country, i) => (
                  <span
                    key={i}
                    className={`px-3.5 py-1 rounded-full text-xs font-mono border transition-colors ${
                      isDark 
                        ? 'bg-white/5 border-[#C9A84C]/25 text-amber-200 hover:border-[#C9A84C]/60' 
                        : 'bg-amber-50/80 border-[#C9A84C]/40 text-amber-950 font-medium hover:bg-amber-100/80'
                    }`}
                  >
                    {country.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h5 className={`text-xs uppercase font-mono tracking-widest font-semibold ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Guest Profile &amp; Expectations:
              </h5>
              <p className={`text-sm sm:text-base font-light leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}>
                {activeRegion.profile}
              </p>
            </div>

            <div className={`pt-4 border-t flex flex-wrap items-center justify-between gap-4 text-xs font-mono ${
              isDark ? 'border-white/10 text-slate-400' : 'border-slate-200 text-slate-500'
            }`}>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#C9A84C]" />
                <span>Confidential Non-Disclosure Agreements Honored</span>
              </div>
              <a
                href="#contact"
                className="text-[#C9A84C] hover:text-[#9B7B2C] font-semibold flex items-center gap-1 uppercase tracking-wider transition-colors"
              >
                Inquire For This Region →
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
