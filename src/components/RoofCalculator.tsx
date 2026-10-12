import React, { useState, useMemo } from 'react';
import { ROOFING_MATERIALS } from '../data/roofingData';
import { RoofingMaterial, RoofPitch } from '../types/roofing';
import { Calculator, Check, Shield, DollarSign, Calendar, Info } from 'lucide-react';

interface RoofCalculatorProps {
  onSelectEstimate: (summary: string) => void;
}

export const RoofCalculator: React.FC<RoofCalculatorProps> = ({ onSelectEstimate }) => {
  const [sqFt, setSqFt] = useState<number>(2500);
  const [pitch, setPitch] = useState<RoofPitch>('standard');
  const [materialId, setMaterialId] = useState<RoofingMaterial>('asphalt');
  const [includeGutters, setIncludeGutters] = useState<boolean>(true);
  const [includeRidgeVent, setIncludeRidgeVent] = useState<boolean>(true);
  const [includeSkylights, setIncludeSkylights] = useState<boolean>(false);

  const selectedMaterial = useMemo(() => {
    return ROOFING_MATERIALS.find((m) => m.id === materialId) || ROOFING_MATERIALS[0];
  }, [materialId]);

  // Pitch multiplier accounts for true surface area on sloped roof + safety staging
  const pitchMultiplier = useMemo(() => {
    switch (pitch) {
      case 'complex':
        return 1.32;
      case 'steep':
        return 1.18;
      case 'standard':
      default:
        return 1.06;
    }
  }, [pitch]);

  // Calculate costs
  const { materialCost, laborCost, addonsCost, totalLow, totalHigh, monthlyPayment } = useMemo(() => {
    const effectiveSqFt = sqFt * pitchMultiplier;
    const baseMaterial = effectiveSqFt * selectedMaterial.pricePerSqFt;
    const baseLaborAndDisposal = effectiveSqFt * 3.25;

    let addons = 0;
    if (includeGutters) addons += 1450;
    if (includeRidgeVent) addons += 750;
    if (includeSkylights) addons += 480;

    const baseSum = baseMaterial + baseLaborAndDisposal + addons;
    const low = Math.round(baseSum * 0.94);
    const high = Math.round(baseSum * 1.06);

    // 0% APR 18 months payment estimate
    const monthly = Math.round(low / 18);

    return {
      materialCost: Math.round(baseMaterial),
      laborCost: Math.round(baseLaborAndDisposal),
      addonsCost: addons,
      totalLow: low,
      totalHigh: high,
      monthlyPayment: monthly,
    };
  }, [sqFt, pitchMultiplier, selectedMaterial, includeGutters, includeRidgeVent, includeSkylights]);

  const handleBookWithEstimate = () => {
    const summary = `${sqFt.toLocaleString()} sq ft · ${selectedMaterial.name} · ${pitch} pitch (Est: $${totalLow.toLocaleString()} - $${totalHigh.toLocaleString()})`;
    onSelectEstimate(summary);
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-700 tracking-wider uppercase mb-2">
            <Calculator className="w-3.5 h-3.5 text-amber-600" />
            <span>Transparent Pricing Engine</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight mb-4 text-balance">
            Interactive Roofing Cost Calculator
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Get an instant, honest ballpark estimate tailored to your home’s footprint, pitch complexity, and preferred architectural materials.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Configurator (col-span-7) */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-8">
            {/* Step 1: Roof Footprint Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-900">
                  1. Home / Roof Footprint Area
                </label>
                <span className="text-lg font-bold font-display text-amber-600 tabular-nums">
                  {sqFt.toLocaleString()} sq. ft.
                </span>
              </div>
              <input
                type="range"
                min="1000"
                max="5500"
                step="50"
                value={sqFt}
                onChange={(e) => setSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                aria-label="Roof area in square feet"
              />
              <div className="flex justify-between items-center text-xs text-slate-400 mt-2">
                <span>1,000 sq ft (Compact)</span>
                <span>2,500 sq ft (Avg US Home)</span>
                <span>5,500 sq ft (Estate)</span>
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-2 mt-3">
                {[1500, 2200, 2800, 3600, 4800].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setSqFt(preset)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                      sqFt === preset
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {preset.toLocaleString()} sq ft
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Roof Pitch / Slope Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                2. Roof Pitch & Architectural Complexity
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'standard', label: 'Standard Pitch', detail: 'Walkable (4:12 - 6:12 slope)' },
                  { id: 'steep', label: 'Steep Pitch', detail: 'Steep incline (7:12 - 9:12 slope)' },
                  { id: 'complex', label: 'Complex Architectural', detail: 'Multi-dormer / Turrets (10:12+)' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setPitch(item.id as RoofPitch)}
                    className={`p-3.5 rounded-lg border text-left transition-all cursor-pointer ${
                      pitch === item.id
                        ? 'border-amber-500 bg-amber-50/50 ring-1 ring-amber-500'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-900 mb-0.5">{item.label}</div>
                    <div className="text-[11px] text-slate-500 leading-tight">{item.detail}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Material Options */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                3. Choose Roofing Material System
              </label>
              <div className="space-y-3">
                {ROOFING_MATERIALS.map((mat) => {
                  const isSelected = mat.id === materialId;
                  return (
                    <div
                      key={mat.id}
                      onClick={() => setMaterialId(mat.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-amber-500 bg-amber-50/40 ring-1 ring-amber-500'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-slate-900">{mat.name}</span>
                          <span className="text-xs text-slate-500">· {mat.category}</span>
                        </div>
                        <p className="text-xs text-slate-600 line-clamp-2">{mat.description}</p>
                        <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-2">
                          <span>Lifespan: <strong className="text-slate-800">{mat.lifespan}</strong></span>
                          <span>·</span>
                          <span>Warranty: <strong className="text-slate-800">{mat.warrantyYears} Yrs</strong></span>
                          <span>·</span>
                          <span>Wind: <strong className="text-slate-800">{mat.windRating}</strong></span>
                        </div>
                      </div>

                      <div className="sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
                        <div className="text-sm font-bold text-slate-900">
                          ${mat.pricePerSqFt.toFixed(2)} / sq.ft.
                        </div>
                        <div className="text-[11px] text-slate-500">Material Baseline</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Optional Add-ons */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-3">
                4. Recommended Add-ons & Ventilation
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setIncludeGutters(!includeGutters)}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                    includeGutters ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">6" Seamless Gutters</span>
                    {includeGutters && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </div>
                  <span className={`text-[11px] block mt-1 ${includeGutters ? 'text-slate-300' : 'text-slate-500'}`}>
                    +$1,450 installed
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeRidgeVent(!includeRidgeVent)}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                    includeRidgeVent ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Cobra® Ridge Vent</span>
                    {includeRidgeVent && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </div>
                  <span className={`text-[11px] block mt-1 ${includeRidgeVent ? 'text-slate-300' : 'text-slate-500'}`}>
                    +$750 installed
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIncludeSkylights(!includeSkylights)}
                  className={`p-3 rounded-lg border text-left cursor-pointer transition-colors ${
                    includeSkylights ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-800 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold">Skylight Flashing</span>
                    {includeSkylights && <Check className="w-3.5 h-3.5 text-amber-400" />}
                  </div>
                  <span className={`text-[11px] block mt-1 ${includeSkylights ? 'text-slate-300' : 'text-slate-500'}`}>
                    +$480 replacement
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Estimate Breakdown Card (col-span-5) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-8 rounded-xl border border-slate-800 shadow-xl sticky top-28 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider block">
                  Calculated Estimate
                </span>
                <span className="text-xs text-slate-400">
                  {sqFt.toLocaleString()} sq ft · {selectedMaterial.category}
                </span>
              </div>
              <div className="p-2 rounded-lg bg-slate-800 text-amber-400">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>

            {/* Estimated Total Price Range */}
            <div>
              <div className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white tabular-nums">
                ${totalLow.toLocaleString()} – ${totalHigh.toLocaleString()}
              </div>
              <div className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Includes certified tear-off, decking prep & lifetime warranty.</span>
              </div>
            </div>

            {/* Monthly Financing Highlight */}
            <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 flex items-center justify-between">
              <div>
                <div className="text-xs text-slate-400">0% APR Financing (18 Months)</div>
                <div className="text-xl font-bold font-display text-amber-400 tabular-nums">
                  ~${monthlyPayment} / month
                </div>
              </div>
              <span className="text-xs font-medium text-slate-300 bg-slate-700/60 px-2.5 py-1 rounded">
                No Prepayment Penalty
              </span>
            </div>

            {/* Itemized Cost Breakdown */}
            <div className="space-y-3 pt-2 text-xs border-t border-slate-800">
              <div className="flex justify-between text-slate-300">
                <span>Materials & Underlayment</span>
                <span className="font-semibold text-white tabular-nums">${materialCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Tear-off, Labor & Safety Systems</span>
                <span className="font-semibold text-white tabular-nums">${laborCost.toLocaleString()}</span>
              </div>
              {addonsCost > 0 && (
                <div className="flex justify-between text-slate-300">
                  <span>Selected Architectural Add-ons</span>
                  <span className="font-semibold text-white tabular-nums">+${addonsCost.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-amber-400 font-medium pt-2 border-t border-slate-800">
                <span>GAF 50-Year Golden Pledge Warranty</span>
                <span>Included ($0)</span>
              </div>
              <div className="flex justify-between text-amber-400 font-medium">
                <span>Magnetic Nail Driveway Sweep</span>
                <span>Included ($0)</span>
              </div>
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={handleBookWithEstimate}
                className="w-full py-4 px-6 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Lock In Estimate & Schedule Inspection</span>
              </button>
              <div className="text-center text-[11px] text-slate-400 mt-2.5">
                Zero obligation. Final price guaranteed in writing after on-site measurement.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
