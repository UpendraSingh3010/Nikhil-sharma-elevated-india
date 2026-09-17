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
      setScrolled(window.scrollY > 40);
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
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? 'bg-[#050508]/95 backdrop-blur-xl border-b border-[#C9A84C]/20 py-2 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
              : 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 py-2 shadow-sm'
            : isDark
              ? 'bg-[#050508]/75 backdrop-blur-md border-b border-white/5 py-2.5'
              : 'bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Founder Signature (Cursive Typography - Bold & Crystal Clear) */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center group py-0.5 select-none"
            aria-label="Nikhil Sharma - Home"
          >
            <span
              className={`font-signature text-3xl sm:text-4xl lg:text-[2.5rem] tracking-wide transition-all duration-300 transform group-hover:scale-105 leading-none block font-bold ${
                isDark
                  ? 'text-[#F5E6C8] group-hover:text-[#E6B84A] drop-shadow-[0_2px_12px_rgba(201,168,76,0.4)]'
                  : 'text-slate-950 group-hover:text-[#9B7B2C]'
              }`}
            >
              Nikhil Sharma
            </span>
          </a>

          {/* Desktop Navigation Links: Small, Crisp & Highly Visible */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-[11px] uppercase tracking-[0.16em] font-medium transition-colors relative py-1 ${
                  isDark
                    ? 'text-slate-200 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]'
                    : 'text-slate-800 hover:text-amber-600 hover:drop-shadow-[0_0_8px_rgba(217,119,6,0.25)] font-semibold'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Theme Switcher Icon & Clean Inquire CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Nav Theme Toggle Button */}
            <button
              id="nav-theme-toggle"
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 active:scale-90 flex items-center justify-center shadow-sm group ${
                isDark
                  ? 'border-amber-400/30 hover:border-amber-400 bg-white/5 hover:bg-amber-400/15 text-amber-300 hover:text-amber-200'
                  : 'border-amber-500/40 hover:border-amber-600 bg-white hover:bg-amber-50 text-amber-700 hover:text-amber-800 shadow-sm'
              }`}
              title={isDark ? 'Switch to Radiant Light Version' : 'Switch to Royal Dark Version'}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-amber-700 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className={`nav-inquire-btn keep-white px-4 py-1.5 rounded-full border text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 active:scale-95 shadow-sm ${
                isDark
                  ? 'border-amber-400/40 bg-amber-400/10 hover:bg-amber-400/20 text-amber-200 hover:text-white'
                  : 'border-amber-500/50 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold shadow-amber-500/20'
              }`}
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Mobile Right Controls: Theme Toggle & Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full border transition-all duration-300 active:scale-90 flex items-center justify-center ${
                isDark
                  ? 'border-amber-400/30 bg-white/5 text-amber-300'
                  : 'border-amber-500/40 bg-white text-amber-700 shadow-sm'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-700" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg border transition-colors ${
                isDark
                  ? 'text-slate-200 hover:text-amber-300 hover:bg-white/5 border-white/10'
                  : 'text-slate-800 hover:text-amber-700 hover:bg-slate-100 border-slate-300'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 lg:hidden backdrop-blur-xl pt-20 px-6 pb-8 flex flex-col justify-between border-b animate-fadeIn ${
            isDark
              ? 'bg-[#070A10]/98 border-amber-500/20'
              : 'bg-white/98 border-amber-500/30 shadow-2xl'
          }`}
        >
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b pb-2 mb-3 border-amber-500/15">
              <p className="text-[10px] uppercase tracking-[0.25em] text-amber-500 font-semibold">
                Navigation
              </p>
              {/* Mobile theme switcher inside drawer */}
              <button
                onClick={toggleTheme}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider transition-colors ${
                  isDark
                    ? 'bg-white/10 text-amber-300 hover:bg-white/15'
                    : 'bg-amber-100 text-amber-800 hover:bg-amber-200'
                }`}
              >
                {isDark ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-amber-700" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block text-base font-serif py-2 border-b transition-colors ${
                  isDark
                    ? 'text-slate-200 hover:text-amber-300 border-white/5'
                    : 'text-slate-800 hover:text-amber-700 border-slate-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className={`pt-6 border-t ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full block text-center py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20"
            >
              Private Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
};

