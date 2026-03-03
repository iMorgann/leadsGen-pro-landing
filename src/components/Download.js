'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Download() {
  const [detectedOS, setDetectedOS] = useState('Windows');

  useEffect(() => {
    const ua = window.navigator.userAgent.toLowerCase();
    if (ua.includes('mac')) setDetectedOS('Mac');
    else if (ua.includes('linux')) setDetectedOS('Linux');
    else setDetectedOS('Windows');
  }, []);

  const platforms = [
    {
      name: 'Windows',
      icon: '🪟',
      size: '299MB',
      link: '/download/LeadsGenPro-v2.1.0-Dist.zip',
      primary: true,
      version: 'v2.1.0',
    },
    {
      name: 'Mac',
      icon: '🍎',
      size: 'Coming Soon',
      link: '#',
      primary: false,
      version: 'v2.1.0',
      disabled: true,
    },
    {
      name: 'Linux',
      icon: '🐧',
      size: 'Coming Soon',
      link: '#',
      primary: false,
      version: 'v2.1.0',
      disabled: true,
    },
  ];

  const whatsNew = [
    '5 new scrapers (BBB, Houzz, Thumbtack, TripAdvisor, Manta)',
    'Playwright visible browser for website BFS crawls',
    'Live results table — real-time row-by-row population',
    'TXT mirror auto-saved alongside XLSX in results/',
    'Accurate email extraction — no more image filenames as emails',
    'Auto Playwright Chromium install on first run',
  ];

  return (
    <section id="download" className="py-24 px-4 bg-[#0a0a14] relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10"
           style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.5), transparent)' }} />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full filter blur-3xl opacity-10"
           style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.5), transparent)' }} />

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Section header */}
        <div className="mb-16">
          <div className="inline-block mb-4">
            <span className="bg-purple-900/40 border border-purple-700/40 text-purple-300 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Download
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="gradient-text">Extract Business Leads?</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Download LeadsGen Pro and start extracting verified business contacts from 17+ platforms.
            Your license key is delivered instantly after payment.
          </p>
        </div>

        {/* Download card */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-700 to-violet-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />
          <div className="relative bg-[#12102a] rounded-3xl shadow-2xl p-8 md:p-12 max-w-3xl mx-auto border border-purple-800/30">

            {/* Preview image */}
            <div className="mb-10">
              <div className="relative mb-6 rounded-2xl overflow-hidden border border-purple-800/30 hover:border-purple-600/50 transition-all shadow-xl group/img aspect-video">
                <Image
                  src="/assets/video-thumbnail.jpg"
                  alt="LeadsGen Pro v2.1.0 — Live results table with 17+ scraper sources"
                  fill
                  className="object-cover transform group-hover/img:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 768px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity" />
              </div>

              <div className="text-center">
                <h3 className="text-3xl font-bold mb-2 text-white">LeadsGen Pro</h3>
                <p className="text-purple-300 font-semibold mb-1">v2.1.0 — Mar 2026</p>
                <p className="text-gray-400 text-base mb-4">
                  17+ scraper sources · Dual-browser · Live results table
                </p>
                <div className="flex flex-col sm:flex-row gap-2 items-center justify-center">
                  <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/40 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-purple-300 font-semibold">Windows 10/11 Ready</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-violet-900/30 border border-violet-700/40 px-4 py-2 rounded-full">
                    <svg className="w-4 h-4 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-sm text-violet-300 font-semibold">NEW: Playwright Dual-Browser</span>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-purple-900/20 border border-purple-800/30 px-4 py-2 rounded-full">
                    <span className="text-sm text-gray-300 font-semibold">17+ Scrapers</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Download buttons */}
            <div className="space-y-4 mb-8">
              {platforms.map((platform, index) => {
                const isRecommended = platform.name === detectedOS;
                const isDisabled = platform.disabled;

                return (
                  <div key={index} className="relative">
                    {isRecommended && !isDisabled && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-purple-900/40">
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
                          ? 'bg-[#1a1535]/50 text-gray-600 cursor-not-allowed opacity-50 border border-purple-900/20'
                          : platform.primary
                            ? 'bg-gradient-to-r from-purple-700 to-violet-700 text-white shadow-xl hover:shadow-2xl hover:shadow-purple-900/40 hover:from-purple-600 hover:to-violet-600 transform hover:scale-[1.02]'
                            : 'bg-[#1a1535] text-gray-300 hover:text-white border border-purple-900/30 hover:border-purple-700/50 transform hover:scale-[1.01]'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-3xl">{platform.icon}</span>
                        <div className="text-left">
                          <div className="flex items-center gap-2">
                            <span>Download for {platform.name}</span>
                            {isDisabled && <span className="text-xs bg-[#1a1535] border border-purple-900/30 text-gray-500 px-2 py-0.5 rounded font-normal">Soon</span>}
                          </div>
                          <div className={`text-sm font-normal ${
                            isDisabled ? 'text-gray-600' :
                            platform.primary ? 'text-purple-200' : 'text-gray-500 group-hover/btn:text-gray-300'
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

            {/* What's new */}
            <div className="bg-[#0d0520]/60 border border-purple-900/30 rounded-2xl p-6 text-left mb-6">
              <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-4">What's New in v2.1.0</h4>
              <ul className="space-y-2">
                {whatsNew.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-purple-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Version info */}
            <div className="pt-6 border-t border-purple-900/30">
              <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    Version 2.1.0
                  </span>
                  <span className="text-gray-700">•</span>
                  <span>Released Mar 2026</span>
                  <span className="text-gray-700">•</span>
                  <span className="bg-purple-900/40 border border-purple-700/30 text-purple-400 px-2 py-0.5 rounded text-xs font-bold">NEW</span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Extract ZIP → Run LeadsGenPro-v2.1.0-Setup.exe
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security badge */}
        <div className="inline-flex items-center gap-3 bg-[#12102a] border border-purple-900/30 px-6 py-4 rounded-full">
          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="text-gray-400 font-medium text-sm">Verified & secure download</span>
        </div>
      </div>
    </section>
  );
}
