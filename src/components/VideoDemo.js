'use client';

export default function VideoDemo() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            See <span className="gradient-text">LeadsGen Pro</span> in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how to extract thousands of business contacts from Google Maps, Yelp, and other platforms in minutes
          </p>
        </div>

        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden hover-lift">
          <div className="relative" style={{ paddingBottom: '56.25%' }}>
            <video
              className="absolute top-0 left-0 w-full h-full"
              controls
              poster="/assets/video-thumbnail.jpg"
              preload="metadata"
            >
              <source src="/assets/LeadsGen-Pro-Demonstration-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2">Lightning Fast Extraction</h3>
            <p className="text-gray-600 text-sm">
              Extract thousands of business records in minutes, not hours
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-lg mb-2">Precise Targeting</h3>
            <p className="text-gray-600 text-sm">
              Target by keyword, location, and business category across multiple platforms
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-xl">
            <div className="text-4xl mb-3">📊</div>
            <h3 className="font-bold text-lg mb-2">Complete Data Fields</h3>
            <p className="text-gray-600 text-sm">
              Get phone, email, address, website, reviews, hours and more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
