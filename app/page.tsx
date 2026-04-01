import type { Metadata } from "next";

import { HomePageView } from "@/app/_components/page-templates";
import { loadPublicHomeFeed } from "@/app/_lib/articles-api";
import { defaultLocale, getHomeCopy, getHomeMetadataCopy } from "@/app/_lib/i18n";
import { getHomeSidebarCards } from "@/app/_lib/site-data";

export const metadata: Metadata = {
  title: getHomeCopy(defaultLocale).sectionLabel,
  description: getHomeMetadataCopy(defaultLocale).description,
};

export default async function HomePage() {
  const feedItems = await loadPublicHomeFeed(defaultLocale);

  return (
    <HomePageView
      locale={defaultLocale}
      feedItems={feedItems}
      sidebarCards={getHomeSidebarCards(defaultLocale)}
    />
  );
}
