'use client';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Animated counters
    const animateCounter = (setter, target, duration = 2000) => {
      const steps = 60;
      const increment = target / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(current));
        }
      }, duration / steps);
    };

    setTimeout(() => {
      animateCounter(setCount1, 6);
      animateCounter(setCount2, 1000);
      animateCounter(setCount3, 10);
    }, 500);
  }, []);

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Generate particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    left: Math.random() * 100,
    delay: Math.random() * 20,
    duration: Math.random() * 10 + 15
  }));

  return (
    <section className="relative gradient-bg text-white py-24 px-4 overflow-hidden min-h-screen flex items-center">
      {/* Animated Particles Background */}
      <div className="particles-bg">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Extract Business Data
            <br />
            <span className="text-blue-200 inline-block mt-2">
              From Multiple Platforms
            </span>
          </h1>

          {/* Subheading */}
          <p className={`text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
            Powerful business information extractor that scrapes Google Maps, Yelp, Yellow Pages and more.
            Get verified business contacts, emails, and complete profiles in seconds.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-up stagger-3' : 'opacity-0'}`}>
            <button
              onClick={scrollToPricing}
              className="group relative bg-white text-primary-600 px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all hover-lift shadow-2xl overflow-hidden"
            >
              <span className="relative z-10">Get Started Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-500 opacity-0 group-hover:opacity-10 transition-opacity" />
            </button>
            <a
              href="#features"
              className="group glass-effect text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/20 transition-all hover-lift border-2 border-white/30"
            >
              <span className="flex items-center gap-2">
                Learn More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>

          {/* Animated Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className={`glass-effect p-8 rounded-2xl hover-lift card-shadow-lg transition-all duration-1000 delay-400 ${isVisible ? 'scale-in stagger-4' : 'opacity-0'}`}>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-white">
                {count1}+
              </div>
              <div className="text-blue-100 text-lg">Data Platforms Supported</div>
              <div className="mt-3 text-sm text-blue-200">
                Google Maps, Yelp, Yellow Pages & more
              </div>
            </div>

            <div className={`glass-effect p-8 rounded-2xl hover-lift card-shadow-lg shimmer transition-all duration-1000 delay-500 ${isVisible ? 'scale-in stagger-5' : 'opacity-0'}`}>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-white">
                {count2.toLocaleString()}s
              </div>
              <div className="text-blue-100 text-lg">Businesses Extracted/Min</div>
              <div className="mt-3 text-sm text-blue-200">
                Lightning-fast bulk extraction
              </div>
            </div>

            <div className={`glass-effect p-8 rounded-2xl hover-lift card-shadow-lg transition-all duration-1000 delay-600 ${isVisible ? 'scale-in stagger-6' : 'opacity-0'}`}>
              <div className="text-5xl md:text-6xl font-bold mb-3 text-white">
                {count3}+
              </div>
              <div className="text-blue-100 text-lg">Data Fields Per Business</div>
              <div className="mt-3 text-sm text-blue-200">
                Complete business profiles
              </div>
            </div>
          </div>

          {/* Floating Action Indicators */}
          <div className={`mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'fade-in' : 'opacity-0'}`}>
            <div className="flex justify-center items-center gap-3 text-blue-200">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/40 font-bold">
                  🗺️
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/40 font-bold">
                  📧
                </div>
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/40 font-bold">
                  📊
                </div>
              </div>
              <span className="text-sm font-medium">Trusted by thousands of businesses worldwide</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
