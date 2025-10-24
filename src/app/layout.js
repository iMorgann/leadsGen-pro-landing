import './globals.css'

export const metadata = {
  metadataBase: new URL('https://www.leadsgen-pro.shop'),
  title: {
    default: 'LeadsGen Pro v2.1 - Business Data Extraction Software | Google Maps, Yelp, Yellow Pages Scraper',
    template: '%s | LeadsGen Pro'
  },
  description: 'Extract verified business contacts from Google Maps, Yelp, Yellow Pages & 11+ platforms. NEW: Email Enrichment V2. Phone numbers, complete profiles. Lifetime license available!',
  keywords: [
    'lead generation software',
    'business data extraction',
    'Google Maps scraper',
    'Yelp scraper',
    'Yellow Pages scraper',
    'email finder',
    'contact extractor',
    'business leads',
    'B2B leads',
    'sales automation',
    'email enrichment',
    'phone number lookup',
    'business contact finder',
    'local business leads',
    'LeadsGen Pro'
  ],
  authors: [{ name: 'LeadsGen Pro' }],
  creator: 'LeadsGen Pro',
  publisher: 'LeadsGen Pro',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://leadsgen-pro.shop',
    siteName: 'LeadsGen Pro',
    title: 'LeadsGen Pro - Extract Business Data from 11+ Platforms',
    description: 'Professional business data extraction tool. Scrape verified contacts, emails, and phone numbers from Google Maps, Yelp, Yellow Pages & more. Email enrichment included.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LeadsGen Pro - Business Data Extraction Software',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LeadsGen Pro - All-in-One Business Data Extraction',
    description: 'Extract verified business contacts from 11+ platforms. Email enrichment, phone numbers, reviews & more.',
    images: ['/og-image.png'],
    creator: '@leadsgen_pro',
  },
  alternates: {
    canonical: 'https://leadsgen-pro.shop',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LeadsGen Pro',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Windows',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '29.99',
      highPrice: '199.99',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
    description: 'Professional business data extraction software that extracts verified contacts, emails, and complete business profiles from Google Maps, Yelp, Yellow Pages, and 11+ platforms.',
    image: 'https://leadsgen-pro.shop/og-image.png',
    url: 'https://leadsgen-pro.shop',
    author: {
      '@type': 'Organization',
      name: 'LeadsGen Pro',
      url: 'https://leadsgen-pro.shop',
    },
    publisher: {
      '@type': 'Organization',
      name: 'LeadsGen Pro',
      logo: {
        '@type': 'ImageObject',
        url: 'https://leadsgen-pro.shop/logo.png',
      },
    },
    softwareVersion: '2.1.0',
    screenshot: 'https://www.leadsgen-pro.shop/screenshot.png',
    featureList: [
      'Google Maps Scraper',
      'Yelp Business Extractor',
      'Yellow Pages Scraper',
      'NEW: Email Enrichment V2',
      'Phone Number Lookup',
      'Instagram Profile Extractor',
      'Chamber of Commerce Data',
      'Proxy Support',
      'Real-time Export (CSV/Excel)',
      'Multiple Browser Support',
      'Bulk Data Processing',
      'Lifetime License Option',
    ],
  }

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
