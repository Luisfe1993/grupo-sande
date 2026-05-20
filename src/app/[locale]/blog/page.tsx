import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Blog Técnico — Grupo Sande",
  description:
    "Guías técnicas, análisis de industria y mejores prácticas para minería, construcción y manufactura en Chile. Conocimiento experto de Grupo Sande.",
  openGraph: {
    title: "Blog Técnico — Grupo Sande",
    description:
      "Guías técnicas y análisis de industria para minería, construcción y manufactura en Chile.",
  },
};

const categoryColors: Record<string, string> = {
  "Guía Técnica": "bg-blue-100 text-blue-800",
  "Technical Guide": "bg-blue-100 text-blue-800",
  Industria: "bg-purple-100 text-purple-800",
  Industry: "bg-purple-100 text-purple-800",
  Seguridad: "bg-red-100 text-red-800",
  Safety: "bg-red-100 text-red-800",
  Tendencias: "bg-amber-100 text-amber-800",
  Trends: "bg-amber-100 text-amber-800",
  Normativa: "bg-teal-100 text-teal-800",
  Regulations: "bg-teal-100 text-teal-800",
  Eficiencia: "bg-green-100 text-green-800",
  Efficiency: "bg-green-100 text-green-800",
};

function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(
    locale === "en" ? "en-US" : "es-CL",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);
  const isEn = lang === "en";

  const [featured, ...rest] = blogPosts;
  const featuredTitle = (isEn && featured.titleEn) || featured.title;
  const featuredExcerpt = (isEn && featured.excerptEn) || featured.excerpt;
  const featuredCategory = (isEn && featured.categoryEn) || featured.category;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="h-6 w-6 text-blue-400" />
            <span className="text-blue-400 font-medium text-sm uppercase tracking-wider">
              {isEn ? "Technical Blog" : "Blog Técnico"}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {isEn
              ? "Knowledge for the Industry"
              : "Conocimiento para la Industria"}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            {isEn
              ? "Technical guides, industry analysis and best practices from our engineering team. Real knowledge from over 90 years in Chilean industry."
              : "Guías técnicas, análisis de industria y mejores prácticas de nuestro equipo de ingeniería. Conocimiento real de más de 90 años en la industria chilena."}
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <Link
              href={lp(`/blog/${featured.id}`, lang)}
              className="group block bg-gradient-to-r from-blue-50 to-blue-100/50 border border-blue-200 rounded-2xl p-8 sm:p-10 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {isEn ? "Featured" : "Destacado"}
                </span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                    categoryColors[featuredCategory] ||
                    "bg-gray-100 text-gray-700"
                  }`}
                >
                  {featuredCategory}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {featuredTitle}
              </h2>
              <p className="text-gray-600 text-lg mb-5 max-w-3xl">
                {featuredExcerpt}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {formatDate(featured.date, lang)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {featured.readTime} min
                </span>
                <span className="text-gray-400">
                  {featured.author}
                </span>
              </div>
              <div className="flex items-center gap-1 mt-4 text-blue-700 font-medium text-sm group-hover:gap-2 transition-all">
                {isEn ? "Read article" : "Leer artículo"}
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {isEn ? "All Articles" : "Todos los Artículos"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, idx) => {
              const title = (isEn && post.titleEn) || post.title;
              const excerpt = (isEn && post.excerptEn) || post.excerpt;
              const category =
                (isEn && post.categoryEn) || post.category;
              const tags = (isEn && post.tagsEn) || post.tags;

              return (
                <RevealOnScroll key={post.id} delay={Math.min(idx, 4) as 0 | 1 | 2 | 3 | 4}>
                  <Link
                    href={lp(`/blog/${post.id}`, lang)}
                    className="group flex flex-col bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all h-full"
                  >
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            categoryColors[category] ||
                            "bg-gray-100 text-gray-700"
                          }`}
                        >
                          {category}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
                        {title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-1">
                        {excerpt}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-0.5 text-xs text-gray-500 bg-gray-50 px-2 py-0.5 rounded"
                          >
                            <Tag className="h-2.5 w-2.5" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                        <span>{post.author}</span>
                        <span>{formatDate(post.date, lang)}</span>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {isEn
              ? "Need expert advice for your project?"
              : "¿Necesita asesoría experta para su proyecto?"}
          </h2>
          <p className="text-gray-600 mb-6">
            {isEn
              ? "Our technical team can help you solve specific challenges in your operation."
              : "Nuestro equipo técnico puede ayudarle a resolver desafíos específicos en su operación."}
          </p>
          <Link
            href={lp("/contacto", lang)}
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
          >
            {isEn ? "Contact an Expert" : "Contactar un Experto"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
