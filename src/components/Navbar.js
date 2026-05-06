'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

/**
 * Sticky top navbar — minimal wordmark + small-caps tracked links with
 * superscript indices. Stays out of the way until the user scrolls past
 * the hero, then fades into a translucent dark bar.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/5 bg-dark-base/85 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 md:px-12">
        <Link href="/" className="font-mono text-base tracking-wide text-white">
          <span className="text-primary-300">LeadsGen</span>
          <span className="text-primary-400">{'}'}</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          <NavChip href="#features" label="FEATURES" index="07" />
          <NavChip href="#pricing"  label="PRICING"  index="09" />
          <NavChip href="/docs"     label="DOCS"     index="05" />
          <NavChip href="/faq"      label="FAQ"      index="04" />
          <NavChip href="#download" label="DOWNLOAD" index="v2.1" highlight />
        </div>

        {/* Mobile burger */}
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="rounded-full border border-white/10 px-3 py-2 text-xs tracking-[0.2em] text-white/85 md:hidden"
        >
          {mobileOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="border-t border-white/5 bg-dark-base/95 px-6 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            <MobileLink href="#features" onClick={() => setMobileOpen(false)}>Features</MobileLink>
            <MobileLink href="#pricing"  onClick={() => setMobileOpen(false)}>Pricing</MobileLink>
            <MobileLink href="/docs"     onClick={() => setMobileOpen(false)}>Docs</MobileLink>
            <MobileLink href="/faq"      onClick={() => setMobileOpen(false)}>FAQ</MobileLink>
            <MobileLink href="#download" onClick={() => setMobileOpen(false)} highlight>Download v2.1.0</MobileLink>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavChip({ href, label, index, highlight = false }) {
  return (
    <Link
      href={href}
      className={`group relative inline-flex items-center text-[12px]
                  font-medium tracking-[0.22em] transition-colors
                  ${highlight ? 'text-primary-200' : 'text-white/85'} hover:text-white`}
    >
      {label}
      <sup className={`ml-1 -translate-y-1 text-[9px] tracking-normal
                       ${highlight ? 'text-primary-300' : 'text-white/45 group-hover:text-primary-300'}`}>
        {index}
      </sup>
    </Link>
  );
}

function MobileLink({ href, children, onClick, highlight = false }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`text-sm tracking-[0.18em] uppercase
                  ${highlight ? 'text-primary-200' : 'text-white/85'} hover:text-white`}
    >
      {children}
    </Link>
  );
}
