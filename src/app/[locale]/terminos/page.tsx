import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos de Uso",
  description:
    "Términos y condiciones de uso del sitio web de Grupo Sande.",
};

export default async function TerminosPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <article className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray prose-headings:text-gray-900">
        <h1>{isEn ? "Terms of Use" : "Términos de Uso"}</h1>
        <p className="text-sm text-gray-500">
          {isEn ? "Last updated: May 2026" : "Última actualización: Mayo 2026"}
        </p>

        <h2>{isEn ? "1. Acceptance" : "1. Aceptación"}</h2>
        <p>
          {isEn
            ? "By accessing and using this website (gruposande.cl), you accept these terms and conditions. If you do not agree, please do not use this site."
            : "Al acceder y utilizar este sitio web (gruposande.cl), usted acepta estos términos y condiciones. Si no está de acuerdo, por favor no utilice este sitio."}
        </p>

        <h2>
          {isEn ? "2. Website Purpose" : "2. Propósito del Sitio"}
        </h2>
        <p>
          {isEn
            ? "This website is an informational and commercial tool for Grupo Sande and its subsidiary companies (Sande S.A., Tecbolt S.A., Sandiman S.A., Inmobiliaria Sande). Product listings are for reference only and do not constitute a binding offer."
            : "Este sitio web es una herramienta informativa y comercial de Grupo Sande y sus empresas filiales (Sande S.A., Tecbolt S.A., Sandiman S.A., Inmobiliaria Sande). Los listados de productos son referenciales y no constituyen una oferta vinculante."}
        </p>

        <h2>
          {isEn
            ? "3. Intellectual Property"
            : "3. Propiedad Intelectual"}
        </h2>
        <p>
          {isEn
            ? "All content on this website — including text, images, logos, trademarks (Mamut, Sande, Sandiman), and design — is the property of Grupo Sande or its licensors. Reproduction without written authorization is prohibited."
            : "Todo el contenido de este sitio web — incluyendo textos, imágenes, logotipos, marcas registradas (Mamut, Sande, Sandiman) y diseño — es propiedad de Grupo Sande o sus licenciantes. Queda prohibida su reproducción sin autorización escrita."}
        </p>

        <h2>
          {isEn ? "4. Quotes & Pricing" : "4. Cotizaciones y Precios"}
        </h2>
        <p>
          {isEn
            ? "Quotes requested through this website are non-binding estimates. Final pricing, availability, and delivery terms will be confirmed by our sales team via email or phone. Prices may vary without prior notice."
            : "Las cotizaciones solicitadas a través de este sitio web son estimaciones no vinculantes. Los precios finales, disponibilidad y plazos de entrega serán confirmados por nuestro equipo de ventas vía correo electrónico o teléfono. Los precios pueden variar sin previo aviso."}
        </p>

        <h2>
          {isEn
            ? "5. Limitation of Liability"
            : "5. Limitación de Responsabilidad"}
        </h2>
        <p>
          {isEn
            ? "This website is provided \"as is\". Grupo Sande makes no warranties regarding the accuracy, completeness, or timeliness of the information. We are not liable for damages arising from the use of this website."
            : "Este sitio web se proporciona \"tal cual\". Grupo Sande no garantiza la exactitud, integridad o actualidad de la información. No somos responsables por daños derivados del uso de este sitio web."}
        </p>

        <h2>
          {isEn
            ? "6. Governing Law"
            : "6. Ley Aplicable"}
        </h2>
        <p>
          {isEn
            ? "These terms are governed by the laws of the Republic of Chile. Any disputes shall be resolved by the competent courts of Santiago, Chile."
            : "Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa será resuelta por los tribunales competentes de Santiago, Chile."}
        </p>

        <h2>{isEn ? "7. Contact" : "7. Contacto"}</h2>
        <p>
          {isEn
            ? "For questions about these terms, contact us at:"
            : "Para consultas sobre estos términos, contáctenos en:"}
        </p>
        <p>
          <strong>Email:</strong> contacto@gruposande.cl
          <br />
          <strong>{isEn ? "Phone" : "Teléfono"}:</strong> +56 2 2476 7000
        </p>

        <div className="mt-10 pt-6 border-t border-gray-200 not-prose">
          <Link
            href={locale === "en" ? "/en" : "/"}
            className="text-sm text-blue-700 hover:underline"
          >
            ← {isEn ? "Back to home" : "Volver al inicio"}
          </Link>
        </div>
      </div>
    </article>
  );
}
