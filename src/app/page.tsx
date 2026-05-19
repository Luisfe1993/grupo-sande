import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  Link as LinkIcon,
  Cpu,
  Building,
  HardHat,
  Anchor,
  Factory,
  Shield,
  Award,
  Users,
  Globe,
  Phone,
  ChevronRight,
  Quote,
} from "lucide-react";
import { companies } from "@/data/companies";
import { testimonials, clientLogos } from "@/data/testimonials";
import RevealOnScroll from "@/components/RevealOnScroll";

const stats = [
  { value: "85+", label: "Años de Trayectoria", icon: Award },
  { value: "3", label: "Empresas Especializadas", icon: Building },
  { value: "5.000+", label: "Productos Disponibles", icon: Factory },
  { value: "40.000+", label: "Toneladas Capacidad Levante", icon: HardHat },
];

const sectors = [
  { name: "Minería", icon: HardHat },
  { name: "Construcción", icon: Building },
  { name: "Manufactura", icon: Factory },
  { name: "Puertos", icon: Anchor },
  { name: "Obras Viales", icon: Globe },
  { name: "Celulosas", icon: Factory },
];

const companyIcons = {
  sande: Wrench,
  fijaciones: LinkIcon,
  sandiman: Cpu,
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1">
                <div className="w-2 h-8 bg-blue-400 rounded-sm" />
                <div className="w-2 h-8 bg-red-400 rounded-sm" />
                <div className="w-2 h-8 bg-emerald-400 rounded-sm" />
              </div>
              <span className="text-sm font-medium text-blue-300 tracking-wider uppercase">
                Grupo Empresarial Chileno
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Soluciones Industriales
              <br />
              <span className="text-blue-400">Integrales</span> para Chile
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Tres empresas familiares consolidadas bajo un mismo grupo:
              herramientas industriales, fijaciones de calidad mundial y
              tecnologías de automatización. Más de 85 años sirviendo a la
              industria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/productos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Ver Catálogo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-colors"
              >
                <Phone className="h-5 w-5" />
                Solicitar Cotización
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, i) => (
              <RevealOnScroll key={stat.label} delay={(i % 4) as 0 | 1 | 2 | 3}>
                <div className="text-center">
                  <stat.icon className="h-8 w-8 text-blue-700 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nuestras Empresas
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tres pilares de excelencia industrial, cada uno especializado en
                su área, unidos para ofrecer la solución más completa del mercado.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {companies.map((company, i) => {
              const Icon =
                companyIcons[company.id as keyof typeof companyIcons];
              return (
                <RevealOnScroll key={company.id} delay={(i + 1) as 1 | 2 | 3}>
                  <div
                    className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100 group h-full"
                  >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: company.colorLight }}
                  >
                    <Icon
                      className="h-7 w-7"
                      style={{ color: company.color }}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {company.tradeName}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{company.name}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {company.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-gray-100">
                    {company.highlights.map((h) => (
                      <div key={h.label} className="text-center">
                        <div
                          className="text-lg font-bold"
                          style={{ color: company.color }}
                        >
                          {h.value}
                        </div>
                        <div className="text-xs text-gray-500">{h.label}</div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/empresas#${company.id}`}
                    className="inline-flex items-center text-sm font-semibold group-hover:gap-2 gap-1 transition-all"
                    style={{ color: company.color }}
                  >
                    Conocer más
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors Served */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Sectores que Servimos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Soluciones probadas en las industrias más exigentes de Chile y
                América.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
            {sectors.map((sector) => (
              <div
                key={sector.name}
                className="flex flex-col items-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl bg-gray-50 hover:bg-blue-50 hover:text-blue-700 transition-colors group cursor-default"
              >
                <sector.icon className="h-10 w-10 text-gray-400 group-hover:text-blue-600 transition-colors" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-blue-700 transition-colors">
                  {sector.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="bg-gray-900 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <RevealOnScroll>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                  Vea Nuestro Trabajo en Acción
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Desde levantes sincronizados de miles de toneladas hasta la
                  fabricación de fijaciones de precisión, nuestro trabajo habla
                  por sí mismo.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Levante sincrónico de estructuras en minería",
                    "Proceso de fabricación de fijaciones Mamut",
                    "Automatización industrial con PLCs y variadores",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/proyectos"
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 transition-colors"
                >
                  Ver todos los proyectos
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                    {[
                      { label: "Levante Industrial", color: "bg-blue-500" },
                      { label: "Fijaciones de Precisión", color: "bg-red-500" },
                      { label: "Automatización", color: "bg-emerald-500" },
                    ].map((item) => (
                      <div key={item.label} className="text-center">
                        <div className={`w-12 h-12 sm:w-16 sm:h-16 ${item.color} rounded-xl mx-auto mb-2 opacity-80`} />
                        <p className="text-xs text-gray-400">{item.label}</p>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                  >
                    Solicitar Demostración
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="bg-gray-900 text-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <RevealOnScroll>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  ¿Por Qué Grupo Sande?
                </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Consolidamos la experiencia de tres empresas familiares
                especializadas para ofrecer una solución única en el mercado
                chileno: un solo punto de contacto para todas sus necesidades
                industriales.
              </p>
              <Link
                href="/contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                Conversemos sobre su proyecto
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            </RevealOnScroll>

            <RevealOnScroll delay={2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Calidad Certificada",
                  desc: "ISO 9001 y más de 85 años respaldando nuestros productos y servicios.",
                },
                {
                  icon: Users,
                  title: "Asesoría Experta",
                  desc: "Equipos técnicos especializados en cada línea de negocio.",
                },
                {
                  icon: Globe,
                  title: "Presencia Nacional",
                  desc: "Oficinas en Santiago y Antofagasta. Cobertura en todo Chile.",
                },
                {
                  icon: Factory,
                  title: "Solución Integral",
                  desc: "Desde un tornillo hasta un sistema de levante de 40.000 toneladas.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <item.icon className="h-8 w-8 text-blue-400 mb-3" />
                  <h3 className="font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Empresas líderes en Chile confían en Grupo Sande para sus
                operaciones más exigentes.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {testimonials.map((t, i) => (
              <RevealOnScroll key={t.id} delay={(i % 2 === 0 ? 1 : 2) as 1 | 2}>
                <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm h-full flex flex-col">
                  <Quote className="h-8 w-8 text-blue-200 mb-4 shrink-0" />
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-500">
                      {t.role} — {t.company}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Client Logos */}
          <RevealOnScroll>
            <div className="border-t border-gray-200 pt-12">
              <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-8">
                Confían en nosotros
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {clientLogos.map((logo) => (
                  <div
                    key={logo}
                    className="flex items-center justify-center h-16 bg-white rounded-lg border border-gray-100 px-4"
                  >
                    <span className="text-sm font-semibold text-gray-400 text-center">
                      {logo}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            ¿Necesita una cotización para su proyecto?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Contáctenos y nuestro equipo le entregará una propuesta
            personalizada en menos de 24 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-colors"
          >
            Solicitar Cotización
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
