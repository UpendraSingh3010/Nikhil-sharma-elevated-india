import React, { useState } from 'react';
import { nikhilData } from '../data/nikhilData';
import { MapPin, X, Maximize2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const GallerySection = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Royal Palaces', 'Desert Sanctuaries', 'Artisans & Craft', 'Festivals'];

  const filteredGallery = selectedCategory === 'All'
    ? nikhilData.gallery
    : nikhilData.gallery.filter((g) => g.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute -top-10 right-10 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#C9A84C]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A84C] font-semibold block">
              CINEMATIC FIELD NOTES
            </span>
            <span className="w-5 h-px bg-[#C9A84C]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            A Gallery That Feels Like Traveling with Us
          </h2>
          <p className={`text-sm sm:text-base font-light ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            Scroll through royal fortresses, sacred waters, desert silences, living craft, and private sanctuaries chosen for atmosphere, soul, and access.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#C9A84C]/25 text-[#C9A84C] border border-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.35)] font-semibold'
                    : isDark
                      ? 'bg-[#0E1422]/80 text-slate-400 hover:text-white border border-white/10 hover:border-[#C9A84C]/40'
                      : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-[#C9A84C]/50 shadow-sm'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Luxury Interactive Hover Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-[420px] rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-yellow-500/30 bg-black flex flex-col justify-between"
            >
              {/* Crisp, Bright, Crystal Clear Photograph */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-100 contrast-[1.02]"
                referrerPolicy="no-referrer"
              />

              {/* Top Row: Category pill & Expand icon */}
              <div className="relative z-10 p-3.5 flex items-center justify-between pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-yellow-400/40 text-[11px] font-mono font-semibold text-yellow-300 shadow-md">
                  {item.category}
                </span>
                <div className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-yellow-300 border border-yellow-400/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5 text-yellow-400" />
                </div>
              </div>

              {/* Seamless Full-Width Blurred Bottom Plate with Font Yellow */}
              <div className="relative z-10 w-full p-4 sm:p-5 backdrop-blur-xl bg-black/55 border-t border-yellow-400/30 pointer-events-none transition-colors duration-300 group-hover:bg-black/65">
                <div className="flex items-center gap-1.5 text-xs font-mono text-yellow-400 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />
                  <span className="tracking-wide drop-shadow-sm">{item.location}</span>
                </div>
                <h4 className="font-heading text-base sm:text-lg font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors drop-shadow-sm line-clamp-1">
                  {item.title}
                </h4>
                <p className="text-xs text-yellow-100/90 font-light leading-relaxed mt-1.5 line-clamp-2 drop-shadow-sm">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-fadeIn"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl p-0 border border-yellow-400/40 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                className="max-h-[70vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 hover:bg-yellow-400 hover:text-black text-white border border-yellow-400/40 flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className={`p-6 text-left ${isDark ? 'bg-black/95 text-white' : 'bg-white text-slate-900'}`}>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-yellow-400 font-semibold">
                  {lightboxImage.category}
                </span>
                <span className={`text-xs font-mono flex items-center gap-1 ${
                  isDark ? 'text-yellow-300/80' : 'text-amber-800 font-medium'
                }`}>
                  <MapPin className="w-3.5 h-3.5 text-yellow-400" />
                  {lightboxImage.location}
                </span>
              </div>
              <h3 className={`font-heading text-2xl font-bold mb-2 ${
                isDark ? 'text-yellow-300' : 'text-slate-900'
              }`}>
                {lightboxImage.title}
              </h3>
              <p className={`text-sm font-light leading-relaxed ${
                isDark ? 'text-yellow-100/90' : 'text-slate-700'
              }`}>
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
