"use client";

import { useState, useMemo, useRef } from "react";
import {
  Search,
  X,
  Plus,
  Minus,
  ShoppingCart,
  CheckCircle,
  Loader2,
  AlertCircle,
  Trash2,
  ChevronDown,
  ChevronUp,
  Download,
} from "lucide-react";
import { productCategories } from "@/data/products";
import { trackEvent, EVENTS } from "@/lib/analytics";

interface QuoteItem {
  categoryId: string;
  categoryName: string;
  productName: string;
  quantity: string;
  notes: string;
}

const companyColors: Record<string, string> = {
  sande: "bg-blue-100 text-blue-800",
  fijaciones: "bg-red-100 text-red-800",
  sandiman: "bg-emerald-100 text-emerald-800",
};

export default function CotizadorForm() {
  const [search, setSearch] = useState("");
  const [expandedCat, setExpandedCat] = useState<string | null>(null);
  const [items, setItems] = useState<QuoteItem[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [contactInfo, setContactInfo] = useState({ name: "", company: "", email: "", phone: "" });

  const filtered = useMemo(() => {
    if (!search.trim()) return productCategories;
    const q = search.toLowerCase();
    return productCategories.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.products.some((p) => p.toLowerCase().includes(q))
    );
  }, [search]);

  function addProduct(categoryId: string, categoryName: string, productName: string) {
    if (items.some((i) => i.categoryId === categoryId && i.productName === productName)) return;
    setItems((prev) => [
      ...prev,
      { categoryId, categoryName, productName, quantity: "1", notes: "" },
    ]);
  }

  function removeProduct(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  function updateItem(index: number, field: "quantity" | "notes", value: string) {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (items.length === 0) {
      setError("Seleccione al menos un producto.");
      return;
    }

    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      company: form.get("company"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
      _hp: form.get("_hp"),
      items: items.map((i) => ({
        category: i.categoryName,
        name: i.productName,
        quantity: i.quantity,
        notes: i.notes,
      })),
    };

    try {
      const res = await fetch("/api/cotizar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || "Error al enviar la cotización.");
      }
      setSubmitted(true);
      trackEvent(EVENTS.QUOTE_FORM_SUBMIT, { productCount: items.length });
      setContactInfo({
        name: String(data.name || ""),
        company: String(data.company || ""),
        email: String(data.email || ""),
        phone: String(data.phone || ""),
      });
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Error al enviar la cotización."
      );
    } finally {
      setLoading(false);
    }
  }

  function downloadPdf() {
    trackEvent(EVENTS.QUOTE_PDF_DOWNLOAD, { productCount: items.length });
    const today = new Date().toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" });
    const rows = items
      .map(
        (i, idx) =>
          `<tr>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb">${idx + 1}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb">${i.productName}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb">${i.categoryName}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb;text-align:center">${i.quantity}</td>
            <td style="padding:8px;border-bottom:1px solid #e5e7eb">${i.notes || "—"}</td>
          </tr>`
      )
      .join("");

    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Cotización Grupo Sande</title>
<style>body{font-family:Arial,sans-serif;margin:40px;color:#1f2937}
table{width:100%;border-collapse:collapse;margin:20px 0}
th{background:#1e3a5f;color:white;padding:10px 8px;text-align:left}
.header{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:30px}
.logo{font-size:24px;font-weight:bold;color:#1e3a5f}
.info{font-size:13px;color:#6b7280}
.footer{margin-top:40px;padding-top:20px;border-top:2px solid #1e3a5f;font-size:12px;color:#6b7280;text-align:center}
@media print{body{margin:20px}}</style></head>
<body>
<div class="header">
  <div>
    <div class="logo">GRUPO SANDE</div>
    <div class="info">Soluciones Industriales para Chile</div>
    <div class="info">+56 2 2476 7000 · contacto@gruposande.cl</div>
  </div>
  <div style="text-align:right">
    <div style="font-size:20px;font-weight:bold;color:#1e3a5f">SOLICITUD DE COTIZACIÓN</div>
    <div class="info">Fecha: ${today}</div>
  </div>
</div>

<div style="background:#f3f4f6;padding:16px;border-radius:8px;margin-bottom:20px">
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:14px">
    <div><strong>Nombre:</strong> ${contactInfo.name}</div>
    <div><strong>Empresa:</strong> ${contactInfo.company}</div>
    <div><strong>Email:</strong> ${contactInfo.email}</div>
    <div><strong>Teléfono:</strong> ${contactInfo.phone}</div>
  </div>
</div>

<table>
  <thead>
    <tr>
      <th style="width:40px">#</th>
      <th>Producto</th>
      <th>Categoría</th>
      <th style="width:80px;text-align:center">Cant.</th>
      <th>Notas</th>
    </tr>
  </thead>
  <tbody>${rows}</tbody>
</table>

<p style="font-size:13px;color:#6b7280;margin-top:20px">
  * Los precios serán confirmados por nuestro equipo comercial.<br>
  * Nuestro equipo le responderá en un plazo máximo de 24 horas hábiles.
</p>

<div class="footer">
  <p>Grupo Sande · Santiago & Antofagasta, Chile · gruposande.cl</p>
  <p>Sande S.A. · Tecbolt S.A. · Sandiman S.A.</p>
</div>
</body></html>`;

    const printWindow = window.open("", "_blank");
    if (printWindow) {
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => printWindow.print(), 300);
    }
  }

  if (submitted) {
    return (
      <section className="py-20">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <CheckCircle className="h-16 w-16 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            ¡Cotización Enviada!
          </h2>
          <p className="text-gray-600 mb-2">
            Hemos recibido su solicitud con {items.length} producto(s).
          </p>
          <p className="text-gray-500 text-sm mb-6">
            Nuestro equipo le responderá a{" "}
            <span className="font-medium">la brevedad</span> con una
            cotización personalizada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={downloadPdf}
              className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-colors"
            >
              <Download className="h-4 w-4" />
              Descargar PDF de Cotización
            </button>
            <button
              onClick={() => {
                setSubmitted(false);
                setItems([]);
              }}
              className="text-blue-700 font-medium hover:underline"
            >
              Crear otra cotización
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left: Product Selector */}
          <div className="lg:col-span-3">
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              1. Seleccione Productos
            </h2>

            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar productos o categorías..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Categories */}
            <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
              {filtered.map((cat) => {
                const isExpanded = expandedCat === cat.id;
                const selectedInCat = items.filter(
                  (i) => i.categoryId === cat.id
                ).length;

                return (
                  <div
                    key={cat.id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedCat(isExpanded ? null : cat.id)
                      }
                      className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className="font-medium text-gray-900 text-sm truncate">
                          {cat.name}
                        </span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                            companyColors[cat.companyId] || "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {cat.company}
                        </span>
                        {selectedInCat > 0 && (
                          <span className="text-xs bg-blue-600 text-white px-1.5 py-0.5 rounded-full shrink-0">
                            {selectedInCat}
                          </span>
                        )}
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4 text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 text-gray-400 shrink-0" />
                      )}
                    </button>

                    {isExpanded && (
                      <div className="border-t border-gray-100 px-4 py-2 space-y-1 bg-gray-50">
                        {cat.products.map((product) => {
                          const isAdded = items.some(
                            (i) =>
                              i.categoryId === cat.id &&
                              i.productName === product
                          );
                          return (
                            <div
                              key={product}
                              className="flex items-center justify-between py-1.5"
                            >
                              <span className="text-sm text-gray-700">
                                {product}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  isAdded
                                    ? removeProduct(
                                        items.findIndex(
                                          (i) =>
                                            i.categoryId === cat.id &&
                                            i.productName === product
                                        )
                                      )
                                    : addProduct(cat.id, cat.name, product)
                                }
                                className={`text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${
                                  isAdded
                                    ? "bg-red-50 text-red-600 hover:bg-red-100"
                                    : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                                }`}
                              >
                                {isAdded ? (
                                  <span className="flex items-center gap-1">
                                    <Minus className="h-3 w-3" /> Quitar
                                  </span>
                                ) : (
                                  <span className="flex items-center gap-1">
                                    <Plus className="h-3 w-3" /> Agregar
                                  </span>
                                )}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              {filtered.length === 0 && (
                <p className="text-center text-gray-500 py-8 text-sm">
                  No se encontraron productos.
                </p>
              )}
            </div>
          </div>

          {/* Right: Cart + Contact */}
          <div className="lg:col-span-2">
            {/* Cart Summary */}
            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5 mb-6">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingCart className="h-5 w-5 text-blue-700" />
                <h2 className="text-lg font-bold text-gray-900">
                  Productos Seleccionados ({items.length})
                </h2>
              </div>

              {items.length === 0 ? (
                <p className="text-sm text-gray-500 py-4 text-center">
                  Seleccione productos del catálogo de la izquierda.
                </p>
              ) : (
                <div className="space-y-3 max-h-[300px] overflow-y-auto">
                  {items.map((item, idx) => (
                    <div
                      key={`${item.categoryId}-${item.productName}`}
                      className="bg-white rounded-lg p-3 border border-gray-100"
                    >
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">
                            {item.productName}
                          </p>
                          <p className="text-xs text-gray-500">
                            {item.categoryName}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeProduct(idx)}
                          className="text-gray-400 hover:text-red-500 shrink-0"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          inputMode="numeric"
                          placeholder="Cant."
                          value={item.quantity}
                          onChange={(e) =>
                            updateItem(idx, "quantity", e.target.value)
                          }
                          className="w-20 px-2 py-1.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          placeholder="Notas (opcional)"
                          value={item.notes}
                          onChange={(e) =>
                            updateItem(idx, "notes", e.target.value)
                          }
                          className="flex-1 px-2 py-1.5 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Contact Form */}
            <h2 className="text-lg font-bold text-gray-900 mb-4">
              2. Sus Datos de Contacto
            </h2>

            {/* Honeypot */}
            <div aria-hidden="true" className="absolute -left-[9999px]">
              <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Juan Pérez"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Empresa *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Minera XYZ"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cot-email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="cot-email"
                    name="email"
                    required
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="juan@empresa.cl"
                  />
                </div>
                <div>
                  <label htmlFor="cot-phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="cot-phone"
                    name="phone"
                    required
                    inputMode="tel"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+56 9 1234 5678"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="cot-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje Adicional
                </label>
                <textarea
                  id="cot-message"
                  name="message"
                  rows={3}
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  placeholder="Detalles adicionales, plazos de entrega, etc."
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 rounded-lg px-4 py-3">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading || items.length === 0}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    Enviar Cotización ({items.length} producto
                    {items.length !== 1 ? "s" : ""})
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
