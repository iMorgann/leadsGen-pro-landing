'use client';

export default function Hero() {
  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="gradient-bg text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Extract Business Data
            <br />
            <span className="text-blue-200">From Multiple Platforms</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Powerful business information extractor that scrapes Google Maps, Yelp, Yellow Pages and more.
            Get verified business contacts, emails, and complete profiles in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToPricing}
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover-lift"
            >
              Get Started Now
            </button>
            <a
              href="#features"
              className="glass-effect text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">6+</div>
              <div className="text-blue-100">Data Platforms Supported</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">1000s</div>
              <div className="text-blue-100">Businesses Extracted/Min</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-blue-100">Data Fields Per Business</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
