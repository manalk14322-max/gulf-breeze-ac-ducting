import type { CSSProperties } from 'react';
import { FAQS } from '../data';

export default function FaqSection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10" data-reveal>
          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-600">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-900 mt-3">
            AC & Ducting Questions
          </h2>
        </div>
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <details
              key={faq.question}
              className="premium-card group rounded-2xl border border-slate-100 bg-white p-5 text-left shadow-sm"
              data-reveal
              style={{ '--reveal-delay': `${idx * 70}ms` } as CSSProperties}
            >
              <summary className="cursor-pointer list-none text-sm font-black uppercase tracking-tight text-slate-900 flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-blue-650 text-xl group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-sm text-slate-600 leading-relaxed mt-4">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
