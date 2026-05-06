'use client';

/**
 * Features grid — bento-style with the dark+purple language.
 * Reflects the current v2.1.0 capabilities (Telegram bot, concurrent
 * engines, Common Crawl, etc.).
 */
const FEATURES = [
  {
    tag: '01',
    title: 'Telegram remote control',
    body:
      'Drive every campaign from your phone with inline-button menus. Pick scraper, ' +
      'filters, max results, then start. CAPTCHA prompts arrive with [Solved]/[Skip] ' +
      'buttons. Final XLSX is delivered to your chat on completion.',
    span: 'md:col-span-2',
  },
  {
    tag: '02',
    title: 'Concurrent search engines',
    body:
      'Google, Bing, and DuckDuckGo each run in their own isolated Chrome instance ' +
      'and stream results in parallel. ~3× wall-clock vs sequential.',
  },
  {
    tag: '03',
    title: 'Live log + per-engine counters',
    body:
      'Watch every page transition, CAPTCHA, kept lead, and skipped duplicate as it ' +
      'happens. Per-engine totals tick up independently.',
  },
  {
    tag: '04',
    title: '25+ advanced dork templates',
    body:
      'High-yield queries for decision-maker emails, leaked PDFs, government ' +
      'directories, conference speakers, GitHub profiles, and more.',
    span: 'md:col-span-2',
  },
  {
    tag: '05',
    title: 'Common Crawl + WARC cache',
    body:
      'Read CC’s archive snapshots via byte-range requests so even ' +
      'Cloudflare-protected sites yield clean leads.',
  },
  {
    tag: '06',
    title: 'Strict data quality',
    body:
      'TLD allowlist email regex, NANP phone normalization, dedup on (email, phone), ' +
      'XLSX text-format on phone columns so Excel can’t coerce to floats.',
  },
  {
    tag: '07',
    title: '10k+ leads per run',
    body:
      'Saturation-aware pagination, free-form max-pages input, memory hygiene, and ' +
      'real-time CSV flushing so a 6-hour run never loses a row.',
    span: 'md:col-span-2',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative bg-dark-base py-24 text-white">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12">
        <header className="mb-12 max-w-3xl">
          <p className="mb-4 text-[12px] font-medium tracking-[0.22em] text-primary-300">
            FEATURES
            <sup className="ml-1 -translate-y-1 text-[9px] tracking-normal text-white/45">07</sup>
          </p>
          <h2 className="text-balance text-4xl font-light leading-tight md:text-5xl">
            <span className="text-primary-300">{'}'}</span> Built for high-volume
            <span className="text-white/95"> outbound, </span>
            controllable from anywhere.
          </h2>
        </header>

        <div className="grid gap-4 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.tag}
              className={`group relative overflow-hidden rounded-3xl bg-dark-card/95
                          p-7 ring-1 ring-white/5 transition
                          hover:ring-primary-300/40 ${f.span ?? ''}`}
            >
              <div className="mb-6 flex items-center justify-between text-xs tracking-[0.18em] text-white/50">
                <span>{`}`}<span className="ml-2">{f.tag}</span></span>
                <span className="opacity-0 transition group-hover:opacity-100 text-primary-300">
                  →
                </span>
              </div>
              <div className="text-xl font-medium md:text-2xl">{f.title}</div>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
