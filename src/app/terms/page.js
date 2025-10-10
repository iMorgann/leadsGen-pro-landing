import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for LeadsGen Pro - Legal agreement for using our software and services.',
};

export default function TermsOfService() {
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
          <h1 className="text-4xl md:text-5xl font-bold">Terms of Service</h1>
          <p className="mt-4 text-blue-100 text-lg">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By purchasing, downloading, installing, or using LeadsGen Pro ("the Software"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Software.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">2. License Grant</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">2.1 License Types</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Upon payment and activation, we grant you a limited, non-exclusive, non-transferable license to use the Software according to your purchased plan:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Personal License:</strong> Single user on one device</li>
              <li><strong>Professional License:</strong> Single user on up to 3 devices</li>
              <li><strong>Business License:</strong> Up to 5 users within one organization</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">2.2 License Restrictions</h3>
            <p className="text-gray-700 leading-relaxed mb-4">You may NOT:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Share, rent, lease, or lend your license key</li>
              <li>Reverse engineer, decompile, or disassemble the Software</li>
              <li>Remove or modify any proprietary notices</li>
              <li>Use the Software for illegal purposes</li>
              <li>Resell or redistribute the Software</li>
              <li>Use the Software to violate third-party terms of service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Account & License Activation</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You are responsible for maintaining the confidentiality of your license key and account credentials. You agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide accurate and complete information during registration</li>
              <li>Keep your license key secure and confidential</li>
              <li>Notify us immediately of any unauthorized use</li>
              <li>Accept responsibility for all activities under your license</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">4.1 Pricing</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All prices are listed in USD. We reserve the right to modify pricing with 30 days notice for existing customers.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">4.2 Subscription Plans</h3>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Monthly subscriptions renew automatically until canceled</li>
              <li>Annual subscriptions renew automatically at the end of the billing period</li>
              <li>Lifetime licenses include lifetime access with no recurring fees</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-800 mb-3">4.3 Cancellation</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              You may cancel your subscription at any time. Cancellation takes effect at the end of the current billing period. No partial refunds for unused time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Acceptable Use Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree to use the Software responsibly and legally. Prohibited uses include:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Violating any laws or regulations</li>
              <li>Infringing on intellectual property rights</li>
              <li>Harvesting data in violation of website terms of service</li>
              <li>Spamming or sending unsolicited communications</li>
              <li>Attempting to breach security measures</li>
              <li>Interfering with the Software's operation</li>
            </ul>
            <p className="text-gray-700 leading-relaxed bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <strong>Important:</strong> You are responsible for ensuring your use of the Software complies with all applicable laws, including data protection regulations (GDPR, CCPA) and website terms of service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The Software, including all code, design, graphics, and documentation, is owned by LeadsGen Pro and protected by copyright and intellectual property laws. This license does not grant you ownership of the Software.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Updates and Maintenance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may provide updates, upgrades, and bug fixes at our discretion. Updates may:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Add new features or improve existing ones</li>
              <li>Fix bugs and security vulnerabilities</li>
              <li>Modify or remove features</li>
              <li>Require acceptance of modified Terms</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">8. Warranty Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4 bg-gray-100 p-6 rounded-lg border border-gray-300">
              THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND. WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE UNINTERRUPTED OR ERROR-FREE OPERATION.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4 bg-gray-100 p-6 rounded-lg border border-gray-300">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, LEADSGEN PRO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID FOR THE SOFTWARE IN THE PAST 12 MONTHS.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">10. Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate your license immediately if you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Violate these Terms</li>
              <li>Fail to pay applicable fees</li>
              <li>Use the Software for illegal purposes</li>
              <li>Share or distribute your license key</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Upon termination, you must cease all use of the Software and delete all copies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms are governed by and construed in accordance with the laws of the jurisdiction in which LeadsGen Pro operates, without regard to conflict of law principles.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">12. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will notify users of material changes via email. Continued use of the Software constitutes acceptance of modified Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">13. Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-gray-700 mb-2">For questions about these Terms, contact us:</p>
              <p className="text-gray-700 mb-2">Email: <a href="mailto:legal@leadsgen-pro.shop" className="text-primary-600 hover:text-primary-700">legal@leadsgen-pro.shop</a></p>
              <p className="text-gray-700 mb-2">Support: <a href="mailto:support@leadsgen-pro.shop" className="text-primary-600 hover:text-primary-700">support@leadsgen-pro.shop</a></p>
              <p className="text-gray-700">Website: <a href="https://leadsgen-pro.shop" className="text-primary-600 hover:text-primary-700">https://leadsgen-pro.shop</a></p>
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
