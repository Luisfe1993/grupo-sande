import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Calendar,
  CheckCircle,
  Building,
  HardHat,
  Anchor,
  Factory,
  Wrench,
  Link as LinkIcon,
  Cpu,
} from "lucide-react";
import { projects } from "@/data/projects";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Proyectos y Casos de Éxito",
  description:
    "Conozca nuestros proyectos más destacados: levante sincrónico de estructuras, suministro industrial integral, fijaciones estructurales y soluciones de nanoburbujas.",
  openGraph: {
    title: "Proyectos y Casos de Éxito — Grupo Sande",
    description:
      "Casos de éxito en minería, construcción, puertos y obras viales con más de 85 años de trayectoria industrial.",
  },
};

const companyColors: Record<string, { bg: string; text: string; badge: string }> = {
  sande: { bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100 text-blue-800" },
  fijaciones: { bg: "bg-red-50", text: "text-red-700", badge: "bg-red-100 text-red-800" },
  sandiman: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800" },
};

export default async function ProyectosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);
  return (
    <>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.projects.title}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            {t.projects.description}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {projects.map((project, idx) => {
              const colors = companyColors[project.companyId];

              return (
                <RevealOnScroll key={project.id}>
                  <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {/* Image placeholder */}
                      <div
                        className={`${colors.bg} p-6 sm:p-8 flex flex-col items-center justify-center min-h-[180px] sm:min-h-[240px]`}
                      >
                        <div className="w-20 h-20 rounded-2xl bg-white/80 flex items-center justify-center mb-4">
                          {project.companyId === "sandiman" && (
                            <Cpu className={`h-10 w-10 ${colors.text}`} />
                          )}
                          {project.companyId === "sande" && (
                            <Wrench className={`h-10 w-10 ${colors.text}`} />
                          )}
                          {project.companyId === "fijaciones" && (
                            <LinkIcon className={`h-10 w-10 ${colors.text}`} />
                          )}
                        </div>
                        <span
                          className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}
                        >
                          {project.company}
                        </span>
                        <span className="text-xs text-gray-500 mt-1">
                          {project.sector}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="lg:col-span-2 p-8">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <span
                            className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.badge}`}
                          >
                            {project.company}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <MapPin className="h-3 w-3" />
                            {project.location}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-gray-500">
                            <Calendar className="h-3 w-3" />
                            {project.year}
                          </span>
                        </div>

                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                          {project.title}
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {project.highlights.map((h) => (
                            <div
                              key={h}
                              className="flex items-start gap-2 text-sm text-gray-600"
                            >
                              <CheckCircle
                                className={`h-4 w-4 mt-0.5 shrink-0 ${colors.text}`}
                              />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {t.projects.ctaTitle}
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            {t.projects.ctaDesc}
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            {t.projects.ctaCTA}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
