'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { siteConfig } from '@/src/siteConfig';
import { useBooking } from '@/components/AppLayoutClient';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import {
  Sparkles,
  ShieldCheck,
  Maximize2,
  X,
  Stethoscope,
  Activity,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'clinical' | 'results' | 'physio' | 'hygiene';
  image: string;
  description: string;
  equipmentHighlight: string;
}

export default function GalleryPage() {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState<'all' | 'clinical' | 'results' | 'physio' | 'hygiene'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'gallery-1',
      title: 'Executive Reception & Patient Lounge',
      category: 'clinical',
      image: siteConfig.images.hero,
      description: 'Sunlit reception designed for serenity and comfort, featuring warm wood accents and complimentary herbal refreshments.',
      equipmentHighlight: 'HEPA air filtration & quiet check-in terminal',
    },
    {
      id: 'gallery-2',
      title: 'Smile Transformation: In-Chair Whitening & Alignment',
      category: 'results',
      image: siteConfig.images.smileResult,
      description: 'Case result showing 7 shades brighter enamel and improved incisal alignment completed in 6 weeks.',
      equipmentHighlight: 'Cold LED whitening accelerator & clear aligners',
    },
    {
      id: 'gallery-3',
      title: 'Musculoskeletal Rehabilitation Studio',
      category: 'physio',
      image: siteConfig.images.physioRoom,
      description: 'Equipped with medical treatment plinths, posture grid analysis, resistance bands, and functional rehabilitation gear.',
      equipmentHighlight: 'Posture alignment grid & dry needling suite',
    },
    {
      id: 'gallery-4',
      title: 'Lead Dental Consultation Operatory',
      category: 'clinical',
      image: siteConfig.images.dentistPortrait,
      description: 'Sterile surgical suite with ergonomic dental chair and chairside high-definition screens for patient education.',
      equipmentHighlight: 'Ultrasonic scaler & digital intraoral camera',
    },
    {
      id: 'gallery-5',
      title: 'Sports Injury & Gait Analysis Bay',
      category: 'physio',
      image: siteConfig.images.physioPortrait,
      description: 'Dynamic movement and biomechanical assessment area for runners, corporate athletes, and post-operative patients.',
      equipmentHighlight: 'Spine mobility model & dynamometer assessment',
    },
  ];

  const filteredItems = galleryItems.filter(item => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-24">
      {/* 1. Header Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-[#0E7C86] uppercase">
            <span>Visual Tour & Clinical Outcomes</span>
            <span aria-hidden="true">·</span>
            <span>Westlands, Nairobi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0B2A4A] text-balance">
            Clinic Interior & Results Gallery
          </h1>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tour our modern healthcare facility in The Promenade, Westlands, and view documented clinical smile makeovers.
          </p>
        </div>
      </section>

      {/* 2. Interactive Before & After Smile Slider Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8F6F5]/40 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block mb-1">
              Interactive Case Comparison
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A]">
              Cosmetic Dentistry Results
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Slide back and forth to inspect tooth shade lift and gum health improvement.
            </p>
          </div>

          <BeforeAfterSlider />

          <div className="mt-8 text-center">
            <button
              onClick={() => openBooking('teeth-whitening')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-xs sm:text-sm shadow-md"
              style={{ backgroundColor: siteConfig.colors.coralCTA }}
            >
              <Sparkles className="w-4 h-4" />
              Schedule Your Smile Assessment
            </button>
          </div>
        </div>
      </section>

      {/* 3. Facility Photo Gallery & Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A]">
              Inside Lumina Clinic
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              High-resolution photography of our Westlands treatment bays and equipment.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
            {(
              [
                { id: 'all', label: 'All Photos' },
                { id: 'clinical', label: 'Dental Suites' },
                { id: 'physio', label: 'Physio Studio' },
                { id: 'results', label: 'Smile Cases' },
              ] as const
            ).map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === tab.id
                    ? 'bg-white text-[#0B2A4A] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs hover:shadow-md transition-all group flex flex-col justify-between"
            >
              <div
                className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/90 text-[#0B2A4A] shadow-md">
                    <Maximize2 className="w-5 h-5" />
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-[#0B2A4A] mb-1.5">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {item.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#0E7C86] font-medium">
                  <span>{item.equipmentHighlight}</span>
                  <button
                    onClick={() => setSelectedImage(item)}
                    className="hover:underline font-semibold"
                  >
                    Expand
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Hygiene & Sterilization Spotlight */}
      <section className="bg-slate-50 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#0E7C86] uppercase tracking-wider block mb-1">
              Infection Control
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B2A4A]">
              Rigorous Hygiene & Sterilization Protocols
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Your safety is paramount. We comply strictly with Kenyan KMPDC and CDC dental infection prevention protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.standards.map((std, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#E8F6F5] text-[#0E7C86] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-[#0B2A4A] mb-2">{std.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{std.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white rounded-2xl overflow-hidden shadow-2xl border border-slate-200"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <h3 className="text-sm font-bold text-[#0B2A4A]">{selectedImage.title}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-16/10 w-full bg-slate-900">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-5 bg-white space-y-2">
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {selectedImage.description}
              </p>
              <p className="text-xs text-[#0E7C86] font-semibold">
                Equipment Highlight: {selectedImage.equipmentHighlight}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
