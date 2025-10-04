'use client';
import { useRouter } from 'next/navigation';

export default function Pricing() {
  const router = useRouter();

  const plans = [
    {
      name: '1 Month',
      price: 35,
      duration: '1 month',
      plan_type: '1_month',
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
    <section id="pricing" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include core features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-6 border-2 hover-lift ${
                plan.popular
                  ? 'border-primary-500 shadow-xl'
                  : 'border-gray-200 shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="gradient-bg text-white px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              {plan.savings && !plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {plan.savings}
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold">${plan.price}</span>
                </div>
                <p className="text-gray-500">for {plan.duration}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleBuyNow(plan)}
                className={`w-full py-3 rounded-lg font-bold transition-all ${
                  plan.popular
                    ? 'gradient-bg text-white hover:opacity-90'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All payments are secure and processed via cryptocurrency (USDC, USDT, SOL, LTC, BTC, ETH)
          </p>
        </div>
      </div>
    </section>
  );
}
