import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-6 bg-blue-500 rounded-sm" />
                <div className="w-1.5 h-6 bg-red-500 rounded-sm" />
                <div className="w-1.5 h-6 bg-emerald-500 rounded-sm" />
              </div>
              <span className="text-lg font-bold text-white">Grupo Sande</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Grupo empresarial chileno con más de 85 años de trayectoria.
              Soluciones industriales integrales en herramientas, fijaciones y
              automatización.
            </p>
          </div>

          {/* Empresas */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Nuestras Empresas
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/empresas#sande"
                  className="hover:text-white transition-colors"
                >
                  Sande S.A. — Herramientas Industriales
                </Link>
              </li>
              <li>
                <Link
                  href="/empresas#fijaciones"
                  className="hover:text-white transition-colors"
                >
                  Tecbolt S.A. — Fijaciones Mamut
                </Link>
              </li>
              <li>
                <Link
                  href="/empresas#sandiman"
                  className="hover:text-white transition-colors"
                >
                  Sandiman S.A. — Automatización
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navegación
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/productos"
                  className="hover:text-white transition-colors"
                >
                  Catálogo de Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/servicios"
                  className="hover:text-white transition-colors"
                >
                  Servicios Especializados
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="hover:text-white transition-colors"
                >
                  Solicitar Cotización
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gray-500" />
                <span>Santiago & Antofagasta, Chile</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gray-500" />
                <span>+56 2 2476 7000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gray-500" />
                <span>contacto@gruposande.cl</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Grupo Sande. Todos los derechos
            reservados.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <span>Sande S.A.</span>
            <span>·</span>
            <span>Tecbolt S.A.</span>
            <span>·</span>
            <span>Sandiman S.A.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
