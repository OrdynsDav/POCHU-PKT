import { writeFile, mkdir, access } from "fs/promises";
import { createWriteStream, constants as fsConstants } from "fs";
import { pipeline } from "stream/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const OUT_DIR = join(ROOT, "public", "pdf");
const BASE = "https://pskovpkt.ru";

const SEED_PATHS = [
  "/",
  "/about/",
  "/about/docs/",
  "/about/osnovnye-svedeniya/",
  "/about/structure/",
  "/about/education/",
  "/about/teachers/",
  "/about/management/",
  "/about/financial/",
  "/about/service/",
  "/about/career/",
  "/about/material-support/",
  "/about/international-cooperation/",
  "/about/logistical-support/",
  "/life/",
  "/life/history/",
  "/life/schedule/",
  "/life/call-schedule/",
  "/departments/",
  "/applicants/",
  "/students/",
  "/contacts/",
  "/contacts/requisites/",
];

const pdfRegex = /href\s*=\s*["']([^"']*\.pdf[^"']*)["']/gi;
const hrefRegex = /href\s*=\s*["']([^"']+)["']/gi;

function normalizeUrl(href) {
  if (!href || href.startsWith("#") || href.startsWith("javascript:")) return null;
  try {
    if (href.startsWith("//")) return new URL(`https:${href}`);
    if (href.startsWith("http")) return new URL(href);
    return new URL(href, BASE);
  } catch {
    return null;
  }
}

function isSameSite(u) {
  return u.hostname.replace(/^www\./, "") === "pskovpkt.ru";
}

async function fetchText(path) {
  const url = path.startsWith("http") ? path : `${BASE}${path.startsWith("/") ? path : `/${path}`}`;
  const res = await fetch(url, {
    headers: {
      "User-Agent": "POCHU-PKT-crawler/1.0 (+local mirror)",
      Accept: "text/html,application/xhtml+xml",
    },
  });
  if (!res.ok) return null;
  return res.text();
}

function extractPdfs(html) {
  const set = new Set();
  let m;
  pdfRegex.lastIndex = 0;
  while ((m = pdfRegex.exec(html)) !== null) {
    const u = normalizeUrl(m[1].trim());
    if (u && isSameSite(u) && u.pathname.toLowerCase().endsWith(".pdf")) {
      set.add(u.toString().split("#")[0]);
    }
  }
  return [...set];
}

function extractInternalLinks(html) {
  const set = new Set();
  let m;
  hrefRegex.lastIndex = 0;
  while ((m = hrefRegex.exec(html)) !== null) {
    const u = normalizeUrl(m[1].trim());
    if (!u || !isSameSite(u)) continue;
    if (/\.(pdf|jpg|jpeg|png|gif|webp|zip|rar|doc|docx|xls|xlsx)$/i.test(u.pathname))
      continue;
    const clean = `${u.origin}${u.pathname}${u.search || ""}`;
    set.add(clean);
  }
  return [...set];
}

function safeFilenameFromUrl(urlString) {
  const u = new URL(urlString);
  let name = decodeURIComponent(u.pathname.split("/").pop() || "file.pdf");
  if (!name.toLowerCase().endsWith(".pdf")) name += ".pdf";
  return name.replace(/[<>:"/\\|?*]/g, "_");
}

async function downloadFile(urlString, destPath) {
  const res = await fetch(urlString, {
    headers: { "User-Agent": "POCHU-PKT-crawler/1.0 (+local mirror)" },
  });
  if (!res.ok) throw new Error(`${res.status} ${urlString}`);
  const body = res.body;
  if (!body) throw new Error("No body");
  await pipeline(body, createWriteStream(destPath));
}

async function fileExists(p) {
  try {
    await access(p, fsConstants.F_OK);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  await mkdir(join(ROOT, "src", "data"), { recursive: true });

  const visited = new Set();
  const queue = [...SEED_PATHS.map((p) => `${BASE}${p.startsWith("/") ? p : `/${p}`}`)];
  const allPdfUrls = new Set();
  /** @type {Map<string, string>} pdf URL → first page pathname where it appeared */
  const pdfSourcePath = new Map();
  const maxPages = 200;

  while (queue.length && visited.size < maxPages) {
    const url = queue.shift();
    if (!url || visited.has(url)) continue;
    visited.add(url);

    const pathOnly = new URL(url).pathname + (new URL(url).search || "");
    const html = await fetchText(pathOnly);
    if (!html) continue;

    for (const p of extractPdfs(html)) {
      allPdfUrls.add(p);
      if (!pdfSourcePath.has(p)) pdfSourcePath.set(p, pathOnly.split("?")[0] || "/");
    }
    for (const link of extractInternalLinks(html)) {
      if (!visited.has(link) && !queue.includes(link)) queue.push(link);
    }
  }

  const pdfList = [...allPdfUrls].sort();
  console.log(`Found ${pdfList.length} unique PDF URLs`);

  const manifest = [];
  const usedNames = new Set();

  for (const pdfUrl of pdfList) {
    let baseName = safeFilenameFromUrl(pdfUrl);
    let destName = baseName;
    let n = 1;
    while (usedNames.has(destName)) {
      const dot = baseName.lastIndexOf(".pdf");
      destName =
        dot === -1
          ? `${baseName}_${n}.pdf`
          : `${baseName.slice(0, dot)}_${n}.pdf`;
      n++;
    }
    usedNames.add(destName);
    const localPath = `/pdf/${encodeURIComponent(destName)}`;
    const destAbs = join(OUT_DIR, destName);
    try {
      if (await fileExists(destAbs)) {
        console.log("SKIP (exists)", destName);
      } else {
        await downloadFile(pdfUrl, destAbs);
        console.log("OK", destName);
      }
      manifest.push({
        url: pdfUrl,
        file: destName.replace(/\.pdf$/i, ""),
        href: localPath,
        sourcePage: pdfSourcePath.get(pdfUrl) ?? null,
      });
    } catch (e) {
      console.error("FAIL", pdfUrl, e.message);
    }
  }

  await writeFile(
    join(ROOT, "src", "data", "pdf-manifest.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), files: manifest }, null, 2),
    "utf8"
  );
  console.log("Wrote src/data/pdf-manifest.json");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
