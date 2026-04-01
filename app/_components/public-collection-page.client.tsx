"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

import { CollectionPageView, LoadingPageView } from "@/app/_components/page-templates";
import {
  loadPublicCollectionPageClient,
  type CollectionKey,
  type PublicCollectionPageResult,
} from "@/app/_lib/public-articles.client";
import { getMessages, type Locale } from "@/app/_lib/i18n";
import {
  collectionPages,
  getCollectionSidebarCards,
  getCollectionSidebarLinks,
} from "@/app/_lib/site-data";

function parsePageNumber(value: string | null, fallback = 1) {
  const parsed = Number.parseInt(value ?? String(fallback), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function buildPaginationBaseHref(pathname: string, searchParams: URLSearchParams) {
  const params = new URLSearchParams(searchParams.toString());
  params.delete("page");
  const query = params.toString();
  return query ? `${pathname}?${query}` : pathname;
}

export function PublicCollectionPageClient({
  locale,
  collectionKey,
}: {
  locale: Locale;
  collectionKey: CollectionKey;
}) {
  const searchParams = useSearchParams();
  const [collectionPage, setCollectionPage] = useState<PublicCollectionPageResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const page = parsePageNumber(searchParams.get("page"));
  const categoryName = searchParams.get("category_name") ?? undefined;
  const activeHref = collectionKey === "reports" ? "/reports" : "/alerts";
  const messages = getMessages(locale);
  const paginationBaseHref = useMemo(
    () => buildPaginationBaseHref(activeHref, new URLSearchParams(searchParams.toString())),
    [activeHref, searchParams],
  );

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);
    void loadPublicCollectionPageClient(collectionKey, locale, page, categoryName)
      .then((nextPage) => {
        if (!isMounted) {
          return;
        }

        setCollectionPage(nextPage);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [categoryName, collectionKey, locale, page]);

  if (!collectionPage && isLoading) {
    return <LoadingPageView activeHref={activeHref} locale={locale} />;
  }

  const currentPage =
    collectionPage ??
    ({
      items: [],
      page,
      totalPages: 1,
      total: 0,
      pageSize: 6,
    } satisfies PublicCollectionPageResult);

  return (
    <CollectionPageView
      locale={locale}
      pageKey={collectionKey}
      activeHref={activeHref}
      collectionHref={activeHref}
      config={{
        ...collectionPages[collectionKey],
        sidebarCards: getCollectionSidebarCards(collectionKey, locale),
        sidebarLinks: getCollectionSidebarLinks(collectionKey, locale),
      }}
      items={currentPage.items}
      itemBaseHref={activeHref}
      selectedTag={categoryName}
      pagination={{
        currentPage: currentPage.page,
        totalPages: currentPage.totalPages,
        baseHref: paginationBaseHref,
      }}
      emptyState={{
        title: messages.notFound.label,
        body: messages.notFound.body,
      }}
    />
  );
}
