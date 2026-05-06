'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const RELEASE_URL =
  'https://github.com/iMorgann/leadsGen-pro-landing/releases/download/v2.1.0/LeadsGenPro-v2.1.0-Setup.zip';
const VERSION = 'v2.1.0';
const FILE_SIZE = '~309 MB';

/**
 * Download section — single-card, dark+purple, links to the GitHub Release
 * asset (the EXE zip is too large for git).
 */
export default function Download() {
  const [os, setOs] = useState('Windows');

  useEffect(() => {
    const ua = (typeof navigator !== 'undefined' && navigator.userAgent) || '';
    if (/mac/i.test(ua)) setOs('Mac');
    else if (/linux/i.test(ua)) setOs('Linux');
    else setOs('Windows');
  }, []);

  return (
    <section
      id="download"
      className="relative overflow-hidden bg-dark-base py-24 text-white"
    >
      {/* Glow accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full
                        bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.30),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 md:px-12">
        <header className="mb-10 max-w-3xl">
          <p className="mb-4 text-[12px] font-medium tracking-[0.22em] text-primary-300">
            DOWNLOAD
            <sup className="ml-1 -translate-y-1 text-[9px] tracking-normal text-white/45">
              {VERSION}
            </sup>
          </p>
          <h2 className="text-balance text-4xl font-light leading-tight md:text-5xl">
            <span className="text-primary-300">{'}'}</span> Get LeadsGen Pro
          </h2>
          <p className="mt-4 max-w-xl text-white/70">
            Windows installer. Extract the zip and run{' '}
            <code className="rounded bg-white/5 px-1.5 py-0.5 text-primary-200">
              LeadsGenPro-v2.1.0-Setup.exe
            </code>
            .
          </p>
        </header>

        <div className="rounded-3xl bg-dark-card/95 p-8 ring-1 ring-white/5 md:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="text-xs tracking-[0.22em] text-white/50">
                {os === 'Windows' ? 'DETECTED · WINDOWS' : `BUILT FOR WINDOWS · YOU'RE ON ${os.toUpperCase()}`}
              </div>
              <div className="mt-2 text-3xl font-light md:text-4xl">
                LeadsGen Pro {VERSION}
              </div>
              <div className="mt-2 text-sm text-white/65">
                {FILE_SIZE} · single-file installer · 64-bit
              </div>
            </div>

            <Link
              href={RELEASE_URL}
              className="group inline-flex items-center gap-3 rounded-full
                         bg-primary-500 px-7 py-4 text-sm font-medium tracking-[0.18em]
                         uppercase text-white transition
                         hover:bg-primary-400 hover:shadow-[0_0_40px_-8px_rgba(168,85,247,0.6)]"
              prefetch={false}
            >
              Download zip
              <span aria-hidden className="transition group-hover:translate-x-0.5">
                ↓
              </span>
            </Link>
          </div>

          <ul className="mt-8 grid gap-3 border-t border-white/5 pt-6 text-sm text-white/70 md:grid-cols-3">
            <li>
              <span className="mr-2 text-primary-300">{'}'}</span>
              Lifetime license &amp; activation included
            </li>
            <li>
              <span className="mr-2 text-primary-300">{'}'}</span>
              Auto-updates inside the desktop app
            </li>
            <li>
              <span className="mr-2 text-primary-300">{'}'}</span>
              Telegram bot config in Settings
            </li>
          </ul>
        </div>

        <p className="mt-6 text-xs tracking-[0.18em] text-white/45">
          MAC &amp; LINUX BUILDS &mdash; ON THE ROADMAP
        </p>
      </div>
    </section>
  );
}
