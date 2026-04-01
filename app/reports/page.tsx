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
  title: getCollectionCopy(defaultLocale, "reports").title,
  description: getCollectionCopy(defaultLocale, "reports").description,
};

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

export default async function ReportsPage({ searchParams }: { searchParams: SearchParams }) {
  const resolvedSearchParams = await searchParams;
  const page = parsePageNumber(resolvedSearchParams.page);
  const categoryName =
    typeof resolvedSearchParams.category_name === "string"
      ? resolvedSearchParams.category_name
      : resolvedSearchParams.category_name?.[0];
  const collectionPage = await loadPublicCollectionPage(
    "reports",
    defaultLocale,
    page,
    categoryName,
  );
  const messages = getMessages(defaultLocale);

  return (
    <CollectionPageView
      locale={defaultLocale}
      pageKey="reports"
      activeHref="/reports"
      collectionHref="/reports"
      config={{
        ...collectionPages.reports,
        sidebarCards: getCollectionSidebarCards("reports", defaultLocale),
        sidebarLinks: getCollectionSidebarLinks("reports", defaultLocale),
      }}
      items={collectionPage.items}
      itemBaseHref="/reports"
      selectedTag={categoryName}
      pagination={{
        currentPage: collectionPage.page,
        totalPages: collectionPage.totalPages,
        baseHref: buildPaginationBaseHref("/reports", resolvedSearchParams),
      }}
      emptyState={{
        title: messages.notFound.label,
        body: messages.notFound.body,
      }}
    />
  );
}
