import React from 'react';
import { nikhilData } from '../data/nikhilData';
import { ArrowUp, Shield } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070C] border-t border-amber-500/20 text-slate-400 font-light text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-amber-400/40 bg-[#0E131F] flex items-center justify-center font-display font-semibold text-amber-300 text-sm tracking-wider">
                NS
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white tracking-wider uppercase">
                  {nikhilData.founder.name}
                </h4>
                <p className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
                  Founder &amp; CEO · Elevated India
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Curating India’s rarest journeys with quiet access, authentic human connection, and uncompromising ground sovereignty. Awarded Excellence in Curated Luxury Travel at ETNOW Conclave 2026.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs font-mono text-slate-300">
              <a href={`mailto:${nikhilData.founder.email}`} className="hover:text-amber-300 transition-colors">
                {nikhilData.founder.email}
              </a>
              <span>•</span>
              <a href={`tel:${nikhilData.founder.phone}`} className="hover:text-amber-300 transition-colors">
                {nikhilData.founder.phone}
              </a>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-mono uppercase tracking-widest text-amber-400 font-semibold text-xs">
              Expeditions
            </h5>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">The Mind Behind</a></li>
              <li><a href="#journey" className="hover:text-white transition-colors">The Cinematic Path</a></li>
              <li><a href="#curations" className="hover:text-white transition-colors">Curated Collections</a></li>
              <li><a href="#philosophy" className="hover:text-white transition-colors">The Elevated Standard</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Field Notes Gallery</a></li>
            </ul>
          </div>

          {/* Ventures (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="font-mono uppercase tracking-widest text-amber-400 font-semibold text-xs">
              Founder Ventures
            </h5>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://www.elevatedindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Elevated India</span>
                  <span className="text-[10px] font-mono text-amber-400/70">Luxury Travel</span>
                </a>
              </li>
              <li>
                <a href="https://fabulousmedia.in" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Fabulous Media</span>
                  <span className="text-[10px] font-mono text-amber-400/70">Digital Growth</span>
                </a>
              </li>
              <li>
                <a href="https://gocommercially.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>GoCommercially</span>
                  <span className="text-[10px] font-mono text-amber-400/70">Marketing Platform</span>
                </a>
              </li>
              <li>
                <a href="https://www.nikhilsharma.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>NS Transform</span>
                  <span className="text-[10px] font-mono text-amber-400/70">Advisory</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Hubs (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="font-mono uppercase tracking-widest text-amber-400 font-semibold text-xs">
              Offices
            </h5>
            <div className="space-y-2 text-xs text-slate-400">
              <p><strong className="text-slate-200">New Delhi:</strong> Aerocity</p>
              <p><strong className="text-slate-200">Jaipur:</strong> Civil Lines</p>
              <p><strong className="text-slate-200">Gurugram:</strong> Cyber City</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright, discretion notice, and right-corner site credits */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500 pt-2">
          <div className="flex items-center gap-2 flex-wrap text-center sm:text-left justify-center sm:justify-start">
            <Shield className="w-3.5 h-3.5 text-amber-400" />
            <span>© {new Date().getFullYear()} Nikhil Sharma &amp; Elevated India. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Privacy &amp; Discretion</a>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center sm:justify-end">
            {/* Site Credits */}
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

              <div className="divider"></div>

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
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors uppercase tracking-wider text-xs"
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
