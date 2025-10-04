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
            Generate High-Quality Leads
            <br />
            <span className="text-blue-200">With LeadsGen Pro</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Advanced lead generation software with real-time validation,
            automated workflows, and powerful analytics to grow your business.
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
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-blue-100">Leads Generated Daily</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-blue-100">Email Accuracy</div>
            </div>
            <div className="glass-effect p-6 rounded-xl">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
