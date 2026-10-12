import React from 'react';
import { Shield, CheckCircle, FileText, Hammer, Award } from 'lucide-react';

export const ProcessAndTrust: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: '21-Point Drone & Attic Inspection',
      desc: 'Our certified roofing specialists conduct a thorough forensic inspection using 4K aerial photography and thermal attic leak scans, identifying hidden moisture or storm bruising.',
      icon: Shield,
    },
    {
      num: '02',
      title: 'Itemized Transparent Estimate',
      desc: 'You receive an exact, written proposal with zero vague allowances. We detail every shingle bundle, drip edge, ridge vent, and labor scope with clear financing options.',
      icon: FileText,
    },
    {
      num: '03',
      title: 'Site Protection & Master Installation',
      desc: 'We tarp your landscaping, driveway, and HVAC units with heavy duty netting. Most residential replacements complete in 1 to 2 days, followed by continuous magnetic nail sweeps.',
      icon: Hammer,
    },
    {
      num: '04',
      title: 'Manufacturer Warranty Certificate',
      desc: 'We conduct a final quality audit with the homeowner and issue your official 50-year non-prorated GAF Golden Pledge® transferable warranty certificate.',
      icon: Award,
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            The M-R Roofing Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4 text-balance">
            Our 4-Step Precision Workflow
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We eliminated the headaches of traditional home contracting. From the initial drone flight to the final nail sweep, our process ensures absolute transparency and zero disruption.
          </p>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative group">
                {/* Step Card */}
                <div className="p-6 rounded-xl bg-slate-950/60 border border-slate-800 h-full flex flex-col justify-between hover:border-slate-700 transition-colors">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-xs font-mono font-bold text-amber-400 tracking-wider">
                        STEP {step.num}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold font-display text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Triple-Barrier Protection Highlight */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                Engineered Roof Anatomy
              </span>
              <h3 className="text-2xl font-bold font-display text-white mb-4">
                Triple-Barrier Weather Shield
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Most roof failures happen because budget roofers skip the underlayment. M-R Roofing installs an integrated moisture defense system designed to withstand Category 4 hurricanes and severe winter freeze-thaw cycles.
              </p>
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Layer 1:</strong> Self-sealing ice & water barrier at eaves, valleys, and chimneys.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Layer 2:</strong> Breathable synthetic Deck-Armor™ underlayment across entire roof deck.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span><strong>Layer 3:</strong> LayerLock™ mechanical shingles with Dura Grip™ adhesive seal.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-amber-400 text-xl font-bold font-display mb-1">Top 2%</div>
                <div className="text-sm font-semibold text-white mb-1">Master Elite Status</div>
                <div className="text-xs text-slate-400">
                  Only 2 out of 100 roofers qualify for GAF Master Elite certification.
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-amber-400 text-xl font-bold font-display mb-1">$2,000,000</div>
                <div className="text-sm font-semibold text-white mb-1">General Liability</div>
                <div className="text-xs text-slate-400">
                  Comprehensive coverage protecting your property and family during construction.
                </div>
              </div>

              <div className="p-5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="text-amber-400 text-xl font-bold font-display mb-1">100% Sweep</div>
                <div className="text-sm font-semibold text-white mb-1">Magnetic Clean Yard</div>
                <div className="text-xs text-slate-400">
                  Multiple industrial magnetic rollers used to ensure zero stray nails in lawns or tires.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
