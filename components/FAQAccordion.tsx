'use client';

import React, { useState } from 'react';
import { siteConfig, FAQItem } from '@/src/siteConfig';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQAccordionProps {
  initialCategory?: 'all' | 'dental' | 'physio' | 'insurance' | 'general';
  limit?: number;
}

export function FAQAccordion({ initialCategory = 'all', limit }: FAQAccordionProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'dental' | 'physio' | 'insurance' | 'general'>(initialCategory);
  const [openIds, setOpenIds] = useState<string[]>([siteConfig.faqs[0]?.id || 'faq-1']);

  const toggleItem = (id: string) => {
    setOpenIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = siteConfig.faqs.filter(faq => {
    if (activeCategory === 'all') return true;
    return faq.category === activeCategory;
  });

  const displayFaqs = limit ? filteredFaqs.slice(0, limit) : filteredFaqs;

  return (
    <div className="w-full">
      {/* Category selector */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#E8F6F5] rounded-xl max-w-xl mx-auto mb-8">
        {(
          [
            { id: 'all', label: 'All Questions' },
            { id: 'dental', label: 'Dental Care' },
            { id: 'physio', label: 'Physiotherapy' },
            { id: 'insurance', label: 'Insurance & Billing' },
          ] as const
        ).map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeCategory === cat.id
                ? 'bg-white text-[#0B2A4A] shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Accordion items */}
      <div className="space-y-3 max-w-3xl mx-auto">
        {displayFaqs.map(faq => {
          const isOpen = openIds.includes(faq.id);
          return (
            <div
              key={faq.id}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? 'border-[#0E7C86]/40 bg-white shadow-xs'
                  : 'border-slate-200 bg-white/70 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-center justify-between text-left p-4 sm:p-5 gap-4"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-[#0E7C86] text-white' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm sm:text-base text-[#0B2A4A]">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-[#0E7C86]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
