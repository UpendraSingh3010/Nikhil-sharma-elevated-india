import React, { useState } from 'react';
import { siteContent } from '../data/siteContent';
import { useTheme } from '../context/ThemeContext';
import { Users, Building2, Trophy, Lightbulb, BadgePercent, HeartHandshake, Sparkles, CheckCircle, ArrowUpRight } from 'lucide-react';

const icons = [Users, Building2, Trophy, Lightbulb, BadgePercent, HeartHandshake];

const categories = [
  { id: 'all', label: 'All Advantages' },
  { id: 'expertise', label: 'Track Record & Leadership' },
  { id: 'technology', label: 'Award-Winning Tech' },
  { id: 'scale', label: 'SME Scale & Support' },
];

const badgeMetadata = [
  { category: 'expertise', metric: '15+ Years Track Record', tag: 'Leadership' },
  { category: 'scale', metric: '1,000+ Active Clients', tag: 'Social Proof' },
  { category: 'technology', metric: '99.9% Cloud Uptime', tag: 'Proprietary' },
  { category: 'technology', metric: 'Weekly Growth Tests', tag: 'R&D Edge' },
  { category: 'scale', metric: '<48h Time to Launch', tag: 'Turnaround' },
  { category: 'expertise', metric: '1-on-1 Dedicated Director', tag: 'Partnership' },
];

export default function TrustBadges() {
  const { trustBadges } = siteContent;
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = trustBadges.items.map((item, idx) => ({
    ...item,
    meta: badgeMetadata[idx] || { category: 'scale', metric: 'Verified', tag: 'Advantage' },
    originalIndex: idx
  })).filter(item => selectedCategory === 'all' || item.meta.category === selectedCategory);

  return (
    <section className={`py-24 relative transition-colors duration-200 ${
      isDark ? 'bg-[#070A11]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border ${
            isDark 
              ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' 
              : 'bg-amber-50 border-amber-300 text-amber-800'
          }`}>
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why GoCommercially?</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Built for scale. Trusted by industry leaders.
          </h2>
          <p className={`text-base max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            A battle-tested foundation combining enterprise infrastructure, dedicated specialists, and transparent outcomes.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                selectedCategory === cat.id
                  ? isDark
                    ? 'bg-amber-500/20 text-amber-300 border-amber-400/80 shadow-[0_0_20px_-5px_rgba(245,158,11,0.3)]'
                    : 'bg-amber-100 text-amber-900 border-amber-400 font-bold shadow-xs'
                  : isDark
                    ? 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                    : 'bg-white text-slate-600 border-slate-200 hover:text-slate-900 hover:border-slate-300 shadow-xs'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((badge) => {
            const Icon = icons[badge.originalIndex % icons.length];
            const isFeatured = badge.originalIndex === 0 || badge.originalIndex === 2;

            return (
              <div
                key={badge.originalIndex}
                className={`group p-8 rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                  isFeatured
                    ? isDark
                      ? 'bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0B0F19] border-slate-700/80 hover:border-amber-500/40 shadow-card'
                      : 'bg-white border-slate-200 hover:border-amber-400 shadow-sm'
                    : isDark
                      ? 'bg-[#0B0F19]/80 border-slate-800/80 hover:border-slate-700 hover:bg-[#0F172A]'
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center transition-all duration-200 ${
                      isDark 
                        ? 'bg-slate-900 border-slate-700 group-hover:border-amber-500/50 group-hover:bg-amber-500/10 text-slate-300 group-hover:text-amber-400' 
                        : 'bg-slate-100 border-slate-200 group-hover:border-amber-400 group-hover:bg-amber-50 text-slate-700 group-hover:text-amber-700'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider border ${
                      isDark
                        ? 'bg-slate-800 text-amber-300/90 border-slate-700/60'
                        : 'bg-slate-100 text-amber-800 border-slate-200 font-bold'
                    }`}>
                      {badge.meta.tag}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 transition-colors ${
                    isDark
                      ? 'text-white group-hover:text-amber-400'
                      : 'text-slate-900 group-hover:text-amber-700'
                  }`}>
                    {badge.title}
                  </h3>

                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-slate-300/90 group-hover:text-slate-200' : 'text-slate-600 group-hover:text-slate-700'
                  }`}>
                    {badge.desc}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between text-xs font-medium ${
                  isDark ? 'border-slate-800/70' : 'border-slate-100'
                }`}>
                  <div className="flex items-center gap-1.5 text-emerald-500">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span className={`font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>{badge.meta.metric}</span>
                  </div>
                  <span className={`flex items-center gap-0.5 text-[11px] transition-colors ${
                    isDark ? 'text-slate-500 group-hover:text-amber-400' : 'text-slate-400 group-hover:text-amber-700'
                  }`}>
                    Verified
                    <ArrowUpRight className="w-3 h-3" />
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
