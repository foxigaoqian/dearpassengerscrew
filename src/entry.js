import app from "./index.js";
import { applySeoOverrides } from "./seo-overrides.js";

const INVALID_VIDEO_UPLOAD_DATE = '"uploadDate":"2026-07-14"';
const VALID_VIDEO_UPLOAD_DATE = '"uploadDate":"2026-07-14T00:00:00Z"';

export default {
  async fetch(request, env, ctx) {
    const response = await app.fetch(request, env, ctx);
    const contentType = response.headers.get("content-type") || "";

    if (!contentType.includes("text/html")) {
      return response;
    }

    const originalHtml = await response.text();
    const pathname = new URL(request.url).pathname;
    let html = applySeoOverrides(pathname, originalHtml);
    html = html.replaceAll(INVALID_VIDEO_UPLOAD_DATE, VALID_VIDEO_UPLOAD_DATE);

    const headers = new Headers(response.headers);
    headers.delete("content-length");

    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};
