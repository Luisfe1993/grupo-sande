"use client";

import { X, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ProductCategory } from "@/data/products";

interface Props {
  items: ProductCategory[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function CompareDrawer({ items, onRemove, onClear }: Props) {
  if (items.length === 0) return null;

  const companyColorMap: Record<string, string> = {
    sande: "border-blue-500",
    fijaciones: "border-red-500",
    sandiman: "border-emerald-500",
  };

  return (
    <>
      {/* Floating bar */}
      {items.length >= 1 && items.length < 2 && (
        <div className="fixed bottom-20 left-1/2 -translate-x-1/2 z-40 bg-gray-900 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-3 text-sm">
          <span>
            {items.length} seleccionado — agregue{" "}
            {2 - items.length} más para comparar
          </span>
          <button
            onClick={onClear}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}

      {/* Comparison panel */}
      {items.length >= 2 && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-blue-600 shadow-2xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-gray-900 text-sm">
                Comparar Categorías ({items.length})
              </h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClear}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Limpiar
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(200px, 1fr))`,
                }}
              >
                {items.slice(0, 4).map((cat) => (
                  <div
                    key={cat.id}
                    className={`border-l-4 ${companyColorMap[cat.companyId] || "border-gray-400"} bg-gray-50 rounded-lg p-3 relative`}
                  >
                    <button
                      onClick={() => onRemove(cat.id)}
                      className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                    <p className="font-semibold text-sm text-gray-900 pr-6 mb-0.5">
                      {cat.name}
                    </p>
                    <p className="text-xs text-gray-500 mb-2">{cat.company}</p>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2 line-clamp-2">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-gray-700">
                        {cat.products.length} productos
                      </span>
                      <Link
                        href={`/productos/${cat.id}`}
                        className="text-xs text-blue-600 hover:underline flex items-center gap-0.5"
                      >
                        Ver <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product lists comparison */}
            <details className="mt-3">
              <summary className="text-xs text-blue-700 cursor-pointer font-medium hover:underline">
                Ver productos incluidos
              </summary>
              <div
                className="grid gap-4 mt-2"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(items.length, 4)}, minmax(200px, 1fr))`,
                }}
              >
                {items.slice(0, 4).map((cat) => (
                  <ul key={cat.id} className="text-xs text-gray-600 space-y-0.5">
                    {cat.products.map((p) => (
                      <li key={p} className="truncate">• {p}</li>
                    ))}
                  </ul>
                ))}
              </div>
            </details>
          </div>
        </div>
      )}
    </>
  );
}
