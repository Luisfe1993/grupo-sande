"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Search, Globe } from "lucide-react";
import SearchModal from "./SearchModal";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

const navKeys = [
  { key: "home" as const, href: "/" },
  { key: "companies" as const, href: "/empresas" },
  { key: "products" as const, href: "/productos" },
  { key: "services" as const, href: "/servicios" },
  { key: "projects" as const, href: "/proyectos" },
  { key: "news" as const, href: "/noticias" },
  { key: "contact" as const, href: "/contacto" },
];

function localePath(path: string, locale: Locale) {
  return locale === "en" ? `/en${path}` : path;
}

function stripLocale(pathname: string) {
  if (pathname.startsWith("/en/")) return pathname.slice(3);
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/es/")) return pathname.slice(3);
  if (pathname === "/es") return "/";
  return pathname;
}

export default function Header({ locale = "es" as Locale }: { locale?: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const t = getDictionary(locale);
  const cleanPath = stripLocale(pathname);

  const switchLocale = locale === "en" ? "es" : "en";
  const switchHref =
    switchLocale === "en" ? `/en${cleanPath}` : cleanPath || "/";

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href={localePath("/", locale)}
            className="flex items-center gap-3"
          >
            <div className="flex items-center gap-1">
              <div className="w-2 h-8 bg-blue-700 rounded-sm" />
              <div className="w-2 h-8 bg-red-700 rounded-sm" />
              <div className="w-2 h-8 bg-emerald-700 rounded-sm" />
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Grupo Sande
              </span>
              <span className="hidden sm:block text-[10px] text-gray-500 -mt-1 tracking-wider uppercase">
                {locale === "en"
                  ? "Industrial Solutions"
                  : "Soluciones Industriales"}
              </span>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-1">
            {navKeys.map((item) => {
              const href = localePath(item.href, locale);
              const isActive =
                item.href === "/"
                  ? cleanPath === "/"
                  : cleanPath.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}

            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-gray-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
              aria-label={t.nav.search}
              title={`${t.nav.search} (Ctrl+K)`}
            >
              <Search className="h-4 w-4" />
            </button>

            <Link
              href={switchHref}
              className="p-2 text-gray-500 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-1"
              title={switchLocale === "en" ? "English" : "Español"}
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium uppercase">
                {switchLocale}
              </span>
            </Link>

            <Link
              href={localePath("/cotizar", locale)}
              className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition-colors"
            >
              {t.nav.quoteNow}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <Link
              href={switchHref}
              className="p-2 text-gray-500 text-xs font-semibold uppercase"
            >
              {switchLocale}
            </Link>
            <button
              type="button"
              className="p-3 text-gray-500"
              onClick={() => {
                setSearchOpen(true);
                setMobileMenuOpen(false);
              }}
              aria-label={t.nav.search}
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="p-3 -mr-1 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            {navKeys.map((item) => {
              const href = localePath(item.href, locale);
              const isActive =
                item.href === "/"
                  ? cleanPath === "/"
                  : cleanPath.startsWith(item.href);
              return (
                <Link
                  key={item.key}
                  href={href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
            <Link
              href={localePath("/cotizar", locale)}
              className="block mt-2 mx-4 px-4 py-3 text-center font-semibold text-white bg-blue-700 rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.quoteNow}
            </Link>
          </div>
        )}
      </nav>

      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
