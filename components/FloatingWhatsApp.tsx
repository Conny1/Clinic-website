'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/src/siteConfig';
import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const [isHovered, setIsHovered] = useState(false);

  const waUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    siteConfig.contact.whatsappPrefillMessage
  )}`;

  return (
    <div className="fixed bottom-20 md:bottom-6 right-5 z-40 flex items-center gap-2">
      {/* Label Tooltip */}
      <span
        className={`hidden sm:inline-block bg-[#0B2A4A] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg transition-all duration-200 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        Chat on WhatsApp
      </span>

      {/* Floating Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Lumina Dental & Physio Clinic on WhatsApp"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-300"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
