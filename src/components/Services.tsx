import React from 'react';
import { Home, CloudLightning, Wrench, Building2, Droplets, Wind, ArrowRight, ShieldCheck } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section className="py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-2">
              Our Capabilities & Scope
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight text-balance">
              Engineered Roofing Solutions for Every Property
            </h2>
            <p className="text-slate-600 text-base mt-3 leading-relaxed">
              From residential craftsman roof replacements to multi-acre commercial single-ply membranes, every system is installed by factory-certified crews and backed by written manufacturer guarantees.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2 text-xs text-slate-500 font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Fully Licensed, Bonded & $2M Insured</span>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Complete Roof Replacement (Marquee Col-Span-2) */}
          <div className="lg:col-span-2 p-8 rounded-xl bg-slate-900 text-white border border-slate-800 flex flex-col justify-between relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-amber-400 tracking-wider uppercase">
                  01. Architectural Replacement
                </span>
                <div className="p-2.5 rounded-lg bg-slate-800 text-amber-400">
                  <Home className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Full Residential Roof Replacement & Deck Restoration
              </h3>
              <p className="text-slate-300 text-sm max-w-xl leading-relaxed mb-6">
                Complete tear-off down to original structural decking. We inspect and replace damaged plywood, install ice and water shield on all valleys and penetrations, and lay lifetime architectural shingles rated up to 130 MPH winds.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs text-slate-300 mb-6">
                <div>
                  <strong className="block text-white">50-Year Non-Prorated</strong>
                  <span>GAF Golden Pledge</span>
                </div>
                <div>
                  <strong className="block text-white">1–2 Day Turnaround</strong>
                  <span>Full cleanup included</span>
                </div>
                <div>
                  <strong className="block text-white">Deck Verification</strong>
                  <span>Zero hidden rot</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-2">
              <button
                onClick={() => onSelectService('Residential Replacement')}
                className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
              >
                <span>Request Replacement Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Card 2: Storm & Hail Damage Restoration */}
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
                  02. Storm Recovery
                </span>
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800">
                  <CloudLightning className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                Storm Damage & Insurance Claims
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                High-definition drone footage and granular impact diagnostics. We coordinate directly with your insurance adjuster with Xactimate® pricing to ensure 100% legitimate coverage.
              </p>
              <div className="text-xs text-slate-500 space-y-1 mb-6">
                <div>· Drone 4K Roof Mapping</div>
                <div>· Free Adjuster Meeting On-Site</div>
                <div>· Zero Hidden Out-of-Pocket Fees</div>
              </div>
            </div>
            <button
              onClick={() => onSelectService('Storm Damage Restoration')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <span>Book Storm Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 3: Emergency Leak Repair */}
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
                  03. Precision Repair
                </span>
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                Emergency Leak Repair & Tarping
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Rapid diagnosis and precision remediation for valley leaks, chimney saddles, failing pipe flashings, wind-blown shingles, and skylight perimeter leaks.
              </p>
              <div className="text-xs text-slate-500 space-y-1 mb-6">
                <div>· 2-Hour Rapid Emergency Response</div>
                <div>· Precision Infrared Moisture Detection</div>
                <div>· Guaranteed Leak-Free Workmanship</div>
              </div>
            </div>
            <button
              onClick={() => onSelectService('Emergency Leak Repair')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <span>Schedule Leak Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 4: Commercial & Industrial Systems */}
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
                  04. Commercial Systems
                </span>
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800">
                  <Building2 className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                Commercial Flat Roofs & TPO
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Single-ply TPO, PVC, and EPDM heat-welded membrane roofs for industrial facilities, office complexes, and multi-family buildings with minimal business disruption.
              </p>
              <div className="text-xs text-slate-500 space-y-1 mb-6">
                <div>· 20 to 30-Year NDL Warranties</div>
                <div>· Energy Star High Reflectance</div>
                <div>· Preventive Maintenance Programs</div>
              </div>
            </div>
            <button
              onClick={() => onSelectService('Commercial Roofing')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <span>Inquire Commercial Systems</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 5: Seamless Gutters & Water Management */}
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
                  05. Water Management
                </span>
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800">
                  <Droplets className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                Seamless Gutters & Drainage
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Custom on-site extruded 6-inch seamless aluminum and copper gutters designed to channel massive storm runoff safely away from your home’s foundation.
              </p>
              <div className="text-xs text-slate-500 space-y-1 mb-6">
                <div>· Heavy-Gauge Seamless Aluminum</div>
                <div>· Micro-Mesh Leaf Filter Protection</div>
                <div>· Custom Oversized Downspouts</div>
              </div>
            </div>
            <button
              onClick={() => onSelectService('Gutters & Drainage')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <span>Explore Gutter Options</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Card 6: Attic Ventilation & Energy Efficiency */}
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-bold text-amber-700 tracking-wider uppercase">
                  06. Thermal Efficiency
                </span>
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800">
                  <Wind className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-2">
                Attic Ventilation & Energy Systems
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Optimize attic airflow to prevent ice dams in winter and reduce attic temperatures up to 35°F in summer, extending shingle lifespan and lowering AC bills.
              </p>
              <div className="text-xs text-slate-500 space-y-1 mb-6">
                <div>· Continuous Ridge Vents & Soffits</div>
                <div>· Solar-Powered Attic Fans</div>
                <div>· Lower Cooling Bills Guaranteed</div>
              </div>
            </div>
            <button
              onClick={() => onSelectService('Attic Ventilation')}
              className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors cursor-pointer"
            >
              <span>Ventilation Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
