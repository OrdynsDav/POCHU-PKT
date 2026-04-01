import pdfManifest from "@/data/pdf-manifest.json";
import {
  normalizeAppRoute,
  officialSitePathToAppRoute,
} from "@/lib/officialSitePathToAppRoute";

export type PdfManifestItem = (typeof pdfManifest.files)[number];

export function getPdfsForRoute(appRoute: string): PdfManifestItem[] {
  const target = normalizeAppRoute(appRoute);
  return pdfManifest.files
    .filter((f) => {
      const mapped = officialSitePathToAppRoute(f.sourcePage);
      if (!mapped) return false;
      return normalizeAppRoute(mapped) === target;
    })
    .sort((a, b) => a.file.localeCompare(b.file, "ru"));
}
