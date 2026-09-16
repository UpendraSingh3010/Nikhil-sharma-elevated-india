import React from 'react';
import { navigationData } from '../data/navigation';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Phone } from 'lucide-react';

export default function AnnouncementBar() {
  const { announcement, headerCta } = navigationData;
  const { isDark } = useTheme();

  return (
    <div className={`border-b text-xs py-2 px-4 select-none relative z-50 transition-colors duration-200 ${
      isDark 
        ? 'bg-[#070A10] border-slate-800/80 text-slate-400' 
        : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Quick links */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          <span className="hidden sm:inline-flex items-center gap-1.5 text-emerald-500 font-medium bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Live Platform
          </span>
          {announcement.left.map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              className="hover:text-amber-500 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: Phone & Action buttons */}
        <div className="flex items-center space-x-4">
          <a
            href={headerCta.phoneHref}
            className={`hidden md:inline-flex items-center gap-1.5 transition-colors ${
              isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-amber-500" />
            <span>{headerCta.phone}</span>
          </a>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {announcement.right.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className={
                  item.primary
                    ? "inline-flex items-center gap-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold px-3 py-1 rounded-md text-xs shadow-sm transition-all duration-200 hover:shadow-glow"
                    : isDark
                      ? "text-slate-300 hover:text-white px-2 py-1 transition-colors"
                      : "text-slate-700 hover:text-slate-900 px-2 py-1 transition-colors"
                }
              >
                {item.label}
                {item.primary && <ArrowRight className="w-3 h-3 ml-0.5" />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
