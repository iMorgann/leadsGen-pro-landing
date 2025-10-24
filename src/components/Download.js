'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Download() {
  const [detectedOS, setDetectedOS] = useState('Windows');

  useEffect(() => {
    // Auto-detect user's operating system
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('mac')) setDetectedOS('Mac');
    else if (userAgent.includes('linux')) setDetectedOS('Linux');
    else setDetectedOS('Windows');
  }, []);

  const platforms = [
    {
      name: 'Windows',
      icon: '🪟',
      size: '93MB',
      link: '/download/LeadsGenPro.zip',
      primary: true,
      version: 'v2.1.0'
    },
    {
      name: 'Mac',
      icon: '🍎',
      size: 'Coming Soon',
      link: '#',
      primary: false,
      version: 'v2.1.0',
      disabled: true
    },
    {
      name: 'Linux',
      icon: '🐧',
      size: 'Coming Soon',
      link: '#',
      primary: false,
      version: 'v2.1.0',
      disabled: true
    }
  ];

  const features = [
    { icon: '🗺️', title: 'Multi-Platform', description: 'Google Maps, Yelp, Yellow Pages & more' },
    { icon: '📊', title: 'Complete Data', description: 'Business info, contacts, reviews, hours' },
    { icon: '⚡', title: 'Bulk Extraction', description: 'Extract thousands in minutes' }
  ];

  return (
    <section id="download" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary-200 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-secondary-200 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="gradient-bg text-white px-6 py-2 rounded-full text-sm font-bold">
              DOWNLOAD
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="gradient-text">Extract Business Data?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Download LeadsGen Pro and start extracting verified business contacts from multiple platforms.
            Your license key will be delivered instantly after payment confirmation.
          </p>
        </div>

        {/* Download Card */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto border border-gray-100">
            {/* Product Preview */}
            <div className="mb-10">
              <div className="relative mb-6 rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-primary-500 transition-all shadow-xl group/img aspect-video">
                <Image
                  src="/assets/video-thumbnail.jpg"
                  alt="LeadsGen Pro Business Data Extraction Software Interface - Extract contacts from Google Maps, Yelp, Yellow Pages"
                  fill
                  className="object-cover transform group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold mb-3 gradient-text">LeadsGen Pro v2.1.0</h3>
                <p className="text-gray-600 text-lg mb-3">
                  Extract business data from Google Maps, Yelp, Yellow Pages & more
                </p>
                <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                  <div className="inline-flex items-center gap-2 bg-primary-50 px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-primary-700 font-bold">
                      Windows 10/11 Ready
                    </span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm text-green-700 font-bold">
                      NEW: Email Enrichment V2
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              {platforms.map((platform, index) => {
                const isRecommended = platform.name === detectedOS;
                const isDisabled = platform.disabled;

                return (
                  <div key={index} className="relative">
                    {isRecommended && !isDisabled && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          ✨ Recommended for you
                        </span>
                      </div>
                    )}
                    <a
                      href={isDisabled ? '#' : platform.link}
                      download={!isDisabled}
                      onClick={(e) => isDisabled && e.preventDefault()}
                      className={`group/btn flex items-center justify-between p-5 rounded-xl font-bold text-lg transition-all ${
                        isDisabled
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                          : `transform hover:scale-105 ${
                              platform.primary
                                ? 'gradient-bg text-white shadow-xl hover:shadow-2xl hover-glow'
                                : 'bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white border-2 border-gray-200 hover:border-gray-900'
                            }`
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{platform.icon}</span>
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <span>Download for {platform.name}</span>
                            {isDisabled && <span className="text-xs bg-gray-300 px-2 py-0.5 rounded">Soon</span>}
                          </div>
                          <div className={`text-sm font-normal ${
                            isDisabled
                              ? 'text-gray-400'
                              : platform.primary
                                ? 'text-blue-100'
                                : 'text-gray-500 group-hover/btn:text-gray-300'
                          }`}>
                            {isDisabled ? 'Under Development' : `ZIP Archive • ${platform.size}`}
                          </div>
                        </div>
                      </div>
                      {!isDisabled && (
                        <svg className="w-6 h-6 group-hover/btn:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                        </svg>
                      )}
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Version Info */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Version 2.1.0
                  </span>
                  <span className="text-gray-300">•</span>
                  <span>Released Oct 24, 2025</span>
                  <span className="text-gray-300">•</span>
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold">NEW</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Extract ZIP → Run LeadsGenPro-v2.1.0-Setup.exe
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover-lift group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h4 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Security Badge */}
        <div className="mt-12 inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-lg border border-gray-100">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-gray-700 font-medium">Verified & secure download</span>
        </div>
      </div>
    </section>
  );
}
