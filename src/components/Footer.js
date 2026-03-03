export default function Footer() {
  return (
    <footer className="bg-[#07060f] text-white py-12 px-4 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LeadsGen Pro</h3>
            <p className="text-gray-500">
              Professional lead generation software for businesses of all sizes.
              v2.1.0 — Mar 2026.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4 text-gray-300">Product</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
              <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4 text-gray-300">Support</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="mailto:support@leadsgen-pro.shop" className="hover:text-white transition-colors">Email Support</a></li>
              <li><a href="https://t.me/irootbck" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4 text-gray-300">Legal</h4>
            <ul className="space-y-2 text-gray-500">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/refund" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/20 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} LeadsGen Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
