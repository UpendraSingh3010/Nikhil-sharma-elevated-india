import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

/**
 * BrandLogoPlaceholder
 * Luxury placeholder for brand logo that the user can replace later.
 * Supports custom image source or displays a crafted luxury monogram emblem.
 */
export const BrandLogoPlaceholder = ({
  src,
  alt = "Elevated India",
  className = "",
  showTag = true,
}) => {
  const { isDark } = useTheme();
  const [imageFailed, setImageFailed] = useState(!src);

  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {src && !imageFailed ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImageFailed(true)}
          className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
        />
      ) : (
        /* Luxury Crest Insignia Placeholder */
        <div className="flex items-center gap-2.5">
          <div className={`relative w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(201,168,76,0.3)] ${
            isDark
              ? 'border-[#C9A84C]/40 bg-gradient-to-br from-[#C9A84C]/20 via-[#0E131F] to-[#050508] shadow-inner group-hover:border-[#C9A84C]'
              : 'border-[#C9A84C]/50 bg-gradient-to-br from-amber-100 via-white to-amber-50 shadow-sm group-hover:border-[#9B7B2C]'
          }`}>
            {/* Geometric Crown / Compass Stylized Vector */}
            <svg
              viewBox="0 0 24 24"
              className={`w-5 h-5 ${isDark ? 'text-[#E6B84A]' : 'text-[#9B7B2C]'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#E6B84A] animate-pulse" />
          </div>

          <div className="flex flex-col text-left">
            <div className="flex items-center gap-1.5">
              <span className={`font-heading font-bold text-sm tracking-[0.18em] uppercase transition-colors leading-tight ${
                isDark ? 'text-white group-hover:text-amber-300' : 'text-slate-900 group-hover:text-[#9B7B2C]'
              }`}>
                ELEVATED
              </span>
              <span className={`font-heading font-light text-sm tracking-[0.18em] uppercase leading-tight ${
                isDark ? 'text-[#E6B84A]' : 'text-[#9B7B2C] font-semibold'
              }`}>
                INDIA
              </span>
            </div>
            {showTag && (
              <span className={`text-[9px] font-mono tracking-wider uppercase ${
                isDark ? 'text-amber-300/60' : 'text-amber-900/60'
              }`}>
                Brand Logo · [Placeholder]
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
