'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqCategories = [
    {
      category: 'Getting Started',
      icon: '🚀',
      questions: [
        {
          question: 'How do I get started with LeadsGen Pro?',
          answer: 'After purchasing a license, you\'ll receive your license key via email. Download the software for your platform (Windows, Mac, or Linux), install it, and activate it using your license key. The software includes a built-in tutorial to help you get started with your first extraction.'
        },
        {
          question: 'What platforms does LeadsGen Pro support?',
          answer: 'LeadsGen Pro is available for Windows (Windows 10/11), macOS (10.14+), and Linux (Ubuntu 20.04+, Fedora 34+). The software is optimized for all three platforms with native performance.'
        },
        {
          question: 'Do I need technical skills to use LeadsGen Pro?',
          answer: 'No technical skills are required! LeadsGen Pro features an intuitive, user-friendly interface. Simply enter your search criteria (business type, location), select your target platform (Google Maps, Yelp, etc.), and click extract. The software handles everything automatically.'
        }
      ]
    },
    {
      category: 'License & Activation',
      icon: '🔑',
      questions: [
        {
          question: 'How do I activate my license?',
          answer: 'Open LeadsGen Pro and go to Settings > License. Enter your license key that was sent to your email and click "Activate". Your license will be validated instantly. For multi-device licenses, you can activate on additional devices using the same key.'
        },
        {
          question: 'Can I use my license on multiple devices?',
          answer: 'This depends on your license type: Personal licenses work on 1 device, Professional licenses on up to 3 devices, and Business licenses on up to 5 devices. You can deactivate a device in Settings to free up a slot for another device.'
        },
        {
          question: 'What happens if I lose my license key?',
          answer: 'No problem! Contact our support team at support@leadsgen-pro.shop with your purchase email address. We\'ll resend your license key within 24 hours. You can also find it in your original purchase confirmation email.'
        },
        {
          question: 'Can I transfer my license to someone else?',
          answer: 'Licenses are non-transferable and tied to your account. However, if you have a Business license, you can assign it to different team members within your organization. Contact support for special circumstances.'
        }
      ]
    },
    {
      category: 'Features & Usage',
      icon: '⚡',
      questions: [
        {
          question: 'What data can I extract?',
          answer: 'LeadsGen Pro extracts comprehensive business information including: business name, address, phone numbers, email addresses, websites, social media links, business hours, ratings and reviews, category/industry, photos, and more. The exact data depends on what\'s available on each platform.'
        },
        {
          question: 'Which platforms does LeadsGen Pro support?',
          answer: 'Currently, LeadsGen Pro supports Google Maps, Yelp, Yellow Pages, and Bing Places. We\'re constantly adding new platforms based on user feedback. Premium features include advanced filtering and multi-platform batch extraction.'
        },
        {
          question: 'How many leads can I extract?',
          answer: 'There are no artificial limits on the number of leads you can extract! Extract as many as you need. The speed depends on your internet connection and the target platform. On average, you can extract 500-1,000 leads per hour.'
        },
        {
          question: 'Can I export data to Excel or CSV?',
          answer: 'Yes! LeadsGen Pro supports multiple export formats including CSV, Excel (XLSX), JSON, and TXT. You can customize which fields to include in your export and save export templates for future use.'
        },
        {
          question: 'Can I filter and refine my search results?',
          answer: 'Absolutely! Use advanced filters to narrow down results by rating (e.g., only 4+ stars), business hours (open now, 24/7), specific keywords, location radius, and more. You can also exclude specific businesses or categories.'
        }
      ]
    },
    {
      category: 'Troubleshooting',
      icon: '🔧',
      questions: [
        {
          question: 'The software isn\'t extracting data. What should I do?',
          answer: 'First, check your internet connection. Then verify your license is activated (Settings > License). If using a proxy, ensure it\'s configured correctly. Try restarting the software. If the issue persists, check for updates (Help > Check for Updates) or contact support with error details.'
        },
        {
          question: 'I\'m getting "Rate Limited" errors. How do I fix this?',
          answer: 'Some platforms have rate limits to prevent abuse. LeadsGen Pro includes built-in rate limiting to stay within platform guidelines. If you\'re hitting limits, try: reducing extraction speed in Settings, using proxy rotation (Premium feature), or spacing out large extractions over time.'
        },
        {
          question: 'The software won\'t install on my computer.',
          answer: 'Ensure you meet the minimum system requirements. For Windows, run the installer as administrator. For Mac, allow the app in Security & Privacy settings. For Linux, ensure you have necessary dependencies installed. Check our documentation at /docs for detailed installation guides.'
        },
        {
          question: 'How do I update to the latest version?',
          answer: 'Go to Help > Check for Updates. If an update is available, click "Download and Install". The software will download the update and prompt you to restart. Your license and settings will be preserved. We recommend enabling auto-updates in Settings.'
        }
      ]
    },
    {
      category: 'Billing & Refunds',
      icon: '💳',
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express), debit cards, PayPal, and cryptocurrency (Bitcoin, Ethereum, USDT). All payments are processed securely through our payment partners Stripe and PayPal.'
        },
        {
          question: 'Do subscriptions renew automatically?',
          answer: 'Yes, monthly and annual subscriptions renew automatically to ensure uninterrupted service. You\'ll receive an email reminder 7 days before renewal. You can cancel anytime from your account dashboard, and cancellation takes effect at the end of your current billing period.'
        },
        {
          question: 'How do I cancel my subscription?',
          answer: 'Log into your account dashboard, go to Billing > Subscriptions, and click "Cancel Subscription". Your access continues until the end of your current billing period. You can reactivate anytime. No cancellation fees apply.'
        },
        {
          question: 'What is your refund policy?',
          answer: 'We offer a 30-day money-back guarantee, no questions asked. If you\'re not satisfied, email refunds@leadsgen-pro.shop within 30 days of purchase with your order details. Refunds are processed within 5-7 business days. See our full Refund Policy at /refund for details.'
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes! You can upgrade or downgrade anytime from your account dashboard. When upgrading, you\'ll be charged the prorated difference immediately. When downgrading, the change takes effect at your next billing cycle, and you retain current features until then.'
        }
      ]
    },
    {
      category: 'Technical Support',
      icon: '🛟',
      questions: [
        {
          question: 'How do I contact support?',
          answer: 'Reach us via: Email at support@leadsgen-pro.shop (24-48 hour response), Telegram at @rootbck (fastest response), or through the in-app Help > Contact Support feature. Premium and Business license holders get priority support with faster response times.'
        },
        {
          question: 'Do you offer live chat support?',
          answer: 'We offer Telegram support for real-time assistance at @rootbck. For complex issues, we may schedule a screen-sharing session to help resolve your problem quickly. Business license holders can request dedicated support.'
        },
        {
          question: 'Is there documentation or tutorials available?',
          answer: 'Yes! Comprehensive documentation is available at /docs, including quick start guides, video tutorials, best practices, and troubleshooting guides. The software also includes built-in tooltips and a help wizard.'
        },
        {
          question: 'Do you offer training or onboarding?',
          answer: 'Business license holders receive complimentary onboarding and team training. Personal and Professional users have access to video tutorials, written guides, and email support. We also host monthly webinars covering advanced features and best practices.'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="gradient-bg text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h1>
          <p className="mt-4 text-blue-100 text-lg">
            Find answers to common questions about LeadsGen Pro
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Search Prompt */}
        <div className="mb-12 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Can't find what you're looking for? <a href="mailto:support@leadsgen-pro.shop" className="text-primary-600 hover:text-primary-700 font-semibold">Contact our support team</a>
          </p>
        </div>

        {/* FAQ Categories */}
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <h2 className="text-3xl font-bold text-gray-900">{category.category}</h2>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {category.questions.map((faq, questionIndex) => {
                const globalIndex = `${categoryIndex}-${questionIndex}`;
                const isOpen = openIndex === globalIndex;

                return (
                  <div
                    key={questionIndex}
                    className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden transition-all hover:shadow-lg"
                  >
                    {/* Question Button */}
                    <button
                      onClick={() => toggleFAQ(globalIndex)}
                      className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                    >
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                      <svg
                        className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                          isOpen ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Answer */}
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      } overflow-hidden`}
                    >
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Still Need Help Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-2xl border-2 border-primary-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-gray-700 text-lg mb-6">
              Our support team is here to help you succeed with LeadsGen Pro
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href="mailto:support@leadsgen-pro.shop"
                className="inline-flex items-center justify-center gradient-bg text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Support
              </a>
              <a
                href="https://t.me/rootbck"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-primary-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all border-2 border-primary-600 hover:bg-primary-50"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/docs" className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📚</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Documentation</h3>
            <p className="text-sm text-gray-600">Complete guides and tutorials</p>
          </Link>
          <Link href="/refund" className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">💰</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Refund Policy</h3>
            <p className="text-sm text-gray-600">30-day money-back guarantee</p>
          </Link>
          <Link href="/terms" className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all group">
            <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📄</div>
            <h3 className="font-bold text-lg mb-2 group-hover:text-primary-600 transition-colors">Terms of Service</h3>
            <p className="text-sm text-gray-600">Legal terms and conditions</p>
          </Link>
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
