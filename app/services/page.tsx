'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/siteConfig';
import { useBooking } from '@/components/AppLayoutClient';
import { FAQAccordion } from '@/components/FAQAccordion';
import {
  Calendar,
  Clock,
  CheckCircle2,
  Sparkles,
  Activity,
  HeartHandshake,
  ShieldCheck,
  Smile,
  Zap,
  ArrowRight,
  Info,
  Car,
  FileText,
  CreditCard,
} from 'lucide-react';

export default function ServicesPage() {
  const { openBooking } = useBooking();
  const [activeTab, setActiveTab] = useState<'all' | 'dental' | 'physio'>('all');

  const dentalServices = siteConfig.services.filter(s => s.category === 'dental');
  const physioServices = siteConfig.services.filter(s => s.category === 'physio');

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-[#0E7C86] uppercase">
            <span>Specialized Clinical Treatments</span>
            <span aria-hidden="true">·</span>
            <span>Transparent KES Pricing</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0B2A4A] text-balance">
            Dental Care & Physiotherapy Services
          </h1>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore our comprehensive range of gentle dental treatments and sports physiotherapy rehab. All procedures follow international safety protocols with upfront, transparent pricing.
          </p>

          {/* Interactive filter tabs */}
          <div className="inline-flex items-center gap-1 p-1.5 bg-[#E8F6F5] rounded-xl pt-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-white text-[#0B2A4A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Treatments ({siteConfig.services.length})
            </button>
            <button
              onClick={() => setActiveTab('dental')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'dental'
                  ? 'bg-white text-[#0B2A4A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Dental Care ({dentalServices.length})
            </button>
            <button
              onClick={() => setActiveTab('physio')}
              className={`px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                activeTab === 'physio'
                  ? 'bg-white text-[#0B2A4A] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Physiotherapy & Rehab ({physioServices.length})
            </button>
          </div>
        </div>
      </section>

      {/* 2. DENTAL SERVICES SECTION */}
      {(activeTab === 'all' || activeTab === 'dental') && (
        <section id="dental" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block">
                Department of Dentistry
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
                Gentle, Modern Dental Care
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              From preventative routine prophylaxis to cosmetic veneers and pain-free endodontics under local anaesthesia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dentalServices.map(service => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-[#0E7C86]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#0E7C86] bg-[#E8F6F5] px-2.5 py-1 rounded-md">
                      {service.duration}
                    </span>
                    <span className="text-sm font-bold text-[#0B2A4A]">
                      {service.priceDisplay}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2A4A] mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* What to expect list */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
                    <p className="text-xs font-bold text-[#0B2A4A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#0E7C86]" />
                      What to Expect:
                    </p>
                    <ul className="space-y-1.5">
                      {service.whatToExpect.map((step, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7C86] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Insurance & M-Pesa eligible
                  </span>
                  <button
                    onClick={() => openBooking(service.id)}
                    className="px-4 py-2 text-xs font-semibold text-white rounded-xl shadow-xs hover:brightness-105 active:scale-95 transition-all"
                    style={{ backgroundColor: siteConfig.colors.coralCTA }}
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. PHYSIOTHERAPY & REHAB SECTION */}
      {(activeTab === 'all' || activeTab === 'physio') && (
        <section id="physio" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-200 pb-4 mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block">
                Department of Physiotherapy & Sports Medicine
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
                Musculoskeletal & Sports Rehabilitation
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              Evidence-based spine decompression, dry needling, joint mobilization, and athletic recovery protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {physioServices.map(service => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:border-[#0E7C86]/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#0E7C86] bg-[#E8F6F5] px-2.5 py-1 rounded-md">
                      {service.duration}
                    </span>
                    <span className="text-sm font-bold text-[#0B2A4A]">
                      {service.priceDisplay}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0B2A4A] mb-2">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* What to expect list */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-6">
                    <p className="text-xs font-bold text-[#0B2A4A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-[#0E7C86]" />
                      What to Expect:
                    </p>
                    <ul className="space-y-1.5">
                      {service.whatToExpect.map((step, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7C86] shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">
                    Direct billing available
                  </span>
                  <button
                    onClick={() => openBooking(service.id)}
                    className="px-4 py-2 text-xs font-semibold text-white rounded-xl shadow-xs hover:brightness-105 active:scale-95 transition-all"
                    style={{ backgroundColor: siteConfig.colors.coralCTA }}
                  >
                    Book This Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. FIRST VISIT GUIDE */}
      <section className="bg-[#E8F6F5]/50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block mb-1">
              Patient Care Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
              Your First Visit: What to Expect
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              We make your clinical experience seamless, transparent, and completely free from stress.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-[#0E7C86] text-white flex items-center justify-center font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-[#0B2A4A] mb-2 flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0E7C86]" />
                Easy Booking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reserve your slot online or via WhatsApp. Our front desk responds within 15 minutes to confirm timing and any insurance pre-requisites.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-[#0E7C86] text-white flex items-center justify-center font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-[#0B2A4A] mb-2 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-[#0E7C86]" />
                Arrival & Parking
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Drive to The Promenade on General Mathenge Drive. Park securely in the basement. Present your parking token at our 4th floor reception for free validation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-[#0E7C86] text-white flex items-center justify-center font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-[#0B2A4A] mb-2 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-[#0E7C86]" />
                In-Depth Assessment
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Meet your dedicated clinician. We perform low-radiation digital scans or musculoskeletal mobility checks while explaining everything clearly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative">
              <div className="w-10 h-10 rounded-xl bg-[#0E7C86] text-white flex items-center justify-center font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-[#0B2A4A] mb-2 flex items-center gap-1.5">
                <CreditCard className="w-4 h-4 text-[#0E7C86]" />
                Clear Plan & Billing
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Receive an itemized treatment roadmap. We process your direct insurance claim or accept M-Pesa / cards with zero surprise charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQ ACCORDION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block mb-1">
            Questions Answered
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Clear, transparent answers about procedures, insurance billing, and pediatric visits.
          </p>
        </div>

        <FAQAccordion initialCategory="dental" />
      </section>

      {/* 6. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-[#0B2A4A] text-white p-8 sm:p-10 text-center space-y-4">
          <h2 className="text-xl sm:text-3xl font-bold tracking-tight">
            Need advice on which service is best for your condition?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with our clinical receptionist or send a WhatsApp message describing your symptoms.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openBooking()}
              className="px-6 py-3 rounded-xl text-white font-semibold text-xs sm:text-sm shadow-md"
              style={{ backgroundColor: siteConfig.colors.coralCTA }}
            >
              Book an Appointment
            </button>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
                "Hello Lumina Clinic, I need advice choosing between dental or physiotherapy consultation."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
