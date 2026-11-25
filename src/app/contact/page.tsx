import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Book a Mobile Auto Electrician",
  description:
    "Contact AES Autoelectrical in Chesterfield for mobile diagnostics, replacement car keys, Ghost 2 immobiliser fitting, and ECU remapping. Call 07753 891461.",
  alternates: { canonical: "https://aesuk.com/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          badge="Direct Dispatch & Quotes"
          title="Contact AES Autoelectrical"
          highlight="Same-Day Mobile Availability"
          description="Request a quote online or call us directly for urgent car key replacements, fault diagnostics, and mobile auto electrical bookings across Chesterfield & Derbyshire."
          breadcrumbs={[{ label: "Contact" }]}
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Get in Touch
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Have your vehicle registration or make/model ready so we can provide an accurate quote and check parts/key stock availability.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="tel:07753891461"
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-[#0066d6] transition-colors bg-slate-50/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#0066d6] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Direct Mobile Line
                    </div>
                    <div className="text-lg font-bold text-slate-900">07753 891461</div>
                    <div className="text-xs text-slate-500">Tap to call for urgent assistance</div>
                  </div>
                </a>

                <a
                  href="mailto:info@aesuk.co"
                  className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 hover:border-[#0066d6] transition-colors bg-slate-50/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0066d6] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Email
                    </div>
                    <div className="text-base font-bold text-slate-900">info@aesuk.co</div>
                    <div className="text-xs text-slate-500">Fast response during business hours</div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0066d6] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Service Coverage
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      Chesterfield & Derbyshire
                    </div>
                    <div className="text-xs text-slate-500">
                      Mobile service covering Sheffield, Dronfield, Matlock, Bolsover & surrounding towns
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0066d6] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Opening Hours
                    </div>
                    <div className="text-sm font-semibold text-slate-900">
                      Mon – Fri: 8:00 AM – 6:00 PM
                    </div>
                    <div className="text-sm text-slate-600">
                      Sat: 8:00 AM – 2:00 PM (Emergency key callouts available)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-6">
                Request a Quote or Booking
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
