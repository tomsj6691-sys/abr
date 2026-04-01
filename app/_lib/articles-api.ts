import { cache } from "react";

import { getArticleUiCopy, getHomeFeedUiCopy, type Locale, localizeHref } from "@/app/_lib/i18n";
import {
  getCollectionChannelName,
  getLocalizedCollectionCategory,
  siteUrl,
  type CollectionItem,
  type HomeFeedItem,
} from "@/app/_lib/site-data";

export type CollectionKey = "reports" | "alerts";

const siteName = "AIBRI";
const apiBaseUrl =
  process.env.CMS_API_BASE_URL ??
  process.env.NEXT_PUBLIC_CMS_API_BASE_URL ??
  "http://localhost:8000";
const publicArticlesPath = "/api/v1/articles/public";
const defaultPageSize = 6;

type PublicArticlesQuery = {
  siteName: string;
  channelName?: string;
  categoryName?: string;
  categoryId?: string;
  language?: string;
  q?: string;
};

type ArticleContentRead = {
  id: string;
  article_id: string;
  language: string;
  title: string;
  summary: string | null;
  content_raw: string;
  content_html: string;
  seo_title: string | null;
  seo_description: string | null;
  translation_status: string;
  version: number;
  created_at: string;
  updated_at: string;
};

type ArticleRead = {
  id: string;
  site_id: string;
  channel_id: string;
  channel_name?: string | null;
  category_id: string | null;
  category_name?: string | null;
  status: string;
  author_name: string | null;
  cover_image: string | null;
  publish_at: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
  contents: ArticleContentRead[];
};

