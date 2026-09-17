import React, { useState, useEffect, useRef } from 'react';
import { nikhilData } from '../data/nikhilData';
import { Clock, Check, ArrowRight, Play, Pause } from 'lucide-react';
import { AdaptiveImage } from './AdaptiveImage';

export const JourneyFlow = () => {
  const [activeAct, setActiveAct] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [slideKey, setSlideKey] = useState(0);

  const touchStartX = useRef(null);
  const acts = nikhilData.journeyFlow.acts;
  const current = acts[activeAct];

  // Auto-sliding interval (5 seconds per movement)
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;

    const interval = setInterval(() => {
      setActiveAct((prev) => (prev + 1) % acts.length);
      setSlideKey((k) => k + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, acts.length]);

  const handleSelectAct = (index) => {
    setActiveAct(index);
    setSlideKey((k) => k + 1);
  };

  const handlePrev = () => {
    setActiveAct((prev) => (prev > 0 ? prev - 1 : acts.length - 1));
    setSlideKey((k) => k + 1);
  };

  const handleNext = () => {
    setActiveAct((prev) => (prev < acts.length - 1 ? prev + 1 : 0));
    setSlideKey((k) => k + 1);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  return (
    <section id="journey" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Subtle background ambient */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header matching Manu's structure */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C9A84C]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A84C] font-semibold">
              CURATED JOURNEY FLOW
            </span>
            <span className="w-5 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white dark:text-white light:text-slate-900 tracking-tight">
            The cinematic travel path.
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base font-light">
            How an expedition unfurls — from private tarmac reception to the quietest desert sanctuaries.
          </p>
        </div>

        {/* Royal Corridor Waypoints Trajectory & Auto-Slide Controls */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden md:flex items-center justify-between flex-1 px-6 py-2.5 rounded-full bg-white/[0.02] dark:bg-white/[0.02] light:bg-slate-100 border border-[#C9A84C]/20 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mr-4">
            <span className="text-[#E6B84A] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              Delhi (28.6° N)
            </span>
            <span className="text-[#C9A84C]/40">──────</span>
            <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">Agra</span>
            <span className="text-[#C9A84C]/40">──────</span>
            <span className="text-[#E6B84A] font-semibold">Jaipur</span>
            <span className="text-[#C9A84C]/40">──────</span>
            <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">Jodhpur</span>
            <span className="text-[#C9A84C]/40">──────</span>
            <span className="text-[#E6B84A] font-semibold flex items-center gap-1.5">
              Udaipur (24.5° N)
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
            </span>
          </div>

          {/* Auto-Slide Indicator & Toggle */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1422]/90 dark:bg-[#0E1422]/90 light:bg-white hover:bg-[#151D30] border border-[#C9A84C]/30 text-[#E6B84A] text-[10px] font-mono tracking-wider transition-all shadow-sm"
            title={isAutoPlay ? "Pause auto-sliding" : "Resume auto-sliding"}
          >
            {isAutoPlay ? (
              <>
                <Pause className="w-3 h-3 text-[#C9A84C]" />
                <span>{isHovered ? "Auto-Slide Paused" : "Auto-Advancing (5s)"}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-slate-400" />
                <span className="text-slate-300 dark:text-slate-300 light:text-slate-700">Resume Auto-Slide</span>
              </>
            )}
          </button>
        </div>

        {/* Stepper Navigation Buttons with Real-Time Progress Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {acts.map((act, index) => {
            const isActive = activeAct === index;
            return (
              <button
                key={act.step}
                onClick={() => handleSelectAct(index)}
                className={`p-4 rounded-xl text-left transition-all duration-300 border relative overflow-hidden group hover:-translate-y-1 ${
                  isActive
                    ? 'journey-step-btn-active bg-gradient-to-b from-[#C9A84C]/25 to-[#9B7B2C]/35 border-[#C9A84C] shadow-[0_10px_25px_-5px_rgba(201,168,76,0.3)] scale-[1.02]'
                    : 'journey-step-btn-inactive glass-obsidian border-[#C9A84C]/15 hover:border-[#C9A84C]/50 hover:shadow-[0_8px_20px_-5px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Active Movement Auto-Slide Countdown Bar */}
                {isActive && isAutoPlay && !isHovered && (
                  <div
                    key={`progress-${activeAct}-${slideKey}`}
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-[#C9A84C] animate-slide-progress pointer-events-none"
                  />
                )}

                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider ${
                      isActive ? 'text-[#E6B84A] font-bold' : 'text-slate-400 group-hover:text-[#E6B84A]'
                    }`}
                  >
                    {act.step}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                      isActive ? 'bg-[#C9A84C]/25 text-[#FDF6E2] font-semibold' : 'bg-white/5 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {act.timing}
                  </span>
                </div>
                <h4
                  className={`font-heading text-sm font-bold truncate transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300 dark:text-slate-300 light:text-slate-700 group-hover:text-white'
                  }`}
                >
                  {act.title.split(':')[0]}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Act Showcase Card (Auto-Sliding / Interactive) */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="glass-obsidian rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Visual Image Showcase (7 cols) */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl h-[340px] sm:h-[420px] group border border-[#C9A84C]/25 bg-slate-950">
              <div
                key={activeAct}
                className="w-full h-full transition-all duration-700 ease-out transform"
              >
                <AdaptiveImage
                  srcList={current.images || [current.image]}
                  fallbackSrc={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.8] contrast-[1.1]"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-black/40 pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-[#050508]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C9A84C]/35 flex items-center gap-2 text-xs text-[#E6B84A] font-mono shadow-md z-10">
                <Clock className="w-3.5 h-3.5 text-[#C9A84C]" />
                <span>{current.timing}</span>
              </div>

              {/* Movement indicator dots overlay on image */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-[#050508]/75 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 z-10">
                {acts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectAct(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeAct === i ? 'w-5 bg-[#C9A84C]' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to movement ${i + 1}`}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-4 right-4 pointer-events-none z-10">
                <span className="text-[11px] uppercase tracking-widest text-[#E6B84A] font-mono block mb-0.5">
                  {current.step}
                </span>
                <p className="font-heading text-lg sm:text-xl font-bold text-white drop-shadow-md">
                  {current.subtitle}
                </p>
              </div>
            </div>

            {/* Content & Curated Highlights (5 cols) */}
            <div
              key={`content-${activeAct}`}
              className="lg:col-span-5 space-y-6 text-left transition-all duration-500"
            >
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#C9A84C] block mb-1 font-semibold">
                  Movement Overview
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-black text-white dark:text-white light:text-slate-900 leading-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 dark:text-slate-300 light:text-slate-700 font-light leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs uppercase tracking-wider font-mono text-[#E6B84A] font-semibold">
                  Curated Privileges &amp; Highlights:
                </p>
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200 dark:text-slate-200 light:text-slate-800">
                    <div className="w-5 h-5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-[#C9A84C]">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#C9A84C] via-[#E6B84A] to-[#C9A84C] text-black font-semibold text-xs uppercase tracking-wider shadow-xl shadow-[#C9A84C]/20 hover:shadow-[#C9A84C]/35 hover:scale-[1.02] transition-all flex items-center gap-2 group"
                >
                  <span>Inquire About This Flow</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-200 text-sm transition-colors"
                    title="Previous Movement"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-200 text-sm transition-colors"
                    title="Next Movement"
                  >
                    →
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
