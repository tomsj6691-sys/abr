import { getArticleLanguageFilter } from "@/app/_lib/article-locale";
import type { Locale } from "@/app/_lib/i18n";

const publicSubscribersPath = "/api/subscribers/public";

type ValidationErrorDetail = {
  loc?: Array<string | number>;
  msg?: string;
};

export type SubscribePublicEmailResult =
  | { status: "success" }
  | { status: "invalid_email" }
  | { status: "site_not_found" }
  | { status: "network_error" }
  | { status: "unknown_error" };

function buildPublicSubscribersUrl() {
  return publicSubscribersPath;
}

function isInvalidEmailDetail(detail: unknown) {
  if (!Array.isArray(detail)) {
    return false;
  }

  return detail.some((item) => {
    if (!item || typeof item !== "object") {
      return false;
    }

    const error = item as ValidationErrorDetail;
    return error.loc?.join(".") === "body.email" || error.msg?.includes("invalid_email");
  });
}

export async function subscribePublicEmail({
  email,
  locale,
}: {
  email: string;
  locale: Locale;
}): Promise<SubscribePublicEmailResult> {
  const url = buildPublicSubscribersUrl();

  if (!url) {
    return { status: "unknown_error" };
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        language: getArticleLanguageFilter(locale),
      }),
    });

    if (response.status === 201) {
      return { status: "success" };
    }

    if (response.status === 404) {
      return { status: "site_not_found" };
    }

    if (response.status === 422) {
      const payload = (await response.json().catch(() => null)) as { detail?: unknown } | null;
      return isInvalidEmailDetail(payload?.detail)
        ? { status: "invalid_email" }
        : { status: "unknown_error" };
    }

    if (response.status >= 500) {
      return { status: "network_error" };
    }

    return { status: "unknown_error" };
  } catch {
    return { status: "network_error" };
  }
}
