"use client";

import { track } from "@vercel/analytics";

export function trackEvent(
  name: string,
  properties?: Record<string, string | number | boolean>
) {
  track(name, properties);
}

// Pre-defined event names for consistency
export const EVENTS = {
  // Form submissions
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  QUOTE_FORM_SUBMIT: "quote_form_submit",
  GROWTH_FORM_SUBMIT: "growth_form_submit",
  CAREER_FORM_SUBMIT: "career_form_submit",

  // CTA clicks
  CTA_REQUEST_QUOTE: "cta_request_quote",
  CTA_VIEW_CATALOG: "cta_view_catalog",
  CTA_CONTACT_EXPERT: "cta_contact_expert",
  CTA_WHATSAPP: "cta_whatsapp",
  CTA_CALL_NOW: "cta_call_now",

  // Navigation
  NAV_BLOG_CLICK: "nav_blog_click",
  NAV_GROWTH_CLICK: "nav_growth_click",

  // Content engagement
  BLOG_ARTICLE_VIEW: "blog_article_view",
  NEWS_ARTICLE_VIEW: "news_article_view",
  PRODUCT_CATEGORY_VIEW: "product_category_view",

  // Quote flow
  QUOTE_PRODUCT_ADD: "quote_product_add",
  QUOTE_PDF_DOWNLOAD: "quote_pdf_download",

  // Segment pages
  SEGMENT_PAGE_VIEW: "segment_page_view",
} as const;
