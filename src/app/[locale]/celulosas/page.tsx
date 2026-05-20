import type { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  ArrowRight,
  Shield,
  Truck,
  CheckCircle,
  ChevronRight,
  Droplets,
} from "lucide-react";
import { productCategories } from "@/data/products";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Soluciones para Celulosas — Grupo Sande",
  description:
    "Bombas industriales, soldadura, automatización PLC y equipos hidráulicos para plantas de celulosa y papel en Chile.",
  openGraph: {
    title: "Soluciones para Celulosas — Grupo Sande",
    description:
      "Bombas, automatización y equipos para la industria de celulosa y papel en Chile.",
  },
};

const sectorProductIds = [
  "bombas",
  "soldadura",
  "plc",
  "variadores",
  "sensores",
  "hmi",
  "hidraulica",
  "tecle",
  "neumatica",
  "seguridad-industrial",
];

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function CelulosaPage({
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
        { icon: Droplets, title: "Process Pumps", desc: "Slurry, water, acid, and chemical pumps for pulp processing and water treatment." },
        { icon: Shield, title: "Corrosion Resistant", desc: "Equipment and fasteners rated for the chemical environments of pulp & paper." },
        { icon: Factory, title: "Plant Automation", desc: "PLC, SCADA, and VFD solutions for process control and energy efficiency." },
        { icon: Truck, title: "Maintenance Support", desc: "Stock and emergency delivery for planned shutdowns and critical failures." },
      ]
    : [
        { icon: Droplets, title: "Bombas de Proceso", desc: "Bombas slurry, agua, ácido y químicas para procesamiento de pulpa y tratamiento de aguas." },
        { icon: Shield, title: "Resistencia a la Corrosión", desc: "Equipos y fijaciones para los ambientes químicos de la industria celulosa." },
        { icon: Factory, title: "Automatización de Planta", desc: "Soluciones PLC, SCADA y variadores para control de procesos y eficiencia energética." },
        { icon: Truck, title: "Soporte de Mantención", desc: "Stock y entrega de emergencia para paradas programadas y fallas críticas." },
      ];

  const clients = isEn
    ? ["CMPC", "Arauco", "MAPA Project", "Biobío Plants"]
    : ["CMPC", "Arauco", "Proyecto MAPA", "Plantas del Biobío"];

  return (
    <>
      <section className="bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Factory className="h-6 w-6 text-green-300" />
              <span className="text-green-300 font-medium text-sm uppercase tracking-wider">
                {isEn ? "Pulp & Paper Solutions" : "Soluciones para Celulosas"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {isEn ? "Powering Chile's Pulp & Paper Industry" : "Impulsando la Industria de Celulosa en Chile"}
            </h1>
            <p className="text-lg text-green-100 mb-8 max-w-2xl">
              {isEn
                ? "Industrial pumps, automation systems, hydraulic equipment, and welding solutions for pulp mills, paper plants, and forestry operations."
                : "Bombas industriales, sistemas de automatización, equipos hidráulicos y soluciones de soldadura para plantas de celulosa, papel y operaciones forestales."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={lp("/cotizar", lang)} className="bg-white text-green-900 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                {isEn ? "Request Quote" : "Solicitar Cotización"}
              </Link>
              <Link href={lp("/contacto", lang)} className="border border-green-300 text-green-100 px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">
                {isEn ? "Talk to a Specialist" : "Hablar con un Especialista"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            {isEn ? "Why Pulp & Paper Plants Choose Us" : "Por Qué las Plantas de Celulosa Nos Eligen"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv) => (
              <RevealOnScroll key={adv.title}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 text-green-700 rounded-xl mb-4"><adv.icon className="h-7 w-7" /></div>
                  <h3 className="font-bold text-gray-900 mb-2">{adv.title}</h3>
                  <p className="text-sm text-gray-600">{adv.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{isEn ? "Products for Pulp & Paper" : "Productos para Celulosas"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorProducts.map((cat) => (
              <RevealOnScroll key={cat.id}>
                <Link href={lp(`/productos/${cat.id}`, lang)} className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">{cat.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 shrink-0">{cat.company}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{cat.description}</p>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={lp("/productos", lang)} className="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-800">{isEn ? "View Full Catalog" : "Ver Catálogo Completo"} <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{isEn ? "Pulp & Paper Services" : "Servicios para Celulosas"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: isEn ? "Process Automation" : "Automatización de Procesos", desc: isEn ? "PLC programming, VFD installation, and SCADA integration for pulp processing." : "Programación PLC, instalación de variadores e integración SCADA para procesamiento de pulpa.", href: "/servicios" },
              { title: isEn ? "Synchronized Lifting" : "Levante Sincrónico", desc: isEn ? "Lifting of kilns, tanks, and heavy equipment during plant shutdowns." : "Levante de hornos, estanques y equipos pesados durante paradas de planta.", href: "/servicios" },
              { title: isEn ? "Pump Selection & Supply" : "Selección y Suministro de Bombas", desc: isEn ? "Expert selection of slurry and process pumps for pulp & paper applications." : "Selección experta de bombas slurry y de proceso para aplicaciones de celulosa.", href: "/contacto" },
            ].map((svc) => (
              <RevealOnScroll key={svc.title}>
                <Link href={lp(svc.href, lang)} className="group block bg-green-50 border border-green-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">{svc.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{svc.desc}</p>
                  <span className="text-green-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">{isEn ? "Learn more" : "Conocer más"} <ChevronRight className="h-4 w-4" /></span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">{isEn ? "Serving Chile's Forestry Industry" : "Sirviendo a la Industria Forestal de Chile"}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((c) => (
              <div key={c} className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-sm">
                <CheckCircle className="h-4 w-4 text-green-600" />{c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-green-900 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{isEn ? "Need solutions for your pulp & paper plant?" : "¿Necesita soluciones para su planta de celulosa?"}</h2>
          <p className="text-green-200 mb-8 text-lg">{isEn ? "Get a personalized quote for your plant's needs." : "Obtenga una cotización personalizada para las necesidades de su planta."}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={lp("/cotizar", lang)} className="bg-white text-green-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors">{isEn ? "Request Quote" : "Solicitar Cotización"}</Link>
            <Link href={lp("/contacto", lang)} className="border border-green-300 text-green-100 px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors">{isEn ? "Contact Specialist" : "Contactar Especialista"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
