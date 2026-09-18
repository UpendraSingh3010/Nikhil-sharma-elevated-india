import React, { useState, useEffect } from 'react';
import { nikhilData } from '../data/nikhilData';
import { Menu, X, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Journey', href: '#journey' },
    { label: 'Curations', href: '#curations' },
    { label: 'Ecosystem', href: '#ecosystem' },
    { label: 'Philosophy', href: '#philosophy' },
    { label: 'Global', href: '#global' },
    { label: 'Stories', href: '#stories' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === '#ecosystem') {
      window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'ecosystem' }));
      const el = document.querySelector('#curations') || document.querySelector('#ecosystem');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    if (href === '#curations') {
      window.dispatchEvent(new CustomEvent('switch-tab', { detail: 'curations' }));
      const el = document.querySelector('#curations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Floating Luxury Glass Pill Header */}
      <header className="fixed top-2.5 sm:top-3.5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div className="max-w-6xl mx-auto relative pointer-events-auto">
          {/* Subtle Ambient Golden Glow Behind Capsule */}
          <div
            className={`absolute -inset-0.5 rounded-full blur-md transition-opacity duration-500 pointer-events-none ${
              isDark
                ? scrolled
                  ? 'bg-gradient-to-r from-[#C9A84C]/25 via-[#E6B84A]/15 to-[#C9A84C]/25 opacity-70'
                  : 'bg-gradient-to-r from-[#C9A84C]/15 via-transparent to-[#C9A84C]/15 opacity-50'
                : scrolled
                  ? 'bg-gradient-to-r from-amber-400/20 via-yellow-300/15 to-amber-400/20 opacity-60'
                  : 'opacity-0'
            }`}
          />

          {/* Main Floating Capsule Bar */}
          <div
            className={`relative flex items-center justify-between px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border transition-all duration-300 ${
              isDark
                ? scrolled
                  ? 'bg-[#060810]/90 backdrop-blur-2xl border-[#C9A84C]/35 shadow-[0_14px_40px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]'
                  : 'bg-[#080B14]/80 backdrop-blur-xl border-[#C9A84C]/25 shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]'
                : scrolled
                  ? 'bg-white/95 backdrop-blur-2xl border-[#C9A84C]/35 shadow-[0_10px_35px_rgba(15,23,42,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]'
                  : 'bg-white/85 backdrop-blur-xl border-[#C9A84C]/25 shadow-[0_6px_25px_rgba(15,23,42,0.06)]'
            }`}
          >
            {/* Founder Signature (Refined, single-line crisp scaling) */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center group py-0.5 select-none pl-1 flex-shrink-0"
              aria-label="Nikhil Sharma - Home"
            >
              <span
                className={`font-signature text-xl sm:text-2xl lg:text-[1.65rem] tracking-wide whitespace-nowrap transition-all duration-300 transform group-hover:scale-105 leading-none inline-block font-bold ${
                  isDark
                    ? 'text-[#F5E6C8] group-hover:text-[#E6B84A] drop-shadow-[0_2px_10px_rgba(201,168,76,0.35)]'
                    : 'text-slate-950 group-hover:text-[#9B7B2C]'
                }`}
              >
                Nikhil Sharma
              </span>
            </a>

            {/* Desktop Navigation Links: Small, Crisp & Elegant Pills */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-[10px] xl:text-[11px] uppercase tracking-[0.14em] font-medium px-2.5 py-1 rounded-full transition-all duration-200 relative ${
                    isDark
                      ? 'text-slate-300 hover:text-amber-200 hover:bg-[#C9A84C]/15 hover:shadow-[0_0_12px_rgba(201,168,76,0.2)]'
                      : 'text-slate-700 hover:text-amber-900 hover:bg-amber-100/70 font-semibold'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Actions: Theme Switcher & Inquire CTA */}
            <div className="hidden sm:flex items-center gap-2">
              {/* Theme Toggle Button */}
              <button
                id="nav-theme-toggle"
                onClick={toggleTheme}
                className={`w-7 h-7 rounded-full border transition-all duration-300 active:scale-90 flex items-center justify-center shadow-sm group ${
                  isDark
                    ? 'border-amber-400/30 hover:border-amber-400 bg-white/5 hover:bg-amber-400/15 text-amber-300 hover:text-amber-200'
                    : 'border-amber-500/40 hover:border-amber-600 bg-white hover:bg-amber-50 text-amber-700 hover:text-amber-800 shadow-sm'
                }`}
                title={isDark ? 'Switch to Radiant Light Version' : 'Switch to Royal Dark Version'}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDark ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-amber-700 group-hover:-rotate-12 transition-transform duration-300" />
                )}
              </button>

              {/* Inquire CTA */}
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#9B7B2C] via-[#C9A84C] to-[#E6B84A] hover:from-[#C9A84C] hover:to-[#9B7B2C] text-black font-heading font-black text-[10.5px] tracking-wider uppercase transition-all duration-200 flex items-center gap-1 active:scale-95 shadow-md shadow-[#C9A84C]/25 hover:scale-[1.03]"
              >
                <span>Inquire</span>
                <ArrowUpRight className="w-3 h-3 text-black stroke-[2.5]" />
              </a>
            </div>

            {/* Mobile Controls: Theme Toggle & Menu Hamburger */}
            <div className="flex sm:hidden items-center gap-1.5">
              <button
                onClick={toggleTheme}
                className={`w-7 h-7 rounded-full border transition-all duration-300 active:scale-90 flex items-center justify-center ${
                  isDark
                    ? 'border-amber-400/30 bg-white/5 text-amber-300'
                    : 'border-amber-500/40 bg-white text-amber-700 shadow-sm'
                }`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-amber-700" />}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${
                  isDark
                    ? 'text-slate-200 hover:text-amber-300 bg-white/5 border-white/10'
                    : 'text-slate-800 hover:text-amber-700 bg-slate-100 border-slate-300'
                }`}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Glass Mobile Menu Panel */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Floating Dropdown Card */}
          <div
            className={`fixed top-14 inset-x-3.5 max-w-sm mx-auto z-50 lg:hidden rounded-2xl p-4 border backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] animate-fadeIn ${
              isDark
                ? 'bg-[#070A12]/95 border-[#C9A84C]/30 text-white'
                : 'bg-white/95 border-[#C9A84C]/40 text-slate-900 shadow-xl'
            }`}
          >
            <div className="flex items-center justify-between border-b pb-2 mb-2.5 border-amber-500/15">
              <p className="text-[9px] uppercase font-mono tracking-[0.25em] text-[#C9A84C] font-bold">
                Navigation
              </p>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full hover:bg-white/10 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-1.5 py-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-xs font-mono uppercase tracking-wider py-2 px-3 rounded-xl transition-all ${
                    isDark
                      ? 'text-slate-200 hover:text-amber-300 hover:bg-[#C9A84C]/15'
                      : 'text-slate-800 hover:text-amber-800 hover:bg-amber-50'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t mt-2 border-white/10">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="w-full block text-center py-2.5 rounded-full bg-gradient-to-r from-[#9B7B2C] via-[#C9A84C] to-[#E6B84A] text-black font-heading font-bold text-xs uppercase tracking-wider shadow-md shadow-[#C9A84C]/20"
              >
                Private Consultation
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};
