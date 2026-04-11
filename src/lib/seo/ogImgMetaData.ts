import { siteConfig } from "@/config/site";

export function toAbsoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${siteConfig.url}${path}`;
}

export function ogImageMeta(
  imagePath: string | null | undefined,
  fallbackAlt: string,
  options?: { alt?: string; width?: number; height?: number }
) {
  if (imagePath === null || imagePath === undefined) {
    return {};
  }
  const absolute = toAbsoluteUrl(imagePath);
  const alt = options?.alt ?? fallbackAlt;
  const width = options?.width ?? 512;
  const height = options?.height ?? 512;
  return {
    openGraph: {
      images: [
        {
          url: absolute,
          width,
          height,
          alt,
        },
      ],
    },
    twitter: {
      images: [absolute],
    },
  };
}