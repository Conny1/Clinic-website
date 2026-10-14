'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/src/siteConfig';

export function LiveStatusBadge({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [statusText, setStatusText] = useState<string>('Checking hours...');

  useEffect(() => {
    const checkOpenStatus = () => {
      // Kenya is UTC+3 with no Daylight Saving Time
      const now = new Date();
      const utcTime = now.getTime() + now.getTimezoneOffset() * 60000;
      const kenyaTime = new Date(utcTime + 3 * 3600000);

      const day = kenyaTime.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
      const hours = kenyaTime.getHours();
      const minutes = kenyaTime.getMinutes();
      const currentDecimalHour = hours + minutes / 60;

      // Monday (1) to Friday (5): 8:00 AM - 6:00 PM (8.0 to 18.0)
      if (day >= 1 && day <= 5) {
        if (currentDecimalHour >= 8 && currentDecimalHour < 18) {
          setIsOpen(true);
          const closesIn = Math.round((18 - currentDecimalHour) * 60);
          if (closesIn <= 60) {
            setStatusText(`Open Now · Closes in ${closesIn}m`);
          } else {
            setStatusText(`Open Now · Closes 6:00 PM`);
          }
        } else if (currentDecimalHour < 8) {
          setIsOpen(false);
          setStatusText(`Closed · Opens 8:00 AM`);
        } else {
          setIsOpen(false);
          setStatusText(`Closed · Opens 8:00 AM tomorrow`);
        }
      }
      // Saturday (6): 9:00 AM - 4:00 PM (9.0 to 16.0)
      else if (day === 6) {
        if (currentDecimalHour >= 9 && currentDecimalHour < 16) {
          setIsOpen(true);
          setStatusText(`Open Now · Closes 4:00 PM`);
        } else if (currentDecimalHour < 9) {
          setIsOpen(false);
          setStatusText(`Closed · Opens 9:00 AM`);
        } else {
          setIsOpen(false);
          setStatusText(`Closed · Opens Monday 8:00 AM`);
        }
      }
      // Sunday (0): Emergency On-Call
      else {
        setIsOpen(false);
        setStatusText(`Emergency On-Call · Opens Mon 8:00 AM`);
      }
    };

    checkOpenStatus();
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-md transition-colors ${
        isOpen === true
          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
          : isOpen === false
          ? 'bg-amber-50 text-amber-800 border border-amber-200'
          : 'bg-slate-50 text-slate-700 border border-slate-200'
      } ${className}`}
      title="Clinic hours are based on Nairobi Time (EAT UTC+3)"
    >
      <span
        className={`w-2 h-2 rounded-full shrink-0 ${
          isOpen === true
            ? 'bg-emerald-600'
            : isOpen === false
            ? 'bg-amber-600'
            : 'bg-slate-400'
        }`}
        aria-hidden="true"
      />
      <span>{statusText}</span>
    </div>
  );
}
