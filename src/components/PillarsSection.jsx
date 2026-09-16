import React, { useState } from 'react';
import { siteContent } from '../data/siteContent';
import pillarsBgDark from '../assets/5 Pillars Section.png';
import pillarsBgLight from '../assets/5 Pillars Section Light.png';
import { useTheme } from '../context/ThemeContext';
import { Layers, Users, CheckCircle2, Search, TrendingUp, Sparkles, ArrowRight, Zap, Check, Cpu, Palette, Rocket } from 'lucide-react';

const coreTriad = [
  {
    title: "PLATFORM",
    subtitle: "All Tools & Tech Architecture",
    desc: "Unified cloud stack for Websites, Mobile, CRM, Lead Capture, and Marketing Automation. Eliminates 10+ subscriptions.",
    icon: "/assets/brand/icons/business-6331809.svg",
    badge: "Infrastructure",
    color: "#8BDD59"
  },
  {
    title: "PROCESS",
    subtitle: "Proprietary Growth Blueprints",
    desc: "Battle-tested SOPs, conversion sprints, weekly ROI diagnostics, and systematic A/B testing to ensure predictable revenue velocity.",
    icon: "/assets/brand/icons/data-6331807.svg",
    badge: "Execution",
    color: "#23A3EA"
  },
  {
    title: "PROFESSIONALS",
    subtitle: "Certified Specialists On-Demand",
    desc: "Dedicated senior copywriters, designers, ad strategists, and tech engineers. Zero freelancer risk, 100% managed execution.",
    icon: "/assets/brand/icons/pro-6331806.svg",
    badge: "Talent Squad",
    color: "#FAC51E"
  }
];

const howItWorksSteps = [
  {
    title: "Growth Audit & Strategy",
    desc: "Deep-dive diagnostic into funnel bottlenecks, SEO architecture, and conversion leaks.",
    icon: Search,
    color: "#8BDD59"
  },
  {
    title: "Platform Activation",
    desc: "Deployment of unified CRM, website speed optimization, and lead capture systems.",
    icon: Cpu,
    color: "#23A3EA"
  },
  {
    title: "Creative & Copy Production",
    desc: "High-converting brand messaging, sales pages, video assets, and ad creatives.",
    icon: Palette,
    color: "#FAC51E"
  },
  {
    title: "Multi-Channel Launch",
    desc: "Targeted traffic generation across Search, Social, Maps, and automated email nurturing.",
    icon: Rocket,
    color: "#FF8800"
  },
  {
    title: "Automation & Nurture",
    desc: "Instant SMS/email lead follow-up, cart recovery, and CRM pipeline synchronization.",
    icon: Zap,
    color: "#8BDD59"
  },
  {
    title: "Continuous ROI Scaling",
    desc: "Weekly sprint reviews, attribution analysis, and nonstop conversion rate optimization.",
    icon: TrendingUp,
    color: "#8BDD59"
  }
];

const iconMap = {
  Layers: Layers,
  Users: Users,
  CheckCircle2: CheckCircle2,
  Search: Search,
  TrendingUp: TrendingUp,
};

const pillarDetails = [
  {
    deliverable: "Unified Cloud Stack",
    kpi: "10+ Core Apps Synced",
    tags: ["Websites", "Mobile Apps", "CRM", "Automations"]
  },
  {
    deliverable: "Dedicated Growth Squad",
    kpi: "Certified Senior Talent",
    tags: ["Copywriters", "Designers", "Ad Strategists", "Tech Engineers"]
  },
  {
    deliverable: "Proven Sprint Framework",
    kpi: "Predictable Velocity",
    tags: ["SOP Library", "Campaign Blueprints", "Weekly Reviews", "QA Audits"]
  },
  {
    deliverable: "Full Diagnostic Scan",
    kpi: "100+ Checkpoint Analysis",
    tags: ["SEO Architecture", "Funnel Leaks", "Brand Messaging", "Speed Score"]
  },
  {
    deliverable: "Nonstop Optimization",
    kpi: "Rapid A/B Experiments",
    tags: ["Conversion Sprints", "Retargeting Engines", "Revenue Scaling", "Attribution"]
  }
];

