import Link from 'next/link';

export const metadata = {
  title: 'Refund Policy',
  description: 'LeadsGen Pro 30-Day Money-Back Guarantee - Full refund policy and process information.',
};

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="gradient-bg text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Refund Policy</h1>
          <p className="mt-4 text-blue-100 text-lg">
            30-Day Money-Back Guarantee
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">

          {/* Guarantee Section */}
          <section className="mb-12 bg-blue-50 border-2 border-blue-200 p-8 rounded-xl">
            <div className="flex items-start mb-4">
              <svg className="w-12 h-12 text-blue-600 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">30-Day Money-Back Guarantee</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We stand behind the quality of LeadsGen Pro. If you're not completely satisfied with your purchase,
                  you can request a full refund within 30 days of your purchase date - no questions asked.
                </p>
              </div>
            </div>
          </section>

          {/* Refund Eligibility */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Eligibility</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are eligible for a full refund if:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>You request the refund within 30 days of your original purchase date</li>
              <li>You purchased directly from leadsgen-pro.shop</li>
              <li>Your payment has been successfully processed</li>
              <li>You provide the email address used for purchase</li>
            </ul>
          </section>

          {/* How to Request */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Request a Refund</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Follow these simple steps to request your refund:
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-bg text-white flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Our Support Team</h3>
                  <p className="text-gray-700">
                    Email us at <a href="mailto:refunds@leadsgen-pro.shop" className="text-primary-600 hover:text-primary-700 font-semibold">refunds@leadsgen-pro.shop</a> with the subject line "Refund Request"
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-bg text-white flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Provide Required Information</h3>
                  <p className="text-gray-700 mb-2">Include the following in your email:</p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Purchase email address</li>
                    <li>Order number or transaction ID</li>
                    <li>Reason for refund (optional but helpful)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-bg text-white flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive Confirmation</h3>
                  <p className="text-gray-700">
                    We'll confirm receipt of your request within 24 hours and process your refund
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full gradient-bg text-white flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Refund Processed</h3>
                  <p className="text-gray-700">
                    Your refund will be issued to the original payment method within 5-7 business days
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Processing Time */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Processing Time</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Request Acknowledgment:</strong> Within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Refund Processing:</strong> 1-2 business days</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>Bank/Card Posting:</strong> 3-5 business days (varies by bank)</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Subscription Refunds */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Subscription Refunds</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Monthly Subscriptions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              For monthly subscriptions, you can request a refund for the current billing period if requested within 30 days of the initial purchase. Subsequent months are not eligible for refunds, but you can cancel at any time to prevent future charges.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Annual Subscriptions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Annual subscriptions can be refunded in full if requested within 30 days of purchase. After 30 days, no pro-rated refunds are available, but you can cancel to prevent renewal.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Lifetime Licenses</h3>
            <p className="text-gray-700 leading-relaxed">
              Lifetime licenses are eligible for a full refund within 30 days of purchase.
            </p>
          </section>

          {/* Important Notes */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Important Notes</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
              <ul className="space-y-3 text-gray-700">
                <li><strong>License Deactivation:</strong> Upon refund approval, your license key will be deactivated</li>
                <li><strong>Data Retention:</strong> You may keep any data extracted before the refund, but cannot continue using the software</li>
                <li><strong>One Refund Per Customer:</strong> The 30-day guarantee applies once per customer</li>
                <li><strong>After 30 Days:</strong> Refund requests submitted after 30 days will be reviewed on a case-by-case basis</li>
                <li><strong>Chargebacks:</strong> Please contact us before initiating a chargeback. Chargebacks may result in permanent account suspension</li>
              </ul>
            </div>
          </section>

          {/* Exceptions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Refund Exceptions</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Refunds may not be granted in the following cases:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Requests made more than 30 days after purchase</li>
              <li>Violation of Terms of Service</li>
              <li>Use of the software for illegal activities</li>
              <li>License key sharing or unauthorized distribution</li>
              <li>Purchases made from unauthorized third-party resellers</li>
              <li>Previous refund has already been processed for the same customer</li>
            </ul>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About Refunds?</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-4">
                If you have any questions about our refund policy or need assistance, our support team is here to help:
              </p>
              <div className="space-y-2">
                <p className="text-gray-700"><strong>Refund Requests:</strong> <a href="mailto:refunds@leadsgen-pro.shop" className="text-primary-600 hover:text-primary-700">refunds@leadsgen-pro.shop</a></p>
                <p className="text-gray-700"><strong>General Support:</strong> <a href="mailto:support@leadsgen-pro.shop" className="text-primary-600 hover:text-primary-700">support@leadsgen-pro.shop</a></p>
                <p className="text-gray-700"><strong>Telegram:</strong> <a href="https://t.me/rootbck" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700">@rootbck</a></p>
              </div>
            </div>
          </section>

        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="inline-flex items-center gradient-bg text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
