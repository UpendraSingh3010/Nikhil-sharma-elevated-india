import React, { useState } from 'react';
import { 
  ArrowRight, Sparkles, Box, ChevronRight,
  Globe, Smartphone, ShoppingCart, Video, Search, Share2, TrendingUp, Tv,
  Mail, MessageSquare, Bot, Target, Star, Users, BarChart3, FolderKanban,
  Store, Building2, Briefcase, FileText, FlaskConical, GraduationCap,
  Compass, BookOpen, Award
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

// High-fidelity fallback mappings declared at module level
function getFallbackIcon(t) {
  const lower = (t || '').toLowerCase();
  if (lower.includes('website')) return Globe;
  if (lower.includes('mobile')) return Smartphone;
  if (lower.includes('sale') || lower.includes('commerce')) return ShoppingCart;
  if (lower.includes('video') || lower.includes('design')) return Video;
  if (lower.includes('seo')) return Search;
  if (lower.includes('social')) return Share2;
  if (lower.includes('inbound')) return TrendingUp;
  if (lower.includes('webinar')) return Tv;
  if (lower.includes('email')) return Mail;
  if (lower.includes('sms')) return MessageSquare;
  if (lower.includes('chatbot') || lower.includes('bot')) return Bot;
  if (lower.includes('cro')) return Target;
  if (lower.includes('reputation')) return Star;
  if (lower.includes('crm')) return Users;
  if (lower.includes('analytics')) return BarChart3;
  if (lower.includes('project')) return FolderKanban;
  if (lower.includes('business')) return Store;
  if (lower.includes('enterprise') || lower.includes('location')) return Building2;
  if (lower.includes('agency') || lower.includes('expert')) return Briefcase;
  if (lower.includes('community')) return Users;
  if (lower.includes('blog')) return FileText;
  if (lower.includes('research')) return FlaskConical;
  if (lower.includes('learn')) return GraduationCap;
  if (lower.includes('vision') || lower.includes('mission')) return Compass;
  if (lower.includes('story')) return BookOpen;
  if (lower.includes('why')) return Award;
  return Box;
}

function renderFallbackIcon(title) {
  const Fallback = getFallbackIcon(title);
  return <Fallback className="w-4 h-4 text-amber-400 transition-transform duration-200 group-hover:scale-110" />;
}

function MenuIcon({ icon, title }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="nav-icon-badge w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-200 shadow-sm mt-0.5">
      {icon && !imgError ? (
        <img
          src={icon}
          alt={title}
          className="w-5 h-5 object-contain transition-transform duration-200 group-hover:scale-110"
          onError={() => setImgError(true)}
          loading="eager"
        />
      ) : (
        renderFallbackIcon(title)
      )}
    </div>
  );
}

