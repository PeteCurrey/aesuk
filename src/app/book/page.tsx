import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Book a Mobile Auto Electrician",
  description:
    "Book a mobile auto electrician in Chesterfield, Sheffield, or Derbyshire. Same-day key replacement, diagnostics, Ghost 2 immobiliser fitting, and ECU remapping.",
  alternates: { canonical: "https://aesuk.co/book" },
};

export default function BookPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          badge="Online Booking"
          title="Book Your Mobile Appointment"
          highlight="We Come to You"
          description="Select your required service and share your vehicle details below. We will confirm your appointment slot and upfront price."
          breadcrumbs={[{ label: "Book Online" }]}
        />

        <section className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
