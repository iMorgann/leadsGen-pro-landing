export default function Download() {
  return (
    <section id="download" className="py-20 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to <span className="gradient-text">Extract Business Data?</span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Download LeadsGen Pro and start extracting verified business contacts from multiple platforms.
          Your license key will be delivered instantly after payment confirmation.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-2xl mx-auto">
          <div className="mb-8">
            <div className="mb-4 rounded-lg overflow-hidden border-2 border-gray-200 hover:border-primary-500 transition-all">
              <img
                src="/assets/video-thumbnail.jpg"
                alt="LeadsGen Pro - Business Data Extraction Interface"
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2">LeadsGen Pro v2.0</h3>
            <p className="text-gray-600">
              Extract business data from Google Maps, Yelp, Yellow Pages & more
            </p>
            <p className="text-sm text-primary-600 font-semibold mt-2">
              Windows, Mac, Linux supported
            </p>
          </div>

          <div className="space-y-4">
            <a
              href="/download/LeadsGenPro.zip"
              download
              className="block gradient-bg text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all hover-lift"
            >
              📦 Download for Windows (ZIP)
            </a>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/download/LeadsGenPro-Mac.zip"
                download
                className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                📦 Download for Mac (ZIP)
              </a>
              <a
                href="/download/LeadsGenPro-Linux.zip"
                download
                className="bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all"
              >
                📦 Download for Linux (ZIP)
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Version 2.0.0 • Released Oct 2025 • Windows ZIP: 92MB
            </p>
            <p className="text-xs text-gray-400 mt-2">
              📌 Extract the ZIP file and run the installer
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="p-4">
            <div className="text-3xl mb-2">🗺️</div>
            <h4 className="font-bold mb-1">Multi-Platform</h4>
            <p className="text-sm text-gray-600">Google Maps, Yelp, Yellow Pages & more</p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">📊</div>
            <h4 className="font-bold mb-1">Complete Data</h4>
            <p className="text-sm text-gray-600">Business info, contacts, reviews, hours</p>
          </div>
          <div className="p-4">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-bold mb-1">Bulk Extraction</h4>
            <p className="text-sm text-gray-600">Extract thousands in minutes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
