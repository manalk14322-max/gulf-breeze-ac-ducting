import { Clock, ShieldCheck, Star, Trophy } from 'lucide-react';
import type { CSSProperties } from 'react';
import { ASSET_PATHS } from '../data';

const proofStats = [
  { icon: <Trophy className="w-5 h-5" />, value: '10+', label: 'Years Experience' },
  { icon: <ShieldCheck className="w-5 h-5" />, value: '500+', label: 'Site Jobs Supported' },
  { icon: <Clock className="w-5 h-5" />, value: '24/7', label: 'Emergency Response' },
  { icon: <Star className="w-5 h-5" />, value: '100%', label: 'Quality Focus' },
];

export default function TrustProofSection() {
  return (
    <section className="bg-[#001b44] text-white py-12 sm:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_16%_20%,#35b8ff,transparent_25%),radial-gradient(circle_at_86%_70%,#d7b56d,transparent_22%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 items-center">
          <div className="text-left" data-reveal>
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-300">
              UAE HVAC Trust Signals
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-3">
              Premium AC & Ducting Experts
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed mt-3 max-w-xl">
              Real project media, practical site execution, fast contact options and clear service coverage help customers trust Gulf Breeze before they call.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {proofStats.map((stat, idx) => (
              <div
                key={stat.label}
                className="premium-card rounded-2xl border border-white/10 bg-white/7 p-4 sm:p-5 text-left backdrop-blur-sm"
                data-reveal
                style={{ '--reveal-delay': `${idx * 70}ms` } as CSSProperties}
              >
                <div className="premium-icon w-11 h-11 rounded-xl bg-blue-500/15 text-blue-200 flex items-center justify-center">
                  {stat.icon}
                </div>
                <strong className="block text-2xl sm:text-3xl font-black mt-4">
                  {stat.value}
                </strong>
                <span className="block text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-300 mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4" data-reveal>
          {[ASSET_PATHS.clientPackageUnit, ASSET_PATHS.clientCeilingDucting, ASSET_PATHS.clientIndustrialNetwork].map((image, idx) => (
            <div key={image} className="premium-card relative h-48 overflow-hidden rounded-2xl border border-white/10 bg-slate-900">
              <img src={image} alt={`Gulf Breeze real HVAC project ${idx + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <span className="absolute left-4 bottom-4 text-[10px] font-black uppercase tracking-widest text-white">
                Real Project Proof
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
