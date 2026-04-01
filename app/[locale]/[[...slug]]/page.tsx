import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  ArticlePageView,
  CollectionPageView,
  HomePageView,
  StaticPageView,
} from "@/app/_components/page-templates";
import {
  buildCollectionCanonicalUrl,
  buildPaginationBaseHref,
  loadPublicArticlePage,
  loadPublicCollectionPage,
  loadPublicHomeFeed,
  parsePageNumber,
  type CollectionKey,
} from "@/app/_lib/articles-api";
import {
  collectionPages,
  getCollectionSidebarCards,
  getCollectionSidebarLinks,
  getHomeSidebarCards,
  getStaticPage,
  siteUrl,
} from "@/app/_lib/site-data";
import {
  getCollectionCopy,
  getHomeCopy,
  getHomeMetadataCopy,
  getRootMetadataCopy,
  getStaticPageCopy,
  getMessages,
  hasLocale,
  localizeHref,
  type Locale,
} from "@/app/_lib/i18n";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

type PageProps = {
  params: Promise<{
    locale: string;
    slug?: string[];
  }>;
  searchParams: SearchParams;
};

const staticPageKeys = ["about", "auditors", "methodology", "evidence-vault"] as const;
const policySlugs = ["privacy", "terms", "anti-fraud", "integrity"] as const;

export const dynamic = "force-dynamic";

async function resolveRoute(
  locale: Locale,
  slug: string[] = [],
  searchParams: Record<string, string | string[] | undefined> = {},
) {
  const [segment, nested] = slug;
  const homeDescription = getHomeMetadataCopy(locale).description;
  const page = parsePageNumber(searchParams.page);
  const categoryName =
    typeof searchParams.category_name === "string"
      ? searchParams.category_name
      : searchParams.category_name?.[0];

  if (slug.length === 0) {
    const feedItems = await loadPublicHomeFeed(locale);

    return {
      metadata: {
        title: getHomeCopy(locale).sectionLabel,
        description: homeDescription,
        alternates: {
          canonical: localizeHref(locale, "/"),
        },
        openGraph: {
          title: getHomeCopy(locale).sectionLabel,
          description: homeDescription,
          url: `${siteUrl}${localizeHref(locale, "/")}`,
        },
      } satisfies Metadata,
      render: () => (
        <HomePageView
          locale={locale}
          feedItems={feedItems}
          sidebarCards={getHomeSidebarCards(locale)}
        />
      ),
    };
  }

  if (slug.length === 1 && (segment === "reports" || segment === "alerts")) {
    const collectionKey = segment as CollectionKey;
    const activeHref = collectionKey === "reports" ? "/reports" : "/alerts";
    const collectionPage = await loadPublicCollectionPage(
      collectionKey,
      locale,
      page,
      categoryName,
    );
    const messages = getMessages(locale);

    return {
      metadata: {
        title: getCollectionCopy(locale, collectionKey).title,
        description: getCollectionCopy(locale, collectionKey).description,
        alternates: {
          canonical: localizeHref(locale, activeHref),
        },
      } satisfies Metadata,
      render: () => (
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
          items={collectionPage.items}
          itemBaseHref={activeHref}
          selectedTag={categoryName}
          pagination={{
            currentPage: collectionPage.page,
            totalPages: collectionPage.totalPages,
            baseHref: buildPaginationBaseHref(activeHref, searchParams),
          }}
          emptyState={{
            title: messages.notFound.label,
            body: messages.notFound.body,
          }}
        />
      ),
    };
  }

  if (slug.length === 2 && (segment === "reports" || segment === "alerts") && nested) {
    const collectionKey = segment as CollectionKey;
    const activeHref = collectionKey === "reports" ? "/reports" : "/alerts";
    const articlePage = await loadPublicArticlePage(collectionKey, nested, locale);

    if (!articlePage) {
      return null;
    }

    return {
      metadata: {
        title: articlePage.article.title,
        description: articlePage.article.summary,
        alternates: {
          canonical: buildCollectionCanonicalUrl(locale, collectionKey, nested),
        },
        openGraph: {
          title: articlePage.article.title,
          description: articlePage.article.summary,
          url: buildCollectionCanonicalUrl(locale, collectionKey, nested),
        },
      } satisfies Metadata,
      render: () => (
        <ArticlePageView
          locale={locale}
          collectionKey={collectionKey}
          activeHref={activeHref}
          collectionHref={activeHref}
          article={articlePage.article}
          relatedItems={articlePage.relatedItems}
        />
      ),
    };
  }

  if (slug.length === 1 && segment && (staticPageKeys as readonly string[]).includes(segment)) {
    const staticKey = segment as (typeof staticPageKeys)[number];
    const page = getStaticPage(staticKey, locale);
    const copy = getStaticPageCopy(locale, staticKey);

    if (!page) {
      return null;
    }

    return {
      metadata: {
        title: copy.title,
        description: page.intro[0],
        alternates: {
          canonical: localizeHref(locale, `/${staticKey}`),
        },
      } satisfies Metadata,
      render: () => (
        <StaticPageView
          locale={locale}
          pageKey={staticKey}
          activeHref={staticKey === "about" ? "" : `/${staticKey}`}
          page={page}
        />
      ),
    };
  }

  if (slug.length === 2 && segment === "policies" && nested) {
    const policySlug = nested as (typeof policySlugs)[number];

    if (!(policySlugs as readonly string[]).includes(policySlug)) {
      return null;
    }

    const page = getStaticPage(policySlug, locale);

    if (!page) {
      return null;
    }

    return {
      metadata: {
        title: getStaticPageCopy(locale, policySlug).title,
        description: page.intro[0],
        alternates: {
          canonical: localizeHref(locale, `/policies/${policySlug}`),
        },
      } satisfies Metadata,
      render: () => (
        <StaticPageView locale={locale} pageKey={policySlug} activeHref="" page={page} />
      ),
    };
  }

  return null;
}

export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolvedSearchParams = await searchParams;

  if (!hasLocale(locale)) {
    return {
      title: getRootMetadataCopy("en").notFoundTitle,
    };
  }

  const route = await resolveRoute(locale, slug, resolvedSearchParams);

  if (!route) {
    return {
      title: getRootMetadataCopy(locale).notFoundTitle,
      description: getRootMetadataCopy(locale).description,
    };
  }

  return route.metadata;
}

export default async function LocalizedPage({ params, searchParams }: PageProps) {
  const { locale, slug } = await params;
  const resolvedSearchParams = await searchParams;

  if (!hasLocale(locale)) {
    notFound();
  }

  const route = await resolveRoute(locale, slug, resolvedSearchParams);

  if (!route) {
    notFound();
  }

  return route.render();
}
