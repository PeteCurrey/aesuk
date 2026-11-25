"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Wrench,
  Shield,
  Cpu,
  CircuitBoard,
  Lock,
  Battery,
  Radio,
  Truck,
  Video,
  Clock,
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = !isScrolled && !isMobileMenuOpen;

  const services = [
    {
      group: "Diagnostics & Electronics",
      items: [
        { name: "Vehicle Diagnostics", href: "/diagnostics", icon: Cpu, desc: "Dealer-grade electronic fault tracing" },
        { name: "Electrical Repairs", href: "/electrical-repairs", icon: Wrench, desc: "Wiring harnesses & short circuits" },
        { name: "Battery Replacement & Coding", href: "/battery-replacement-coding-chesterfield", icon: Battery, desc: "AGM/EFB registration & supply" },
      ],
    },
    {
      group: "Keys & Security",
      items: [
        { name: "Replacement Car Keys", href: "/replacement-car-keys-chesterfield", icon: Lock, desc: "Mobile cutting, cloning & programming" },
        { name: "Ghost 2 Immobiliser", href: "/ghost-2-immobiliser", icon: Shield, desc: "TASSA-verified covert theft prevention" },
        { name: "Key Fob Programming", href: "/replacement-car-fobs-chesterfield", icon: Radio, desc: "Smart keys, proximity & remotes" },
      ],
    },
    {
      group: "Tuning & Commercial",
      items: [
        { name: "Mobile ECU Remapping", href: "/ecu-remapping", icon: CircuitBoard, desc: "Bespoke stage 1 & economy calibrations" },
        { name: "Fleet & Commercial Electrics", href: "/fleet-services", icon: Truck, desc: "Vans, commercial plant & Chapter 8" },
        { name: "OEM & Accessory Upgrades", href: "/upgrades", icon: Video, desc: "Dash cams, reverse sensors & towbars" },
      ],
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent border-b border-white/10"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
      }`}
    >
      {/* Top Utility Bar - Corporate trust & direct phone line */}
      <div
        className={`text-xs py-2 px-4 border-b transition-colors duration-300 ${
          isTransparent
            ? "bg-transparent text-slate-300 border-white/10"
            : "bg-[#0c1527] text-slate-300 border-slate-800"
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#38bdf8]" />
              Mobile Service across Chesterfield, Sheffield & Derbyshire
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#38bdf8]" />
              Mon - Sat: 8:00 AM - 6:00 PM
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="mailto:info@aesuk.co"
              className="hidden lg:flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#38bdf8]" />
              info@aesuk.co
            </a>
            <a
              href="tel:07753891461"
              className="flex items-center gap-1.5 font-semibold text-white hover:text-blue-400 transition-colors bg-blue-600/30 px-2.5 py-0.5 rounded border border-blue-500/30"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              Direct: 07753 891461
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Corporate Brand Identity */}
          <Link href="/" className="flex items-center group">
            <div className="flex flex-col">
              <span
                className={`text-xl font-bold tracking-tight leading-none transition-colors ${
                  isTransparent ? "text-white" : "text-slate-900"
                }`}
              >
                AES<span className={isTransparent ? "text-[#38bdf8]" : "text-[#0066d6]"}>.</span>
              </span>
              <span
                className={`text-[11px] font-semibold tracking-wider uppercase mt-1 transition-colors ${
                  isTransparent ? "text-slate-300" : "text-slate-500"
                }`}
              >
                Autoelectrical Specialist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === "/"
                  ? isTransparent
                    ? "text-white bg-white/15"
                    : "text-[#0066d6] bg-blue-50"
                  : isTransparent
                  ? "text-white/90 hover:text-white hover:bg-white/10"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  activeDropdown === "services"
                    ? isTransparent
                      ? "text-white bg-white/15"
                      : "text-[#0066d6] bg-blue-50"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                Services
                <ChevronDown
                  className={`w-4 h-4 ${isTransparent ? "text-slate-300" : "text-slate-400"}`}
                />
              </button>

              {activeDropdown === "services" && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[820px] bg-white rounded-xl shadow-2xl border border-slate-200/90 p-6 grid grid-cols-3 gap-6 animate-in fade-in-50 zoom-in-95 duration-150">
                  {services.map((category) => (
                    <div key={category.group} className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-1.5 border-b border-slate-100">
                        {category.group}
                      </h4>
                      <ul className="space-y-2">
                        {category.items.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-50 transition-colors group"
                              >
                                <div className="w-8 h-8 rounded-md bg-blue-50 text-[#0066d6] flex items-center justify-center shrink-0 group-hover:bg-[#0066d6] group-hover:text-white transition-colors">
                                  <Icon className="w-4 h-4" />
                                </div>
                                <div>
                                  <div className="text-sm font-semibold text-slate-800 group-hover:text-[#0066d6] transition-colors">
                                    {item.name}
                                  </div>
                                  <div className="text-xs text-slate-500 line-clamp-1">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}

                  <div className="col-span-3 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/70 -mx-6 -mb-6 p-4 rounded-b-xl">
                    <div className="text-xs text-slate-600 font-medium">
                      Need emergency mobile key replacement or urgent electrical assistance?
                    </div>
                    <a
                      href="tel:07753891461"
                      className="text-xs font-bold text-[#0066d6] hover:underline flex items-center gap-1"
                    >
                      Call Dispatch: 07753 891461 →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {[
              { href: "/service-areas", label: "Service Areas" },
              { href: "/pricing", label: "Pricing Guide" },
              { href: "/about", label: "About" },
              { href: "/faq", label: "FAQ" },
              { href: "/blog", label: "Articles" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3.5 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname === item.href
                    ? isTransparent
                      ? "text-white bg-white/15"
                      : "text-[#0066d6] bg-blue-50"
                    : isTransparent
                    ? "text-white/90 hover:text-white hover:bg-white/10"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0066d6] hover:bg-[#0052b0] shadow-sm hover:shadow-md transition-all"
            >
              Request Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-100"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-100"
          >
            All Services
          </Link>
          <div className="pl-3 space-y-1 border-l-2 border-blue-500">
            <Link
              href="/replacement-car-keys-chesterfield"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-[#0066d6]"
            >
              Key & Fob Replacement
            </Link>
            <Link
              href="/diagnostics"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-[#0066d6]"
            >
              Vehicle Diagnostics
            </Link>
            <Link
              href="/ecu-remapping"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-[#0066d6]"
            >
              ECU Remapping
            </Link>
            <Link
              href="/ghost-2-immobiliser"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-1.5 text-sm font-medium text-slate-600 hover:text-[#0066d6]"
            >
              Ghost 2 Immobiliser
            </Link>
          </div>
          <Link
            href="/service-areas"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-100"
          >
            Service Areas
          </Link>
          <Link
            href="/pricing"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-100"
          >
            Pricing Guide
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-100"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-semibold text-slate-800 rounded-md hover:bg-slate-100"
          >
            Contact
          </Link>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="tel:07753891461"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-bold text-white bg-[#0066d6]"
            >
              <Phone className="w-4 h-4" />
              Call 07753 891461
            </a>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center py-2.5 rounded-lg font-semibold text-slate-700 bg-slate-100"
            >
              Online Booking Enquiry
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
