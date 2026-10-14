'use client';

import React from 'react';
import { siteConfig } from '@/src/siteConfig';
import { Phone, MessageCircle, Calendar } from 'lucide-react';

interface MobileStickyBarProps {
  onOpenBooking: () => void;
}

export function MobileStickyBar({ onOpenBooking }: MobileStickyBarProps) {
  const waUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    siteConfig.contact.whatsappPrefillMessage
  )}`;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto h-11 items-center">
        {/* Call Now */}
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex items-center justify-center gap-1.5 h-full rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2A4A] text-xs font-semibold transition-colors"
          aria-label="Call clinic directly"
        >
          <Phone className="w-3.5 h-3.5 text-[#0E7C86]" />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 h-full rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition-colors border border-emerald-200"
          aria-label="Message on WhatsApp"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <button
          onClick={onOpenBooking}
          className="flex items-center justify-center gap-1.5 h-full rounded-xl text-white text-xs font-semibold shadow-xs hover:brightness-105 active:scale-95 transition-all"
          style={{ backgroundColor: siteConfig.colors.coralCTA }}
          aria-label="Book an appointment"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Visit</span>
        </button>
      </div>
    </div>
  );
}
