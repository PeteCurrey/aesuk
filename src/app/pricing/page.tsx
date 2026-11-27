import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Pricing Guide | Transparent Auto Electrical & Key Rates",
  description:
    "Clear, upfront pricing for mobile diagnostics, replacement car keys, Ghost 2 immobiliser fitting, and ECU remapping in Chesterfield & Derbyshire.",
  alternates: { canonical: "https://aesuk.co/pricing" },
};

const pricingItems = [
  {
    category: "Diagnostics & Electrical",
    items: [
      {
        name: "Mobile Dealer-Level Diagnostics",
        price: "From £65",
        desc: "Full vehicle scan, live data analysis, and initial fault finding at your location.",
      },
      {
        name: "Parasitic Battery Drain Testing",
        price: "From £75",
        desc: "Thermal & millivolt drop testing to identify modules keeping your battery awake.",
      },
      {
        name: "Battery Replacement & BMS Coding",
        price: "Quote on Reg",
        desc: "OEM-spec AGM/EFB battery supplied, fitted, and registered to the vehicle ECU.",
      },
    ],
  },
  {
    category: "Keys & Security",
    items: [
      {
        name: "Spare Car Key Cut & Coded",
        price: "From £110",
        desc: "Remote or transponder spare key cut and programmed at your home or workplace.",
      },
      {
        name: "All Keys Lost Emergency Callout",
        price: "From £160",
        desc: "Non-destructive vehicle entry, key cutting from lock/code, and immobiliser coding.",
      },
      {
        name: "Autowatch Ghost 2 Immobiliser",
        price: "£499 Fitted",
        desc: "TASSA-verified installation with 2-year warranty and official certificate.",
      },
    ],
  },
  {
    category: "Tuning & Upgrades",
    items: [
      {
        name: "Mobile Stage 1 ECU Remap",
        price: "From £249",
        desc: "Custom calibration with full pre-remap diagnostic health check included.",
      },
      {
        name: "Dash Cam Hardwire Installation",
        price: "From £85",
        desc: "Concealed OEM-style installation (supply & fit packages also available).",
      },
      {
        name: "Parking Sensors / Reversing Camera",
        price: "From £175",
        desc: "Flush-fit rear sensors or integrated reversing camera installation.",
      },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          badge="Transparent Pricing"
          title="Clear, Upfront Pricing Guide"
          highlight="No Hidden Callout Surprises"
          description="We quote fixed prices upfront before any work begins. Save significantly compared to main dealer rates and recovery truck fees."
          breadcrumbs={[{ label: "Pricing Guide" }]}
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {pricingItems.map((group) => (
              <div key={group.category}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-3 border-b border-slate-200">
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="rounded-xl border border-slate-200 p-6 bg-white shadow-sm flex flex-col justify-between"
                    >
                      <div>
                        <div className="text-2xl font-bold text-[#0066d6] mb-2">
                          {item.price}
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed mb-5">
                          {item.desc}
                        </p>
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 hover:text-[#0066d6]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#0066d6]" />
                        Get Exact Quote for Your Reg
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="bg-[#0c1527] text-white rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold mb-1">Need an Exact Quote?</h3>
                <p className="text-sm text-slate-300">
                  Call with your vehicle registration and postcode for an immediate fixed price.
                </p>
              </div>
              <a
                href="tel:07753891461"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-bold bg-[#0066d6] hover:bg-[#0052b0] transition-colors shrink-0"
              >
                <Phone className="w-4 h-4" />
                07753 891461
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
