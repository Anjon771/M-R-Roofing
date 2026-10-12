import React from 'react';
import { X, CloudRain, Phone, AlertTriangle, ShieldAlert, Check } from 'lucide-react';

interface EmergencyBannerProps {
  isOpen: boolean;
  onClose: () => void;
  onBookEmergency: () => void;
}

export const EmergencyBanner: React.FC<EmergencyBannerProps> = ({ isOpen, onClose, onBookEmergency }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="bg-slate-900 text-white rounded-2xl max-w-lg w-full border border-amber-500/40 shadow-2xl p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-3">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>24/7 Rapid Storm Recovery Dispatch</span>
        </div>

        <h3 className="text-2xl font-bold font-display text-white mb-3">
          Active Leak or Severe Storm Damage?
        </h3>

        <p className="text-slate-300 text-sm leading-relaxed mb-6">
          Our rapid response units are deployed with industrial waterproof tarps, emergency ridge fasteners, and infrared moisture detectors to protect your home interior before rain spreads.
        </p>

        {/* 3 Steps to protect claim */}
        <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6 space-y-2.5 text-xs text-slate-300">
          <div className="font-bold text-amber-400 uppercase tracking-wide">
            Emergency Homeowner Checklist:
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Do not climb on a wet or damaged roof yourself.</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Take photos of interior ceiling leaks & floor buckets.</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Call M-R Roofing for immediate emergency tarping & insurance file prep.</span>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href="tel:+18005557663"
            className="w-full py-3.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <Phone className="w-4 h-4 text-slate-950" />
            <span>Call 24/7 Hotline: (800) 555-ROOF</span>
          </a>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBookEmergency();
            }}
            className="w-full py-3 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Request Emergency Tarping Online
          </button>
        </div>
      </div>
    </div>
  );
};
