export default function Features() {
  const features = [
    {
      icon: '🎯',
      title: 'Targeted Lead Generation',
      description: 'Find your ideal customers with advanced filtering and targeting capabilities.'
    },
    {
      icon: '✅',
      title: 'Real-Time Validation',
      description: 'Verify email addresses instantly with our built-in validation system.'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Generate thousands of leads in seconds with our optimized engine.'
    },
    {
      icon: '📊',
      title: 'Advanced Analytics',
      description: 'Track performance with detailed analytics and reporting tools.'
    },
    {
      icon: '🔄',
      title: 'Automated Workflows',
      description: 'Set up automated campaigns to save time and increase efficiency.'
    },
    {
      icon: '🔒',
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR and data protection compliance.'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powerful Features for <span className="gradient-text">Lead Generation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to find, validate, and convert high-quality leads
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
