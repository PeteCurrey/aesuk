import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0c1527] text-slate-300 border-t border-slate-800">
      {/* Top Pre-Footer Callout Bar */}
      <div className="bg-[#09101f] border-b border-slate-800/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Ready to Book Your Mobile Visit?
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Speak directly with our senior auto electrician for fast diagnostics or quote.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href="tel:07753891461"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[#0066d6] hover:bg-[#0052b0] shadow-md transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call 07753 891461
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              Online Enquiry Form
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Contact */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-[#0066d6] flex items-center justify-center text-white font-extrabold text-base">
                AES
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                AES<span className="text-blue-500">.</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Specialist mobile auto electrician delivering dealer-level diagnostics, ECU remapping,
              and TASSA Ghost 2 immobiliser installations across Chesterfield, Sheffield, and Derbyshire.
            </p>
            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <a
                href="tel:07753891461"
                className="flex items-center gap-2.5 text-white hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>07753 891461</span>
              </a>
              <a
                href="mailto:info@aesuk.co"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>info@aesuk.co</span>
              </a>
              <div className="flex items-center gap-2.5 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Chesterfield & Derbyshire Mobile Dispatch</span>
              </div>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Auto Electrical Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/diagnostics" className="hover:text-blue-400 transition-colors">
                  Vehicle Diagnostics & Fault Tracing
                </Link>
              </li>
              <li>
                <Link href="/replacement-car-keys-chesterfield" className="hover:text-blue-400 transition-colors">
                  Mobile Replacement Car Keys
                </Link>
              </li>
              <li>
                <Link href="/ecu-remapping" className="hover:text-blue-400 transition-colors">
                  Mobile ECU Remapping & Tuning
                </Link>
              </li>
              <li>
                <Link href="/ghost-2-immobiliser" className="hover:text-blue-400 transition-colors">
                  Ghost 2 Immobiliser Fitting
                </Link>
              </li>
              <li>
                <Link href="/electrical-repairs" className="hover:text-blue-400 transition-colors">
                  Auto Electrical Wiring & Repairs
                </Link>
              </li>
              <li>
                <Link href="/battery-replacement-coding-chesterfield" className="hover:text-blue-400 transition-colors">
                  Battery Replacement & Registration
                </Link>
              </li>
              <li>
                <Link href="/fleet-services" className="hover:text-blue-400 transition-colors">
                  Commercial & Fleet Electrics
                </Link>
              </li>
            </ul>
          </div>

          {/* Regional Areas */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Service Areas Covered
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/replacement-car-keys-chesterfield" className="hover:text-blue-400 transition-colors">
                  Chesterfield (All Suburbs)
                </Link>
              </li>
              <li>
                <Link href="/car-key-replacement-sheffield" className="hover:text-blue-400 transition-colors">
                  Sheffield & South Yorkshire
                </Link>
              </li>
              <li>
                <Link href="/car-key-replacement-dronfield" className="hover:text-blue-400 transition-colors">
                  Dronfield & North Derbyshire
                </Link>
              </li>
              <li>
                <Link href="/car-key-replacement-staveley" className="hover:text-blue-400 transition-colors">
                  Staveley & Brimington
                </Link>
              </li>
              <li>
                <Link href="/car-key-replacement-matlock" className="hover:text-blue-400 transition-colors">
                  Matlock & Derbyshire Dales
                </Link>
              </li>
              <li>
                <Link href="/car-key-replacement-bakewell" className="hover:text-blue-400 transition-colors">
                  Bakewell & Peak District
                </Link>
              </li>
              <li>
                <Link href="/service-areas" className="text-blue-400 hover:underline font-semibold flex items-center gap-1 mt-2">
                  View All Locations →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Trust */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Company & Standards
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm mb-6">
              <li>
                <Link href="/about" className="hover:text-blue-400 transition-colors">
                  About AES Autoelectrical
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-blue-400 transition-colors">
                  Transparent Pricing Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition-colors">
                  Technical Articles & Advice
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition-colors">
                  Contact & Dispatch
                </Link>
              </li>
            </ul>

            <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/80 text-xs text-slate-400 space-y-1">
              <div className="font-bold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                TASSA Approved Installer
              </div>
              <div>Certified Autowatch Ghost 2 Security Specialist</div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright row */}
      <div className="border-t border-slate-800/80 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            © 2026 AES Autoelectrical. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-500">Professional Mobile Diagnostics & Coding</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
