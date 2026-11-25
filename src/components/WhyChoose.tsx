import { Truck, Cpu, ShieldCheck, Clock, Award, CheckCircle } from "lucide-react";

export default function WhyChoose() {
  const points = [
    {
      icon: Truck,
      title: "100% Mobile to Your Location",
      desc: "Save the expense of recovery trucks or coordinating lifts to a workshop. We arrive fully equipped at your driveway or business across Derbyshire.",
    },
    {
      icon: Cpu,
      title: "Dealer Diagnostic Equipment",
      desc: "We invest in the same digital scopes, CAN-bus sniffers, and OEM software used by franchise dealerships, providing accurate diagnosis the first time.",
    },
    {
      icon: ShieldCheck,
      title: "TASSA Certified & Insured",
      desc: "Recognised installations compliant with major UK insurers for Ghost 2 immobilisers and vehicle security systems with full public liability coverage.",
    },
    {
      icon: Clock,
      title: "Rapid Response & Transparent Costs",
      desc: "Clear upfront quotes with no surprise workshop shop-charges or diagnostic guesswork. Friendly, honest advice from a dedicated specialist.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-bold uppercase tracking-wider text-[#0066d6]">
              Why Choose AES Autoelectrical
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1527] tracking-tight leading-tight">
              The Smarter Alternative to Main Dealerships.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Main dealers frequently impose three-week waiting lists, expensive hourly rates,
              and inflexible workshop drop-offs. AES brings master technician auto electrical
              diagnostics directly to your vehicle, resolving issues promptly and professionally.
            </p>

            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>No recovery or towing fees needed</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Direct discussion with the technician performing the work</span>
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>12-month guarantee on all new parts and wiring installs</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {points.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-slate-200/90 bg-slate-50/50 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-[#0066d6] flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pt.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
