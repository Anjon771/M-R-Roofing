import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden" id="restoration-slider">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
            Restoration Proof & Diagnostics
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4 text-balance">
            Interactive Roof Restoration: Before vs. After
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Drag the comparison slider below to inspect an actual roof restoration in Oakridge Glen. The original roof suffered severe granule stripping and rusted valley failure from hail. We executed a full tear-off, reinforced decking, and installed GAF Timberline HDZ architectural shingles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Comparison Slider Box (col-span-8) */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              className="relative h-[340px] sm:h-[460px] rounded-xl overflow-hidden shadow-2xl select-none cursor-ew-resize border border-slate-700 bg-slate-950"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
            >
              {/* "After" Image (Full background) */}
              <img
                src="/src/assets/images/roof_after_restored_1791816530532.jpg"
                alt="Restored pristine architectural shingle roof with precision ridge cap"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* "Before" Image (Clipped overlay) */}
              <div
                className="absolute inset-0 overflow-hidden pointer-events-none"
                style={{ width: `${sliderPos}%` }}
              >
                <img
                  src="/src/assets/images/roof_before_weathered_1791816517319.jpg"
                  alt="Weathered failing roof before restoration with moss, rusted valley, and damaged shingles"
                  className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                  style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
                  referrerPolicy="no-referrer"
                />
                {/* Before Badge */}
                <div className="absolute top-4 left-4 z-20 bg-red-950/90 text-red-200 border border-red-800 text-xs font-semibold px-3 py-1.5 rounded-md backdrop-blur-md flex items-center gap-1.5 shadow-md">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                  <span>BEFORE: Storm Damage & Valley Rust</span>
                </div>
              </div>

              {/* After Badge */}
              <div className="absolute top-4 right-4 z-20 bg-emerald-950/90 text-emerald-200 border border-emerald-800 text-xs font-semibold px-3 py-1.5 rounded-md backdrop-blur-md flex items-center gap-1.5 shadow-md">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>AFTER: Certified GAF Timberline HDZ</span>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute top-0 bottom-0 z-30 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.6)] cursor-ew-resize pointer-events-none"
                style={{ left: `${sliderPos}%` }}
              >
                {/* Center Draggable Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-slate-900 border-2 border-amber-400 shadow-xl flex items-center justify-center font-bold">
                  <ArrowLeftRight className="w-4 h-4 text-slate-900" />
                </div>
              </div>

              {/* Helper Drag Prompt */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/80 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-700 backdrop-blur-sm pointer-events-none">
                Drag slider to inspect transition
              </div>
            </div>

            {/* Quick Preset Buttons */}
            <div className="flex items-center justify-between gap-3 mt-4 text-xs text-slate-400">
              <span>View mode:</span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setSliderPos(15)}
                  className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  Inspect Restored Roof (85%)
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(50)}
                  className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  50/50 Split View
                </button>
                <button
                  type="button"
                  onClick={() => setSliderPos(85)}
                  className="px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                >
                  Inspect Damage (85%)
                </button>
              </div>
            </div>
          </div>

          {/* Case Study Details Breakdown (col-span-4) */}
          <div className="lg:col-span-4 bg-slate-950 p-6 rounded-xl border border-slate-800">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Oakridge Glen Restoration Case Study</span>
            </div>

            <h3 className="text-xl font-bold font-display text-white mb-4">
              From Hail Degradation to 50-Year Protection
            </h3>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="border-b border-slate-800 pb-3">
                <div className="text-xs text-slate-400">Identified Hazards</div>
                <div className="font-medium text-white mt-0.5">
                  Severe granule loss, rusted valley pan, wood rot beneath 3 decking sheets.
                </div>
              </div>

              <div className="border-b border-slate-800 pb-3">
                <div className="text-xs text-slate-400">Engineered Solution</div>
                <div className="font-medium text-white mt-0.5">
                  Complete tear-off, WeatherWatch® ice and water shield on all valleys and eaves, Cobra® ridge ventilation, GAF Timberline HDZ architectural shingles.
                </div>
              </div>

              <div className="border-b border-slate-800 pb-3">
                <div className="text-xs text-slate-400">Insurance Outcome</div>
                <div className="font-medium text-white mt-0.5">
                  100% claim approval with zero homeowner deductible out of pocket after M-R Roofing adjuster liaison.
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between text-xs text-slate-400">
                <span>Duration: <strong>2 Business Days</strong></span>
                <span>Warranty: <strong>50-Yr Golden Pledge</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
