import Image from "next/image";
import Nav from "@/components/Nav";
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

const features = [
  {
    tag: "Edge Computing",
    title: "Intelligence without the cloud",
    body: "The V04 processes data at the source directly on the device, at the asset. No round-trip to a server. No latency. No dependency on connectivity. If the internet goes down, your solar plant keeps running and logging. That is what industrial-grade really means.",
    stat: { n: "0ms", l: "Cloud dependency" },
  },
  {
    tag: "Connectivity",
    title: "Every protocol. Every inverter.",
    body: "Two galvanically isolated RS-485 ports with native Modbus RTU and SCADA support. The V04 speaks the language of every inverter, meter, and sensor on the market out of the box. No custom firmware. No integration headaches.",
    stat: { n: "2×", l: "Isolated RS-485" },
  },
  {
    tag: "Data Ownership",
    title: "Your data stays yours. Always.",
    body: "In the AI era, operational data is the most valuable asset you have. The V04 keeps it on-premise, under your control, forever. No vendor lock-in. No data leaving your site without your permission. Your moat is yours.",
    stat: { n: "100%", l: "On-premise" },
  },
  {
    tag: "AI Ready",
    title: "Built for what comes next",
    body: "The architecture was designed from day one to run inference at the edge. As AI capabilities evolve, the V04 is already positioned to run them without replacing hardware. Plug in intelligence. Upgrade in software. The future is already here.",
    stat: { n: "Edge", l: "AI inference" },
  },
];

export default function ProductPage() {
  return (
    <div className="min-h-screen">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen grid-bg flex flex-col md:flex-row items-center pt-28 pb-16 px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 65% 50%, rgba(29,107,255,0.12) 0%, transparent 70%)" }} />

        {/* Left */}
        <div className="relative z-10 flex-1 max-w-xl">
          <p className="animate-fade-up text-blue-400 text-xs tracking-[0.35em] uppercase mb-6 font-mono">
            Skyfri Solarscada · Hardware
          </p>
          <h1 className="animate-fade-up delay-100 text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6">
            <span className="gradient-text">SSI V04</span>
            <br />
            <span className="text-white">Micro</span>
          </h1>
          <p className="animate-fade-up delay-200 text-white/50 text-lg leading-relaxed mb-8 max-w-md">
            The heart of solar. A decade of domain expertise, $10M+ in R&D, and over 100 units battle-tested across Europe and the US distilled into one DIN-rail device.
          </p>

          {/* Quick specs pills */}
          <div className="animate-fade-up delay-300 flex flex-wrap gap-2 mb-10">
            {["FCC Certified", "DIN-Rail", "RS-485 ISO", "Modbus / SCADA", "DC 24V", "Patent Pending"].map((s) => (
              <span key={s} className="text-[10px] tracking-widest uppercase text-blue-400/70 border border-blue-500/20 px-3 py-1.5 rounded-full font-mono">
                {s}
              </span>
            ))}
          </div>

          <div className="animate-fade-up delay-500 flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:sales@skyfri.com"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #1d6bff, #0ea5e9)" }}
            >
              Buy Now
            </a>
            <a
              href="#deep-dive"
              className="flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white/60 border border-white/10 hover:border-blue-500/40 hover:text-white transition-all"
            >
              Explore features ↓
            </a>
          </div>
        </div>

        {/* Right device */}
        <div className="animate-fade-in delay-300 flex-1 relative flex items-center justify-center mt-16 md:mt-0" style={{ minHeight: 500 }}>
          <DeviceHero />
        </div>
      </section>

      {/* SPEC TABLE */}
      <section className="py-24 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.6)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">Technical Specifications</p>
            <h2 className="text-4xl font-bold text-white">Built to spec. No shortcuts.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Specs table */}
            <div className="card-glass rounded-2xl overflow-hidden">
              {specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center justify-between px-6 py-4 ${i < specs.length - 1 ? "border-b border-blue-500/10" : ""}`}
                >
                  <span className="text-white/40 text-sm">{s.label}</span>
                  <span className="text-white font-mono text-sm font-medium">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Certification cards */}
            <div className="space-y-4">
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
                  Dual <span className="text-blue-300 font-mono">RS-485 ISO Interface Modules</span> galvanically isolated, designed for harsh industrial environments.
                </p>
                <p className="text-white/20 text-xs mt-2 font-mono">© Skyfri SolarSCADA · G. Linder 2024 · V01B</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEEP DIVE FEATURES */}
      <section id="deep-dive" className="py-24 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.5)" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-4">Why V04</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl">
              Every decision was made for a reason.
            </h2>
          </div>

          <div className="space-y-8">
            {features.map((f, i) => (
              <div
                key={f.tag}
                className={`card-glass rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="flex-1">
                  <p className="text-blue-400 text-xs tracking-widest uppercase font-mono mb-4">{f.tag}</p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{f.title}</h3>
                  <p className="text-white/40 leading-relaxed">{f.body}</p>
                </div>
                <div className="flex-shrink-0 card-glass rounded-2xl p-8 text-center min-w-[160px] border border-blue-500/20">
                  <p className="text-4xl font-bold text-white font-mono mb-2">{f.stat.n}</p>
                  <p className="text-white/30 text-xs tracking-widest uppercase">{f.stat.l}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 md:px-16 border-t border-blue-500/10" style={{ background: "rgba(10,18,40,0.7)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-xs tracking-[0.35em] uppercase font-mono mb-6">Get Started</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to put the V04 to work?
          </h2>
          <p className="text-white/40 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            We are actively deploying with new partners. If you operate solar assets and want hardware that actually works, reach out directly.
          </p>
          <a
            href="mailto:sales@skyfri.com"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-white font-semibold text-lg transition-all hover:scale-105 hover:shadow-2xl"
            style={{ background: "linear-gradient(135deg, #1d6bff, #0ea5e9)", boxShadow: "0 0 40px rgba(29,107,255,0.3)" }}
          >
            sales@skyfri.com
          </a>
          <p className="text-white/20 text-xs mt-6 tracking-widest uppercase">Oslo, Norway · skyfri.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-blue-500/10 px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4" style={{ background: "rgba(5,10,26,0.9)" }}>
        <div className="flex items-center gap-3">
          <Image src="/skyfri-logo-white.png" alt="Skyfri" width={72} height={24} className="h-5 w-auto opacity-25" />
          <span className="text-white/20 text-xs tracking-widest uppercase">© {new Date().getFullYear()} Skyfri Group AS</span>
        </div>
        <p className="text-white/10 text-xs font-mono">SSI V04 Micro · Hardware-First Solar Intelligence</p>
      </footer>
    </div>
  );
}
