'use client';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-text">LeadsGen Pro</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#download" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Download
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </a>
            <a
              href="#pricing"
              className="gradient-bg text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-all"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </a>
              <a href="#download" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Download
              </a>
              <a href="#contact" className="text-gray-700 hover:text-primary-600 font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <a
                href="#pricing"
                className="gradient-bg text-white px-6 py-2 rounded-lg font-semibold text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
