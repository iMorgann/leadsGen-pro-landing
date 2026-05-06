'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

/**
 * Hero — bracketed dark/purple aesthetic.
 *
 * Layout
 *  - Top-left: wordmark
 *  - Top-right: nav-style chips with superscript indices
 *  - Two-column body: huge headline w/ `}` bracket left, brief description + CTA right
 *  - Bottom row: large rounded dark stat tiles (3 cards) with a hairline curve overlay
 *
 * No third-party imagery; everything is layered with Tailwind utilities + a single
 * SVG hairline arc for the abstract circle motif.
 */
export default function Hero() {
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-dark-base text-white">
      {/* Background gradient glow — concentrates light upper-right of headline */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-10%] h-[900px] w-[900px] rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.55),transparent_70%)]" />
        <div className="absolute top-1/3 left-[-5%] h-[600px] w-[600px] rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_70%)]" />
      </div>

      {/* Hairline arc — abstract circle behind the title (matches reference design) */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="arcStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.55)" />
            <stop offset="100%" stopColor="rgba(168,85,247,0.0)" />
          </linearGradient>
        </defs>
        <circle cx="640" cy="540" r="640" fill="none"
                stroke="url(#arcStroke)" strokeWidth="1.2" />
        <circle cx="900" cy="500" r="420" fill="none"
                stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
      </svg>

      {/* ─── Top bar ────────────────────────────── */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
        <Link href="/" className="font-mono text-base tracking-wide text-white">
          <span className="text-primary-300">LeadsGen</span>
          <span className="text-primary-400">{'}'}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavChip href="#features" label="FEATURES"  index="07" />
          <NavChip href="#pricing"  label="PRICING"   index="09" />
          <NavChip href="/docs"     label="DOCS"      index="05" />
          <NavChip href="#download" label="DOWNLOAD"  index="v2.1" />
        </nav>
      </header>

      {/* ─── Body ────────────────────────────── */}
      <div className="relative z-10 mx-auto grid max-w-[1280px] gap-12 px-6 pt-8 md:grid-cols-12 md:px-12 md:pt-16">
        {/* Headline column */}
        <div className={`md:col-span-7 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <h1 className="text-balance font-medium leading-[0.95] tracking-tight text-white">
            <span className="block text-[44px] sm:text-[64px] md:text-[88px]">
              <span className="text-primary-300 mr-3">{'}'}</span>
              <span className="font-light">LeadsGen Pro</span>
            </span>
            <span className="mt-2 block text-[34px] font-light text-white/95 sm:text-[48px] md:text-[64px]">
              Is your All-in-One
            </span>
            <span className="mt-1 block text-[34px] font-light text-white/95 sm:text-[48px] md:text-[64px]">
              Business Lead
            </span>
            <span className="mt-1 block text-[44px] font-light text-white sm:text-[60px] md:text-[80px]">
              Extraction Engine
            </span>
          </h1>
        </div>

        {/* Description + CTA column */}
        <div className={`md:col-span-5 md:pt-12 transition-all duration-700 delay-150 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="max-w-md text-base leading-relaxed text-white/80 md:text-[15px]">
            <span className="mr-2 text-primary-300">{'}'}</span>
            Renowned for powering high-volume B2B lead workflows with Google Maps,
            Common Crawl &amp; Emails/Phones scrapers, concurrent search engines, and
            full Telegram remote control — solve CAPTCHAs from your phone, get the
            final XLSX delivered to your chat.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#download"
              className="group inline-flex items-center gap-3 rounded-full
                         bg-black/70 px-7 py-4 text-sm font-medium tracking-[0.18em]
                         uppercase text-white ring-1 ring-white/15
                         transition hover:bg-black hover:ring-primary-300/60"
            >
              Download v2.1.0
              <span aria-hidden className="text-primary-300 transition group-hover:translate-x-0.5">
                →
              </span>
            </Link>
            <Link
              href="#pricing"
              className="text-sm tracking-[0.18em] uppercase text-white/70 underline-offset-4 hover:text-primary-200 hover:underline"
            >
              Get a license
            </Link>
          </div>
        </div>
      </div>

      {/* ─── Stat tiles ────────────────────────────── */}
      <div className="relative z-10 mt-16 px-6 pb-16 md:px-12 md:pb-24">
        <div className="mx-auto grid max-w-[1280px] gap-5 md:grid-cols-3">
          <StatTile
            primary="3"
            primaryClass="text-primary-300"
            title="Source scrapers"
            sub="Google Maps · Emails/Phones · Common Crawl"
          />
          <StatTile
            primary="10k+"
            primaryClass="text-white"
            title="Leads per run"
            sub="Concurrent engines · de-dup on (email, phone)"
          />
          <StatTile
            primary="🤖"
            primaryClass="text-primary-300"
            title="Telegram remote"
            sub="Inline-button menu · live status · CAPTCHA solve"
          />
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------------- */

function NavChip({ href, label, index }) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center text-[12px]
                 font-medium tracking-[0.22em] text-white/85 hover:text-white"
    >
      {label}
      <sup className="ml-1 -translate-y-1 text-[9px] tracking-normal text-white/45 group-hover:text-primary-300">
        {index}
      </sup>
    </Link>
  );
}

function StatTile({ primary, primaryClass = 'text-white', title, sub }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-dark-card/95
                    p-7 ring-1 ring-white/5 backdrop-blur-sm
                    md:p-9">
      <div className={`text-[88px] font-light leading-[0.85] tracking-tight md:text-[120px] ${primaryClass}`}>
        {primary}
      </div>
      <div className="mt-3 text-sm font-medium text-white">{title}</div>
      {sub && <div className="mt-1 text-xs text-white/55">{sub}</div>}
    </div>
  );
}
