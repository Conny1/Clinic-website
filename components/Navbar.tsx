'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/src/siteConfig';
import { LiveStatusBadge } from './LiveStatusBadge';
import { Menu, X, Phone, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xs border-slate-200 py-2.5'
            : 'bg-white border-slate-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <Link
            href="/"
            className="flex items-center gap-2 group whitespace-nowrap shrink-0"
            aria-label={`${siteConfig.name} - Home`}
          >
            {/* Visual medical cross / tooth monogram */}
            <div className="w-9 h-9 rounded-xl bg-[#0E7C86] text-white flex items-center justify-center font-bold text-lg shadow-xs group-hover:bg-[#0B2A4A] transition-colors">
              L
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#0B2A4A]">
                {siteConfig.shortName}
              </span>
              <span className="text-[10px] text-slate-500 font-medium -mt-1 hidden sm:inline">
                Dental & Physiotherapy
              </span>
            </div>
          </Link>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors ${
                    isActive
                      ? 'text-[#0E7C86] font-semibold'
                      : 'hover:text-[#0B2A4A]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0E7C86] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action + live status indicator + mobile toggle */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            {/* Live Open/Closed Status Badge (Hidden on smallest screens) */}
            <div className="hidden sm:block">
              <LiveStatusBadge />
            </div>

            {/* Direct phone link (desktop/tablet) */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="hidden md:flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-[#0E7C86] px-2.5 py-2 rounded-lg border border-slate-200 hover:border-slate-300 transition-colors"
              title="Call Lumina Clinic"
            >
              <Phone className="w-3.5 h-3.5 text-[#0E7C86]" />
              <span className="whitespace-nowrap">{siteConfig.contact.phoneDisplay}</span>
            </a>

            {/* Coral "Book Appointment" CTA button */}
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-white rounded-xl shadow-xs hover:brightness-105 active:scale-98 transition-all whitespace-nowrap shrink-0 cursor-pointer"
              style={{ backgroundColor: siteConfig.colors.coralCTA }}
            >
              <Calendar className="w-4 h-4 hidden xs:inline" />
              <span>Book Appointment</span>
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-[#0B2A4A] hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 top-[57px] z-30 lg:hidden bg-navy-950/40 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm ml-auto bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Menu
                </span>
                <LiveStatusBadge />
              </div>

              <nav className="flex flex-col space-y-2">
                {navLinks.map(link => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-[#E8F6F5] text-[#0E7C86] font-semibold'
                          : 'text-[#0B2A4A] hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-4 border-t border-slate-100 space-y-3">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Direct Contacts
                </p>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex items-center gap-3 text-sm font-semibold text-slate-800 p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0E7C86]" />
                  <span>Call: {siteConfig.contact.phoneDisplay}</span>
                </a>
                <a
                  href={`tel:${siteConfig.contact.emergencyPhoneRaw}`}
                  className="flex items-center gap-3 text-sm font-semibold text-rose-700 p-2.5 rounded-lg bg-rose-50 hover:bg-rose-100 transition-colors"
                >
                  <Phone className="w-4 h-4 text-rose-600" />
                  <span>24/7 Dental Emergency: {siteConfig.contact.emergencyPhoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold text-sm shadow-sm"
                style={{ backgroundColor: siteConfig.colors.coralCTA }}
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
