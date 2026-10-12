import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Col 1 & 2: Brand Lockup & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-white font-display font-extrabold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-950 flex items-center justify-center font-black">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <path d="M3 13L12 4L21 13" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M5 12V20H19V12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-white font-bold tracking-tight">M-R Roofing</span>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Certified GAF Master Elite roofing contractor providing residential roof replacements, commercial single-ply membranes, standing seam metal, and direct storm damage insurance restoration.
            </p>

            <div className="pt-2 text-[11px] text-slate-500 space-y-1">
              <div>Contractor License #ROC-384910 (Class B & C-39)</div>
              <div>$2,000,000 General Liability & Full Workers’ Comp Coverage</div>
            </div>
          </div>

          {/* Col 3: Quick Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-display">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Architectural Shingles</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Standing Seam Metal</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Commercial TPO & Flat</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Storm & Hail Restoration</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Seamless Gutters & Guards</a></li>
            </ul>
          </div>

          {/* Col 4: Tools & Information */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-display">
              Resources
            </h4>
            <ul className="space-y-2.5">
              <li><a href="#calculator" className="hover:text-amber-400 transition-colors">Instant Cost Calculator</a></li>
              <li><a href="#restoration-slider" className="hover:text-amber-400 transition-colors">Before & After Slider</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Case Studies & Gallery</a></li>
              <li><a href="#reviews" className="hover:text-amber-400 transition-colors">Verified Reviews</a></li>
              <li><a href="#faq" className="hover:text-amber-400 transition-colors">Roofing FAQ</a></li>
            </ul>
          </div>

          {/* Col 5: Dispatch & Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-display">
              Contact & Dispatch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-white">
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="tel:+18005557663" className="hover:text-amber-400 font-bold">(800) 555-ROOF</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href="mailto:estimates@mrroofing.example" className="hover:text-amber-400 truncate">estimates@mrroofing.example</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>4200 Industrial Pkwy, Suite 100</span>
              </li>
              <li className="pt-2 text-[11px] text-slate-500">
                Mon–Sat: 7:00 AM – 6:30 PM<br />
                24/7 On-Call Emergency Storm Response
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {currentYear} M-R Roofing Systems, Inc. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>·</span>
            <span>Terms of Service</span>
            <span>·</span>
            <span>Warranty Disclosures</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
