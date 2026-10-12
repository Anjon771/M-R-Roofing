import React, { useState } from 'react';
import { GALLERY_PROJECTS } from '../data/roofingData';
import { ProjectItem } from '../types/roofing';
import { FALLBACK_IMAGES } from '../assets/images';
import { MapPin, Clock, Layers, ArrowUpRight, Check, X } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = GALLERY_PROJECTS.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Interactive Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="text-xs font-semibold text-amber-700 tracking-wider uppercase mb-2">
              Recent Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-slate-950 tracking-tight text-balance">
              Proven Craftsmanship Across the Region
            </h2>
            <p className="text-slate-600 text-base mt-2">
              Every roof is custom engineered to local wind loads, snow ratings, and architectural styles.
            </p>
          </div>

          {/* Filter Tabs (Interactive Filter Controls - Button tabs allowed) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 rounded-lg">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'residential', label: 'Residential' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'metal', label: 'Standing Seam Metal' },
              { id: 'restoration', label: 'Storm Restoration' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-white text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group rounded-xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== FALLBACK_IMAGES.hero) {
                        target.src = FALLBACK_IMAGES.hero;
                      }
                    }}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-medium">
                    <span className="flex items-center gap-1.5 drop-shadow">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{project.location}</span>
                    </span>
                    <span className="bg-slate-900/80 px-2.5 py-0.5 rounded text-[11px] backdrop-blur-sm">
                      {project.sqFt.toLocaleString()} sq ft
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Unboxed Metadata (Zero-Pill Discipline) */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                    <span className="text-amber-700 font-semibold uppercase">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{project.duration}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Layers className="w-3 h-3" />
                      <span>{project.material}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-slate-950 mb-2 group-hover:text-amber-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {project.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 px-4 rounded-lg border border-slate-300 hover:border-slate-900 text-slate-800 hover:text-slate-950 text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>View Project Specs & Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Modal for Detailed Project View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                  Case Study Dossier
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden mb-6 bg-slate-900">
                <img
                  src={selectedProject.image}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== FALLBACK_IMAGES.hero) {
                      target.src = FALLBACK_IMAGES.hero;
                    }
                  }}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-2xl font-bold font-display text-slate-950 mb-2">
                {selectedProject.title}
              </h3>

              <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                <span>Location: <strong>{selectedProject.location}</strong></span>
                <span>·</span>
                <span>Size: <strong>{selectedProject.sqFt.toLocaleString()} sq ft</strong></span>
                <span>·</span>
                <span>Completion: <strong>{selectedProject.duration}</strong></span>
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 mb-6">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Technical Specifications & Engineering
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
                  <div>· Primary Material: {selectedProject.material}</div>
                  <div>· Wind Rating: Up to 130 MPH LayerLock</div>
                  <div>· Underlayment: Deck-Armor Synthetic Barrier</div>
                  <div>· Fastening: 6-Nail High Wind Pattern</div>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
