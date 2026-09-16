import React from 'react';
import { X, Calendar, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { AdaptiveImage } from './AdaptiveImage';

export const ItineraryModal = ({ curation, onClose, onInquire }) => {
  if (!curation) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl luxury-box p-0 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border-amber-400/30">
        
        {/* Modal Header / Banner Image */}
        <div className="relative h-48 sm:h-56 overflow-hidden flex-shrink-0">
          <AdaptiveImage
            srcList={curation.images || [curation.image]}
            fallbackSrc={curation.image}
            alt={curation.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06080E] via-[#06080E]/50 to-black/60" />
          
          <button
            onClick={onClose}
            className="keep-white absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-amber-500 hover:text-black text-white border border-white/20 flex items-center justify-center transition-colors shadow-lg"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-on-dark keep-white">
            <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold block mb-1">
              {curation.category} · {curation.badge}
            </span>
            <h3 className="modal-banner-title font-serif text-2xl sm:text-3xl font-bold text-white leading-snug drop-shadow-md">
              {curation.title}
            </h3>
          </div>
        </div>

        {/* Modal Body with Scroll */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Quick specs */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300 border-b border-white/10 pb-4">
            <div className="flex items-center gap-1.5 text-amber-300">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{curation.duration}</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{curation.location}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {curation.description}
          </p>

          {/* Sample Itinerary Days */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
              Indicative Journey Milestones:
            </h4>
            <div className="space-y-2.5">
              {curation.itineraryPreview.map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-amber-400/30 text-xs sm:text-sm text-slate-200 flex items-start gap-3 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5 border border-amber-400/30">
                    {idx + 1}
                  </div>
                  <span className="leading-relaxed">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Discreet Founder Note */}
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>
              All Elevated India journeys are operated exclusively in-house with dedicated luxury chauffeurs, licensed specialist guides, and private security protocols upon request.
            </span>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#090D15] border-t border-white/10 flex flex-wrap items-center justify-between gap-4 flex-shrink-0">
          <button
            onClick={onClose}
            className="text-xs font-mono uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
          >
            Close Details
          </button>
          
          <button
            onClick={() => {
              onClose();
              onInquire(curation);
            }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-amber-500/25 flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Request Bespoke Proposal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
