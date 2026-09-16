import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const partners = [
  { name: 'Google Premier Partner', category: 'Certified Search & Ads', badge: 'Certified' },
  { name: 'Meta Business Partner', category: 'Social & Retargeting', badge: 'Tier 1' },
  { name: 'Shopify Plus Partner', category: 'E-commerce Architecture', badge: 'Verified' },
  { name: 'HubSpot Solution Partner', category: 'Inbound & CRM Engine', badge: 'Elite' },
  { name: 'Stripe Verified Partner', category: 'Commercial Billing', badge: 'Global' },
  { name: 'Twilio Cloud Telecom', category: 'SMS & Voice Automation', badge: 'Direct API' },
];

const tickerItems = [
  { metric: '+184%', label: 'Average Organic Traffic Lift across 90-day SEO sprints', tag: 'SEO & Content' },
  { metric: '2.8x', label: 'Faster Lead Response Time with Go Automated Chatbots & SMS', tag: 'Automation' },
  { metric: '100%', label: 'Done-For-You Delivery: Dedicated copywriters, designers & engineers', tag: 'Professionals' },
  { metric: '64%', label: 'Average Reduction in software subscription overhead by consolidating tools', tag: 'Cost Efficiency' },
  { metric: '15+ Yrs', label: 'Vetted Industry Experience & 300+ Man-Years Cumulative Expertise', tag: 'Track Record' },
  { metric: '<48h', label: 'Fast-Track Brand Audit & Campaign Architecture Kickoff', tag: 'Speed to Market' },
];

export default function TrustTicker() {
  const [activeItem, setActiveItem] = useState(null);
  const { isDark } = useTheme();

  return (
    <section className={`relative border-y overflow-hidden py-6 transition-colors duration-200 ${
      isDark ? 'bg-[#070A11] border-slate-800/80' : 'bg-slate-50 border-slate-200/90'
    }`}>
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.02] via-blue-500/[0.03] to-amber-500/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Summary Row */}
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b ${
          isDark ? 'border-slate-800/70' : 'border-slate-200'
        }`}>
          {/* Left: Verified Review Rating */}
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-1.5 p-2 rounded-xl border shadow-sm ${
              isDark ? 'bg-slate-900/90 border-slate-700/80' : 'bg-white border-slate-200'
            }`}>
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className={`font-extrabold text-sm ml-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                4.9 / 5.0
              </span>
            </div>
            <div>
              <div className={`flex items-center gap-1.5 text-xs font-semibold ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>Verified Business Growth Platform</span>
              </div>
              <p className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                Trusted by 1,000+ ambitious brands and scaling SMEs
              </p>
            </div>
          </div>

          {/* Center / Right: Certified Technology & Strategy Network */}
          <div className="flex items-center flex-wrap justify-center lg:justify-end gap-2.5 sm:gap-3">
            <span className={`text-[11px] uppercase tracking-wider font-semibold mr-1 flex items-center gap-1 ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}>
              <ShieldCheck className="w-3.5 h-3.5 text-amber-500" />
              Verified Partnerships:
            </span>
            {partners.map((partner) => (
              <div
                key={partner.name}
                className={`group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-all cursor-default ${
                  isDark
                    ? 'bg-slate-900/60 hover:bg-slate-800 border-slate-800 hover:border-slate-600'
                    : 'bg-white hover:bg-slate-100 border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
                title={`${partner.name} - ${partner.category}`}
              >
                <span className={`text-xs font-semibold transition-colors ${
                  isDark ? 'text-slate-300 group-hover:text-white' : 'text-slate-700 group-hover:text-slate-900'
                }`}>
                  {partner.name}
                </span>
                <span className={`text-[9px] uppercase px-1.5 py-0.5 rounded font-bold border ${
                  isDark
                    ? 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                    : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  {partner.badge}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Scrolling / Interactive Proof Ticker */}
        <div className="pt-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className={`text-xs uppercase font-bold tracking-wider flex items-center gap-1.5 ${
              isDark ? 'text-slate-300' : 'text-slate-700'
            }`}>
              <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />
              Live Verified Milestones & Client Outcomes
            </span>
            <span className={`text-[11px] hidden sm:inline ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
              • Hover to pause metrics
            </span>
          </div>

          {/* Ticker Container with smooth continuous animation */}
          <div className="relative overflow-hidden py-1">
            {/* Edge Gradients for soft fading */}
            <div className={`absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r to-transparent z-10 pointer-events-none ${
              isDark ? 'from-[#070A11]' : 'from-slate-50'
            }`} />
            <div className={`absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l to-transparent z-10 pointer-events-none ${
              isDark ? 'from-[#070A11]' : 'from-slate-50'
            }`} />

            <div className="flex gap-4 animate-[ticker_35s_linear_infinite] hover:[animation-play-state:paused] w-max">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveItem(index)}
                  onMouseLeave={() => setActiveItem(null)}
                  className={`inline-flex items-center gap-3 px-4 py-2.5 rounded-xl border transition-all duration-200 cursor-pointer ${
                    activeItem === index
                      ? isDark
                        ? 'bg-slate-800/90 border-amber-500/40 shadow-lg scale-[1.02]'
                        : 'bg-white border-amber-400 shadow-md scale-[1.02]'
                      : isDark
                        ? 'bg-slate-900/50 border-slate-800/80 hover:border-slate-700'
                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <span className={`text-sm sm:text-base font-black font-mono tracking-tight shrink-0 ${
                    isDark ? 'text-amber-400' : 'text-amber-600'
                  }`}>
                    {item.metric}
                  </span>
                  <div className={`h-4 w-px shrink-0 ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`} />
                  <span className={`text-xs sm:text-sm font-medium whitespace-nowrap ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {item.label}
                  </span>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shrink-0 border ${
                    isDark 
                      ? 'bg-slate-800 text-slate-400 border-slate-700/60' 
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {item.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
