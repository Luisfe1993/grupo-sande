import type { Metadata } from "next";
import Link from "next/link";
import {
  Anchor,
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
  title: "Soluciones para Puertos — Grupo Sande",
  description:
    "Levante sincrónico de grúas portuarias, equipos hidráulicos, automatización y herramientas industriales para la industria portuaria chilena.",
  openGraph: {
    title: "Soluciones para Puertos — Grupo Sande",
    description:
      "Levante, hidráulica y automatización para puertos y terminales en Chile.",
  },
};

const sectorProductIds = [
  "tecle",
  "hidraulica",
  "bombas",
  "plc",
  "variadores",
  "sensores",
  "hmi",
  "soldadura",
  "electricas",
];

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function PuertosPage({
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
        { icon: Anchor, title: "Port Lifting Expertise", desc: "Synchronized lifting of pantograph cranes, gantry cranes, and heavy port structures." },
        { icon: Shield, title: "Marine-Grade Equipment", desc: "Corrosion-resistant tools and fasteners rated for coastal and marine environments." },
        { icon: Truck, title: "Critical Availability", desc: "Stock in Santiago. Emergency response for port operations that can't stop." },
      ]
    : [
        { icon: Anchor, title: "Experiencia en Levante Portuario", desc: "Levante sincrónico de grúas pantográficas, grúas pórtico y estructuras portuarias pesadas." },
        { icon: Shield, title: "Equipos Grado Marino", desc: "Herramientas y fijaciones resistentes a la corrosión para ambientes costeros y marinos." },
        { icon: Truck, title: "Disponibilidad Crítica", desc: "Stock en Santiago. Respuesta de emergencia para operaciones portuarias que no pueden parar." },
      ];

  const clients = isEn
    ? ["Valparaíso Port", "San Antonio Port", "Coronel Port", "Lirquén Port"]
    : ["Puerto de Valparaíso", "Puerto San Antonio", "Puerto Coronel", "Puerto Lirquén"];

  return (
    <>
      <section className="bg-gradient-to-br from-cyan-900 via-cyan-800 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Anchor className="h-6 w-6 text-cyan-300" />
              <span className="text-cyan-300 font-medium text-sm uppercase tracking-wider">
                {isEn ? "Port Solutions" : "Soluciones para Puertos"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {isEn ? "Keeping Chile's Ports Moving" : "Manteniendo los Puertos de Chile en Movimiento"}
            </h1>
            <p className="text-lg text-cyan-100 mb-8 max-w-2xl">
              {isEn
                ? "Synchronized lifting for port cranes, hydraulic equipment, and industrial automation. Specialized support for terminal operations and maintenance."
                : "Levante sincrónico para grúas portuarias, equipos hidráulicos y automatización industrial. Soporte especializado para operaciones y mantención de terminales."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={lp("/cotizar", lang)} className="bg-white text-cyan-900 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">
                {isEn ? "Request Port Quote" : "Cotizar para Puertos"}
              </Link>
              <Link href={lp("/contacto", lang)} className="border border-cyan-300 text-cyan-100 px-6 py-3 rounded-lg font-medium hover:bg-cyan-800 transition-colors">
                {isEn ? "Talk to a Specialist" : "Hablar con un Especialista"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            {isEn ? "Why Ports Trust Us" : "Por Qué los Puertos Confían en Nosotros"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((adv) => (
              <RevealOnScroll key={adv.title}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-cyan-100 text-cyan-700 rounded-xl mb-4">
                    <adv.icon className="h-7 w-7" />
                  </div>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{isEn ? "Products for Ports" : "Productos para Puertos"}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorProducts.map((cat) => (
              <RevealOnScroll key={cat.id}>
                <Link href={lp(`/productos/${cat.id}`, lang)} className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 group-hover:text-cyan-700 transition-colors">{cat.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 shrink-0">{cat.company}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{cat.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.products.slice(0, 3).map((p) => (<span key={p} className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded">{p}</span>))}
                    {cat.products.length > 3 && <span className="text-xs text-gray-400">+{cat.products.length - 3} más</span>}
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={lp("/productos", lang)} className="inline-flex items-center gap-2 text-cyan-700 font-medium hover:text-cyan-800">
              {isEn ? "View Full Catalog" : "Ver Catálogo Completo"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">{isEn ? "Port Services" : "Servicios para Puertos"}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: isEn ? "Crane Lifting & Repositioning" : "Levante y Reposicionamiento de Grúas", desc: isEn ? "Synchronized lifting of pantograph and gantry cranes. Millimetric precision with PLC control." : "Levante sincrónico de grúas pantográficas y pórtico. Precisión milimétrica con control PLC.", href: "/servicios" },
              { title: isEn ? "Hydraulic Equipment Rental" : "Arriendo de Equipos Hidráulicos", desc: isEn ? "Jacks, cylinders, and hydraulic power units for port maintenance operations." : "Gatos, cilindros y centrales hidráulicas para operaciones de mantención portuaria.", href: "/servicios" },
              { title: isEn ? "Port Automation" : "Automatización Portuaria", desc: isEn ? "PLC control systems, VFDs for crane motors, and SCADA monitoring." : "Sistemas de control PLC, variadores para motores de grúas y monitoreo SCADA.", href: "/servicios" },
            ].map((svc) => (
              <RevealOnScroll key={svc.title}>
                <Link href={lp(svc.href, lang)} className="group block bg-cyan-50 border border-cyan-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-cyan-700 transition-colors">{svc.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{svc.desc}</p>
                  <span className="text-cyan-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">{isEn ? "Learn more" : "Conocer más"} <ChevronRight className="h-4 w-4" /></span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">{isEn ? "Serving Chile's Major Ports" : "Sirviendo a los Principales Puertos de Chile"}</p>
          <div className="flex flex-wrap justify-center gap-6">
            {clients.map((c) => (
              <div key={c} className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-sm">
                <CheckCircle className="h-4 w-4 text-cyan-600" />{c}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cyan-900 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{isEn ? "Need port maintenance solutions?" : "¿Necesita soluciones para mantención portuaria?"}</h2>
          <p className="text-cyan-200 mb-8 text-lg">{isEn ? "Get a personalized quote for your terminal's needs." : "Obtenga una cotización personalizada para las necesidades de su terminal."}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={lp("/cotizar", lang)} className="bg-white text-cyan-900 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">{isEn ? "Request Quote" : "Solicitar Cotización"}</Link>
            <Link href={lp("/contacto", lang)} className="border border-cyan-300 text-cyan-100 px-8 py-3 rounded-lg font-medium hover:bg-cyan-800 transition-colors">{isEn ? "Contact Specialist" : "Contactar Especialista"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
