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

const ecosystemVentures = [
  {
    abbr: "AB",
    name: "AnandBodh",
    desc: "The Happy Life umbrella — wellness programmes built around living well, not only working well.",
    image: "/assets/anandbodhlogo.jpg",
    bg: "rgb(255, 255, 255)",
    link: "#contact"
  },
  {
    abbr: "IB",
    name: "IconsBase",
    desc: "Connecting innovative ideas with strategic execution and market opportunities.",
    image: "/assets/logo-full-0774772.png",
    bg: "rgb(255, 255, 255)",
    link: "#contact"
  },
  {
    abbr: "EH",
    name: "EaseHire",
    desc: "Smart recruitment software that simplifies hiring and talent management processes.",
    image: "/assets/easehire-0181375.png",
    bg: "rgb(255, 255, 255)",
    link: "#contact"
  },
  {
    abbr: "FAB",
    name: "Fabulous.Media",
    desc: "The media and marketing network, with Infabio and The Bad Company among its agencies.",
    image: "/assets/digital-agency-2669171.png",
    bg: "rgb(0, 0, 0)",
    link: "https://fabulousmedia.in"
  },
  {
    abbr: "GO",
    name: "GoCommercially",
    desc: "Comprehensive growth strategies and optimization frameworks for scaling businesses.",
    image: "/assets/gocommercially-logo-0138019_1-7958750.webp",
    bg: "rgb(255, 255, 255)",
    link: "https://gocommercially.com"
  },
  {
    abbr: "VI",
    name: "Vanishing India",
    desc: "Journey Through People, Art, and Living Traditions",
    image: "/assets/vanishing_india-7270035.png",
    bg: "rgb(0, 0, 0)",
    link: "#contact"
  }
];

export const CurationsAndVentures = () => {
  const [activeTab, setActiveTab] = useState('curations'); // 'curations' | 'ecosystem'
  
  // Curations Carousel State
  const [curationIndex, setCurationIndex] = useState(0);
  const [curationFlipDir, setCurationFlipDir] = useState('next'); // 'next' | 'prev'
  const [curationFlipKey, setCurationFlipKey] = useState(0);
  const [curationAutoPlay, setCurationAutoPlay] = useState(true);
  const [curationHovered, setCurationHovered] = useState(false);
  const [selectedCuration, setSelectedCuration] = useState(null);

  const curationsTouchStartX = useRef(null);
  const curations = nikhilData.curations;

  // Active, Prev, Next for Curations
  const currentCuration = curations[curationIndex];
  const prevCurationIndex = curationIndex > 0 ? curationIndex - 1 : curations.length - 1;
  const nextCurationIndex = curationIndex < curations.length - 1 ? curationIndex + 1 : 0;
  const prevCuration = curations[prevCurationIndex];
  const nextCuration = curations[nextCurationIndex];

  // Tab sync for navbar and URL hash
  useEffect(() => {
    const handleSwitch = (e) => {
      if (e.detail) setActiveTab(e.detail);
    };
    const handleHash = () => {
      if (window.location.hash === '#ecosystem') {
        setActiveTab('ecosystem');
      } else if (window.location.hash === '#curations') {
        setActiveTab('curations');
      }
    };
    handleHash();
    window.addEventListener('switch-tab', handleSwitch);
    window.addEventListener('hashchange', handleHash);
    return () => {
      window.removeEventListener('switch-tab', handleSwitch);
      window.removeEventListener('hashchange', handleHash);
    };
  }, []);

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

  // Touch swipe handlers for Curations
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
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C9A84C]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A84C] font-semibold">
              CURATIONS &amp; VENTURES
            </span>
            <span className="w-5 h-px bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white dark:text-white light:text-slate-900 tracking-tight">
            Curated Expeditions &amp; The Founder’s Ecosystem
          </h2>
          <p className="text-slate-300 dark:text-slate-300 light:text-slate-700 text-sm sm:text-base font-light">
            Explore the flagship journeys designed by Elevated India, alongside Nikhil Sharma’s broader landscape of digital innovation and global enterprises.
          </p>
        </div>

        {/* Master Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-[#0E1422]/90 dark:bg-[#0E1422]/90 light:bg-slate-100 border border-[#C9A84C]/30 shadow-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab('curations')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeTab === 'curations'
                  ? 'bg-gradient-to-r from-[#C9A84C] via-[#E6B84A] to-[#C9A84C] text-slate-950 shadow-[0_0_20px_rgba(201,168,76,0.4)] font-bold'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/5'
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
                  ? 'bg-gradient-to-r from-[#C9A84C] via-[#E6B84A] to-[#C9A84C] text-slate-950 shadow-[0_0_20px_rgba(201,168,76,0.4)] font-bold'
                  : 'text-slate-400 dark:text-slate-400 light:text-slate-600 hover:text-white dark:hover:text-white light:hover:text-slate-900 hover:bg-white/5'
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

        {/* TAB 2: THE FOUNDER'S ECOSYSTEM */}
        {activeTab === 'ecosystem' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {ecosystemVentures.map((item, idx) => (
                <div
                  key={idx}
                  className="card-brand rounded-2xl sm:rounded-3xl p-0 overflow-hidden group hover:shadow-2xl transition-all duration-500 active:scale-95 touch-manipulation border border-slate-200 dark:border-white/10"
                >
                  <div
                    className="h-32 sm:h-36 md:h-40 w-full flex items-center justify-center transition-all duration-500 relative overflow-hidden"
                    style={{ backgroundColor: item.bg }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-brand-light-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <img
                      src={item.image}
                      alt={item.abbr}
                      className="transform group-hover:scale-110 transition-transform duration-500 relative z-10"
                      style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="hidden items-center justify-center w-16 h-16 rounded-2xl border border-brand-green/40 bg-[#0E131F] text-brand-green font-display font-black text-2xl relative z-10">
                      {item.abbr}
                    </div>
                  </div>
                  <div className="p-5 sm:p-6 md:p-8 bg-white dark:bg-[#0E131F] transition-colors duration-300 text-left">
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-black dark:text-white mb-2 group-hover:text-brand-green transition-colors duration-300">
                      {item.abbr}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-green mb-4 sm:mb-6 font-semibold tracking-wide uppercase">
                      {item.name}
                    </p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
                      {item.desc}
                    </p>
                    <a
                      href={item.link || '#contact'}
                      target={item.link && item.link.startsWith('http') ? '_blank' : undefined}
                      rel={item.link && item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      onClick={(e) => {
                        if (!item.link || item.link === '#contact') {
                          e.preventDefault();
                          const contactSection = document.querySelector('#contact');
                          if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center text-black dark:text-white font-bold hover:text-brand-green active:text-brand-green dark:hover:text-brand-green transition-colors group min-h-[44px] touch-manipulation cursor-pointer"
                    >
                      <span className="uppercase tracking-wider text-xs sm:text-sm">Know More</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-chevron-right w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform group-hover:translate-x-1"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
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
