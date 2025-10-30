'use client';
import { useState, useRef } from 'react';

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const highlights = [
    {
      icon: '⚡',
      title: 'Lightning Fast Extraction',
      description: 'Extract thousands of business records in minutes, not hours',
      gradient: 'from-yellow-400 to-orange-600'
    },
    {
      icon: '🎯',
      title: 'Precise Targeting',
      description: 'Target by keyword, location, and business category across multiple platforms',
      gradient: 'from-blue-400 to-indigo-600'
    },
    {
      icon: '📊',
      title: 'Complete Data Fields',
      description: 'Get phone, email, address, website, reviews, hours and more',
      gradient: 'from-purple-400 to-pink-600'
    }
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-100 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary-100 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="gradient-bg text-white px-6 py-2 rounded-full text-sm font-bold">
              VIDEO DEMO
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            See <span className="gradient-text">LeadsGen Pro</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Watch how to extract thousands of business contacts from Google Maps, Yelp, and other platforms in minutes
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group mb-16">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-secondary-600 rounded-3xl opacity-25 group-hover:opacity-40 blur-lg transition-opacity duration-300" />
          <div className="relative bg-gray-900 rounded-3xl shadow-2xl overflow-hidden">
            <div className="relative" style={{ paddingBottom: '56.25%' }}>
              <video
                ref={videoRef}
                className={`absolute top-0 left-0 w-full h-full ${!isPlaying ? 'pointer-events-none' : ''}`}
                controls
                poster="/assets/video-thumbnail.jpg"
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/assets/LeadsGen-Pro-Demonstration-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Play Button Overlay */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm cursor-pointer z-10"
                  onClick={() => videoRef.current?.play()}
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 pulse-glow">
                    <svg className="w-12 h-12 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Video Stats Bar */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span>Watch Demo</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    12.5K views
                  </span>
                  <span>3:45</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover-lift fade-in-up stagger-${index + 1}`}
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10`} style={{ padding: '2px' }}>
                <div className="w-full h-full bg-white rounded-2xl" />
              </div>

              {/* Icon */}
              <div className="relative mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-primary-600 group-hover:to-secondary-600 transition-all">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden rounded-tr-2xl">
                <div className={`w-full h-full bg-gradient-to-br ${item.gradient} blur-xl transform translate-x-8 -translate-y-8`} />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-gradient-to-r from-gray-50 to-white px-8 py-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="text-left">
              <p className="font-bold text-gray-900 text-lg">Ready to start extracting?</p>
              <p className="text-sm text-gray-600">Join thousands of businesses using LeadsGen Pro</p>
            </div>
            <a
              href="#pricing"
              className="gradient-bg text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all whitespace-nowrap"
            >
              View Pricing →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
