import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppLayoutClient } from '@/components/AppLayoutClient';
import { siteConfig } from '@/src/siteConfig';

export const viewport: Viewport = {
  themeColor: '#0E7C86',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${siteConfig.name} | Westlands, Nairobi`,
  description: `${siteConfig.subTagline} Services include general dentistry, orthodontics, teeth whitening, sports injury rehab, and spine physiotherapy. Accepts major Kenyan insurers & M-Pesa.`,
  keywords: [
    'dentist nairobi',
    'dental clinic westlands',
    'physiotherapist nairobi',
    'sports injury clinic kenya',
    'teeth whitening nairobi',
    'clear aligners kenya',
    'back pain physiotherapy westlands',
    'lumina clinic nairobi',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.websiteUrl }],
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    url: siteConfig.websiteUrl,
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.subTagline,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.hero,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Interior in Westlands Nairobi`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} – ${siteConfig.tagline}`,
    description: siteConfig.subTagline,
    images: [siteConfig.images.hero],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.shortName,
    url: siteConfig.websiteUrl,
    description: siteConfig.subTagline,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    priceRange: 'KES 3,500 - 85,000',
    currenciesAccepted: 'KES',
    paymentAccepted: 'M-Pesa, Credit Card, Direct Insurance Settlement',
    medicalSpecialty: ['Dentistry', 'Orthodontics', 'Physiotherapy', 'SportsMedicine'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${siteConfig.location.building}, ${siteConfig.location.street}`,
      addressLocality: siteConfig.location.area,
      addressRegion: siteConfig.location.city,
      postalCode: siteConfig.location.postalCode,
      addressCountry: 'KE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.location.coordinates.latitude,
      longitude: siteConfig.location.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '16:00',
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="bg-white text-slate-800 antialiased selection:bg-[#E8F6F5] selection:text-[#0B2A4A]">
        <AppLayoutClient>{children}</AppLayoutClient>
      </body>
    </html>
  );
}
