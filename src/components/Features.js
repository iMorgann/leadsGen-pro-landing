'use client';
import { useEffect, useRef } from 'react';

const features = [
  {
    icon: '🗺️',
    title: '17+ Scraper Sources',
    description: 'Google Maps, Yelp, Yellow Pages, BBB, Houzz, Thumbtack, TripAdvisor, Manta, Angi, SuperPages, DexKnows and more — all in one tool.',
    gradient: 'from-purple-600 to-violet-700',
    size: 'large',
  },
  {
    icon: '🔍',
    title: 'Dual-Browser Engine',
    description: 'Selenium Undetected Chrome for navigation + Playwright headless for BFS site crawls. Best of both worlds.',
    gradient: 'from-violet-600 to-purple-700',
    size: 'regular',
  },
  {
    icon: '📧',
    title: 'Accurate Email Extraction',
    description: 'File-extension TLD blocklist, retina-pattern filter, BFS crawl across all site pages. No more image filenames as emails.',
    gradient: 'from-purple-500 to-indigo-700',
    size: 'regular',
  },
  {
    icon: '📊',
    title: 'Live Results Table',
    description: 'Real-time row-by-row table populates as the scraper runs. No wait for completion — watch leads appear instantly.',
    gradient: 'from-violet-500 to-purple-700',
    size: 'large',
  },
  {
    icon: '💾',
    title: 'Triple Export Formats',
    description: 'XLSX + CSV + TXT written simultaneously to your results/ folder on every save. Zero extra steps.',
    gradient: 'from-purple-600 to-fuchsia-700',
    size: 'regular',
  },
  {
    icon: '⚡',
    title: 'CAPTCHA Resilient',
    description: 'Discord/Telegram notifications, manual skip button, and Playwright visible window for easy manual CAPTCHA solving.',
    gradient: 'from-fuchsia-600 to-purple-700',
    size: 'regular',
  },
];

export default function Features() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.feature-item');
            items.forEach((item, index) => {
              setTimeout(() => item.classList.add('visible'), index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="py-24 px-4 bg-[#0d0520] relative overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-10"
           style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.4), transparent)' }} />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full filter blur-3xl opacity-10"
           style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4), transparent)' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="bg-purple-900/40 border border-purple-700/40 text-purple-300 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Extract at Scale</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            17+ sources. Dual-browser extraction. Live results. Triple export.
            Built for speed and accuracy.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item opacity-0 transition-all duration-700 group
                ${feature.size === 'large' ? 'lg:col-span-2' : ''}
                bento-item`}
              style={{ transform: 'translateY(20px)' }}
            >
              {/* Gradient hover overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />

              {/* Icon */}
              <div className="relative mb-5">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-[#0d0520] rounded-[14px] flex items-center justify-center">
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Hover arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Corner glow on hover */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-3xl">
                <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} blur-2xl opacity-30`} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-3 bg-[#12102a] border border-purple-900/40 px-8 py-4 rounded-full">
            <div className="flex -space-x-2">
              {['from-purple-600 to-violet-700', 'from-violet-500 to-purple-700', 'from-fuchsia-600 to-purple-700'].map((g, i) => (
                <div key={i} className={`w-7 h-7 rounded-full bg-gradient-to-br ${g} ring-2 ring-[#12102a]`} />
              ))}
            </div>
            <span className="text-gray-400 font-medium text-sm">17,000+ businesses scraped daily</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .feature-item.visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}
