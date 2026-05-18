import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  ArrowRight,
  Newspaper,
  Wrench,
  Link as LinkIcon,
  Cpu,
  Building,
} from "lucide-react";
import { newsArticles } from "@/data/news";
import RevealOnScroll from "@/components/RevealOnScroll";

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

const companyColors: Record<string, { bg: string; text: string; badge: string }> = {
  sande: { bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100 text-blue-800" },
  fijaciones: { bg: "bg-red-50", text: "text-red-700", badge: "bg-red-100 text-red-800" },
  sandiman: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800" },
  grupo: { bg: "bg-gray-50", text: "text-gray-700", badge: "bg-gray-100 text-gray-800" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-CL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function NoticiasPage() {
  const [featured, ...rest] = newsArticles;
  const featuredColors = companyColors[featured.companyId] || companyColors.grupo;

  return (
    <>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Noticias</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Novedades, proyectos destacados y eventos del Grupo Sande y sus
            empresas.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured Article */}
          <RevealOnScroll>
            <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden mb-12 hover:shadow-lg transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div
                  className={`${featuredColors.bg} p-10 flex flex-col items-center justify-center lg:col-span-2`}
                >
                  <Newspaper className={`h-16 w-16 ${featuredColors.text} mb-4`} />
                  <span className={`text-xs font-semibold uppercase tracking-wider ${featuredColors.text}`}>
                    Destacado
                  </span>
                </div>
                <div className="lg:col-span-3 p-8 sm:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${featuredColors.badge}`}>
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {formatDate(featured.date)}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                    {featured.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {featured.excerpt}
                  </p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Article Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((article, i) => {
              const colors = companyColors[article.companyId] || companyColors.grupo;
              return (
                <RevealOnScroll key={article.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <article className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className={`${colors.bg} px-6 py-8 flex items-center justify-center`}>
                      <Newspaper className={`h-10 w-10 ${colors.text}`} />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.badge}`}>
                          {article.category}
                        </span>
                        <span className="text-xs text-gray-500">
                          {formatDate(article.date)}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-2 leading-snug">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed flex-1">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
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
            ¿Quiere mantenerse informado?
          </h2>
          <p className="text-blue-100 mb-6">
            Contáctenos para recibir novedades sobre productos y servicios.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contactar
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
