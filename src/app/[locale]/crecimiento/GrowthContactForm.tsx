"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/i18n/config";

export default function GrowthContactForm({ locale }: { locale: Locale }) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const isEn = locale === "en";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = new FormData(e.currentTarget);
    const data = {
      name: form.get("name"),
      company: form.get("company"),
      sector: form.get("sector"),
      email: form.get("email"),
      phone: form.get("phone"),
      message: form.get("message"),
      _hp: form.get("_hp"),
      type: "growth",
    };

    try {
      const res = await fetch("/api/crecimiento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(result.error || (isEn ? "Error sending form." : "Error al enviar el formulario."));
      }

      setSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : isEn
          ? "Error sending form."
          : "Error al enviar el formulario."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-xl border border-gray-100 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {isEn ? "Message Received" : "Mensaje Recibido"}
        </h3>
        <p className="text-gray-600">
          {isEn
            ? "Thank you for your interest. A member of the Grupo Sande board will contact you directly within 48 business hours."
            : "Gracias por su interés. Un miembro del directorio de Grupo Sande se pondrá en contacto directamente dentro de 48 horas hábiles."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl border border-gray-100 p-8 space-y-5"
    >
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="growth-name" className="block text-sm font-medium text-gray-700 mb-1">
            {isEn ? "Your Name" : "Su Nombre"} *
          </label>
          <input
            type="text"
            id="growth-name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="growth-company" className="block text-sm font-medium text-gray-700 mb-1">
            {isEn ? "Company Name" : "Nombre de la Empresa"} *
          </label>
          <input
            type="text"
            id="growth-company"
            name="company"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="growth-sector" className="block text-sm font-medium text-gray-700 mb-1">
          {isEn ? "Industry / Sector" : "Industria / Sector"} *
        </label>
        <input
          type="text"
          id="growth-sector"
          name="sector"
          required
          placeholder={isEn ? "e.g. Industrial tools, machinery, fasteners..." : "Ej. Herramientas industriales, maquinaria, fijaciones..."}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="growth-email" className="block text-sm font-medium text-gray-700 mb-1">
            {isEn ? "Email" : "Correo Electrónico"} *
          </label>
          <input
            type="email"
            id="growth-email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="growth-phone" className="block text-sm font-medium text-gray-700 mb-1">
            {isEn ? "Phone" : "Teléfono"} *
          </label>
          <input
            type="tel"
            id="growth-phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="growth-message" className="block text-sm font-medium text-gray-700 mb-1">
          {isEn ? "Tell us about your company (optional)" : "Cuéntenos sobre su empresa (opcional)"}
        </label>
        <textarea
          id="growth-message"
          name="message"
          rows={4}
          placeholder={
            isEn
              ? "Years in business, number of employees, what motivates you to explore this option..."
              : "Años de trayectoria, número de empleados, qué lo motiva a explorar esta opción..."
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 disabled:opacity-50 transition-colors"
      >
        {loading ? (
          <span>{isEn ? "Sending..." : "Enviando..."}</span>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {isEn ? "Send Confidential Inquiry" : "Enviar Consulta Confidencial"}
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        {isEn
          ? "This form is encrypted and treated with absolute confidentiality. Only the Grupo Sande board has access."
          : "Este formulario es encriptado y tratado con absoluta confidencialidad. Solo el directorio de Grupo Sande tiene acceso."}
      </p>
    </form>
  );
}
