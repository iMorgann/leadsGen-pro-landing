'use client';
import { useEffect, useRef, useState } from 'react';

export default function Features() {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.feature-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: '🗺️',
      title: 'Multi-Platform Extraction',
      description: 'Extract business data from Google Maps, Yelp, Yellow Pages, DexKnows, Angi, Super Pages and more.',
      gradient: 'from-blue-500 to-purple-600',
      size: 'large'
    },
    {
      icon: '📞',
      title: 'Complete Business Data',
      description: 'Collect business names, phone numbers, addresses, websites, categories, reviews, and operating hours.',
      gradient: 'from-purple-500 to-pink-600',
      size: 'regular'
    },
    {
      icon: '🎯',
      title: 'Keyword & Location Targeting',
      description: 'Search for businesses by industry keywords and specific locations to find exactly what you need.',
      gradient: 'from-cyan-500 to-blue-600',
      size: 'regular'
    },
    {
      icon: '📧',
      title: 'Email Enrichment',
      description: 'Automatically find and verify business email addresses with built-in email enrichment capabilities.',
      gradient: 'from-indigo-500 to-purple-600',
      size: 'large'
    },
    {
      icon: '📊',
      title: 'Multiple Export Formats',
      description: 'Export your extracted data to Google Maps, XLSX, CSV and other formats for easy integration.',
      gradient: 'from-pink-500 to-rose-600',
      size: 'regular'
    },
    {
      icon: '⚡',
      title: 'Bulk Extraction',
      description: 'Extract thousands of business records in minutes with our high-speed bulk extraction engine.',
      gradient: 'from-amber-500 to-orange-600',
      size: 'regular'
    }
  ];

  return (
    <section id="features" ref={sectionRef} className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="gradient-bg text-white px-6 py-2 rounded-full text-sm font-bold">
              FEATURES
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Powerful Features for <br />
            <span className="gradient-text">Business Data Extraction</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to extract, enrich, and export business data from multiple platforms with precision and speed.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`feature-item opacity-0 transition-all duration-700 group
                ${feature.size === 'large' ? 'lg:col-span-2 lg:row-span-1' : ''}
                bg-white rounded-3xl p-8 relative overflow-hidden
                hover-lift card-shadow-lg border border-gray-100`}
              style={{
                transform: 'translateY(20px)'
              }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              {/* Icon with Gradient Border */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <span className="text-4xl">{feature.icon}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`w-full h-full bg-gradient-to-br ${feature.gradient} blur-2xl`} />
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 text-gray-600 bg-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-600" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-rose-600" />
            </div>
            <span className="font-medium">Join 10,000+ users extracting business data daily</span>
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
