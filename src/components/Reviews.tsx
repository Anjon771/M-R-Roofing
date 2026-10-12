import React from 'react';
import { REVIEWS } from '../data/roofingData';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-2">
              Verified Client Outcomes
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight text-balance">
              Real Experiences. Built on Trust.
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Every review represents an authentic residential or commercial roofing project inspected and certified by M-R Roofing.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4 bg-white px-5 py-3 rounded-xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs">
              <div className="font-bold text-slate-900 tabular-nums">4.98 / 5.0 Star Rating</div>
              <div className="text-slate-500">520+ Homeowners & Businesses</div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  {review.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{review.quote}"
                </p>
              </div>

              {/* Reviewer Details (Zero-Pill Discipline) */}
              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-sm text-slate-950 font-display">
                  {review.name}
                </div>
                <div className="text-xs text-slate-500">
                  {review.role} · {review.location}
                </div>
                <div className="text-[11px] text-amber-700 font-medium mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-amber-600" />
                  <span>{review.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
