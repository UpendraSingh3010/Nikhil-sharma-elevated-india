import React, { useState } from 'react';
import { nikhilData } from '../data/nikhilData';
import { MapPin, X, Maximize2 } from 'lucide-react';

export const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = ['All', 'Royal Palaces', 'Desert Sanctuaries', 'Sacred Ceremonies', 'Artisans & Craft', 'Festivals'];

  const filteredGallery = selectedCategory === 'All'
    ? nikhilData.gallery
    : nikhilData.gallery.filter((g) => g.category === selectedCategory);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute -top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">
            Cinematic Field Notes
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            A Gallery That Feels Like Traveling with Us
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            Scroll through royal fortresses, sacred waters, desert silences, living craft, and private sanctuaries chosen for atmosphere, soul, and access.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-amber-400/20 text-amber-300 border border-amber-400/60 shadow-[0_0_15px_rgba(245,158,11,0.25)] font-medium'
                  : 'bg-[#0E1422]/80 text-slate-400 hover:text-white border border-white/5 hover:border-amber-400/30 hover:bg-[#141C2E]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Luxury Interactive Hover Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxImage(item)}
              className="group relative h-84 rounded-2xl overflow-hidden cursor-pointer p-0 hover:-translate-y-2 transition-all duration-500 shadow-xl border border-amber-400/25 bg-black"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity" />
              
              {/* Category pill top left */}
              <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-full border border-amber-400/40 text-[10px] font-mono text-amber-300 shadow-md">
                {item.category}
              </div>

              {/* Expand icon top right */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 backdrop-blur-md text-amber-300 border border-white/15 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 shadow-lg">
                <Maximize2 className="w-3.5 h-3.5 text-amber-300" />
              </div>

              {/* Bottom text overlay - always pristine high-contrast on image */}
              <div className="absolute bottom-4 left-4 right-4 text-left pointer-events-none text-on-dark">
                <div className="flex items-center gap-1 text-[11px] font-mono text-amber-300 mb-1">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{item.location}</span>
                </div>
                <h4 className="gallery-caption-title font-serif text-base font-bold text-white group-hover:text-amber-200 transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="gallery-caption-text text-[11px] text-slate-200 font-light line-clamp-2 mt-1 group-hover:text-white transition-colors">
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
            className="relative max-w-4xl w-full luxury-box rounded-2xl overflow-hidden shadow-2xl p-0"
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
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/80 hover:bg-amber-500 hover:text-black text-white border border-white/20 flex items-center justify-center transition-colors shadow-lg"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#0E1422] text-left">
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                  {lightboxImage.category}
                </span>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {lightboxImage.location}
                </span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">
                {lightboxImage.title}
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {lightboxImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
