"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Filter,
  ChevronRight,
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
  Package,
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

const companyColors: Record<string, { bg: string; text: string; badge: string }> = {
  sande: { bg: "bg-blue-50", text: "text-blue-700", badge: "bg-blue-100 text-blue-800" },
  fijaciones: { bg: "bg-red-50", text: "text-red-700", badge: "bg-red-100 text-red-800" },
  sandiman: { bg: "bg-emerald-50", text: "text-emerald-700", badge: "bg-emerald-100 text-emerald-800" },
};

const filters = [
  { id: "all", label: "Todos" },
  { id: "sande", label: "Sande" },
  { id: "fijaciones", label: "Fijaciones Mamut" },
  { id: "sandiman", label: "Sandiman" },
];

export default function ProductosCatalog() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = productCategories.filter((cat) => {
    const matchesFilter =
      activeFilter === "all" || cat.companyId === activeFilter;
    const matchesSearch =
      searchQuery === "" ||
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.products.some((p) =>
        p.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      {/* Filters & Search */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Company Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="h-4 w-4 text-gray-400" />
              {filters.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActiveFilter(f.id)}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeFilter === f.id
                      ? "bg-gray-900 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-gray-500 mb-8">
            Mostrando {filteredProducts.length} categorías de productos
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((cat) => {
              const Icon = iconMap[cat.icon] || Package;
              const colors = companyColors[cat.companyId];

              return (
                <div
                  key={cat.id}
                  className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${colors.bg}`}
                    >
                      <Icon className={`h-6 w-6 ${colors.text}`} />
                    </div>
                    <span
                      className={`text-xs font-medium px-2.5 py-1 rounded-full ${colors.badge}`}
                    >
                      {cat.company}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Sample products */}
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2">
                      Productos destacados
                    </p>
                    <ul className="space-y-1.5">
                      {cat.products.slice(0, 4).map((product) => (
                        <li
                          key={product}
                          className="text-sm text-gray-600 flex items-center gap-2"
                        >
                          <ChevronRight className="h-3 w-3 text-gray-400 shrink-0" />
                          {product}
                        </li>
                      ))}
                      {cat.products.length > 4 && (
                        <li className="text-sm text-gray-400 italic pl-5">
                          +{cat.products.length - 4} más
                        </li>
                      )}
                    </ul>
                  </div>

                  <Link
                    href="/contacto"
                    className={`inline-flex items-center gap-1 text-sm font-semibold mt-4 ${colors.text} hover:underline`}
                  >
                    Solicitar cotización
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <Package className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No se encontraron productos
              </h3>
              <p className="text-gray-500">
                Intente con otro término de búsqueda o filtro.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-3">
            ¿No encuentra lo que busca?
          </h2>
          <p className="text-blue-100 mb-6">
            Contáctenos y le ayudaremos a encontrar la solución exacta para su
            necesidad.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Contactar un Asesor
          </Link>
        </div>
      </section>
    </>
  );
}
