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
    <section id="contact" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C9A84C]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 mb-2">
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
          <p className={`text-sm sm:text-base font-light leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}>
            {nikhilData.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Executive Channels & Trust (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            
            {/* Founder Direct Card */}
            <div className={`p-8 rounded-3xl border transition-all duration-300 ${
              isDark 
                ? 'glass-obsidian border-[#C9A84C]/25 shadow-[0_20px_50px_rgba(0,0,0,0.7)]' 
                : 'bg-white/95 border-[#C9A84C]/30 shadow-[0_16px_36px_rgba(15,23,42,0.08)]'
            }`}>
              <div className={`flex items-center gap-4 border-b pb-5 ${
                isDark ? 'border-white/10' : 'border-slate-200'
              }`}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#9B7B2C] via-[#C9A84C] to-[#E6B84A] p-0.5 shadow-md flex-shrink-0">
                  <div className="w-full h-full bg-[#080B12] rounded-[14px] flex items-center justify-center font-heading font-bold text-amber-200 text-lg">
                    NS
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 text-[10px] font-mono text-[#C9A84C] uppercase tracking-wider mb-1">
                    <Award className="w-3 h-3" />
                    <span>ETNOW Conclave 2026 Honoree</span>
                  </div>
                  <h4 className={`font-heading text-lg font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Nikhil Sharma
                  </h4>
                  <p className="text-xs text-[#C9A84C] font-mono">
                    Founder &amp; CEO · me@nikhilsharma.com
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 pt-5 text-xs sm:text-sm">
                <a
                  href={`mailto:${nikhilData.founder.email}`}
                  className={`flex items-center gap-3.5 transition-all duration-300 p-3.5 rounded-xl border group hover:-translate-y-0.5 ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-[#C9A84C]/50 text-slate-300 hover:text-white' 
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-[#C9A84C]/60 text-slate-700 hover:text-slate-900 shadow-sm'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Personal Executive Desk</span>
                    <span className="font-mono font-medium">{nikhilData.founder.email}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${nikhilData.founder.companyEmail}`}
                  className={`flex items-center gap-3.5 transition-all duration-300 p-3.5 rounded-xl border group hover:-translate-y-0.5 ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-[#C9A84C]/50 text-slate-300 hover:text-white' 
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-[#C9A84C]/60 text-slate-700 hover:text-slate-900 shadow-sm'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Elevated India Concierge</span>
                    <span className="font-mono font-medium">{nikhilData.founder.companyEmail}</span>
                  </div>
                </a>

                <a
                  href={`tel:${nikhilData.founder.phone}`}
                  className={`flex items-center gap-3.5 transition-all duration-300 p-3.5 rounded-xl border group hover:-translate-y-0.5 ${
                    isDark 
                      ? 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-[#C9A84C]/50 text-slate-300 hover:text-white' 
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 hover:border-[#C9A84C]/60 text-slate-700 hover:text-slate-900 shadow-sm'
                  }`}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/15 flex items-center justify-center text-[#C9A84C] group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Direct Executive Hotline</span>
                    <span className="font-mono font-medium">{nikhilData.founder.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/919555523323?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg shadow-emerald-600/25 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Concierge Chat</span>
                </a>
              </div>
            </div>

            {/* Hub Locations Card */}
            <div className={`p-6 rounded-2xl border space-y-4 ${
              isDark 
                ? 'glass-obsidian border-[#C9A84C]/20 shadow-xl' 
                : 'bg-white/90 border-slate-200 shadow-md'
            }`}>
              <h4 className="text-xs uppercase font-mono tracking-widest text-[#C9A84C] font-semibold">
                Operational &amp; Executive Hubs:
              </h4>
              <div className="space-y-3">
                {nikhilData.contact.locations.map((loc, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-[#C9A84C] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className={isDark ? 'text-white' : 'text-slate-900'}>{loc.city}:</strong>{' '}
                      <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                        {loc.label} ({loc.address})
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Discretion Assurance Pill */}
            <div className={`p-4 rounded-xl border text-xs flex items-center gap-3 ${
              isDark 
                ? 'bg-white/5 border-white/10 text-slate-400' 
                : 'bg-amber-50/70 border-[#C9A84C]/30 text-amber-950 font-medium'
            }`}>
              <ShieldCheck className="w-5 h-5 text-[#C9A84C] flex-shrink-0" />
              <span>Strict client discretion. We honor non-disclosure agreements and never share itinerary or guest identities publicly.</span>
            </div>

          </div>

          {/* Right Column: Interactive Bespoke Inquiry Form (7 cols) */}
          <div className={`lg:col-span-7 rounded-3xl p-8 sm:p-12 border transition-all duration-300 ${
            isDark 
              ? 'glass-obsidian border-[#C9A84C]/25 shadow-[0_20px_50px_rgba(0,0,0,0.7)]' 
              : 'bg-white/95 border-[#C9A84C]/30 shadow-[0_16px_36px_rgba(15,23,42,0.08)]'
          }`}>
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className={`font-heading text-2xl sm:text-3xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Inquiry Received, {formData.name || 'Honored Guest'}
                  </h3>
                  <p className={`text-sm max-w-md mx-auto leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Your bespoke travel parameters for <strong className="text-[#C9A84C]">{formData.travelMood}</strong> have been forwarded directly to Nikhil Sharma and the senior travel design team.
                  </p>
                </div>
                <div className={`p-5 rounded-2xl border max-w-md mx-auto text-left text-xs font-mono space-y-1 ${
                  isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-700'
                }`}>
                  <div><strong>Party Size:</strong> {formData.guests}</div>
                  <div><strong>Duration:</strong> {formData.duration}</div>
                  <div><strong>Contact:</strong> {formData.email || formData.phone}</div>
                  <div><strong>Discretion NDA:</strong> {formData.ndaRequested ? 'Signed Protocol Requested' : 'Standard'}</div>
                </div>
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <a
                    href={`https://wa.me/919555523323?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-wider font-semibold shadow-md transition-colors"
                  >
                    Open Instant WhatsApp Thread
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className={`px-6 py-2.5 rounded-full text-xs uppercase tracking-wider transition-colors border ${
                      isDark ? 'bg-white/10 hover:bg-white/20 text-slate-300 border-white/10' : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
                    }`}
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div>
                  <h3 className={`font-heading text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    Private Journey Consultation
                  </h3>
                  <p className={`text-xs font-light mt-1 ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    Please share your preferences below. Nikhil Sharma and the concierge desk respond personally within 12 hours.
                  </p>
                </div>

                {/* Travel Mood Selector */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-[#C9A84C] block font-semibold">
                    1. Preferred Journey Mood &amp; Region
                  </label>
                  <select
                    value={formData.travelMood}
                    onChange={(e) => setFormData({ ...formData, travelMood: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:border-[#C9A84C] focus:outline-none transition-colors ${
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

                {/* Duration & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className={`text-xs uppercase font-mono tracking-wider block font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      2. Estimated Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:border-[#C9A84C] focus:outline-none transition-colors ${
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

                  <div className="space-y-2">
                    <label className={`text-xs uppercase font-mono tracking-wider block font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      3. Travel Party
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:border-[#C9A84C] focus:outline-none transition-colors ${
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
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord / Lady / Dr. / Mr. Sarah Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:border-[#C9A84C] focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0E131F] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
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
                      className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:border-[#C9A84C] focus:outline-none transition-colors ${
                        isDark
                          ? 'bg-[#0E131F] border-white/10 text-white placeholder-slate-500'
                          : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Phone / WhatsApp (With Country Code)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000 / +44 20 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:border-[#C9A84C] focus:outline-none transition-colors ${
                      isDark
                        ? 'bg-[#0E131F] border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className={`text-xs font-mono uppercase tracking-wider block font-semibold ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Special Desires, Dates, or Discretion Guidelines
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g. Private aircraft transfers, heritage fort sunset access, wildlife photography pacing, or quiet confidential travel..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-xs sm:text-sm focus:border-[#C9A84C] focus:outline-none transition-colors ${
                      isDark
                        ? 'bg-[#0E131F] border-white/10 text-white placeholder-slate-500'
                        : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* NDA Discretion Checkbox */}
                <div className="flex items-center gap-3 pt-1">
                  <input
                    type="checkbox"
                    id="nda-checkbox"
                    checked={formData.ndaRequested}
                    onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                    className="w-4 h-4 rounded text-[#C9A84C] focus:ring-[#C9A84C] border-gray-400 cursor-pointer accent-[#C9A84C]"
                  />
                  <label htmlFor="nda-checkbox" className={`text-xs cursor-pointer select-none ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    Request Non-Disclosure Agreement (NDA) protocol prior to itinerary sharing.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#9B7B2C] via-[#C9A84C] to-[#E6B84A] hover:from-[#C9A84C] hover:to-[#9B7B2C] text-black font-heading font-black text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-[#C9A84C]/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-black" />
                  <span>Submit Private Consultation Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
