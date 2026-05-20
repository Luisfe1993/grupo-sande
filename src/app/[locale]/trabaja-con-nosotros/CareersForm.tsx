"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { trackEvent, EVENTS } from "@/lib/analytics";

interface Position {
  id: string;
  title: string;
  company: string;
}

export default function CareersForm({
  locale,
  positions,
}: {
  locale: Locale;
  positions: Position[];
}) {
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
      email: form.get("email"),
      phone: form.get("phone"),
      position: form.get("position"),
      linkedin: form.get("linkedin"),
      message: form.get("message"),
      _hp: form.get("_hp"),
    };

    try {
      const res = await fetch("/api/postulacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const result = await res.json();
        throw new Error(
          result.error ||
            (isEn ? "Error sending application." : "Error al enviar la postulación.")
        );
      }

      setSubmitted(true);
      trackEvent(EVENTS.CAREER_FORM_SUBMIT, { position: String(data.position || "spontaneous") });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : isEn
          ? "Error sending application."
          : "Error al enviar la postulación."
      );
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-gray-50 rounded-xl border border-gray-100 p-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {isEn ? "Application Received!" : "¡Postulación Recibida!"}
        </h3>
        <p className="text-gray-600">
          {isEn
            ? "Thank you for your interest. Our team will review your application and contact you if there's a fit."
            : "Gracias por su interés. Nuestro equipo revisará su postulación y lo contactará si hay encaje."}
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 rounded-xl border border-gray-100 p-8 space-y-5"
    >
      {/* Honeypot */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <input type="text" name="_hp" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="career-name" className="block text-sm font-medium text-gray-700 mb-1">
            {isEn ? "Full Name" : "Nombre Completo"} *
          </label>
          <input
            type="text"
            id="career-name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
          />
        </div>
        <div>
          <label htmlFor="career-email" className="block text-sm font-medium text-gray-700 mb-1">
            {isEn ? "Email" : "Correo Electrónico"} *
          </label>
          <input
            type="email"
            id="career-email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="career-phone" className="block text-sm font-medium text-gray-700 mb-1">
            {isEn ? "Phone" : "Teléfono"} *
          </label>
          <input
            type="tel"
            id="career-phone"
            name="phone"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
          />
        </div>
        <div>
          <label htmlFor="career-position" className="block text-sm font-medium text-gray-700 mb-1">
            {isEn ? "Position of Interest" : "Posición de Interés"}
          </label>
          <select
            id="career-position"
            name="position"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
          >
            <option value="">
              {isEn ? "Spontaneous application" : "Postulación espontánea"}
            </option>
            {positions.map((p) => (
              <option key={p.id} value={p.title}>
                {p.title} — {p.company}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="career-linkedin" className="block text-sm font-medium text-gray-700 mb-1">
          {isEn ? "LinkedIn Profile or Portfolio URL" : "Perfil LinkedIn o URL de Portafolio"}
        </label>
        <input
          type="url"
          id="career-linkedin"
          name="linkedin"
          placeholder="https://linkedin.com/in/..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
        />
      </div>

      <div>
        <label htmlFor="career-message" className="block text-sm font-medium text-gray-700 mb-1">
          {isEn ? "Brief cover message" : "Breve mensaje de presentación"}
        </label>
        <textarea
          id="career-message"
          name="message"
          rows={4}
          placeholder={
            isEn
              ? "Tell us about your experience and why you'd like to join Grupo Sande..."
              : "Cuéntenos sobre su experiencia y por qué le gustaría unirse a Grupo Sande..."
          }
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
        />
      </div>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-lg">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 disabled:opacity-50 transition-colors"
      >
        {loading ? (
          <span>{isEn ? "Sending..." : "Enviando..."}</span>
        ) : (
          <>
            <Send className="h-4 w-4" />
            {isEn ? "Send Application" : "Enviar Postulación"}
          </>
        )}
      </button>
    </form>
  );
}
