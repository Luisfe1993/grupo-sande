import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center gap-1 mb-6">
          <div className="w-2 h-8 bg-blue-700 rounded-sm" />
          <div className="w-2 h-8 bg-red-700 rounded-sm" />
          <div className="w-2 h-8 bg-emerald-700 rounded-sm" />
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-xl font-semibold text-gray-700 mb-3">
          Página no encontrada
        </h2>
        <p className="text-gray-500 mb-8">
          La página que busca no existe o fue movida. Verifique la URL o
          navegue a otra sección.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            <Home className="h-4 w-4" />
            Ir al Inicio
          </Link>
          <Link
            href="/productos"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Search className="h-4 w-4" />
            Ver Productos
          </Link>
        </div>
      </div>
    </div>
  );
}
