import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { blogPosts } from "@/data/blogPosts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://aesuk.co/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://aesuk.co/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "AES Autoelectrical",
    },
    publisher: {
      "@type": "Organization",
      name: "AES Autoelectrical",
      url: "https://aesuk.co",
    },
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <PageHero
          badge={`${post.category} · ${post.readTime}`}
          title={post.title}
          description={post.excerpt}
          breadcrumbs={[
            { label: "Articles", href: "/blog" },
            { label: post.category },
          ]}
        />

        <article className="py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            {post.sections.map((section, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx} className="text-slate-600 leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}

            <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={post.relatedHref}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#0066d6] bg-blue-50 hover:bg-blue-100 transition-colors"
                >
                  {post.relatedLabel}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:07753891461"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#0066d6] hover:bg-[#0052b0] transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  07753 891461
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
