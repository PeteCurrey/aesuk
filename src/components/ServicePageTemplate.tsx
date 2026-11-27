import Link from "next/link";
import { CheckCircle2, Phone, MapPin, Shield, Clock, ArrowRight, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";

export interface ServiceOffering {
  name: string;
  description: string;
  features: string[];
  pricing?: string;
}

export interface ServicePageData {
  slug: string;
  badge: string;
  pageTitle: string;
  metaDescription: string;
  h1: string;
  highlight?: string;
  intro: string;
  backgroundImage?: string;
  services: ServiceOffering[];
  benefits?: string[];
  areasServed?: string[];
  faqs: FAQItem[];
  relatedLinks?: { label: string; href: string }[];
}

export default function ServicePageTemplate({ data }: { data: ServicePageData }) {
  const pageUrl = `https://aesuk.co/${data.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: data.h1,
    description: data.metaDescription,
    url: pageUrl,
    provider: {
      "@type": "AutoRepair",
      name: "AES Autoelectrical",
      telephone: "+44-7753-891461",
      email: "info@aesuk.co",
      url: "https://aesuk.co",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chesterfield",
        addressRegion: "Derbyshire",
        addressCountry: "GB",
      },
    },
    areaServed: (data.areasServed || [
      "Chesterfield",
      "Sheffield",
      "Dronfield",
      "Matlock",
      "Bolsover",
      "Staveley",
    ]).map((city) => ({ "@type": "City", name: city })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aesuk.co",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://aesuk.co/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.h1,
        item: pageUrl,
      },
    ],
  };

  const faqSchema =
    data.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {faqSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        )}

        <PageHero
          badge={data.badge}
          title={data.h1}
          highlight={data.highlight}
          description={data.intro}
          backgroundImage={data.backgroundImage || "/assets/aes-hero-new.png"}
          breadcrumbs={[
            { label: "Services", href: "/services" },
            { label: data.h1 },
          ]}
        />

        {/* Trust strip */}
        <section className="border-b border-slate-200 bg-slate-50 py-5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#0066d6] shrink-0" />
              <span>100% Mobile to Home or Work</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#0066d6] shrink-0" />
              <span>Same-Day Callouts Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#0066d6] shrink-0" />
              <span>IMI Qualified & Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Dealer-Level Equipment</span>
            </div>
          </div>
        </section>

        {/* Service Offerings Grid */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl sm:text-3xl tracking-tight text-slate-900 mb-3">
                What Our {data.h1} Service Covers
              </h2>
              <p className="text-slate-600">
                Complete mobile diagnostics, programming, and repair packages delivered directly to your vehicle across Chesterfield and Derbyshire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {data.services.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <h3 className="text-lg text-slate-900">
                        {service.name}
                      </h3>
                      {service.pricing && (
                        <span className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#0066d6] border border-blue-100">
                          {service.pricing}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#0066d6] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0066d6] hover:text-[#0052b0] transition-colors"
                  >
                    Book {service.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works & E-E-A-T Standards */}
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl sm:text-3xl tracking-tight text-slate-900 mb-3">
                How Our Mobile Service Works
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                No recovery trucks, no main dealer waiting lists, and clear upfront pricing before we dispatch.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#0066d6] mb-2">
                  Step 1 · Reg & Fixed Quote
                </div>
                <h3 className="text-lg text-slate-900 mb-2">
                  Call or Enquire with Your Reg
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Share your vehicle registration and postcode so we can confirm compatibility, parts or key stock, and give you a clear price before booking.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#0066d6] mb-2">
                  Step 2 · Mobile Workshop Arrives
                </div>
                <h3 className="text-lg text-slate-900 mb-2">
                  We Come to Your Driveway or Work
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our self-contained van arrives equipped with dealer-level diagnostic interfaces, PicoScope oscilloscopes, and OEM-grade key programming tools.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#0066d6] mb-2">
                  Step 3 · Tested & Guaranteed
                </div>
                <h3 className="text-lg text-slate-900 mb-2">
                  Verified Under Real Load
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every repair, installation, or replacement key is thoroughly tested on-site and backed by our workmanship guarantee and full trade insurance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits + CTA Band */}
        <section className="py-14 bg-[#0c1527] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl mb-4">
                Why Choose AES Autoelectrical?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mb-6">
                Skip main dealer waiting lists and recovery truck costs. Our mobile workshops carry dealer-level diagnostic hardware, oscilloscopes, and key programming tools across Chesterfield and Derbyshire.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {(data.benefits && data.benefits.length > 0
                  ? data.benefits
                  : [
                      "100% mobile workshop to your door",
                      "Dealer-grade diagnostics & oscilloscopes",
                      "Transparent upfront pricing",
                      "Fully insured & workmanship guaranteed",
                    ]
                ).map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-5 bg-slate-800/60 border border-slate-700/80 rounded-xl p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[#38bdf8] text-xs font-semibold uppercase tracking-wider mb-2">
                <Wrench className="w-4 h-4" />
                Direct Engineer Line
              </div>
              <h3 className="text-lg mb-2">Need Immediate Assistance?</h3>
              <p className="text-sm text-slate-300 mb-5">
                Speak directly with a mobile auto electrician for an instant quote and availability.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="tel:07753891461"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-lg font-medium text-white bg-[#0066d6] hover:bg-[#0052b0] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call 07753 891461
                </a>
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center py-3 px-5 rounded-lg font-medium text-slate-200 bg-slate-700/60 hover:bg-slate-700 border border-slate-600 transition-colors"
                >
                  Request Online Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        {data.relatedLinks && data.relatedLinks.length > 0 && (
          <section className="py-12 bg-white border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h3 className="text-sm uppercase tracking-wider text-slate-500 mb-4">
                Related Services & Areas
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {data.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3.5 py-2 rounded-lg text-sm text-slate-700 bg-slate-50 border border-slate-200 hover:border-[#0066d6] hover:text-[#0066d6] transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {data.faqs.length > 0 && <FAQAccordion items={data.faqs} />}
      </main>
      <Footer />
    </>
  );
}
