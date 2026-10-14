'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { MobileStickyBar } from './MobileStickyBar';
import { BookingModal } from './BookingModal';

interface BookingContextType {
  openBooking: (serviceId?: string, doctorId?: string) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

export function AppLayoutClient({ children }: { children: ReactNode }) {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>(undefined);

  const openBooking = (serviceId?: string, doctorId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedDoctorId(doctorId);
    setIsBookingOpen(true);
  };

  const closeBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(undefined);
    setSelectedDoctorId(undefined);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      <div className="flex flex-col min-h-screen">
        <Navbar onOpenBooking={() => openBooking()} />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar onOpenBooking={() => openBooking()} />

        <BookingModal
          isOpen={isBookingOpen}
          onClose={closeBooking}
          initialServiceId={selectedServiceId}
          initialDoctorId={selectedDoctorId}
        />
      </div>
    </BookingContext.Provider>
  );
}
