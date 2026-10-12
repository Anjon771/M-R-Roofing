import React, { useState } from 'react';
import { Phone, Shield, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenStormAlert: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenStormAlert }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Trust Notice Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-medium">
              <Shield className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>GAF Master Elite® Certified Contractor</span>
            </span>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <span className="hidden sm:inline text-slate-300">Lic #ROC-384910</span>
            <span className="text-slate-600 hidden md:inline" aria-hidden="true">·</span>
            <span className="hidden md:inline text-slate-300">50-Year Non-Prorated Warranty</span>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-xs">
            <button
              onClick={onOpenStormAlert}
              className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer transition-colors hidden sm:inline-flex items-center gap-1"
            >
              24/7 Storm Recovery Team
            </button>
            <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
            <a
              href="tel:+18005557663"
              className="text-white hover:text-amber-400 font-semibold flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>(800) 555-ROOF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#top"
            className="flex items-center gap-3 text-slate-950 font-display font-extrabold text-xl tracking-tight whitespace-nowrap shrink-0 group"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-950 text-amber-400 flex items-center justify-center font-black shadow-sm group-hover:bg-slate-900 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className="w-6 h-6">
                <path d="M3 13L12 4L21 13" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 12V20H19V12" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M9 20V14H15V20" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 4V2" stroke="currentColor" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap">
              M-R Roofing
            </span>
          </a>

          {/* Zone 2: 5 Clean Single-Line Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#services" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#calculator" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Cost Calculator
            </a>
            <a href="#restoration-slider" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Restoration Proof
            </a>
            <a href="#projects" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Projects
            </a>
            <a href="#reviews" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Reviews
            </a>
            <a href="#faq" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              FAQ
            </a>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Schedule Inspection</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Services
            </a>
            <a
              href="#calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Cost Calculator
            </a>
            <a
              href="#restoration-slider"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Restoration Proof
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Projects & Case Studies
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              Client Reviews
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-800 hover:text-amber-600 border-b border-slate-100"
            >
              FAQ
            </a>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 text-center font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg shadow transition-colors"
              >
                Schedule Free Inspection
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
