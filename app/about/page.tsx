'use client';

import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/src/siteConfig';
import { useBooking } from '@/components/AppLayoutClient';
import {
  ShieldCheck,
  Award,
  Stethoscope,
  Heart,
  Globe2,
  Calendar,
  CheckCircle2,
  Cpu,
  Sparkles,
} from 'lucide-react';

export default function AboutPage() {
  const { openBooking } = useBooking();

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-[#0E7C86] uppercase">
            <span>Our Heritage & Clinical Team</span>
            <span aria-hidden="true">·</span>
            <span>Westlands, Nairobi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0B2A4A] text-balance">
            Compassionate Healthcare Built on Precision & Trust
          </h1>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {siteConfig.subTagline} Established to bridge the gap between dental wellness and musculoskeletal health in a calm, modern environment.
          </p>
        </div>
      </section>

      {/* 2. Clinic Story & Integrated Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100">
              <Image
                src={siteConfig.images.hero}
                alt="Lumina Clinic Westlands Interior"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs">
              <p className="text-xs font-bold text-[#0B2A4A] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#0E7C86]" />
                Accredited Clinical Excellence
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                KMPDC License: {siteConfig.kmpdcLicense}
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block">
              Our Founding Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
              Why Dentistry and Physiotherapy Belong Under One Roof
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              In daily life, the human body operates as an interconnected whole. Chronic jaw clenching (bruxism) and temporomandibular joint (TMJ) disorders frequently manifest as unrelenting neck tension, upper back knots, and tension headaches. Similarly, sedentary work posture strains both spinal ligaments and oral facial muscles.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              At Lumina Clinic, our dental surgeons and physiotherapists collaborate under one clinical roof in Westlands. Whether you arrive for routine preventative teeth scaling or rehabilitation after a marathon or joint replacement, you are treated with warmth, patience, and absolute clinical rigor.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-[#E8F6F5] border border-[#0E7C86]/20">
                <span className="text-xl font-bold text-[#0B2A4A] block">10,000+</span>
                <span className="text-xs text-slate-600">Nairobi Patients Treated</span>
              </div>
              <div className="p-3.5 rounded-xl bg-[#E8F6F5] border border-[#0E7C86]/20">
                <span className="text-xl font-bold text-[#0B2A4A] block">100%</span>
                <span className="text-xs text-slate-600">KMPDC & KPA Registered</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Doctors & Clinical Specialists */}
      <section className="bg-slate-50/70 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block mb-1">
              Qualified Practitioners
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
              Meet Our Doctors & Specialists
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Each practitioner brings postgraduate training, international certifications, and genuine bedside compassion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.doctors.map(doctor => (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex flex-col sm:flex-row gap-5 items-start mb-6">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-36 rounded-xl overflow-hidden shrink-0 border border-slate-200 shadow-2xs">
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <h3 className="text-lg font-bold text-[#0B2A4A]">{doctor.name}</h3>
                        <span className="text-[11px] font-semibold text-[#0E7C86] bg-[#E8F6F5] px-2 py-0.5 rounded">
                          {doctor.department}
                        </span>
                      </div>
                      <p className="text-xs font-semibold text-slate-700">{doctor.role}</p>
                      <p className="text-xs text-slate-500 italic">{doctor.qualifications}</p>
                      
                      <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-500">
                        <span className="font-medium text-slate-700">
                          {doctor.registrationNumber}
                        </span>
                        <span>·</span>
                        <span>{doctor.experienceYears}+ Years Clinical</span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-0.5">
                        <Globe2 className="w-3.5 h-3.5 text-[#0E7C86]" />
                        <span>Languages: {doctor.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {doctor.bio}
                  </p>

                  <div className="mb-6">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Clinical Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.specialties.map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium bg-[#E8F6F5] text-[#0B2A4A] px-2.5 py-1 rounded-md"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Consultation from KES 4,500
                  </span>
                  <button
                    onClick={() => openBooking(undefined, doctor.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white rounded-xl shadow-xs hover:brightness-105 active:scale-95 transition-all"
                    style={{ backgroundColor: siteConfig.colors.coralCTA }}
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    Book with {doctor.name.split(' ')[1] || doctor.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technology & Sterilization Standards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block mb-1">
            Clinical Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A] tracking-tight">
            Sterilization & Diagnostic Technology
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Every clinical procedure is supported by hospital-grade infection control and modern diagnostic precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.standards.map((std, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E8F6F5] text-[#0E7C86] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0B2A4A] mb-2">{std.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{std.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Equipment Highlights */}
        <div className="mt-12 bg-[#0B2A4A] text-white rounded-2xl p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block mb-1">
              Precision Equipment
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Advanced Clinical Equipment In Use
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-1.5 border-l-2 border-[#0E7C86] pl-4">
              <p className="font-bold text-white text-sm">Digital Radiovisiography (RVG)</p>
              <p>Ultra-fast dental imaging with 85% reduced radiation exposure compared to film.</p>
            </div>
            <div className="space-y-1.5 border-l-2 border-[#0E7C86] pl-4">
              <p className="font-bold text-white text-sm">Rotary Endodontics & Apex Locators</p>
              <p>Sub-millimeter accuracy for painless, single-visit root canal treatments.</p>
            </div>
            <div className="space-y-1.5 border-l-2 border-[#0E7C86] pl-4">
              <p className="font-bold text-white text-sm">Cold LED Whitening Accelerator</p>
              <p>Safe enamel stain oxidation with zero damaging heat and desensitizing barriers.</p>
            </div>
            <div className="space-y-1.5 border-l-2 border-[#0E7C86] pl-4">
              <p className="font-bold text-white text-sm">Biomechanical Posture Grid & Dynamometer</p>
              <p>Objective muscle strength and spinal curvature measurement for targeted physio rehab.</p>
            </div>
            <div className="space-y-1.5 border-l-2 border-[#0E7C86] pl-4">
              <p className="font-bold text-white text-sm">Sterile Single-Use Filament Needles</p>
              <p>Sephora-grade acupuncture needles for precise myofascial trigger-point release.</p>
            </div>
            <div className="space-y-1.5 border-l-2 border-[#0E7C86] pl-4">
              <p className="font-bold text-white text-sm">Medical Continuous HEPA Filtration</p>
              <p>Sterile clean air circulation in all treatment suites and reception lounge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Team Booking CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center bg-[#E8F6F5] p-8 sm:p-10 rounded-2xl border border-[#0E7C86]/20 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B2A4A]">
            Consult With Our Team Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Book an appointment online or contact our reception to discuss your specific care requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={() => openBooking()}
              className="px-6 py-3 rounded-xl text-white font-semibold text-xs sm:text-sm shadow-md"
              style={{ backgroundColor: siteConfig.colors.coralCTA }}
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
