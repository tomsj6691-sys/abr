"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import {
  getLocaleMeta,
  localizeHref,
  locales,
  stripLocaleFromPathname,
  type Locale,
} from "@/app/_lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname() ?? "/";
  const searchParams = useSearchParams();
  const currentPath = stripLocaleFromPathname(pathname);
  const currentHref = searchParams.toString()
    ? `${currentPath}?${searchParams.toString()}`
    : currentPath;

  return (
    <details className="lang-dropdown">
      <summary className="lang-btn" aria-label={`${label}: ${getLocaleMeta(locale).label}`}>
        <span className="lang-btn-value">{getLocaleMeta(locale).label}</span>
        <span className="lang-btn-icon" aria-hidden="true">
          ⌄
        </span>
      </summary>
      <div className="lang-content">
        {locales.map((targetLocale) => (
          <Link
            key={targetLocale}
            href={localizeHref(targetLocale, currentHref)}
            className={targetLocale === locale ? "lang-option current" : "lang-option"}
            prefetch={false}
          >
            {getLocaleMeta(targetLocale).label}
          </Link>
        ))}
      </div>
    </details>
  );
}
