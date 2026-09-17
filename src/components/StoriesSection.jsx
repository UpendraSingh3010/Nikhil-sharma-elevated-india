import React, { useState } from 'react';
import { nikhilData } from '../data/nikhilData';
import { Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const StoriesSection = () => {
  const { isDark } = useTheme();
  const stories = nikhilData.stories;
  const [activeStory, setActiveStory] = useState(0);

  const nextStory = () => {
    setActiveStory((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev > 0 ? prev - 1 : stories.length - 1));
  };

  return (
    <section id="stories" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C9A84C]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A84C] font-semibold block">
              CONNOISSEUR DISPATCHES
            </span>
            <span className="w-5 h-px bg-[#C9A84C]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Stories That Stay After the Road Ends
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Fewer public reviews, more lasting memory. Reflections from connoisseurs, families, and private travelers guided under Nikhil Sharma’s curation.
          </p>
        </div>

        {/* Featured Story Showcase */}
        <div className="relative max-w-4xl mx-auto">
          <div className={`relative p-8 sm:p-12 md:p-16 rounded-3xl border transition-all duration-300 ${
            isDark 
              ? 'glass-obsidian border-[#C9A84C]/25 shadow-[0_20px_50px_rgba(0,0,0,0.7)]' 
              : 'bg-white/95 border-[#C9A84C]/30 shadow-[0_16px_36px_rgba(15,23,42,0.08)]'
          }`}>
            <Quote className="w-12 h-12 text-[#C9A84C]/60 mb-6" />

            <blockquote className={`font-heading text-xl sm:text-2xl md:text-3xl leading-relaxed font-normal mb-8 italic ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              &ldquo;{stories[activeStory].quote}&rdquo;
            </blockquote>

            <div className={`pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div>
                <h4 className={`font-heading text-lg font-bold ${
                  isDark ? 'text-amber-200' : 'text-amber-900 font-extrabold'
                }`}>
                  {stories[activeStory].author}
                </h4>
                <div className={`flex flex-wrap items-center gap-3 text-xs font-mono mt-1 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  <span className={`flex items-center gap-1 ${
                    isDark ? 'text-slate-300' : 'text-slate-700 font-medium'
                  }`}>
                    <MapPin className="w-3.5 h-3.5 text-[#C9A84C]" />
                    {stories[activeStory].location}
                  </span>
                  <span>•</span>
                  <span className="text-[#C9A84C] font-semibold">
                    {stories[activeStory].journey}
                  </span>
                  <span>•</span>
                  <span>{stories[activeStory].date}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevStory}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/15 border-white/15 text-white' 
                      : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800 shadow-sm'
                  }`}
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className={`text-xs font-mono px-2 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}>
                  {activeStory + 1} / {stories.length}
                </span>
                <button
                  onClick={nextStory}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/15 border-white/15 text-white' 
                      : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800 shadow-sm'
                  }`}
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

