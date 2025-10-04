export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-600">
            Have questions? We're here to help 24/7
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-xl hover-lift">
              <div className="flex items-start">
                <div className="text-3xl mr-4">📧</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Support</h3>
                  <a
                    href="mailto:support@leadsgen-pro.shop"
                    className="text-primary-600 hover:underline"
                  >
                    support@leadsgen-pro.shop
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover-lift">
              <div className="flex items-start">
                <div className="text-3xl mr-4">💬</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Telegram</h3>
                  <a
                    href="https://t.me/rootbck"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:underline"
                  >
                    @rootbck
                  </a>
                  <p className="text-sm text-gray-600 mt-1">
                    Chat with us directly on Telegram
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl hover-lift">
              <div className="flex items-start">
                <div className="text-3xl mr-4">⏰</div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Support Hours</h3>
                  <p className="text-gray-700">24/7 Support Available</p>
                  <p className="text-sm text-gray-600 mt-1">
                    We're always here when you need us
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gradient-to-br from-primary-500 to-secondary-600 p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-1">How do I activate my license?</h4>
                <p className="text-blue-100 text-sm">
                  After purchasing, you'll receive a license key via email. Enter it in the software to activate.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-1">What payment methods do you accept?</h4>
                <p className="text-blue-100 text-sm">
                  We accept USDC, USDT, Solana, Litecoin, Bitcoin, and Ethereum.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-1">Can I get a refund?</h4>
                <p className="text-blue-100 text-sm">
                  We offer a 7-day money-back guarantee if you're not satisfied.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-1">Do you offer technical support?</h4>
                <p className="text-blue-100 text-sm">
                  Yes! All plans include email and Telegram support. Premium plans get priority support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
