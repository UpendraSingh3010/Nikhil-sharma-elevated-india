import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronDown, ChevronRight, Sun, Moon, Phone, ArrowRight, ExternalLink, Sparkles, Layers, Compass, BookOpen, Info, ShieldCheck } from 'lucide-react';
import { navigationData } from '../data/navigation';
import { useTheme } from '../context/ThemeContext';
import BrandLogo from './BrandLogo';

const sectionIcons = {
  products: Layers,
  solutions: Compass,
  resources: BookOpen,
  about: Info,
};

export default function MobileMenu({ isOpen, onClose }) {
  const [openAccordions, setOpenAccordions] = useState({ products: true });
  const { navLinks, headerCta, announcement } = navigationData;
  const { isDark, toggleTheme } = useTheme();

  // Lock body scroll and handle Escape key when menu is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const toggleAccordion = (id) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  if (!isOpen || typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] lg:hidden flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        className={`relative z-10 w-full max-w-sm sm:max-w-md h-full flex flex-col justify-between shadow-2xl transition-all duration-300 border-l animate-slide-in-right ${
          isDark
            ? 'bg-[#0A0E17] border-slate-800/90 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
      >
        {/* Drawer Header */}
        <div
          className={`flex items-center justify-between px-5 py-4 border-b shrink-0 ${
            isDark ? 'border-slate-800 bg-[#070A11]' : 'border-slate-100 bg-slate-50/80'
          }`}
        >
          <a href="/" onClick={onClose} className="transition-opacity hover:opacity-90">
            <BrandLogo />
          </a>

          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border flex items-center gap-1.5 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'bg-slate-800/90 hover:bg-slate-700 text-amber-400 border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
              }`}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle color theme"
            >
              {isDark ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-600" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700">Dark</span>
                </>
              )}
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className={`p-2.5 rounded-xl border transition-colors cursor-pointer ${
                isDark
                  ? 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 border-slate-700'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border-slate-200 shadow-xs'
              }`}
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 divide-y divide-transparent">
          {/* Quick Direct Phone Call Bar */}
          <a
            href={headerCta.phoneHref}
            className={`flex items-center justify-between p-3 rounded-xl border text-xs font-semibold transition-all ${
              isDark
                ? 'bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border-amber-500/30 text-amber-300 hover:border-amber-500/60'
                : 'bg-gradient-to-r from-amber-50 via-white to-white border-amber-300/80 text-amber-900 hover:border-amber-400 shadow-xs'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className={`p-1.5 rounded-lg ${isDark ? 'bg-amber-500/20 text-amber-400' : 'bg-amber-100 text-amber-700'}`}>
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] uppercase font-bold tracking-wider opacity-75">Talk to Growth Specialists</div>
                <div className="font-mono text-xs font-bold">{headerCta.phone}</div>
              </div>
            </div>
            <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-md border ${
              isDark ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border-emerald-200'
            }`}>
              Available
            </span>
          </a>

          {/* Navigation Links Accordions */}
          <nav className="space-y-3 pt-2" aria-label="Mobile Navigation">
            {navLinks.map((item) => {
              const SectionIcon = sectionIcons[item.id] || Sparkles;
              const isExpanded = !!openAccordions[item.id];
              const itemCount = item.items ? item.items.length : 0;

              return (
                <div
                  key={item.id}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isDark
                      ? isExpanded ? 'bg-slate-900/60 border-slate-700/80' : 'bg-slate-900/30 border-slate-800/80 hover:border-slate-700'
                      : isExpanded ? 'bg-slate-50/90 border-amber-200/80 shadow-xs' : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  {item.hasMega ? (
                    <div>
                      {/* Accordion Trigger */}
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className={`w-full flex items-center justify-between p-3.5 text-left transition-colors cursor-pointer ${
                          isDark ? 'text-slate-100 hover:text-amber-400' : 'text-slate-900 hover:text-amber-800'
                        }`}
                        aria-expanded={isExpanded}
                      >
                        <div className="flex items-center gap-2.5">
                          <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${
                            isDark
                              ? isExpanded ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' : 'bg-slate-800 text-slate-400 border-slate-700'
                              : isExpanded ? 'bg-amber-100 text-amber-800 border-amber-300' : 'bg-slate-100 text-slate-600 border-slate-200'
                          }`}>
                            <SectionIcon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-sm sm:text-base block leading-tight">
                              {item.label}
                            </span>
                            <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                              {itemCount} {item.id === 'products' ? 'growth modules' : 'options'}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                            isDark
                              ? 'bg-slate-800 text-amber-300 border-slate-700'
                              : 'bg-slate-100 text-slate-700 border-slate-200'
                          }`}>
                            {itemCount}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-amber-500' : isDark ? 'text-slate-400' : 'text-slate-500'
                            }`}
                          />
                        </div>
                      </button>

                      {/* Accordion Content */}
                      {isExpanded && (
                        <div
                          className={`p-2.5 pt-0 grid grid-cols-1 gap-1.5 border-t max-h-[340px] overflow-y-auto ${
                            isDark ? 'border-slate-800/80 bg-[#070A11]/60' : 'border-slate-100 bg-white'
                          }`}
                        >
                          {item.items.map((sub, sIdx) => (
                            <a
                              key={sIdx}
                              href={sub.href}
                              onClick={onClose}
                              className={`group flex items-start gap-3 p-2.5 rounded-xl border transition-all duration-150 ${
                                isDark
                                  ? 'bg-slate-900/70 border-slate-800/80 hover:bg-slate-800/90 hover:border-amber-500/40 text-slate-200'
                                  : 'bg-slate-50/70 border-slate-200/80 hover:bg-amber-50/60 hover:border-amber-300 text-slate-900'
                              }`}
                            >
                              {/* Sub-item Icon */}
                              <div className="nav-icon-badge w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                                {sub.icon ? (
                                  <img
                                    src={sub.icon}
                                    alt=""
                                    className="w-4 h-4 object-contain transition-transform duration-200 group-hover:scale-110"
                                    loading="lazy"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                    }}
                                  />
                                ) : (
                                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                                )}
                              </div>

                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className={`text-xs sm:text-sm font-bold truncate transition-colors ${
                                    isDark ? 'group-hover:text-amber-400 text-white' : 'group-hover:text-amber-800 text-slate-900'
                                  }`}>
                                    {sub.title}
                                  </span>
                                  <ChevronRight className={`w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all ${
                                    isDark ? 'text-amber-400' : 'text-amber-700'
                                  }`} />
                                </div>
                                {sub.desc && (
                                  <p className={`text-[11px] leading-tight line-clamp-2 mt-0.5 ${
                                    isDark ? 'text-slate-400' : 'text-slate-600'
                                  }`}>
                                    {sub.desc}
                                  </p>
                                )}
                              </div>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    /* Simple Direct Link (e.g., Pricing) */
                    <a
                      href={item.href}
                      onClick={onClose}
                      className={`flex items-center justify-between p-3.5 text-sm sm:text-base font-bold transition-colors ${
                        isDark ? 'text-slate-100 hover:text-amber-400' : 'text-slate-900 hover:text-amber-800'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-xl border flex items-center justify-center ${
                          isDark ? 'bg-slate-800 text-slate-400 border-slate-700' : 'bg-slate-100 text-slate-600 border-slate-200'
                        }`}>
                          <Sparkles className="w-4 h-4" />
                        </div>
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} />
                    </a>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Quick Access Links (Community, Blog, Contact, Questionnaire) */}
          <div className={`pt-4 mt-2 border-t ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
            <div className={`text-[11px] font-bold uppercase tracking-wider mb-2.5 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}>
              Quick Resources & Links
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {announcement.left.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.href}
                  onClick={onClose}
                  className={`p-2 rounded-xl border flex items-center justify-between transition-colors ${
                    isDark
                      ? 'bg-slate-900/50 border-slate-800 text-slate-300 hover:text-amber-400 hover:border-slate-700'
                      : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-amber-800 hover:border-slate-300'
                  }`}
                >
                  <span>{link.label}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              ))}
              <a
                href="/vip-business-questionnaire"
                onClick={onClose}
                className={`p-2 rounded-xl border flex items-center justify-between transition-colors ${
                  isDark
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300 hover:bg-amber-500/20'
                    : 'bg-amber-50 border-amber-200 text-amber-800 font-semibold hover:bg-amber-100'
                }`}
              >
                <span>Audit Form</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div
          className={`p-5 border-t shrink-0 space-y-2.5 ${
            isDark ? 'border-slate-800 bg-[#070A11]' : 'border-slate-100 bg-slate-50/90'
          }`}
        >
          {/* Primary CTA - Services / Growth Audit */}
          <a
            href={headerCta.href}
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold text-center flex items-center justify-center gap-2 shadow-[0_0_20px_-5px_rgba(245,158,11,0.4)] transition-all cursor-pointer text-sm"
          >
            <span>{headerCta.label}</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Secondary Actions: Sign in & Get Started */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://app.gocommercially.com/login"
              onClick={onClose}
              className={`py-2.5 px-3 rounded-xl font-semibold text-xs text-center border transition-colors ${
                isDark
                  ? 'bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border-slate-700'
                  : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-xs'
              }`}
            >
              Sign In
            </a>
            <a
              href="https://gocommercially.com/signup"
              onClick={onClose}
              className={`py-2.5 px-3 rounded-xl font-semibold text-xs text-center border transition-colors ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-700'
                  : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-900 shadow-xs'
              }`}
            >
              Get Started
            </a>
          </div>

          <div className={`flex items-center justify-center gap-1.5 pt-1 text-[11px] ${
            isDark ? 'text-slate-500' : 'text-slate-500'
          }`}>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>99.9% Uptime Verified • 1,000+ Active Clients</span>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
