"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent({ locale }: { locale: string }) {
  const [visible, setVisible] = useState(false);
  const isEn = locale === "en";

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl bg-gray-900 text-white rounded-xl shadow-2xl p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm leading-relaxed flex-1">
          {isEn
            ? "We use Vercel Analytics to improve your experience. No personal data is collected through cookies. "
            : "Utilizamos Vercel Analytics para mejorar su experiencia. No se recopilan datos personales mediante cookies. "}
          <Link
            href={locale === "en" ? "/en/privacidad" : "/privacidad"}
            className="underline text-blue-300 hover:text-blue-200"
          >
            {isEn ? "Privacy Policy" : "Política de Privacidad"}
          </Link>
        </p>
        <button
          onClick={accept}
          className="shrink-0 px-5 py-2 bg-white text-gray-900 text-sm font-semibold rounded-lg hover:bg-gray-100 transition-colors"
        >
          {isEn ? "Got it" : "Entendido"}
        </button>
      </div>
    </div>
  );
}
