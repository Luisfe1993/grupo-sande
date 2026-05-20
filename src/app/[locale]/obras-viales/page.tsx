import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  ArrowRight,
  Shield,
  Truck,
  CheckCircle,
  ChevronRight,
} from "lucide-react";
import { productCategories } from "@/data/products";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Soluciones para Obras Viales — Grupo Sande",
  description:
    "Levante sincrónico de puentes, equipos hidráulicos, fijaciones estructurales y herramientas para obras viales y de infraestructura en Chile.",
  openGraph: {
    title: "Soluciones para Obras Viales — Grupo Sande",
    description:
      "Levante de puentes, fijaciones estructurales y equipos para infraestructura vial en Chile.",
  },
};

const sectorProductIds = [
  "hidraulica",
  "tecle",
  "fijaciones-concreto",
  "fijaciones-metal",
  "soldadura",
  "abrasivos",
  "electricas",
  "brocas",
  "plc",
];

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function ObrasVialesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const isEn = lang === "en";

  const sectorProducts = productCategories.filter((p) =>
    sectorProductIds.includes(p.id)
  );

  const advantages = isEn
    ? [
        { icon: Globe, title: "Bridge Lifting Experts", desc: "Synchronized lifting of bridges, overpasses, and road structures with PLC precision." },
        { icon: Shield, title: "Structural Fasteners", desc: "High-strength bolts and anchors meeting ASTM and NCh standards for infrastructure." },
        { icon: Truck, title: "On-Site Support", desc: "Mobile teams with equipment ready for highway and road construction sites." },
      ]
    : [
        { icon: Globe, title: "Expertos en Levante de Puentes", desc: "Levante sincrónico de puentes, pasos superiores y estructuras viales con precisión PLC." },
        { icon: Shield, title: "Fijaciones Estructurales", desc: "Pernos y anclajes de alta resistencia que cumplen normas ASTM y NCh para infraestructura." },
        { icon: Truck, title: "Soporte en Terreno", desc: "Equipos móviles con equipamiento listo para obras en carreteras y autopistas." },
      ];

  const projectTypes = isEn
    ? ["Bridges & Overpasses", "Highway Infrastructure", "Pedestrian Walkways", "Tunnels", "Retaining Walls", "Signage Structures"]
    : ["Puentes y Pasos Superiores", "Infraestructura de Autopistas", "Pasarelas Peatonales", "Túneles", "Muros de Contención", "Estructuras de Señalización"];

  return (
    <>
      <section className="bg-gradient-to-br from-stone-800 via-stone-700 to-zinc-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-stone-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-zinc-400 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Globe className="h-6 w-6 text-stone-300" />
              <span className="text-stone-300 font-medium text-sm uppercase tracking-wider">
                {isEn ? "Road & Infrastructure Solutions" : "Soluciones para Obras Viales"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {isEn ? "Building Chile's Infrastructure" : "Construyendo la Infraestructura de Chile"}
            </h1>
            <p className="text-lg text-stone-200 mb-8 max-w-2xl">
              {isEn
                ? "Bridge lifting, structural fasteners, hydraulic equipment, and tools for highway construction and road infrastructure projects."
                : "Levante de puentes, fijaciones estructurales, equipos hidráulicos y herramientas para construcción de carreteras y proyectos de infraestructura vial."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={lp("/cotizar", lang)} className="bg-white text-stone-900 px-6 py-3 rounded-lg font-semibold hover:bg-stone-50 transition-colors">
                {isEn ? "Request Quote" : "Solicitar Cotización"}
              </Link>
              <Link href={lp("/contacto", lang)} className="border border-stone-400 text-stone-100 px-6 py-3 rounded-lg font-medium hover:bg-stone-700 transition-colors">
                {isEn ? "Talk to a Specialist" : "Hablar con un Especialista"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            {isEn ? "Why Infrastructure Projects Choose Us" : "Por Qué los Proyectos Viales Nos Eligen"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <RevealOnScroll key={adv.title}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-stone-100 text-stone-700 rounded-xl mb-4"><adv.icon className="h-7 w-7" /></div>
                  <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-stone-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">{isEn ? "Types of Projects We Supply" : "Tipos de Proyectos que Abastecemos"}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {projectTypes.map((pt) => (
              <div key={pt} className="flex items-center gap-2 bg-white border border-stone-200 rounded-lg px-4 py-2 text-sm text-gray-700">
                <CheckCircle className="h-4 w-4 text-stone-600" />{pt}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{isEn ? "Products for Road Works" : "Productos para Obras Viales"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorProducts.map((cat) => (
              <RevealOnScroll key={cat.id}>
                <Link href={lp(`/productos/${cat.id}`, lang)} className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 group-hover:text-stone-700 transition-colors">{cat.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 shrink-0">{cat.company}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{cat.description}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={lp("/productos", lang)} className="inline-flex items-center gap-2 text-stone-700 font-medium hover:text-stone-800">{isEn ? "View Full Catalog" : "Ver Catálogo Completo"} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{isEn ? "Services for Road Works" : "Servicios para Obras Viales"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: isEn ? "Bridge Lifting" : "Levante de Puentes", desc: isEn ? "Synchronized lifting for bridge installation, replacement, and repositioning." : "Levante sincrónico para instalación, reemplazo y reposicionamiento de puentes.", href: "/servicios" },
              { title: isEn ? "Hydraulic Equipment" : "Equipos Hidráulicos", desc: isEn ? "Jacks and cylinders for structural work on highways and road infrastructure." : "Gatos y cilindros para trabajo estructural en autopistas e infraestructura vial.", href: "/servicios" },
              { title: isEn ? "Fastener Engineering" : "Ingeniería de Fijaciones", desc: isEn ? "Selection and supply of structural fasteners for infrastructure projects." : "Selección y suministro de fijaciones estructurales para proyectos de infraestructura.", href: "/contacto" },
            ].map((svc) => (
              <RevealOnScroll key={svc.title}>
                <Link href={lp(svc.href, lang)} className="group block bg-stone-50 border border-stone-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-stone-700 transition-colors">{svc.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{svc.desc}</p>
                  <span className="text-stone-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">{isEn ? "Learn more" : "Conocer más"} <ChevronRight className="h-4 w-4" /></span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-800 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{isEn ? "Have a road infrastructure project?" : "¿Tiene un proyecto de infraestructura vial?"}</h2>
          <p className="text-stone-300 mb-8 text-lg">{isEn ? "Get a quote for your project's specific needs." : "Obtenga una cotización para las necesidades específicas de su proyecto."}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={lp("/cotizar", lang)} className="bg-white text-stone-900 px-8 py-3 rounded-lg font-semibold hover:bg-stone-50 transition-colors">{isEn ? "Request Quote" : "Solicitar Cotización"}</Link>
            <Link href={lp("/contacto", lang)} className="border border-stone-400 text-stone-200 px-8 py-3 rounded-lg font-medium hover:bg-stone-700 transition-colors">{isEn ? "Contact Specialist" : "Contactar Especialista"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
