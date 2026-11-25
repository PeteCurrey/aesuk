import Link from "next/link";
import { CheckCircle2, Key, Car, AlertTriangle, Phone, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";

export interface ManufacturerKeyData {
  manufacturer: string;
  slug: string;
  models: string[];
  keyTypes: string[];
  commonIssues: string[];
  faqs: FAQItem[];
  description: string;
  metaDescription: string;
}

export default function ManufacturerKeyTemplate({
  data,
}: {
  data: ManufacturerKeyData;
}) {
  const { manufacturer, slug, models, keyTypes, commonIssues, faqs, description, metaDescription } = data;
  const pageUrl = `https://aesuk.comm/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${manufacturer} Key Replacement Chesterfield`,
    description: metaDescription,
    url: pageUrl,
    provider: {
      "@type": "AutoRepair",
      name: "AES Autoelectrical",
      telephone: "+44-7753-891461",
      email: "info@aesuk.co",
      url: "https://aesuk.comm",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Chesterfield",
        addressRegion: "Derbyshire",
        addressCountry: "GB",
      },
    },
    serviceType: "Automotive Key Replacement",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://aesuk.comm",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Replacement Car Keys",
        item: "https://aesuk.comm/replacement-car-keys-chesterfield",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${manufacturer} Keys`,
        item: pageUrl,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <PageHero
          badge={`${manufacturer} Key Specialist · Mobile Service`}
          title={`${manufacturer} Key Replacement`}
          highlight="Chesterfield & Derbyshire"
          description={description}
          backgroundImage="/assets/key-replacement-hero.jpg"
          breadcrumbs={[
            { label: "Replacement Car Keys", href: "/replacement-car-keys-chesterfield" },
            { label: `${manufacturer} Keys` },
          ]}
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Supported Models */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0066d6] flex items-center justify-center mb-4">
                <Car className="w-5 h-5" />
              </div>
              <h2 className="text-xl text-slate-900 mb-3">
                {manufacturer} Models Covered
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Mobile key cutting and immobiliser programming for all popular {manufacturer} models:
              </p>
              <ul className="space-y-2">
                {models.map((model, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0066d6] shrink-0" />
                    <span>{model}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Types */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0066d6] flex items-center justify-center mb-4">
                <Key className="w-5 h-5" />
              </div>
              <h2 className="text-xl text-slate-900 mb-3">
                {manufacturer} Key Types
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                We supply, cut, and code genuine and OEM-quality keys at your location:
              </p>
              <ul className="space-y-2">
                {keyTypes.map((type, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Common Issues */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="text-xl text-slate-900 mb-3">
                Common {manufacturer} Key Issues
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                Fast roadside & driveway solutions for common faults:
              </p>
              <ul className="space-y-2">
                {commonIssues.map((issue, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Dealer vs Mobile Comparison */}
        <section className="py-14 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl text-slate-900 mb-6">
              Why Choose AES Over a {manufacturer} Main Dealer?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg text-slate-900 mb-2">Same-Day Mobile Service</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Main dealers often require 7–14 days to pre-order a {manufacturer} key and require you to recover the car to them. We come to your home or roadside the same day.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg text-slate-900 mb-2">No Recovery Truck Fees</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  If all keys are lost, we unlock your {manufacturer} non-destructively, decode the lock, cut a fresh laser blade, and program the immobiliser on-site.
                </p>
              </div>
              <div className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-lg text-slate-900 mb-2">Missing Keys Erased</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For stolen or lost {manufacturer} keys, we delete missing transponders from the vehicle memory so old keys can no longer start the engine.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-12 bg-[#0c1527] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl mb-2">
                Lost or Broken Your {manufacturer} Key?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Faster and more affordable than main dealers. Same-day mobile callouts across Chesterfield & Derbyshire.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="tel:07753891461"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium text-white bg-[#0066d6] hover:bg-[#0052b0] transition-colors"
              >
                <Phone className="w-4 h-4" />
                07753 891461
              </a>
              <Link
                href="/replacement-car-keys-chesterfield"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
              >
                All Key Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        <FAQAccordion
          items={faqs}
          title={`${manufacturer} Key Replacement FAQs`}
          subtitle={`Common questions about ${manufacturer} key cutting, coding, and replacement in Chesterfield.`}
        />
      </main>
      <Footer />
    </>
  );
}
