import Image from "next/image";
import DeviceHero from "@/components/DeviceHero";

const specs = [
  { label: "Power Supply", value: "DC 24V" },
  { label: "Connectivity", value: "RJ45 Ethernet" },
  { label: "Serial Ports", value: "RS-485 × 2 (ISO)" },
  { label: "Protocols", value: "Modbus, SCADA" },
  { label: "Max Frequency", value: "< 108 MHz" },
  { label: "Classification", value: "Class A Digital" },
  { label: "Standard", value: "47 CFR FCC Part 15B" },
  { label: "Form Factor", value: "DIN-Rail Mount" },
];

const pillars = [
  {
    icon: "⚡",
    title: "Edge-native processing",
    body: "Data is processed at the source — on the device, at the asset. No cloud dependency. No latency. No single point of failure.",
  },
  {
    icon: "🔒",
    title: "Your data stays yours",
    body: "In the AI era, data is the moat. SSI V04 keeps your operational data on-premise, giving you full ownership and control.",
  },
  {
    icon: "🌐",
    title: "Protocol agnostic",
    body: "Dual isolated RS-485 ports with Modbus and SCADA support. Talks to every inverter, meter, and sensor on the market.",
  },
  {
    icon: "🧠",
    title: "AI-ready architecture",
    body: "Designed from the ground up to run inference at the edge. Plug in intelligence without ripping out infrastructure.",
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
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 border-b border-blue-500/10 backdrop-blur-md" style={{ background: 'rgba(5,10,26,0.85)' }}>
        <div className="flex items-center">
          <Image
            src="/skyfri-logo-white.png"
            alt="Skyfri"
            width={110}
            height={34}
            className="h-8 w-auto"
            style={{ filter: 'drop-shadow(0 0 8px rgba(29,107,255,0.5))' }}
            priority
          />
        </div>
        <div className="hidden md:flex items-center gap-8">
          {['Product', 'Why Hardware', 'Specs', 'Contact'].map((l) => (
            <a key={l} href={`#${l.toLowerCase().replace(' ', '-')}`} className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors">
              {l}
            </a>
          ))}
        </div>
        <a
          href="mailto:sales@skyfri.com"
          className="text-xs tracking-widest uppercase px-5 py-2.5 rounded-full border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 transition-all"
        >
          Get in touch
        </a>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen grid-bg flex flex-col md:flex-row items-center pt-24 pb-16 px-8 md:px-16 overflow-hidden">

        {/* Radial glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(29,107,255,0.12) 0%, transparent 70%)' }} />

        {/* Left — text */}
        <div className="relative z-10 flex-1 max-w-xl">
          <p className="animate-fade-up text-blue-400 text-xs tracking-[0.35em] uppercase mb-6 font-mono">
            Skyfri Solarscada · SSI V04 Micro
          </p>
          <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="gradient-text">The intelligence</span>
            <br />
            <span className="text-white">is in the</span>
            <br />
            <span className="text-white">hardware.</span>
          </h1>
          <p className="animate-fade-up delay-200 text-white/50 text-lg leading-relaxed mb-10 max-w-md">
            We built the software. Now we own the edge. The SSI V04 Micro brings real-time solar intelligence directly to your assets — no cloud required.
          </p>
          <div className="animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:sales@skyfri.com"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #1d6bff, #0ea5e9)' }}
            >
              Request Early Access
            </a>
            <a
              href="#product"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/60 border border-white/10 hover:border-blue-500/40 hover:text-white transition-all"
            >
              See the device ↓
            </a>
          </div>

          {/* Trust badges */}
          <div className="animate-fade-up delay-500 flex flex-wrap gap-3 mt-10">
            {['FCC Certified', 'Patent Pending', 'ISO RS-485', 'DIN-Rail'].map((b) => (
              <span key={b} className="text-[10px] tracking-widest uppercase text-blue-400/70 border border-blue-500/20 px-3 py-1.5 rounded-full font-mono">
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Right — device */}
        <div className="animate-fade-in delay-300 flex-1 relative flex items-center justify-center mt-16 md:mt-0" style={{ minHeight: 500 }}>
          <DeviceHero />
        </div>
      </section>

      {/* STAT STRIP */}
      <div className="border-y border-blue-500/10" style={{ background: 'rgba(10,18,40,0.8)' }}>
        <div className="max-w-5xl mx-auto px-8 py-6 flex flex-wrap justify-around gap-6">
          {[
            { n: 'DC 24V', l: 'Power Supply' },
            { n: '< 108MHz', l: 'Max Frequency' },
            { n: '2×', l: 'RS-485 ISO Ports' },
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

      {/* WHY HARDWARE */}
      <section id="why-hardware" className="py-32 px-8 md:px-16 max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">The Shift</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
            In the AI era, the edge is everything.
          </h2>
          <p className="text-white/40 text-lg mt-6 max-w-xl leading-relaxed">
            Software is commoditised. Anyone can build a dashboard. But the companies that own the physical layer — the hardware at the asset — own the data, the latency advantage, and the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="card-glass rounded-2xl p-8 hover:border-blue-500/30 transition-all group">
              <div className="text-3xl mb-5">{p.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-3 group-hover:text-blue-300 transition-colors">{p.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="py-32 px-8 md:px-16 border-t border-blue-500/10" style={{ background: 'rgba(10,18,40,0.5)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">The Device</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">SSI V04 Micro</h2>
            <p className="text-white/40 text-lg mt-4 max-w-lg leading-relaxed">
              Compact. Certified. Built for the field. Every solar asset deserves intelligence at the edge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Specs table */}
            <div className="space-y-0 card-glass rounded-2xl overflow-hidden">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between px-6 py-4 ${i < specs.length - 1 ? 'border-b border-blue-500/10' : ''}`}
                >
                  <span className="text-white/40 text-sm">{s.label}</span>
                  <span className="text-white font-mono text-sm font-medium">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Feature highlight */}
            <div className="space-y-6">
              <div className="card-glass rounded-2xl p-6 border border-blue-500/20">
                <p className="text-blue-400 text-xs tracking-widest uppercase font-mono mb-3">FCC Test Result</p>
                <p className="text-3xl font-bold text-white mb-1">PASS</p>
                <p className="text-white/30 text-sm">47 CFR FCC Part 15, Subpart B · Ref: WTF25X10267061E</p>
                <p className="text-white/20 text-xs mt-2 font-mono">Tested by Waltek Testing Group · 2025-10-28</p>
              </div>

              <div className="card-glass rounded-2xl p-6">
                <p className="text-blue-400 text-xs tracking-widest uppercase font-mono mb-3">Trade Name</p>
                <p className="text-2xl font-bold text-white mb-1">Skyfri Solarscada</p>
                <p className="text-white/30 text-sm">Manufactured by Skyfri Group AS · Apotekergata 10, Oslo</p>
              </div>

              <div className="card-glass rounded-2xl p-6">
                <p className="text-blue-400 text-xs tracking-widest uppercase font-mono mb-3">Interface Modules</p>
                <p className="text-white text-sm leading-relaxed">
                  Dual <span className="text-blue-300 font-mono">RS-485 ISO Interface Modules</span> — galvanically isolated, designed for harsh industrial environments.
                </p>
                <p className="text-white/20 text-xs mt-2 font-mono">© Skyfri SolarSCADA · G. Linder 2024 · V01B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section id="specs" className="py-32 px-8 md:px-16 max-w-6xl mx-auto">
        <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">Compliance & IP</p>
        <h2 className="text-4xl font-bold text-white mb-16">Built to the highest standards.</h2>

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
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Early Access</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Be first to own the edge.
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            We are working with a select group of partners for the first deployment of the SSI V04 Micro. If you operate solar assets and want real edge intelligence, reach out.
          </p>
          <a
            href="mailto:sales@skyfri.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #1d6bff, #0ea5e9)', boxShadow: '0 0 40px rgba(29,107,255,0.3)' }}
          >
            sales@skyfri.com
          </a>
          <p className="text-white/20 text-xs mt-6 tracking-widest uppercase">Oslo, Norway · skyfri.com</p>
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
