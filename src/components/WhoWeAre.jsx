import React from 'react';
import { siteContent } from '../data/siteContent';
import whoWeAreVisual from '../assets/Who We Are.png';
import { useTheme } from '../context/ThemeContext';
import { ShieldCheck, Award, Rocket } from 'lucide-react';

export default function WhoWeAre() {
  const { whoWeAre } = siteContent;
  const { isDark } = useTheme();

  return (
    <section className={`py-24 border-t relative overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#070A11] border-slate-800/80' : 'bg-slate-50 border-slate-200'
    }`}>
      {/* Dynamic ambient background glow */}
      <div className={`absolute top-1/2 right-1/4 w-[450px] h-[350px] blur-[140px] rounded-full pointer-events-none ${
        isDark ? 'bg-amber-500/5' : 'bg-amber-500/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Proof Metrics Bar */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl border shadow-card mb-20 backdrop-blur-md transition-colors ${
          isDark 
            ? 'bg-[#0B0F19]/90 border-slate-800/90' 
            : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className={`text-center p-3 border-r last:border-r-0 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
            <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center justify-center gap-1 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <span>1,000+</span>
            </div>
            <div className={`text-xs mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Businesses Using Platform
            </div>
          </div>
          <div className={`text-center p-3 border-r last:border-r-0 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
            <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center justify-center gap-1 ${
              isDark ? 'text-gradient-amber' : 'text-amber-600'
            }`}>
              <span>15+</span>
            </div>
            <div className={`text-xs mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Years Track Record
            </div>
          </div>
          <div className={`text-center p-3 border-r last:border-r-0 ${isDark ? 'border-slate-800/80' : 'border-slate-200'}`}>
            <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center justify-center gap-1 ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              <span>300+</span>
            </div>
            <div className={`text-xs mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Man-Years Expertise
            </div>
          </div>
          <div className="text-center p-3">
            <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center justify-center gap-1 ${
              isDark ? 'text-emerald-400' : 'text-emerald-600'
            }`}>
              <span>99.9%</span>
            </div>
            <div className={`text-xs mt-1 font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Infrastructure Uptime
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border ${
              isDark
                ? 'bg-slate-800/90 text-amber-300 border-slate-700/80'
                : 'bg-amber-50 text-amber-800 border-amber-300'
            }`}>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{whoWeAre.tag}</span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              {whoWeAre.heading}
            </h2>

            <p className={`text-base leading-relaxed ${
              isDark ? 'text-slate-200/90' : 'text-slate-700'
            }`}>
              {whoWeAre.description}
            </p>

            <div className={`p-6 rounded-2xl border shadow-xs transition-colors ${
              isDark 
                ? 'bg-gradient-to-r from-slate-900 to-[#0F172A] border-slate-700/80' 
                : 'bg-amber-50/70 border-amber-200/80'
            }`}>
              <h3 className={`text-base font-bold mb-1.5 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {whoWeAre.oneStopTitle}
              </h3>
              <p className={`text-sm font-semibold ${
                isDark ? 'text-amber-300' : 'text-amber-800'
              }`}>
                {whoWeAre.oneStopSubtitle}
              </p>
            </div>

            {/* Feature Cards below text */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {whoWeAre.features.map((feat, idx) => (
                <div
                  key={idx}
                  className={`p-5 rounded-xl border transition-all duration-200 ${
                    isDark
                      ? 'bg-[#0F172A]/80 border-slate-800 hover:border-slate-700'
                      : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 border ${
                    isDark
                      ? 'bg-amber-500/10 border-amber-500/20 text-amber-300'
                      : 'bg-amber-50 border-amber-200 text-amber-700'
                  }`}>
                    {idx === 0 ? <Rocket className="w-4 h-4" /> : <Award className="w-4 h-4" />}
                  </div>
                  <h4 className={`text-base font-bold mb-1.5 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {feat.title}
                  </h4>
                  <p className={`text-xs leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: 3D Interconnected Marketing + Tech + Analytics Illustration with Halo */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Dual-color ambient backlight */}
              <div className={`absolute -inset-6 blur-[100px] rounded-full -z-10 animate-pulse-glow ${
                isDark 
                  ? 'bg-gradient-to-tr from-amber-500/20 via-orange-500/10 to-blue-600/20' 
                  : 'bg-gradient-to-tr from-amber-400/20 via-orange-300/15 to-blue-400/15'
              }`} />
              
              <div className={`rounded-3xl p-1.5 shadow-2xl backdrop-blur-md overflow-hidden group border ${
                isDark
                  ? 'bg-gradient-to-b from-slate-600/50 via-slate-700/30 to-slate-900/80 border-slate-700/60'
                  : 'bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border-slate-300'
              }`}>
                <div className={`rounded-[22px] overflow-hidden ${
                  isDark ? 'bg-[#070A11]/95' : 'bg-slate-950'
                }`}>
                  <img
                    src={whoWeAreVisual}
                    alt="GoCommercially Unified Growth Engine: Marketing, Technology, Analytics"
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-700"
                  />
                  <div className={`p-4 border-t flex items-center justify-between text-xs transition-colors ${
                    isDark 
                      ? 'bg-slate-900/90 border-slate-800/80 text-slate-200' 
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}>
                    <span className="font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      Marketing + Technology + Analytics
                    </span>
                    <span className={`font-bold ${
                      isDark ? 'text-amber-300' : 'text-amber-700'
                    }`}>
                      Synchronized Engine
                    </span>
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
