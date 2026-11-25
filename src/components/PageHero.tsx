import Link from "next/link";
import { ChevronRight, Phone } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  backgroundImage?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
}

export default function PageHero({
  badge,
  title,
  highlight,
  description,
  breadcrumbs,
  backgroundImage = "/assets/aes-hero-new.png",
  primaryCtaLabel = "Call 07753 891461",
  primaryCtaHref = "tel:07753891461",
  secondaryCtaLabel = "Request a Quote",
  secondaryCtaHref = "/contact",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0c1527] text-white pt-36 pb-16 lg:pt-40 lg:pb-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c1527] via-[#0c1527]/92 to-[#0c1527]/70" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 flex-wrap"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-200">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/80 border border-blue-500/30 text-blue-300 text-xs font-semibold mb-5">
              <span className="flex h-2 w-2 rounded-full bg-blue-400" />
              {badge}
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-tight text-white leading-[1.15] mb-5">
            {title}
            {highlight && (
              <span className="block text-[#38bdf8] mt-1">{highlight}</span>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            {primaryCtaHref.startsWith("tel:") ? (
              <a
                href={primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-white bg-[#0066d6] hover:bg-[#0052b0] shadow-lg shadow-blue-600/25 transition-all"
              >
                <Phone className="w-4 h-4 text-blue-200" />
                {primaryCtaLabel}
              </a>
            ) : (
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-white bg-[#0066d6] hover:bg-[#0052b0] shadow-lg shadow-blue-600/25 transition-all"
              >
                {primaryCtaLabel}
              </Link>
            )}

            <Link
              href={secondaryCtaHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-semibold text-sm text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-500 transition-all"
            >
              {secondaryCtaLabel}
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
