import React from 'react';
import { siteContent } from '../data/siteContent';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, Search, Compass, Repeat, Sparkles } from 'lucide-react';

const icons = [Search, Compass, Repeat];

const productsByCard = [
  ["GO SEO", "GO Social", "GO Email", "GO SMS"],
  ["GO Websites", "GO Mobile", "GO Chatbot"],
  ["GO CRM", "GO Reviews", "GO Convert"]
];

export default function SolutionsGrid() {
  const { solutionsGrid } = siteContent;
  const { isDark } = useTheme();

  return (
    <section className={`py-24 relative transition-colors duration-200 ${
      isDark ? 'bg-[#070A11]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border ${
            isDark 
              ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' 
              : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>{solutionsGrid.sectionTitle}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {solutionsGrid.heading}
          </h2>
          <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            {solutionsGrid.subheading}
          </p>
        </div>

        {/* 3 Solution Funnel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutionsGrid.cards.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            const chips = productsByCard[idx] || [];

            return (
              <div
                key={card.id || `solution-card-${idx}`}
                className={`group flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 backdrop-blur-sm border ${
                  isDark
                    ? 'bg-[#0F172A]/70 hover:bg-[#0F172A] border-slate-800 hover:border-amber-500/40 shadow-card hover:-translate-y-1.5 hover:shadow-lg hover:shadow-amber-500/5'
                    : 'bg-white hover:bg-white border-slate-200 hover:border-amber-400 shadow-xs hover:-translate-y-1.5 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-colors ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 text-slate-300 group-hover:text-amber-400'
                        : 'bg-slate-100 border-slate-200 group-hover:border-amber-400 group-hover:bg-amber-50 text-slate-700 group-hover:text-amber-700'
                    }`}>
                      <Icon className="w-6 h-6 transition-colors" />
                    </div>
                    <span className={`text-xs font-mono font-bold ${
                      isDark ? 'text-slate-500' : 'text-slate-600'
                    }`}>STAGE 0{idx + 1}</span>
                  </div>

                  <h3 className={`text-xl font-bold mb-2 leading-snug transition-colors ${
                    isDark ? 'text-white group-hover:text-amber-400' : 'text-slate-900 group-hover:text-amber-700'
                  }`}>
                    {card.title}
                  </h3>

                  <div className={`text-xs font-semibold mb-3 tracking-wide uppercase ${
                    isDark ? 'text-amber-500/90' : 'text-amber-800 font-bold'
                  }`}>
                    {card.subtitle}
                  </div>

                  <p className={`text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-600 group-hover:text-slate-700'
                  }`}>
                    {card.desc}
                  </p>

                  {/* Included Product Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {chips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${
                          isDark 
                            ? 'bg-slate-900/80 border-slate-800 text-slate-300 group-hover:border-slate-700' 
                            : 'bg-slate-100 border-slate-200 text-slate-800 group-hover:border-slate-300'
                        }`}
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`mt-8 pt-6 border-t flex items-center justify-between ${
                  isDark ? 'border-slate-800/80' : 'border-slate-100'
                }`}>
                  <a
                    href={card.link}
                    className={`text-xs font-bold inline-flex items-center gap-1.5 transition-colors ${
                      isDark 
                        ? 'text-slate-300 group-hover:text-amber-400' 
                        : 'text-slate-700 group-hover:text-amber-700 font-semibold'
                    }`}
                  >
                    <span>View Solution Stack</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className={`text-xs font-mono ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>
                    0{idx + 1}/03
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
