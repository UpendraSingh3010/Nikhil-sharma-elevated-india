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
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">
            {nikhilData.journeyFlow.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {nikhilData.journeyFlow.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            {nikhilData.journeyFlow.description}
          </p>
        </div>

        {/* Royal Corridor Waypoints Trajectory & Auto-Slide Controls */}
        <div className="max-w-4xl mx-auto mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="hidden md:flex items-center justify-between flex-1 px-6 py-2.5 rounded-full bg-white/[0.02] border border-amber-500/15 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400 mr-4">
            <span className="text-amber-300 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Delhi (28.6° N)
            </span>
            <span className="text-amber-500/40">──────</span>
            <span className="text-slate-300">Agra</span>
            <span className="text-amber-500/40">──────</span>
            <span className="text-amber-300 font-semibold">Jaipur</span>
            <span className="text-amber-500/40">──────</span>
            <span className="text-slate-300">Jodhpur</span>
            <span className="text-amber-500/40">──────</span>
            <span className="text-amber-300 font-semibold flex items-center gap-1.5">
              Udaipur (24.5° N)
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            </span>
          </div>

          {/* Auto-Slide Indicator & Toggle */}
          <button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1422]/90 hover:bg-[#151D30] border border-amber-500/25 text-amber-300 text-[10px] font-mono tracking-wider transition-all shadow-sm"
            title={isAutoPlay ? "Pause auto-sliding" : "Resume auto-sliding"}
          >
            {isAutoPlay ? (
              <>
                <Pause className="w-3 h-3 text-amber-400" />
                <span>{isHovered ? "Auto-Slide Paused (Hovered)" : "Auto-Advancing (5s)"}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </>
            ) : (
              <>
                <Play className="w-3 h-3 text-slate-400" />
                <span className="text-slate-300">Resume Auto-Slide</span>
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
                    ? 'journey-step-btn-active bg-gradient-to-b from-amber-500/20 to-amber-950/40 border-amber-400 shadow-[0_10px_25px_-5px_rgba(245,158,11,0.25)] scale-[1.02]'
                    : 'journey-step-btn-inactive bg-[#0E1422]/80 border-amber-500/15 hover:border-amber-400/50 hover:bg-[#131A2B] hover:shadow-[0_8px_20px_-5px_rgba(0,0,0,0.5)]'
                }`}
              >
                {/* Active Movement Auto-Slide Countdown Bar */}
                {isActive && isAutoPlay && !isHovered && (
                  <div
                    key={`progress-${activeAct}-${slideKey}`}
                    className="absolute bottom-0 inset-x-0 h-0.5 bg-amber-400 animate-slide-progress pointer-events-none"
                  />
                )}

                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider ${
                      isActive ? 'text-amber-400 font-bold' : 'text-slate-400 group-hover:text-amber-300'
                    }`}
                  >
                    {act.step}
                  </span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-mono transition-colors ${
                      isActive ? 'bg-amber-400/20 text-amber-300 font-semibold' : 'bg-white/5 text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {act.timing}
                  </span>
                </div>
                <h4
                  className={`font-serif text-sm font-semibold truncate transition-colors ${
                    isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
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
          className="luxury-box rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            
            {/* Visual Image Showcase (7 cols) with dynamic key transition */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl h-[340px] sm:h-[420px] group border border-amber-500/20 bg-slate-950">
              <div
                key={activeAct}
                className="w-full h-full transition-all duration-700 ease-out transform"
              >
                <AdaptiveImage
                  srcList={current.images || [current.image]}
                  fallbackSrc={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-[#06080E] via-transparent to-black/30 pointer-events-none" />
              
              <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-amber-400/30 flex items-center gap-2 text-xs text-amber-300 font-mono shadow-md">
                <Clock className="w-3.5 h-3.5" />
                <span>{current.timing}</span>
              </div>

              {/* Movement indicator dots overlay on image */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                {acts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelectAct(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeAct === i ? 'w-5 bg-amber-400' : 'w-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to movement ${i + 1}`}
                  />
                ))}
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-on-dark keep-white pointer-events-none">
                <span className="text-[11px] uppercase tracking-widest text-amber-300 font-mono block">
                  {current.step}
                </span>
                <p className="journey-photo-title font-serif text-lg sm:text-xl font-bold text-white drop-shadow-md">
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
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400 block mb-1">
                  Movement Overview
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {current.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {current.description}
              </p>

              <div className="space-y-3 pt-2">
                <p className="text-xs uppercase tracking-wider font-mono text-amber-400/90 font-medium">
                  Curated Highlights:
                </p>
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center flex-shrink-0 mt-0.5 text-amber-400">
                      <Check className="w-3 h-3" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2 group"
                >
                  <span>Inquire About This Flow</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white text-xs transition-colors"
                    title="Previous Movement"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white text-xs transition-colors"
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
