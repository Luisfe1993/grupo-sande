import type { Metadata } from "next";
import Link from "next/link";
import {
  Factory,
  ArrowRight,
  Cpu,
  Gauge,
  Cog,
  CheckCircle,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { productCategories } from "@/data/products";
import { blogPosts } from "@/data/blog";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Soluciones para Manufactura — Grupo Sande",
  description:
    "Máquinas CNC, herramientas, automatización PLC y soldadura para la industria manufacturera chilena. Tornos, centros de mecanizado y variadores de frecuencia.",
  openGraph: {
    title: "Soluciones para Manufactura — Grupo Sande",
    description:
      "Equipos, herramientas y automatización para la manufactura industrial en Chile.",
  },
};

const sectorProductIds = [
  "maq-cnc",
  "maquinas",
  "soldadura",
  "abrasivos",
  "brocas",
  "neumatica",
  "electricas",
  "plc",
  "variadores",
  "sensores",
  "hmi",
  "seguridad-industrial",
];

function lp(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

export default async function ManufacturaPage({
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

  const sectorBlog = blogPosts
    .filter((p) => p.sector === "manufactura" || p.sector === "general")
    .slice(0, 3);

  const advantages = isEn
    ? [
        { icon: Cpu, title: "Latest CNC Technology", desc: "CNC lathes, machining centers, and turning centers for precision manufacturing." },
        { icon: Cog, title: "Complete Workshop", desc: "From conventional machines to CNC. Lathes, mills, shears, and bending machines." },
        { icon: Gauge, title: "Industrial Automation", desc: "PLCs, VFDs, HMI screens, and SCADA systems to modernize your production line." },
        { icon: Factory, title: "Technical Support", desc: "Installation, programming, and training included. We know Chilean manufacturing." },
      ]
    : [
        { icon: Cpu, title: "Última Tecnología CNC", desc: "Tornos CNC, centros de mecanizado y centros de torneado para manufactura de precisión." },
        { icon: Cog, title: "Taller Completo", desc: "Desde máquinas convencionales hasta CNC. Tornos, fresadoras, cizallas y plegadoras." },
        { icon: Gauge, title: "Automatización Industrial", desc: "PLCs, variadores, pantallas HMI y sistemas SCADA para modernizar su línea de producción." },
        { icon: Factory, title: "Soporte Técnico", desc: "Instalación, programación y capacitación incluidas. Conocemos la manufactura chilena." },
      ];

  return (
    <>
      <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <Factory className="h-6 w-6 text-purple-300" />
              <span className="text-purple-300 font-medium text-sm uppercase tracking-wider">
                {isEn ? "Manufacturing Solutions" : "Soluciones para Manufactura"}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
              {isEn
                ? "Equip Your Workshop with the Best"
                : "Equipe su Taller con lo Mejor"}
            </h1>
            <p className="text-lg text-purple-100 mb-8 max-w-2xl">
              {isEn
                ? "CNC machines, industrial tools, welding equipment, and automation solutions. Everything your manufacturing operation needs under one roof."
                : "Máquinas CNC, herramientas industriales, equipos de soldadura y soluciones de automatización. Todo lo que su operación manufacturera necesita bajo un mismo techo."}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={lp("/cotizar", lang)} className="bg-white text-purple-900 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                {isEn ? "Request a Quote" : "Solicitar Cotización"}
              </Link>
              <Link href={lp("/contacto", lang)} className="border border-purple-300 text-purple-100 px-6 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors">
                {isEn ? "Talk to a Specialist" : "Hablar con un Especialista"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
            {isEn ? "Why Manufacturers Choose Us" : "Por Qué los Fabricantes Nos Eligen"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((adv) => (
              <RevealOnScroll key={adv.title}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 text-purple-700 rounded-xl mb-4">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {isEn ? "Products for Manufacturing" : "Productos para Manufactura"}
          </h2>
          <p className="text-gray-500 mb-8">
            {isEn
              ? "Machines, tools, and automation equipment for every stage of your production process."
              : "Máquinas, herramientas y equipos de automatización para cada etapa de su proceso productivo."}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectorProducts.map((cat) => (
              <RevealOnScroll key={cat.id}>
                <Link href={lp(`/productos/${cat.id}`, lang)} className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors">{cat.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 shrink-0">{cat.company}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{cat.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {cat.products.slice(0, 3).map((p) => (
                      <span key={p} className="text-xs bg-gray-50 text-gray-500 px-2 py-0.5 rounded">{p}</span>
                    ))}
                    {cat.products.length > 3 && <span className="text-xs text-gray-400">+{cat.products.length - 3} más</span>}
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href={lp("/productos", lang)} className="inline-flex items-center gap-2 text-purple-700 font-medium hover:text-purple-800">
              {isEn ? "View Full Catalog" : "Ver Catálogo Completo"} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            {isEn ? "Key Services for Manufacturing" : "Servicios para Manufactura"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: isEn ? "CNC Precision Machining" : "Mecanizado CNC de Precisión", desc: isEn ? "Custom parts with ±0.01mm tolerances. From prototypes to production runs." : "Piezas a medida con tolerancias ±0.01mm. Desde prototipos hasta series de producción.", href: "/servicios" },
              { title: isEn ? "Industrial Automation" : "Automatización Industrial", desc: isEn ? "PLC programming, SCADA integration, VFD installation for production lines." : "Programación PLC, integración SCADA, instalación de variadores para líneas de producción.", href: "/servicios" },
              { title: isEn ? "Technical Training" : "Capacitación Técnica", desc: isEn ? "Operator training on CNC machines, PLC systems, and industrial safety." : "Capacitación de operadores en máquinas CNC, sistemas PLC y seguridad industrial.", href: "/contacto" },
            ].map((svc) => (
              <RevealOnScroll key={svc.title}>
                <Link href={lp(svc.href, lang)} className="group block bg-purple-50 border border-purple-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">{svc.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{svc.desc}</p>
                  <span className="text-purple-700 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                    {isEn ? "Learn more" : "Conocer más"} <ChevronRight className="h-4 w-4" />
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {sectorBlog.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <BookOpen className="h-5 w-5 text-purple-700" />
              <h2 className="text-2xl font-bold text-gray-900">{isEn ? "Manufacturing Knowledge" : "Conocimiento Manufacturero"}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sectorBlog.map((post) => (
                <Link key={post.id} href={lp(`/blog/${post.id}`, lang)} className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all">
                  <span className="text-xs font-medium text-purple-700 uppercase">{(isEn && post.categoryEn) || post.category}</span>
                  <h3 className="font-bold text-gray-900 mt-2 mb-2 group-hover:text-purple-700 transition-colors line-clamp-2">{(isEn && post.titleEn) || post.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{(isEn && post.excerptEn) || post.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-purple-900 text-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{isEn ? "Ready to upgrade your production?" : "¿Listo para mejorar su producción?"}</h2>
          <p className="text-purple-200 mb-8 text-lg">{isEn ? "Get a personalized quote for your manufacturing needs. Response within 24 business hours." : "Obtenga una cotización personalizada para sus necesidades de manufactura. Respuesta en 24 horas hábiles."}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={lp("/cotizar", lang)} className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">{isEn ? "Request Quote" : "Solicitar Cotización"}</Link>
            <Link href={lp("/contacto", lang)} className="border border-purple-300 text-purple-100 px-8 py-3 rounded-lg font-medium hover:bg-purple-800 transition-colors">{isEn ? "Contact Specialist" : "Contactar Especialista"}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
