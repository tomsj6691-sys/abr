import Link from "next/link";

import { HomeShell, InnerShell } from "@/app/_components/site-shell";
import {
  getArticleCollectionLabel,
  getArticleUiCopy,
  getCollectionCopy,
  getHomeCopy,
  getMessages,
  getPaginationCopy,
  getStaticPageCopy,
  localizeHref,
  type Locale,
} from "@/app/_lib/i18n";
import type {
  CollectionItem,
  CollectionPageData,
  LinkItem,
  SidebarCard,
  StaticPageData,
} from "@/app/_lib/site-data";
import { getCollectionTagLabel, siteUrl } from "@/app/_lib/site-data";

type HomePageProps = {
  locale: Locale;
  feedItems: Array<{
    typeLabel: string;
    meta: string;
    title: string;
    excerpt: string;
    href: string;
    cta: string;
  }>;
  sidebarCards: SidebarCard[];
};

export function HomePageView({ locale, feedItems, sidebarCards }: HomePageProps) {
  const homeCopy = getHomeCopy(locale);

  return (
    <HomeShell activeHref="/" locale={locale}>
      <div className="site-container home-grid">
        <main>
          <span className="section-label">{homeCopy.sectionLabel}</span>

          {feedItems.map((item) => (
            <article key={item.title} className="feed-item">
              <div className="meta-row">
                <span className="tag-bulletin">{item.typeLabel}</span>
                <span>{item.meta}</span>
              </div>

              <Link href={localizeHref(locale, item.href)} className="feed-title serif">
                {item.title}
              </Link>

              <p className="feed-excerpt">{item.excerpt}</p>
              <Link href={localizeHref(locale, item.href)} className="action-link">
                {item.cta}
              </Link>
            </article>
          ))}
        </main>

        <aside>
          <span className="section-label">{homeCopy.sidebarLabel}</span>

          {sidebarCards.map((card) => (
            <div
              key={card.title}
              className={card.variant === "light" ? "sidebar-box sidebar-box-light" : "sidebar-box"}
            >
              <h3>{card.title}</h3>
              <p>{card.body}</p>

              {card.footerLines ? (
                <div className="sidebar-footer-lines">
                  {card.footerLines.map((line) => (
                    <div key={line}>{line}</div>
                  ))}
                </div>
              ) : null}

              {card.cta ? (
                <Link href={localizeHref(locale, card.cta.href)} className="sidebar-inline-link">
                  {card.cta.label}
                </Link>
              ) : null}
            </div>
          ))}
        </aside>
      </div>
    </HomeShell>
  );
}

type CollectionPageProps = {
  locale: Locale;
  pageKey: "reports" | "alerts";
  activeHref: string;
  collectionHref: string;
  config: CollectionPageData;
  items: CollectionItem[];
  itemBaseHref: string;
  selectedTag?: string;
  pagination?: {
    currentPage: number;
    totalPages: number;
    baseHref: string;
  };
  emptyState?: {
    title: string;
    body: string;
  };
};

