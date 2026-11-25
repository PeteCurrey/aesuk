import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import KeyReplacementSection from "@/components/KeyReplacementSection";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChoose from "@/components/WhyChoose";
import ServiceArea from "@/components/ServiceArea";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "https://aesuk.comm" },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <KeyReplacementSection />
        <ServicesGrid />
        <WhyChoose />
        <ServiceArea />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
