import React from 'react';
import { siteContent } from '../data/siteContent';
import { useTheme } from '../context/ThemeContext';
import { ArrowRight, MonitorPlay, Sparkles } from 'lucide-react';

export default function VideoShowcase() {
  const { videoShowcase } = siteContent;
  const { isDark } = useTheme();

  return (
    <section className={`py-20 border-y relative transition-colors duration-200 ${
      isDark ? 'bg-[#070A10] border-slate-800/80' : 'bg-slate-50 border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border ${
            isDark 
              ? 'bg-slate-800 text-slate-300 border-slate-700' 
              : 'bg-amber-50 text-amber-800 border-amber-300'
          }`}>
            <MonitorPlay className="w-3.5 h-3.5 text-amber-500" />
            <span>{videoShowcase.title}</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            Enjoy the endless possibilities
          </h2>
          <p className={`text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {videoShowcase.subtitle}
          </p>
        </div>

        {/* Video Embed Container */}
        <div className="max-w-4xl mx-auto">
          <div className={`relative rounded-2xl p-2 sm:p-3 shadow-2xl ${
            isDark
              ? 'bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 ring-1 ring-white/10'
              : 'bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 border border-slate-300'
          }`}>
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950">
              <iframe
                className="w-full h-full border-0"
                src={`https://www.youtube.com/embed/${videoShowcase.youtubeId}?rel=0&modestbranding=1`}
                title="GoCommercially Digital Marketing Platform"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Feature Highlight Card Below Video */}
          <div className={`mt-8 p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-6 shadow-card transition-colors ${
            isDark 
              ? 'bg-[#0F172A] border-slate-800' 
              : 'bg-white border-slate-200 shadow-sm'
          }`}>
            <div className="space-y-1 text-center sm:text-left">
              <h3 className={`text-lg font-bold flex items-center justify-center sm:justify-start gap-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>End-to-End Omnichannel Automation</span>
              </h3>
              <p className={`text-sm max-w-xl ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                {videoShowcase.features[0].description}
              </p>
            </div>
            <a
              href={videoShowcase.features[0].link.href}
              className={`inline-flex items-center gap-2 shrink-0 font-semibold px-5 py-2.5 rounded-xl text-sm border transition-all duration-200 ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-amber-400 hover:text-amber-300 border-slate-700 hover:border-amber-500/40'
                  : 'bg-amber-50 hover:bg-amber-100 text-amber-800 border-amber-300 hover:border-amber-400 font-bold'
              }`}
            >
              <span>{videoShowcase.features[0].link.label}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
