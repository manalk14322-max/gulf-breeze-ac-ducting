/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Languages } from 'lucide-react';

interface NavbarProps {
  onOpenQuote: () => void;
}

export default function Navbar({ onOpenQuote }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const cookieMatch = document.cookie.match(/(?:^|;\s*)googtrans=([^;]+)/);
    const value = cookieMatch ? decodeURIComponent(cookieMatch[1]) : '/en/en';
    const selected = value.split('/').filter(Boolean).pop() || 'en';
    setLanguage(selected);
    document.documentElement.dir = selected === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = selected === 'ar' ? 'ar' : selected === 'zh-CN' ? 'zh-CN' : 'en';
  }, []);

  const setTranslateCookie = (value: string) => {
    const expires = 'max-age=31536000';
    document.cookie = `googtrans=${value}; path=/; ${expires}; SameSite=Lax`;
    document.cookie = `googtrans=${value}; path=/; domain=.gulfbreezeacducting.com; ${expires}; SameSite=Lax`;
  };

  const handleLanguageChange = (nextLanguage: string) => {
    setLanguage(nextLanguage);
    document.documentElement.dir = nextLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = nextLanguage === 'ar' ? 'ar' : nextLanguage === 'zh-CN' ? 'zh-CN' : 'en';
    setTranslateCookie(`/en/${nextLanguage}`);
    window.location.reload();
  };

  const navLinks = [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/about' },
    { label: 'Services', href: '#/services' },
    { label: 'Projects', href: '#/projects' },
    { label: 'Why Us', href: '#/why-us' },
    { label: 'Contact Us', href: '#/contact' },
  ];

  const languageSelect = (
    <label className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-2.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 shadow-sm">
      <Languages className="w-4 h-4 text-blue-650" />
      <select
        value={language}
        onChange={(event) => handleLanguageChange(event.target.value)}
        className="bg-transparent text-xs font-bold uppercase tracking-wider text-slate-700 outline-none cursor-pointer"
        aria-label="Select language"
      >
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="zh-CN">Chinese</option>
      </select>
    </label>
  );

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-100 py-3' 
          : 'bg-white/90 backdrop-blur-xs py-5'
      }`}
      id="main-navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 min-w-0">
          
          {/* Logo Brand */}
          <a href="#/" className="flex items-center gap-2 sm:gap-3 group animate-fadeIn min-w-0" id="navbar-logo-brand">
            <div className="premium-logo relative flex items-center justify-center w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-slate-950 border border-blue-200 overflow-hidden shadow-sm shrink-0">
              <img
                src={`${import.meta.env.BASE_URL}gulf-breeze-logo-192.png`}
                alt="Gulf Breeze AC & Ducting logo"
                className="w-full h-full object-cover"
                width="44"
                height="44"
                decoding="async"
              />
            </div>
            <div className="min-w-0">
              <span className="block text-base sm:text-lg font-black tracking-tight text-slate-900 font-sans leading-none uppercase truncate">
                Gulf Breeze
              </span>
              <span className="block text-[9px] font-bold tracking-widest text-[#0066cc] font-mono leading-none mt-1">
                AC & DUCTING
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-8" id="desktop-nav-items">
            {navLinks.map((link, idx) => (
              <a 
                key={idx} 
                href={link.href}
                className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors uppercase tracking-wider relative group"
              >
                {link.label}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Action Trigger Button */}
          <div className="hidden lg:flex items-center gap-3">
            {languageSelect}
            <button 
              onClick={onOpenQuote}
              className="premium-button px-5 py-2.5 bg-blue-650 hover:bg-blue-700 text-white font-sans font-bold text-xs tracking-wide rounded-lg uppercase flex items-center gap-2 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
              id="nav-get-quote-btn"
            >
              Get a Quote <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              id="mobile-menu-toggle-btn"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer menu */}
      <button
        type="button"
        aria-label="Close menu backdrop"
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 top-[86px] z-40 bg-slate-950/35 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />
      <div 
        className={`lg:hidden fixed left-3 right-3 top-[86px] z-50 rounded-3xl bg-white shadow-2xl border border-slate-100 p-5 transition-all duration-300 ease-out ${
          isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-5 opacity-0 pointer-events-none'
        }`}
        id="mobile-drawer-menu"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <div className="premium-logo w-10 h-10 rounded-full bg-slate-950 border border-blue-200 overflow-hidden flex items-center justify-center">
              <img
                src={`${import.meta.env.BASE_URL}gulf-breeze-logo-192.png`}
                alt="Gulf Breeze AC & Ducting logo"
                className="w-full h-full object-cover"
                width="40"
                height="40"
                decoding="async"
              />
            </div>
            <span className="text-sm font-black text-slate-900 uppercase">Gulf Breeze</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-full text-slate-400 hover:text-slate-600"
            aria-label="Close navigation menu"
            id="close-mobile-drawer-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-5 grid grid-cols-1 gap-2">
          {navLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 hover:bg-blue-50 hover:text-blue-650 uppercase tracking-wider transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-4 border-t border-slate-100">
          <div className="mb-3">
            {languageSelect}
          </div>
          <button 
            onClick={() => {
              setIsOpen(false);
              onOpenQuote();
            }}
            className="premium-button w-full py-3 bg-blue-650 hover:bg-blue-700 text-white font-sans font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 "
          >
            Get a Quote <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
