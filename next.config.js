/** @type {import('next').NextConfig} */

// Single source of truth for the v2.1.0 GitHub Release asset URL.
const RELEASE_ZIP_URL =
  'https://github.com/iMorgann/leadsGen-pro-landing/releases/download/v2.1.0/LeadsGenPro-v2.1.0-Setup.zip';

const nextConfig = {
  reactStrictMode: true,

  // Image Optimization (new domain)
  images: {
    domains: ['leads.thezettahub.com', 'license.thezettahub.com'],
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Performance Optimizations
  compress: true,
  poweredByHeader: false,
  swcMinify: true,

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://leads.thezettahub.com',
  },

  // Redirects: any old /download/* path bounces to the GitHub Release asset
  // so prior emails and order-confirmation links keep working without
  // serving a 100MB+ binary from the Vercel build.
  async redirects() {
    return [
      {
        source: '/download/LeadsGenPro.zip',
        destination: RELEASE_ZIP_URL,
        permanent: false,
      },
      {
        source: '/download/:slug*',
        destination: RELEASE_ZIP_URL,
        permanent: false,
      },
      {
        source: '/downloads/LeadsGenPro-v2.1.0-Setup.zip',
        destination: RELEASE_ZIP_URL,
        permanent: false,
      },
    ];
  },

  // Headers for performance and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-DNS-Prefetch-Control',  value: 'on' },
          { key: 'X-Frame-Options',         value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'X-XSS-Protection',        value: '1; mode=block' },
          { key: 'Referrer-Policy',         value: 'origin-when-cross-origin' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/assets/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
