'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Documentation() {
  const [activeTab, setActiveTab] = useState('quick-start');

  const tabs = [
    { id: 'quick-start', label: '🚀 Quick Start', icon: '🚀' },
    { id: 'installation', label: '⚙️ Installation', icon: '⚙️' },
    { id: 'features', label: '✨ Features', icon: '✨' },
    { id: 'tutorials', label: '📖 Tutorials', icon: '📖' },
    { id: 'best-practices', label: '💡 Best Practices', icon: '💡' },
    { id: 'troubleshooting', label: '🔧 Troubleshooting', icon: '🔧' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="gradient-bg text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Documentation</h1>
          <p className="mt-4 text-blue-100 text-lg">
            Everything you need to know about LeadsGen Pro
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Tab Navigation */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-2 border-b border-gray-200 min-w-max pb-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-t-lg font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'gradient-bg text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">

          {/* Quick Start */}
          {activeTab === 'quick-start' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Start Guide</h2>
              <p className="text-gray-700 text-lg mb-8">
                Get up and running with LeadsGen Pro in just a few minutes. Follow these simple steps to start extracting business data.
              </p>

              <div className="space-y-8">
                {/* Step 1 */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-bg text-white flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Download & Install</h3>
                    <p className="text-gray-700 mb-3">
                      Download LeadsGen Pro for your operating system from the <Link href="/#download" className="text-primary-600 hover:text-primary-700 font-semibold">download section</Link>.
                      Extract the ZIP file and run the installer. Follow the on-screen instructions to complete installation.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-sm text-gray-600 mb-2"><strong>System Requirements:</strong></p>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Windows 10/11, macOS 10.14+, or Linux (Ubuntu 20.04+)</li>
                        <li>• 4GB RAM minimum (8GB recommended)</li>
                        <li>• 500MB free disk space</li>
                        <li>• Stable internet connection</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-bg text-white flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Activate Your License</h3>
                    <p className="text-gray-700 mb-3">
                      Launch LeadsGen Pro and click "Activate License" on the welcome screen. Enter the license key sent to your email and click "Activate".
                      Your software will connect to our servers and validate your license.
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-blue-800"><strong>💡 Tip:</strong> Can't find your license key? Check your spam folder or contact support@leadsgen-pro.shop</p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-bg text-white flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Configure Your First Search</h3>
                    <p className="text-gray-700 mb-4">On the main dashboard:</p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700 mb-3">
                      <li>Select a platform (Google Maps, Yelp, Yellow Pages, etc.)</li>
                      <li>Enter your search query (e.g., "restaurants", "dentists", "real estate agents")</li>
                      <li>Specify the location (city, state, or country)</li>
                      <li>Set any filters (rating, open now, specific categories)</li>
                      <li>Click "Start Extraction"</li>
                    </ol>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-bg text-white flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Extract & Export Data</h3>
                    <p className="text-gray-700 mb-3">
                      Watch as LeadsGen Pro automatically extracts business data. The progress bar shows real-time status.
                      When complete, review the results and export to your preferred format (CSV, Excel, JSON).
                    </p>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <p className="text-sm text-green-800"><strong>✅ Success!</strong> You've completed your first extraction. The data is now ready to use in your CRM or marketing campaigns.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-gradient-to-r from-primary-50 to-secondary-50 p-6 rounded-xl border border-primary-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 What's Next?</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Explore advanced filters and search options</li>
                  <li>• Set up automated extraction schedules</li>
                  <li>• Configure proxy settings for larger extractions</li>
                  <li>• Join our community for tips and best practices</li>
                </ul>
              </div>
            </div>
          )}

          {/* Installation */}
          {activeTab === 'installation' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Installation Guide</h2>

              <div className="space-y-10">
                {/* Windows */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🪟</span> Windows Installation
                  </h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Download LeadsGenPro.zip from the download section</li>
                    <li>Extract the ZIP file to your preferred location (e.g., C:\Program Files\LeadsGenPro)</li>
                    <li>Right-click on LeadsGenPro-Setup.exe and select "Run as administrator"</li>
                    <li>Follow the installation wizard (accept license agreement, choose install location)</li>
                    <li>Click "Install" and wait for the process to complete</li>
                    <li>Launch LeadsGen Pro from the desktop shortcut or Start Menu</li>
                  </ol>
                  <div className="mt-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-800"><strong>⚠️ Windows Defender Warning:</strong> You may see a SmartScreen warning. Click "More info" → "Run anyway". This is normal for new software.</p>
                  </div>
                </div>

                {/* macOS */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🍎</span> macOS Installation
                  </h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Download LeadsGenPro-Mac.zip from the download section</li>
                    <li>Double-click the ZIP file to extract it (or use Archive Utility)</li>
                    <li>Drag the LeadsGen Pro app to your Applications folder</li>
                    <li>Open Applications and double-click LeadsGen Pro</li>
                    <li>If you see "Cannot open app from unidentified developer", go to System Preferences → Security & Privacy → General → Click "Open Anyway"</li>
                    <li>The app will now launch successfully</li>
                  </ol>
                  <div className="mt-4 bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800"><strong>💡 macOS Tip:</strong> For macOS 10.15+, you may need to grant permissions in Security & Privacy settings for network access.</p>
                  </div>
                </div>

                {/* Linux */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                    <span className="text-3xl">🐧</span> Linux Installation
                  </h3>
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>Download LeadsGenPro-Linux.zip from the download section</li>
                    <li>Extract the ZIP file: <code className="bg-gray-100 px-2 py-1 rounded text-sm">unzip LeadsGenPro-Linux.zip</code></li>
                    <li>Navigate to the extracted directory: <code className="bg-gray-100 px-2 py-1 rounded text-sm">cd LeadsGenPro</code></li>
                    <li>Make the installer executable: <code className="bg-gray-100 px-2 py-1 rounded text-sm">chmod +x install.sh</code></li>
                    <li>Run the installer: <code className="bg-gray-100 px-2 py-1 rounded text-sm">sudo ./install.sh</code></li>
                    <li>Launch from terminal: <code className="bg-gray-100 px-2 py-1 rounded text-sm">leadsgen-pro</code> or use your application launcher</li>
                  </ol>
                  <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-sm text-gray-700 mb-2"><strong>Dependencies:</strong> Most systems have required dependencies pre-installed. If you encounter issues, install:</p>
                    <code className="block bg-gray-900 text-green-400 p-3 rounded text-sm mt-2">
                      sudo apt-get install libgtk-3-0 libnotify4 libnss3 libxss1 libxtst6 xdg-utils libatspi2.0-0 libappindicator3-1 libsecret-1-0
                    </code>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Features */}
          {activeTab === 'features' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Features Overview</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Feature Cards */}
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                  <div className="text-4xl mb-3">🗺️</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multi-Platform Support</h3>
                  <p className="text-gray-700 text-sm">
                    Extract data from Google Maps, Yelp, Yellow Pages, and Bing Places. More platforms added regularly based on user feedback.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Bulk Extraction</h3>
                  <p className="text-gray-700 text-sm">
                    Extract thousands of business listings in minutes. No manual limits - extract as much data as you need for your projects.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Advanced Filtering</h3>
                  <p className="text-gray-700 text-sm">
                    Filter by rating, business hours, keywords, location radius, and more. Get exactly the leads you need with precision targeting.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                  <div className="text-4xl mb-3">📊</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Multiple Export Formats</h3>
                  <p className="text-gray-700 text-sm">
                    Export to CSV, Excel (XLSX), JSON, or TXT. Customize field selection and save export templates for repeated use.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Proxy Support</h3>
                  <p className="text-gray-700 text-sm">
                    Configure HTTP/HTTPS/SOCKS5 proxies for anonymous extraction. Supports proxy rotation for large-scale operations (Premium feature).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200">
                  <div className="text-4xl mb-3">🤖</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Automation</h3>
                  <p className="text-gray-700 text-sm">
                    Schedule automated extractions to run at specific times. Set up recurring jobs to keep your lead database fresh and up-to-date.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                  <div className="text-4xl mb-3">📧</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Email Extraction</h3>
                  <p className="text-gray-700 text-sm">
                    Automatically find and extract email addresses from business websites. Includes email verification to ensure deliverability.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
                  <div className="text-4xl mb-3">🔄</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Duplicate Removal</h3>
                  <p className="text-gray-700 text-sm">
                    Intelligent duplicate detection ensures clean data. Merge duplicates based on name, address, phone, or custom criteria.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Tutorials */}
          {activeTab === 'tutorials' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Video Tutorials & Guides</h2>

              <div className="space-y-8">
                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">📺 Getting Started</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">01.</span>
                      <div>
                        <strong>Installation & Activation</strong> - Learn how to install LeadsGen Pro and activate your license (5 mins)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">02.</span>
                      <div>
                        <strong>Your First Extraction</strong> - Complete walkthrough of extracting business data from Google Maps (8 mins)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">03.</span>
                      <div>
                        <strong>Understanding the Dashboard</strong> - Tour of the interface and key features (6 mins)
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎓 Advanced Techniques</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">04.</span>
                      <div>
                        <strong>Advanced Filtering & Search</strong> - Master filters to get high-quality, targeted leads (12 mins)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">05.</span>
                      <div>
                        <strong>Using Proxies for Large Extractions</strong> - Configure proxies to extract thousands of leads safely (10 mins)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">06.</span>
                      <div>
                        <strong>Email Finding & Verification</strong> - Extract verified email addresses from business websites (15 mins)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">07.</span>
                      <div>
                        <strong>Automation & Scheduling</strong> - Set up automated extractions to run on a schedule (9 mins)
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💼 Industry-Specific Use Cases</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">08.</span>
                      <div>
                        <strong>Real Estate Lead Generation</strong> - Find real estate agents, brokers, and property managers (14 mins)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">09.</span>
                      <div>
                        <strong>Restaurant & Hospitality Marketing</strong> - Build targeted lists for restaurant marketing campaigns (11 mins)
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary-600 font-bold">10.</span>
                      <div>
                        <strong>B2B Lead Generation</strong> - Extract business contacts for B2B sales and outreach (16 mins)
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary-50 p-6 rounded-xl border border-primary-200">
                  <p className="text-gray-700 mb-4">
                    <strong>📺 Access Full Video Library:</strong> Premium video tutorials are available on our YouTube channel and in-app help center.
                  </p>
                  <a href="mailto:support@leadsgen-pro.shop" className="text-primary-600 hover:text-primary-700 font-semibold">
                    Request access to video tutorials →
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Best Practices */}
          {activeTab === 'best-practices' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Best Practices</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">✅ Data Quality Tips</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Use specific search terms</strong> - Instead of "restaurants", try "italian restaurants" or "fine dining restaurants" for better targeted results
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Filter by rating</strong> - Extract only businesses with 4+ stars to ensure quality leads that are actively maintained
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Verify emails</strong> - Use the built-in email verification feature to remove invalid email addresses before outreach
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Remove duplicates</strong> - Always run duplicate detection before exporting to clean your data
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">⚡ Performance Optimization</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Start with smaller searches</strong> - Test with 50-100 results first to verify settings before large extractions
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Use proxies for large jobs</strong> - For extractions over 1,000 records, configure proxy rotation to avoid rate limiting
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <strong>Schedule during off-peak hours</strong> - Run large extractions at night when platform traffic is lower
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🔒 Compliance & Ethics</h3>
                  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <strong>Respect platform terms of service</strong> - Use extracted data responsibly and in compliance with platform guidelines
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <strong>Follow GDPR/CCPA regulations</strong> - Ensure proper consent and data handling when contacting leads
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <strong>Don't spam</strong> - Use extracted data for legitimate business purposes only, not unsolicited mass marketing
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <strong>Keep data secure</strong> - Store extracted data securely and don't share sensitive business information publicly
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">💡 Pro Tips</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-5 rounded-lg border border-purple-200">
                      <p className="text-gray-800 font-semibold mb-2">Save Search Templates</p>
                      <p className="text-sm text-gray-600">Create reusable search templates for frequently used queries to save time</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-5 rounded-lg border border-green-200">
                      <p className="text-gray-800 font-semibold mb-2">Batch Processing</p>
                      <p className="text-sm text-gray-600">Process multiple searches simultaneously to maximize efficiency</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200">
                      <p className="text-gray-800 font-semibold mb-2">Custom Export Fields</p>
                      <p className="text-sm text-gray-600">Select only the fields you need to reduce file size and improve CRM imports</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-5 rounded-lg border border-orange-200">
                      <p className="text-gray-800 font-semibold mb-2">Regular Updates</p>
                      <p className="text-sm text-gray-600">Keep LeadsGen Pro updated to access new features and platform support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Troubleshooting */}
          {activeTab === 'troubleshooting' && (
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Troubleshooting Guide</h2>

              <div className="space-y-8">
                <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    License Activation Issues
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Problem: "Invalid license key" error</p>
                      <p className="text-sm"><strong>Solution:</strong> Double-check for typos, ensure no extra spaces, copy-paste directly from email, verify you're using the correct key for your plan</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Problem: "Maximum activations reached"</p>
                      <p className="text-sm"><strong>Solution:</strong> Deactivate license on unused devices (Settings → License → Deactivate) or contact support to reset activations</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Problem: "Cannot connect to license server"</p>
                      <p className="text-sm"><strong>Solution:</strong> Check internet connection, disable VPN temporarily, allow LeadsGen Pro through firewall, verify system date/time is correct</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    Extraction Problems
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Problem: No results returned</p>
                      <p className="text-sm"><strong>Solution:</strong> Verify search query is correct, broaden location search, check if platform is accessible in your region, try different search terms</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Problem: "Rate limited" errors</p>
                      <p className="text-sm"><strong>Solution:</strong> Reduce extraction speed in Settings → Performance, enable proxy rotation (Premium), wait 15-30 minutes before retrying, spread large extractions over time</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Problem: Incomplete data extracted</p>
                      <p className="text-sm"><strong>Solution:</strong> Some businesses don't publish all information. Enable "Deep scan" in Settings, try alternative platforms for same businesses</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Problem: Extraction stops midway</p>
                      <p className="text-sm"><strong>Solution:</strong> Check internet connection stability, disable power saving mode, ensure sufficient disk space, restart extraction from last checkpoint</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Application Issues
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <div>
                      <p className="font-semibold mb-1">Problem: App won't launch</p>
                      <p className="text-sm"><strong>Solution:</strong> Restart computer, run as administrator (Windows), check Security & Privacy settings (Mac), reinstall application, verify system requirements</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Problem: App crashes frequently</p>
                      <p className="text-sm"><strong>Solution:</strong> Update to latest version, clear app cache (Settings → Advanced → Clear Cache), disable antivirus temporarily, check error logs (Help → View Logs)</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Problem: Slow performance</p>
                      <p className="text-sm"><strong>Solution:</strong> Close other applications, increase allocated memory (Settings → Performance), disable unnecessary features, clear old extraction history</p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🆘 Still Need Help?</h3>
                  <p className="text-gray-700 mb-4">
                    If you can't find a solution to your problem, our support team is here to help:
                  </p>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> <a href="mailto:support@leadsgen-pro.shop" className="text-primary-600 hover:text-primary-700 font-semibold">support@leadsgen-pro.shop</a></p>
                    <p><strong>Telegram:</strong> <a href="https://t.me/rootbck" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold">@rootbck</a> (Fastest response)</p>
                    <p><strong>In-App:</strong> Help → Contact Support</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-4">
                    When contacting support, include: your license key, operating system, LeadsGen Pro version, and detailed description of the issue with screenshots if possible.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Access Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/faq" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">❓</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">FAQ</h3>
            <p className="text-sm text-gray-600">Frequently asked questions</p>
          </Link>
          <Link href="/refund" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💰</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Refund Policy</h3>
            <p className="text-sm text-gray-600">30-day guarantee details</p>
          </Link>
          <a href="mailto:support@leadsgen-pro.shop" className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📧</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Contact Support</h3>
            <p className="text-sm text-gray-600">Get personalized help</p>
          </a>
        </div>

        {/* Back to Home Button */}
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
