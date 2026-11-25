import Link from "next/link";
import { Phone, Key, ShieldCheck, Wrench, CheckCircle2, ChevronRight, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden bg-[#0c1527] text-white pt-32 pb-16 lg:pt-36 lg:pb-20">
      {/* Background with optimized image & directional corporate gradient */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{
          backgroundImage: "url('/assets/aes-hero-new.png')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1527] via-[#0c1527]/90 to-[#0c1527]/60" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Corporate Accreditation Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
            Specialist Mobile Auto Electrician · Derbyshire & South Yorkshire
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-white leading-[1.12] mb-6">
            Dealer-Level Auto Electrics.
            <span className="block text-[#38bdf8]">
              Direct to Your Driveway.
            </span>
          </h1>

          {/* Value proposition paragraph */}
          <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed font-light">
            Specialist mobile diagnostics, ECU remapping, Ghost 2 immobiliser installations,
            and complete vehicle wiring repairs. Equipped with dealer-grade oscilloscopes
            and software to solve faults where standard garages stop.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <a
              href="tel:07753891461"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-lg font-bold text-base text-white bg-[#0066d6] hover:bg-[#0052b0] shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 text-blue-200" />
              Call 07753 891461
            </a>

            <Link
              href="/replacement-car-keys-chesterfield"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg font-semibold text-base text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-500 shadow-sm transition-all"
            >
              <Key className="w-5 h-5 text-blue-400" />
              Replacement Keys & Fobs
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>

          {/* Trust Highlights Grid */}
          <div className="pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Mobile Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dealer-Grade Diagnostics</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>TASSA Registered Ghost 2</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Fully Insured & Guaranteed</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
