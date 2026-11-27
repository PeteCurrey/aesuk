import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { servicePages } from "@/data/servicePages";

const data = servicePages["ecu-remapping"];

export const metadata: Metadata = {
  title: data.pageTitle,
  description: data.metaDescription,
  alternates: { canonical: "https://aesuk.co/ecu-remapping" },
};

export default function TuningEcuRemappingPage() {
  return <ServicePageTemplate data={data} />;
}
