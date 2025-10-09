'use client';

export default function Contact() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email Support',
      content: 'support@leadsgen-pro.shop',
      description: "We'll respond within 24 hours",
      link: 'mailto:support@leadsgen-pro.shop',
      gradient: 'from-blue-500 to-indigo-600'
    },
    {
      icon: '💬',
      title: 'Telegram',
      content: '@rootbck',
      description: 'Chat with us directly on Telegram',
      link: 'https://t.me/rootbck',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: '⏰',
      title: 'Support Hours',
      content: '24/7 Support Available',
      description: "We're always here when you need us",
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  const faqs = [
    {
      question: 'How do I activate my license?',
      answer: "After purchasing, you'll receive a license key via email. Enter it in the software to activate."
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept USDC, USDT, Solana, Litecoin, Bitcoin, and Ethereum.'
    },
    {
      question: 'Can I get a refund?',
      answer: "We offer a 30-day money-back guarantee if you're not satisfied."
    },
    {
      question: 'Do you offer technical support?',
      answer: 'Yes! All plans include email and Telegram support. Premium plans get priority support.'
    }
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-96 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full filter blur-3xl opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="gradient-bg text-white px-6 py-2 rounded-full text-sm font-bold">
              CONTACT US
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help 24/7 with responsive support across all channels
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-transparent transition-all duration-500 hover-lift fade-in-left stagger-${index + 1}`}
              >
                {/* Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 -z-10`} style={{ padding: '2px' }}>
                  <div className="w-full h-full bg-white rounded-2xl" />
                </div>

                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-white rounded-xl flex items-center justify-center">
                      <span className="text-3xl">{method.icon}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-2 group-hover:text-primary-600 transition-colors">
                      {method.title}
                    </h3>
                    {method.link ? (
                      <a
                        href={method.link}
                        target={method.link.startsWith('http') ? '_blank' : undefined}
                        rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-primary-600 hover:text-primary-700 font-semibold text-lg block mb-2 hover:underline"
                      >
                        {method.content}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-semibold text-lg mb-2">{method.content}</p>
                    )}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {method.description}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  {method.link && (
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  )}
                </div>
              </div>
            ))}

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-bold text-gray-900 mb-1">Fast Response Time</p>
                  <p className="text-sm text-gray-600">Average response time under 2 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-br from-primary-500 to-secondary-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity" />
            <div className="relative bg-gradient-to-br from-primary-500 to-secondary-600 p-8 md:p-10 rounded-3xl text-white shadow-2xl">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-3">Frequently Asked Questions</h3>
                <p className="text-blue-100">Quick answers to common questions</p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className={`pb-6 border-b border-white/20 last:border-0 last:pb-0 fade-in-up stagger-${index + 1}`}
                  >
                    <h4 className="font-bold text-lg mb-2 flex items-start gap-2">
                      <span className="text-yellow-300 flex-shrink-0">Q:</span>
                      <span>{faq.question}</span>
                    </h4>
                    <p className="text-blue-100 leading-relaxed pl-6">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <a
                  href="#pricing"
                  className="block w-full bg-white text-primary-600 px-6 py-4 rounded-xl font-bold text-center hover:bg-blue-50 transition-all shadow-xl hover-lift"
                >
                  Still have questions? Get Started →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-gray-50 px-8 py-6 rounded-2xl border border-gray-200">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border-4 border-white flex items-center justify-center text-white font-bold">
                J
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-600 border-4 border-white flex items-center justify-center text-white font-bold">
                M
              </div>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 border-4 border-white flex items-center justify-center text-white font-bold">
                S
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-gray-900">Join our community</p>
              <p className="text-sm text-gray-600">10,000+ businesses trust LeadsGen Pro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
