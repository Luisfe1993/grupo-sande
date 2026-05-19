import type { Metadata } from "next";
import CotizadorForm from "./CotizadorForm";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Cotizar Productos",
  description:
    "Solicite cotización de productos industriales: herramientas, fijaciones, maquinaria y más. Respuesta en 24 horas hábiles.",
};

export default async function CotizarPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const lang = (locale === "en" ? "en" : "es") as Locale;
  const t = getDictionary(lang);

  return (
    <>
      <section className="bg-gradient-to-b from-blue-700 to-blue-800 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            {t.quote.title}
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl">
            {t.quote.description}
          </p>
        </div>
      </section>

      <CotizadorForm />
    </>
  );
}
