import Link from "next/link";
import { headers } from "next/headers";

import { InnerShell } from "@/app/_components/site-shell";
import { defaultLocale, getMessages, hasLocale, localizeHref } from "@/app/_lib/i18n";

export default async function NotFound() {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-aibri-locale");
  const locale = headerLocale && hasLocale(headerLocale) ? headerLocale : defaultLocale;
  const messages = getMessages(locale);

  return (
    <InnerShell activeHref="" locale={locale}>
      <div className="site-container not-found-shell">
        <div className="not-found-card">
          <p className="section-label">{messages.notFound.label}</p>
          <h1 className="article-title serif">{messages.notFound.title}</h1>
          <p className="feed-excerpt">{messages.notFound.body}</p>
          <div className="not-found-actions">
            <Link href={localizeHref(locale, "/")} className="vault-btn">
              {messages.notFound.homeAction}
            </Link>
            <Link href={localizeHref(locale, "/reports")} className="share-btn">
              {messages.notFound.reportsAction}
            </Link>
          </div>
        </div>
      </div>
    </InnerShell>
  );
}
