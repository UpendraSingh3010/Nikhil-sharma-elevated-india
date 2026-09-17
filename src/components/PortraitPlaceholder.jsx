import React, { useState } from 'react';
import { Sparkles, UserCheck } from 'lucide-react';

/**
 * PortraitPlaceholder
 * Displays an editorial luxury portrait placeholder for Nikhil Sharma,
 * designed for effortless replacement once the official photo is ready.
 */
export const PortraitPlaceholder = ({
  src,
  alt = "Nikhil Sharma",
  className = "",
  badgeText = "Portrait Placeholder · Swap Later",
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`relative w-full h-full overflow-hidden bg-gradient-to-b from-[#0E131F] via-[#090D16] to-[#050508] flex items-center justify-center ${className}`}>
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageError(true)}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        /* Luxury Silhouette & Monogram Composition */
        <div className="relative w-full h-full flex flex-col items-center justify-center p-8 text-center select-none">
          {/* Subtle background radial glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.2)_0%,transparent_70%)] pointer-events-none" />

          {/* Decorative Fine-Line Geometric Rings */}
          <div className="relative mb-6">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full border border-amber-400/30 flex items-center justify-center p-3 animate-pulse-glow">
              <div className="w-full h-full rounded-full border border-amber-400/50 border-dashed flex items-center justify-center p-3">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-500/25 via-[#0A0D14] to-[#050508] border border-amber-400/60 flex items-center justify-center shadow-xl">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-gradient-gold-royal tracking-wider">
                    NS
                  </span>
                </div>
              </div>
            </div>
            <div className="absolute -top-1.5 -right-1.5 bg-amber-400 text-slate-950 p-1.5 rounded-full shadow-lg">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Identification - Explicitly white and gold for high contrast on dark frame */}
          <h4 className="font-heading text-xl sm:text-2xl font-bold !text-white tracking-wide">
            {alt}
          </h4>
          <p className="text-xs sm:text-sm font-sans !text-[#E6B84A] tracking-wider uppercase mt-1 font-semibold">
            Nikhil Sharma
          </p>

          {/* Discrete Swap Indicator Badge */}
          <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-400/40 bg-amber-400/15 !text-amber-200 text-[10px] font-mono uppercase tracking-widest shadow-sm backdrop-blur-sm">
            <UserCheck className="w-3 h-3 text-amber-400" />
            <span>{badgeText}</span>
          </div>
        </div>
      )}
    </div>
  );
};
