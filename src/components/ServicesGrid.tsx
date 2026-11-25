import Link from "next/link";
import {
  Cpu,
  Wrench,
  CircuitBoard,
  Shield,
  Settings,
  Truck,
  ArrowRight,
  Battery,
  Lock,
} from "lucide-react";

export default function ServicesGrid() {
  const services = [
    {
      title: "Dealer-Level Diagnostics",
      description:
        "Oscilloscope testing, live sensor datalogging, CAN-bus fault tracing, and engine management code troubleshooting where standard scanners fail.",
      icon: Cpu,
      href: "/diagnostics",
      badge: "Core Expertise",
    },
    {
      title: "Electrical Repairs & Rewiring",
      description:
        "Locating parasitic battery drains, wiring harness breaks, blown fuses, relay malfunctions, and lighting circuits for cars, vans, and commercial vehicles.",
      icon: Wrench,
      href: "/electrical-repairs",
      badge: "Mobile Workshop",
    },
    {
      title: "Mobile ECU Remapping",
      description:
        "Custom Stage 1 performance and economy engine calibrations flashed directly at your location. Increase BHP, torque, and fuel efficiency safely.",
      icon: CircuitBoard,
      href: "/ecu-remapping",
      badge: "Tuning Specialist",
    },
    {
      title: "Ghost 2 Immobiliser Fitting",
      description:
        "TASSA-registered mobile installation of the Autowatch Ghost 2 covert immobiliser. Protects high-theft vehicles against key cloning and relay attacks.",
      icon: Shield,
      href: "/ghost-2-immobiliser",
      badge: "TASSA Approved",
    },
    {
      title: "OEM & Accessory Upgrades",
      description:
        "Clean, factory-style hardwiring for dual dash cams, front and rear parking sensors, reversing cameras, aux lighting, and towbar electronics.",
      icon: Settings,
      href: "/upgrades",
      badge: "Seamless Fitting",
    },
    {
      title: "Fleet & Commercial Electrics",
      description:
        "Electrical support for tradesmen and company fleets. Split charge relays, Chapter 8 beacons, inverters, van racking power, and battery management.",
      icon: Truck,
      href: "/fleet-services",
      badge: "Commercial Grade",
    },
  ];

  return (
    <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#0066d6] mb-3">
            Comprehensive Mobile Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0c1527] tracking-tight">
            Specialist Auto Electrical Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Delivering dealer-quality diagnostic apparatus and master technician expertise
            directly to your home, depot, or business premises.
          </p>
        </div>

        {/* 3-Column Corporate Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-xl p-8 border border-slate-200 hover:border-blue-400 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0066d6] flex items-center justify-center group-hover:bg-[#0066d6] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0066d6] transition-colors mb-3">
                    {service.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0066d6] group-hover:text-[#0052b0] transition-colors pt-4 border-t border-slate-100"
                >
                  View service details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* View all services footer strip */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
          >
            Browse All Auto Electrical Services & Add-Ons →
          </Link>
        </div>
      </div>
    </section>
  );
}
