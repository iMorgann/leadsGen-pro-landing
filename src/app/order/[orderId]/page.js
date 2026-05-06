'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import api from '@/services/api';
import toast, { Toaster } from 'react-hot-toast';
import Link from 'next/link';

const RELEASE_ZIP_URL =
  'https://github.com/iMorgann/leadsGen-pro-landing/releases/download/v2.1.0/LeadsGenPro-v2.1.0-Setup.zip';

export default function OrderStatusPage() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [polling, setPolling] = useState(true);

  useEffect(() => {
    fetchStatus();
    const id = setInterval(() => polling && fetchStatus(), 10000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderId, polling]);

  const fetchStatus = async () => {
    try {
      const r = await api.getOrderStatus(orderId);
      if (r.success) {
        setOrder(r.order);
        if (r.order.status === 'completed' || r.order.status === 'rejected') {
          setPolling(false);
        }
      } else {
        toast.error('Order not found');
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadLicense = async () => {
    try {
      const blob = await api.downloadLicense(orderId);
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `LeadsGenPro-License-${order.license_key}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
      toast.success('License downloaded');
    } catch {
      toast.error('Failed to download license');
    }
  };

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied');
  };

  /* ------- early returns ------- */
  if (loading) {
    return <CenterShell><Spinner label="Loading order…" /></CenterShell>;
  }
  if (!order) {
    return (
      <CenterShell>
        <div className="text-center">
          <div className="mb-3 text-5xl">⚠</div>
          <div className="text-2xl font-light">Order not found</div>
          <p className="mt-2 text-white/55">The order ID you provided doesn’t match anything in our system.</p>
          <Link
            href="/"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3
                       text-xs font-medium tracking-[0.20em] uppercase text-white
                       transition hover:bg-primary-400"
          >
            Back to home →
          </Link>
        </div>
      </CenterShell>
    );
  }

  const STATUS = {
    pending: {
      tag: 'WAITING FOR PAYMENT',
      title: 'Awaiting your transfer',
      tone: 'amber',
      detail: 'Send the crypto from the checkout step. We’ll see it on-chain.',
    },
    txid_submitted: {
      tag: 'PAYMENT UNDER REVIEW',
      title: 'Verifying your transaction',
      tone: 'purple',
      detail: 'Usually 5–30 minutes. This page polls every 10 seconds — leave it open.',
    },
    completed: {
      tag: 'PAYMENT CONFIRMED',
      title: 'Your license is ready',
      tone: 'green',
      detail: 'Use the key below to activate the desktop app.',
    },
    rejected: {
      tag: 'PAYMENT REJECTED',
      title: 'Could not verify the transaction',
      tone: 'red',
      detail: order.rejection_reason || 'Reach out on Telegram and we’ll sort it out manually.',
    },
  };
  const s = STATUS[order.status] || STATUS.pending;

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-base text-white">
      <Toaster position="top-center" toastOptions={{ style: { background: '#12102a', color: '#fff', border: '1px solid rgba(168,85,247,0.4)' } }} />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[700px] w-[1000px] -translate-x-1/2 rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.30),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:py-20 md:px-8">
        <header className="mb-10">
          <Link href="/" className="font-mono text-base tracking-wide text-white/85 hover:text-white">
            <span className="text-primary-300">LeadsGen</span>
            <span className="text-primary-400">{'}'}</span>
          </Link>
          <p className="mt-8 text-[12px] font-medium tracking-[0.22em] text-primary-300">
            ORDER · <span className="font-mono normal-case tracking-normal text-white/65">{orderId}</span>
          </p>
          <h1 className="mt-3 text-balance text-4xl font-light leading-tight md:text-5xl">
            <span className="text-primary-300">{'}'}</span> {s.title}
          </h1>
          <p className="mt-3 text-white/60">{s.detail}</p>
          <StatusPill tone={s.tone}>{s.tag}</StatusPill>
        </header>

        {/* Order summary */}
        <div className="rounded-3xl bg-dark-card/95 p-7 ring-1 ring-white/5 md:p-9">
          <div className="grid gap-3 sm:grid-cols-2">
            <KV label="Plan"     value={String(order.plan_type).replace(/_/g, ' ')} />
            <KV label="Amount"   value={`$${order.amount}`} valueClass="text-primary-300 text-lg" />
            <KV label="Currency" value={order.coin} />
            <KV label="Email"    value={order.user_email} mono />
            {order.txid && (
              <KV
                label="Transaction"
                value={
                  <span className="flex items-center gap-2">
                    <span className="font-mono">{String(order.txid).slice(0, 16)}…</span>
                    <button onClick={() => copy(order.txid)} className="text-primary-300 hover:text-primary-200">
                      📋
                    </button>
                  </span>
                }
                rawValue
              />
            )}
          </div>

          {/* License key */}
          {order.status === 'completed' && order.license_key && (
            <div className="mt-7 rounded-2xl border border-primary-300/30 bg-primary-500/10 p-5 ring-1 ring-primary-300/40">
              <div className="text-xs tracking-[0.18em] text-primary-200">YOUR LICENSE KEY</div>
              <div className="mt-3 break-all rounded-xl bg-black/40 p-4 text-center font-mono text-xl text-white ring-1 ring-white/10">
                {order.license_key}
              </div>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button
                  onClick={() => copy(order.license_key)}
                  className="flex-1 rounded-full bg-primary-500 px-5 py-3 text-xs font-medium
                             tracking-[0.18em] uppercase text-white transition hover:bg-primary-400"
                >
                  Copy key
                </button>
                <button
                  onClick={handleDownloadLicense}
                  className="flex-1 rounded-full bg-white/8 px-5 py-3 text-xs font-medium
                             tracking-[0.18em] uppercase text-white ring-1 ring-white/10
                             transition hover:bg-white/12 hover:ring-primary-300/40"
                >
                  Download .txt
                </button>
              </div>
            </div>
          )}

          {/* Action row */}
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            {order.status === 'completed' && (
              <Link
                href={RELEASE_ZIP_URL}
                className="flex-1 rounded-full bg-primary-500 px-6 py-3 text-center text-xs
                           font-medium tracking-[0.20em] uppercase text-white transition
                           hover:bg-primary-400 hover:shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)]"
                prefetch={false}
              >
                Download v2.1.0 ↓
              </Link>
            )}
            {(order.status === 'rejected' || order.status === 'pending') && (
              <a
                href="https://t.me/irootbck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full bg-primary-500 px-6 py-3 text-center text-xs
                           font-medium tracking-[0.20em] uppercase text-white transition
                           hover:bg-primary-400"
              >
                Telegram support
              </a>
            )}
            <Link
              href="/"
              className="flex-1 rounded-full bg-white/8 px-6 py-3 text-center text-xs font-medium
                         tracking-[0.20em] uppercase text-white ring-1 ring-white/10
                         transition hover:bg-white/12 hover:ring-primary-300/40"
            >
              Back to home
            </Link>
          </div>

          {order.status === 'txid_submitted' && (
            <div className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.18em] text-white/55">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary-300" />
              POLLING EVERY 10s
            </div>
          )}
        </div>

        {/* Help */}
        <div className="mt-10 text-center text-sm text-white/55">
          Need help?{' '}
          <a href="mailto:support@thezettahub.com" className="text-primary-300 hover:text-primary-200">
            support@thezettahub.com
          </a>{' '}
          ·{' '}
          <a
            href="https://t.me/irootbck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-300 hover:text-primary-200"
          >
            Telegram @irootbck
          </a>
        </div>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */
function CenterShell({ children }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-dark-base px-6 text-white">
      {children}
    </div>
  );
}
function Spinner({ label }) {
  return (
    <div className="text-center">
      <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-primary-300 border-t-transparent" />
      <p className="mt-4 text-white/55">{label}</p>
    </div>
  );
}
function KV({ label, value, valueClass = '', mono = false, rawValue = false }) {
  return (
    <div className="rounded-2xl bg-white/[0.04] px-4 py-3 ring-1 ring-white/5">
      <div className="text-[11px] tracking-[0.18em] text-white/45">{String(label).toUpperCase()}</div>
      <div className={`mt-1 truncate text-sm ${mono ? 'font-mono' : ''} ${valueClass}`}>
        {rawValue ? value : String(value)}
      </div>
    </div>
  );
}
function StatusPill({ tone, children }) {
  const tones = {
    amber:  'bg-amber-glow/15 text-amber-glow ring-amber-glow/30',
    purple: 'bg-primary-500/15 text-primary-200 ring-primary-300/30',
    green:  'bg-emerald-500/15 text-emerald-300 ring-emerald-400/30',
    red:    'bg-red-500/15 text-red-300 ring-red-400/30',
  };
  return (
    <span
      className={`mt-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5
                  text-[11px] font-medium tracking-[0.18em] ring-1
                  ${tones[tone] || tones.purple}`}
    >
      {children}
    </span>
  );
}
