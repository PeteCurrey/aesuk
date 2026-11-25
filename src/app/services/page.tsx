import type { Metadata } from "next";
import Link from "next/link";
import {
  Cpu,
  Wrench,
  Lock,
  Shield,
  CircuitBoard,
  Truck,
  Battery,
  Video,
  Radio,
  ArrowRight,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Auto Electrical Services Chesterfield",
  description:
    "Full range of mobile auto electrical services in Chesterfield & Derbyshire: dealer diagnostics, car key replacement, Ghost 2 immobilisers, ECU remapping, and fleet electrics.",
  alternates: { canonical: "https://aesuk.com/services" },
};

const serviceGroups = [
  {
    title: "Diagnostics & Electrical Repairs",
    items: [
      {
        name: "Dealer-Level Vehicle Diagnostics",
        href: "/diagnostics",
        icon: Cpu,
        desc: "Oscilloscope waveform testing, CAN-bus fault finding, and module coding across all makes.",
      },
      {
        name: "Auto Electrical Repairs",
        href: "/electrical-repairs",
        icon: Wrench,
        desc: "Wiring loom repairs, parasitic drain tracing, alternator & starter motor diagnostics.",
      },
      {
        name: "Battery Replacement & Coding",
        href: "/battery-replacement-coding-chesterfield",
        icon: Battery,
        desc: "AGM & EFB battery supply, fitting, and BMS registration on your driveway.",
      },
    ],
  },
  {
    title: "Car Keys & Vehicle Security",
    items: [
      {
        name: "Replacement Car Keys",
        href: "/replacement-car-keys-chesterfield",
        icon: Lock,
        desc: "Lost all keys, spare keys, and emergency mobile key cutting & programming.",
      },
      {
        name: "Autowatch Ghost 2 Immobiliser",
        href: "/ghost-2-immobiliser",
        icon: Shield,
        desc: "TASSA-verified covert immobiliser preventing key cloning and relay theft.",
      },
      {
        name: "Key Fob & Smart Key Programming",
        href: "/replacement-car-fobs-chesterfield",
        icon: Radio,
        desc: "Remote fobs, proximity keys, and transponder chip programming.",
      },
    ],
  },
  {
    title: "Remapping, Fleet & Upgrades",
    items: [
      {
        name: "Mobile ECU Remapping",
        href: "/ecu-remapping",
        icon: CircuitBoard,
        desc: "Custom Stage 1 performance and fuel economy remaps at your home or workplace.",
      },
      {
        name: "Fleet & Commercial Electrics",
        href: "/fleet-services",
        icon: Truck,
        desc: "Chapter 8 beacons, work lighting, split-charge systems, and fleet diagnostics.",
      },
      {
        name: "OEM & Accessory Upgrades",
        href: "/upgrades",
        icon: Video,
        desc: "Hardwired dash cams, parking sensors, reversing cameras, and towbar wiring.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          badge="Mobile Workshop Services"
          title="Complete Auto Electrical Services"
          highlight="Chesterfield & Derbyshire"
          description="From emergency car key replacement to complex CAN-bus diagnostics and Ghost 2 immobiliser fitting, we bring dealer-grade equipment to your door."
          breadcrumbs={[{ label: "Services" }]}
          backgroundImage="/assets/services-workshop-bg.jpg"
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {serviceGroups.map((group) => (
              <div key={group.title}>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6 pb-3 border-b border-slate-200">
                  {group.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="group bg-white rounded-xl border border-slate-200 p-6 hover:border-[#0066d6] hover:shadow-md transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="w-11 h-11 rounded-lg bg-blue-50 text-[#0066d6] flex items-center justify-center mb-4 group-hover:bg-[#0066d6] group-hover:text-white transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#0066d6] transition-colors">
                            {item.name}
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed mb-5">
                            {item.desc}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066d6]">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
