'use client';

import React, { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage = '/images/hero_clinic_reception_1791961657833.jpg',
  afterImage = '/images/smile_before_after_case_1791961659017.jpg',
  beforeLabel = 'Before: Discoloration & Mild Crowding',
  afterLabel = 'After: In-Chair Whitening & Aligners',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const clamped = Math.max(0, Math.min(rect.width, x));
    const percent = (clamped / rect.width) * 100;
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        className="relative w-full aspect-4/3 sm:aspect-16/9 rounded-2xl overflow-hidden select-none cursor-ew-resize shadow-lg border border-slate-200 bg-slate-900"
      >
        {/* "After" Image (Full background) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="Smile result after whitening and alignment"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-[#0B2A4A]/90 backdrop-blur-md text-emerald-300 px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs flex items-center gap-1.5 border border-emerald-500/30">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            {afterLabel}
          </div>
        </div>

        {/* "Before" Image with CSS clip-path */}
        <div
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <Image
            src={beforeImage}
            alt="Teeth before treatment"
            fill
            className="object-cover filter contrast-90 brightness-95 sepia-[0.15]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 left-4 bg-[#0B2A4A]/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs border border-white/20">
            {beforeLabel}
          </div>
        </div>

        {/* Divider Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-xl flex items-center justify-center text-slate-700 border-2 border-[#0E7C86]">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M8 9l-4 3 4 3m8-6l4 3-4 3"
              />
            </svg>
          </div>
        </div>

        {/* Interaction Hint */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#0B2A4A]/80 backdrop-blur-md text-slate-200 px-3 py-1 rounded-full text-[11px] font-medium pointer-events-none">
          Drag slider left or right to compare
        </div>
      </div>

      {/* Ethical consent caption */}
      <p className="text-center text-xs text-slate-500 mt-3 px-4">
        Photographs shown with patient informed consent in accordance with Kenyan Medical Practitioners and Dentists Council (KMPDC) clinical ethics. Individual physiological results vary depending on initial enamel density and oral condition.
      </p>
    </div>
  );
}
