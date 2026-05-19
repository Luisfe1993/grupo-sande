"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Unhandled error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="flex items-center justify-center gap-1 mb-6">
          <div className="w-2 h-8 bg-blue-700 rounded-sm" />
          <div className="w-2 h-8 bg-red-700 rounded-sm" />
          <div className="w-2 h-8 bg-emerald-700 rounded-sm" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Algo salió mal
        </h1>
        <p className="text-gray-500 mb-8">
          Ocurrió un error inesperado. Por favor intente nuevamente o vuelva al
          inicio.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
          >
            <RefreshCw className="h-4 w-4" />
            Reintentar
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Home className="h-4 w-4" />
            Ir al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
