import { Star, Quote } from 'lucide-react';
import type { CSSProperties } from 'react';

const reviews = [
  {
    name: 'Restaurant Project',
    location: 'Bluewaters Dubai',
    text: 'Professional AC and ducting work with clean installation and responsive project coordination.',
  },
  {
    name: 'Industrial Facility',
    location: 'Sharjah Sajaa',
    text: 'Package unit and ducting installation was completed with proper access planning and site safety.',
  },
  {
    name: 'Farmhouse Cooling',
    location: 'Umm Al Quwain',
    text: 'Reliable AC fixing, ducting support and maintenance guidance for long-term comfort.',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10" data-reveal>
          <div className="text-left max-w-2xl">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
              Client Confidence
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 mt-3">
              Built On Real Site Work
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed mt-3">
              Practical AC and ducting support for restaurants, warehouses, industrial areas and private properties.
            </p>
          </div>
          <div className="flex gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} className="w-5 h-5 fill-current" />
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex gap-5 md:grid md:grid-cols-3 animate-[marquee_24s_linear_infinite] md:animate-none w-max md:w-auto">
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={`${review.name}-${idx}`}
              className={`premium-card w-[300px] md:w-auto rounded-2xl border border-slate-100 bg-slate-50 p-6 text-left shadow-sm ${
                idx >= reviews.length ? 'md:hidden' : ''
              }`}
              data-reveal
              style={{ '--reveal-delay': `${idx * 80}ms` } as CSSProperties}
            >
              <Quote className="w-8 h-8 text-blue-600 mb-5" />
              <p className="text-sm text-slate-700 leading-relaxed">
                {review.text}
              </p>
              <div className="mt-5 border-t border-slate-200 pt-4">
                <h3 className="text-sm font-black uppercase tracking-tight text-slate-900">
                  {review.name}
                </h3>
                <p className="text-xs text-blue-650 font-bold mt-1">
                  {review.location}
                </p>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