export default function MegaMenu({ item, isOpen, onClose, isGlobalContainer = false }) {
  const { isDark } = useTheme();

  if (!isOpen || !item.hasMega || !item.items) return null;

  // Align standard dropdowns inward based on menu id so they never exceed the viewport
  const getDropdownPlacement = () => {
    if (isGlobalContainer) return 'left-0 right-0 w-full';
    if (item.id === 'about') return 'right-0 w-[360px]';
    if (item.id === 'resources') return 'right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 w-[360px]';
    return 'left-0 sm:left-1/2 sm:-translate-x-1/2 w-[380px]';
  };

  return (
    <div
      className={`absolute top-full pt-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150 ${getDropdownPlacement()}`}
      onMouseLeave={onClose}
    >
      {item.id === 'products' ? (
        /* Wide Centered Mega Menu for All 16 Products */
        <div className="w-full max-w-5xl mx-auto px-4">
          <div className={`backdrop-blur-2xl rounded-2xl p-6 text-left shadow-2xl transition-colors duration-200 border ${
            isDark
              ? 'bg-[#0B0F19]/95 border-slate-700/80 text-slate-100 ring-1 ring-white/10'
              : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300/40 ring-1 ring-slate-900/5'
          }`}>
            {/* Header inside mega menu */}
            <div className={`flex items-center justify-between pb-3.5 mb-5 border-b ${
              isDark ? 'border-slate-800' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <span className="p-1 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <Sparkles className="w-3.5 h-3.5" />
                </span>
                <span className={`text-xs font-bold tracking-wider uppercase ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  Growth Platform Products
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-mono">
                16 Integrated Solutions
              </span>
            </div>

            {/* 4-Column Grid for Products */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 max-h-[65vh] overflow-y-auto pr-1">
              {item.items.map((prod, idx) => (
                <a
                  key={idx}
                  href={prod.href}
                  className={`group flex items-start gap-2.5 p-2.5 rounded-xl border transition-all duration-150 ${
                    isDark
                      ? 'hover:bg-slate-800/80 border-transparent hover:border-slate-700/70'
                      : 'hover:bg-amber-50/70 border-transparent hover:border-amber-200/80'
                  }`}
                >
                  <MenuIcon icon={prod.icon} title={prod.title} />
                  <div className="min-w-0">
                    <div className={`text-xs font-bold transition-colors flex items-center gap-1 truncate ${
                      isDark 
                        ? 'text-slate-200 group-hover:text-amber-300' 
                        : 'text-slate-800 group-hover:text-amber-600'
                    }`}>
                      {prod.title}
                      <ArrowRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-500 shrink-0" />
                    </div>
                    <div className={`text-[11px] truncate mt-0.5 ${
                      isDark ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-500 group-hover:text-slate-700'
                    }`}>
                      {prod.desc}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Footer CTA */}
            <div className={`mt-5 pt-3.5 border-t flex items-center justify-between text-xs ${
              isDark ? 'border-slate-800/80 text-slate-400' : 'border-slate-200 text-slate-600'
            }`}>
              <span>Looking for fully-managed growth?</span>
              <a
                href="/vip-business-questionnaire"
                className="text-amber-500 hover:text-amber-600 font-semibold inline-flex items-center gap-1"
              >
                Speak with a Growth Specialist <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      ) : (
        /* Standard Compact Dropdowns (Solutions, Resources, About) */
        <div className={`backdrop-blur-2xl rounded-2xl p-4 text-left shadow-2xl transition-colors duration-200 border ${
          isDark
            ? 'bg-[#0B0F19]/95 border-slate-700/80 text-slate-100 ring-1 ring-white/10'
            : 'bg-white/95 border-slate-200 text-slate-900 shadow-slate-300/40 ring-1 ring-slate-900/5'
        }`}>
          <div className={`text-[11px] font-bold tracking-wider uppercase px-2 pb-2.5 mb-1 border-b flex items-center justify-between ${
            isDark ? 'text-amber-300 border-slate-800/80' : 'text-amber-600 border-slate-200'
          }`}>
            <span>{item.label}</span>
            <span className="text-[10px] text-slate-500 font-mono">{item.items.length} Options</span>
          </div>

          <div className="space-y-1 pt-1">
            {item.items.map((sub, idx) => (
              <a
                key={idx}
                href={sub.href}
                className={`group flex items-start gap-3 p-2.5 rounded-xl border transition-all duration-150 ${
                  isDark
                    ? 'hover:bg-slate-800/80 border-transparent hover:border-slate-700/60'
                    : 'hover:bg-amber-50/70 border-transparent hover:border-amber-200/80'
                }`}
              >
                <MenuIcon icon={sub.icon} title={sub.title} />
                <div className="min-w-0 flex-1">
                  <div className={`text-xs font-bold transition-colors flex items-center justify-between ${
                    isDark 
                      ? 'text-slate-200 group-hover:text-amber-300' 
                      : 'text-slate-800 group-hover:text-amber-600'
                  }`}>
                    <span>{sub.title}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-amber-500" />
                  </div>
                  <p className={`text-[11px] leading-snug mt-0.5 ${
                    isDark ? 'text-slate-400 group-hover:text-slate-300' : 'text-slate-500 group-hover:text-slate-700'
                  }`}>
                    {sub.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
