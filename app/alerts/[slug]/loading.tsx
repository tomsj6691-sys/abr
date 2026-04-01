import { LoadingPageView } from "@/app/_components/page-templates";
import { defaultLocale } from "@/app/_lib/i18n";

export default function Loading() {
  return <LoadingPageView activeHref="/alerts" locale={defaultLocale} />;
}
