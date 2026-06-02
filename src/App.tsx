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
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_WHATSAPP } from './contact';
import { ASSET_PATHS } from './data';
import { localBusinessSchema, SEO_BY_PAGE, SITE_NAME, SITE_URL } from './seo';

type Page = 'home' | 'about' | 'services' | 'projects' | 'why-us' | 'contact';

const getCurrentPage = (): Page => {
  const hash = window.location.hash.replace('#/', '').replace('#', '');

  if (hash === 'about' || hash === 'services' || hash === 'projects' || hash === 'why-us' || hash === 'contact') {
    return hash;
  }

  return 'home';
};

const upsertMeta = (name: string, content: string, attribute: 'name' | 'property' = 'name') => {
  let meta = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const upsertLink = (rel: string, href: string) => {
  let link = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement('link');
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
};

const upsertJsonLd = (id: string, data: unknown) => {
  let script = document.querySelector<HTMLScriptElement>(`script[data-schema-id="${id}"]`);
  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.dataset.schemaId = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
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

function WhatsAppFloat() {
  const message = 'Hello Gulf Breeze AC & Ducting, I need AC or ducting service details.';
  const href = `https://wa.me/${CONTACT_PHONE_WHATSAPP}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${CONTACT_PHONE_DISPLAY}`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-emerald-900/30 ring-4 ring-white/90 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 sm:h-8 sm:w-8" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.26c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.62.14-.18.27-.71.89-.87 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.62-1.49-.85-2.04-.22-.53-.45-.46-.62-.47h-.53c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29 0 1.35.98 2.65 1.12 2.84.14.18 1.93 2.95 4.68 4.13.65.28 1.16.45 1.56.58.66.21 1.25.18 1.72.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.19.16-1.3-.07-.12-.25-.18-.52-.32Z" />
        <path d="M16.02 3C8.86 3 3.04 8.81 3.04 15.96c0 2.29.6 4.53 1.75 6.5L3 29l6.7-1.76a12.92 12.92 0 0 0 6.32 1.61h.01c7.15 0 12.97-5.81 12.97-12.96C29 8.81 23.18 3 16.02 3Zm0 22.66h-.01c-1.94 0-3.85-.52-5.52-1.5l-.4-.24-3.97 1.04 1.06-3.86-.26-.4a9.68 9.68 0 0 1-1.49-5.14c0-5.35 4.36-9.7 9.72-9.7 2.59 0 5.03 1.01 6.86 2.84a9.61 9.61 0 0 1 2.85 6.86c0 5.35-4.36 9.7-9.72 9.7Z" />
      </svg>
      <span className="sr-only">WhatsApp</span>
    </a>
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
    const seo = SEO_BY_PAGE[currentPage];
    const canonical = SITE_URL;

    document.title = seo.title;
    upsertMeta('description', seo.description);
    upsertMeta('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    upsertMeta('og:title', seo.title, 'property');
    upsertMeta('og:description', seo.description, 'property');
    upsertMeta('og:type', 'website', 'property');
    upsertMeta('og:url', canonical, 'property');
    upsertMeta('og:site_name', SITE_NAME, 'property');
    upsertMeta('og:image', `${SITE_URL}/gulf-breeze-logo.png`, 'property');
    upsertMeta('twitter:card', 'summary_large_image');
    upsertMeta('twitter:title', seo.title);
    upsertMeta('twitter:description', seo.description);
    upsertLink('canonical', canonical);
    upsertJsonLd('local-business', localBusinessSchema);
    upsertJsonLd('website', {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/#/services?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });
  }, [currentPage]);

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
      <WhatsAppFloat />

      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
        defaultService={selectedService} 
      />
    </div>
  );
}
