import type { Metadata } from "next";
import { headers } from "next/headers";

import { defaultLocale, getDirection, getRootMetadataCopy, hasLocale } from "@/app/_lib/i18n";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aibrandrank.org"),
  title: {
    default: "AI BrandRank Institute (AIBRI)",
    template: "%s | AI BrandRank Institute (AIBRI)",
  },
  description: getRootMetadataCopy(defaultLocale).description,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerStore = await headers();
  const headerLocale = headerStore.get("x-aibri-locale");
  const locale = headerLocale && hasLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html lang={locale} dir={getDirection(locale)} className="h-full antialiased">
      <body className="site-body">{children}</body>
    </html>
  );
}
