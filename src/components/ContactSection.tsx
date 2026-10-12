import React, { useState } from 'react';
import { Calendar, Phone, Mail, MapPin, CheckCircle, Clock, ShieldCheck, Upload, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  initialNotes?: string;
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialNotes = '', initialService = 'Residential Replacement' }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [service, setService] = useState(initialService);
  const [preferredDate, setPreferredDate] = useState('');
  const [timeWindow, setTimeWindow] = useState('Morning (8:00 AM – 12:00 PM)');
  const [notes, setNotes] = useState(initialNotes);
  const [filesAttached, setFilesAttached] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update when initial notes change from calculator
  React.useEffect(() => {
    if (initialNotes) {
      setNotes(initialNotes);
    }
  }, [initialNotes]);

  React.useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleFileSimulate = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map(f => f.name);
      setFilesAttached(prev => [...prev, ...names]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim() || !email.trim() || !address.trim()) {
      setErrorMsg('Please complete all required fields (Name, Phone, Email, and Property Address).');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  return (
    <section className="py-24 bg-slate-900 text-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info & Trust (col-span-5) */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
                Get Your Written Proposal
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight mb-4 text-balance">
                Schedule Your Free 21-Point Roof Inspection
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                No high-pressure sales reps. A licensed roofing specialist will inspect your roof, capture 4K aerial drone photos, inspect the attic for hidden leaks, and provide a binding written estimate.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800 text-sm">
              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Scheduling & Emergency Hotline</div>
                  <a href="tel:+18005557663" className="text-lg font-bold text-white hover:text-amber-400 transition-colors">
                    +1 (800) 555-ROOF (7663)
                  </a>
                  <div className="text-xs text-slate-400">Available 24 hours / 7 days for storm emergencies</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Email Dispatch</div>
                  <a href="mailto:estimates@mrroofing.example" className="text-base font-semibold text-white hover:text-amber-400 transition-colors">
                    estimates@mrroofing.example
                  </a>
                  <div className="text-xs text-slate-400">Responses guaranteed within 2 hours</div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2.5 rounded-lg bg-slate-800 text-amber-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Regional Headquarters & Yard</div>
                  <div className="text-base font-semibold text-white">
                    4200 Industrial Parkway, Suite 100
                  </div>
                  <div className="text-xs text-slate-400">Serving greater metropolitan area & surrounding counties</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>The M-R Roofing Zero-Surprise Guarantee</span>
              </div>
              <p>
                Our on-site estimates are guaranteed for 60 days. The price we quote is the price you pay—never an unexpected line item for fasteners, permits, or cleanup.
              </p>
            </div>
          </div>

          {/* Right Column: Lead Capture Form (col-span-7) */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-10 rounded-2xl shadow-2xl border border-slate-200">
            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold font-display text-slate-950">
                  Inspection Confirmed & Reserved!
                </h3>
                <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-lg text-xs font-mono font-bold text-slate-800">
                  Reference ID: #MR-{Math.floor(1000 + Math.random() * 9000)}
                </div>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. A licensed M-R Roofing field specialist has been assigned to your property at <strong>{address}</strong>. We will contact you at <strong>{phone}</strong> within 15 minutes to confirm the drone inspection window.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-600 max-w-md mx-auto space-y-1">
                  <div><strong>Selected Service:</strong> {service}</div>
                  <div><strong>Preferred Timeframe:</strong> {timeWindow}</div>
                  {notes && <div><strong>Calculated Scope:</strong> {notes}</div>}
                  {filesAttached.length > 0 && (
                    <div><strong>Photos Attached:</strong> {filesAttached.join(', ')}</div>
                  )}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFullName('');
                      setPhone('');
                      setEmail('');
                      setAddress('');
                      setFilesAttached([]);
                    }}
                    className="px-6 py-2.5 rounded-lg bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-950 mb-1">
                    Book Your On-Site Assessment
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill in your details below and our dispatch team will assign an inspector today.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Sarah Mitchell"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sarah@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Property Street Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="123 Highland Ave, City, State"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Service Requested
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 bg-white"
                    >
                      <option value="Residential Replacement">Full Residential Replacement</option>
                      <option value="Storm Damage Restoration">Storm / Hail Damage Inspection</option>
                      <option value="Emergency Leak Repair">Emergency Active Leak Repair</option>
                      <option value="Commercial Roofing">Commercial Flat Roof / TPO</option>
                      <option value="Gutters & Drainage">Seamless Gutters & Drainage</option>
                      <option value="Attic Ventilation">Attic Ventilation & Insulation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-800 mb-1">
                      Preferred Time Window
                    </label>
                    <select
                      value={timeWindow}
                      onChange={(e) => setTimeWindow(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 bg-white"
                    >
                      <option value="Morning (8:00 AM – 12:00 PM)">Morning (8:00 AM – 12:00 PM)</option>
                      <option value="Afternoon (12:00 PM – 4:00 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                      <option value="Late Afternoon (4:00 PM – 6:30 PM)">Late Afternoon (4:00 PM – 6:30 PM)</option>
                      <option value="Immediate Emergency Dispatch">Immediate Emergency Dispatch</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Project Notes or Calculator Details
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Describe your roof condition, age, visible leaks, or notes from the cost calculator..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500"
                  />
                </div>

                {/* Optional Photo Attachment */}
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1">
                    Attach Photos of Roof / Leaks (Optional)
                  </label>
                  <div className="border border-dashed border-slate-300 rounded-lg p-3 text-center hover:bg-slate-50 transition-colors relative cursor-pointer">
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileSimulate}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                    />
                    <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
                      <Upload className="w-4 h-4 text-amber-600" />
                      <span>Click to upload or drag roof photos here</span>
                    </div>
                  </div>
                  {filesAttached.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {filesAttached.map((file, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-100 px-2 py-0.5 rounded text-slate-700">
                          {file}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-slate-950" />
                  <span>Confirm Free On-Site Inspection</span>
                </button>

                <div className="flex items-center justify-center gap-4 text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>No Obligation</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Written Price Guarantee</span>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Licensed Inspectors</span>
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
