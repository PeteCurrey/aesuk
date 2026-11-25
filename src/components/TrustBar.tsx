import { ShieldCheck, Award, Wrench, Clock, CheckCircle } from "lucide-react";

export default function TrustBar() {
  const stats = [
    { label: "Years Combined Experience", value: "15+" },
    { label: "Vehicles Diagnosed & Repaired", value: "3,500+" },
    { label: "Direct Mobile Service Area", value: "Chesterfield & Derbys" },
    { label: "Customer Satisfaction", value: "5.0 ★" },
  ];

  const brands = [
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Volkswagen",
    "Ford",
    "Land Rover",
    "Vauxhall",
    "Porsche",
    "Peugeot",
    "Toyota",
  ];

  return (
    <div className="bg-slate-50 border-b border-slate-200/90 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Metric stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-8 border-b border-slate-200">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start">
              <span className="text-2xl sm:text-3xl font-extrabold text-[#0c1527] tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 mt-1 text-center sm:text-left">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Brands Supported Row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 shrink-0">
            Dealer Diagnostics & Key Coding For:
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600">
            {brands.map((brand) => (
              <span key={brand} className="hover:text-[#0066d6] transition-colors">
                {brand}
              </span>
            ))}
            <span className="text-[#0066d6] font-bold">+ All Makes & Models</span>
          </div>
        </div>
      </div>
    </div>
  );
}
