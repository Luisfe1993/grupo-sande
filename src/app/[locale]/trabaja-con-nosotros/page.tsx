import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Building2,
  ChevronDown,
} from "lucide-react";
import { jobPositions } from "@/data/careers";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import CareersForm from "./CareersForm";

export const metadata: Metadata = {
  title: "Trabaja con Nosotros — Grupo Sande",
  description:
    "Únete al equipo de Grupo Sande. Oportunidades laborales en industria, ingeniería, manufactura y ventas técnicas.",
};

const companyColorMap: Record<string, { badge: string; dot: string }> = {
  sande: { badge: "bg-blue-100 text-blue-800", dot: "bg-blue-500" },
  fijaciones: { badge: "bg-red-100 text-red-800", dot: "bg-red-500" },
  sandiman: { badge: "bg-emerald-100 text-emerald-800", dot: "bg-emerald-500" },
  grupo: { badge: "bg-gray-100 text-gray-800", dot: "bg-gray-500" },
};

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);
  const isEn = lang === "en";

  const benefits = [
    {
      icon: Building2,
      title: isEn ? "Multi-Company Group" : "Grupo Multi-Empresa",
      desc: isEn
        ? "Grow across four specialized companies with diverse career paths."
        : "Crezca a través de cuatro empresas especializadas con diversas rutas de carrera.",
    },
    {
      icon: TrendingUp,
      title: isEn ? "Professional Growth" : "Desarrollo Profesional",
      desc: isEn
        ? "Technical training, certifications, and exposure to cutting-edge industrial technology."
        : "Capacitación técnica, certificaciones y exposición a tecnología industrial de vanguardia.",
    },
    {
      icon: Shield,
      title: isEn ? "Stability" : "Estabilidad",
      desc: isEn
        ? "Over 90 years in business. A family group that thinks long-term."
        : "Más de 90 años de trayectoria. Un grupo familiar que piensa a largo plazo.",
    },
    {
      icon: Users,
      title: isEn ? "Culture" : "Cultura",
      desc: isEn
        ? "Close-knit teams, direct access to leadership, and a collaborative environment."
        : "Equipos cercanos, acceso directo a la gerencia y un ambiente colaborativo.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium mb-6">
              <Briefcase className="h-4 w-4" />
              {isEn ? "We're hiring" : "Estamos contratando"}
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold mb-6">
              {isEn
                ? "Build the Future of Chilean Industry"
                : "Construya el Futuro de la Industria Chilena"}
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
              {isEn
                ? "Join a 4th-generation family group with four specialized companies, 8 branches nationwide, and over 90 years of industrial excellence."
                : "Únase a un grupo familiar en 4ª generación con cuatro empresas especializadas, 8 sucursales a nivel nacional y más de 90 años de excelencia industrial."}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
              {isEn ? "Why Work at Grupo Sande" : "Por Qué Trabajar en Grupo Sande"}
            </h2>
          </RevealOnScroll>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <RevealOnScroll key={b.title} delay={((i % 4) + 1) as 1 | 2 | 3}>
                <div className="text-center">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <b.icon className="h-7 w-7 text-blue-700" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {isEn ? "Open Positions" : "Posiciones Abiertas"}
              </h2>
              <p className="text-gray-600">
                {isEn
                  ? `${jobPositions.length} positions available across our companies.`
                  : `${jobPositions.length} posiciones disponibles en nuestras empresas.`}
              </p>
            </div>
          </RevealOnScroll>

          <div className="space-y-4">
            {jobPositions.map((job, i) => {
              const colors = companyColorMap[job.companyId] || companyColorMap.grupo;
              const title = (isEn && job.titleEn) || job.title;
              const desc = (isEn && job.descriptionEn) || job.description;
              const reqs = (isEn && job.requirementsEn) || job.requirements;
              const typeLabel = (isEn && job.typeLabelEn) || job.typeLabel;
              return (
                <RevealOnScroll key={job.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <details className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`inline-block w-2 h-2 rounded-full ${colors.dot}`} />
                          <span className="text-xs font-medium text-gray-500">
                            {job.company}
                          </span>
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {typeLabel}
                          </span>
                        </div>
                      </div>
                      <ChevronDown className="h-5 w-5 text-gray-400 group-open:rotate-180 transition-transform shrink-0 ml-4" />
                    </summary>
                    <div className="px-6 pb-6 border-t border-gray-100 pt-4">
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {desc}
                      </p>
                      <h4 className="font-semibold text-gray-900 text-sm mb-2">
                        {isEn ? "Requirements" : "Requisitos"}
                      </h4>
                      <ul className="space-y-1.5 mb-4">
                        {reqs.map((r) => (
                          <li key={r} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            {r}
                          </li>
                        ))}
                      </ul>
                      <a
                        href="#postular"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        {isEn ? "Apply Now" : "Postular"}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </details>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Spontaneous Application Form */}
      <section id="postular" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {isEn ? "Apply or Send Your CV" : "Postule o Envíe su CV"}
              </h2>
              <p className="text-gray-600">
                {isEn
                  ? "Interested in a specific position or want to send a spontaneous application? Fill out the form below."
                  : "¿Interesado en una posición específica o quiere enviar una postulación espontánea? Complete el formulario."}
              </p>
            </div>
          </RevealOnScroll>
          <CareersForm locale={lang} positions={jobPositions.map((j) => ({ id: j.id, title: (isEn && j.titleEn) || j.title, company: j.company }))} />
        </div>
      </section>
    </>
  );
}
