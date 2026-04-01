import Link from "next/link";
import type { ReactNode } from "react";

import { FooterSubscription } from "@/app/_components/footer-subscription";
import { LanguageSwitcher } from "@/app/_components/language-switcher";
import {
  defaultLocale,
  getMessages,
  getTopUtilityCopy,
  localizeHref,
  type Locale,
} from "@/app/_lib/i18n";
import { institutionAddress } from "@/app/_lib/site-data";

type SiteNavProps = {
  activeHref: string;
  locale: Locale;
};

function isActiveLink(href: string, activeHref: string) {
  if (href === "/") {
    return activeHref === "/";
  }

  return activeHref === href;
}

export function TopUtilityBar({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const topUtilityCopy = getTopUtilityCopy(locale);
  const topUtilityMetrics = [
    topUtilityCopy.globalNodes,
    topUtilityCopy.currentProtocol,
    topUtilityCopy.perceptionData,
  ];

  return (
    <div className="top-utility-bar">
      <div className="site-container top-bar-inner">
        <div className="audit-metadata">
          {topUtilityMetrics.map((item, index) => (
            <div key={item} className={index === 2 ? "audit-live-trace" : undefined}>
              {index === 0 ? <span className="status-dot" aria-hidden="true" /> : null}
              {item}
            </div>
          ))}
        </div>

        <LanguageSwitcher locale={locale} label={messages.languageLabel} />
      </div>
    </div>
  );
}

export function HomeBrandHeader({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <header className="brand-header brand-header-home">
      <div className="site-container">
        <Link href={localizeHref(locale, "/")} className="brand-link brand-link-stacked">
          <h1 className="logo-main serif">AI BrandRank Institute</h1>
          <div className="logo-sub">{messages.brandSubtitle}</div>
        </Link>
      </div>
    </header>
  );
}

export function CompactBrandHeader({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <header className="brand-header brand-header-compact">
      <div className="site-container compact-header-inner">
        <Link href={localizeHref(locale, "/")} className="brand-link serif brand-link-inline">
          AI BrandRank Institute
        </Link>
        <LanguageSwitcher locale={locale} label={messages.languageLabel} />
      </div>
    </header>
  );
}

export function SiteNav({ activeHref, locale }: SiteNavProps) {
  const messages = getMessages(locale);
  const navItems = [
    { href: "/", label: messages.nav.home },
    { href: "/reports", label: messages.nav.reports },
    { href: "/alerts", label: messages.nav.alerts },
    { href: "/methodology", label: messages.nav.methodology },
    { href: "/auditors", label: messages.nav.auditors },
    { href: "/evidence-vault", label: messages.nav.evidenceVault },
  ];

  return (
    <nav className="site-nav">
      <div className="site-container">
        <ul className="nav-inner">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={localizeHref(locale, item.href)}
                className={isActiveLink(item.href, activeHref) ? "nav-link active" : "nav-link"}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

function TranslationNotice({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  if (locale === defaultLocale) {
    return null;
  }

  return (
    <div className="translation-note-wrap">
      <div className="site-container">
        <div className="translation-note">
          <strong>{messages.translationNotice.title}</strong>
          <p>{messages.translationNotice.body}</p>
        </div>
      </div>
    </div>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const footerColumns = [
    {
      title: messages.footer.affairs,
      links: [
        { href: "/about", label: messages.footer.about },
        { href: "/auditors", label: messages.footer.auditors },
        { href: "/methodology", label: messages.footer.methodology },
        { href: "/about#contact", label: messages.footer.contact },
      ],
    },
    {
      title: messages.footer.compliance,
      links: [
        { href: "/policies/privacy", label: messages.footer.privacy },
        { href: "/policies/terms", label: messages.footer.terms },
        { href: "/policies/anti-fraud", label: messages.footer.antiFraud },
        { href: "/policies/integrity", label: messages.footer.integrity },
      ],
    },
  ];

  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="inst-desc">
            <h4 className="serif">AIBRI</h4>
            <p>{messages.footer.institutionDescription}</p>
            <address className="inst-address">
              {institutionAddress.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </address>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title} className="footer-links">
              <h5>{column.title}</h5>
              {column.links.map((link) => (
                <Link key={link.href} href={localizeHref(locale, link.href)}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <FooterSubscription locale={locale} />
        </div>

        <div className="legal-bar">{messages.footer.legal}</div>
      </div>
    </footer>
  );
}

type ShellProps = {
  activeHref: string;
  locale: Locale;
  children: ReactNode;
};

export function HomeShell({ activeHref, locale, children }: ShellProps) {
  return (
    <>
      <TopUtilityBar locale={locale} />
      <HomeBrandHeader locale={locale} />
      <SiteNav activeHref={activeHref} locale={locale} />
      <TranslationNotice locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}

export function InnerShell({ activeHref, locale, children }: ShellProps) {
  return (
    <>
      <CompactBrandHeader locale={locale} />
      <SiteNav activeHref={activeHref} locale={locale} />
      <TranslationNotice locale={locale} />
      {children}
      <SiteFooter locale={locale} />
    </>
  );
}
