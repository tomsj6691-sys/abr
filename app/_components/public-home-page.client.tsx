"use client";

import { useEffect, useState } from "react";

import { HomePageView, LoadingPageView } from "@/app/_components/page-templates";
import { loadPublicHomeFeedClient } from "@/app/_lib/public-articles.client";
import type { Locale } from "@/app/_lib/i18n";
import { getHomeSidebarCards, type HomeFeedItem } from "@/app/_lib/site-data";

export function PublicHomePageClient({ locale }: { locale: Locale }) {
  const [feedItems, setFeedItems] = useState<HomeFeedItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);
    void loadPublicHomeFeedClient(locale)
      .then((items) => {
        if (!isMounted) {
          return;
        }

        setFeedItems(items);
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [locale]);

  if (isLoading && feedItems.length === 0) {
    return <LoadingPageView activeHref="/" locale={locale} />;
  }

  return (
    <HomePageView
      locale={locale}
      feedItems={feedItems}
      sidebarCards={getHomeSidebarCards(locale)}
    />
  );
}