export default function PillarsSection() {
  const { fivePillars } = siteContent;
  const { isDark } = useTheme();
  const [activePillar, setActivePillar] = useState(0);

  return (
    <section className={`py-24 relative overflow-hidden transition-colors duration-200 ${
      isDark ? 'bg-[#070A11]' : 'bg-slate-50'
    }`}>
      {/* Background Graphic overlay from original asset with high-definition clarity in both themes */}
      <div 
        className={`absolute inset-0 bg-center bg-cover pointer-events-none transition-all duration-300 ${
          isDark 
            ? 'opacity-30 mix-blend-screen' 
            : 'opacity-85 mix-blend-multiply'
        }`}
        style={{ backgroundImage: `url(${isDark ? pillarsBgDark : pillarsBgLight})` }}
      />

      {/* Subtle edge gradient blending for smooth section transitions */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-colors duration-200 ${
          isDark
            ? 'bg-gradient-to-b from-[#070A11]/60 via-transparent to-[#070A11]/80'
            : 'bg-gradient-to-b from-slate-50/50 via-transparent to-slate-50/70'
        }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Official Tagline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 border ${
            isDark 
              ? 'bg-[#8BDD59]/10 border-[#8BDD59]/30 text-[#8BDD59]' 
              : 'bg-[#8BDD59]/15 border-[#8BDD59]/40 text-[#1E3A10]'
          }`}>
            <Sparkles className="w-3.5 h-3.5 text-[#8BDD59]" />
            <span>{fivePillars.sectionTitle}</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {fivePillars.question}
          </h2>
          <p className={`mt-4 text-base ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
            Everything is done for your business, fully managed by a dedicated growth squad.
          </p>
        </div>

        {/* 1. The Core Triad (Platform, Process, Professionals) with Official Brand SVGs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {coreTriad.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all duration-300 backdrop-blur-md relative overflow-hidden group ${
                isDark
                  ? 'bg-[#0B0F19]/90 border-slate-800 hover:border-[#8BDD59]/50 hover:shadow-lg hover:shadow-[#8BDD59]/5'
                  : 'bg-white border-slate-200 hover:border-[#8BDD59] hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center p-3 border transition-transform group-hover:scale-105 ${
                  isDark ? 'bg-slate-900/90 border-slate-700/80' : 'bg-slate-100 border-slate-200'
                }`}>
                  <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                </div>
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                  isDark ? 'bg-slate-800/80 border-slate-700 text-slate-300' : 'bg-slate-100 border-slate-200 text-slate-700'
                }`}>
                  {item.badge}
                </span>
              </div>

              <h3 className={`text-2xl font-extrabold tracking-tight mb-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {item.title}
              </h3>
              <div className="text-xs font-bold text-[#8BDD59] mb-3">
                {item.subtitle}
              </div>
              <p className={`text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2. 5 Pillars Cards Grid */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h3 className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            5 Comprehensive Pillars of Double Growth
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
          {fivePillars.pillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Layers;
            const isCurrent = activePillar === idx;

            return (
              <div
                key={pillar.id}
                onClick={() => setActivePillar(idx)}
                onMouseEnter={() => setActivePillar(idx)}
                className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 border flex flex-col justify-between backdrop-blur-md select-none ${
                  isCurrent
                    ? isDark
                      ? 'bg-[#111827]/95 border-[#8BDD59] shadow-lg shadow-[#8BDD59]/10 -translate-y-2 ring-1 ring-[#8BDD59]/40'
                      : 'bg-white border-[#8BDD59] shadow-xl shadow-[#8BDD59]/15 -translate-y-2 ring-1 ring-[#8BDD59]'
                    : isDark
                      ? 'bg-[#0F172A]/70 border-slate-800/80 hover:border-slate-700 hover:bg-[#0F172A]/90'
                      : 'bg-white/90 border-slate-200 hover:border-slate-300 hover:bg-white shadow-xs'
                }`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-200 ${
                      isCurrent
                        ? 'bg-[#8BDD59] text-slate-950 shadow-sm scale-105 font-bold'
                        : isDark
                          ? 'bg-slate-800 text-slate-300'
                          : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className={`text-xs font-bold uppercase tracking-wider mb-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    0{idx + 1} Pillar
                  </div>

                  <h4 className={`text-xl font-bold mb-2.5 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {pillar.name}
                  </h4>

                  <p className={`text-sm leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {pillar.desc}
                  </p>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center text-xs font-semibold ${
                  isDark ? 'border-slate-800/80' : 'border-slate-100'
                }`}>
                  <span
                    className={
                      isCurrent
                        ? isDark ? 'text-[#8BDD59] font-bold inline-flex items-center gap-1.5' : 'text-[#1E3A10] font-black inline-flex items-center gap-1.5'
                        : isDark ? 'text-slate-400' : 'text-slate-500'
                    }
                  >
                    {isCurrent ? 'Active Engine' : 'Explore Pillar'}
                    {isCurrent && <ArrowRight className="w-3 h-3" />}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Expanded Active Engine Preview */}
        <div className={`p-6 sm:p-8 rounded-2xl border shadow-card backdrop-blur-md max-w-4xl mx-auto mb-20 transition-all duration-300 ${
          isDark 
            ? 'bg-[#0F172A]/90 border-slate-700/80' 
            : 'bg-white border-slate-200 shadow-md'
        }`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className={`flex items-center justify-center sm:justify-start gap-2 text-xs font-bold uppercase tracking-wider ${
                isDark ? 'text-[#8BDD59]' : 'text-[#1E3A10]'
              }`}>
                <Zap className="w-4 h-4 text-[#8BDD59]" />
                <span>Pillar 0{activePillar + 1} Execution Engine: {fivePillars.pillars[activePillar].name}</span>
              </div>
              <div className={`text-sm font-medium ${
                isDark ? 'text-slate-200' : 'text-slate-800'
              }`}>
                {pillarDetails[activePillar]?.deliverable} • <span className={isDark ? "text-[#8BDD59] font-bold" : "text-emerald-700 font-bold"}>{pillarDetails[activePillar]?.kpi}</span>
              </div>
              <div className="flex flex-wrap gap-2 pt-1 justify-center sm:justify-start">
                {pillarDetails[activePillar]?.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={`px-2.5 py-1 rounded-md text-[11px] font-medium border ${
                    isDark 
                      ? 'bg-slate-800/90 border-slate-700 text-slate-200' 
                      : 'bg-slate-100 border-slate-200 text-slate-800'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://gocommercially.com/pricing"
              className="inline-flex items-center gap-2 bg-[#8BDD59] hover:bg-[#7AC949] text-slate-950 font-bold px-6 py-3 rounded-xl text-sm shadow-[0_0_20px_-3px_rgba(139,221,89,0.4)] transition-transform hover:scale-105 shrink-0 cursor-pointer"
            >
              <span>Activate System</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* 3. Official "How It Works" 6-Step Workflow with Extracted Graphics */}
        <div className="pt-8 border-t border-slate-800/60">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-3 border ${
              isDark ? 'bg-slate-800/80 text-[#8BDD59] border-slate-700' : 'bg-slate-100 text-[#1E3A10] border-slate-200'
            }`}>
              <Check className="w-3.5 h-3.5 text-[#8BDD59]" />
              <span>THE 6-STAGE GO PROCESS</span>
            </div>
            <h3 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              How It Works: From Audit to Continuous Scaling
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorksSteps.map((step, sIdx) => {
              const StepIcon = step.icon;
              return (
                <div
                  key={sIdx}
                  className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-[#0B0F19]/90 border-slate-800/90 hover:border-[#8BDD59]/50 hover:shadow-lg hover:shadow-[#8BDD59]/5' 
                      : 'bg-white border-slate-200 hover:border-[#8BDD59] hover:shadow-md'
                  }`}
                >
                  <div>
                    {/* Prominently Sized SVG Icon */}
                    <div 
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-300 group-hover:scale-105 shadow-sm ${
                        isDark 
                          ? 'bg-slate-900/90 border-slate-700/80 group-hover:border-[#8BDD59]/60' 
                          : 'bg-slate-50 border-slate-200 group-hover:border-[#8BDD59]'
                      }`}
                    >
                      <StepIcon 
                        className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:scale-110" 
                        style={{ color: step.color }} 
                        strokeWidth={2.2}
                      />
                    </div>

                    <h4 className={`text-lg sm:text-xl font-bold mb-2.5 tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {step.title}
                    </h4>

                    <p className={`text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

