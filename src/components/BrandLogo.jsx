import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function BrandLogo({ 
  className = "", 
  imageClassName = "",
  size = "nav", 
  variant = "full", 
  alt = "GoCommercially - Digital Marketing Platform" 
}) {
  const { isDark } = useTheme();

  // Preset sizes for high clarity and prominence
  const sizeClasses = {
    sm: "h-9 sm:h-10 w-auto max-w-[220px]",
    nav: "h-12 sm:h-13 lg:h-14.5 w-auto max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]",
    footer: "h-14 sm:h-16 lg:h-18 w-auto max-w-[300px] sm:max-w-[360px] lg:max-w-[420px]",
    xl: "h-16 sm:h-20 lg:h-24 w-auto max-w-[340px] sm:max-w-[420px] lg:max-w-[480px]"
  };

  const finalImgClass = imageClassName || sizeClasses[size] || sizeClasses.nav;

  if (variant === "mark") {
    return (
      <div className={`flex items-center select-none ${className}`}>
        <img
          src={isDark ? "/assets/brand/Go-TM-white.svg" : "/assets/brand/Go-TM-black.svg"}
          alt="GoCommercially"
          className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center select-none ${className}`}>
      {/* Official Vector Logo */}
      <img
        src={isDark ? "/assets/brand/gocommercially-logo-white.svg" : "/assets/brand/gocommercially-logo-dark.svg"}
        alt={alt}
        className={`${finalImgClass} object-contain transition-all duration-200 hover:opacity-95`}
      />
    </div>
  );
}


