import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpFromLine,
  Pipette,
  Container,
  Waves,
  BookOpen,
  Package,
  ChevronRight,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servicios Especializados",
  description:
    "Servicios de levante sincrónico, intervención de tuberías, arriendo de equipos hidráulicos, nanoburbujas y asesoría técnica en fijaciones industriales.",
  openGraph: {
    title: "Servicios Especializados — Grupo Sande",
    description:
      "Ingeniería y asesoría técnica de clase mundial para proyectos industriales exigentes.",
  },
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ArrowUpFromLine,
  PipetteIcon: Pipette,
  Container,
  Waves,
  BookOpen,
  Package,
};

const companyColors: Record<string, { accent: string; bg: string; text: string }> = {
  sande: { accent: "#1e40af", bg: "bg-blue-50", text: "text-blue-700" },
  fijaciones: { accent: "#b91c1c", bg: "bg-red-50", text: "text-red-700" },
  sandiman: { accent: "#047857", bg: "bg-emerald-50", text: "text-emerald-700" },
};

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Servicios Especializados
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Más allá de los productos, ofrecemos servicios de ingeniería y
            asesoría técnica de clase mundial para sus proyectos más exigentes.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] || Package;
              const colors = companyColors[service.companyId];
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.id}
                  className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                    {/* Icon & Company Badge */}
                    <div
                      className={`p-8 flex flex-col items-center justify-center ${colors.bg}`}
                    >
                      <Icon
                        className={`h-12 w-12 mb-3 ${colors.text}`}
                      />
                      <span
                        className={`text-xs font-semibold uppercase tracking-wider ${colors.text}`}
                      >
                        {service.company}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="lg:col-span-4 p-8">
                      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                        {service.name}
                      </h2>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {service.longDescription}
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Features */}
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Características
                          </h3>
                          <ul className="space-y-2">
                            {service.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <CheckCircle
                                  className="h-4 w-4 mt-0.5 shrink-0"
                                  style={{ color: colors.accent }}
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Sectors */}
                        <div>
                          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                            Sectores
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {service.sectors.map((sector) => (
                              <span
                                key={sector}
                                className="px-3 py-1.5 text-xs rounded-lg bg-gray-100 text-gray-600"
                              >
                                {sector}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <Link
                          href="/contacto"
                          className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                          style={{ color: colors.accent }}
                        >
                          Solicitar este servicio
                          <ChevronRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-emerald-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Necesita un servicio personalizado?
          </h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo de ingenieros puede diseñar una solución a medida
            para su proyecto.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-emerald-700 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
          >
            Conversemos
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
