import { NextRequest, NextResponse } from "next/server";

function getCmsBaseUrl(): string | null {
  const url = process.env.CMS_API_BASE_URL;
  if (!url) {
    return null;
  }
  return url.replace(/\/$/, "");
}

export async function GET(request: NextRequest) {
  const cmsBaseUrl = getCmsBaseUrl();
  if (!cmsBaseUrl) {
    return NextResponse.json({ detail: "CMS_API_BASE_URL is not configured" }, { status: 500 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const siteName = "AIBRI";

    const cmsUrl = new URL("/api/v1/articles/public", cmsBaseUrl);
    cmsUrl.searchParams.set("site_name", siteName);

    for (const [key, value] of searchParams.entries()) {
      if (key === "site_name") continue;
      if (value !== undefined) {
        cmsUrl.searchParams.append(key, value);
      }
    }

    const cmsResponse = await fetch(cmsUrl.toString(), {
      method: "GET",
    });

    const data = await cmsResponse.json();
    return NextResponse.json(data, { status: cmsResponse.status });
  } catch {
    return NextResponse.json({ detail: "Failed to reach CMS" }, { status: 502 });
  }
}
