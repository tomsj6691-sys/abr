import type { Metadata } from "next";

import { CollectionPageView } from "@/app/_components/page-templates";
import {
  buildPaginationBaseHref,
  loadPublicCollectionPage,
  parsePageNumber,
} from "@/app/_lib/articles-api";
import { defaultLocale, getCollectionCopy, getMessages } from "@/app/_lib/i18n";
import {
  collectionPages,
  getCollectionSidebarCards,
  getCollectionSidebarLinks,
} from "@/app/_lib/site-data";

export const metadata: Metadata = {
  title: getCollectionCopy(defaultLocale, "alerts").title,
  description: getCollectionCopy(defaultLocale, "alerts").description,
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function AlertsPage({ searchParams }: { searchParams: SearchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = parsePageNumber(resolvedSearchParams.page);
  const categoryName =
    typeof resolvedSearchParams.category_name === "string"
      ? resolvedSearchParams.category_name
      : resolvedSearchParams.category_name?.[0];
  const collectionPage = await loadPublicCollectionPage(
    "alerts",
    defaultLocale,
    page,
    categoryName,
  );
  const messages = getMessages(defaultLocale);

  return (
    <CollectionPageView
      locale={defaultLocale}
      pageKey="alerts"
      activeHref="/alerts"
      collectionHref="/alerts"
      config={{
        ...collectionPages.alerts,
        sidebarCards: getCollectionSidebarCards("alerts", defaultLocale),
        sidebarLinks: getCollectionSidebarLinks("alerts", defaultLocale),
      }}
      items={collectionPage.items}
      itemBaseHref="/alerts"
      selectedTag={categoryName}
      pagination={{
        currentPage: collectionPage.page,
        totalPages: collectionPage.totalPages,
        baseHref: buildPaginationBaseHref("/alerts", resolvedSearchParams),
      }}
      emptyState={{
        title: messages.notFound.label,
        body: messages.notFound.body,
      }}
    />
  );
}
