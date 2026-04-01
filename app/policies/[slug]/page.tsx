import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { StaticPageView } from "@/app/_components/page-templates";
import { defaultLocale, getRootMetadataCopy } from "@/app/_lib/i18n";
import { getStaticPage, siteUrl } from "@/app/_lib/site-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const policySlugs = ["privacy", "terms", "anti-fraud", "integrity"] as const;

export const dynamicParams = false;

export function generateStaticParams() {
  return policySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getStaticPage(slug);

  if (!page) {
    return {
      title: getRootMetadataCopy(defaultLocale).notFoundTitle,
    };
  }

  return {
    title: page.title,
    description: page.intro[0],
    alternates: {
      canonical: `/policies/${slug}`,
    },
    openGraph: {
      title: page.title,
      description: page.intro[0],
      url: `${siteUrl}/policies/${slug}`,
    },
  };
}

export default async function PolicyPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getStaticPage(slug);

  if (!page) {
    notFound();
  }

  return (
    <StaticPageView
      locale={defaultLocale}
      pageKey={slug as "privacy" | "terms" | "anti-fraud" | "integrity"}
      activeHref=""
      page={page}
    />
  );
}
