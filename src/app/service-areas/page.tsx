import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Service Areas | Mobile Auto Electrician Derbyshire & South Yorkshire",
  description:
    "Mobile auto electrical, diagnostics, and car key replacement across Chesterfield, Sheffield, Dronfield, Matlock, Bolsover, Staveley, Clay Cross, Bakewell, Buxton & Alfreton.",
  alternates: { canonical: "https://aesuk.co/service-areas" },
};

const towns = [
  { name: "Chesterfield", href: "/replacement-car-keys-chesterfield", distance: "Base Hub", desc: "All S40, S41, S42, S43, S44 & S45 postcodes." },
  { name: "Dronfield", href: "/car-key-replacement-dronfield", distance: "6 miles north", desc: "Rapid callouts across Dronfield, Coal Aston & Unstone." },
  { name: "Staveley", href: "/car-key-replacement-staveley", distance: "5 miles east", desc: "Covering Staveley, Brimington, Mastin Moor & Poolsbrook." },
  { name: "Clay Cross", href: "/car-key-replacement-clay-cross", distance: "5 miles south", desc: "Clay Cross, Danesmoor, Tupton & North Wingfield." },
  { name: "Bolsover", href: "/car-key-replacement-bolsover", distance: "6 miles east", desc: "Bolsover, Clowne, Creswell & M1 Junction 29A." },
  { name: "Eckington", href: "/car-key-replacement-eckington", distance: "7 miles north-east", desc: "Eckington, Killamarsh, Mosborough & Renishaw." },
  { name: "Sheffield", href: "/car-key-replacement-sheffield", distance: "12 miles north", desc: "South Sheffield, Meadowhall, Dore, Totley & city centre." },
  { name: "Matlock", href: "/car-key-replacement-matlock", distance: "11 miles south-west", desc: "Matlock, Matlock Bath, Darley Dale & Cromford." },
  { name: "Bakewell", href: "/car-key-replacement-bakewell", distance: "13 miles west", desc: "Bakewell, Baslow, Chatsworth & Peak District villages." },
  { name: "Alfreton", href: "/car-key-replacement-alfreton", distance: "11 miles south", desc: "Alfreton, Somercotes, South Normanton & M1 J28." },
  { name: "Buxton", href: "/car-key-replacement-buxton", distance: "24 miles west", desc: "Buxton, High Peak, Chapel-en-le-Frith & Whaley Bridge." },
];

export default function ServiceAreasPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          badge="Mobile Coverage Map"
          title="Areas We Cover"
          highlight="Derbyshire & South Yorkshire"
          description="Our mobile auto electrical workshops operate within a 30-mile radius of Chesterfield, bringing dealer-level diagnostics and key replacement directly to you."
          breadcrumbs={[{ label: "Service Areas" }]}
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {towns.map((town) => (
                <Link
                  key={town.name}
                  href={town.href}
                  className="group rounded-xl border border-slate-200 p-6 bg-white hover:border-[#0066d6] hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-[#0066d6]" />
                        <h2 className="text-lg font-bold text-slate-900 group-hover:text-[#0066d6]">
                          {town.name}
                        </h2>
                      </div>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {town.distance}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-4">{town.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0066d6]">
                    View Local Services <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-14 bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  Outside These Towns?
                </h3>
                <p className="text-sm text-slate-600">
                  We frequently travel further across Derbyshire, Nottinghamshire, and South Yorkshire for fleet contracts and specialist diagnostics.
                </p>
              </div>
              <a
                href="tel:07753891461"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white bg-[#0066d6] hover:bg-[#0052b0] shrink-0"
              >
                <Phone className="w-4 h-4" />
                Call 07753 891461
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
