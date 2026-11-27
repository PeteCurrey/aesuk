import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Shield, Cpu, Award, Wrench, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About Us | Mobile Auto Electrician Chesterfield",
  description:
    "Learn about AES Autoelectrical — specialist mobile auto electricians serving Chesterfield, Sheffield, and Derbyshire with dealer-level diagnostics, key programming, and Ghost 2 security.",
  alternates: { canonical: "https://aesuk.co/about" },
};

export default function AboutPage() {
  const pillars = [
    {
      icon: Cpu,
      title: "Dealer-Level Diagnostics",
      desc: "We invest in OEM-grade diagnostic interfaces, 4-channel PicoScope oscilloscopes, and live wiring diagrams to pinpoint faults without guesswork.",
    },
    {
      icon: Shield,
      title: "TASSA Registered Installer",
      desc: "Approved Autowatch Ghost 2 immobiliser and vehicle security specialist protecting cars, vans, and commercial fleets across Derbyshire.",
    },
    {
      icon: Wrench,
      title: "100% Mobile Workshop",
      desc: "Our vans carry key cutting machines, programming tools, AGM batteries, and OEM wiring repair kits straight to your home or workplace.",
    },
    {
      icon: Award,
      title: "IMI Qualified & Insured",
      desc: "Full public liability and motor trade road-risk insurance, with workmanship guaranteed on every repair and installation.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          badge="About AES Autoelectrical"
          title="Specialist Auto Electrical Engineering"
          highlight="Delivered to Your Door"
          description="Based in Chesterfield and covering Derbyshire and South Yorkshire, AES Autoelectrical solves complex vehicle electronics, key programming, and security installations without the main dealer wait."
          breadcrumbs={[{ label: "About" }]}
          backgroundImage="/assets/professional-garage-snapon.jpg"
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                Why Drivers & Commercial Fleets Trust AES
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Modern vehicles rely on dozens of networked control modules communicating over CAN-bus, LIN-bus, and FlexRay networks. When an electrical fault occurs, generic code readers only tell half the story.
              </p>
              <p className="text-slate-600 leading-relaxed">
                AES Autoelectrical bridges the gap between standard mechanical garages and main dealerships. Whether you have lost all car keys, have a parasitic battery drain, need a Ghost 2 immobiliser fitted, or want safe mobile ECU remapping, we bring workshop-grade capability directly to your driveway.
              </p>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "No recovery truck fees",
                  "Same-day emergency key callouts",
                  "Transparent upfront pricing",
                  "Cars, vans, 4x4s & commercial fleets",
                  "OEM-spec wiring & soldering repairs",
                  "Chesterfield, Sheffield & Derbyshire",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#0066d6] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {pillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0066d6] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm mb-1">{p.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#0066d6]" />
              <div>
                <h3 className="font-bold text-slate-900">Covering a 30-Mile Radius from Chesterfield</h3>
                <p className="text-sm text-slate-600">
                  Sheffield, Dronfield, Staveley, Bolsover, Matlock, Bakewell, Buxton & Alfreton.
                </p>
              </div>
            </div>
            <Link
              href="/service-areas"
              className="px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-[#0066d6] hover:bg-[#0052b0] transition-colors shrink-0"
            >
              View Service Areas
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
