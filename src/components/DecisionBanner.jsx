import React from 'react';
import { siteContent } from '../data/siteContent';
import decisionBgDark from '../assets/Decision Banner.png';
import decisionBgLight from '../assets/Decision Banner Light.png';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function DecisionBanner() {
  const { decisionBanner } = siteContent;
  const { isDark } = useTheme();

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#070A11]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`rounded-3xl p-8 sm:p-12 lg:p-16 border shadow-2xl relative overflow-hidden transition-colors duration-200 ${
          isDark 
            ? 'bg-[#0A0E18] border-slate-700/80 text-white' 
            : 'bg-white border-slate-200/90 text-slate-900 shadow-xl'
        }`}>
          {/* Panoramic Ambient Horizon Image Background with Dynamic Light/Dark Overlays */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden transition-all duration-300">
            <img
              src={isDark ? decisionBgDark : decisionBgLight}
              alt="Cinematic Horizon"
              className={`w-full h-full object-cover object-right sm:object-center transition-all duration-300 ${
                isDark 
                  ? 'opacity-60' 
                  : 'opacity-90 mix-blend-multiply'
              }`}
            />
            {/* Soft gradient mask protecting text contrast on the left while keeping the horizon vibrant on the right */}
            <div className={`absolute inset-0 ${
              isDark 
                ? 'bg-gradient-to-r from-[#0A0E18] via-[#0A0E18]/80 to-transparent' 
                : 'bg-gradient-to-r from-white via-white/80 to-transparent sm:via-white/60'
            }`} />
            {/* Subtle bottom vignette */}
            <div className={`absolute inset-0 ${
              isDark
                ? 'bg-gradient-to-t from-[#0A0E18]/80 via-transparent to-transparent'
                : 'bg-gradient-to-t from-white/50 via-transparent to-transparent'
            }`} />
          </div>

          <div className="max-w-3xl relative z-10">
            {/* Preheading Pill */}
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-[0.2em] mb-4 backdrop-blur-md border ${
              isDark
                ? 'bg-amber-500/10 border-amber-500/25 text-amber-300'
                : 'bg-amber-50 border-amber-300 text-amber-800'
            }`}>
              <Sparkles className="w-3.5 h-3.5" />
              <span>{decisionBanner.preheading}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-3 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {decisionBanner.heading}
            </h2>

            <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${
              isDark ? 'text-gradient-amber' : 'text-amber-700'
            }`}>
              {decisionBanner.subheading}
            </h3>

            <p className={`text-base sm:text-lg leading-relaxed mb-8 ${
              isDark ? 'text-slate-200/90' : 'text-slate-700'
            }`}>
              {decisionBanner.body}
            </p>

            {/* Proof points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className={`flex items-center gap-3 text-sm font-medium ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Zero risky freelancer dependencies</span>
              </div>
              <div className={`flex items-center gap-3 text-sm font-medium ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Validated workflows vetted for maximum ROI</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={decisionBanner.cta.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-[0_0_25px_-5px_rgba(245,158,11,0.35)] border-t border-white/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>{decisionBanner.cta.label}</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <span className={`text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Guaranteed satisfaction • Full white-glove onboarding
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
