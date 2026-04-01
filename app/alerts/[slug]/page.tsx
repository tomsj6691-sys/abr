import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ArticlePageView } from "@/app/_components/page-templates";
import { buildCollectionCanonicalUrl, loadPublicArticlePage } from "@/app/_lib/articles-api";
import { defaultLocale, getCollectionCopy } from "@/app/_lib/i18n";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const articlePage = await loadPublicArticlePage("alerts", slug, defaultLocale);

  if (!articlePage) {
    return {
      title: getCollectionCopy(defaultLocale, "alerts").title,
      description: getCollectionCopy(defaultLocale, "alerts").description,
    };
  }

  return {
    title: articlePage.article.title,
    description: articlePage.article.summary,
    alternates: {
      canonical: buildCollectionCanonicalUrl(defaultLocale, "alerts", slug),
    },
    openGraph: {
      title: articlePage.article.title,
      description: articlePage.article.summary,
      url: buildCollectionCanonicalUrl(defaultLocale, "alerts", slug),
    },
  };
}

export default async function AlertDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articlePage = await loadPublicArticlePage("alerts", slug, defaultLocale);

  if (!articlePage) {
    notFound();
  }

  return (
    <ArticlePageView
      locale={defaultLocale}
      collectionKey="alerts"
      activeHref="/alerts"
      collectionHref="/alerts"
      article={articlePage.article}
      relatedItems={articlePage.relatedItems}
    />
  );
}
