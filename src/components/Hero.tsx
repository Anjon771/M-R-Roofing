import React from 'react';
import { ArrowRight, Calculator, ShieldCheck, Award, Clock, Star } from 'lucide-react';
import { IMAGES, FALLBACK_IMAGES } from '../assets/images';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden" id="top">
      {/* Background Hero Image with measured contrast scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== FALLBACK_IMAGES.hero) {
              target.src = FALLBACK_IMAGES.hero;
            }
          }}
          alt="Craftsman residential property with precision architectural shingle roof"
          className="w-full h-full object-cover object-center brightness-75 scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-28 lg:pt-28 lg:pb-36">
        <div className="max-w-3xl">
          {/* Unboxed Metadata Tag (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-5">
            <span>Residential & Commercial Roofing Systems</span>
            <span aria-hidden="true">·</span>
            <span>GAF Master Elite® Certified</span>
          </div>

          {/* Display Headline with balanced wrapping */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
            Architectural roofs engineered for <span className="text-amber-400 underline decoration-amber-400/40 underline-offset-8">lifetime</span> protection.
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed mb-10 max-w-2xl">
            Protect your property with certified master craftsmanship, hurricane-rated materials, and direct insurance restoration—backed by a 50-year non-prorated manufacturer warranty.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-16">
            <a
              href="#calculator"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-amber-400 text-slate-950 font-bold text-base hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <Calculator className="w-5 h-5 text-slate-950" />
              <span>Instant Cost Calculator</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-base backdrop-blur-sm transition-all cursor-pointer whitespace-nowrap shrink-0"
            >
              <span>Book 21-Point Drone Inspection</span>
            </button>
          </div>
        </div>

        {/* 4-Column Proof & Metric Strip (Claim-to-Proof Adjacency) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-white/15">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display tracking-tight text-white tabular-nums">
                2,850+
              </div>
              <div className="text-xs text-slate-300 font-medium">Roofs Installed to Date</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400 shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display tracking-tight text-white tabular-nums">
                50 Years
              </div>
              <div className="text-xs text-slate-300 font-medium">Non-Prorated Warranty</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display tracking-tight text-white tabular-nums">
                4.98 / 5.0
              </div>
              <div className="text-xs text-slate-300 font-medium">Over 520 Verified Reviews</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-amber-400 shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <div className="text-2xl font-bold font-display tracking-tight text-white tabular-nums">
                2 Hours
              </div>
              <div className="text-xs text-slate-300 font-medium">Storm Emergency Tarping</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
