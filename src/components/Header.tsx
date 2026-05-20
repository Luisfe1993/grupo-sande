"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Search,
  Globe,
  ChevronDown,
  Building,
  Package,
  Wrench,
  HardHat,
  Factory,
  Anchor,
  Newspaper,
  BookOpen,
  FolderOpen,
  Briefcase,
  UserPlus,
} from "lucide-react";
import SearchModal from "./SearchModal";
import { getDictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string; icon: React.ElementType; desc?: string }[];
}

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

function getNavItems(locale: Locale): NavItem[] {
  const t = getDictionary(locale);
  const isEn = locale === "en";
  return [
    { label: t.nav.home, href: "/" },
    {
      label: isEn ? "About Us" : "Nosotros",
      children: [
        { label: isEn ? "Companies" : "Empresas", href: "/empresas", icon: Building, desc: isEn ? "Our four companies" : "Nuestras cuatro empresas" },
        { label: isEn ? "Projects" : "Proyectos", href: "/proyectos", icon: FolderOpen, desc: isEn ? "Success stories" : "Casos de éxito" },
        { label: isEn ? "Careers" : "Trabaja con Nosotros", href: "/trabaja-con-nosotros", icon: Briefcase, desc: isEn ? "Join our team" : "Únete a nuestro equipo" },
        { label: isEn ? "Join the Group" : "Únase al Grupo", href: "/crecimiento", icon: UserPlus, desc: isEn ? "Growth & partnerships" : "Crecimiento y alianzas" },
      ],
    },
    {
      label: isEn ? "Solutions" : "Soluciones",
      children: [
        { label: isEn ? "Products" : "Productos", href: "/productos", icon: Package, desc: isEn ? "5,000+ industrial products" : "5.000+ productos industriales" },
        { label: isEn ? "Services" : "Servicios", href: "/servicios", icon: Wrench, desc: isEn ? "Engineering & advisory" : "Ingeniería y asesoría" },
      ],
    },
    {
      label: isEn ? "Industries" : "Industrias",
      children: [
        { label: isEn ? "Mining" : "Minería", href: "/mineria", icon: HardHat },
        { label: isEn ? "Construction" : "Construcción", href: "/construccion", icon: Building },
        { label: isEn ? "Manufacturing" : "Manufactura", href: "/manufactura", icon: Factory },
        { label: isEn ? "Ports" : "Puertos", href: "/puertos", icon: Anchor },
        { label: isEn ? "Road Works" : "Obras Viales", href: "/obras-viales", icon: Globe },
        { label: isEn ? "Pulp & Paper" : "Celulosas", href: "/celulosas", icon: Factory },
      ],
    },
    {
      label: isEn ? "Resources" : "Información",
      children: [
        { label: isEn ? "News" : "Noticias", href: "/noticias", icon: Newspaper, desc: isEn ? "Latest updates" : "Últimas novedades" },
        { label: "Blog", href: "/blog", icon: BookOpen, desc: isEn ? "Technical articles" : "Artículos técnicos" },
      ],
    },
    { label: t.nav.contact, href: "/contacto" },
  ];
}

function DropdownMenu({
  item,
  locale,
  cleanPath,
}: {
  item: NavItem;
  locale: Locale;
  cleanPath: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const isChildActive = item.children?.some((c) => cleanPath.startsWith(c.href)) ?? false;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }
  function handleLeave() {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
          isChildActive
            ? "text-blue-700 bg-blue-50"
            : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
        }`}
      >
        {item.label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
          {item.children!.map((child) => {
            const href = localePath(child.href, locale);
            const isActive = cleanPath.startsWith(child.href);
            return (
              <Link
                key={child.href}
                href={href}
                className={`flex items-start gap-3 px-4 py-2.5 text-sm transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                }`}
                onClick={() => setOpen(false)}
              >
                <child.icon className="h-4 w-4 mt-0.5 shrink-0 text-gray-400" />
                <div>
                  <div className="font-medium">{child.label}</div>
                  {child.desc && (
                    <div className="text-xs text-gray-400 mt-0.5">{child.desc}</div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function Header({ locale = "es" as Locale }: { locale?: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();
  const t = getDictionary(locale);
  const cleanPath = stripLocale(pathname);
  const navItems = getNavItems(locale);

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

          {/* Desktop Nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-0.5">
            {navItems.map((item) => {
              if (item.children) {
                return (
                  <DropdownMenu
                    key={item.label}
                    item={item}
                    locale={locale}
                    cleanPath={cleanPath}
                  />
                );
              }
              const href = localePath(item.href!, locale);
              const isActive =
                item.href === "/"
                  ? cleanPath === "/"
                  : cleanPath.startsWith(item.href!);
              return (
                <Link
                  key={item.label}
                  href={href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-blue-700 bg-blue-50"
                      : "text-gray-700 hover:text-blue-700 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
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

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-1">
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-2 pt-4">
            {navItems.map((item) => {
              if (item.children) {
                const isExpanded = mobileExpanded === item.label;
                const isChildActive = item.children.some((c) =>
                  cleanPath.startsWith(c.href)
                );
                return (
                  <div key={item.label}>
                    <button
                      onClick={() =>
                        setMobileExpanded(isExpanded ? null : item.label)
                      }
                      className={`w-full flex items-center justify-between px-4 py-3 text-base font-medium rounded-lg ${
                        isChildActive
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700 hover:bg-blue-50"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isExpanded && (
                      <div className="ml-4 mb-2 space-y-1">
                        {item.children.map((child) => {
                          const href = localePath(child.href, locale);
                          const isActive = cleanPath.startsWith(child.href);
                          return (
                            <Link
                              key={child.href}
                              href={href}
                              className={`flex items-center gap-3 px-4 py-2.5 text-sm rounded-lg ${
                                isActive
                                  ? "bg-blue-50 text-blue-700"
                                  : "text-gray-600 hover:bg-gray-50 hover:text-blue-700"
                              }`}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <child.icon className="h-4 w-4 text-gray-400" />
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }
              const href = localePath(item.href!, locale);
              const isActive =
                item.href === "/"
                  ? cleanPath === "/"
                  : cleanPath.startsWith(item.href!);
              return (
                <Link
                  key={item.label}
                  href={href}
                  className={`block px-4 py-3 text-base font-medium rounded-lg ${
                    isActive
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
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
