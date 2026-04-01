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
  const articlePage = await loadPublicArticlePage("reports", slug, defaultLocale);

  if (!articlePage) {
    return {
      title: getCollectionCopy(defaultLocale, "reports").title,
      description: getCollectionCopy(defaultLocale, "reports").description,
    };
  }

  return {
    title: articlePage.article.title,
    description: articlePage.article.summary,
    alternates: {
      canonical: buildCollectionCanonicalUrl(defaultLocale, "reports", slug),
    },
    openGraph: {
      title: articlePage.article.title,
      description: articlePage.article.summary,
      url: buildCollectionCanonicalUrl(defaultLocale, "reports", slug),
    },
  };
}

export default async function ReportDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const articlePage = await loadPublicArticlePage("reports", slug, defaultLocale);

  if (!articlePage) {
    notFound();
  }

  return (
    <ArticlePageView
      locale={defaultLocale}
      collectionKey="reports"
      activeHref="/reports"
      collectionHref="/reports"
      article={articlePage.article}
      relatedItems={articlePage.relatedItems}
    />
  );
}
