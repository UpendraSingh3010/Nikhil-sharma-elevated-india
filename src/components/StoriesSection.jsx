import React, { useState } from 'react';
import { nikhilData } from '../data/nikhilData';
import { Quote, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

export const StoriesSection = () => {
  const stories = nikhilData.stories;
  const [activeStory, setActiveStory] = useState(0);

  const nextStory = () => {
    setActiveStory((prev) => (prev < stories.length - 1 ? prev + 1 : 0));
  };

  const prevStory = () => {
    setActiveStory((prev) => (prev > 0 ? prev - 1 : stories.length - 1));
  };

  return (
    <section id="stories" className="relative py-24 sm:py-32 bg-[#070A10] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">
            Traveler Narratives
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            Stories That Stay After the Road Ends
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Fewer public reviews, more lasting memory. Reflections from connoisseurs, families, and private travelers guided under Nikhil Sharma’s curation.
          </p>
        </div>

        {/* Featured Story Carousel / Showcase */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl bg-[#0F1523] border border-amber-500/20 shadow-2xl">
            <Quote className="w-12 h-12 text-amber-400/20 mb-6" />

            <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-white leading-relaxed font-light mb-8 italic">
              &ldquo;{stories[activeStory].quote}&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-amber-200">
                  {stories[activeStory].author}
                </h4>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mt-1">
                  <span className="flex items-center gap-1 text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    {stories[activeStory].location}
                  </span>
                  <span>•</span>
                  <span className="text-amber-300 font-medium">
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
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-slate-400 px-2">
                  {activeStory + 1} / {stories.length}
                </span>
                <button
                  onClick={nextStory}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-colors"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Story Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          {stories.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStory(idx)}
              className={`text-left p-6 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                activeStory === idx
                  ? 'bg-[#141C2E] border-amber-400/40 shadow-lg shadow-amber-500/10'
                  : 'bg-[#0E131F] border-white/5 hover:border-white/15'
              }`}
            >
              <div className="space-y-2 mb-4">
                <span className="text-[10px] uppercase font-mono tracking-wider text-amber-400">
                  {s.journey}
                </span>
                <p className="text-xs text-slate-300 line-clamp-3 italic font-serif">
                  "{s.quote}"
                </p>
              </div>
              <div className="pt-3 border-t border-white/5">
                <h5 className="font-serif text-sm font-bold text-white">
                  {s.author.split('&')[0]}
                </h5>
                <span className="text-[11px] font-mono text-slate-400 block">
                  {s.location}
                </span>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
