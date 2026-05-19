import type { Metadata } from "next";
import ProductosCatalog from "./ProductosCatalog";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Catálogo de Productos",
  description:
    "Explore más de 5.000 productos industriales: bombas, tornillería, tecles, hidráulica, máquinas CNC, soldadura, herramientas eléctricas, fijaciones Mamut y automatización.",
  openGraph: {
    title: "Catálogo de Productos — Grupo Sande",
    description:
      "Catálogo consolidado con más de 5.000 productos industriales de Sande, Fijaciones Mamut y Sandiman.",
  },
};

export default async function ProductosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);

  return (
    <>
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            {t.products.title}
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            {t.products.description}
          </p>
        </div>
      </section>

      <ProductosCatalog />
    </>
  );
}
