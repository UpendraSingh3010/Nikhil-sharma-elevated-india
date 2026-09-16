import React from 'react';
import { siteContent } from '../data/siteContent';
import doneForYouVisual from '../assets/Done For You.png';
import { useTheme } from '../context/ThemeContext';
import { CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function DoneForYou() {
  const { doneForYou } = siteContent;
  const { isDark } = useTheme();

  return (
    <section className={`py-24 border-y relative overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#070A11] border-slate-800/80' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`rounded-3xl p-8 sm:p-12 lg:p-16 border shadow-2xl relative overflow-hidden transition-colors duration-200 ${
          isDark 
            ? 'bg-gradient-to-r from-[#0B0F19] via-[#0F172A] to-[#0B0F19] border-slate-700/80' 
            : 'bg-gradient-to-r from-slate-50 via-white to-slate-50 border-slate-200/90 shadow-xl'
        }`}>
          {/* Subtle background glow */}
          <div className={`absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[350px] blur-[150px] rounded-full pointer-events-none ${
            isDark ? 'bg-amber-500/10' : 'bg-amber-500/5'
          }`} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider backdrop-blur-md border ${
                isDark
                  ? 'bg-amber-500/10 border-amber-500/25 text-amber-300'
                  : 'bg-amber-50 border-amber-300 text-amber-800'
              }`}>
                <Sparkles className="w-3.5 h-3.5" />
                <span>{doneForYou.tag}</span>
              </div>

              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {doneForYou.heading}
              </h2>

              <div className={`text-xl font-bold ${
                isDark ? 'text-gradient-amber' : 'text-amber-700'
              }`}>
                {doneForYou.subheading}
              </div>

              <p className={`text-base sm:text-lg leading-relaxed ${
                isDark ? 'text-slate-200/90' : 'text-slate-700'
              }`}>
                {doneForYou.description}
              </p>

              {/* Feature checkmark list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {doneForYou.features.map((feat, idx) => (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-3 p-3.5 rounded-xl border shadow-xs transition-colors ${
                      isDark 
                        ? 'bg-slate-900/70 border-slate-700/80' 
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className={`text-xs sm:text-sm font-medium leading-snug ${
                      isDark ? 'text-slate-200' : 'text-slate-800'
                    }`}>
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a
                  href={doneForYou.cta.href}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-bold px-8 py-4 rounded-xl text-base shadow-[0_0_25px_-5px_rgba(245,158,11,0.35)] border-t border-white/30 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>{doneForYou.cta.label}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: 3D Golden Shield & Gears Illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm sm:max-w-md">
                <div className={`absolute -inset-6 blur-[100px] rounded-full -z-10 animate-pulse-glow ${
                  isDark
                    ? 'bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-amber-400/15'
                    : 'bg-gradient-to-tr from-amber-400/20 via-orange-300/15 to-amber-400/15'
                }`} />
                <div className={`rounded-3xl p-1.5 shadow-2xl backdrop-blur-md overflow-hidden group border ${
                  isDark
                    ? 'bg-gradient-to-b from-slate-600/50 via-slate-700/30 to-slate-900/80 border-slate-700/60'
                    : 'bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border-slate-300'
                }`}>
                  <div className={`rounded-[20px] overflow-hidden relative ${
                    isDark ? 'bg-[#070A11]/90' : 'bg-slate-950'
                  }`}>
                    <img
                      src={doneForYouVisual}
                      alt="GoCommercially Fully Managed Security & Automated Engines"
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`p-3.5 border-t flex items-center justify-between text-xs transition-colors ${
                      isDark 
                        ? 'bg-slate-900/90 border-slate-800' 
                        : 'bg-white border-slate-200'
                    }`}>
                      <span className={`font-semibold flex items-center gap-1.5 ${
                        isDark ? 'text-slate-200' : 'text-slate-800'
                      }`}>
                        <ShieldCheck className="w-4 h-4 text-amber-500" />
                        100% White-Glove Execution
                      </span>
                      <span className={`font-bold ${
                        isDark ? 'text-emerald-400' : 'text-emerald-700'
                      }`}>
                        Zero Overhead
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
