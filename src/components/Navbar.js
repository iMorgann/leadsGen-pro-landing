'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white text-xl font-bold">L</span>
            </div>
            <span className={`font-bold gradient-text transition-all duration-300 ${scrolled ? 'text-xl' : 'text-2xl'}`}>
              LeadsGen Pro
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="relative text-gray-700 hover:text-primary-600 font-medium transition-colors group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#pricing"
              className="relative text-gray-700 hover:text-primary-600 font-medium transition-colors group"
            >
              Pricing
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#download"
              className="relative text-gray-700 hover:text-primary-600 font-medium transition-colors group"
            >
              Download
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              className="relative text-gray-700 hover:text-primary-600 font-medium transition-colors group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-600 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#pricing"
              className="group relative gradient-bg text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-xl transition-all overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 text-gray-700 flex items-center justify-center hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? 'top-2 rotate-45' : 'top-0'
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-current top-2 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-current transform transition-all duration-300 ${
                  mobileMenuOpen ? 'top-2 -rotate-45' : 'top-4'
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="text-gray-700 hover:text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#download"
                className="text-gray-700 hover:text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-primary-600 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="#pricing"
                className="gradient-bg text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-xl transition-all"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
