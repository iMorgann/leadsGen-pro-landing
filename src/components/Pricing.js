'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Pricing — dark + purple bracketed aesthetic.
 *
 * Layout
 *  - Section header with `}` glyph and PRICING superscript index
 *  - Five plan cards in a responsive grid (3 cols on lg, 2 on md, 1 on sm)
 *  - "Most popular" plan gets a purple ring + glow
 *  - "Lifetime" plan gets a subtle amber accent
 */
const PLANS = [
  {
    name: '1 Month',
    price: 35,
    plan_type: '1_month',
    tag: '01',
    blurb: 'Try the full toolset for a full month.',
    features: [
      'All 3 active scrapers',
      'Telegram bot remote control',
      'CSV / XLSX export',
      'Email support',
    ],
  },
  {
    name: '3 Months',
    price: 95,
    plan_type: '3_months',
    tag: '02',
    badge: 'Save $10',
    popular: true,
    blurb: 'Most popular for teams running weekly campaigns.',
    features: [
      'Everything in 1 Month',
      'Concurrent search engines',
      'Advanced dork templates',
      'Priority support',
    ],
  },
  {
    name: '6 Months',
    price: 170,
    plan_type: '6_months',
    tag: '03',
    badge: 'Save $40',
    blurb: 'Six months of campaigns, with deeper support.',
    features: [
      'Everything in 3 Months',
      'Common Crawl + WARC cache',
      'Custom integration help',
      'Telegram support channel',
    ],
  },
  {
    name: '1 Year',
    price: 250,
    plan_type: '1_year',
    tag: '04',
    badge: 'Save $170',
    blurb: 'Best annual rate — locked-in updates included.',
    features: [
      'Everything in 6 Months',
      'All future v2.x updates',
      'Setup walkthrough call',
      'SLA-grade response',
    ],
  },
  {
    name: 'Lifetime',
    price: 450,
    plan_type: 'lifetime',
    tag: '05',
    badge: 'Best value',
    accent: 'amber',
    blurb: 'Pay once, scrape forever.',
    features: [
      'Every feature, forever',
      'All lifetime updates',
      'VIP support queue',
      'Early access to v3.x beta',
    ],
  },
];

export default function Pricing() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  useEffect(() => setShow(true), []);

  const goToCheckout = (plan) => {
    router.push(`/checkout?plan=${plan.plan_type}&price=${plan.price}`);
  };

  return (
    <section id="pricing" className="relative overflow-hidden bg-dark-base py-24 text-white">
      {/* Glow accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[700px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.30),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <header className={`mb-14 max-w-3xl transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>
          <p className="mb-4 text-[12px] font-medium tracking-[0.22em] text-primary-300">
            PRICING
            <sup className="ml-1 -translate-y-1 text-[9px] tracking-normal text-white/45">09</sup>
          </p>
          <h2 className="text-balance text-4xl font-light leading-tight md:text-5xl">
            <span className="text-primary-300">{'}'}</span> Simple, transparent
            <span className="text-white/95"> licenses</span>
          </h2>
          <p className="mt-4 max-w-xl text-white/65">
            Pick a window or pay once. All plans include the desktop app, the
            Telegram bot, lifetime activations, and unlimited campaigns.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard
              key={plan.plan_type}
              plan={plan}
              onChoose={() => goToCheckout(plan)}
            />
          ))}
        </div>

        <p className="mt-10 text-center text-xs tracking-[0.18em] text-white/45">
          USD · LIFETIME ACTIVATIONS · 30-DAY MONEY-BACK · TAX INCLUDED WHERE APPLICABLE
        </p>
      </div>
    </section>
  );
}

/* ---------- card ---------- */

function PlanCard({ plan, onChoose }) {
  const isPopular = !!plan.popular;
  const isAmber = plan.accent === 'amber';

  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-3xl
                  bg-dark-card/95 p-7 ring-1 transition
                  ${isPopular
                    ? 'ring-primary-400/60 shadow-[0_0_40px_-10px_rgba(168,85,247,0.55)]'
                    : isAmber
                      ? 'ring-amber-glow/40'
                      : 'ring-white/5 hover:ring-primary-300/40'}`}
    >
      {/* Top row: tag + badge */}
      <div className="mb-6 flex items-center justify-between text-xs tracking-[0.18em] text-white/50">
        <span>
          <span className="text-primary-300">{`}`}</span>
          <span className="ml-2">{plan.tag}</span>
        </span>
        {plan.badge && (
          <span
            className={`rounded-full px-3 py-1 text-[10px] font-medium tracking-[0.14em]
                        ${isAmber
                          ? 'bg-amber-glow/15 text-amber-glow'
                          : 'bg-primary-500/15 text-primary-200'}`}
          >
            {plan.badge}
          </span>
        )}
      </div>

      <div className="text-2xl font-medium md:text-[28px]">{plan.name}</div>
      <p className="mt-1 text-sm text-white/60">{plan.blurb}</p>

      <div className="mt-6 flex items-baseline gap-2">
        <span className={`text-[64px] font-light leading-none tracking-tight
                          ${isPopular ? 'text-primary-300' : isAmber ? 'text-amber-glow' : 'text-white'}`}>
          ${plan.price}
        </span>
        <span className="text-xs tracking-[0.18em] text-white/45">USD</span>
      </div>

      <ul className="mt-7 space-y-2.5 text-sm text-white/75">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-2">
            <span className="mt-0.5 text-primary-300">{'›'}</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onChoose}
        className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full
                    px-6 py-3 text-xs font-medium tracking-[0.20em] uppercase transition
                    ${isPopular
                      ? 'bg-primary-500 text-white hover:bg-primary-400 hover:shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)]'
                      : isAmber
                        ? 'bg-amber-glow/90 text-black hover:bg-amber-glow'
                        : 'bg-white/8 text-white ring-1 ring-white/10 hover:bg-white/12 hover:ring-primary-300/40'}`}
      >
        Choose plan
        <span aria-hidden className="transition group-hover:translate-x-0.5">→</span>
      </button>
    </div>
  );
}
