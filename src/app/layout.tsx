import type { Metadata, Viewport } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  variable: "--font-work-sans",
});

export const viewport: Viewport = {
  themeColor: "#0c1527",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://aesuk.co"),
  title: {
    default: "AES Autoelectrical | Mobile Auto Electrician Chesterfield & Derbyshire",
    template: "%s | AES Autoelectrical",
  },
  description:
    "Specialist mobile auto electrician covering Chesterfield, Sheffield, and Derbyshire. Dealer-level diagnostics, ECU remapping, Ghost 2 immobilisers, and mobile key programming.",
  keywords: [
    "mobile auto electrician chesterfield",
    "auto electrical repairs derbyshire",
    "ghost 2 immobiliser chesterfield",
    "ecu remapping mobile",
    "car electrical diagnostics",
    "replacement car keys chesterfield",
    "fleet vehicle electrical services",
  ],
  authors: [{ name: "AES Autoelectrical" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "AES Autoelectrical | Mobile Auto Electrician Chesterfield",
    description:
      "Specialist mobile diagnostics, auto electrical repairs, remapping, and security installations across Chesterfield & Derbyshire.",
    url: "https://aesuk.co",
    siteName: "AES Autoelectrical",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/assets/aes-hero-new.png",
        width: 1200,
        height: 630,
        alt: "AES Autoelectrical Mobile Auto Electrician Chesterfield",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AES Autoelectrical | Mobile Auto Electrician",
    description:
      "Specialist mobile auto electrical services delivered to your door in Chesterfield & Derbyshire.",
    images: ["/assets/aes-hero-new.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: "AES Autoelectrical",
    description:
      "Mobile auto electrician in Chesterfield. Dealer diagnostics, electrical repairs, ECU remapping, Ghost 2 immobiliser fitting, and mobile keys across Derbyshire.",
    url: "https://aesuk.co",
    image: "https://aesuk.co/assets/aes-hero-new.png",
    telephone: "+44-7753-891461",
    email: "info@aesuk.co",
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chesterfield",
      addressRegion: "Derbyshire",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.235,
      longitude: -1.4216,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Chesterfield" },
      { "@type": "City", name: "Sheffield" },
      { "@type": "City", name: "Dronfield" },
      { "@type": "City", name: "Staveley" },
      { "@type": "City", name: "Matlock" },
      { "@type": "City", name: "Bakewell" },
      { "@type": "City", name: "Bolsover" },
      { "@type": "City", name: "Buxton" },
      { "@type": "City", name: "Alfreton" },
    ],
  };

  return (
    <html lang="en" className={workSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans font-light antialiased text-foreground flex flex-col">
        {children}
      </body>
    </html>
  );
}
