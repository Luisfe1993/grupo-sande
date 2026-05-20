import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowLeft, ChevronRight } from "lucide-react";
import { newsArticles, getArticle } from "@/data/news";
import { notFound } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

const companyLabels: Record<string, string> = {
  sande: "Sande S.A.",
  fijaciones: "Tecbolt — Fijaciones Mamut",
  sandiman: "Sandiman S.A.",
  grupo: "Grupo Sande",
};

const companyColors: Record<string, { badge: string; accent: string }> = {
  sande: { badge: "bg-blue-100 text-blue-800", accent: "text-blue-700" },
  fijaciones: { badge: "bg-red-100 text-red-800", accent: "text-red-700" },
  sandiman: { badge: "bg-emerald-100 text-emerald-800", accent: "text-emerald-700" },
  grupo: { badge: "bg-gray-100 text-gray-800", accent: "text-gray-700" },
};

export function generateStaticParams() {
  return newsArticles.map((article) => ({ id: article.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const article = getArticle(id);
  if (!article) return { title: "Artículo no encontrado" };
  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

function formatDate(dateStr: string, locale: string) {
  return new Date(dateStr).toLocaleDateString(
    locale === "en" ? "en-US" : "es-CL",
    { year: "numeric", month: "long", day: "numeric" }
  );
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);
  const article = getArticle(id);

  if (!article) notFound();

  const isEn = lang === "en";
  const title = (isEn && article.titleEn) || article.title;
  const content = (isEn && article.contentEn) || article.content;
  const category = (isEn && article.categoryEn) || article.category;
  const colors = companyColors[article.companyId] || companyColors.grupo;

  // Related articles: same company or same category, excluding current
  const related = newsArticles
    .filter(
      (a) =>
        a.id !== article.id &&
        (a.companyId === article.companyId || a.category === article.category)
    )
    .slice(0, 3);

  const lp = (path: string) => (lang === "en" ? `/en${path}` : path);

  return (
    <>
      {/* Hero image */}
      <div className="relative h-64 sm:h-80 lg:h-96 bg-gray-900">
        <Image
          src={article.image}
          alt={title}
          fill
          className="object-cover opacity-60"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 lg:p-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-semibold px-3 py-1 rounded-full ${colors.badge}`}>
                {category}
              </span>
              <span className="text-xs text-gray-300 flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {formatDate(article.date, lang)}
              </span>
              <span className="text-xs text-gray-300 flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {article.readTime} min {isEn ? "read" : "lectura"}
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              {companyLabels[article.companyId] || "Grupo Sande"}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href={lp("/noticias")}
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {isEn ? "Back to News" : "Volver a Noticias"}
          </Link>

          <div
            className="prose prose-lg prose-gray max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:leading-relaxed prose-p:text-gray-600
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500
              prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6
              prose-blockquote:rounded-r-lg prose-blockquote:not-italic
              prose-blockquote:text-gray-700 prose-blockquote:text-base
              prose-li:text-gray-600
              prose-ul:space-y-1"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </article>

      {/* Related Articles */}
      {related.length > 0 && (
        <section className="bg-gray-50 py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              {isEn ? "Related Articles" : "Artículos Relacionados"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((rel) => {
                const relColors =
                  companyColors[rel.companyId] || companyColors.grupo;
                const relTitle = (isEn && rel.titleEn) || rel.title;
                const relCategory = (isEn && rel.categoryEn) || rel.category;
                return (
                  <Link
                    key={rel.id}
                    href={lp(`/noticias/${rel.id}`)}
                    className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-40 bg-gray-200">
                      <Image
                        src={rel.image}
                        alt={relTitle}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${relColors.badge}`}
                        >
                          {relCategory}
                        </span>
                        <span className="text-xs text-gray-400">
                          {formatDate(rel.date, lang)}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900 text-sm leading-snug group-hover:text-blue-700 transition-colors">
                        {relTitle}
                      </h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
