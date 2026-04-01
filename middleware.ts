import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  defaultLocale,
  hasLocale,
  localeCookieName,
  locales,
  localizeHref,
  type Locale,
} from "@/app/_lib/i18n";

function getLocaleFromAcceptLanguage(headerValue: string | null) {
  if (!headerValue) {
    return defaultLocale;
  }

  const requested = headerValue
    .split(",")
    .map((entry) => entry.trim().split(";")[0])
    .filter(Boolean);

  for (const value of requested) {
    if (hasLocale(value)) {
      return value;
    }

    const languageOnly = value.split("-")[0];
    const matchedLocale = locales.find((locale) =>
      locale.toLowerCase().startsWith(languageOnly.toLowerCase()),
    );

    if (matchedLocale) {
      return matchedLocale;
    }
  }

  return defaultLocale;
}

function resolvePreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(localeCookieName)?.value;

  if (cookieLocale && hasLocale(cookieLocale)) {
    return cookieLocale;
  }

  return getLocaleFromAcceptLanguage(request.headers.get("accept-language"));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathLocale = pathname.split("/").filter(Boolean)[0];

  if (pathLocale && hasLocale(pathLocale)) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-aibri-locale", pathLocale);

    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });

    response.cookies.set(localeCookieName, pathLocale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });

    return response;
  }

  const locale = resolvePreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = localizeHref(locale, pathname);

  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
