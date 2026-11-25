import Link from "next/link";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServiceArea() {
  const primaryTowns = [
    { name: "Chesterfield", desc: "Town centre & all surrounding suburbs", href: "/replacement-car-keys-chesterfield" },
    { name: "Sheffield", desc: "South Sheffield & North East Derbyshire", href: "/car-key-replacement-sheffield" },
    { name: "Dronfield", desc: "Coal Aston, Dronfield Woodhouse, Apperknowle", href: "/car-key-replacement-dronfield" },
    { name: "Staveley", desc: "Brimington, Inkersall, Mastin Moor", href: "/car-key-replacement-staveley" },
    { name: "Clay Cross", desc: "Tupton, North Wingfield, Pilsley", href: "/car-key-replacement-clay-cross" },
    { name: "Bolsover", desc: "Carr Vale, Palterton, Shuttlewood", href: "/car-key-replacement-bolsover" },
    { name: "Matlock", desc: "Wirksworth, Darley Dale, Cromford", href: "/car-key-replacement-matlock" },
    { name: "Bakewell", desc: "Peak District, Baslow, Ashford", href: "/car-key-replacement-bakewell" },
    { name: "Buxton", desc: "High Peak & west Derbyshire valleys", href: "/car-key-replacement-buxton" },
    { name: "Eckington", desc: "Renishaw, Marsh Lane, Mosborough", href: "/car-key-replacement-eckington" },
    { name: "Alfreton", desc: "Somercotes, Swanwick, Tibshelf", href: "/car-key-replacement-alfreton" },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative technical line pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold border border-blue-400/30">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              Regional Mobile Dispatch
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Mobile Coverage Across Derbyshire & South Yorkshire.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Our mobile workshop vans travel directly to residential addresses, business car parks,
              commercial yards, and roadside locations. Fast dispatch times for emergency lockouts
              and non-starts.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:07753891461"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-bold text-white bg-[#0066d6] hover:bg-[#0052b0] shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                Check Mobile Availability: 07753 891461
              </a>

              <Link
                href="/service-areas"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                Full Area Guide
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-slate-800/80 rounded-2xl p-6 sm:p-8 border border-slate-700 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 pb-2 border-b border-slate-700">
                Key Towns & Locations Served
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {primaryTowns.map((town) => (
                  <Link
                    key={town.name}
                    href={town.href}
                    className="p-3 rounded-lg bg-slate-900/60 hover:bg-[#0066d6]/20 border border-slate-700/60 hover:border-blue-500/50 transition-colors group flex items-start gap-2.5"
                  >
                    <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {town.name}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1">
                        {town.desc}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
