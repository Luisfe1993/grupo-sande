import type { Metadata } from "next";
import Link from "next/link";
import {
  HardHat,
  ArrowRight,
  Shield,
  Clock,
  Truck,
  CheckCircle,
  Wrench,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { productCategories } from "@/data/products";
import { blogPosts } from "@/data/blog";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Soluciones para Minería — Grupo Sande",
  description:
    "Herramientas, fijaciones, levante sincrónico, automatización y bombas slurry para la gran y mediana minería chilena. Stock en Santiago y Antofagasta.",
  openGraph: {
    title: "Soluciones para Minería — Grupo Sande",
    description:
      "Soluciones industriales integrales para minería: herramientas, fijaciones, levante y automatización.",
  },
};

const miningProductIds = [
  "bombas",
  "tecle",
  "hidraulica",
  "maquinas",
  "maq-cnc",
  "soldadura",
  "neumatica",
  "electricas",
  "fijaciones-metal",
  "fijaciones-concreto",
  "plc",
  "variadores",
  "sensores",
];

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function MineriaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);
  const isEn = lang === "en";

  const miningProducts = productCategories.filter((p) =>
    miningProductIds.includes(p.id)
  );

  const miningBlog = blogPosts
    .filter((p) => p.sector === "mineria" || p.sector === "general")
    .slice(0, 3);

  const advantages = isEn
    ? [
        { icon: Truck, title: "Stock in Antofagasta", desc: "Immediate availability in the mining region. 24-hour delivery to mine sites." },
        { icon: Shield, title: "Certified Quality", desc: "ISO 9001, full traceability, 3.1 quality certificates per batch." },
        { icon: Clock, title: "Emergency Response", desc: "48-72 hour delivery for critical parts. We understand plant shutdown costs." },
        { icon: Wrench, title: "Technical Advisory", desc: "Specialized engineers who know mining operations firsthand." },
      ]
    : [
        { icon: Truck, title: "Stock en Antofagasta", desc: "Disponibilidad inmediata en la región minera. Entrega en 24 horas a faenas." },
        { icon: Shield, title: "Calidad Certificada", desc: "ISO 9001, trazabilidad completa, certificados de calidad 3.1 por lote." },
        { icon: Clock, title: "Respuesta de Emergencia", desc: "Entrega en 48-72 horas para piezas críticas. Entendemos el costo de una parada de planta." },
        { icon: Wrench, title: "Asesoría Técnica", desc: "Ingenieros especializados que conocen la operación minera de primera mano." },
      ];

  const clients = [
    "Codelco",
    "BHP",
    "Antofagasta Minerals",
    "Minera Los Pelambres",
    "Teck Resources",
    "Anglo American",
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-yellow-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <HardHat className="h-6 w-6 text-amber-300" />
              <span className="text-amber-300 font-medium text-sm uppercase tracking-wider">
                {isEn ? "Mining Solutions" : "Soluciones para Minería"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {isEn
                ? "Your Industrial Partner for Chilean Mining"
                : "Su Socio Industrial para la Minería Chilena"}
            </h1>
            <p className="text-lg text-amber-100 mb-8 max-w-2xl">
              {isEn
                ? "From a single fastener to a 40,000-ton synchronized lift. Three specialized companies under one group, with stock in Santiago and Antofagasta."
                : "Desde una fijación hasta un levante sincrónico de 40.000 toneladas. Tres empresas especializadas bajo un mismo grupo, con stock en Santiago y Antofagasta."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={lp("/cotizar", lang)}
                className="bg-white text-amber-900 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
              >
                {isEn ? "Request a Mining Quote" : "Solicitar Cotización Minera"}
              </Link>
              <Link
                href={lp("/contacto", lang)}
                className="border border-amber-300 text-amber-100 px-6 py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors"
              >
                {isEn ? "Talk to a Specialist" : "Hablar con un Especialista"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            {isEn ? "Why Mining Companies Choose Us" : "Por Qué las Mineras Nos Eligen"}
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            {isEn
              ? "We understand that in mining, every hour of downtime costs thousands. That's why we deliver fast, certified, and with expert support."
              : "Entendemos que en minería cada hora de parada cuesta miles. Por eso entregamos rápido, certificado y con soporte experto."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv) => (
              <RevealOnScroll key={adv.title}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-amber-100 text-amber-700 rounded-xl mb-4">
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

      {/* Products for Mining */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isEn ? "Products for Mining" : "Productos para Minería"}
          </h2>
          <p className="text-gray-500 mb-8">
            {isEn
              ? "Over 3,000 products with permanent stock, ready for the most demanding mining operations."
              : "Más de 3.000 productos con stock permanente, listos para las operaciones mineras más exigentes."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {miningProducts.map((cat) => (
              <RevealOnScroll key={cat.id}>
                <Link
                  href={lp(`/productos/${cat.id}`, lang)}
                  className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                      {cat.name}
                    </h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 shrink-0">
                      {cat.company}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {cat.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {cat.products.slice(0, 3).map((p) => (
                      <span
                        key={p}
                        className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded"
                      >
                        {p}
                      </span>
                    ))}
                    {cat.products.length > 3 && (
                      <span className="text-xs text-gray-400">
                        +{cat.products.length - 3} más
                      </span>
                    )}
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href={lp("/productos", lang)}
              className="inline-flex items-center gap-2 text-amber-700 font-medium hover:text-amber-800"
            >
              {isEn ? "View Full Catalog" : "Ver Catálogo Completo"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {isEn ? "Key Services for Mining" : "Servicios Clave para Minería"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: isEn ? "Synchronized Lifting" : "Levante Sincrónico",
                desc: isEn
                  ? "PLC-controlled lifting up to 40,000+ tons. Record: 1,500 tons at Los Pelambres."
                  : "Levante controlado por PLC hasta 40.000+ toneladas. Récord: 1.500 ton en Los Pelambres.",
                href: "/servicios#levante-sincronico",
              },
              {
                title: isEn ? "Industrial Automation" : "Automatización Industrial",
                desc: isEn
                  ? "PLCs, SCADA, VFDs. Integration of Siemens and Rockwell systems."
                  : "PLCs, SCADA, variadores. Integración de sistemas Siemens y Rockwell.",
                href: "/servicios#automatizacion",
              },
              {
                title: isEn ? "CNC Precision Machining" : "Mecanizado CNC de Precisión",
                desc: isEn
                  ? "Custom parts with ±0.01mm tolerances. 48-72 hour emergency delivery."
                  : "Piezas a medida con tolerancias ±0.01mm. Entrega de emergencia en 48-72 horas.",
                href: "/servicios#mecanizado",
              },
            ].map((svc) => (
              <RevealOnScroll key={svc.title}>
                <Link
                  href={lp(svc.href, lang)}
                  className="group block bg-amber-50 border border-amber-200 rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{svc.desc}</p>
                  <span className="text-amber-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isEn ? "Learn more" : "Conocer más"}
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-wider mb-6">
            {isEn ? "Trusted by Leading Mining Companies" : "Confían en Nosotros las Principales Mineras"}
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((c) => (
              <div
                key={c}
                className="flex items-center justify-center px-6 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium text-sm"
              >
                <CheckCircle className="h-4 w-4 text-amber-600 mr-2" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      {miningBlog.length > 0 && (
        <section className="py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="h-5 w-5 text-amber-700" />
              <h2 className="text-2xl font-bold text-gray-900">
                {isEn ? "Mining Knowledge Hub" : "Centro de Conocimiento Minero"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {miningBlog.map((post) => {
                const title = (isEn && post.titleEn) || post.title;
                const excerpt = (isEn && post.excerptEn) || post.excerpt;
                return (
                  <Link
                    key={post.id}
                    href={lp(`/blog/${post.id}`, lang)}
                    className="group bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-medium text-amber-700 uppercase">
                      {(isEn && post.categoryEn) || post.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-amber-700 transition-colors line-clamp-2">
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {excerpt}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-amber-900 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isEn
              ? "Ready to optimize your mining operation?"
              : "¿Listo para optimizar su operación minera?"}
          </h2>
          <p className="text-amber-200 mb-8 text-lg">
            {isEn
              ? "Get a personalized quote for your mine's specific needs. Response within 24 business hours."
              : "Obtenga una cotización personalizada para las necesidades específicas de su faena. Respuesta en 24 horas hábiles."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={lp("/cotizar", lang)}
              className="bg-white text-amber-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors"
            >
              {isEn ? "Request Quote" : "Solicitar Cotización"}
            </Link>
            <Link
              href={lp("/contacto", lang)}
              className="border border-amber-300 text-amber-100 px-8 py-3 rounded-lg font-medium hover:bg-amber-800 transition-colors"
            >
              {isEn ? "Contact a Specialist" : "Contactar Especialista"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
