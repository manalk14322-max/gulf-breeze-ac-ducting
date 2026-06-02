/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { ArrowRight, Clock, Mail, MapPin, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ServicesPage from './components/ServicesPage';
import WhyChooseUs from './components/WhyChooseUs';
import ProjectsSection from './components/ProjectsSection';
import BrandsSection from './components/BrandsSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from './contact';
import { ASSET_PATHS } from './data';

type Page = 'home' | 'about' | 'services' | 'projects' | 'why-us' | 'contact';

const getCurrentPage = (): Page => {
  const hash = window.location.hash.replace('#/', '').replace('#', '');

  if (hash === 'about' || hash === 'services' || hash === 'projects' || hash === 'why-us' || hash === 'contact') {
    return hash;
  }

  return 'home';
};

function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="metal-grid pt-28 pb-10 sm:pt-36 sm:pb-16 bg-slate-950 text-white relative overflow-hidden">
      <img
        src={ASSET_PATHS.contactPipesBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 to-blue-950/70" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left" data-reveal>
        <span className="text-[10px] font-mono font-bold tracking-widest text-blue-400 uppercase">
          {eyebrow}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-4 max-w-3xl leading-tight">
          {title}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-4 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}

function ContactPage({ onOpenQuote }: { onOpenQuote: () => void }) {
  const contactItems = [
    { icon: <MapPin className="w-5 h-5" />, label: 'Office Location', value: 'Dubai, United Arab Emirates' },
    { icon: <Phone className="w-5 h-5" />, label: 'Phone Support', value: CONTACT_PHONE_DISPLAY },
    { icon: <Mail className="w-5 h-5" />, label: 'Email Address', value: CONTACT_EMAIL },
    { icon: <Clock className="w-5 h-5" />, label: 'Working Hours', value: 'Mon - Sat: 8:00 AM - 6:00 PM' },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact Gulf Breeze"
        title="Talk to a cooling engineer"
        description="Share your AC, ducting, ventilation, or chiller requirement and our team will prepare the right recommendation for your project."
      />

      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="premium-card lg:col-span-7 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden" data-reveal>
              <div className="aspect-16/9 bg-slate-900 relative overflow-hidden">
                <img
                  src={ASSET_PATHS.contactPipesBg}
                  alt="Industrial HVAC pipework"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-300 font-bold">
                    Fast Project Response
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black uppercase mt-2">
                    Request an HVAC estimate
                  </h2>
                </div>
              </div>
              <div className="p-6 sm:p-8 text-left">
                <p className="text-sm text-slate-600 leading-relaxed max-w-2xl">
                  For new installations, AMC contracts, duct fabrication, ventilation layouts, and chiller maintenance, send your project details and we will size the solution around your building load.
                </p>
                <button
                  onClick={onOpenQuote}
                  className="premium-button mt-6 px-6 py-3 bg-blue-650 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl inline-flex items-center gap-2 shadow-md"
                >
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactItems.map((item) => (
                <div key={item.label} className="premium-card bg-white rounded-2xl border border-slate-100 p-6 text-left shadow-sm" data-reveal>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-650 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-slate-900 mt-1">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('ac-install');
  const [currentPage, setCurrentPage] = useState<Page>(getCurrentPage);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getCurrentPage());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' },
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [currentPage]);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const handleOpenQuote = (serviceType?: string) => {
    if (serviceType) {
      setSelectedService(serviceType);
    } else {
      setSelectedService('ac-install');
    }
    setIsQuoteOpen(true);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return (
          <>
            <PageHeader
              eyebrow="About Gulf Breeze"
              title="Engineering reliable comfort across the Gulf"
              description="Learn how our HVAC team combines field expertise, certified technicians, and precision duct fabrication for UAE buildings."
            />
            <AboutSection />
            <BrandsSection />
          </>
        );
      case 'services':
        return (
          <>
            <PageHeader
              eyebrow="HVAC Services"
              title="Complete AC and ducting solutions"
              description="Explore our installation, maintenance, fabrication, chiller, ventilation, air quality, and AMC service capabilities."
            />
            <ServicesPage onOpenQuote={(serviceId) => handleOpenQuote(serviceId)} />
          </>
        );
      case 'projects':
        return (
          <>
            <PageHeader
              eyebrow="Project Portfolio"
              title="Commercial, residential, and industrial HVAC work"
              description="Browse selected projects with cooling capacity, ducting, ventilation, and system design highlights."
            />
            <ProjectsSection />
          </>
        );
      case 'why-us':
        return (
          <>
            <PageHeader
              eyebrow="Why Choose Us"
              title="Built around quality, speed, and standards"
              description="See the reasons Gulf Breeze is positioned for high-performance HVAC delivery in demanding Gulf conditions."
            />
            <WhyChooseUs onOpenQuote={() => handleOpenQuote()} />
          </>
        );
      case 'contact':
        return <ContactPage onOpenQuote={() => handleOpenQuote()} />;
      default:
        return (
          <>
            <Hero onOpenQuote={() => handleOpenQuote()} />
            <BrandsSection />
            <AboutSection />
            <ServicesSection onOpenQuote={(serviceId) => handleOpenQuote(serviceId)} />
            <WhyChooseUs onOpenQuote={() => handleOpenQuote()} />
            <ProjectsSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-600/10 selection:text-blue-900" id="gulf-breeze-app-root">
      <div className="cursor-glow" aria-hidden="true" />
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer />

      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        defaultService={selectedService} 
      />
    </div>
  );
}
