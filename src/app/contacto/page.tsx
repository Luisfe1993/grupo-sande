import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contáctenos",
  description:
    "Solicite una cotización o consulte por productos y servicios industriales de Grupo Sande. Oficinas en Santiago y Antofagasta, Chile.",
  openGraph: {
    title: "Contáctenos — Grupo Sande",
    description:
      "Contáctenos para cotizaciones y consultas sobre herramientas industriales, fijaciones y automatización.",
  },
};

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gray-900 text-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Contáctenos
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Solicite una cotización, consulte por productos o servicios, o
            simplemente conversemos sobre cómo podemos ayudar a su empresa.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">
                  Formulario de Contacto
                </h2>
                <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-lg" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Contacto Directo
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Teléfono
                      </p>
                      <p className="text-sm text-gray-600">
                        +56 2 2476 7000
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Email General
                      </p>
                      <p className="text-sm text-gray-600">
                        contacto@gruposande.cl
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        Horario
                      </p>
                      <p className="text-sm text-gray-600">
                        Lunes a Viernes, 08:30 - 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Nuestras Oficinas
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      company: "Sande S.A.",
                      address: "Av. L. Bdo. O'Higgins N° 1771, Santiago",
                      color: "bg-blue-600",
                    },
                    {
                      company: "Tecbolt S.A. (Mamut)",
                      address:
                        "Av. Gladys Marin N° 5760, Estación Central",
                      color: "bg-red-600",
                    },
                    {
                      company: "Sandiman S.A.",
                      address:
                        "Manuel Rivas Vicuña N°160, Estación Central",
                      color: "bg-emerald-600",
                    },
                    {
                      company: "Sandiman Antofagasta",
                      address: "Av. Radomiro Tomic N°7275, Antofagasta",
                      color: "bg-emerald-600",
                    },
                  ].map((office) => (
                    <div key={office.address} className="flex items-start gap-3">
                      <div
                        className={`w-2 h-2 rounded-full mt-2 shrink-0 ${office.color}`}
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {office.company}
                        </p>
                        <p className="text-sm text-gray-600">
                          {office.address}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/56994426795?text=Hola%2C%20quisiera%20consultar%20por%20productos%20de%20Grupo%20Sande"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-current"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Nuestra Ubicación
          </h2>
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.4!2d-70.6506!3d-33.4489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c5a1b2c3d4e5%3A0x1234567890abcdef!2sAv.%20Libertador%20Bernardo%20O'Higgins%201771%2C%20Santiago%2C%20Chile!5e0!3m2!1ses!2scl!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Grupo Sande — Santiago, Chile"
            />
          </div>
        </div>
      </section>
    </>
  );
}
