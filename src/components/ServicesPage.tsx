/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ArrowRight,
  Building,
  CheckCircle2,
  Cpu,
  FileText,
  Layers,
  Settings,
  ShieldAlert,
  Sparkles,
  Star,
  Wind,
  Wrench,
} from 'lucide-react';
import type { CSSProperties } from 'react';
import { ASSET_PATHS, SERVICES } from '../data';

interface ServicesPageProps {
  onOpenQuote: (serviceName?: string) => void;
}

export default function ServicesPage({ onOpenQuote }: ServicesPageProps) {
  const getIcon = (iconName: string, className = 'w-6 h-6') => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className={className} />;
      case 'Settings':
        return <Settings className={className} />;
      case 'Layers':
        return <Layers className={className} />;
      case 'Cpu':
        return <Cpu className={className} />;
      case 'Wind':
        return <Wind className={className} />;
      case 'ShieldAlert':
        return <ShieldAlert className={className} />;
      case 'Building':
        return <Building className={className} />;
      case 'FileText':
        return <FileText className={className} />;
      default:
        return <Wrench className={className} />;
    }
  };

  const categoryServices = SERVICES.slice(0, 6);
  const servicePackages = SERVICES.slice(0, 8);

  return (
    <div className="bg-slate-50">
      <section className="metal-grid py-10 sm:py-16 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8" data-reveal>
            <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase">
              Our Categories
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight mt-2 leading-tight">
              Shop By Service Category
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {categoryServices.map((service, idx) => (
              <button
                key={service.id}
                onClick={() => onOpenQuote(service.id)}
                className="group text-center cursor-pointer"
                data-reveal
                style={{ '--reveal-delay': `${idx * 60}ms` } as CSSProperties}
              >
                <div className="premium-card mx-auto w-20 h-20 min-[380px]:w-24 min-[380px]:h-24 sm:w-28 sm:h-28 rounded-full bg-slate-50 border border-slate-100 shadow-sm flex items-center justify-center overflow-hidden group-hover:border-blue-300 group-hover:shadow-lg transition-all">
                  <div className="premium-icon w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-blue-50 text-blue-650 flex items-center justify-center group-hover:bg-blue-650 group-hover:text-white transition-colors">
                    {getIcon(service.iconName, 'w-7 h-7')}
                  </div>
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900 mt-3 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[10px] text-slate-500 mt-1">
                  Premium HVAC care
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="premium-card relative min-h-[250px] sm:min-h-[280px] rounded-2xl overflow-hidden bg-slate-950 text-white shadow-lg" data-reveal>
              <img
                src={ASSET_PATHS.aboutTechnicians}
                alt="HVAC technicians inspecting a system"
                className="absolute inset-0 w-full h-full object-cover opacity-75"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/10" />
              <div className="relative z-10 p-5 sm:p-8 max-w-sm text-left">
                <span className="inline-flex bg-blue-600 text-white text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full">
                  Fast Inspection
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-4 leading-tight">
                  AC Maintenance Deals
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Deep coil cleaning, filter replacement, gas checkup, and thermostat calibration for peak Gulf summer performance.
                </p>
                <button
                  onClick={() => onOpenQuote('hvac-maintenance')}
                  className="premium-button mt-5 px-5 py-2.5 rounded-full bg-white text-slate-950 text-xs font-bold uppercase inline-flex items-center gap-2 hover:bg-blue-50"
                >
                  Book Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="premium-card relative min-h-[250px] sm:min-h-[280px] rounded-2xl overflow-hidden bg-blue-950 text-white shadow-lg" data-reveal style={{ '--reveal-delay': '120ms' } as CSSProperties}>
              <img
                src={ASSET_PATHS.clientPackageUnit}
                alt="Commercial chiller system"
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/75 to-blue-950/20" />
              <div className="relative z-10 p-5 sm:p-8 max-w-sm text-left">
                <span className="inline-flex bg-white text-blue-750 text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full">
                  Free Sizing
                </span>
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mt-4 leading-tight">
                  Save On Installation
                </h3>
                <p className="text-sm text-blue-100 mt-2 leading-relaxed">
                  Get engineered tonnage sizing and system recommendations for villas, offices, malls, warehouses, and hotels.
                </p>
                <button
                  onClick={() => onOpenQuote('ac-install')}
                  className="premium-button mt-5 px-5 py-2.5 rounded-full bg-white text-blue-850 text-xs font-bold uppercase inline-flex items-center gap-2 hover:bg-blue-50"
                >
                  Get Quote <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metal-grid py-16 sm:py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 relative" data-reveal>
              <div className="premium-card rounded-[2rem] overflow-hidden bg-white border border-slate-100 shadow-lg aspect-4/3">
                <img
                  src={ASSET_PATHS.aboutDuctwork}
                  alt="Precision ductwork fabrication"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="relative mt-4 sm:absolute sm:-bottom-6 sm:right-8 bg-white rounded-2xl border border-slate-100 shadow-xl p-4 sm:max-w-[220px]">
                <div className="flex items-center gap-3">
                  <div className="premium-icon w-12 h-12 rounded-full bg-blue-650 text-white flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-black text-slate-900 leading-none">1500+</p>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-1">
                      Completed Projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 text-left lg:pl-8 pt-6 lg:pt-0" data-reveal style={{ '--reveal-delay': '140ms' } as CSSProperties}>
              <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase">
                Why Our Service Works
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 mt-3 leading-tight">
                Your Journey To Perfect Cooling
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mt-4 max-w-2xl">
                From site inspection to airflow balancing, Gulf Breeze builds every AC and ducting solution around UAE heat, sand load, building usage, and long-term energy efficiency.
              </p>

              <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-3 sm:gap-4 mt-8 max-w-xl">
                {[
                  { value: '24/7', label: 'Emergency Support' },
                  { value: '2500+', label: 'Tons Sized' },
                  { value: '99%', label: 'SLA Response' },
                ].map((stat) => (
                  <div key={stat.label} className="premium-card bg-white rounded-2xl border border-slate-100 p-4 text-center shadow-sm">
                    <p className="text-xl sm:text-2xl font-black text-blue-650">{stat.value}</p>
                    <p className="text-[10px] text-slate-500 leading-tight mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 max-w-2xl">
                {[
                  'Load calculation before installation',
                  'GI and PI duct fabrication support',
                  'Original brand spares and materials',
                  'Performance testing after commissioning',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm font-semibold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-blue-650 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metal-grid py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8" data-reveal>
            <div className="text-left">
              <span className="text-[10px] font-mono font-bold tracking-widest text-blue-600 uppercase">
                Our Service Packages
              </span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 mt-2 leading-tight">
                Best Seller Services
              </h2>
            </div>
            <button
              onClick={() => onOpenQuote()}
              className="premium-button px-5 py-2.5 rounded-full bg-blue-650 hover:bg-blue-700 text-white text-xs font-bold uppercase inline-flex items-center gap-2 w-fit"
            >
              View Estimate <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicePackages.map((service, index) => (
              <article
                key={service.id}
                className="premium-card rounded-2xl bg-slate-50 border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                data-reveal
                style={{ '--reveal-delay': `${index * 60}ms` } as CSSProperties}
              >
                <div className="h-40 bg-slate-900 relative overflow-hidden">
                  <img
                    src={
                      index % 3 === 0
                        ? ASSET_PATHS.clientPackageUnit
                        : index % 3 === 1
                          ? ASSET_PATHS.aboutTechnicians
                          : ASSET_PATHS.aboutDuctwork
                    }
                    alt={service.title}
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  <div className="premium-icon absolute top-3 left-3 w-10 h-10 rounded-full bg-white text-blue-650 flex items-center justify-center shadow-sm">
                    {getIcon(service.iconName, 'w-5 h-5')}
                  </div>
                </div>
                <div className="p-5 text-left">
                  <div className="flex items-center gap-1 text-amber-500 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-[10px] text-slate-500 ml-1">4.9</span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 min-h-[48px]">
                    {service.description}
                  </p>
                  <button
                    onClick={() => onOpenQuote(service.id)}
                    className="premium-button mt-4 w-full py-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 hover:bg-blue-650 hover:text-white hover:border-blue-650 text-xs font-bold uppercase transition-colors"
                  >
                    Request Service
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
