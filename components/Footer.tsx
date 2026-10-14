'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/src/siteConfig';
import {
  MapPin,
  Phone,
  PhoneCall,
  Mail,
  Clock,
  ShieldCheck,
  ExternalLink,
} from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B2A4A] text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Clinic Identity & Mission */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-[#0E7C86] text-white flex items-center justify-center font-bold text-base">
                L
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-xs text-[#0E7C86] font-semibold tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              {siteConfig.subTagline}
            </p>
            <div className="pt-2 text-[11px] text-slate-400">
              <span className="block font-medium text-slate-300">Accredited Healthcare Facility</span>
              <span>Reg: {siteConfig.kmpdcLicense}</span>
            </div>
          </div>

          {/* Col 2: Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0E7C86]" />
              Clinic Working Hours
            </h3>
            <ul className="space-y-2 text-xs">
              {siteConfig.hours.schedule.map((sched, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center py-1 border-b border-slate-800/60 pb-1"
                >
                  <span className="text-slate-400">{sched.days}</span>
                  <span className="font-medium text-slate-200">{sched.time}</span>
                </li>
              ))}
            </ul>
            <div className="p-2.5 rounded-lg bg-rose-950/40 border border-rose-900/50 text-[11px] text-rose-200">
              <span className="font-semibold block mb-0.5">24/7 Dental Emergency On-Call</span>
              <a
                href={`tel:${siteConfig.contact.emergencyPhoneRaw}`}
                className="hover:underline font-bold text-rose-300 flex items-center gap-1.5"
              >
                <PhoneCall className="w-3 h-3" />
                {siteConfig.contact.emergencyPhoneDisplay}
              </a>
            </div>
          </div>

          {/* Col 3: Westlands Nairobi Location & Parking */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0E7C86]" />
              Location & Access
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {siteConfig.location.fullAddress}
            </p>
            <div className="text-xs space-y-2 pt-1 text-slate-400">
              <p>
                <span className="font-medium text-slate-300">Landmark:</span>{' '}
                {siteConfig.location.landmark}
              </p>
              <p>
                <span className="font-medium text-slate-300">Parking:</span>{' '}
                {siteConfig.location.parking}
              </p>
            </div>
            <div className="pt-1">
              <a
                href={siteConfig.location.mapEmbedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#0E7C86] hover:text-white transition-colors"
              >
                <span>View Google Maps Directions</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 4: Quick Links & Direct Contacts */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#0E7C86]" />
              Patient Care Desk
            </h3>
            <div className="space-y-2 text-xs">
              <div>
                <span className="text-slate-400 block">Appointment Booking:</span>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="font-medium text-slate-200 hover:text-[#0E7C86] transition-colors"
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="text-slate-400 block">WhatsApp Support:</span>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-slate-200 hover:text-emerald-400 transition-colors"
                >
                  +254 712 345 678
                </a>
              </div>
              <div>
                <span className="text-slate-400 block">Official Inquiries:</span>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-medium text-slate-200 hover:text-[#0E7C86] transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-xs">
              <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                Services
              </Link>
              <span className="text-slate-600">·</span>
              <Link href="/gallery" className="text-slate-400 hover:text-white transition-colors">
                Gallery
              </Link>
              <span className="text-slate-600">·</span>
              <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                About & Doctors
              </Link>
              <span className="text-slate-600">·</span>
              <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                Book Visit
              </Link>
            </div>
          </div>
        </div>

        {/* Insurance & Payment Badge Strip */}
        <div className="py-6 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#0E7C86] shrink-0" />
            <span>Direct insurance billing accepted with major Kenyan providers:</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {siteConfig.insurancePartners.map((ins, i) => (
              <span
                key={i}
                className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-800 text-slate-300 border border-slate-700/60"
              >
                {ins.name}
              </span>
            ))}
            <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950 text-emerald-300 border border-emerald-800/60">
              M-Pesa Accepted
            </span>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
          </p>

          <p className="text-[11px] text-slate-500 max-w-lg text-center sm:text-left">
            Clinical results vary based on individual assessment. Information provided does not constitute a warranty of specific health outcomes.
          </p>

          <p className="shrink-0 font-medium">
            <a
              href={siteConfig.credits.developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors underline decoration-slate-600 underline-offset-4"
            >
              {siteConfig.credits.text}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
