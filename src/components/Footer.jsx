import React from 'react';
import { nikhilData } from '../data/nikhilData';
import { ArrowUp, Shield, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Footer = () => {
  const { isDark } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t transition-colors duration-500 text-xs pt-10 pb-8 relative z-10 ${
      isDark 
        ? 'bg-[#04060A] border-[#C9A84C]/25 text-slate-400' 
        : 'bg-[#F9F9F8] border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-6 border-b ${
          isDark ? 'border-white/10' : 'border-slate-200'
        }`}>
          
          {/* Brand & Founder Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4 text-left">
            {/* Founder Cursive Signature */}
            <div className="flex flex-col select-none">
              <span
                className={`font-signature text-4xl sm:text-5xl lg:text-[3.2rem] tracking-wide transition-all duration-300 leading-none font-bold ${
                  isDark
                    ? 'text-[#F5E6C8] hover:text-[#E6B84A] drop-shadow-[0_2px_12px_rgba(201,168,76,0.4)]'
                    : 'text-slate-950 hover:text-[#9B7B2C]'
                }`}
              >
                Nikhil Sharma
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C9A84C] font-semibold mt-1">
                Founder &amp; CEO
              </span>
            </div>

            <div className="space-y-1.5 pt-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#C9A84C] font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>ETNOW.in Business Conclave 2026 Honoree</span>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed max-w-md font-light ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Curating India’s rarest journeys with quiet access, authentic human connection, and uncompromising ground sovereignty under the leadership of Founder &amp; CEO Nikhil Sharma.
              </p>
            </div>

            <div className={`flex flex-wrap items-center gap-4 text-xs font-mono pt-1 ${
              isDark ? 'text-slate-300' : 'text-slate-700 font-medium'
            }`}>
              <a href={`mailto:${nikhilData.founder.email}`} className="hover:text-[#C9A84C] transition-colors">
                {nikhilData.founder.email}
              </a>
              <span>•</span>
              <a href={`tel:${nikhilData.founder.phone}`} className="hover:text-[#C9A84C] transition-colors">
                {nikhilData.founder.phone}
              </a>
            </div>
          </div>

          {/* Quick Navigation: Expeditions (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h5 className="font-mono uppercase tracking-widest text-[#C9A84C] font-semibold text-xs">
              Expeditions
            </h5>
            <ul className={`space-y-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <li><a href="#about" className="hover:text-[#C9A84C] transition-colors">The Mind Behind</a></li>
              <li><a href="#journey" className="hover:text-[#C9A84C] transition-colors">The Cinematic Path</a></li>
              <li><a href="#curations" className="hover:text-[#C9A84C] transition-colors">Curated Collections</a></li>
              <li><a href="#philosophy" className="hover:text-[#C9A84C] transition-colors">The Elevated Standard</a></li>
              <li><a href="#global" className="hover:text-[#C9A84C] transition-colors">Global Footprint</a></li>
              <li><a href="#gallery" className="hover:text-[#C9A84C] transition-colors">Field Notes Gallery</a></li>
            </ul>
          </div>

          {/* Ventures & Ecosystem (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h5 className="font-mono uppercase tracking-widest text-[#C9A84C] font-semibold text-xs">
              Founder Ventures
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.elevatedindia.com" target="_blank" rel="noopener noreferrer" className={`hover:text-[#C9A84C] transition-colors flex items-center justify-between group ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <span className="group-hover:translate-x-0.5 transition-transform">Elevated India</span>
                  <span className="text-[10px] font-mono text-[#C9A84C]">Luxury Travel</span>
                </a>
              </li>
              <li>
                <a href="https://fabulousmedia.in" target="_blank" rel="noopener noreferrer" className={`hover:text-[#C9A84C] transition-colors flex items-center justify-between group ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <span className="group-hover:translate-x-0.5 transition-transform">Fabulous Media</span>
                  <span className="text-[10px] font-mono text-[#C9A84C]">Digital Growth</span>
                </a>
              </li>
              <li>
                <a href="https://www.nikhilsharma.com" target="_blank" rel="noopener noreferrer" className={`hover:text-[#C9A84C] transition-colors flex items-center justify-between group ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <span className="group-hover:translate-x-0.5 transition-transform">NS Transform</span>
                  <span className="text-[10px] font-mono text-[#C9A84C]">Strategic Advisory</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Hubs (2 cols) */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h5 className="font-mono uppercase tracking-widest text-[#C9A84C] font-semibold text-xs">
              Offices
            </h5>
            <div className={`space-y-2 text-xs ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <p><strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>New Delhi:</strong> Aerocity</p>
              <p><strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>Jaipur:</strong> Civil Lines</p>
              <p><strong className={isDark ? 'text-slate-200' : 'text-slate-800'}>Gurugram:</strong> Cyber City</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright, discretion notice, and right-corner site credits */}
        <div className={`flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono pt-2 ${
          isDark ? 'text-slate-500' : 'text-slate-600'
        }`}>
          <div className="flex items-center gap-2 flex-wrap text-center sm:text-left justify-center sm:justify-start">
            <Shield className="w-3.5 h-3.5 text-[#C9A84C]" />
            <span>© {new Date().getFullYear()} Nikhil Sharma. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a href="#contact" className="hover:text-[#C9A84C] transition-colors">Privacy &amp; Discretion</a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
            {/* Site Credits: FabulousMedia & GoCommercially */}
            <div className="poweredBy" id="footer-site-credits">
              <a
                href="https://play.fabulousmedia.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="FabulousMedia"
                className="creditLogo"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/fabulousmedia.svg"
                  alt="FabulousMedia"
                />
              </a>

              <div className="divider" />

              <a
                href="https://gocommercially.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GoCommercially"
                className="creditLogo"
              >
                <img
                  src="https://play.fabulousmedia.in/sitecredit/images/gocommercially.svg"
                  alt="GoCommercially"
                />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#C9A84C] transition-colors uppercase tracking-wider text-xs cursor-pointer font-semibold"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
