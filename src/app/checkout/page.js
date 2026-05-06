'use client';
import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import api from '@/services/api';
import toast, { Toaster } from 'react-hot-toast';
import QRCode from 'qrcode.react';
import Link from 'next/link';

const PLAN_NAMES = {
  '1_month':  '1 Month',
  '3_months': '3 Months',
  '6_months': '6 Months',
  '1_year':   '1 Year',
  'lifetime': 'Lifetime',
};

const CRYPTO = [
  { coin: 'USDC', icon: '/assets/usdc.png' },
  { coin: 'USDT', icon: '/assets/usdt.png' },
  { coin: 'SOL',  icon: '/assets/sol.png'  },
  { coin: 'LTC',  icon: '/assets/ltc.png'  },
  { coin: 'BTC',  icon: '/assets/btc.png'  },
  { coin: 'ETH',  icon: '/assets/eth.png'  },
];

function CheckoutContent() {
  const router = useRouter();
  const sp = useSearchParams();

  const [step, setStep] = useState(1); // 1 details · 2 crypto · 2.5 network · 3 pay
  const [form, setForm] = useState({
    email: '',
    plan_type: sp.get('plan')  || '1_month',
    amount:    sp.get('price') || 35,
  });
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [networks, setNetworks] = useState([]);
  const [addresses, setAddresses] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  /* ---------- handlers ---------- */
  const onEmailNext = (e) => {
    e.preventDefault();
    if (!form.email.includes('@')) {
      toast.error('Enter a valid email address');
      return;
    }
    setStep(2);
  };

  const onPickCrypto = async (crypto) => {
    setSelectedCrypto(crypto);
    setLoading(true);
    try {
      const r = await api.createOrder({
        user_email: form.email,
        plan_type:  form.plan_type,
        amount:     parseFloat(form.amount),
        coin:       crypto.coin,
      });
      if (r.success) {
        setOrderId(r.order.order_id);
        setAddresses(r.crypto_addresses);
        if (r.crypto_addresses.length > 1) {
          setNetworks(r.crypto_addresses);
          setStep(2.5);
        } else {
          setStep(3);
        }
        toast.success('Order created');
      } else {
        toast.error(r.error || 'Failed to create order');
      }
    } catch (err) {
      toast.error(err?.response?.data?.error || 'Failed to create order');
    } finally {
      setLoading(false);
    }
  };

  const onPickNetwork = (network) => {
    setAddresses(addresses.filter((a) => a.network === network));
    setStep(3);
  };

  const onSubmitTxid = async (e) => {
    e.preventDefault();
    const txid = e.target.txid.value;
    if (!txid || txid.length < 10) {
      toast.error('Enter a valid transaction ID');
      return;
    }
    setLoading(true);
    try {
      const r = await api.submitTxid(orderId, txid);
      if (r.success) {
        toast.success('TXID submitted — redirecting…');
        setTimeout(() => router.push(`/order/${orderId}`), 1200);
      } else {
        toast.error(r.error || 'Failed to submit TXID');
      }
    } catch {
      toast.error('Failed to submit TXID');
    } finally {
      setLoading(false);
    }
  };

  /* ---------- ui ---------- */
  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-base text-white">
      <Toaster position="top-center" toastOptions={{ style: { background: '#12102a', color: '#fff', border: '1px solid rgba(168,85,247,0.4)' } }} />

      {/* Glow accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.30),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:py-20 md:px-8">
        {/* Header */}
        <header className="mb-10">
          <Link href="/" className="font-mono text-base tracking-wide text-white/85 hover:text-white">
            <span className="text-primary-300">LeadsGen</span>
            <span className="text-primary-400">{'}'}</span>
          </Link>
          <p className="mt-8 text-[12px] font-medium tracking-[0.22em] text-primary-300">
            CHECKOUT
            <sup className="ml-1 -translate-y-1 text-[9px] tracking-normal text-white/45">v2.1</sup>
          </p>
          <h1 className="mt-3 text-balance text-4xl font-light leading-tight md:text-5xl">
            <span className="text-primary-300">{'}'}</span> Complete your purchase
          </h1>
          <p className="mt-3 text-white/60">Crypto-only · license keys delivered by email</p>
        </header>

        {/* Step indicator */}
        <ol className="mb-10 flex items-center gap-3 text-xs tracking-[0.18em] text-white/55">
          <Step active={step >= 1} done={step > 1} label="DETAILS" />
          <Spacer active={step >= 2} />
          <Step active={step >= 2} done={step > 2} label="CRYPTO" />
          <Spacer active={step >= 3} />
          <Step active={step >= 3} done={false}    label="PAYMENT" />
        </ol>

        <div className="rounded-3xl bg-dark-card/95 p-7 ring-1 ring-white/5 md:p-10">
          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-light">Order details</h2>

              <div className="mt-6 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/5">
                <Row label="Plan"   value={PLAN_NAMES[form.plan_type] ?? form.plan_type} />
                <Row label="Amount" value={`$${form.amount} USD`} valueClass="text-primary-300 text-2xl font-light" />
              </div>

              <form onSubmit={onEmailNext} className="mt-7">
                <label className="text-xs font-medium tracking-[0.18em] text-white/60">EMAIL ADDRESS</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl bg-white/[0.04] px-4 py-3.5 text-white
                             placeholder:text-white/30 outline-none ring-1 ring-white/10
                             focus:bg-white/[0.06] focus:ring-primary-300/60"
                />
                <p className="mt-2 text-xs text-white/45">License key delivered to this address.</p>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full
                             bg-primary-500 px-7 py-4 text-xs font-medium tracking-[0.20em] uppercase
                             text-white transition hover:bg-primary-400
                             hover:shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)]"
                >
                  Continue to payment
                  <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-light">Select cryptocurrency</h2>
              <p className="mt-2 text-sm text-white/55">All currencies settle on-chain at the live network rate.</p>

              <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3">
                {CRYPTO.map((c) => (
                  <button
                    key={c.coin}
                    onClick={() => onPickCrypto(c)}
                    disabled={loading}
                    className="group flex items-center gap-3 rounded-2xl bg-white/[0.04] p-4 ring-1 ring-white/10
                               transition hover:bg-white/[0.07] hover:ring-primary-300/60 disabled:opacity-40"
                  >
                    <img src={c.icon} alt={c.coin} className="h-9 w-9" />
                    <span className="text-base font-medium tracking-wide">{c.coin}</span>
                  </button>
                ))}
              </div>

              {loading && (
                <div className="mt-6 flex items-center gap-3 text-sm text-white/65">
                  <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-primary-300 border-t-transparent" />
                  Creating order…
                </div>
              )}

              <button
                onClick={() => setStep(1)}
                className="mt-7 text-xs tracking-[0.20em] uppercase text-white/55 hover:text-white"
              >
                ← Back
              </button>
            </div>
          )}

          {/* Step 2.5 */}
          {step === 2.5 && (
            <div>
              <h2 className="text-2xl font-light">Select network for {selectedCrypto?.coin}</h2>
              <p className="mt-2 text-sm text-white/60">
                This currency settles on multiple chains — pick whichever is cheapest for you.
              </p>

              <div className="mt-6 grid gap-3 md:grid-cols-2">
                {networks.map((n) => (
                  <button
                    key={n.network}
                    onClick={() => onPickNetwork(n.network)}
                    className="rounded-2xl bg-white/[0.04] p-5 text-left ring-1 ring-white/10
                               transition hover:bg-white/[0.07] hover:ring-primary-300/60"
                  >
                    <div className="flex items-center justify-between">
                      <img src={selectedCrypto?.icon} alt="" className="h-8 w-8" />
                      <span className="text-sm font-medium tracking-[0.16em] text-primary-300">
                        {n.network}
                      </span>
                    </div>
                    <div className="mt-3 break-all font-mono text-xs text-white/45">
                      {n.address.slice(0, 28)}…
                    </div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="mt-7 text-xs tracking-[0.20em] uppercase text-white/55 hover:text-white"
              >
                ← Back
              </button>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && addresses.length > 0 && (
            <div>
              <h2 className="text-2xl font-light">Send payment</h2>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1.5 text-xs tracking-[0.16em] text-primary-200 ring-1 ring-primary-300/30">
                ORDER · {orderId}
              </div>

              {addresses.map((addr, i) => (
                <div
                  key={i}
                  className="mt-6 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-white/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={CRYPTO.find((c) => c.coin === addr.coin)?.icon}
                        alt={addr.coin}
                        className="h-10 w-10"
                      />
                      <div>
                        <div className="text-base font-medium">{addr.coin}</div>
                        <div className="text-xs text-white/55">{addr.network} network</div>
                      </div>
                    </div>
                    <div className="text-2xl font-light text-primary-300">${form.amount}</div>
                  </div>

                  <div className="mt-5 flex flex-col items-center gap-5 md:flex-row md:items-start">
                    <div className="rounded-xl bg-white p-3">
                      <QRCode value={addr.address} size={150} />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs tracking-[0.16em] text-white/55">
                        SEND EXACTLY ${form.amount} {addr.coin} TO:
                      </p>
                      <div className="mt-2 break-all rounded-xl bg-black/40 p-3 font-mono text-[12px] text-white/85 ring-1 ring-white/10">
                        {addr.address}
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(addr.address);
                          toast.success('Address copied');
                        }}
                        className="mt-3 text-xs tracking-[0.18em] uppercase text-primary-300 hover:text-primary-200"
                      >
                        Copy address
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <form onSubmit={onSubmitTxid} className="mt-8">
                <label className="text-xs font-medium tracking-[0.18em] text-white/60">
                  TRANSACTION ID (TXID)
                </label>
                <input
                  type="text"
                  name="txid"
                  required
                  placeholder="Paste the on-chain TXID after sending"
                  className="mt-2 w-full rounded-xl bg-white/[0.04] px-4 py-3.5 font-mono text-sm
                             text-white placeholder:text-white/30 outline-none ring-1 ring-white/10
                             focus:bg-white/[0.06] focus:ring-primary-300/60"
                />
                <p className="mt-2 text-xs text-white/45">
                  We verify the transaction and email your license key — usually within a few minutes.
                </p>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full
                             bg-primary-500 px-7 py-4 text-xs font-medium tracking-[0.20em] uppercase
                             text-white transition hover:bg-primary-400 disabled:opacity-50
                             hover:shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)]"
                >
                  {loading ? 'Submitting…' : 'Submit transaction ID'}
                </button>
              </form>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="text-xs tracking-[0.18em] uppercase text-white/55 hover:text-white">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */
function Row({ label, value, valueClass = '' }) {
  return (
    <div className="flex items-center justify-between py-1">
      <span className="text-sm text-white/55">{label}</span>
      <span className={`text-base ${valueClass}`}>{value}</span>
    </div>
  );
}
function Step({ active, done, label }) {
  return (
    <li className={`flex items-center gap-2 ${active ? 'text-primary-200' : 'text-white/35'}`}>
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-medium
                    ${active ? 'bg-primary-500 text-white' : 'bg-white/[0.06] text-white/55'}`}
      >
        {done ? '✓' : ''}
      </span>
      <span>{label}</span>
    </li>
  );
}
function Spacer({ active }) {
  return <span className={`h-px w-10 ${active ? 'bg-primary-300/60' : 'bg-white/10'}`} />;
}

export default function CheckoutPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-dark-base text-white/75">
          Loading…
        </div>
      }
    >
      <CheckoutContent />
    </Suspense>
  );
}
