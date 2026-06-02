/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { X, Send, Calculator, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_WHATSAPP } from '../contact';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuoteModal({ isOpen, onClose, defaultService = 'ac-install' }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: defaultService,
    areaSqFt: '1200',
    propertyType: 'residential', // residential, commercial, industrial
    additionalDetails: ''
  });

  const [isCalculated, setIsCalculated] = useState(false);
  const [calculation, setCalculation] = useState({
    requiredTonnage: 0,
    estimatedPriceRange: '',
    systemTypeSuggestion: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((current) => ({ ...current, serviceType: defaultService }));
    }
  }, [defaultService, isOpen]);

  if (!isOpen) return null;

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const sqFt = parseFloat(formData.areaSqFt) || 0;
    
    // Quick rule of thumb for desert gulf cooling:
    // ~1 Ton per 400 Sq Ft for residential, ~1 Ton per 300 Sq Ft for commercial/high solar gain
    const multiplier = formData.propertyType === 'residential' ? 400 : 300;
    const tonnage = Math.round((sqFt / multiplier) * 10) / 10;
    
    // Ballpark estimations for Gulf Breeze premium HVAC system (Daikin/Carrier VRF or Split installations + GI Ducts)
    let minPrice, maxPrice, suggestion;
    if (formData.propertyType === 'residential') {
      minPrice = Math.round(tonnage * 2800);
      maxPrice = Math.round(tonnage * 3600);
      suggestion = tonnage <= 3 ? 'Premium Inverter Multi-Split Systems' : 'Central VRF (Variable Refrigerant Flow) System';
    } else {
      minPrice = Math.round(tonnage * 3400);
      maxPrice = Math.round(tonnage * 4400);
      suggestion = tonnage <= 15 ? 'Ducted Packaged Units with GI ductwork' : 'Air-Cooled Chiller Plant with AHUs';
    }

    setCalculation({
      requiredTonnage: tonnage,
      estimatedPriceRange: `AED ${minPrice.toLocaleString()} - AED ${maxPrice.toLocaleString()}`,
      systemTypeSuggestion: suggestion
    });
    setIsCalculated(true);
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const message = [
      'New Gulf Breeze AC & Ducting Quote Request',
      `Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Service: ${formData.serviceType}`,
      `Property: ${formData.propertyType}`,
      `Area: ${formData.areaSqFt} sq ft`,
      isCalculated ? `Recommended Capacity: ${calculation.requiredTonnage} TR` : '',
      isCalculated ? `Estimated Price: ${calculation.estimatedPriceRange}` : '',
      `Details: ${formData.additionalDetails || 'N/A'}`,
    ].filter(Boolean).join('\n');

    setIsSubmitted(true);
    window.open(`https://wa.me/${CONTACT_PHONE_WHATSAPP}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn" id="quote-modal-overlay">
      <div className="relative w-full sm:max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[92vh] sm:max-h-[90vh] flex flex-col" id="quote-modal-box">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 p-4 sm:p-6 border-b border-slate-100 bg-slate-50">
          <div className="min-w-0">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-sans leading-tight">Calculate Cooling Estimate</h3>
            <p className="text-xs text-slate-500 font-mono mt-1">GULF BREEZE AC & DUCTING • EXPERT sizing SYSTEM</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-250 transition-colors"
            id="close-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Wrapper */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1">
          {isSubmitted ? (
            <div className="text-center py-10 px-4 animate-scaleUp">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-650 mb-4 border border-emerald-100">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900 font-sans">Engineering Request Received!</h4>
              <p className="text-slate-600 mt-2 max-w-md mx-auto text-sm">
                Our certified HVAC engineers are reviewing your specifications. An advisor will contact you on {CONTACT_PHONE_DISPLAY} within 15 minutes with a formal quotation and load layout.
              </p>
              
              {isCalculated && (
                <div className="mt-6 p-5 bg-slate-50 rounded-xl border border-slate-100 max-w-md mx-auto text-left">
                  <span className="text-[10px] font-mono uppercase bg-blue-50 text-blue-800 px-2.5 py-1 rounded-sm font-semibold">Tonnage Specs Summary</span>
                  <div className="grid grid-cols-1 min-[420px]:grid-cols-2 gap-4 mt-3 text-sm">
                    <div>
                      <p className="text-slate-400 text-xs">Recommended Capacity</p>
                      <p className="text-slate-900 font-bold font-mono">{calculation.requiredTonnage} TR (Tons)</p>
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs">Estimated Price (AED)</p>
                      <p className="text-slate-900 font-bold font-mono">{calculation.estimatedPriceRange}</p>
                    </div>
                    <div className="min-[420px]:col-span-2 border-t border-slate-100 pt-2.5">
                      <p className="text-slate-400 text-xs">Engineering Solution Sized</p>
                      <p className="text-slate-800 font-semibold text-xs mt-0.5">{calculation.systemTypeSuggestion}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button 
                  onClick={() => window.print()}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <FileText className="w-4 h-4" /> Print Estimate
                </button>
                <button 
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-xs"
                >
                  Finish
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* HVAC Tonnage Calculator Box */}
              {!isCalculated ? (
                <form onSubmit={handleCalculate} className="bg-blue-50/60 rounded-xl p-5 border border-blue-100">
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <div className="p-2 rounded-lg bg-blue-650 text-white mt-1 shrink-0">
                      <Calculator className="w-5 h-5" />
                    </div>
                    <div className="flex-1 w-full min-w-0">
                      <h4 className="text-sm font-bold text-blue-900 font-sans">Dynamic Gulf Size Calculator</h4>
                      <p className="text-xs text-blue-750 mt-0.5">Determine the right cooling load and estimated price range according to UAE weather strain.</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                        <div>
                          <label className="block text-[11px] font-sans font-semibold text-blue-800 mb-1">Property Layout</label>
                          <select 
                            value={formData.propertyType}
                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                            className="w-full bg-white border border-blue-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="residential">Residential Villa / Apt</option>
                            <option value="commercial">Commercial Office / Retail</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-[11px] font-sans font-semibold text-blue-800 mb-1">Total Floor Area (Sq Ft)</label>
                          <input 
                            type="number"
                            value={formData.areaSqFt}
                            onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                            className="w-full bg-white border border-blue-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500 font-mono"
                            placeholder="e.g. 1500"
                            required
                          />
                        </div>
                        <div className="flex items-end">
                          <button 
                            type="submit"
                            className="w-full bg-blue-650 text-white font-sans font-semibold text-xs py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                          >
                            Calculate CFM Load <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 relative overflow-hidden animate-scaleUp">
                  <div className="flex flex-col sm:flex-row items-start gap-3">
                    <div className="p-2 rounded-lg bg-emerald-600 text-white mt-1 shrink-0">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div className="flex-1 w-full min-w-0">
                      <div className="flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-2">
                        <h4 className="text-sm font-bold text-emerald-950 font-sans">Your Gulf Sizing Report</h4>
                        <button 
                          onClick={() => setIsCalculated(false)}
                          className="text-xs text-emerald-700 hover:underline font-semibold"
                        >
                          Recalculate
                        </button>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 border-t border-emerald-150 pt-3">
                        <div>
                          <p className="text-[10px] uppercase font-mono tracking-wider text-emerald-800 font-semibold">Tonnage Rating</p>
                          <p className="text-xl font-bold font-mono text-slate-900 mt-0.5">{calculation.requiredTonnage} TR</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-mono tracking-wider text-emerald-800 font-semibold">Estimated Pricing</p>
                          <p className="text-md font-bold font-mono text-emerald-900 mt-1">{calculation.estimatedPriceRange}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase font-mono tracking-wider text-emerald-800 font-semibold">Recommended Layout</p>
                          <p className="text-[11px] font-semibold text-slate-700 mt-1 leading-tight">{calculation.systemTypeSuggestion}</p>
                        </div>
                      </div>
                      <p className="text-[10px] text-emerald-700 mt-3 italic">Calculations assume peak summer solar load in the GCC region with standard insulated glass walls.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Complete Proposal Contact Form */}
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <h4 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2 flex flex-col min-[420px]:flex-row min-[420px]:items-center justify-between gap-2">
                  <span>Enter Contact Details for Official Quotation PDF</span>
                  <span className="text-[10px] bg-slate-100 font-mono text-slate-500 font-normal px-2 py-0.5 rounded-sm">Step 2 of 2</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name / Company Representative</label>
                    <input 
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. Salim Al Hashimi"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Active Email Address</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                      placeholder="e.g. salim@gulfbreeze.ae"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile Contact Phone (UAE format)</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500 font-mono"
                      placeholder={`e.g. ${CONTACT_PHONE_DISPLAY}`}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Target HVAC Service Type</label>
                    <select 
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                    >
                      <option value="ac-install">AC Sizing & Installation</option>
                      <option value="hvac-maintenance">HVAC Deep Maintenance</option>
                      <option value="duct-fab">In-house Duct Fabrication</option>
                      <option value="chiller-services">Chiller Compressor Services</option>
                      <option value="ventilation">Positive Air Ventilation Layout</option>
                      <option value="amc-contracts">Annual AMC Contract setup</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Specify Location details / Special requests</label>
                  <textarea 
                    rows={3}
                    value={formData.additionalDetails}
                    onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-800 focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                    placeholder="e.g. Multi-story residential villa in Al Barsha 1, requiring high efficiency VRF systems Daikin."
                  ></textarea>
                </div>

                <div className="flex flex-col-reverse min-[420px]:flex-row min-[420px]:justify-end gap-3 pt-2">
                  <button 
                    type="button" 
                    onClick={onClose}
                    className="px-4 py-2.5 text-xs text-slate-500 hover:text-slate-700 font-semibold"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    className="px-6 py-2.5 text-xs font-semibold text-white bg-blue-650 hover:bg-blue-700 rounded-lg transition-colors shadow-md shadow-blue-500/10 flex items-center justify-center gap-1.5"
                    id="submit-estimate-btn"
                  >
                    <Send className="w-3.5 h-3.5" /> Send Engineering Package
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
