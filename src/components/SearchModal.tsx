"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight, CornerDownLeft, FileText, Building, Wrench } from "lucide-react";
import { productCategories } from "@/data/products";
import { companies } from "@/data/companies";

const pages = [
  { title: "Inicio", href: "/", section: "Páginas" },
  { title: "Empresas", href: "/empresas", section: "Páginas" },
  { title: "Productos", href: "/productos", section: "Páginas" },
  { title: "Servicios", href: "/servicios", section: "Páginas" },
  { title: "Proyectos", href: "/proyectos", section: "Páginas" },
  { title: "Noticias", href: "/noticias", section: "Páginas" },
  { title: "Blog Técnico", href: "/blog", section: "Páginas" },
  { title: "Contacto", href: "/contacto", section: "Páginas" },
  { title: "Cotizar", href: "/cotizar", section: "Páginas" },
  { title: "Minería", href: "/mineria", section: "Industrias" },
  { title: "Construcción", href: "/construccion", section: "Industrias" },
  { title: "Manufactura", href: "/manufactura", section: "Industrias" },
  { title: "Puertos", href: "/puertos", section: "Industrias" },
  { title: "Obras Viales", href: "/obras-viales", section: "Industrias" },
  { title: "Celulosas", href: "/celulosas", section: "Industrias" },
];

interface SearchResult {
  title: string;
  subtitle?: string;
  href: string;
  section: string;
  icon: "page" | "company" | "product";
}

export default function SearchModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const results: SearchResult[] = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const matchedPages: SearchResult[] = pages
      .filter((p) => p.title.toLowerCase().includes(q))
      .map((p) => ({ ...p, icon: "page" as const }));

    const matchedCompanies: SearchResult[] = companies
      .filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.tradeName.toLowerCase().includes(q) ||
          c.description.toLowerCase().includes(q)
      )
      .map((c) => ({
        title: c.name,
        subtitle: c.description.slice(0, 80) + "…",
        href: `/empresas#${c.id}`,
        section: "Empresas",
        icon: "company" as const,
      }));

    const matchedProducts: SearchResult[] = productCategories
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.products.some((prod) => prod.toLowerCase().includes(q))
      )
      .map((p) => ({
        title: p.name,
        subtitle: `${p.company} — ${p.products.length} productos`,
        href: `/productos/${p.id}`,
        section: "Productos",
        icon: "product" as const,
      }));

    return [...matchedPages, ...matchedCompanies, ...matchedProducts].slice(
      0,
      12
    );
  }, [query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [results]);

  useEffect(() => {
    if (open) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  const navigate = useCallback(
    (href: string) => {
      onClose();
      router.push(href);
    },
    [onClose, router]
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (open) onClose();
        else {
          // Parent handles opening
        }
      }
      if (!open) return;
      if (e.key === "Escape") {
        onClose();
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => Math.max(prev - 1, 0));
      }
      if (e.key === "Enter" && results[activeIndex]) {
        e.preventDefault();
        navigate(results[activeIndex].href);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, results, activeIndex, navigate, onClose]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const active = listRef.current.children[activeIndex] as HTMLElement;
    active?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  if (!open) return null;

  const IconMap = { page: FileText, company: Building, product: Wrench };

  return (
    <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-xl mx-4 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
        {/* Input */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-gray-100">
          <Search className="h-5 w-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar productos, empresas, páginas…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-base outline-none placeholder:text-gray-400"
          />
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-xs text-gray-400 bg-gray-100 rounded border border-gray-200">
            ESC
          </kbd>
          <button onClick={onClose} className="sm:hidden text-gray-400">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results */}
        {query.trim() && (
          <div
            ref={listRef}
            className="max-h-80 overflow-y-auto py-2"
          >
            {results.length === 0 ? (
              <p className="text-center text-gray-500 py-8 text-sm">
                No se encontraron resultados para &quot;{query}&quot;
              </p>
            ) : (
              results.map((result, i) => {
                const Icon = IconMap[result.icon];
                return (
                  <button
                    key={`${result.href}-${i}`}
                    onClick={() => navigate(result.href)}
                    onMouseEnter={() => setActiveIndex(i)}
                    className={`w-full flex items-center gap-3 px-5 py-3 text-left transition-colors ${
                      i === activeIndex ? "bg-blue-50" : "hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        i === activeIndex ? "text-blue-600" : "text-gray-400"
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <p
                        className={`text-sm font-medium truncate ${
                          i === activeIndex ? "text-blue-700" : "text-gray-900"
                        }`}
                      >
                        {result.title}
                      </p>
                      {result.subtitle && (
                        <p className="text-xs text-gray-500 truncate">
                          {result.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="text-xs text-gray-400 shrink-0">
                      {result.section}
                    </span>
                    {i === activeIndex && (
                      <CornerDownLeft className="h-3.5 w-3.5 text-blue-400 shrink-0" />
                    )}
                  </button>
                );
              })
            )}
          </div>
        )}

        {/* Footer hints */}
        {!query.trim() && (
          <div className="px-5 py-6 text-center">
            <p className="text-sm text-gray-500 mb-3">
              Escriba para buscar productos, empresas o páginas
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border border-gray-200">↑↓</kbd>
                Navegar
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border border-gray-200">↵</kbd>
                Abrir
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-gray-100 rounded border border-gray-200">Esc</kbd>
                Cerrar
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
