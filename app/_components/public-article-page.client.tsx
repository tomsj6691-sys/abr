"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ArticlePageView, LoadingPageView } from "@/app/_components/page-templates";
import { InnerShell } from "@/app/_components/site-shell";
import { loadPublicArticlePageClient, type CollectionKey } from "@/app/_lib/public-articles.client";
import { getMessages, localizeHref, type Locale } from "@/app/_lib/i18n";

export function PublicArticlePageClient({
  locale,
  collectionKey,
  slug,
}: {
  locale: Locale;
  collectionKey: CollectionKey;
  slug: string;
}) {
  const [page, setPage] = useState<
    Awaited<ReturnType<typeof loadPublicArticlePageClient>> | null | undefined
  >(undefined);

  useEffect(() => {
    let isMounted = true;

    void loadPublicArticlePageClient(collectionKey, slug, locale).then((nextPage) => {
      if (!isMounted) {
        return;
      }

      setPage(nextPage);
    });

    return () => {
      isMounted = false;
    };
  }, [collectionKey, locale, slug]);

  const activeHref = collectionKey === "reports" ? "/reports" : "/alerts";

  if (page === undefined) {
    return <LoadingPageView activeHref={activeHref} locale={locale} />;
  }

  if (page === null) {
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

  return (
    <ArticlePageView
      locale={locale}
      collectionKey={collectionKey}
      activeHref={activeHref}
      collectionHref={activeHref}
      article={page.article}
      relatedItems={page.relatedItems}
    />
  );
}
