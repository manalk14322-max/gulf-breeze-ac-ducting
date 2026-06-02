import { ClipboardCheck, Ruler, Wrench, ShieldCheck } from 'lucide-react';
import type { CSSProperties } from 'react';

const steps = [
  {
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: 'Site Inspection',
    text: 'We review your AC load, duct route, ceiling access and project requirement before quoting.',
  },
  {
    icon: <Ruler className="w-5 h-5" />,
    title: 'Sizing & Planning',
    text: 'Our team prepares practical ducting, copper pipe and airflow recommendations for UAE conditions.',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: 'Installation Work',
    text: 'GI/PI ducting, package units, AC repair, grille fixing and welding are handled with clean finishing.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: 'Testing & Support',
    text: 'We check airflow, cooling performance and finish with maintenance guidance and support.',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto" data-reveal>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 mt-3">
            From Inspection To Cooling Comfort
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mt-3">
            A clear workflow helps every AC and ducting project move faster, cleaner and with fewer site delays.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              className="premium-card bg-white rounded-2xl border border-slate-100 p-6 text-left shadow-sm relative overflow-hidden"
              data-reveal
              style={{ '--reveal-delay': `${idx * 80}ms` } as CSSProperties}
            >
              <span className="absolute right-5 top-5 text-5xl font-black text-slate-100">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <div className="premium-icon w-12 h-12 rounded-xl bg-blue-50 text-blue-650 flex items-center justify-center relative z-10">
                {step.icon}
              </div>
              <h3 className="text-sm font-black uppercase tracking-tight text-slate-900 mt-5 relative z-10">
                {step.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mt-2 relative z-10">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
