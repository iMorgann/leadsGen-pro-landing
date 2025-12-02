export default function Footer() {
  return (
    <footer className="gradient-bg text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">LeadsGen Pro</h3>
            <p className="text-blue-100">
              Professional lead generation software for businesses of all sizes.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
              <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="mailto:support@leadsgen-pro.shop" className="hover:text-white transition-colors">Email Support</a></li>
              <li><a href="https://t.me/irootbck" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Telegram</a></li>
              <li><a href="/faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/refund" className="hover:text-white transition-colors">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-300/30 pt-8 text-center text-blue-100">
          <p>&copy; {new Date().getFullYear()} LeadsGen Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
