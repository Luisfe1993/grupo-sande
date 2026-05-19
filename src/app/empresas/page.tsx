import type { Metadata } from "next";
import Image from "next/image";
import {
  Wrench,
  Link as LinkIcon,
  Cpu,
  Building2,
  MapPin,
  Phone,
  Mail,
  Globe,
  Award,
  ExternalLink,
  User,
} from "lucide-react";
import { companies } from "@/data/companies";
import { teamMembers } from "@/data/team";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Nuestras Empresas",
  description:
    "Conozca las empresas del Grupo Sande: Sande S.A., Tecbolt / Fijaciones Mamut, Sandiman e Inmobiliaria Sande. Holding familiar chileno con 90+ años de trayectoria.",
  openGraph: {
    title: "Nuestras Empresas — Grupo Sande",
    description:
      "Holding familiar chileno líder en herramientas industriales, fijaciones, automatización y gestión patrimonial.",
  },
};

const companyIcons: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  sande: Wrench,
  fijaciones: LinkIcon,
  sandiman: Cpu,
  inmobiliaria: Building2,
};

export default function EmpresasPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Nuestras Empresas
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Holding familiar chileno con cuatro empresas especializadas,
            cada una líder en su rubro, unidas para ofrecer soluciones
            industriales integrales.
          </p>
        </div>
      </section>

      {/* Timeline / History */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Desde 1933, la familia Sande ha construido un legado industrial
              que hoy abarca cuatro empresas especializadas con presencia nacional.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-stretch gap-4 sm:gap-6 justify-center">
            {[
              {
                year: "1933",
                title: "Los Orígenes",
                desc: "Rufino Sande funda \"Rufino Sande, Gaztelurrutia y Cía\" en Chile, iniciando una tradición familiar en la industria.",
                color: "bg-gray-700",
              },
              {
                year: "1937–1939",
                title: "Sande S.A.",
                desc: "Luis Sande Eguren y luego Luis Sande Iriondo consolidan Sande S.A. como empresa de herramientas y maquinaria industrial.",
                color: "bg-blue-600",
              },
              {
                year: "1960s",
                title: "Marca MAMUT",
                desc: "Tecbolt se especializa en fabricación de tornillería y fijaciones bajo la marca MAMUT, expandiéndose a mercados internacionales.",
                color: "bg-red-600",
              },
              {
                year: "3ª Gen",
                title: "Diversificación",
                desc: "La tercera generación —Luis A., Ricardo, Alejandro y Javier Sande— diversifica el grupo con Sandiman e Inmobiliaria Sande.",
                color: "bg-emerald-600",
              },
              {
                year: "4ª Gen",
                title: "Continuidad",
                desc: "Francisco y José Pedro Sande se incorporan a la operación, asegurando la continuidad del legado familiar.",
                color: "bg-purple-600",
              },
            ].map((item) => (
              <div
                key={item.year}
                className="flex-1 relative bg-gray-50 rounded-xl p-6 border border-gray-100"
              >
                <div
                  className={`inline-block text-white text-sm font-bold px-3 py-1 rounded-lg mb-3 ${item.color}`}
                >
                  {item.year}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Details */}
      {companies.map((company, idx) => {
        const Icon = companyIcons[company.id] || Building2;
        const isEven = idx % 2 === 0;

        return (
          <section
            key={company.id}
            id={company.id}
            className={`py-16 sm:py-20 ${isEven ? "bg-gray-50" : "bg-white"}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: company.colorLight }}
                    >
                      <Icon
                        className="h-8 w-8"
                        style={{ color: company.color }}
                      />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {company.tradeName}
                      </h2>
                      <p className="text-gray-500">{company.name}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-lg mb-8">
                    {company.longDescription}
                  </p>

                  {/* Pillars */}
                  {company.pillars && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {company.pillars.map((pillar) => (
                        <div key={pillar.title} className="bg-white rounded-lg p-4 border border-gray-100">
                          <h4 className="font-semibold text-gray-900 text-sm mb-1">
                            {pillar.title}
                          </h4>
                          <p className="text-xs text-gray-500 leading-relaxed">
                            {pillar.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Offices */}
                  {company.offices && company.offices.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                        Sucursales
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {company.offices.map((office) => (
                          <span
                            key={office}
                            className="px-2.5 py-1 text-xs rounded-full border border-gray-200 text-gray-600"
                          >
                            {office}
                          </span>
                        ))}
                      </div>
                    </div>
                  )} 

                  {/* Certifications */}
                  {company.certifications.length > 0 && (
                    <div className="flex items-center gap-2 mb-6">
                      <Award
                        className="h-5 w-5"
                        style={{ color: company.color }}
                      />
                      <span className="text-sm font-medium text-gray-700">
                        Certificaciones:{" "}
                        {company.certifications.join(", ")}
                      </span>
                    </div>
                  )}

                  {/* Sectors */}
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                      Sectores que servimos
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {company.sectors.map((sector) => (
                        <span
                          key={sector}
                          className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600"
                        >
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>

                  {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                    style={{ color: company.color }}
                  >
                    Visitar sitio web
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  )}
                </div>

                {/* Contact Card + Highlights */}
                <div className="space-y-6">
                  {/* Company Image */}
                  {company.image && (
                    <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <Image
                        src={company.image}
                        alt={company.tradeName}
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  )}

                  {/* Highlights */}
                  <div className="grid grid-cols-3 gap-4">
                    {company.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm"
                      >
                        <div
                          className="text-2xl font-bold"
                          style={{ color: company.color }}
                        >
                          {h.value}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {h.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Card */}
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4">
                      Información de Contacto
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-gray-400 mt-0.5 shrink-0" />
                        <span className="text-sm text-gray-600">
                          {company.address}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-gray-400 shrink-0" />
                        <span className="text-sm text-gray-600">
                          {company.phone}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-400 shrink-0" />
                        <span className="text-sm text-gray-600">
                          {company.email}
                        </span>
                      </div>
                      {company.website && (
                      <div className="flex items-center gap-3">
                        <Globe className="h-5 w-5 text-gray-400 shrink-0" />
                        <a
                          href={company.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {company.website.replace("https://", "")}
                        </a>
                      </div>
                      )}
                    </div>
                  </div>

                  {/* Quick Action */}
                  <Link
                    href="/contacto"
                    className="block w-full text-center py-3 rounded-xl text-white font-semibold transition-colors hover:opacity-90"
                    style={{ backgroundColor: company.color }}
                  >
                    Contactar {company.tradeName}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Team Section */}
      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Nuestro Equipo Directivo
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Un equipo con décadas de experiencia en la industria chilena,
                comprometido con la excelencia y la innovación.
              </p>
            </div>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => {
              const companyColor =
                member.companyId === "sande"
                  ? "bg-blue-100 text-blue-700"
                  : member.companyId === "fijaciones"
                    ? "bg-red-100 text-red-700"
                    : member.companyId === "sandiman"
                      ? "bg-emerald-100 text-emerald-700"
                      : member.companyId === "inmobiliaria"
                        ? "bg-purple-100 text-purple-700"
                        : "bg-gray-100 text-gray-700";

              return (
                <RevealOnScroll key={member.id} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="text-center group">
                    <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-50 transition-colors">
                      <User className="h-10 w-10 text-gray-400 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                    <span
                      className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-2 ${companyColor}`}
                    >
                      {member.company}
                    </span>
                    {member.generation && (
                      <span className="inline-block text-xs font-medium px-2.5 py-1 rounded-full mb-3 bg-gray-100 text-gray-600 ml-1">
                        {member.generation}
                      </span>
                    )}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
