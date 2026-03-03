'use client';
import { useEffect, useState } from 'react';

// Platform nodes for outer ring (8 nodes at 45° intervals)
const OUTER_NODES = [
  { label: 'Google Maps', icon: '🗺️', angle: 0 },
  { label: 'Yelp',        icon: '⭐', angle: 45 },
  { label: 'Yellow Pages',icon: '📒', angle: 90 },
  { label: 'BBB',         icon: '🏆', angle: 135 },
  { label: 'Houzz',       icon: '🏠', angle: 180 },
  { label: 'TripAdvisor', icon: '✈️', angle: 225 },
  { label: 'Angi',        icon: '🔧', angle: 270 },
  { label: 'Manta',       icon: '🌐', angle: 315 },
];

// Platform nodes for inner ring (4 nodes at 90° intervals)
const INNER_NODES = [
  { label: 'Thumbtack',   icon: '📌', angle: 0 },
  { label: 'SuperPages',  icon: '📱', angle: 90 },
  { label: 'DexKnows',    icon: '📞', angle: 180 },
  { label: 'Emails+Ph',   icon: '📧', angle: 270 },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [outerAngle, setOuterAngle] = useState(0);
  const [innerAngle, setInnerAngle] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    // Animate orbital rings via requestAnimationFrame
    let lastTime = null;
    let raf;

    const animate = (time) => {
      if (lastTime !== null) {
        const delta = time - lastTime;
        setOuterAngle((prev) => (prev + delta * 0.006) % 360);   // 30s full rotation
        setInnerAngle((prev) => (prev - delta * 0.009) % 360);   // 20s full rotation, reverse
      }
      lastTime = time;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  const toRad = (deg) => (deg * Math.PI) / 180;

  // Compute (x, y) for a node on a ring of given radius at given angle
  const nodePos = (angle, radius) => ({
    x: Math.cos(toRad(angle - 90)) * radius,
    y: Math.sin(toRad(angle - 90)) * radius,
  });

  return (
    <section className="relative min-h-screen flex items-center bg-[#0a0a14] overflow-hidden pt-16">
      {/* Background glows */}
      <div className="hero-glow-amber" />
      <div className="hero-glow-purple" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left Column ─────────────────────────────── */}
          <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>

            {/* Version pill */}
            <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/40 rounded-full px-4 py-1.5 mb-8">
              <span className="text-sm">🚀</span>
              <span className="text-sm font-semibold text-purple-300">v2.1.0 — Now with 17+ Scrapers</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Extract Business Leads
              <br />
              <span className="text-gray-200">From Any Platform —</span>
              <br />
              <span className="gradient-text">Automated & Precise</span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
              17 scraper sources. Dual-browser extraction. Real-time results.
              Export to XLSX, CSV, and TXT instantly.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-2 bg-[#1a1040] border border-purple-500/60 hover:border-purple-400 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:bg-[#201450] hover:shadow-xl hover:shadow-purple-900/30 text-lg"
              >
                Download Free Trial
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 text-gray-400 hover:text-white font-medium px-8 py-4 rounded-xl transition-colors duration-200 text-lg border border-transparent hover:border-white/10"
              >
                View Pricing
              </a>
            </div>

            {/* Trust strip */}
            <div className="flex flex-wrap items-center gap-2 text-gray-600 text-sm">
              <span className="text-gray-500 font-medium text-xs uppercase tracking-wider">Supported Platforms:</span>
              {['Google Maps', 'Yelp', 'Yellow Pages', 'BBB', 'Houzz', 'TripAdvisor'].map((p, i, arr) => (
                <span key={p} className="flex items-center gap-2">
                  <span className="text-gray-400">{p}</span>
                  {i < arr.length - 1 && <span className="text-gray-700">·</span>}
                </span>
              ))}
              <span className="text-gray-700">·</span>
              <span className="text-purple-500 font-semibold">+11 more</span>
            </div>
          </div>

          {/* ── Right Column — Orbital ───────────────────── */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'fade-in-right' : 'opacity-0'}`}>
            <div className="relative" style={{ width: 480, height: 480 }}>

              {/* Outer ring SVG glow */}
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 480 480"
                fill="none"
              >
                <circle cx="240" cy="240" r="220" stroke="rgba(139,92,246,0.2)" strokeWidth="1" />
                <circle cx="240" cy="240" r="140" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
                <circle cx="240" cy="240" r="60"  stroke="rgba(139,92,246,0.25)" strokeWidth="1.5" fill="rgba(124,58,237,0.06)" />
              </svg>

              {/* Center stat */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <div className="bg-[#12102a]/90 border border-purple-700/40 rounded-2xl px-6 py-5 text-center shadow-xl shadow-purple-900/20">
                  <div className="text-5xl font-bold text-white leading-none">17+</div>
                  <div className="text-gray-400 text-sm mt-1 font-medium">Platforms</div>
                  <div className="mt-3 flex items-center gap-1.5 justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-medium">Live Results</span>
                  </div>
                </div>
              </div>

              {/* Outer ring nodes */}
              {OUTER_NODES.map(({ label, icon, angle }) => {
                const currentAngle = (angle + outerAngle) % 360;
                const { x, y } = nodePos(currentAngle, 220);
                return (
                  <div
                    key={label}
                    className="absolute flex flex-col items-center gap-1 z-20"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top:  `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-10 h-10 bg-[#1a1040] border border-purple-600/40 rounded-xl flex items-center justify-center text-lg shadow-lg shadow-purple-900/30 hover:border-purple-400/60 transition-colors">
                      {icon}
                    </div>
                    <span className="text-[9px] text-gray-500 font-medium whitespace-nowrap leading-none">{label}</span>
                  </div>
                );
              })}

              {/* Inner ring nodes */}
              {INNER_NODES.map(({ label, icon, angle }) => {
                const currentAngle = (angle + innerAngle) % 360;
                const { x, y } = nodePos(currentAngle, 140);
                return (
                  <div
                    key={label}
                    className="absolute flex flex-col items-center gap-1 z-20"
                    style={{
                      left: `calc(50% + ${x}px)`,
                      top:  `calc(50% + ${y}px)`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div className="w-8 h-8 bg-[#12102a] border border-purple-700/30 rounded-lg flex items-center justify-center text-sm shadow-md">
                      {icon}
                    </div>
                    <span className="text-[8px] text-gray-600 font-medium whitespace-nowrap leading-none">{label}</span>
                  </div>
                );
              })}

              {/* Floating badge */}
              <div className="absolute bottom-6 left-0 z-30">
                <div className="inline-flex items-center gap-2 bg-purple-900/40 border border-purple-600/40 rounded-full px-3 py-1.5 backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-purple-400" />
                  <span className="text-xs text-purple-300 font-semibold">Live Results Table</span>
                </div>
              </div>

              {/* Corner accent badge */}
              <div className="absolute top-4 right-0 z-30">
                <div className="inline-flex items-center gap-2 bg-[#0d0520]/70 border border-purple-700/30 rounded-full px-3 py-1.5 backdrop-blur-sm">
                  <span className="text-xs text-gray-400">Dual-Browser</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
