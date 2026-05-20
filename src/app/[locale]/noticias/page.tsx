import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { newsArticles } from "@/data/news";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Noticias",
  description:
    "Últimas noticias y novedades de Grupo Sande: proyectos, certificaciones, nuevos productos, eventos y expansión en Chile.",
  openGraph: {
    title: "Noticias — Grupo Sande",
    description:
      "Mantente informado sobre los últimos proyectos y novedades de Grupo Sande.",
  },
};

const companyColors: Record<string, { badge: string }> = {
  sande: { badge: "bg-blue-100 text-blue-800" },
  fijaciones: { badge: "bg-red-100 text-red-800" },
  sandiman: { badge: "bg-emerald-100 text-emerald-800" },
  grupo: { badge: "bg-gray-100 text-gray-800" },
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

export default async function NoticiasPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);
  const isEn = lang === "en";
  const [featured, ...rest] = newsArticles;
  const featuredColors = companyColors[featured.companyId] || companyColors.grupo;
  const featuredTitle = (isEn && featured.titleEn) || featured.title;
  const featuredExcerpt = (isEn && featured.excerptEn) || featured.excerpt;
  const featuredCategory = (isEn && featured.categoryEn) || featured.category;

  return (
    <>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t.news.title}</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            {t.news.description}
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <RevealOnScroll>
            <Link
              href={lp(`/noticias/${featured.id}`, lang)}
              className="block bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12 hover:shadow-lg transition-shadow group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="relative lg:col-span-2 h-64 lg:h-auto bg-gray-200">
                  <Image
                    src={featured.image}
                    alt={featuredTitle}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-wider text-gray-900 px-3 py-1 rounded-full">
                      {isEn ? "Featured" : "Destacado"}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${featuredColors.badge}`}
                    >
                      {featuredCategory}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {formatDate(featured.date, lang)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      {featured.readTime} min
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 group-hover:text-blue-700 transition-colors">
                    {featuredTitle}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    {featuredExcerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 group-hover:gap-2 transition-all">
                    {t.news.readMore} <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </RevealOnScroll>

          {/* Article Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article, i) => {
              const colors = companyColors[article.companyId] || companyColors.grupo;
              const articleTitle = (isEn && article.titleEn) || article.title;
              const articleExcerpt = (isEn && article.excerptEn) || article.excerpt;
              const articleCategory = (isEn && article.categoryEn) || article.category;
              return (
                <RevealOnScroll key={article.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <Link
                    href={lp(`/noticias/${article.id}`, lang)}
                    className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col"
                  >
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={article.image}
                        alt={articleTitle}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.badge}`}
                        >
                          {articleCategory}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatDate(article.date, lang)}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors">
                        {articleTitle}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        {articleExcerpt}
                      </p>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-700 mt-4 group-hover:gap-2 transition-all">
                        {t.news.readMore} <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            {isEn ? "Want to stay informed?" : "¿Quiere mantenerse informado?"}
          </h2>
          <p className="text-blue-100 mb-6">
            {isEn
              ? "Contact us to receive news about products and services."
              : "Contáctenos para recibir novedades sobre productos y servicios."}
          </p>
          <Link
            href={lp("/contacto", lang)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            {isEn ? "Contact Us" : "Contactar"}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
