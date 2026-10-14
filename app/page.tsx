'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { siteConfig } from '@/src/siteConfig';
import { useBooking } from '@/components/AppLayoutClient';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import {
  Calendar,
  Phone,
  PhoneCall,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Star,
  Activity,
  HeartHandshake,
  Smile,
  Zap,
} from 'lucide-react';

export default function HomePage() {
  const { openBooking } = useBooking();

  // Get icons dynamically
  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#0E7C86]" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-[#0E7C86]" />;
      case 'Smile':
        return <Smile className="w-5 h-5 text-[#0E7C86]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#0E7C86]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#0E7C86]" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-[#0E7C86]" />;
    }
  };

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO SECTION: Friendly split layout */}
      <section className="relative pt-6 sm:pt-12 pb-8 overflow-hidden bg-gradient-to-b from-[#E8F6F5]/40 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Subtitle / Location kicker (Clean typography, no static pill) */}
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#0E7C86] uppercase">
                <span>The Promenade · Westlands, Nairobi</span>
                <span aria-hidden="true">·</span>
                <span>KMPDC Licensed</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold tracking-tight text-[#0B2A4A] leading-[1.15] text-balance">
                Gentle Dental Care & Expert Physiotherapy in Westlands
              </h1>

              {/* Value Proposition */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Experience pain-free dentistry and evidence-based musculoskeletal rehab in a calm, modern environment. From routine cleanings and clear aligners to spine decompression and sports recovery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => openBooking()}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base shadow-md hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
                  style={{ backgroundColor: siteConfig.colors.coralCTA }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0B2A4A] font-semibold text-sm sm:text-base border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#0E7C86]" />
                  <span>Call {siteConfig.contact.phoneDisplay}</span>
                </a>
              </div>

              {/* Patient Trust Markers */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0E7C86]" />
                  Direct Insurance Settlement
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0E7C86]" />
                  M-Pesa Accepted
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0E7C86]" />
                  Validated Basement Parking
                </span>
              </div>
            </div>

            {/* Right Photo Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/3 sm:aspect-16/11 lg:aspect-4/3 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100 bg-slate-100">
                <Image
                  src={siteConfig.images.hero}
                  alt={`${siteConfig.name} - Modern reception and dental suite`}
                  fill
                  className="object-cover"
                  priority
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2A4A]/50 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating caption card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-[#0B2A4A]">The Promenade Suite 402</p>
                    <p className="text-[11px] text-slate-500">General Mathenge Drive, Westlands</p>
                  </div>
                  <Link
                    href="/gallery"
                    className="text-xs font-semibold text-[#0E7C86] hover:underline flex items-center gap-1"
                  >
                    Tour Clinic <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Row Below Hero */}
          <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-xs flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#E8F6F5] text-[#0E7C86] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0B2A4A]">Mon – Sat Clinical Care</p>
                <p className="text-[11px] text-slate-500">8:00 AM – 6:00 PM</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-xs flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#E8F6F5] text-[#0E7C86] flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0B2A4A]">Westlands, Nairobi</p>
                <p className="text-[11px] text-slate-500">Free basement parking</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-xs flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#E8F6F5] text-[#0E7C86] flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#0B2A4A]">Direct Insurance</p>
                <p className="text-[11px] text-slate-500">Jubilee, AAR, Britam, CIC</p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-rose-50/60 border border-rose-100 shadow-xs flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <PhoneCall className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-rose-950">24/7 Dental Emergency</p>
                <a
                  href={`tel:${siteConfig.contact.emergencyPhoneRaw}`}
                  className="text-[11px] font-bold text-rose-700 hover:underline block"
                >
                  {siteConfig.contact.emergencyPhoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW (6 Icon Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider mb-2">
            Multidisciplinary Care
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight text-balance">
            Specialized Dental & Physiotherapy Services
          </h2>
          <p className="text-sm text-slate-600 mt-3">
            Evidence-based clinical treatments carried out by certified specialists using modern equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.slice(0, 6).map(service => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-[#0E7C86]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#E8F6F5] flex items-center justify-center group-hover:bg-[#0E7C86]/15 transition-colors">
                    {getServiceIcon(service.iconName)}
                  </div>
                  {'badge' in service && Boolean((service as { badge?: string }).badge) && (
                    <span className="text-[11px] font-semibold text-[#0E7C86] bg-[#E8F6F5] px-2.5 py-1 rounded-full">
                      {(service as { badge?: string }).badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-[#0B2A4A] mb-2 group-hover:text-[#0E7C86] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                <div className="text-xs text-slate-500 space-y-1 mb-6 border-t border-slate-100 pt-3">
                  <div className="flex justify-between">
                    <span>Session Duration:</span>
                    <span className="font-semibold text-slate-800">{service.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pricing:</span>
                    <span className="font-semibold text-[#0E7C86]">{service.priceDisplay}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/services"
                  className="text-xs font-semibold text-[#0B2A4A] hover:text-[#0E7C86] flex items-center gap-1 transition-colors"
                >
                  Learn details <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => openBooking(service.id)}
                  className="px-3.5 py-2 text-xs font-semibold text-white rounded-lg shadow-xs hover:brightness-105 transition-all"
                  style={{ backgroundColor: siteConfig.colors.coralCTA }}
                >
                  Book Slot
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2A4A] hover:bg-[#0E7C86] text-white text-sm font-semibold transition-colors shadow-xs"
          >
            <span>View All Dental & Physiotherapy Packages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* 3. MEET OUR DOCTORS PREVIEW */}
      <section className="bg-[#E8F6F5]/50 py-16 sm:py-20 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <p className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider mb-2">
                Clinical Expertise
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
                Led by Licensed Dental Surgeons & Physiotherapists
              </h2>
            </div>
            <Link
              href="/about"
              className="text-xs sm:text-sm font-semibold text-[#0E7C86] hover:text-[#0B2A4A] flex items-center gap-1.5 transition-colors shrink-0"
            >
              Meet full clinical team & credentials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.doctors.slice(0, 2).map(doctor => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-6 items-center sm:items-start"
              >
                <div className="relative w-32 h-32 sm:w-36 sm:h-40 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-sm">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2 text-center sm:text-left flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-lg font-bold text-[#0B2A4A]">{doctor.name}</h3>
                    <span className="text-[11px] font-semibold text-[#0E7C86] bg-[#E8F6F5] px-2 py-0.5 rounded">
                      {doctor.registrationNumber}
                    </span>
                  </div>
                  <p className="text-xs font-medium text-slate-700">{doctor.role}</p>
                  <p className="text-xs text-slate-500 italic">{doctor.qualifications}</p>
                  <p className="text-xs text-slate-600 line-clamp-2 pt-1">{doctor.bio}</p>

                  <div className="pt-2 flex flex-wrap gap-1.5 justify-center sm:justify-start">
                    {doctor.specialties.map((spec, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => openBooking(undefined, doctor.id)}
                      className="text-xs font-semibold text-[#0E7C86] hover:underline"
                    >
                      Book consultation with {doctor.name} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BEFORE / AFTER SMILE RESULTS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <p className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider mb-2">
            Real Clinical Transformations
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
            Before & After Smile Makeover
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            See the transformative difference achieved through professional in-chair whitening and precision alignment.
          </p>
        </div>

        <BeforeAfterSlider />
      </section>

      {/* 5. PATIENT TESTIMONIALS */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider mb-2">
              Patient Experiences
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
              Trusted by Nairobi Families, Executives & Athletes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.testimonials.map(item => (
              <div
                key={item.id}
                className="bg-[#E8F6F5]/40 rounded-2xl p-6 border border-slate-200/70 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-3">
                    {Array.from({ length: item.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs font-semibold text-[#0E7C86] uppercase tracking-wide mb-2">
                    {item.treatment}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 mt-4">
                  <p className="text-xs font-bold text-[#0B2A4A]">{item.author}</p>
                  <p className="text-[11px] text-slate-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. INSURANCE PARTNERS STRIP */}
      <section className="border-t border-slate-200 bg-slate-50/70 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-sm font-bold text-[#0B2A4A] uppercase tracking-wider">
              Accepted Health Insurance & Payment Schemes
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Direct settlement with all major Kenyan private medical insurers and M-Pesa.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-5xl mx-auto">
            {siteConfig.insurancePartners.map((ins, i) => (
              <div
                key={i}
                className="bg-white px-4 py-2 rounded-xl border border-slate-200 shadow-2xs text-xs font-bold text-[#0B2A4A] flex items-center gap-2 hover:border-[#0E7C86] transition-colors"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-[#0E7C86]" />
                <span>{ins.name}</span>
              </div>
            ))}
            <div className="bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-300 shadow-2xs text-xs font-bold text-emerald-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>M-Pesa Buy Goods & Paybill</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BOOKING CTA BAND */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="relative rounded-3xl bg-[#0B2A4A] text-white p-8 sm:p-12 overflow-hidden shadow-xl">
          {/* Subtle medical grid background accent */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#0E7C86_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider bg-white/10 px-3 py-1 rounded-md">
              Immediate Scheduling Available
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Take the first step toward a healthier smile and pain-free movement.
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              Book online in under 60 seconds with instant WhatsApp confirmation. We validate visitor parking at reception in Westlands.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => openBooking()}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base shadow-lg hover:brightness-105 active:scale-98 transition-all cursor-pointer"
                style={{ backgroundColor: siteConfig.colors.coralCTA }}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Now</span>
              </button>

              <a
                href={`tel:${siteConfig.contact.emergencyPhoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-rose-400" />
                <span>24/7 Dental Emergency: {siteConfig.contact.emergencyPhoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
