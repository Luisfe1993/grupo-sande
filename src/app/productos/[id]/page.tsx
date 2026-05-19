import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ArrowLeft,
  Phone,
  FileDown,
  Package,
  Droplets,
  Wrench,
  ArrowUpFromLine,
  Gauge,
  Cog,
  Cpu,
  Circle,
  Flame,
  Wind,
  Zap,
  Drill,
  Link as LinkIcon,
  LayoutGrid,
  TreePine,
  Building,
  Activity,
  Radar,
  Monitor,
  ShieldCheck,
} from "lucide-react";
import { productCategories } from "@/data/products";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Droplets,
  Wrench,
  ArrowUpFromLine,
  Gauge,
  Cog,
  Cpu,
  Circle,
  Flame,
  Wind,
  Zap,
  Drill,
  Link: LinkIcon,
  LayoutGrid,
  TreePine,
  Building,
  Activity,
  Radar,
  Monitor,
  ShieldCheck,
  Package,
};

const companyColors: Record<
  string,
  { bg: string; text: string; accent: string; border: string }
> = {
  sande: {
    bg: "bg-blue-50",
    text: "text-blue-700",
    accent: "bg-blue-600",
    border: "border-blue-200",
  },
  fijaciones: {
    bg: "bg-red-50",
    text: "text-red-700",
    accent: "bg-red-600",
    border: "border-red-200",
  },
  sandiman: {
    bg: "bg-emerald-50",
    text: "text-emerald-700",
    accent: "bg-emerald-600",
    border: "border-emerald-200",
  },
};

export async function generateStaticParams() {
  return productCategories.map((cat) => ({ id: cat.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const category = productCategories.find((c) => c.id === id);
  if (!category) return { title: "Producto no encontrado" };

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} — ${category.company} | Grupo Sande`,
      description: category.description,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const category = productCategories.find((c) => c.id === id);

  if (!category) notFound();

  const Icon = iconMap[category.icon] || Package;
  const colors = companyColors[category.companyId];

  // Find related categories from the same company
  const related = productCategories
    .filter((c) => c.companyId === category.companyId && c.id !== category.id)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb + Header */}
      <section className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/productos" className="hover:text-white transition-colors">
              Productos
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">{category.name}</span>
          </nav>

          <div className="flex items-start gap-5">
            <div
              className={`w-16 h-16 rounded-xl flex items-center justify-center ${colors.bg} shrink-0`}
            >
              <Icon className={`h-8 w-8 ${colors.text}`} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-400 mb-1">
                {category.company}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold mb-3">
                {category.name}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-8">
            Productos en esta categoría ({category.products.length})
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {category.products.map((product) => (
              <div
                key={product}
                className={`rounded-xl border ${colors.border} p-4 sm:p-5 hover:shadow-md transition-shadow`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors.bg} shrink-0`}
                  >
                    <Icon className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {product}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      {category.company}
                    </p>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href={`/contacto?asunto=${encodeURIComponent(`Cotización: ${product}`)}`}
                    className={`text-xs font-medium ${colors.text} hover:underline`}
                  >
                    Cotizar
                  </Link>
                  <Link
                    href={`/contacto?asunto=${encodeURIComponent(`Ficha técnica: ${product}`)}`}
                    className="text-xs font-medium text-gray-500 hover:text-gray-700"
                  >
                    Solicitar Ficha
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 md:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                ¿Necesita cotización para {category.name}?
              </h2>
              <p className="text-gray-600">
                Contáctenos para precios, disponibilidad y fichas técnicas
                detalladas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contacto?asunto=${encodeURIComponent(`Cotización: ${category.name}`)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Phone className="h-4 w-4" />
                Solicitar Cotización
              </Link>
              <Link
                href={`/contacto?asunto=${encodeURIComponent(`Ficha técnica: ${category.name}`)}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
              >
                <FileDown className="h-4 w-4" />
                Solicitar Ficha
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Categories */}
      {related.length > 0 && (
        <section className="bg-white py-12 sm:py-16 border-t border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-900 mb-8">
              Otras categorías de {category.company}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((rel) => {
                const RelIcon = iconMap[rel.icon] || Package;
                const relColors = companyColors[rel.companyId];
                return (
                  <Link
                    key={rel.id}
                    href={`/productos/${rel.id}`}
                    className="group rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${relColors.bg} mb-4`}
                    >
                      <RelIcon className={`h-6 w-6 ${relColors.text}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors mb-2">
                      {rel.name}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {rel.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Back link */}
      <div className="bg-gray-50 py-6 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/productos"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al catálogo completo
          </Link>
        </div>
      </div>
    </>
  );
}
