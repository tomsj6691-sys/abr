import type { Metadata } from "next";

import { StaticPageView } from "@/app/_components/page-templates";
import { defaultLocale, getStaticPageCopy } from "@/app/_lib/i18n";
import { getStaticPage } from "@/app/_lib/site-data";

const page = getStaticPage("evidence-vault", defaultLocale)!;

export const metadata: Metadata = {
  title: getStaticPageCopy(defaultLocale, "evidence-vault").title,
  description: page.intro[0],
};

export default function EvidenceVaultPage() {
  return (
    <StaticPageView
      locale={defaultLocale}
      pageKey="evidence-vault"
      activeHref="/evidence-vault"
      page={page}
    />
  );
}
