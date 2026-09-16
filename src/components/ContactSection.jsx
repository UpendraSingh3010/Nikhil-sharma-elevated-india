import React, { useState } from 'react';
import { nikhilData } from '../data/nikhilData';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelMood: 'Royal Palaces & Living Dynasties',
    duration: '10 – 14 Days',
    guests: '2 Guests',
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
    `Hello Nikhil, I would like to consult on a private Elevated India journey.\n\nName: ${formData.name || 'Guest'}\nMood: ${formData.travelMood}\nDuration: ${formData.duration}\nParty: ${formData.guests}\nNotes: ${formData.notes || 'None specified'}`
  );

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-amber-400 block">
            {nikhilData.contact.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
            {nikhilData.contact.heading}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light leading-relaxed">
            {nikhilData.contact.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Executive Channels & Trust (5 cols) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            <div className="luxury-box p-8 rounded-2xl shadow-2xl space-y-6">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 to-amber-300 text-slate-950 flex items-center justify-center font-serif font-bold shadow-md">
                  NS
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-white">
                    Direct Founder Access
                  </h4>
                  <p className="text-xs text-amber-300 font-mono">
                    Nikhil Sharma · me@nikhilsharma.com
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <a
                  href={`mailto:${nikhilData.founder.email}`}
                  className="flex items-center gap-3.5 text-slate-300 hover:text-amber-300 transition-all duration-300 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-400/40 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Personal Executive Email</span>
                    <span className="font-mono text-white">{nikhilData.founder.email}</span>
                  </div>
                </a>

                <a
                  href={`mailto:${nikhilData.founder.companyEmail}`}
                  className="flex items-center gap-3.5 text-slate-300 hover:text-amber-300 transition-all duration-300 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-400/40 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Elevated India Concierge Desk</span>
                    <span className="font-mono text-white">{nikhilData.founder.companyEmail}</span>
                  </div>
                </a>

                <a
                  href={`tel:${nikhilData.founder.phone}`}
                  className="flex items-center gap-3.5 text-slate-300 hover:text-amber-300 transition-all duration-300 p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-amber-400/40 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-mono block">Direct Executive Hotline</span>
                    <span className="font-mono text-white">{nikhilData.founder.phone}</span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/919555523323?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs tracking-wider uppercase transition-all duration-300 shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Concierge Chat</span>
                </a>
              </div>
            </div>

            {/* Hub Locations */}
            <div className="luxury-box p-6 rounded-2xl space-y-4 shadow-xl">
              <h4 className="text-xs uppercase font-mono tracking-widest text-amber-400 font-semibold">
                Operational &amp; Executive Hubs:
              </h4>
              <div className="space-y-3">
                {nikhilData.contact.locations.map((loc, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <MapPin className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">{loc.city}:</strong> {loc.label} ({loc.address})
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-slate-400 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span>Strict client discretion. We never share itinerary or guest identities publicly.</span>
            </div>

          </div>

          {/* Right Column: Interactive Bespoke Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 luxury-box rounded-3xl p-8 sm:p-12 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    Inquiry Received, {formData.name || 'Honored Guest'}
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Your bespoke travel parameters for <strong className="text-amber-300">{formData.travelMood}</strong> have been forwarded directly to Nikhil Sharma and the senior travel design team.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs font-mono text-slate-300 space-y-1">
                  <div><strong>Party Size:</strong> {formData.guests}</div>
                  <div><strong>Duration:</strong> {formData.duration}</div>
                  <div><strong>Contact:</strong> {formData.email || formData.phone}</div>
                </div>
                <div className="pt-4 flex justify-center gap-4">
                  <a
                    href={`https://wa.me/919555523323?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs uppercase tracking-wider font-semibold"
                  >
                    Open Instant WhatsApp Thread
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 text-xs uppercase tracking-wider"
                  >
                    Modify Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Private Journey Consultation
                  </h3>
                  <p className="text-xs text-slate-400 font-light mt-1">
                    Please provide your preferences below. We respond personally within 12 hours.
                  </p>
                </div>

                {/* Travel Mood Selector */}
                <div className="space-y-2">
                  <label className="text-xs uppercase font-mono tracking-wider text-amber-400 block font-medium">
                    1. Preferred Travel Mood &amp; Region
                  </label>
                  <select
                    value={formData.travelMood}
                    onChange={(e) => setFormData({ ...formData, travelMood: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141B2B] border border-white/10 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                  >
                    {moods.map((m) => (
                      <option key={m} value={m} className="bg-[#0E1422] text-white">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Duration & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-slate-300 block">
                      Estimated Duration
                    </label>
                    <select
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141B2B] border border-white/10 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                    >
                      {durations.map((d) => (
                        <option key={d} value={d} className="bg-[#0E1422] text-white">
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-mono tracking-wider text-slate-300 block">
                      Travel Party
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141B2B] border border-white/10 text-white text-xs sm:text-sm focus:border-amber-400 focus:outline-none transition-colors"
                    >
                      {guestOptions.map((g) => (
                        <option key={g} value={g} className="bg-[#0E1422] text-white">
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Name & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord / Lady / Dr. / Mr. Sarah Sterling"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141B2B] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141B2B] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                    Phone / WhatsApp (With Country Code)
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000 / +44 20 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141B2B] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* Notes */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block">
                    Special Desires, Dates or Discretion Guidelines
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g. Private aircraft arrangements, private palace dinners, wildlife photography focus, or quiet honeymoon pacing..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141B2B] border border-white/10 text-white text-xs sm:text-sm placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-black font-semibold text-xs sm:text-sm uppercase tracking-widest shadow-xl hover:shadow-amber-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-2"
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
