/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL } from '../contact';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/about' },
    { label: 'Services', href: '#/services' },
    { label: 'Projects', href: '#/projects' },
    { label: 'Why Choose Us', href: '#/why-us' },
    { label: 'Contact Us', href: '#/contact' },
  ];

  const servicesLinks = [
    { label: 'AC Installation', href: '#/services' },
    { label: 'HVAC Maintenance', href: '#/services' },
    { label: 'Duct Fabrication', href: '#/services' },
    { label: 'Chiller Services', href: '#/services' },
    { label: 'Ventilation Systems', href: '#/services' },
    { label: 'AMC Contracts', href: '#/services' },
  ];

  return (
    <footer id="contact" className="bg-[#000d22] text-slate-400 border-t border-slate-900 font-sans">
      
      {/* Top Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 text-left">
          
          {/* Column 1: Brand & Socials (Col size: 3) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center gap-2 min-w-0">
              <div className="premium-logo w-12 h-12 rounded-full bg-slate-950 border border-blue-800 overflow-hidden flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}gulf-breeze-logo.png`}
                  alt="Gulf Breeze AC & Ducting logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-md font-black text-white uppercase tracking-tight leading-tight">
                Gulf Breeze AC & Ducting
              </span>
            </div>
            <p className="text-slate-500 text-xs leading-relaxed">
              Delivering AC installation, AC repair, GI and PI ducting, copper pipe welding, duct insulation and annual HVAC maintenance services across Dubai, Sharjah, Umm Al Quwain and the UAE.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white transition-all rounded-full border border-slate-800 text-slate-500">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white transition-all rounded-full border border-slate-800 text-slate-500">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white transition-all rounded-full border border-slate-800 text-slate-500">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-900 hover:bg-blue-600 hover:text-white transition-all rounded-full border border-slate-800 text-slate-500">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (Col size: 2) */}
          <div className="lg:col-span-3 space-y-5 min-w-0">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="text-xs hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Services References (Col size: 2) */}
          <div className="lg:col-span-2 space-y-5" id="footer-services-col">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Our Services</h4>
            <div className="flex flex-col gap-3">
              {servicesLinks.map((link, idx) => (
                <a 
                  key={idx} 
                  href={link.href} 
                  className="text-xs hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 4: Address Details (Col size: 2) */}
          <div className="lg:col-span-2 space-y-5">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Contact Us</h4>
            <div className="flex flex-col gap-4 text-xs">
              <div className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Dubai, United Arab Emirates</span>
              </div>
              <div className="flex gap-2.5 items-start">
                <Phone className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_PHONE_TEL}`} className="hover:underline">{CONTACT_PHONE_DISPLAY}</a>
              </div>
              <div className="flex gap-2.5 items-start">
                <Mail className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:underline break-all min-w-0">{CONTACT_EMAIL}</a>
              </div>
              <div className="flex gap-2.5 items-start">
                <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 5: Map Mockup (Col size: 3) */}
          <div className="lg:col-span-2 space-y-4 md:col-span-2">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider">Our Location</h4>
            
            {/* Interactive Vector Local Map Simulator */}
            <div className="rounded-xl border border-slate-800 bg-slate-900 overflow-hidden relative aspect-16/10" id="google-map-simulator">
              {/* Roads drawing lines inside map */}
              <div className="absolute inset-0 opacity-15 pointer-events-none select-none">
                <div className="absolute top-1/4 left-0 right-0 h-1 bg-white" />
                <div className="absolute top-2/3 left-0 right-0 h-1 bg-white" />
                <div className="absolute left-1/3 top-0 bottom-0 w-1 bg-white -rotate-12" />
                <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-white-rotate-45" />
              </div>
              
              {/* Blue Gulf Water simulation */}
              <div className="absolute top-0 right-0 w-16 h-12 bg-blue-900/30 rounded-bl-3xl border-b border-l border-blue-800" />
              
              {/* Location Marker Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-rose-500 hover:scale-110 transition-transform animate-bounce">
                <MapPin className="w-5 h-5 fill-rose-500 text-rose-500" />
              </div>

              {/* Map coordinate labels */}
              <div className="absolute bottom-2 left-2 bg-slate-950/85 text-[8px] font-mono tracking-widest text-[#0066cc]/90 border border-slate-800 px-1.5 py-0.5 rounded-sm">
                LAT: 25.2048° N | LNG: 55.2708° E
              </div>

              {/* View google maps simulation triggers */}
              <div className="absolute inset-0 bg-slate-950/40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                <span className="bg-blue-650 text-white font-sans font-bold text-[9px] uppercase px-3 py-1.5 rounded-lg border border-blue-500 shadow-sm">
                  View on Google Maps
                </span>
              </div>
            </div>
            
          </div>

        </div>
      </div>

      {/* Under Footer Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#000a1a] py-6 text-slate-600 text-xs" id="footer-copyright-bar">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-[11px] font-sans">
            © {new Date().getFullYear()} Gulf Breeze AC & Ducting. All Rights Reserved.
          </p>
          <div className="flex gap-6 uppercase tracking-wider text-[10px] font-semibold text-slate-500">
            <a href="#" className="hover:text-blue-500">Privacy Policy</a>
            <a href="#" className="hover:text-blue-500">Terms & Conditions</a>
          </div>
        </div>
      </div>

    </footer>
  );
}
