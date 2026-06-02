import { ArrowRight, PhoneCall } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '../contact';

interface ContactCtaSectionProps {
  onOpenQuote: () => void;
}

export default function ContactCtaSection({ onOpenQuote }: ContactCtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#001b44] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,#35b8ff,transparent_28%),radial-gradient(circle_at_80%_80%,#d7b56d,transparent_28%)]" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal>
        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue-300">
          Fast Response Across UAE
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-4">
          Need AC Or Ducting Work?
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mt-4">
          Call Gulf Breeze AC & Ducting for installation, repair, duct fabrication, insulation, grille fixing and maintenance support.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
          <button
            onClick={onOpenQuote}
            className="premium-button px-6 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="premium-button px-6 py-3.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl text-xs font-black uppercase tracking-wider inline-flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" /> {CONTACT_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}
