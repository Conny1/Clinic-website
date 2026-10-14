'use client';

import React, { useState } from 'react';
import { siteConfig } from '@/src/siteConfig';
import { LiveStatusBadge } from '@/components/LiveStatusBadge';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  PhoneCall,
  Mail,
  MessageCircle,
  CheckCircle2,
  Car,
  ShieldCheck,
  User,
  Stethoscope,
  ExternalLink,
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceId: '',
    doctorId: '',
    patientType: 'new',
    preferredDate: '',
    preferredTime: 'Morning (08:00 – 12:00)',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) {
      errs.name = 'Full name is required';
    }
    const phoneClean = formData.phone.replace(/[\s-]/g, '');
    if (!phoneClean) {
      errs.phone = 'Phone number is required';
    } else if (!/^(?:\+254|254|0)[17]\d{8}$/.test(phoneClean)) {
      errs.phone = 'Please enter a valid Kenyan phone number (e.g. 0712 345 678)';
    }

    if (!formData.serviceId) {
      errs.serviceId = 'Please select a clinical service';
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

    const selectedService = siteConfig.services.find(s => s.id === formData.serviceId);
    const selectedDoctor = siteConfig.doctors.find(d => d.id === formData.doctorId);

    const messageLines = [
      `*New Appointment Request - Lumina Clinic*`,
      `---------------------------------`,
      `*Patient Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : '',
      `*Patient Status:* ${formData.patientType === 'new' ? 'New Patient' : 'Returning Patient'}`,
      `*Service:* ${selectedService ? selectedService.title : formData.serviceId}`,
      `*Doctor Preference:* ${selectedDoctor ? selectedDoctor.name : 'First Available Specialist'}`,
      `*Preferred Date:* ${formData.preferredDate}`,
      `*Preferred Time:* ${formData.preferredTime}`,
      formData.notes ? `*Reason/Notes:* ${formData.notes}` : '',
      `---------------------------------`,
      `_Sent via Lumina Clinic Web Contact Form_`,
    ].filter(Boolean);

    const waUrl = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
      messageLines.join('\n')
    )}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  return (
    <div className="py-10 sm:py-16 space-y-16 sm:space-y-20">
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-wide text-[#0E7C86] uppercase">
            <span>Direct Scheduling & Inquiry</span>
            <span aria-hidden="true">·</span>
            <span>Westlands, Nairobi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0B2A4A] text-balance">
            Book an Appointment & Contact Us
          </h1>

          <p className="text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Reserve your dental or physiotherapy appointment online. Our care desk validates your details and confirms your slot instantly on WhatsApp.
          </p>
        </div>
      </section>

      {/* 2. Main Booking Form & Clinic Contacts Split */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Form Column (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <h2 className="text-xl font-bold text-[#0B2A4A]">Appointment Request</h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Pre-fills a WhatsApp message directly to our reception
                </p>
              </div>
              <LiveStatusBadge />
            </div>

            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-[#0B2A4A]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your appointment request has been generated for WhatsApp. Our care desk will confirm your scheduled slot within 15 minutes during clinical hours.
                </p>
                <div className="bg-[#E8F6F5] p-5 rounded-2xl text-left text-xs text-slate-700 max-w-md mx-auto space-y-1.5 border border-[#0E7C86]/20">
                  <p className="font-semibold text-[#0B2A4A] text-sm mb-1">
                    Booking Summary:
                  </p>
                  <p><span className="text-slate-500">Service:</span> {siteConfig.services.find(s => s.id === formData.serviceId)?.title}</p>
                  <p><span className="text-slate-500">Date & Window:</span> {formData.preferredDate} ({formData.preferredTime})</p>
                  <p><span className="text-slate-500">Phone:</span> {formData.phone}</p>
                  <p><span className="text-slate-500">Clinic:</span> {siteConfig.location.building}</p>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        serviceId: '',
                        doctorId: '',
                        patientType: 'new',
                        preferredDate: '',
                        preferredTime: 'Morning (08:00 – 12:00)',
                        notes: '',
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Patient Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Patient Status
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, patientType: 'new' })}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                        formData.patientType === 'new'
                          ? 'bg-white text-[#0B2A4A] shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      First-Time Patient
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, patientType: 'returning' })}
                      className={`py-2 text-xs font-semibold rounded-lg transition-all ${
                        formData.patientType === 'returning'
                          ? 'bg-white text-[#0B2A4A] shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Returning Patient
                    </button>
                  </div>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="text"
                        placeholder="e.g. Samuel Mutua"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86] ${
                          errors.name ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
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
                        placeholder="e.g. 0712 345 678"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86] ${
                          errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Email Address <span className="text-slate-400 font-normal">(optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                    <input
                      type="email"
                      placeholder="e.g. samuel@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86]"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Select Service <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Stethoscope className="w-4 h-4 absolute left-3 top-3.5 text-slate-400" />
                    <select
                      value={formData.serviceId}
                      onChange={e => setFormData({ ...formData, serviceId: e.target.value })}
                      className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border bg-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#0E7C86] ${
                        errors.serviceId ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
                      }`}
                    >
                      <option value="">-- Choose a Service --</option>
                      <optgroup label="Dental Care">
                        {siteConfig.services
                          .filter(s => s.category === 'dental')
                          .map(s => (
                            <option key={s.id} value={s.id}>
                              {s.title} ({s.priceDisplay})
                            </option>
                          ))}
                      </optgroup>
                      <optgroup label="Physiotherapy & Sports Rehab">
                        {siteConfig.services
                          .filter(s => s.category === 'physio')
                          .map(s => (
                            <option key={s.id} value={s.id}>
                              {s.title} ({s.priceDisplay})
                            </option>
                          ))}
                      </optgroup>
                    </select>
                  </div>
                  {errors.serviceId && <p className="text-xs text-rose-500 mt-1">{errors.serviceId}</p>}
                </div>

                {/* Doctor Selection */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Doctor or Specialist Preference
                  </label>
                  <select
                    value={formData.doctorId}
                    onChange={e => setFormData({ ...formData, doctorId: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86]"
                  >
                    <option value="">First Available Specialist</option>
                    {siteConfig.doctors.map(d => (
                      <option key={d.id} value={d.id}>
                        {d.name} – {d.role}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Preferred Date <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={e => setFormData({ ...formData, preferredDate: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86] ${
                          errors.preferredDate ? 'border-rose-400 bg-rose-50/20' : 'border-slate-200'
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
                        className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86]"
                      >
                        <option value="Morning (08:00 – 12:00)">Morning (08:00 – 12:00)</option>
                        <option value="Afternoon (12:00 – 15:00)">Afternoon (12:00 – 15:00)</option>
                        <option value="Late Afternoon (15:00 – 18:00)">Late Afternoon (15:00 – 18:00)</option>
                        <option value="Saturday Slot (09:00 – 14:00)">Saturday Slot (09:00 – 14:00)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Symptoms, Special Requests, or Insurance Scheme
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Toothache when chewing, or recovering from ankle ligament sprain, covered under AAR Insurance..."
                    value={formData.notes}
                    onChange={e => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0E7C86]"
                  />
                </div>

                {/* Submit button - strictly Coral #F26B5B */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-white font-semibold text-sm shadow-md hover:brightness-105 active:scale-98 transition-all cursor-pointer"
                    style={{ backgroundColor: siteConfig.colors.coralCTA }}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Booking via WhatsApp</span>
                  </button>
                  <p className="text-center text-[11px] text-slate-500 mt-2">
                    Direct insurance pre-authorization or M-Pesa / Card checkout at clinic reception.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Information & Hours Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Opening Hours Card */}
            <div className="bg-[#E8F6F5]/50 rounded-3xl p-6 sm:p-7 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-[#0B2A4A] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0E7C86]" />
                  Opening Hours
                </h3>
                <LiveStatusBadge />
              </div>

              <div className="space-y-2.5 text-xs">
                {siteConfig.hours.schedule.map((sched, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-1.5 border-b border-slate-200/80"
                  >
                    <span className="font-semibold text-slate-700">{sched.days}</span>
                    <span className="text-slate-900 font-medium">{sched.time}</span>
                  </div>
                ))}
              </div>

              {/* 24/7 Dental Emergency Callout */}
              <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4 text-xs space-y-2 mt-4">
                <div className="flex items-center gap-2 text-rose-800 font-bold">
                  <PhoneCall className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>24/7 Dental Emergency Hotline</span>
                </div>
                <p className="text-slate-600">
                  For acute toothache, dental trauma, facial swelling, or severe sports joint sprains outside normal hours:
                </p>
                <a
                  href={`tel:${siteConfig.contact.emergencyPhoneRaw}`}
                  className="inline-flex items-center gap-1.5 font-bold text-sm text-rose-700 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {siteConfig.contact.emergencyPhoneDisplay}
                </a>
              </div>
            </div>

            {/* Address & Parking Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-[#0B2A4A] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#0E7C86]" />
                Clinic Location & Directions
              </h3>

              <div className="text-xs space-y-3 text-slate-600">
                <p className="font-medium text-slate-900 leading-relaxed">
                  {siteConfig.location.fullAddress}
                </p>
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1.5">
                  <p>
                    <span className="font-semibold text-[#0B2A4A]">Landmark:</span>{' '}
                    {siteConfig.location.landmark}
                  </p>
                  <p className="flex items-start gap-1.5 pt-1">
                    <Car className="w-3.5 h-3.5 text-[#0E7C86] shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-[#0B2A4A]">Parking:</strong> {siteConfig.location.parking}
                    </span>
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#0B2A4A] text-xs font-semibold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0E7C86]" />
                  Call {siteConfig.contact.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-semibold transition-colors border border-emerald-200"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Embedded Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md">
          <div className="p-4 bg-slate-100 flex items-center justify-between border-b border-slate-200">
            <span className="text-xs font-bold text-[#0B2A4A] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#0E7C86]" />
              The Promenade, General Mathenge Drive, Westlands, Nairobi
            </span>
            <a
              href="https://maps.google.com/maps?q=The+Promenade+General+Mathenge+Drive+Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#0E7C86] hover:underline font-semibold flex items-center gap-1"
            >
              Open in Google Maps <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="relative w-full h-80 sm:h-96 bg-slate-200">
            <iframe
              src={siteConfig.location.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lumina Dental and Physio Clinic Westlands Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
