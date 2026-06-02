/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Calendar, Briefcase, Users, CheckCircle2 } from 'lucide-react';
import type { CSSProperties } from 'react';
import { ASSET_PATHS, STATS } from '../data';

export default function AboutSection() {
  // Mapping statistical icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Calendar': return <Calendar className="w-5 h-5 text-blue-600" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-600" />;
      case 'Users': return <Users className="w-5 h-5 text-blue-600" />;
      case 'CheckCircle': return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
      default: return <CheckCircle2 className="w-5 h-5 text-blue-600" />;
    }
  };

  return (
    <section id="about" className="metal-grid py-16 sm:py-24 bg-white relative overflow-hidden">
      
      {/* Background visual details (dotted grids) to mimic original design */}
      <div className="absolute top-10 left-10 w-24 h-24 text-slate-200 pointer-events-none opacity-50 font-mono text-[9px] select-none leading-none">
        ••••••••••••<br />••••••••••••<br />••••••••••••<br />••••••••••••
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Brand Narrative Copy) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6 text-left" id="about-brief-box" data-reveal>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0066cc] uppercase block">
              ABOUT GULF BREEZE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase font-sans">
              Your Comfort <br />
              Is Our Expertise
            </h2>
            <p className="text-slate-600 text-sm sm:text-md leading-relaxed font-sans">
              Gulf Breeze AC & Ducting provides professional, end-to-end AC and HVAC solutions across the UAE with a strong focus on engineering quality, safety, airflow performance, ducting workmanship and energy efficiency.
            </p>
            <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-sans">
              From residential villas and farmhouse cooling to restaurants, warehouses and industrial facilities, we fabricate, install and repair GI ducting, PI ducting, duct AC systems and air conditioning systems built for severe UAE summer conditions.
            </p>
            
            {/* Signature Area */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-bold font-mono text-slate-400 tracking-wider">CHIEF ENGINEERING COMMAND</p>
                <p className="text-blue-900 font-black font-sans tracking-tight text-sm uppercase mt-0.5">Gulf Breeze Team</p>
              </div>
              
              {/* Elegant script signature mockup */}
              <div className="text-2xl font-semibold text-blue-650 opacity-80 select-none tracking-widest" style={{ fontFamily5: '"Playfair Display", serif' }}>
                <span className="italic transform -rotate-6 inline-block font-serif text-3xl select-none text-blue-750">Gulf Breeze Team</span>
              </div>
            </div>
          </div>

          {/* Center Column (Layered Visual Collage) */}
          <div className="lg:col-span-4 relative flex flex-col items-center justify-center py-6">
            <div className="relative w-full max-w-sm space-y-4">
              
              {/* Top Layered Image (Technicians) */}
              <div className="premium-card relative rounded-2xl overflow-hidden border-4 border-white shadow-lg aspect-4/3 bg-slate-800 transform hover:-translate-y-1 transition duration-300" data-reveal>
                <img 
                  src={ASSET_PATHS.aboutTechnicians} 
                  alt="Certified HVAC technician inspecting AC and ducting systems" 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-white/90 text-slate-900 text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  Field Diagnostics
                </span>
              </div>

              {/* Bottom Layered Image (Ductwork Factory) */}
              <div className="premium-card relative rounded-2xl overflow-hidden border-4 border-white shadow-lg aspect-4/3 bg-slate-800 transform hover:-translate-y-1 transition duration-300" data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties}>
                <img 
                  src={ASSET_PATHS.aboutDuctwork} 
                  alt="GI and PI duct fabrication workshop in UAE" 
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                <span className="absolute bottom-3 left-3 bg-white/90 text-slate-900 text-[9px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm">
                  Precision Fabrication
                </span>
              </div>

            </div>
          </div>

          {/* Right Column (Company Metrics Grid) */}
          <div className="lg:col-span-3 grid grid-cols-1 gap-5" id="about-stats-container">
            {STATS.map((stat, idx) => (
              <div 
                key={idx}
                className="premium-card bg-slate-50 rounded-2xl p-5 border border-slate-100 hover:border-blue-200 hover:bg-slate-50/50 transition-all text-left group"
                data-reveal
                style={{ '--reveal-delay': `${idx * 80}ms` } as CSSProperties}
              >
                <div className="flex items-center gap-3.5">
                  <div className="premium-icon p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {getIcon(stat.iconName)}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 leading-none tracking-tight font-sans">
                      {stat.value}
                    </h3>
                    <p className="text-xs font-bold text-slate-705 leading-none mt-1.5 uppercase tracking-wide">
                      {stat.label}
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-500 mt-2.5 leading-relaxed font-sans">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
