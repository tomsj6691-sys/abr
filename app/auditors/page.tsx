import type { Metadata } from "next";

import { StaticPageView } from "@/app/_components/page-templates";
import { defaultLocale, getStaticPageCopy } from "@/app/_lib/i18n";
import { getStaticPage } from "@/app/_lib/site-data";

const page = getStaticPage("auditors", defaultLocale)!;

export const metadata: Metadata = {
  title: getStaticPageCopy(defaultLocale, "auditors").title,
  description: page.intro[0],
};

export default function AuditorsPage() {
  return (
    <StaticPageView locale={defaultLocale} pageKey="auditors" activeHref="/auditors" page={page} />
  );
}
