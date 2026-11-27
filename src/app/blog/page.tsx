import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Auto Electrical Guides & Articles",
  description:
    "Technical guides, diagnostic insights, and vehicle security advice from AES Autoelectrical in Chesterfield & Derbyshire.",
  alternates: { canonical: "https://aesuk.co/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <PageHero
          badge="Knowledge Base & Guides"
          title="Auto Electrical Articles"
          highlight="Tips, Guides & Case Notes"
          description="Practical advice on vehicle diagnostics, Ghost 2 security, mobile ECU remapping, and commercial fleet electrical maintenance."
          breadcrumbs={[{ label: "Articles" }]}
        />

        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-slate-200 bg-white p-6 hover:border-[#0066d6] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-[#0066d6]">
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#0066d6] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.publishedAt}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#0066d6]">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
