import Link from "next/link";
import { Key, ShieldAlert, Phone, Check, ArrowRight } from "lucide-react";

export default function KeyReplacementSection() {
  const highlights = [
    "Lost, stolen, or broken keys replaced on-site",
    "Spare keys cut and programmed at your home or workplace",
    "Dealer-level key transponder coding for 95% of UK vehicles",
    "Emergency roadside key assistance with non-destructive vehicle entry",
    "Cheaper and significantly faster than main dealership wait times",
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0c1527] to-[#152238] text-white p-8 sm:p-12 lg:p-16 shadow-xl border border-slate-800">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/15 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
                <Key className="w-3.5 h-3.5 text-blue-400" />
                Specialist Mobile Auto Locksmith
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Lost or Broken Car Key?
                <span className="block text-blue-400 font-normal">
                  We Cut & Program at Your Location.
                </span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Skip the tow truck and weeks of main dealer delay. Our specialist mobile key cutting
                and coding van arrives equipped with computerized laser key cutters and OBD programmers
                to replace your vehicle key wherever you are parked.
              </p>

              <ul className="space-y-2.5 pt-2">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:07753891461"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white bg-[#0066d6] hover:bg-[#0052b0] shadow-md transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Locksmith: 07753 891461
                </a>
                <Link
                  href="/replacement-car-keys-chesterfield"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
                >
                  Explore Key Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Pricing Box */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-xl p-6 sm:p-8 border border-slate-700/80 shadow-inner">
              <h3 className="text-lg font-bold text-white mb-2">Popular Key Services</h3>
              <p className="text-xs text-slate-400 mb-6">Same-day service available across Derbyshire.</p>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <div className="text-sm font-semibold text-slate-200">Spare Remote Key</div>
                    <div className="text-xs text-slate-400">Cut & programmed on-site</div>
                  </div>
                  <div className="text-sm font-bold text-blue-400">From £95</div>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <div className="text-sm font-semibold text-slate-200">All Keys Lost Replacement</div>
                    <div className="text-xs text-slate-400">Lock decoded & new key paired</div>
                  </div>
                  <div className="text-sm font-bold text-blue-400">From £165</div>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <div className="text-sm font-semibold text-slate-200">Proximity / Smart Key Fob</div>
                    <div className="text-xs text-slate-400">Push-to-start key coding</div>
                  </div>
                  <div className="text-sm font-bold text-blue-400">From £135</div>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <div className="text-sm font-semibold text-slate-200">Key Fob Battery & Case Repair</div>
                    <div className="text-xs text-slate-400">Component repair & micro-soldering</div>
                  </div>
                  <div className="text-sm font-bold text-blue-400">From £45</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-center">
                <span className="text-xs text-slate-400">
                  Guaranteed genuine & OEM transponders with 12-month warranty.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
