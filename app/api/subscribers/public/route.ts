import { NextRequest, NextResponse } from "next/server";

function getCmsBaseUrl(): string | null {
  const url = process.env.CMS_API_BASE_URL;
  if (!url) {
    return null;
  }
  return url.replace(/\/$/, "");
}

export async function POST(request: NextRequest) {
  const cmsBaseUrl = getCmsBaseUrl();
  if (!cmsBaseUrl) {
    return NextResponse.json({ detail: "CMS_API_BASE_URL is not configured" }, { status: 500 });
  }

  try {
    const body = await request.json();
    const forwardedBody = {
      ...body,
      site_name: "AIBRI",
    };

    const cmsUrl = `${cmsBaseUrl}/api/v1/subscribers/public`;
    const cmsResponse = await fetch(cmsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(forwardedBody),
    });

    let payload: unknown = null;
    if (cmsResponse.status === 422 || cmsResponse.status >= 400) {
      try {
        payload = await cmsResponse.json();
      } catch {
        // ignore parse errors
      }
    }

    return NextResponse.json(payload ?? {}, { status: cmsResponse.status });
  } catch {
    return NextResponse.json({ detail: "Failed to reach CMS" }, { status: 502 });
  }
}
