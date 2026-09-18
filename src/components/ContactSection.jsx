import React, { useState } from 'react';
import { nikhilData } from '../data/nikhilData';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ContactSection = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelMood: 'Royal Palaces & Living Dynasties',
    duration: '10 – 14 Days',
    guests: '2 Guests',
    ndaRequested: true,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const moods = [
    'Royal Palaces & Living Dynasties',
    'Desert Silence & Thar Glamping',
    'Tiger Wilderness Safaris',
    'Sacred Ganges & Spiritual Retreat',
    'Himalayan Seclusion & High Altitude',
    'Complete Pan-India Connoisseur'
  ];

  const durations = ['7 – 9 Days', '10 – 14 Days', '15 – 21 Days', 'Custom Extended'];
  const guestOptions = ['Solo Connoisseur', '2 Guests (Couple)', 'Small Family (3-5)', 'Private Group (6+)'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Nikhil, I would like to consult on a private Elevated India journey.\n\nName: ${formData.name || 'Guest'}\nMood: ${formData.travelMood}\nDuration: ${formData.duration}\nParty: ${formData.guests}\nDiscretion NDA Requested: ${formData.ndaRequested ? 'Yes' : 'Standard'}\nNotes: ${formData.notes || 'None specified'}`
  );

  return (
    <section id="contact" className="relative py-6 sm:py-8 lg:py-10 bg-transparent overflow-hidden scroll-mt-16">
      {/* Background ambient accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-[#C9A84C]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 space-y-4 sm:space-y-5">
        
        {/* Section Header matching other sections */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 mb-1">
            <span className="w-5 h-px bg-[#C9A84C]" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C9A84C] font-semibold block">
              {nikhilData.contact.eyebrow}
            </span>
            <span className="w-5 h-px bg-[#C9A84C]" />
          </div>
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {nikhilData.contact.heading}
          </h2>
          <p className={`text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {nikhilData.contact.subheading}
          </p>
        </div>

        {/* Compact 2-Column Suite */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
          
          {/* Left Column: Direct Executive Channels & Trust (5 cols) */}
          <div className={`lg:col-span-5 rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between space-y-3 ${
            isDark 
              ? 'glass-obsidian border-[#C9A84C]/25 shadow-[0_16px_40px_rgba(0,0,0,0.6)]' 
              : 'bg-white/95 border-[#C9A84C]/30 shadow-[0_12px_32px_rgba(15,23,42,0.06)]'
          }`}>
            {/* Founder Profile */}
            <div className={`flex items-center gap-3 border-b pb-3 ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#9B7B2C] via-[#C9A84C] to-[#E6B84A] p-0.5 shadow-md flex-shrink-0">
                <div className="w-full h-full bg-[#080B12] rounded-[10px] flex items-center justify-center font-heading font-bold text-amber-200 text-sm">
                  NS
                </div>
              </div>
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[9px] font-mono text-[#C9A84C] uppercase tracking-wider mb-0.5">
                  <Award className="w-2.5 h-2.5" />
                  <span>ETNOW Honoree 2026</span>
                </div>
                <h4 className={`font-heading text-sm sm:text-base font-bold truncate ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {nikhilData.founder.name}
                </h4>
                <p className="text-[10px] text-[#C9A84C] font-mono truncate">
                  Founder &amp; CEO · {nikhilData.founder.email}
                </p>
              </div>
            </div>

            {/* Direct Communication Channels */}
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5">
                <a
                  href={`mailto:${nikhilData.founder.email}`}
                  className={`flex items-center gap-2.5 p-2 rounded-xl border group transition-all duration-200 ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-[#C9A84C]/50 text-slate-300 hover:text-white' 
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-[#C9A84C]/60 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <div className="w-6 h-6 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-3 h-3" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] text-slate-400 uppercase font-mono block">Executive Desk</span>
                    <span className="font-mono text-[11px] font-medium truncate block">{nikhilData.founder.email}</span>
                  </div>
                </a>

                <a
                  href={`tel:${nikhilData.founder.phone}`}
                  className={`flex items-center gap-2.5 p-2 rounded-xl border group transition-all duration-200 ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-[#C9A84C]/50 text-slate-300 hover:text-white' 
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-[#C9A84C]/60 text-slate-700 hover:text-slate-900'
                  }`}
                >
                  <div className="w-6 h-6 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="w-3 h-3" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[9px] text-slate-400 uppercase font-mono block">Direct Hotline</span>
                    <span className="font-mono text-[11px] font-medium truncate block">{nikhilData.founder.phone}</span>
                  </div>
                </a>
              </div>

              {/* WhatsApp Quick Action */}
              <a
                href={`https://wa.me/919555523323?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2 px-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm shadow-emerald-600/20 hover:-translate-y-0.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Start WhatsApp Concierge Chat</span>
              </a>
            </div>

            {/* Hubs & Discretion Summary */}
            <div className={`pt-2.5 border-t space-y-1.5 text-[10px] ${
              isDark ? 'border-white/10' : 'border-slate-200'
            }`}>
              <div className="flex items-center gap-2">
                <MapPin className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                <div className={`truncate ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                  <span className="font-semibold">Executive Hubs:</span> New Delhi · Jaipur · Gurugram
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3 h-3 text-[#C9A84C] flex-shrink-0" />
                <span className={`truncate leading-tight ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  Strict client discretion guaranteed · Non-disclosure agreements honored.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Crisp Bespoke Inquiry Form (7 cols) */}
          <div className={`lg:col-span-7 rounded-2xl p-4 sm:p-5 border transition-all duration-300 flex flex-col justify-between ${
            isDark 
              ? 'glass-obsidian border-[#C9A84C]/25 shadow-[0_16px_40px_rgba(0,0,0,0.6)]' 
              : 'bg-white/95 border-[#C9A84C]/30 shadow-[0_12px_32px_rgba(15,23,42,0.06)]'
          }`}>
            {submitted ? (
              <div className="text-center py-6 sm:py-8 space-y-4 animate-fadeIn my-auto">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-md shadow-emerald-500/10">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className={`font-heading text-xl sm:text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Inquiry Received, {formData.name || 'Honored Guest'}
                  </h3>
                  <p className={`text-xs max-w-md mx-auto leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Your bespoke travel parameters for <strong className="text-[#C9A84C]">{formData.travelMood}</strong> have been forwarded directly to Nikhil Sharma.
                  </p>
                </div>
                <div className={`p-3.5 rounded-xl border max-w-md mx-auto text-left text-[11px] font-mono grid grid-cols-2 gap-2 ${
                  isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div><strong>Party:</strong> {formData.guests}</div>
                  <div><strong>Duration:</strong> {formData.duration}</div>
                  <div className="col-span-2 truncate"><strong>Contact:</strong> {formData.email || formData.phone}</div>
                </div>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/919555523323?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] uppercase tracking-wider font-semibold shadow-md transition-colors"
                  >
                    Open WhatsApp Thread
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-wider transition-colors border ${
                      isDark ? 'bg-white/10 hover:bg-white/20 text-slate-300 border-white/10' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                    }`}
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 text-left">
                {/* Form Title & Live Badge */}
                <div className={`flex items-center justify-between border-b pb-2.5 ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <div>
                    <h3 className={`font-heading text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      Private Journey Consultation
                    </h3>
                    <p className={`text-[11px] font-light ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Direct executive review · Personal reply within 12 hours
                    </p>
                  </div>
                  <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-mono text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Desk Active</span>
                  </span>
                </div>

                {/* Row 1: Mood (2 cols) + Duration (1 col) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2 space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-[#C9A84C] block font-semibold">
                      1. Preferred Journey Mood
                    </label>
                    <select
                      value={formData.travelMood}
                      onChange={(e) => setFormData({ ...formData, travelMood: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border text-xs focus:border-[#C9A84C] focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0E131F] border-white/10 text-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      {moods.map((m) => (
                        <option key={m} value={m} className={isDark ? 'bg-[#0E1422] text-white' : 'bg-white text-slate-900'}>
                          {m}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className={`text-[10px] uppercase font-mono tracking-wider block font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      2. Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border text-xs focus:border-[#C9A84C] focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0E131F] border-white/10 text-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      {durations.map((d) => (
                        <option key={d} value={d} className={isDark ? 'bg-[#0E1422] text-white' : 'bg-white text-slate-900'}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Row 2: Name, Email, Phone (3 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord / Lady / Dr. Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border text-xs focus:border-[#C9A84C] focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0E131F] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border text-xs focus:border-[#C9A84C] focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0E131F] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border text-xs focus:border-[#C9A84C] focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0E131F] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Row 3: Party (1 col) + Special Desires (2 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="space-y-1">
                    <label className={`text-[10px] uppercase font-mono tracking-wider block font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      3. Travel Party
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border text-xs focus:border-[#C9A84C] focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0E131F] border-white/10 text-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900'
                      }`}
                    >
                      {guestOptions.map((g) => (
                        <option key={g} value={g} className={isDark ? 'bg-[#0E1422] text-white' : 'bg-white text-slate-900'}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className={`text-[10px] font-mono uppercase tracking-wider block font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Special Desires, Dates, or Discretion Guidelines
                    </label>
                    <input
                      type="text"
                      placeholder="E.g. Private aircraft transfers, fort access, pacing, NDA..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className={`w-full px-3 py-2 rounded-lg border text-xs focus:border-[#C9A84C] focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0E131F] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Row 4: NDA Checkbox (left) + Submit Button (right) */}
                <div className={`pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t ${
                  isDark ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      id="nda-checkbox"
                      checked={formData.ndaRequested}
                      onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                      className="w-3.5 h-3.5 rounded text-[#C9A84C] focus:ring-[#C9A84C] border-gray-400 cursor-pointer accent-[#C9A84C]"
                    />
                    <span className={`text-[11px] ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
                      Request NDA protocol prior to itinerary sharing
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9B7B2C] via-[#C9A84C] to-[#E6B84A] hover:from-[#C9A84C] hover:to-[#9B7B2C] text-black font-heading font-black text-xs uppercase tracking-wider shadow-lg shadow-[#C9A84C]/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer flex-shrink-0"
                  >
                    <Send className="w-3.5 h-3.5 text-black" />
                    <span>Request Consultation</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