export function CollectionPageView({
  locale,
  pageKey,
  activeHref,
  collectionHref,
  config,
  items,
  itemBaseHref,
  selectedTag,
  pagination,
  emptyState,
}: CollectionPageProps) {
  const collectionCopy = getCollectionCopy(locale, pageKey);
  const paginationCopy = getPaginationCopy(locale);

  return (
    <InnerShell activeHref={activeHref} locale={locale}>
      <section className="channel-header">
        <div className="site-container">
          <div className="breadcrumb">{collectionCopy.breadcrumb}</div>
          <h1 className="channel-title serif">{collectionCopy.title}</h1>
          <p className="channel-desc">{collectionCopy.description}</p>
        </div>
      </section>

      <div className="tag-container">
        <div className="site-container tag-list">
          {config.tags.map((tag) => {
            const isActive = !selectedTag ? tag.value === undefined : selectedTag === tag.value;
            const href = tag.value
              ? `${collectionHref}?category_name=${encodeURIComponent(tag.value)}`
              : collectionHref;

            return (
              <Link
                key={tag.key}
                href={localizeHref(locale, href)}
                className={isActive ? "tag-btn active" : "tag-btn"}
                aria-current={isActive ? "page" : undefined}
              >
                {getCollectionTagLabel(tag, locale)}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="site-container content-grid">
        <main>
          {items.length > 0 ? (
            items.map((item) => (
              <article key={item.slug} className="list-card">
                <div className="meta-row">
                  <span className="card-tag">{item.category}</span>
                  <span>
                    {collectionCopy.fileIdLabel}: {item.archiveId}
                  </span>
                </div>

                <Link
                  href={localizeHref(locale, `${itemBaseHref}/${item.slug}`)}
                  className="card-title serif"
                >
                  {item.title}
                </Link>

                <p className="card-excerpt">{item.excerpt}</p>
                <Link
                  href={localizeHref(locale, `${itemBaseHref}/${item.slug}`)}
                  className="action-link"
                >
                  {collectionCopy.readLink}
                </Link>
              </article>
            ))
          ) : emptyState ? (
            <article className="list-card">
              <h2 className="card-title serif">{emptyState.title}</h2>
              <p className="card-excerpt">{emptyState.body}</p>
            </article>
          ) : null}

          {pagination && pagination.totalPages > 1 ? (
            <nav className="pagination-bar" aria-label={paginationCopy.ariaLabel}>
              <span className="pagination-status">
                {paginationCopy.page} {pagination.currentPage} / {pagination.totalPages}
              </span>
              <div className="pagination-controls">
                {pagination.currentPage > 1 ? (
                  <Link
                    href={localizeHref(
                      locale,
                      `${pagination.baseHref}?page=${pagination.currentPage - 1}`,
                    )}
                    className="pagination-link"
                  >
                    {paginationCopy.prev}
                  </Link>
                ) : (
                  <span className="pagination-link pagination-link-disabled">
                    {paginationCopy.prev}
                  </span>
                )}

                {pagination.currentPage < pagination.totalPages ? (
                  <Link
                    href={localizeHref(
                      locale,
                      `${pagination.baseHref}?page=${pagination.currentPage + 1}`,
                    )}
                    className="pagination-link"
                  >
                    {paginationCopy.next}
                  </Link>
                ) : (
                  <span className="pagination-link pagination-link-disabled">
                    {paginationCopy.next}
                  </span>
                )}
              </div>
            </nav>
          ) : null}
        </main>

        <aside>
          <span className="section-label">{collectionCopy.sidebarHeading}</span>
          {config.sidebarCards.map((card) => (
            <div
              key={card.title}
              className={card.variant === "light" ? "sidebar-box sidebar-box-light" : "sidebar-box"}
            >
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </div>
          ))}

          <span className="section-label">{collectionCopy.sidebarLinksHeading}</span>
          <ul className="sidebar-link-list">
            {config.sidebarLinks.map((link) => (
              <li key={link.href}>
                <Link href={localizeHref(locale, link.href)}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </InnerShell>
  );
}

type ArticlePageProps = {
  locale: Locale;
  collectionKey: "reports" | "alerts";
  activeHref: string;
  collectionHref: string;
  article: CollectionItem;
  relatedItems: CollectionItem[];
};

function buildShareLinks(locale: Locale, pathname: string, title: string) {
  const canonicalPath = localizeHref(locale, pathname);
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  return {
    canonicalUrl,
    linkedIn: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(canonicalUrl)}`,
    x: `https://x.com/intent/tweet?url=${encodeURIComponent(canonicalUrl)}&text=${encodeURIComponent(title)}`,
  };
}

export function ArticlePageView({
  locale,
  collectionKey,
  activeHref,
  collectionHref,
  article,
  relatedItems,
}: ArticlePageProps) {
  const messages = getMessages(locale);
  const articleUiCopy = getArticleUiCopy(locale);
  const pathname = `${collectionHref}/${article.slug}`;
  const shareLinks = buildShareLinks(locale, pathname, article.title);
  const localizedCollectionLabel = getArticleCollectionLabel(locale, collectionKey);

  return (
    <InnerShell activeHref={activeHref} locale={locale}>
      <div className="site-container article-layout">
        <main>
          <article className="article-card">
            <div className="breadcrumb">
              <Link href={localizeHref(locale, "/")}>{messages.article.home}</Link> /{" "}
              <Link href={localizeHref(locale, collectionHref)}>{localizedCollectionLabel}</Link> /{" "}
              <span>{article.category}</span>
            </div>

            <span className="doc-id">
              {messages.article.archiveId}: #{article.archiveId}
            </span>
            <h1 className="article-title serif">{article.title}</h1>

            <div className="article-meta">
              <div>
                {messages.article.publishedAt}: <strong>{article.publishedAt}</strong>
              </div>
              <div>
                {messages.article.auditRegion}: <strong>{article.region}</strong>
              </div>
              <div>
                {messages.article.readTime}: <strong>{article.readTime}</strong>
              </div>
            </div>

            <section className="exec-summary">
              <h3>{messages.article.summary}</h3>
              <p>{article.summary}</p>
            </section>

            <section className="article-content">
              <p>{article.intro}</p>

              {article.sections.map((section, index) => (
                <div key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {index === 0 && article.evidence ? (
                    <div className="evidence-callout">
                      <p className="evidence-eyebrow">[ {article.evidence.eyebrow} ]</p>
                      <p className="evidence-description">{article.evidence.description}</p>
                      <Link
                        href={localizeHref(locale, article.evidence.href)}
                        className="vault-btn"
                      >
                        {article.evidence.label}
                      </Link>
                    </div>
                  ) : null}
                </div>
              ))}
            </section>

            <div className="signature-row">
              <div className="audit-seal">
                AIBRI
                <br />
                {articleUiCopy.verifiedSeal}
                <br />
                2025
              </div>

              <div className="share-group">
                <span className="share-label">{messages.article.shareReport}:</span>
                <a
                  href={shareLinks.linkedIn}
                  className="share-btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  {articleUiCopy.linkedInLabel}
                </a>
                <a href={shareLinks.x} className="share-btn" target="_blank" rel="noreferrer">
                  X
                </a>
                <a href={shareLinks.canonicalUrl} className="share-btn">
                  {messages.article.copyLink}
                </a>
              </div>
            </div>

            <section className="disclaimer-box">
              <h4>{messages.article.disclaimer}</h4>
              <ol>
                {article.disclaimer.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>
          </article>
        </main>

        <aside>
          <span className="section-label">{messages.article.auditorProfile}</span>
          <div className="auditor-card">
            <div className="auditor-avatar">S</div>
            <h4>{articleUiCopy.leadAuditorName}</h4>
            <p>{articleUiCopy.leadAuditorBio}</p>
            <Link href={localizeHref(locale, "/auditors")} className="auditor-profile-link">
              {messages.article.viewProfile}
            </Link>
          </div>

          <span className="section-label">{messages.article.sovereignty}</span>
          <div className="sidebar-box">
            <h3>{messages.article.independence}</h3>
            <p>{articleUiCopy.sovereigntyBody}</p>
          </div>

          <span className="section-label">{messages.article.relatedFiles}</span>
          <ul className="sidebar-link-list">
            {relatedItems.map((item) => (
              <li key={item.slug}>
                <Link href={localizeHref(locale, `${collectionHref}/${item.slug}`)}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </InnerShell>
  );
}

type StaticPageProps = {
  locale: Locale;
  pageKey:
    | "about"
    | "auditors"
    | "methodology"
    | "evidence-vault"
    | "privacy"
    | "terms"
    | "anti-fraud"
    | "integrity";
  activeHref: string;
  page: StaticPageData;
};

export function StaticPageView({ locale, pageKey, activeHref, page }: StaticPageProps) {
  const messages = getMessages(locale);
  const copy = getStaticPageCopy(locale, pageKey);
  const articleUiCopy = getArticleUiCopy(locale);

  return (
    <InnerShell activeHref={activeHref} locale={locale}>
      <div className="site-container static-layout">
        <main className="static-content-box">
          <div className="breadcrumb">{copy.breadcrumb}</div>
          <h1 className="article-title serif">{copy.title}</h1>
          <div className="last-updated">
            {messages.staticPage.lastUpdated}: {page.updatedAt}
          </div>

          <div className="static-content">
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {page.auditors ? (
              <div className="auditors-grid">
                {page.auditors.map((auditor) => (
                  <div key={auditor.name} className="auditor-mini-card">
                    <div className="mini-avatar">{auditor.initials}</div>
                    <div>
                      <div className="mini-card-title">{auditor.name}</div>
                      <div className="mini-card-subtitle">{auditor.role}</div>
                      <p>{auditor.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {page.sections.map((section) => (
              <section key={section.heading} id={section.id} className="static-section">
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </main>

        <aside>
          <span className="section-label">{messages.staticPage.status}</span>
          <div className="status-box">
            <div className="status-item">
              {messages.staticPage.approval} <span>{page.status.approval}</span>
            </div>
            <div className="status-item">
              {messages.staticPage.documentId} <span>{page.status.documentId}</span>
            </div>
            <div className="status-item">
              {messages.staticPage.secrecy} <span>{page.status.secrecy}</span>
            </div>
          </div>

          <span className="section-label">{messages.staticPage.related}</span>
          <ul className="sidebar-link-list">
            {page.relatedLinks.map((link: LinkItem) => (
              <li key={link.href}>
                <Link href={localizeHref(locale, link.href)}>{link.label}</Link>
              </li>
            ))}
          </ul>

          <div className="official-seal">
            <div className="seal-stamp">
              AIBRI
              <br />
              {articleUiCopy.officialSeal}
              <br />
              {articleUiCopy.documentSeal}
            </div>
          </div>
          <p className="footer-note">{page.footerNote}</p>
        </aside>
      </div>
    </InnerShell>
  );
}

export function LoadingPageView({ activeHref, locale }: { activeHref: string; locale: Locale }) {
  return (
    <InnerShell activeHref={activeHref} locale={locale}>
      <div className="site-container loading-shell">
        <div className="loading-card">
          <div className="loading-line loading-line-short" />
          <div className="loading-line" />
          <div className="loading-line" />
          <div className="loading-line loading-line-short" />
        </div>
      </div>
    </InnerShell>
  );
}
