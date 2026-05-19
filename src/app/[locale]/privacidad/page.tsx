import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad y protección de datos personales de Grupo Sande.",
};

export default async function PrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";

  return (
    <article className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-gray prose-headings:text-gray-900">
        <h1>{isEn ? "Privacy Policy" : "Política de Privacidad"}</h1>
        <p className="text-sm text-gray-500">
          {isEn ? "Last updated: May 2026" : "Última actualización: Mayo 2026"}
        </p>

        <h2>
          {isEn
            ? "1. Data Controller"
            : "1. Responsable del Tratamiento"}
        </h2>
        <p>
          {isEn
            ? "Grupo Sande (\"we\", \"us\") is the data controller for personal data collected through this website (gruposande.cl). Our offices are located in Santiago, Chile."
            : "Grupo Sande (\"nosotros\") es el responsable del tratamiento de los datos personales recopilados a través de este sitio web (gruposande.cl). Nuestras oficinas se ubican en Santiago, Chile."}
        </p>

        <h2>
          {isEn
            ? "2. Data We Collect"
            : "2. Datos que Recopilamos"}
        </h2>
        <p>
          {isEn
            ? "When you use our contact or quote forms, we collect:"
            : "Cuando utiliza nuestros formularios de contacto o cotización, recopilamos:"}
        </p>
        <ul>
          <li>{isEn ? "Full name" : "Nombre completo"}</li>
          <li>{isEn ? "Company name" : "Nombre de la empresa"}</li>
          <li>{isEn ? "Email address" : "Correo electrónico"}</li>
          <li>{isEn ? "Phone number" : "Número de teléfono"}</li>
          <li>{isEn ? "Message content and product selections" : "Contenido del mensaje y selección de productos"}</li>
        </ul>
        <p>
          {isEn
            ? "We also use Vercel Analytics to collect anonymous usage data (page views, browser type, country). No cookies are set for analytics tracking."
            : "También utilizamos Vercel Analytics para recopilar datos de uso anónimos (páginas visitadas, tipo de navegador, país). No se configuran cookies para el seguimiento analítico."}
        </p>

        <h2>
          {isEn
            ? "3. Purpose and Legal Basis"
            : "3. Finalidad y Base Legal"}
        </h2>
        <p>
          {isEn
            ? "We process your data to:"
            : "Tratamos sus datos para:"}
        </p>
        <ul>
          <li>
            {isEn
              ? "Respond to your inquiries and quote requests"
              : "Responder a sus consultas y solicitudes de cotización"}
          </li>
          <li>
            {isEn
              ? "Send you relevant product information"
              : "Enviarle información relevante de productos"}
          </li>
          <li>
            {isEn
              ? "Improve our website and services"
              : "Mejorar nuestro sitio web y servicios"}
          </li>
        </ul>
        <p>
          {isEn
            ? "The legal basis is your consent (by submitting the form) and our legitimate interest in responding to business inquiries. Processing is governed by Chilean Law 19.628 on Personal Data Protection."
            : "La base legal es su consentimiento (al enviar el formulario) y nuestro interés legítimo en responder consultas comerciales. El tratamiento se rige por la Ley 19.628 sobre Protección de Datos Personales."}
        </p>

        <h2>
          {isEn ? "4. Data Sharing" : "4. Compartición de Datos"}
        </h2>
        <p>
          {isEn
            ? "We do not sell your personal data. Your data may be processed by:"
            : "No vendemos sus datos personales. Sus datos pueden ser procesados por:"}
        </p>
        <ul>
          <li>
            <strong>Resend</strong> —{" "}
            {isEn
              ? "email delivery service (to send form submissions to our team)"
              : "servicio de entrega de correo electrónico (para enviar los formularios a nuestro equipo)"}
          </li>
          <li>
            <strong>Vercel</strong> —{" "}
            {isEn
              ? "website hosting and analytics"
              : "hosting del sitio web y analíticas"}
          </li>
        </ul>

        <h2>
          {isEn ? "5. Data Retention" : "5. Retención de Datos"}
        </h2>
        <p>
          {isEn
            ? "Form submissions are delivered via email and are not stored in a database on this website. Data is retained in our email systems for as long as necessary to fulfill the business relationship."
            : "Los envíos de formularios se entregan por correo electrónico y no se almacenan en una base de datos de este sitio web. Los datos se retienen en nuestros sistemas de correo el tiempo necesario para cumplir la relación comercial."}
        </p>

        <h2>
          {isEn ? "6. Your Rights" : "6. Sus Derechos"}
        </h2>
        <p>
          {isEn
            ? "Under Chilean law, you have the right to access, rectify, cancel, and oppose the processing of your personal data. To exercise these rights, contact us at:"
            : "De acuerdo a la legislación chilena, usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, contáctenos en:"}
        </p>
        <p>
          <strong>Email:</strong> contacto@gruposande.cl
          <br />
          <strong>{isEn ? "Phone" : "Teléfono"}:</strong> +56 2 2476 7000
        </p>

        <h2>{isEn ? "7. Changes" : "7. Cambios"}</h2>
        <p>
          {isEn
            ? "We may update this policy from time to time. Changes will be posted on this page with an updated date."
            : "Podemos actualizar esta política periódicamente. Los cambios se publicarán en esta página con una fecha actualizada."}
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
