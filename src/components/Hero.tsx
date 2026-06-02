/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight, Play, PhoneCall, ShieldAlert, Award, Clock } from 'lucide-react';
import { ASSET_PATHS } from '../data';

interface HeroProps {
  onOpenQuote: () => void;
}

export default function Hero({ onOpenQuote }: HeroProps) {
  const badges = [
    {
      icon: <PhoneCall className="w-5 h-5 text-blue-600" />,
      title: '24/7',
      sub: 'Emergency Support'
    },
    {
      icon: <Award className="w-5 h-5 text-blue-600" />,
      title: 'Certified',
      sub: 'Technicians'
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-blue-600" />,
      title: 'UAE Safety',
      sub: 'Standards Approved'
    },
    {
      icon: <Clock className="w-5 h-5 text-blue-600" />,
      title: 'Fast Response',
      sub: 'Across UAE'
    }
  ];

  return (
    <section id="home" className="metal-grid relative pt-24 sm:pt-24 lg:pt-28 bg-slate-50 overflow-hidden">
      <div className="hero-ambient absolute -top-28 -right-20 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="hero-ambient absolute top-48 -left-24 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" style={{ animationDelay: '1.4s' }} />
      
      {/* Background visual container & Layout Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-8 sm:py-12 lg:py-20">
          
          {/* Left Column (Copy content) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 lg:space-y-8 animate-fadeIn text-left">
            <span className="max-w-full text-[8px] min-[360px]:text-[10px] sm:text-xs font-mono font-black uppercase tracking-wider sm:tracking-widest text-blue-600 bg-blue-50/80 px-3 sm:px-4 py-1.5 rounded-full border border-blue-105 inline-flex text-center leading-tight">
              COOLING SOLUTIONS YOU CAN TRUST
            </span>
            
            <h1 className="text-[26px] min-[360px]:text-3xl min-[420px]:text-4xl sm:text-5xl lg:text-6xl font-black text-slate-905 tracking-tight leading-[1.02] sm:leading-tight uppercase font-sans">
              Professional <br />
              <span className="shine-text">AC Installation</span> <br />
              & Ducting Solutions
            </h1>
            
            <p className="text-slate-650 text-xs min-[420px]:text-sm sm:text-md max-w-lg leading-relaxed font-sans">
              Professional AC installation, AC repair, HVAC maintenance, GI ducting, PI ducting and copper pipe welding for residential, commercial and industrial projects across Dubai, Sharjah, Umm Al Quwain and the UAE.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2">
              <button 
                onClick={onOpenQuote}
                className="premium-button px-5 sm:px-6 py-3 sm:py-3.5 bg-blue-650 hover:bg-blue-700 text-white font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/10 cursor-pointer"
                id="hero-free-quote-btn"
              >
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </button>
              
              <a 
                href="#/services"
                className="premium-button px-5 sm:px-6 py-3 sm:py-3.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-805 font-sans font-bold text-[10px] sm:text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 transition-all"
                id="hero-services-scroll-btn"
              >
                Our Services <div className="w-5 h-5 bg-slate-900 text-white rounded-full flex items-center justify-center shrink-0"><Play className="w-2.5 h-2.5 fill-white text-white ml-0.5" /></div>
              </a>
            </div>
          </div>

          {/* Right Column (Huge overlapping image frame matching uploaded reference) */}
          <div className="lg:col-span-6 relative animate-scaleUp">
            <div className="premium-card float-soft relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl aspect-video sm:aspect-4/3 lg:aspect-square group bg-slate-800">
              <img 
                src={ASSET_PATHS.heroChiller} 
                alt="Gulf Breeze AC installation and ducting services in UAE" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 select-none"
                referrerPolicy="no-referrer"
                id="hero-main-chiller-img"
              />
              
              {/* Image dark/light overlay details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              
              {/* Badge Overlay */}
              <div className="static sm:absolute sm:bottom-6 sm:left-6 sm:right-auto m-3 sm:m-0 bg-blue-900/90 text-white p-3 sm:p-4 rounded-2xl border border-blue-800 backdrop-blur-xs sm:max-w-[240px] shadow-lg">
                <span className="text-[9px] font-bold font-mono tracking-wider uppercase text-blue-400 block mb-1">Dubai Showroom</span>
                <p className="text-[10px] sm:text-xs font-semibold leading-tight text-white block">Experience heavy-duty water chillers & duct designs live.</p>
              </div>
            </div>
            
            {/* Soft background decor blur glow to recreate original aesthetic */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-sky-400/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Floating Sticky Status bar immediately under hero fold */}
      <div className="bg-white border-y border-slate-100 relative z-30" id="hero-floating-badges-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 md:gap-4 divide-y-0 md:divide-x divide-slate-100">
            {badges.map((badge, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-3 sm:gap-4 p-2 md:px-4"
              >
                <div className="premium-icon p-2.5 rounded-xl bg-blue-50/60 shrink-0">
                  {badge.icon}
                </div>
                <div className="text-left font-sans">
                  <h4 className="text-sm font-black text-slate-900 tracking-tight leading-none uppercase">{badge.title}</h4>
                  <p className="text-xs text-slate-500 leading-tight mt-1">{badge.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
