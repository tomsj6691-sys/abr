import { getArticleLanguageFilter } from "@/app/_lib/article-locale";
import { getArticleUiCopy, getHomeFeedUiCopy, type Locale } from "@/app/_lib/i18n";
import {
  getCollectionChannelName,
  getLocalizedCollectionCategory,
  type CollectionItem,
  type HomeFeedItem,
} from "@/app/_lib/site-data";

export type CollectionKey = "reports" | "alerts";

type PublicArticlesQuery = {
  channelName?: string;
  categoryName?: string;
  language?: string;
  title?: string;
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

export type PublicCollectionPageResult = {
  items: CollectionItem[];
  page: number;
  totalPages: number;
  total: number;
  pageSize: number;
};

const siteName = "AIBRI";
const publicArticlesPath = "/api/articles/public";
const defaultPageSize = 6;

function getCollectionLabel(collectionKey: CollectionKey) {
  return getCollectionChannelName(collectionKey);
}

function buildPublicArticlesUrl(query: PublicArticlesQuery, page: number, pageSize: number) {
  const searchParams = new URLSearchParams();

  searchParams.set("site_name", siteName);
  searchParams.set("page", String(page));
  searchParams.set("page_size", String(pageSize));

  if (query.language) {
    searchParams.set("language", query.language);
  }

  if (query.channelName) {
    searchParams.set("channel_name", query.channelName);
  }

  if (query.categoryName) {
    searchParams.set("category_name", query.categoryName);
  }

  if (query.title) {
    searchParams.set("title", query.title);
  }

  return `${publicArticlesPath}?${searchParams.toString()}`;
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
  return value
    .replace(/\n+/g, "\n")
    .split(/\n+/)
    .map((line) => normalizeWhitespace(line))
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
  const articleLanguage = getArticleLanguageFilter(locale);
  const content = pickContent(article, articleLanguage);

  if (!content) {
    return null;
  }

  const collectionLabel = getCollectionLabel(collectionKey);

  const canonicalCategoryName = article.category_name ?? collectionLabel;

  return {
    slug: article.id,
    title: content.title,
    excerpt: buildExcerpt(content),
    category: getLocalizedCollectionCategory(collectionKey, locale, canonicalCategoryName),
    archiveId: article.id,
    publishedAt: formatDate(
      article.published_at ?? article.publish_at ?? article.created_at,
      locale,
    ),
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

async function fetchPublicArticlesPage(
  query: PublicArticlesQuery = {},
  page = 1,
  pageSize = defaultPageSize,
) {
  try {
    const response = await fetch(buildPublicArticlesUrl(query, page, pageSize), {
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
}

async function fetchAllPublicArticles(query: PublicArticlesQuery = {}, pageSize = defaultPageSize) {
  const firstPage = await fetchPublicArticlesPage(query, 1, pageSize);
  const items = [...firstPage.items];

  for (let page = 2; page <= firstPage.total_pages; page += 1) {
    const nextPage = await fetchPublicArticlesPage(query, page, pageSize);
    items.push(...nextPage.items);
  }

  return items;
}

export async function loadPublicCollectionPageClient(
  collectionKey: CollectionKey,
  locale: Locale,
  page = 1,
  categoryName?: string,
  pageSize = defaultPageSize,
  title?: string,
): Promise<PublicCollectionPageResult> {
  const language = getArticleLanguageFilter(locale);
  const normalizedCategoryName = categoryName?.trim();
  const response = await fetchPublicArticlesPage(
    {
      channelName: getCollectionLabel(collectionKey),
      categoryName: normalizedCategoryName,
      language,
      title,
    },
    page,
    pageSize,
  );

  return {
    items: attachRelatedSlugs(
      response.items
        .map((article) => mapArticleToCollectionItem(article, locale, collectionKey))
        .filter(isCollectionItem),
    ),
    page: response.page,
    totalPages: response.total_pages,
    total: response.total,
    pageSize: response.page_size,
  };
}

export async function loadPublicArticlePageClient(
  collectionKey: CollectionKey,
  slug: string,
  locale: Locale,
) {
  const language = getArticleLanguageFilter(locale);
  const items = attachRelatedSlugs(
    (await fetchAllPublicArticles({ channelName: getCollectionLabel(collectionKey), language }))
      .map((article) => mapArticleToCollectionItem(article, locale, collectionKey))
      .filter(isCollectionItem),
  );
  const article = items.find((item) => item.slug === slug);

  if (!article) {
    return null;
  }

  return {
    article,
    relatedItems: items.filter((item) => item.slug !== slug).slice(0, 3),
  };
}

export async function loadPublicHomeFeedClient(locale: Locale): Promise<HomeFeedItem[]> {
  const homeFeedUiCopy = getHomeFeedUiCopy(locale);
  const [reportsPage, alertsPage] = await Promise.all([
    loadPublicCollectionPageClient("reports", locale, 1, undefined, 1),
    loadPublicCollectionPageClient("alerts", locale, 1, undefined, 1),
  ]);

  const feedItems: HomeFeedItem[] = [];
  const reportItem = reportsPage.items[0];
  const alertItem = alertsPage.items[0];

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
