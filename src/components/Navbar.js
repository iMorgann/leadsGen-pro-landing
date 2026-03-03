'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0a14]/95 backdrop-blur-lg border-b border-purple-900/40 shadow-lg shadow-purple-900/10'
          : 'bg-[#0a0a14]/80 backdrop-blur-md border-b border-purple-900/20'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#7c3aed] to-[#a855f7] rounded-lg flex items-center justify-center shadow-lg shadow-purple-900/40">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5}
                  d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">LeadsGen Pro</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {['#features', '#pricing', '#download'].map((href, i) => {
              const labels = ['Features', 'Pricing', 'Download'];
              return (
                <a
                  key={href}
                  href={href}
                  className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
                >
                  {labels[i]}
                </a>
              );
            })}
            <a
              href="/docs"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            >
              Docs
            </a>
          </div>

          {/* Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 px-3 py-1.5"
            >
              Log In
            </a>
            <a
              href="#download"
              className="flex items-center gap-2 bg-[#1a1040] border border-purple-500/50 hover:border-purple-400/70 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-[#1f1450] hover:shadow-lg hover:shadow-purple-900/30"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              Download Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-9 h-9 text-gray-400 hover:text-white flex items-center justify-center rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4">
              <span className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'top-2 rotate-45' : 'top-0'}`} />
              <span className={`absolute w-full h-0.5 bg-current top-2 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-purple-900/30 flex flex-col gap-2">
            {['Features', 'Pricing', 'Download', 'Docs'].map((label) => (
              <a
                key={label}
                href={label === 'Docs' ? '/docs' : `#${label.toLowerCase()}`}
                className="text-gray-400 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-white/5 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="#download"
              className="mt-2 text-center bg-[#1a1040] border border-purple-500/50 text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Download Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
