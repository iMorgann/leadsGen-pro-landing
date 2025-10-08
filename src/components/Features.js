export default function Features() {
  const features = [
    {
      icon: '🗺️',
      title: 'Multi-Platform Extraction',
      description: 'Extract business data from Google Maps, Yelp, Yellow Pages, DexKnows, Angi, Super Pages and more.'
    },
    {
      icon: '📞',
      title: 'Complete Business Data',
      description: 'Collect business names, phone numbers, addresses, websites, categories, reviews, and operating hours.'
    },
    {
      icon: '🎯',
      title: 'Keyword & Location Targeting',
      description: 'Search for businesses by industry keywords and specific locations to find exactly what you need.'
    },
    {
      icon: '📧',
      title: 'Email Enrichment',
      description: 'Automatically find and verify business email addresses with built-in email enrichment capabilities.'
    },
    {
      icon: '📊',
      title: 'Multiple Export Formats',
      description: 'Export your extracted data to Google Maps, XLSX, CSV and other formats for easy integration.'
    },
    {
      icon: '⚡',
      title: 'Bulk Extraction',
      description: 'Extract thousands of business records in minutes with our high-speed bulk extraction engine.'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Business Data Extraction</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to extract, enrich, and export business data from multiple platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl card-shadow hover-lift"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
