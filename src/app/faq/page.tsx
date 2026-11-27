import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import FAQAccordion, { FAQItem } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about mobile auto electrical repairs, car key replacement, Ghost 2 immobilisers, and ECU remapping in Chesterfield & Derbyshire.",
  alternates: { canonical: "https://aesuk.co/faq" },
};

const allFaqs: FAQItem[] = [
  {
    question: "Are you 100% mobile or do I need to bring my vehicle to a workshop?",
    answer:
      "We are a fully mobile auto electrical service. Our vans are equipped with dealer-level diagnostics, oscilloscopes, key cutting machines, and battery testing equipment, allowing us to complete repairs at your home, workplace, or roadside.",
  },
  {
    question: "Can you replace car keys if I have lost all of them?",
    answer:
      "Yes. We provide a complete All Keys Lost mobile service. We can gain non-destructive entry to your vehicle, cut a new blade from the lock or key code, and program a new transponder or smart proximity key to your car's immobiliser on-site.",
  },
  {
    question: "What areas around Chesterfield do you cover?",
    answer:
      "We cover Chesterfield and a 30-mile surrounding radius including Sheffield, Dronfield, Staveley, Bolsover, Clay Cross, Eckington, Matlock, Bakewell, Buxton, and Alfreton.",
  },
  {
    question: "Is the Autowatch Ghost 2 immobiliser TASSA approved?",
    answer:
      "Yes. We are TASSA-registered installers for the Autowatch Ghost 2 immobiliser. Upon installation, you receive an official TASSA certificate which is recognised by major UK vehicle insurers.",
  },
  {
    question: "Can you replace Ford Transit and commercial van keys?",
    answer:
      "Yes, we carry stock for Ford Transit, Transit Custom, Vauxhall Vivaro, VW Transporter, Mercedes Sprinter, and most other UK commercial vans, offering same-day mobile replacement.",
  },
  {
    question: "Is mobile ECU remapping safe for my engine?",
    answer:
      "Yes. Before any remap is applied, we perform a full dealer-level diagnostic health check and battery voltage stabilisation. We only write custom, safe calibrations tailored to your specific vehicle's condition.",
  },
  {
    question: "Do new AGM or EFB start-stop batteries need coding?",
    answer:
      "Yes. Modern vehicles with Battery Management Systems (BMS) must have a new battery registered/coded to the ECU so the charging system adjusts correctly and prevents premature battery failure.",
  },
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <PageHero
          badge="Help & Information"
          title="Frequently Asked Questions"
          highlight="Everything You Need to Know"
          description="Clear answers on our mobile callouts, vehicle diagnostics, car key replacement, and security installations."
          breadcrumbs={[{ label: "FAQ" }]}
        />

        <FAQAccordion
          items={allFaqs}
          title="Common Questions"
          subtitle="Can't find what you're looking for? Call 07753 891461 to speak with an engineer."
        />
      </main>
      <Footer />
    </>
  );
}
