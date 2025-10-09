'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Pricing() {
  const router = useRouter();
  const [hoveredPlan, setHoveredPlan] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const plans = [
    {
      name: '1 Month',
      price: 35,
      duration: '1 month',
      plan_type: '1_month',
      icon: '🚀',
      color: 'blue',
      features: [
        'Unlimited lead generation',
        'Email validation',
        'Export to CSV/Excel',
        'Basic analytics',
        'Email support'
      ]
    },
    {
      name: '3 Months',
      price: 95,
      duration: '3 months',
      plan_type: '3_months',
      popular: true,
      savings: 'Save $10',
      icon: '⭐',
      color: 'purple',
      features: [
        'Everything in 1 Month',
        'Advanced analytics',
        'API access',
        'Priority support',
        'Custom integrations'
      ]
    },
    {
      name: '6 Months',
      price: 170,
      duration: '6 months',
      plan_type: '6_months',
      savings: 'Save $40',
      icon: '💎',
      color: 'indigo',
      features: [
        'Everything in 3 Months',
        'Dedicated account manager',
        'White-label options',
        'Advanced API features',
        '24/7 phone support'
      ]
    },
    {
      name: '1 Year',
      price: 250,
      duration: '1 year',
      plan_type: '1_year',
      savings: 'Save $170',
      icon: '🔥',
      color: 'pink',
      features: [
        'Everything in 6 Months',
        'Unlimited API calls',
        'Custom development',
        'Training sessions',
        'SLA guarantee'
      ]
    },
    {
      name: 'Lifetime',
      price: 450,
      duration: 'forever',
      plan_type: 'lifetime',
      savings: 'Best Value',
      icon: '👑',
      color: 'amber',
      features: [
        'All features included',
        'Lifetime updates',
        'VIP support',
        'Early access to new features',
        'No recurring payments'
      ]
    }
  ];

  const handleBuyNow = (plan) => {
    router.push(`/checkout?plan=${plan.plan_type}&price=${plan.price}`);
  };

  return (
    <section id="pricing" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-5xl h-96 bg-gradient-to-r from-primary-200 to-secondary-200 rounded-full filter blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="gradient-bg text-white px-6 py-2 rounded-full text-sm font-bold shimmer">
              PRICING PLANS
            </span>
          </div>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
            Choose the plan that fits your business needs. All plans include core features with premium support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 group
                ${plan.popular ? 'border-primary-500 shadow-2xl scale-105' : 'border-gray-200 shadow-lg hover-lift'}
                ${isVisible ? 'fade-in-up' : 'opacity-0'}
              `}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20">
                  <span className="gradient-bg text-white px-5 py-2 rounded-full text-sm font-bold shadow-xl shimmer whitespace-nowrap">
                    ⚡ Most Popular
                  </span>
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && !plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg">
                    💰 {plan.savings}
                  </span>
                </div>
              )}

              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.popular ? 'from-primary-400 to-secondary-500' : 'from-gray-100 to-gray-200'} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-3xl">{plan.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
                    {plan.name}
                  </h3>
                </div>

                {/* Price */}
                <div className="text-center mb-8">
                  <div className="flex items-start justify-center mb-2">
                    <span className="text-2xl font-bold mt-2">$</span>
                    <span className={`text-6xl font-bold gradient-text transition-all duration-300 ${hoveredPlan === index ? 'scale-110' : ''}`}>
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-gray-500 font-medium">for {plan.duration}</p>
                  {plan.popular && (
                    <div className="mt-2">
                      <span className="text-xs bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-bold">
                        Best ROI
                      </span>
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 group/item"
                      style={{
                        transitionDelay: `${idx * 50}ms`,
                        opacity: hoveredPlan === index ? 1 : 0.8
                      }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-gray-900 transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  onClick={() => handleBuyNow(plan)}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 relative overflow-hidden group/btn ${
                    plan.popular
                      ? 'gradient-bg text-white shadow-xl hover:shadow-2xl hover-glow'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Buy Now
                    <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  {!plan.popular && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-600 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  )}
                </button>
              </div>

              {/* Floating Corner Decoration */}
              <div className={`absolute -top-1 -right-1 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full filter blur-xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Payment Info */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col md:flex-row items-center gap-4 bg-white px-8 py-6 rounded-2xl shadow-lg border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="font-bold text-gray-900">Secure Payments</p>
                <p className="text-sm text-gray-600">Cryptocurrency supported</p>
              </div>
            </div>
            <div className="hidden md:block w-px h-10 bg-gray-300" />
            <div className="flex gap-2 text-xs text-gray-500">
              <span className="px-3 py-1 bg-gray-100 rounded-full font-medium">USDC</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full font-medium">USDT</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full font-medium">SOL</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full font-medium">BTC</span>
              <span className="px-3 py-1 bg-gray-100 rounded-full font-medium">ETH</span>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>30-day money-back guarantee on all plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}
