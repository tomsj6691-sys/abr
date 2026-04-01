import type { Locale } from "@/app/_lib/i18n";

const articleLanguageByLocale: Record<Locale, string> = {
  "zh-CN": "zh-CN",
  en: "en-US",
  es: "es-ES",
  fr: "fr-FR",
  de: "de-DE",
  ja: "ja-JP",
  ar: "ar-SA",
  pt: "pt-BR",
};

export function getArticleLanguageFilter(locale: Locale) {
  return articleLanguageByLocale[locale] ?? "zh-CN";
}
