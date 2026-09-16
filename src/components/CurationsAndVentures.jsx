import React, { useState, useEffect, useRef } from 'react';
import { nikhilData } from '../data/nikhilData';
import {
  Calendar,
  MapPin,
  ArrowRight,
  ExternalLink,
  Compass,
  Layers,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Sparkles
} from 'lucide-react';
import { ItineraryModal } from './ItineraryModal';
import { AdaptiveImage } from './AdaptiveImage';

export const CurationsAndVentures = () => {
  const [activeTab, setActiveTab] = useState('curations'); // 'curations' | 'ecosystem'
  
  // Curations Carousel State
  const [curationIndex, setCurationIndex] = useState(0);
  const [curationFlipDir, setCurationFlipDir] = useState('next'); // 'next' | 'prev'
  const [curationFlipKey, setCurationFlipKey] = useState(0);
  const [curationAutoPlay, setCurationAutoPlay] = useState(true);
  const [curationHovered, setCurationHovered] = useState(false);
  const [selectedCuration, setSelectedCuration] = useState(null);

  // Ecosystem Carousel State
  const [ecoIndex, setEcoIndex] = useState(0);
  const [ecoFlipDir, setEcoFlipDir] = useState('next');
  const [ecoFlipKey, setEcoFlipKey] = useState(0);
  const [ecoAutoPlay, setEcoAutoPlay] = useState(true);
  const [ecoHovered, setEcoHovered] = useState(false);

  const curationsTouchStartX = useRef(null);
  const ecoTouchStartX = useRef(null);

  const curations = nikhilData.curations;
  const ecosystem = nikhilData.ecosystem;

  // Active, Prev, Next for Curations
  const currentCuration = curations[curationIndex];
  const prevCurationIndex = curationIndex > 0 ? curationIndex - 1 : curations.length - 1;
  const nextCurationIndex = curationIndex < curations.length - 1 ? curationIndex + 1 : 0;
  const prevCuration = curations[prevCurationIndex];
  const nextCuration = curations[nextCurationIndex];

  // Active, Prev, Next for Ecosystem
  const currentEco = ecosystem[ecoIndex];
  const prevEcoIndex = ecoIndex > 0 ? ecoIndex - 1 : ecosystem.length - 1;
  const nextEcoIndex = ecoIndex < ecosystem.length - 1 ? ecoIndex + 1 : 0;
  const prevEco = ecosystem[prevEcoIndex];
  const nextEco = ecosystem[nextEcoIndex];

  // Auto-slide for Curations (5.5s)
  useEffect(() => {
    if (activeTab !== 'curations' || !curationAutoPlay || curationHovered) return;

    const interval = setInterval(() => {
      setCurationFlipDir('next');
      setCurationIndex((prev) => (prev + 1) % curations.length);
      setCurationFlipKey((k) => k + 1);
    }, 5500);

    return () => clearInterval(interval);
  }, [activeTab, curationAutoPlay, curationHovered, curations.length]);

  // Auto-slide for Ecosystem (5.5s)
  useEffect(() => {
    if (activeTab !== 'ecosystem' || !ecoAutoPlay || ecoHovered) return;

    const interval = setInterval(() => {
      setEcoFlipDir('next');
      setEcoIndex((prev) => (prev + 1) % ecosystem.length);
      setEcoFlipKey((k) => k + 1);
    }, 5500);

    return () => clearInterval(interval);
  }, [activeTab, ecoAutoPlay, ecoHovered, ecosystem.length]);

  // Navigation handlers - Curations
  const handlePrevCuration = () => {
    setCurationFlipDir('prev');
    setCurationIndex((prev) => (prev > 0 ? prev - 1 : curations.length - 1));
    setCurationFlipKey((k) => k + 1);
  };

  const handleNextCuration = () => {
    setCurationFlipDir('next');
    setCurationIndex((prev) => (prev < curations.length - 1 ? prev + 1 : 0));
    setCurationFlipKey((k) => k + 1);
  };

  const handleSelectCuration = (idx) => {
    if (idx === curationIndex) return;
    setCurationFlipDir(idx > curationIndex ? 'next' : 'prev');
    setCurationIndex(idx);
    setCurationFlipKey((k) => k + 1);
  };

  // Navigation handlers - Ecosystem
  const handlePrevEco = () => {
    setEcoFlipDir('prev');
    setEcoIndex((prev) => (prev > 0 ? prev - 1 : ecosystem.length - 1));
    setEcoFlipKey((k) => k + 1);
  };

  const handleNextEco = () => {
    setEcoFlipDir('next');
    setEcoIndex((prev) => (prev < ecosystem.length - 1 ? prev + 1 : 0));
    setEcoFlipKey((k) => k + 1);
  };

  const handleSelectEco = (idx) => {
    if (idx === ecoIndex) return;
    setEcoFlipDir(idx > ecoIndex ? 'next' : 'prev');
    setEcoIndex(idx);
    setEcoFlipKey((k) => k + 1);
  };

  // Touch handlers
  const handleCurationsTouchStart = (e) => {
    curationsTouchStartX.current = e.touches[0].clientX;
  };
  const handleCurationsTouchEnd = (e) => {
    if (curationsTouchStartX.current === null) return;
    const diff = curationsTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNextCuration();
      else handlePrevCuration();
    }
    curationsTouchStartX.current = null;
  };

  const handleEcoTouchStart = (e) => {
    ecoTouchStartX.current = e.touches[0].clientX;
  };
  const handleEcoTouchEnd = (e) => {
    if (ecoTouchStartX.current === null) return;
    const diff = ecoTouchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNextEco();
      else handlePrevEco();
    }
    ecoTouchStartX.current = null;
  };

  const handleInquireFromModal = (_curation) => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="curations" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-900/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">
            Curations &amp; Ventures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Curated Expeditions &amp; The Founder’s Ecosystem
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Explore the flagship journeys designed by Elevated India, alongside Nikhil Sharma’s broader landscape of digital innovation and global enterprises.
          </p>
        </div>

        {/* Master Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#0E1422]/90 border border-amber-500/25 shadow-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab('curations')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'curations'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Elevated India Curations</span>
            </button>
            <button
              id="ecosystem"
              onClick={() => setActiveTab('ecosystem')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'ecosystem'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] font-bold'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>The Founder's Ecosystem</span>
            </button>
          </div>
        </div>

        {/* TAB 1: CURATIONS */}
        {activeTab === 'curations' && (
          <div className="space-y-8">
            {/* Top Auto-Slide Status and Indicator Pill */}
            <div className="flex items-center justify-between max-w-5xl mx-auto px-2 sm:px-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-300 font-semibold">Curated Journey</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300">
                  0{curationIndex + 1} of 0{curations.length}
                </span>
              </div>

              {/* Auto-Slide Play/Pause Toggle */}
              <button
                onClick={() => setCurationAutoPlay(!curationAutoPlay)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1422]/90 hover:bg-[#151D30] border border-amber-500/25 text-amber-300 text-[10px] font-mono tracking-wider transition-all shadow-sm"
                title={curationAutoPlay ? "Pause auto-sliding" : "Resume auto-sliding"}
              >
                {curationAutoPlay ? (
                  <>
                    <Pause className="w-3 h-3 text-amber-400" />
                    <span>{curationHovered ? "Paused (Hovered)" : "Auto-Advancing (5.5s)"}</span>
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

            {/* Central Stage Container with Blurred Flanking Previews & Side Arrows */}
            <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
              
              {/* Left Blurred Preview Card (Previous Curation) */}
              <div
                onClick={handlePrevCuration}
                className="hidden md:block absolute -left-4 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-72 h-[75%] lg:h-[82%] rounded-2xl overflow-hidden filter blur-[2.5px] hover:blur-[0.5px] opacity-35 hover:opacity-75 transition-all duration-500 scale-90 hover:scale-95 cursor-pointer z-0 border border-amber-500/20 shadow-2xl bg-slate-950 pointer-events-auto group"
                title={`Previous: ${prevCuration.title}`}
              >
                <AdaptiveImage
                  srcList={prevCuration.images || [prevCuration.image]}
                  fallbackSrc={prevCuration.image}
                  alt={prevCuration.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-300 border border-amber-400/30">
                  {prevCuration.badge}
                </div>
                <div className="absolute bottom-3 inset-x-3 text-left">
                  <span className="text-[10px] uppercase font-mono text-amber-400 block truncate">
                    {prevCuration.category}
                  </span>
                  <h5 className="curation-flank-title font-serif text-sm font-bold text-white truncate text-on-dark">
                    {prevCuration.title}
                  </h5>
                  <p className="text-[10px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    <span className="truncate">{prevCuration.location.split('·')[0]}</span>
                  </p>
                </div>
              </div>

              {/* Left Side Arrow Button */}
              <button
                onClick={handlePrevCuration}
                className="absolute -left-3 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#080C16]/95 hover:bg-[#121929] border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.9),0_0_15px_rgba(245,158,11,0.25)] transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="Previous Curation"
                title="Previous Curation"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Right Side Arrow Button */}
              <button
                onClick={handleNextCuration}
                className="absolute -right-3 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#080C16]/95 hover:bg-[#121929] border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.9),0_0_15px_rgba(245,158,11,0.25)] transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="Next Curation"
                title="Next Curation"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Right Blurred Preview Card (Next Curation) */}
              <div
                onClick={handleNextCuration}
                className="hidden md:block absolute -right-4 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-72 h-[75%] lg:h-[82%] rounded-2xl overflow-hidden filter blur-[2.5px] hover:blur-[0.5px] opacity-35 hover:opacity-75 transition-all duration-500 scale-90 hover:scale-95 cursor-pointer z-0 border border-amber-500/20 shadow-2xl bg-slate-950 pointer-events-auto group"
                title={`Next: ${nextCuration.title}`}
              >
                <AdaptiveImage
                  srcList={nextCuration.images || [nextCuration.image]}
                  fallbackSrc={nextCuration.image}
                  alt={nextCuration.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-300 border border-amber-400/30">
                  {nextCuration.badge}
                </div>
                <div className="absolute bottom-3 inset-x-3 text-right">
                  <span className="text-[10px] uppercase font-mono text-amber-400 block truncate">
                    {nextCuration.category}
                  </span>
                  <h5 className="curation-flank-title font-serif text-sm font-bold text-white truncate text-on-dark">
                    {nextCuration.title}
                  </h5>
                  <p className="text-[10px] font-mono text-slate-400 flex items-center justify-end gap-1 mt-0.5">
                    <MapPin className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    <span className="truncate">{nextCuration.location.split('·')[0]}</span>
                  </p>
                </div>
              </div>

              {/* Center Card with 3D Corner-Flip Transition */}
              <div
                className="relative z-10 w-full max-w-4xl mx-auto [perspective:1400px]"
                onMouseEnter={() => setCurationHovered(true)}
                onMouseLeave={() => setCurationHovered(false)}
                onTouchStart={handleCurationsTouchStart}
                onTouchEnd={handleCurationsTouchEnd}
              >
                <div
                  key={`${curationIndex}-${curationFlipKey}`}
                  className={`luxury-box rounded-3xl overflow-hidden shadow-2xl relative border border-amber-500/25 transition-all ${
                    curationFlipDir === 'next' ? 'animate-corner-flip-next' : 'animate-corner-flip-prev'
                  }`}
                >
                  {/* Subtle Corner Turn Metaphor Accents */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none bg-gradient-to-tl from-amber-400/25 via-transparent to-transparent rounded-tl-2xl border-t border-l border-amber-400/30 z-20" />
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none bg-gradient-to-bl from-amber-400/15 via-transparent to-transparent rounded-bl-xl border-b border-l border-amber-400/20 z-20" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
                    
                    {/* Visual Image Showcase (7 cols) */}
                    <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl h-[340px] sm:h-[430px] group border border-amber-500/25 bg-slate-950">
                      <AdaptiveImage
                        srcList={currentCuration.images || [currentCuration.image]}
                        fallbackSrc={currentCuration.image}
                        alt={currentCuration.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06080E] via-transparent to-black/35 pointer-events-none" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1 rounded-full border border-amber-400/40 text-[11px] font-mono uppercase tracking-wider text-amber-300 shadow-lg">
                        {currentCuration.badge}
                      </div>

                      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-wider text-slate-300">
                        {currentCuration.category}
                      </div>

                      {/* Bottom Info Ribbon */}
                      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono text-slate-200 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                        <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                          <Calendar className="w-3.5 h-3.5 text-amber-400" />
                          {currentCuration.duration}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-300 truncate max-w-[200px] sm:max-w-none">
                          <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                          <span>{currentCuration.location}</span>
                        </span>
                      </div>
                    </div>

                    {/* Content & Curated Highlights (5 cols) */}
                    <div className="lg:col-span-5 space-y-5 text-left">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400">
                            {currentCuration.category}
                          </span>
                          <span className="text-slate-600">·</span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Private Bespoke Flow
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                          {currentCuration.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm font-mono text-amber-300/95 italic border-l-2 border-amber-400/50 pl-3">
                        &ldquo;{currentCuration.tagline}&rdquo;
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {currentCuration.description}
                      </p>

                      {/* Itinerary Preview Route Highlights */}
                      {currentCuration.itineraryPreview && currentCuration.itineraryPreview.length > 0 && (
                        <div className="space-y-2 pt-2 border-t border-white/10">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block font-medium">
                            Expedition Route Highlights:
                          </span>
                          {currentCuration.itineraryPreview.slice(0, 3).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                              <span className="text-amber-400 font-mono mt-0.5">•</span>
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action CTA Buttons */}
                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => setSelectedCuration(currentCuration)}
                          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all flex items-center gap-2 group"
                        >
                          <span>View Itinerary</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <a
                          href="#contact"
                          className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white font-medium text-xs uppercase tracking-wider transition-colors"
                        >
                          Inquire
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* Bottom Dot Pagination Indicators */}
              <div className="flex items-center justify-center gap-2.5 mt-8">
                {curations.map((item, idx) => {
                  const isSelected = curationIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectCuration(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'w-8 bg-gradient-to-r from-amber-400 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                          : 'w-2 bg-white/20 hover:bg-white/50'
                      }`}
                      aria-label={`Go to ${item.title}`}
                      title={item.title}
                    />
                  );
                })}
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: ECOSYSTEM - CENTER SHOWCASE WITH BLURRED PREVIEWS, SIDE ARROWS & 3D CORNER FLIP */}
        {activeTab === 'ecosystem' && (
          <div className="space-y-8">
            {/* Top Auto-Slide Status and Indicator Pill */}
            <div className="flex items-center justify-between max-w-5xl mx-auto px-2 sm:px-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-amber-300 font-semibold">Founder Venture</span>
                <span className="text-slate-500">·</span>
                <span className="text-slate-300">
                  0{ecoIndex + 1} of 0{ecosystem.length}
                </span>
              </div>

              {/* Auto-Slide Play/Pause Toggle */}
              <button
                onClick={() => setEcoAutoPlay(!ecoAutoPlay)}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E1422]/90 hover:bg-[#151D30] border border-amber-500/25 text-amber-300 text-[10px] font-mono tracking-wider transition-all shadow-sm"
                title={ecoAutoPlay ? "Pause auto-sliding" : "Resume auto-sliding"}
              >
                {ecoAutoPlay ? (
                  <>
                    <Pause className="w-3 h-3 text-amber-400" />
                    <span>{ecoHovered ? "Paused (Hovered)" : "Auto-Advancing (5.5s)"}</span>
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

            {/* Central Stage Container with Blurred Flanking Previews & Side Arrows */}
            <div className="relative max-w-6xl mx-auto px-2 sm:px-4">
              
              {/* Left Blurred Preview Card (Previous Venture) */}
              <div
                onClick={handlePrevEco}
                className="hidden md:block absolute -left-4 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-72 h-[75%] lg:h-[82%] rounded-2xl overflow-hidden filter blur-[2.5px] hover:blur-[0.5px] opacity-35 hover:opacity-75 transition-all duration-500 scale-90 hover:scale-95 cursor-pointer z-0 border border-amber-500/20 shadow-2xl bg-slate-950 pointer-events-auto group"
                title={`Previous: ${prevEco.name}`}
              >
                <AdaptiveImage
                  srcList={[prevEco.image]}
                  fallbackSrc={prevEco.image}
                  alt={prevEco.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-300 border border-amber-400/30">
                  {prevEco.badge}
                </div>
                <div className="absolute bottom-3 inset-x-3 text-left">
                  <span className="text-[10px] uppercase font-mono text-amber-400 block truncate">
                    {prevEco.category}
                  </span>
                  <h5 className="curation-flank-title font-serif text-sm font-bold text-white truncate text-on-dark">
                    {prevEco.name}
                  </h5>
                  <p className="text-[10px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                    <span className="text-amber-400 font-bold">Est. {prevEco.established}</span>
                    <span className="text-slate-500">·</span>
                    <span className="truncate">{prevEco.role}</span>
                  </p>
                </div>
              </div>

              {/* Left Side Arrow Button */}
              <button
                onClick={handlePrevEco}
                className="absolute -left-3 sm:-left-5 lg:-left-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#080C16]/95 hover:bg-[#121929] border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.9),0_0_15px_rgba(245,158,11,0.25)] transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="Previous Venture"
                title="Previous Venture"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-0.5 transition-transform" />
              </button>

              {/* Right Side Arrow Button */}
              <button
                onClick={handleNextEco}
                className="absolute -right-3 sm:-right-5 lg:-right-7 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#080C16]/95 hover:bg-[#121929] border border-amber-500/40 hover:border-amber-400 text-amber-300 hover:text-white flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.9),0_0_15px_rgba(245,158,11,0.25)] transition-all duration-300 hover:scale-110 active:scale-95 group"
                aria-label="Next Venture"
                title="Next Venture"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-0.5 transition-transform" />
              </button>

              {/* Right Blurred Preview Card (Next Venture) */}
              <div
                onClick={handleNextEco}
                className="hidden md:block absolute -right-4 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 w-48 sm:w-56 lg:w-72 h-[75%] lg:h-[82%] rounded-2xl overflow-hidden filter blur-[2.5px] hover:blur-[0.5px] opacity-35 hover:opacity-75 transition-all duration-500 scale-90 hover:scale-95 cursor-pointer z-0 border border-amber-500/20 shadow-2xl bg-slate-950 pointer-events-auto group"
                title={`Next: ${nextEco.name}`}
              >
                <AdaptiveImage
                  srcList={[nextEco.image]}
                  fallbackSrc={nextEco.image}
                  alt={nextEco.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute top-3 right-3 bg-black/80 px-2.5 py-1 rounded-full text-[10px] font-mono text-amber-300 border border-amber-400/30">
                  {nextEco.badge}
                </div>
                <div className="absolute bottom-3 inset-x-3 text-right">
                  <span className="text-[10px] uppercase font-mono text-amber-400 block truncate">
                    {nextEco.category}
                  </span>
                  <h5 className="curation-flank-title font-serif text-sm font-bold text-white truncate text-on-dark">
                    {nextEco.name}
                  </h5>
                  <p className="text-[10px] font-mono text-slate-400 flex items-center justify-end gap-1 mt-0.5">
                    <span className="text-amber-400 font-bold">Est. {nextEco.established}</span>
                    <span className="text-slate-500">·</span>
                    <span className="truncate">{nextEco.role}</span>
                  </p>
                </div>
              </div>

              {/* Center Card with 3D Corner-Flip Transition */}
              <div
                className="relative z-10 w-full max-w-4xl mx-auto [perspective:1400px]"
                onMouseEnter={() => setEcoHovered(true)}
                onMouseLeave={() => setEcoHovered(false)}
                onTouchStart={handleEcoTouchStart}
                onTouchEnd={handleEcoTouchEnd}
              >
                <div
                  key={`${ecoIndex}-${ecoFlipKey}`}
                  className={`luxury-box rounded-3xl overflow-hidden shadow-2xl relative border border-amber-500/25 transition-all ${
                    ecoFlipDir === 'next' ? 'animate-corner-flip-next' : 'animate-corner-flip-prev'
                  }`}
                >
                  {/* Subtle Corner Turn Metaphor Accents */}
                  <div className="absolute bottom-0 right-0 w-12 h-12 pointer-events-none bg-gradient-to-tl from-amber-400/25 via-transparent to-transparent rounded-tl-2xl border-t border-l border-amber-400/30 z-20" />
                  <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none bg-gradient-to-bl from-amber-400/15 via-transparent to-transparent rounded-bl-xl border-b border-l border-amber-400/20 z-20" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
                    
                    {/* Visual Image Showcase (7 cols) */}
                    <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-2xl h-[340px] sm:h-[430px] group border border-amber-500/25 bg-slate-950">
                      <AdaptiveImage
                        srcList={[currentEco.image]}
                        fallbackSrc={currentEco.image}
                        alt={currentEco.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#06080E] via-transparent to-black/35 pointer-events-none" />
                      
                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md px-3.5 py-1 rounded-full border border-amber-400/40 text-[11px] font-mono uppercase tracking-wider text-amber-300 shadow-lg">
                        {currentEco.badge}
                      </div>

                      {/* Top-Right Frosted Brand Logo Pill */}
                      <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 shadow-lg">
                        <div className="w-5 h-5 rounded-md bg-white p-0.5 flex items-center justify-center">
                          <img
                            src={currentEco.logo}
                            alt={currentEco.name}
                            className="max-h-full max-w-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
                          Est. {currentEco.established}
                        </span>
                      </div>

                      {/* Bottom Info Ribbon */}
                      <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono text-slate-200 bg-black/70 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 shadow-lg">
                        <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                          <Layers className="w-3.5 h-3.5 text-amber-400" />
                          {currentEco.role}
                        </span>
                        <span className="text-slate-300 truncate max-w-[200px] sm:max-w-none">
                          {currentEco.metric}
                        </span>
                      </div>
                    </div>

                    {/* Content & Curated Highlights (5 cols) */}
                    <div className="lg:col-span-5 space-y-5 text-left">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-400">
                            {currentEco.category}
                          </span>
                          <span className="text-slate-600">·</span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Strategic Enterprise
                          </span>
                        </div>
                        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                          {currentEco.name}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm font-mono text-amber-300/95 italic border-l-2 border-amber-400/50 pl-3">
                        &ldquo;{currentEco.tagline}&rdquo;
                      </p>

                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {currentEco.description}
                      </p>

                      {/* Strategic Achievements Highlights */}
                      <div className="space-y-2 pt-2 border-t border-white/10">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 block font-medium">
                          Strategic Achievements &amp; Scale:
                        </span>
                        {currentEco.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <span className="text-amber-400 font-mono mt-0.5">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Action CTA Buttons */}
                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <a
                          href={currentEco.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-500 text-black font-semibold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 transition-all flex items-center gap-2 group"
                        >
                          <span>{currentEco.linkText}</span>
                          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>

                        <a
                          href="#contact"
                          className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-300 hover:text-white font-medium text-xs uppercase tracking-wider transition-colors"
                        >
                          Inquire
                        </a>
                      </div>

                    </div>

                  </div>
                </div>
              </div>

              {/* Bottom Dot Pagination Indicators */}
              <div className="flex items-center justify-center gap-2.5 mt-8">
                {ecosystem.map((item, idx) => {
                  const isSelected = ecoIndex === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleSelectEco(idx)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'w-8 bg-gradient-to-r from-amber-400 to-amber-300 shadow-[0_0_12px_rgba(245,158,11,0.6)]'
                          : 'w-2 bg-white/20 hover:bg-white/50'
                      }`}
                      aria-label={`Go to ${item.name}`}
                      title={item.name}
                    />
                  );
                })}
              </div>

            </div>
          </div>
        )}

      </div>

      {/* Itinerary Modal Component */}
      {selectedCuration && (
        <ItineraryModal
          curation={selectedCuration}
          onClose={() => setSelectedCuration(null)}
          onInquire={handleInquireFromModal}
        />
      )}
    </section>
  );
};
