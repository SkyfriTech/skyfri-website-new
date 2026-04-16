import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";


const pillars = [
  {
    title: "Edge-native processing",
    body: "Data is processed at the source on the device, at the asset. No cloud dependency. No latency. No single point of failure. This is how industrial intelligence was always meant to work.",
  },
  {
    title: "Your data stays yours",
    body: "In the AI era, data is the moat. SSI V04 keeps your operational data on-premise, giving you full ownership and control forever. No vendor lock-in. No exposure.",
  },
  {
    title: "Protocol agnostic",
    body: "Dual isolated RS-485 ports with Modbus and SCADA support. Talks to every inverter, meter, and sensor on the market. Wherever your assets are, V04 speaks the language.",
  },
  {
    title: "AI-ready architecture",
    body: "Built from the ground up to run inference at the edge. Plug in intelligence without ripping out infrastructure. The hardware is ready. The future is already here.",
  },
];

const badges = [
  { label: "FCC Certified", detail: "Part 15B · Class A", color: "blue" },
  { label: "Patent Pending", detail: "PCT Application Filed", color: "indigo" },
  { label: "DIN-Rail Ready", detail: "Industrial Form Factor", color: "blue" },
  { label: "ISO Isolated", detail: "RS-485 Interface", color: "indigo" },
];

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* NAV */}
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen grid-bg flex flex-col md:flex-row items-center pt-28 pb-16 px-8 md:px-20 gap-12 overflow-hidden">

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 55% 60% at 65% 50%, rgba(29,107,255,0.10) 0%, transparent 70%)' }} />

        {/* Left — text */}
        <div className="relative z-10 w-full md:w-[45%] flex flex-col justify-center">
          <h1 className="animate-fade-up text-5xl md:text-6xl lg:text-[5.5rem] font-bold leading-[1.0] tracking-tight mb-8">
            <span className="gradient-text">The intelligence</span>
            <br />
            <span className="text-white">is in the</span>
            <br />
            <span className="text-white">hardware.</span>
          </h1>
          <p className="animate-fade-up delay-100 text-white/50 text-base leading-relaxed mb-4">
            Our vision is simple, every solar and battery asset, from a 50kW rooftop to a 500MW utility farm, should have an intelligent device at its core that monitors, controls, protects, and optimises it in real time.
          </p>
          <p className="animate-fade-up delay-200 text-white/50 text-base leading-relaxed mb-10">
            Continuously, locally, and autonomously. No cloud dependency, no data sovereignty issues, no vendor lock-in. Just clean intelligence at every asset, everywhere on earth.
          </p>
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="mailto:sales@skyfri.com"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1d6bff, #0ea5e9)' }}
            >
              Buy Now
            </a>
            <Link
              href="/product"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/60 border border-white/10 hover:border-blue-500/40 hover:text-white transition-all"
            >
              See the device ↓
            </Link>
          </div>
          <div className="animate-fade-up delay-500 flex flex-wrap gap-2">
            {['FCC Certified', 'Patent Pending', 'ISO RS-485', 'DIN-Rail'].map((b) => (
              <span key={b} className="text-[10px] tracking-widest uppercase text-blue-400/70 border border-blue-500/20 px-3 py-1.5 rounded-full font-mono">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Right — video */}
        <div className="animate-fade-in delay-200 w-full md:w-[55%] flex items-center justify-center">
          <video
            src="/device-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full rounded-3xl"
            style={{ mixBlendMode: 'lighten' }}
          />
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="border-y border-blue-500/10" style={{ background: 'rgba(10,18,40,0.8)' }}>
        <div className="max-w-5xl mx-auto px-8 py-6 flex flex-wrap justify-around gap-6">
          {[
            { n: '$10M+', l: 'R&D Invested' },
            { n: '100+', l: 'Devices Deployed' },
            { n: '10+', l: 'Years of Research' },
            { n: 'FCC', l: 'Part 15B Certified' },
            { n: 'PCT', l: 'Patent Filed' },
          ].map(({ n, l }) => (
            <div key={l} className="text-center">
              <p className="text-2xl font-bold text-white font-mono">{n}</p>
              <p className="text-white/30 text-xs tracking-widest uppercase mt-1">{l}</p>
            </div>
          ))}
        </div>
      </div>

      {/* AWARDS */}
      <div className="border-b border-blue-500/10" style={{ background: 'rgba(8,14,32,0.9)' }}>
        <div className="max-w-5xl mx-auto px-8 py-10 flex flex-col items-center gap-6">
          <p className="text-white/20 text-[10px] tracking-[0.35em] uppercase font-mono">Awards & Recognition</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { src: '/award-american-made-solar.png', alt: 'American Made Solar Prize — U.S. Department of Energy', w: 160 },
              { src: '/award-climate.png', alt: 'Climate Award', w: 150 },
              { src: '/award-global-startup.png', alt: 'Global Startup Awards', w: 170 },
            ].map(({ src, alt, w }) => (
              <div
                key={src}
                className="flex items-center justify-center rounded-xl px-8 py-5"
                style={{ background: 'rgba(255,255,255,0.96)', minWidth: 200, minHeight: 110 }}
              >
                <Image src={src} alt={alt} width={w} height={90} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* WHY HARDWARE */}
      <section id="why-hardware" className="py-32 px-8 md:px-16 max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">The Shift</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            We spent a decade learning what the industry gets wrong.
          </h2>
          <p className="text-white/40 text-lg mt-6 max-w-xl leading-relaxed">
            Founded in 2021 by solar veterans with a singular obsession: solve the real, hard, unglamorous problems that solar power plant owners face every day. We have invested over $10 million USD into R&D not on pitch decks, but on hardware and software that actually works in the field. The result is V04. Everything we know, built into one device. We call it the heart of solar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="card-glass rounded-2xl p-8 hover:border-blue-500/30 transition-all group">
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-blue-300 transition-colors">{p.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="specs" className="py-32 px-8 md:px-16 max-w-6xl mx-auto">
        <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">Compliance & IP</p>
        <h2 className="text-4xl font-bold text-white mb-16">No shortcuts. No compromises.</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {badges.map((b) => (
            <div key={b.label} className="card-glass rounded-2xl p-6 text-center hover:border-blue-500/30 transition-all">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: 'rgba(29,107,255,0.15)' }}>
                <div className="w-3 h-3 rounded-full bg-blue-400" />
              </div>
              <p className="text-white font-semibold mb-1">{b.label}</p>
              <p className="text-white/30 text-xs">{b.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-8 md:px-16 border-t border-blue-500/10" style={{ background: 'rgba(10,18,40,0.7)' }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Scale With Us</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            We&apos;ve proven it. Now we&apos;re scaling it.
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            More than 100 devices running live in the field. Years of real-world data. A platform that has been tested in the harshest conditions on earth and never flinched. We know what we are talking about. We are veterans in this industry. And we are just getting started. If you operate solar assets and want to be part of what comes next, now is the time.
          </p>
          <a
            href="mailto:sales@skyfri.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #1d6bff, #0ea5e9)', boxShadow: '0 0 40px rgba(29,107,255,0.3)' }}
          >
            sales@skyfri.com
          </a>
          <div className="flex flex-col sm:flex-row justify-center gap-10 mt-12 pt-10 border-t border-blue-500/10">
            <div className="text-center">
              <p className="text-white/30 text-[10px] tracking-widest uppercase font-mono mb-2">Skyfri Group AS</p>
              <p className="text-white/20 text-xs">Torggata 11</p>
              <p className="text-white/20 text-xs">0181 Oslo, Norway</p>
            </div>
            <div className="text-center">
              <p className="text-white/30 text-[10px] tracking-widest uppercase font-mono mb-2">Skyfri Corp</p>
              <p className="text-white/20 text-xs">6547 North Academy Blvd</p>
              <p className="text-white/20 text-xs">CO 80918 Colorado Springs, USA</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/10 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ background: 'rgba(5,10,26,0.9)' }}>
        <div className="flex items-center gap-3">
          <Image src="/skyfri-logo-white.png" alt="Skyfri" width={72} height={24} className="h-5 w-auto opacity-25" />
          <span className="text-white/20 text-xs tracking-widest uppercase">© {new Date().getFullYear()} Skyfri Group AS</span>
        </div>
        <p className="text-white/10 text-xs font-mono">SSI V04 Micro · Hardware-First Solar Intelligence</p>
      </footer>

    </div>
  );
}
