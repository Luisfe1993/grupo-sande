import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, static files, Next.js internals
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/images/") ||
    pathname.startsWith("/logos/") ||
    pathname.includes(".") // static files like .svg, .png
  ) {
    return NextResponse.next();
  }

  // Check if path already has a locale
  const hasLocale = locales.some(
    (l) => pathname.startsWith(`/${l}/`) || pathname === `/${l}`
  );

  if (hasLocale) {
    return NextResponse.next();
  }

  // Rewrite paths without locale to default locale (no redirect, clean URL)
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|api|images|logos|favicon\\.ico|icon\\.svg|apple-icon\\.svg|sitemap\\.xml|robots\\.txt).*)"],
};
