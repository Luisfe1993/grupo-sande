import type { Metadata } from "next";
import Link from "next/link";
import {
  Building,
  ArrowRight,
  Shield,
  CheckCircle,
  Ruler,
  HardHat,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { productCategories } from "@/data/products";
import { blogPosts } from "@/data/blog";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Soluciones para Construcción — Grupo Sande",
  description:
    "Fijaciones sísmicas NCh 427, herramientas, levante de estructuras y automatización para la construcción chilena. Calidad certificada ISO 9001.",
  openGraph: {
    title: "Soluciones para Construcción — Grupo Sande",
    description:
      "Fijaciones, herramientas, levante y automatización para construcción en Chile.",
  },
};

const constructionProductIds = [
  "tornillos-sande",
  "fijaciones-metal",
  "fijaciones-tabiqueria",
  "fijaciones-madera",
  "fijaciones-concreto",
  "soldadura",
  "electricas",
  "brocas",
  "abrasivos",
  "hidraulica",
  "tecle",
];

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function ConstruccionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);
  const isEn = lang === "en";

  const constructionProducts = productCategories.filter((p) =>
    constructionProductIds.includes(p.id)
  );

  const constructionBlog = blogPosts
    .filter((p) => p.sector === "construccion" || p.sector === "general")
    .slice(0, 3);

  const advantages = isEn
    ? [
        { icon: Shield, title: "Seismic Certified", desc: "Fasteners meeting NCh 427 and ASTM F3125 for seismic construction in Chile." },
        { icon: Ruler, title: "Full Range", desc: "From a single drywall screw to high-strength structural bolts. One supplier." },
        { icon: HardHat, title: "Technical Support", desc: "Engineers who understand Chilean construction standards and on-site requirements." },
        { icon: Building, title: "Nationwide Delivery", desc: "Stock in Santiago with coverage to every construction site in Chile." },
      ]
    : [
        { icon: Shield, title: "Certificación Sísmica", desc: "Fijaciones que cumplen NCh 427 y ASTM F3125 para construcción sísmica en Chile." },
        { icon: Ruler, title: "Gama Completa", desc: "Desde un tornillo drywall hasta pernos estructurales de alta resistencia. Un solo proveedor." },
        { icon: HardHat, title: "Soporte Técnico", desc: "Ingenieros que entienden las normas chilenas de construcción y los requerimientos en obra." },
        { icon: Building, title: "Entrega Nacional", desc: "Stock en Santiago con cobertura a cualquier obra en Chile." },
      ];

  const projectTypes = isEn
    ? [
        "Residential Buildings",
        "Bridges & Overpasses",
        "Industrial Structures",
        "Hospitals & Public Buildings",
        "Timber Frame Construction",
        "Metal Roofing & Cladding",
      ]
    : [
        "Edificios Residenciales",
        "Puentes y Pasos Superiores",
        "Estructuras Industriales",
        "Hospitales y Edificios Públicos",
        "Construcción en Madera",
        "Techumbre y Revestimiento Metálico",
      ];

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-sky-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Building className="h-6 w-6 text-blue-300" />
              <span className="text-blue-300 font-medium text-sm uppercase tracking-wider">
                {isEn ? "Construction Solutions" : "Soluciones para Construcción"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {isEn
                ? "Building Chile with Certified Quality"
                : "Construyendo Chile con Calidad Certificada"}
            </h1>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl">
              {isEn
                ? "Seismic-grade fasteners, power tools, and structural lifting for Chilean construction. ISO 9001 certified with full traceability per batch."
                : "Fijaciones de grado sísmico, herramientas eléctricas y levante estructural para la construcción chilena. Certificación ISO 9001 con trazabilidad completa por lote."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={lp("/cotizar", lang)}
                className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {isEn ? "Request Construction Quote" : "Cotizar para Construcción"}
              </Link>
              <Link
                href={lp("/contacto", lang)}
                className="border border-blue-300 text-blue-100 px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
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
            {isEn ? "Why Builders Choose Us" : "Por Qué las Constructoras Nos Eligen"}
          </h2>
          <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto">
            {isEn
              ? "Chile demands seismic-grade quality. Our fasteners and products are designed for the most demanding structural applications."
              : "Chile exige calidad de grado sísmico. Nuestras fijaciones y productos están diseñados para las aplicaciones estructurales más exigentes."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv) => (
              <RevealOnScroll key={adv.title}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-100 text-blue-700 rounded-xl mb-4">
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

      {/* Project Types */}
      <section className="py-12 bg-blue-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            {isEn ? "Types of Projects We Supply" : "Tipos de Proyectos que Abastecemos"}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {projectTypes.map((pt) => (
              <div
                key={pt}
                className="flex items-center gap-2 bg-white border border-blue-200 rounded-lg px-4 py-2 text-sm text-gray-700"
              >
                <CheckCircle className="h-4 w-4 text-blue-600" />
                {pt}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isEn ? "Products for Construction" : "Productos para Construcción"}
          </h2>
          <p className="text-gray-500 mb-8">
            {isEn
              ? "Fasteners, tools, and equipment selected for Chilean construction requirements."
              : "Fijaciones, herramientas y equipos seleccionados para los requerimientos de la construcción chilena."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {constructionProducts.map((cat) => (
              <RevealOnScroll key={cat.id}>
                <Link
                  href={lp(`/productos/${cat.id}`, lang)}
                  className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
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
              className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800"
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
            {isEn ? "Construction Services" : "Servicios para Construcción"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: isEn ? "Structural Lifting" : "Levante de Estructuras",
                desc: isEn
                  ? "Bridge lifting, overpass repositioning, building straightening with millimetric precision."
                  : "Levante de puentes, reposicionamiento de pasos superiores, enderezamiento de edificios con precisión milimétrica.",
                href: "/servicios#levante-sincronico",
              },
              {
                title: isEn ? "Fastener Advisory" : "Asesoría en Fijaciones",
                desc: isEn
                  ? "Selection of the right fastener for each structural connection. NCh 427 compliance."
                  : "Selección de la fijación correcta para cada conexión estructural. Cumplimiento NCh 427.",
                href: "/contacto",
              },
              {
                title: isEn ? "Hydraulic Equipment Rental" : "Arriendo de Equipos Hidráulicos",
                desc: isEn
                  ? "Hydraulic jacks, cylinders, and power units for construction site operations."
                  : "Gatos hidráulicos, cilindros y centrales para operaciones en obra.",
                href: "/servicios#arriendo-cilindros",
              },
            ].map((svc) => (
              <RevealOnScroll key={svc.title}>
                <Link
                  href={lp(svc.href, lang)}
                  className="group block bg-blue-50 border border-blue-200 rounded-xl p-6 hover:shadow-md transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{svc.desc}</p>
                  <span className="text-blue-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isEn ? "Learn more" : "Conocer más"}
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Articles */}
      {constructionBlog.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="h-5 w-5 text-blue-700" />
              <h2 className="text-2xl font-bold text-gray-900">
                {isEn ? "Construction Knowledge Hub" : "Centro de Conocimiento en Construcción"}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {constructionBlog.map((post) => {
                const title = (isEn && post.titleEn) || post.title;
                const excerpt = (isEn && post.excerptEn) || post.excerpt;
                return (
                  <Link
                    key={post.id}
                    href={lp(`/blog/${post.id}`, lang)}
                    className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all"
                  >
                    <span className="text-xs font-medium text-blue-700 uppercase">
                      {(isEn && post.categoryEn) || post.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-blue-700 transition-colors line-clamp-2">
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
      <section className="bg-blue-900 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {isEn
              ? "Ready to supply your construction project?"
              : "¿Listo para abastecer su proyecto de construcción?"}
          </h2>
          <p className="text-blue-200 mb-8 text-lg">
            {isEn
              ? "Get a personalized quote with NCh-certified products. Response within 24 business hours."
              : "Obtenga una cotización personalizada con productos certificados NCh. Respuesta en 24 horas hábiles."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={lp("/cotizar", lang)}
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              {isEn ? "Request Quote" : "Solicitar Cotización"}
            </Link>
            <Link
              href={lp("/contacto", lang)}
              className="border border-blue-300 text-blue-100 px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              {isEn ? "Contact a Specialist" : "Contactar Especialista"}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