type PublicArticlesResponse = {
  items: ArticleRead[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
};

type CollectionPageResult = {
  items: CollectionItem[];
  page: number;
  totalPages: number;
  total: number;
  pageSize: number;
};

function getCollectionLabel(collectionKey: CollectionKey) {
  return getCollectionChannelName(collectionKey);
}

function getCollectionHref(collectionKey: CollectionKey) {
  return collectionKey === "reports" ? "/reports" : "/alerts";
}

const articleLanguageByLocale: Partial<Record<Locale, string>> = {
  "zh-CN": "zh-CN",
  en: "en-US",
  ja: "ja-JP",
  fr: "fr-FR",
  de: "de-DE",
  es: "es-ES",
  pt: "pt-BR",
  ar: "ar-SA",
};

function getArticleLanguageFilter(locale: Locale) {
  return articleLanguageByLocale[locale] ?? "zh-CN";
}

type QueryValue = string | string[] | undefined;

type QueryRecord = Record<string, QueryValue>;

function buildPublicArticlesUrl(query: PublicArticlesQuery, page: number, pageSize: number) {
  const url = new URL(publicArticlesPath, apiBaseUrl);

  url.searchParams.set("site_name", query.siteName);
  url.searchParams.set("page", String(page));
  url.searchParams.set("page_size", String(pageSize));

  if (query.channelName) {
    url.searchParams.set("channel_name", query.channelName);
  }

  if (query.categoryName) {
    url.searchParams.set("category_name", query.categoryName);
  }

  if (query.categoryId) {
    url.searchParams.set("category_id", query.categoryId);
  }

  if (query.language) {
    url.searchParams.set("language", query.language);
  }

  if (query.q) {
    url.searchParams.set("q", query.q);
  }

  return url;
}

function firstQueryValue(value: QueryValue) {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}

export function parsePageNumber(value: QueryValue, fallback = 1) {
  const parsed = Number.parseInt(firstQueryValue(value) ?? String(fallback), 10);

  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export function buildPaginationBaseHref(pathname: string, searchParams: QueryRecord) {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (key === "page") {
      continue;
    }

    const normalizedValue = firstQueryValue(value);

    if (normalizedValue) {
      params.set(key, normalizedValue);
    }
  }

  const query = params.toString();

  return query ? `${pathname}?${query}` : pathname;
}

function normalizeWhitespace(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function stripHtml(value: string) {
  return value.replace(/<[^>]*>/g, " ");
}

function truncate(value: string, maxLength: number) {
  const normalized = normalizeWhitespace(value);

  return normalized.length > maxLength
    ? `${normalized.slice(0, maxLength).trimEnd()}…`
    : normalized;
}

function splitParagraphs(value: string) {
  return normalizeWhitespace(value.replace(/\n+/g, "\n"))
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

function formatDate(value: string | null, locale: Locale) {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function pickContent(article: ArticleRead, language: string) {
  return article.contents.find((content) => content.language === language) ?? article.contents[0];
}

function getContentText(content: ArticleContentRead | undefined) {
  if (!content) {
    return "";
  }

  return normalizeWhitespace(
    stripHtml(content.content_html || content.content_raw || content.summary || ""),
  );
}

function buildExcerpt(content: ArticleContentRead | undefined) {
  if (!content) {
    return "";
  }

  return content.summary ? truncate(content.summary, 140) : truncate(getContentText(content), 140);
}

function buildSummary(content: ArticleContentRead | undefined) {
  if (!content) {
    return "";
  }

  return content.summary
    ? normalizeWhitespace(content.summary)
    : truncate(getContentText(content), 180);
}

function buildIntro(content: ArticleContentRead | undefined) {
  if (!content) {
    return "";
  }

  const paragraphs = splitParagraphs(getContentText(content));
  return paragraphs[0] ?? buildSummary(content);
}

function buildSections(content: ArticleContentRead | undefined, locale: Locale) {
  const paragraphs = content ? splitParagraphs(getContentText(content)) : [];
  const articleUiCopy = getArticleUiCopy(locale);

  return [
    {
      heading: articleUiCopy.sectionHeading,
      paragraphs: paragraphs.length > 0 ? paragraphs : [articleUiCopy.unavailable],
    },
  ];
}

function buildReadTime(content: ArticleContentRead | undefined, locale: Locale) {
  const text = getContentText(content);
  return `${Math.max(1, Math.ceil(text.length / 450))} ${getArticleUiCopy(locale).minuteUnit}`;
}

function buildDisclaimer(collectionLabel: string, locale: Locale) {
  const articleUiCopy = getArticleUiCopy(locale);

  return [
    articleUiCopy.disclaimerFromApi.replace("{collectionLabel}", collectionLabel),
    articleUiCopy.disclaimerPublished,
  ];
}

function mapArticleToCollectionItem(
  article: ArticleRead,
  locale: Locale,
  collectionKey: CollectionKey,
): CollectionItem | null {
  const content = pickContent(article, locale);

  if (!content) {
    return null;
  }

  const publishedAt = formatDate(
    article.published_at ?? article.publish_at ?? article.created_at,
    locale,
  );
  const collectionLabel = getCollectionLabel(collectionKey);

  const canonicalCategoryName = article.category_name ?? collectionLabel;

  return {
    slug: article.id,
    title: content.title,
    excerpt: buildExcerpt(content),
    category: getLocalizedCollectionCategory(collectionKey, locale, canonicalCategoryName),
    archiveId: article.id,
    publishedAt,
    region: siteName,
    readTime: buildReadTime(content, locale),
    summary: buildSummary(content),
    intro: buildIntro(content),
    sections: buildSections(content, locale),
    disclaimer: buildDisclaimer(collectionLabel, locale),
    relatedSlugs: [],
    channelName: article.channel_name ?? collectionLabel,
    categoryName: canonicalCategoryName,
  };
}

function attachRelatedSlugs(items: CollectionItem[]) {
  return items.map((item, index) => ({
    ...item,
    relatedSlugs: items
      .filter((_, otherIndex) => otherIndex !== index)
      .slice(0, 3)
      .map((relatedItem) => relatedItem.slug),
  }));
}

function isCollectionItem(value: CollectionItem | null): value is CollectionItem {
  return value !== null;
}

function parsePublicArticlesResponse(payload: unknown): PublicArticlesResponse {
  if (Array.isArray(payload)) {
    return {
      items: payload as ArticleRead[],
      total: payload.length,
      page: 1,
      page_size: payload.length,
      total_pages: 1,
    };
  }

  if (payload && typeof payload === "object") {
    const typedPayload = payload as Partial<PublicArticlesResponse> & {
      items?: unknown;
    };

    if (Array.isArray(typedPayload.items)) {
      return {
        items: typedPayload.items as ArticleRead[],
        total: typedPayload.total ?? typedPayload.items.length,
        page: typedPayload.page ?? 1,
        page_size: typedPayload.page_size ?? typedPayload.items.length,
        total_pages: typedPayload.total_pages ?? 1,
      };
    }
  }

  return {
    items: [],
    total: 0,
    page: 1,
    page_size: defaultPageSize,
    total_pages: 1,
  };
}

const fetchPublicArticlesPage = cache(async function fetchPublicArticlesPage(
  query: Partial<PublicArticlesQuery> = {},
  page = 1,
  pageSize = defaultPageSize,
) {
  try {
    const response = await fetch(buildPublicArticlesUrl({ siteName, ...query }, page, pageSize), {
      cache: "no-store",
    });

    if (!response.ok) {
      return {
        items: [],
        total: 0,
        page,
        page_size: pageSize,
        total_pages: 1,
      } satisfies PublicArticlesResponse;
    }

    return parsePublicArticlesResponse(await response.json());
  } catch {
    return {
      items: [],
      total: 0,
      page,
      page_size: pageSize,
      total_pages: 1,
    } satisfies PublicArticlesResponse;
  }
});

async function fetchAllPublicArticles(
  query: Partial<PublicArticlesQuery> = {},
  pageSize = defaultPageSize,
) {
  const firstPage = await fetchPublicArticlesPage(query, 1, pageSize);
  const items = [...firstPage.items];

  for (let page = 2; page <= firstPage.total_pages; page += 1) {
    const nextPage = await fetchPublicArticlesPage(query, page, pageSize);
    items.push(...nextPage.items);
  }

  return items;
}

function paginateCollectionItems(items: CollectionItem[], page: number, pageSize: number) {
  const total = items.length;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;

  return {
    items: items.slice(start, start + pageSize),
    page: currentPage,
    totalPages,
    total,
    pageSize,
  } satisfies CollectionPageResult;
}

export async function loadPublicCollectionPage(
  collectionKey: CollectionKey,
  locale: Locale,
  page = 1,
  categoryName?: string,
  pageSize = defaultPageSize,
) {
  const channelName = getCollectionLabel(collectionKey);
  const language = getArticleLanguageFilter(locale);
  const normalizedCategoryName = categoryName?.trim();
  const articles = await fetchAllPublicArticles({
    channelName,
    categoryName: normalizedCategoryName,
    language,
  });
  const items = attachRelatedSlugs(
    articles
      .map((article) => mapArticleToCollectionItem(article, locale, collectionKey))
      .filter(isCollectionItem),
  );
  const filteredItems = normalizedCategoryName
    ? items.filter(
        (item) =>
          item.categoryName === normalizedCategoryName || item.category === normalizedCategoryName,
      )
    : items;

  return paginateCollectionItems(filteredItems, page, pageSize);
}

export async function loadPublicCollectionItems(collectionKey: CollectionKey, locale: Locale) {
  return (await loadPublicCollectionPage(collectionKey, locale)).items;
}

async function loadAllPublicCollectionItems(collectionKey: CollectionKey, locale: Locale) {
  const channelName = getCollectionLabel(collectionKey);
  const language = getArticleLanguageFilter(locale);
  const articles = await fetchAllPublicArticles({ channelName, language });

  return attachRelatedSlugs(
    articles
      .map((article) => mapArticleToCollectionItem(article, locale, collectionKey))
      .filter(isCollectionItem),
  );
}

export async function loadPublicArticlePage(
  collectionKey: CollectionKey,
  slug: string,
  locale: Locale,
) {
  const items = await loadAllPublicCollectionItems(collectionKey, locale);
  const article = items.find((item) => item.slug === slug);

  if (!article) {
    return null;
  }

  return {
    article,
    relatedItems: items.filter((item) => item.slug !== slug).slice(0, 3),
  };
}

export async function loadPublicHomeFeed(locale: Locale) {
  const homeFeedUiCopy = getHomeFeedUiCopy(locale);
  const [reportsItems, alertsItems] = await Promise.all([
    loadPublicCollectionItems("reports", locale),
    loadPublicCollectionItems("alerts", locale),
  ]);

  const feedItems: HomeFeedItem[] = [];
  const reportItem = reportsItems[0];
  const alertItem = alertsItems[0];

  if (reportItem) {
    feedItems.push({
      typeLabel: getHomeFeedUiCopy(locale).bulletinTypeLabel,
      meta: reportItem.publishedAt || reportItem.archiveId,
      title: reportItem.title,
      excerpt: reportItem.excerpt,
      href: `/reports/${reportItem.slug}`,
      cta: homeFeedUiCopy.reportCta,
    });
  }

  if (alertItem) {
    feedItems.push({
      typeLabel: getHomeFeedUiCopy(locale).liveTypeLabel,
      meta: alertItem.publishedAt || alertItem.archiveId,
      title: alertItem.title,
      excerpt: alertItem.excerpt,
      href: `/alerts/${alertItem.slug}`,
      cta: homeFeedUiCopy.alertCta,
    });
  }

  return feedItems;
}

export async function loadPublicCollectionSlugs(collectionKey: CollectionKey) {
  const channelName = getCollectionLabel(collectionKey);
  const articles = await fetchAllPublicArticles({ channelName });
  return articles.map((article) => article.id);
}

export async function loadAllPublicArticleRoutes() {
  const [reports, alerts] = await Promise.all([
    loadPublicCollectionSlugs("reports"),
    loadPublicCollectionSlugs("alerts"),
  ]);

  return { reports, alerts };
}

export function buildCollectionPath(collectionKey: CollectionKey, slug: string) {
  return `${getCollectionHref(collectionKey)}/${slug}`;
}

export function buildCollectionCanonicalUrl(
  locale: Locale,
  collectionKey: CollectionKey,
  slug: string,
) {
  return `${siteUrl}${localizeHref(locale, buildCollectionPath(collectionKey, slug))}`;
}
