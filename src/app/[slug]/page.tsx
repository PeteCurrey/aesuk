import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import ManufacturerKeyTemplate from "@/components/ManufacturerKeyTemplate";
import { servicePages } from "@/data/servicePages";
import { manufacturerKeyPages } from "@/data/manufacturerKeys";

export function generateStaticParams() {
  const allSlugs = [
    ...Object.keys(servicePages),
    ...Object.keys(manufacturerKeyPages),
  ];
  return allSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const serviceData = servicePages[slug];
  if (serviceData) {
    const canonicalSlug = slug === "oem-upgrades" ? "upgrades" : slug;
    return {
      title: serviceData.pageTitle,
      description: serviceData.metaDescription,
      alternates: { canonical: `https://aesuk.com/${canonicalSlug}` },
      openGraph: {
        title: serviceData.pageTitle,
        description: serviceData.metaDescription,
        url: `https://aesuk.com/${canonicalSlug}`,
        siteName: "AES Autoelectrical",
        locale: "en_GB",
        type: "website",
      },
    };
  }

  const mfgData = manufacturerKeyPages[slug];
  if (mfgData) {
    const title = `${mfgData.manufacturer} Key Replacement Chesterfield | ${mfgData.manufacturer} Key Fob Programming`;
    return {
      title,
      description: mfgData.metaDescription,
      alternates: { canonical: `https://aesuk.com/${slug}` },
      openGraph: {
        title,
        description: mfgData.metaDescription,
        url: `https://aesuk.com/${slug}`,
        siteName: "AES Autoelectrical",
        locale: "en_GB",
        type: "website",
      },
    };
  }

  return {};
}

export default async function DynamicServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const serviceData = servicePages[slug];
  if (serviceData) {
    return <ServicePageTemplate data={serviceData} />;
  }

  const mfgData = manufacturerKeyPages[slug];
  if (mfgData) {
    return <ManufacturerKeyTemplate data={mfgData} />;
  }

  notFound();
}
