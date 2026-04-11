import type { Metadata } from "next";
import type { SeoInput } from "./types";
import { ogImageMeta, toAbsoluteUrl } from "./ogImgMetaData";
import { siteConfig } from "@/config/site";

export const DEFAULT_OG_IMAGE_PATH = "/android-chrome-512x512.png";

function normalizePath(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  return pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
}

function withBrandSuffix(title: string): string {
  const brand = siteConfig.shortName || siteConfig.name;
  if (!brand) return title;
  const normalizedTitle = title.toLowerCase();
  const normalizedBrand = brand.toLowerCase();
  if (normalizedTitle.includes(normalizedBrand)) return title;
  return `${title} — ${brand}`;
}

export function buildMetadata({
  title,
  description,
  path,
  keywords,
  robots = { index: true, follow: true },
  image = DEFAULT_OG_IMAGE_PATH,
  ogType = "website",
  withBranding = true,
  ogImageAlt,
  ogImageWidth,
  ogImageHeight,
}: SeoInput): Metadata {
  const normalizedPath = normalizePath(path);
  const canonical = /^https?:\/\//i.test(normalizedPath)
    ? normalizedPath
    : toAbsoluteUrl(normalizedPath);
  const pageTitle = withBranding ? withBrandSuffix(title) : title;

  const ogTwitterExtras = ogImageMeta(image, pageTitle, {
    alt: ogImageAlt,
    width: ogImageWidth,
    height: ogImageHeight,
  });

  return {
    title: pageTitle,
    description,
    keywords,
    alternates: {
      canonical,
    },
    robots,
    openGraph: {
      type: ogType,
      locale: "ru_RU",
      siteName: siteConfig.shortName || siteConfig.name,
      title: pageTitle,
      description,
      url: canonical,
      ...ogTwitterExtras.openGraph,
    },
    twitter: {
      card: image ? "summary_large_image" : "summary",
      title: pageTitle,
      description,
      ...ogTwitterExtras.twitter,
    },
  };
}