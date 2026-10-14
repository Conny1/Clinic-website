'use client';

import React, { useState, useEffect } from 'react';
import { siteConfig } from '@/src/siteConfig';
import { X, Calendar, Clock, User, Phone, Mail, Stethoscope, CheckCircle2, MessageCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDoctorId?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  initialServiceId = '',
  initialDoctorId = '',
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: initialServiceId,
    doctorId: initialDoctorId,
    patientType: 'new',
    preferredDate: '',
    preferredTime: 'Morning (08:00 – 12:00)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your full name';
    }
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean) {
      errs.phone = 'Phone number is required for booking confirmation';
    } else if (!/^(?:\+254|254|0)[17]\d{8}$/.test(phoneClean)) {
      errs.phone = 'Please enter a valid Kenyan phone number (e.g. 0712 345 678)';
    }

    if (!formData.serviceId && !initialServiceId) {
      errs.serviceId = 'Please select a service or consultation type';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select your preferred appointment date';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const effectiveServiceId = formData.serviceId || initialServiceId;
    const effectiveDoctorId = formData.doctorId || initialDoctorId;

    const selectedService = siteConfig.services.find(s => s.id === effectiveServiceId);
    const selectedDoctor = siteConfig.doctors.find(d => d.id === effectiveDoctorId);

    // Format WhatsApp message
    const messageLines = [
      `*New Appointment Request - Lumina Clinic*`,
      `---------------------------------`,
      `*Patient Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : '',
      `*Patient Type:* ${formData.patientType === 'new' ? 'First-Time Patient' : 'Returning Patient'}`,
      `*Service:* ${selectedService ? selectedService.title : effectiveServiceId}`,
      `*Doctor Preference:* ${selectedDoctor ? selectedDoctor.name : 'First Available Specialist'}`,
      `*Preferred Date:* ${formData.preferredDate}`,
      `*Preferred Time:* ${formData.preferredTime}`,
      formData.notes ? `*Reason/Notes:* ${formData.notes}` : '',
      `---------------------------------`,
      `_Sent via Lumina Clinic Online Booking_`,
    ].filter(Boolean);

    const waUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
      messageLines.join('\n')
    )}`;

    // Open WhatsApp
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const effectiveServiceId = formData.serviceId || initialServiceId;
  const selectedService = siteConfig.services.find(s => s.id === effectiveServiceId);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(11, 42, 74, 0.65)' }}
    >
      <div
        className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-100"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-[#E8F6F5]/50">
          <div>
            <h2 className="text-xl font-bold text-[#0B2A4A] tracking-tight">
              Request an Appointment
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              Instant confirmation via WhatsApp with our Westlands front desk
            </p>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-xl font-bold text-[#0B2A4A] mb-2">
                Booking Request Prepared!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                Your appointment details have been forwarded to our WhatsApp care desk. Our receptionist will confirm your slot within 15 minutes during working hours.
              </p>

              <div className="bg-[#E8F6F5] p-4 rounded-xl text-left text-xs text-slate-700 space-y-1.5 mb-6">
                <p className="font-semibold text-[#0B2A4A] text-sm mb-1">
                  Appointment Summary:
                </p>
                <p><span className="text-slate-500">Patient:</span> {formData.name}</p>
                <p><span className="text-slate-500">Service:</span> {selectedService?.title || 'Selected Service'}</p>
                <p><span className="text-slate-500">Requested:</span> {formData.preferredDate} ({formData.preferredTime})</p>
                <p><span className="text-slate-500">Location:</span> {siteConfig.location.building}, {siteConfig.location.area}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold rounded-xl shadow-sm transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <button
                  onClick={handleClose}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-medium rounded-xl transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Patient Type Segmented Control */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                  Patient Status
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, patientType: 'new' })}
                    className={`py-2 text-xs font-medium rounded-md transition-all ${
                      formData.patientType === 'new'
                        ? 'bg-white text-[#0B2A4A] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    New Patient (First Visit)
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, patientType: 'returning' })}
                    className={`py-2 text-xs font-medium rounded-md transition-all ${
                      formData.patientType === 'returning'
                        ? 'bg-white text-[#0B2A4A] shadow-xs font-semibold'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Returning Patient
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Grace Wanjiru"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86] ${
                        errors.name ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Kenyan Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0712 345 678"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86] ${
                        errors.phone ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Email (Optional) */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Email Address <span className="text-slate-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <input
                    type="email"
                    placeholder="e.g. grace@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86]"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Service / Consultation Needed <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Stethoscope className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                  <select
                    value={effectiveServiceId}
                    onChange={e => setFormData({ ...formData, serviceId: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#0E7C86] ${
                      errors.serviceId ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                    }`}
                  >
                    <option value="">-- Choose a Service --</option>
                    <optgroup label="Dental Care">
                      {siteConfig.services
                        .filter(s => s.category === 'dental')
                        .map(service => (
                          <option key={service.id} value={service.id}>
                            {service.title} ({service.priceDisplay})
                          </option>
                        ))}
                    </optgroup>
                    <optgroup label="Physiotherapy & Rehab">
                      {siteConfig.services
                        .filter(s => s.category === 'physio')
                        .map(service => (
                          <option key={service.id} value={service.id}>
                            {service.title} ({service.priceDisplay})
                          </option>
                        ))}
                    </optgroup>
                  </select>
                </div>
                {errors.serviceId && <p className="text-xs text-rose-500 mt-1">{errors.serviceId}</p>}
              </div>

              {/* Doctor Preference */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Doctor or Physiotherapist Preference
                </label>
                <select
                  value={formData.doctorId || initialDoctorId}
                  onChange={e => setFormData({ ...formData, doctorId: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86]"
                >
                  <option value="">First Available Specialist</option>
                  {siteConfig.doctors.map(doc => (
                    <option key={doc.id} value={doc.id}>
                      {doc.name} – {doc.role}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Preferred Date <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.preferredDate}
                      onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2 text-sm rounded-lg border bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86] ${
                        errors.preferredDate ? 'border-rose-400 bg-rose-50/30' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="text-xs text-rose-500 mt-1">{errors.preferredDate}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Time Window
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <select
                      value={formData.preferredTime}
                      onChange={e => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86]"
                    >
                      <option value="Morning (08:00 – 12:00)">Morning (08:00 – 12:00)</option>
                      <option value="Afternoon (12:00 – 15:00)">Afternoon (12:00 – 15:00)</option>
                      <option value="Late Afternoon (15:00 – 18:00)">Late Afternoon (15:00 – 18:00)</option>
                      <option value="Saturday Morning (09:00 – 13:00)">Saturday Morning (09:00 – 13:00)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Notes / Reason */}
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Specific Concerns, Symptoms, or Insurance Scheme
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Severe tooth sensitivity to cold drinks, or Jubilee insurance cover..."
                  value={formData.notes}
                  onChange={e => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold text-sm shadow-md hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer"
                  style={{ backgroundColor: '#F26B5B' }}
                >
                  <MessageCircle className="w-4 h-4" />
                  Confirm & Send Request via WhatsApp
                </button>
                <p className="text-center text-[11px] text-slate-500 mt-2">
                  No payment required to book. Direct insurance pre-auth or M-Pesa settled upon visit.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
