import Link from "next/link";
import { Phone, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#0c1527] text-white flex items-center justify-center pt-36 pb-24 px-4">
        <div className="max-w-lg text-center">
          <div className="text-6xl font-extralight text-[#38bdf8] mb-4">404</div>
          <h1 className="text-3xl font-extralight mb-4">Page Not Found</h1>
          <p className="text-slate-300 text-sm sm:text-base mb-8">
            The page you are looking for may have moved. Explore our mobile auto electrical services or call us directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm text-white bg-[#0066d6] hover:bg-[#0052b0] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <a
              href="tel:07753891461"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-sm text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              07753 891461
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
