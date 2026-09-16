import React, { useState } from 'react';
import { nikhilData } from '../data/nikhilData';
import { Globe, Award, Shield, ChevronRight } from 'lucide-react';

export const GlobalFootprint = () => {
  const [selectedRegionIndex, setSelectedRegionIndex] = useState(0);
  const regions = nikhilData.globalFootprint.regions;
  const activeRegion = regions[selectedRegionIndex];

  return (
    <section id="global" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">
            {nikhilData.globalFootprint.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {nikhilData.globalFootprint.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            {nikhilData.globalFootprint.subheading}
          </p>
        </div>

        {/* ETNOW 2026 Award Spotlight Banner */}
        <div className="luxury-box group relative overflow-hidden rounded-2xl p-8 shadow-2xl transition-all duration-500 hover:-translate-y-1.5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-300 p-0.5 flex-shrink-0 shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-[#0E1522] rounded-[14px] flex items-center justify-center text-amber-400">
                  <Award className="w-8 h-8" />
                </div>
              </div>
              <div className="space-y-1 text-left">
                <span className="text-[11px] uppercase tracking-widest font-mono text-amber-400 font-semibold block">
                  {nikhilData.globalFootprint.award.event}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors">
                  {nikhilData.globalFootprint.award.title}
                </h3>
                <p className="text-xs text-slate-300 font-light max-w-xl">
                  {nikhilData.globalFootprint.award.desc}
                </p>
              </div>
            </div>

            <div className="flex-shrink-0 text-center md:text-right border-t md:border-t-0 md:border-l border-white/10 pt-4 md:pt-0 md:pl-6">
              <span className="text-2xl font-serif font-bold text-gradient-gold block">
                Top Conclave Honor
              </span>
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                India · South Asia
              </span>
            </div>
          </div>
        </div>

        {/* Global Client Regions Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Region Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400 mb-4 px-1">
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
                      ? 'bg-gradient-to-r from-[#141C2E] to-[#1A243B] border-amber-400/60 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.2)]'
                      : 'bg-[#0E131F]/80 border-amber-500/15 hover:border-amber-400/40 hover:bg-[#131A29] text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div>
                    <h5
                      className={`font-serif text-base font-bold transition-colors ${
                        isSelected ? 'text-amber-200' : 'text-slate-200 group-hover:text-amber-200'
                      }`}
                    >
                      {region.name}
                    </h5>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {region.countries}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'text-amber-400 translate-x-1' : 'text-slate-600 group-hover:translate-x-1 group-hover:text-amber-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Selected Region Card (7 cols) */}
          <div className="lg:col-span-7 luxury-box rounded-2xl p-8 sm:p-10 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 block mb-1">
                  Region Focus
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {activeRegion.name}
                </h3>
              </div>
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
                <Globe className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="text-xs uppercase font-mono tracking-widest text-slate-400">
                Key Nations Represented:
              </h5>
              <div className="flex flex-wrap gap-2">
                {activeRegion.countries.split('·').map((country, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-200 hover:border-amber-400/40 transition-colors"
                  >
                    {country.trim()}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h5 className="text-xs uppercase font-mono tracking-widest text-slate-400">
                Guest Profile &amp; Expectations:
              </h5>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {activeRegion.profile}
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-400" />
                <span>Confidential Non-Disclosure Agreements Honored</span>
              </div>
              <a
                href="#contact"
                className="text-amber-300 hover:text-white font-semibold flex items-center gap-1 uppercase tracking-wider"
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
