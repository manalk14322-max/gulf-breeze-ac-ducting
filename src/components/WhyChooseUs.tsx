/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import type { CSSProperties } from 'react';
import { ASSET_PATHS } from '../data';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export default function WhyChooseUs({ onOpenQuote }: WhyChooseUsProps) {
  const features = [
    'Experienced & Certified Engineers',
    'High Quality Equipment & Materials',
    'On-time Project Delivery Guarantee',
    'Energy Efficient & Cost Effective Solutions',
    'UAE Standards & Safety Compliance',
    'Transparent Pricing without Hidden Fees',
  ];

  return (
    <section id="why-us" className="metal-grid py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
          
          {/* Left Column (Copy and checks list) */}
          <div className="lg:col-span-6 space-y-6 text-left" id="why-us-info-box" data-reveal>
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#0066cc] uppercase block">
              WHY CHOOSE US
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase font-sans">
              Engineering Quality.<br />
              <span className="text-[#0066cc]">Delivering Trust.</span>
            </h2>
            <p className="text-slate-650 text-xs sm:text-sm leading-relaxed max-w-xl">
              We understand that air conditioning in the Gulf represents more than a luxury; it is a critical life-support system. Our team ensures flawless execution from calculation load to initial power testing and beyond.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5" id={`feature-item-${idx}`}>
                  <div className="premium-icon p-1 rounded-full bg-blue-50 text-blue-650 mt-0.5 shrink-0 border border-blue-100">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-xs font-semibold text-slate-800 leading-tight">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button 
                onClick={onOpenQuote}
                className="premium-button px-6 py-3 bg-[#0066cc] hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                id="why-learn-more-btn"
              >
                Estimate Installation Sizing <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column (Double-Frame Tech display with overlapping mechanics) */}
          <div className="lg:col-span-6 relative flex items-center justify-center" data-reveal style={{ '--reveal-delay': '140ms' } as CSSProperties}>
            
            {/* Background design elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] border border-dashed border-slate-200 aspect-square rounded-full -z-10 pointer-events-none" />
            
            <div className="grid grid-cols-12 gap-4 w-full max-w-md relative z-10">
              
              {/* Overlapping Large top-left frame */}
              <div className="premium-card col-span-12 rounded-2xl overflow-hidden border-4 border-white shadow-xl aspect-16/10 sm:aspect-16/9 bg-slate-800 group relative">
                <video
                  src={ASSET_PATHS.clientSiteVideo}
                  poster={ASSET_PATHS.clientPackageUnit}
                  className="w-full h-full object-cover select-none"
                  controls
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
                
                {/* Floating Technical Status */}
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white font-mono text-[9px] px-2.5 py-1 rounded-md border border-slate-700 flex items-center gap-1.5 backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse border border-emerald-300 shrink-0" />
                  PRESSURE UNIT ON-LOAD
                </div>

              </div>

              {/* Smaller overlapping bottom-right badge frame */}
              <div className="premium-card col-span-10 col-start-2 bg-white rounded-xl shadow-lg border border-slate-100 p-4 flex gap-4 text-left">
                <div className="premium-icon p-3 bg-blue-50 text-blue-650 rounded-xl shrink-0 h-fit">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="font-sans">
                  <h4 className="text-xs font-bold text-slate-900 uppercase">ESMA Standard Certified</h4>
                  <p className="text-[10px] text-slate-500 leading-relaxed mt-1">Our products pass UAE energy ratings, achieving high electrical conservation metrics for your peace of mind.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
