/**
 * Соответствие путей официального сайта (pskovpkt.ru) маршрутам этого приложения.
 * Используется вместе с полем sourcePage в pdf-manifest.json.
 */

function normalizeSourcePath(sourcePage: string): string {
  const raw = sourcePage.split("?")[0];
  if (raw === "/") return "/";
  return raw.replace(/\/$/, "") || "/";
}

export function normalizeAppRoute(route: string): string {
  if (route === "/") return "/";
  return route.replace(/\/$/, "") || "/";
}

type Rule = { test: (p: string) => boolean; route: string };

const rules: Rule[] = [
  { test: (p) => p.startsWith("/about/docs"), route: "/about/documents" },
  {
    test: (p) => p.startsWith("/about/pedagogicheskiy-sostav"),
    route: "/about/teachers",
  },
  { test: (p) => p.startsWith("/about/teachers"), route: "/about/management" },
  {
    test: (p) => p === "/about/educational-standards",
    route: "/about/educational-standarts",
  },
  { test: (p) => p.startsWith("/about/financial"), route: "/about/financial" },
  { test: (p) => p.startsWith("/about/structure"), route: "/about/structure" },
  { test: (p) => p.startsWith("/about/education"), route: "/about/education" },
  { test: (p) => p.startsWith("/about/service"), route: "/about/service" },
  { test: (p) => p.startsWith("/about/career"), route: "/about/career" },
  {
    test: (p) => p.startsWith("/about/logistical-support"),
    route: "/about/logistical-support",
  },
  {
    test: (p) => p.startsWith("/about/material-support/employment"),
    route: "/about/material-support/employment",
  },
  {
    test: (p) => p.startsWith("/about/material-support/dormitory"),
    route: "/about/material-support/dormitory",
  },
  {
    test: (p) => p.startsWith("/about/material-support"),
    route: "/about/material-support",
  },
  {
    test: (p) => p.startsWith("/about/mezhdunarodnoe-sotrudnichestvo"),
    route: "/about/international-cooperation",
  },
  {
    test: (p) => p.startsWith("/about/dostupnaya-sreda"),
    route: "/about/logistical-support/meals",
  },
  { test: (p) => p === "/about", route: "/about" },
  { test: (p) => p.startsWith("/life/history"), route: "/life/history" },
  {
    test: (p) => p.startsWith("/life/call-schedule"),
    route: "/life/call-schedule",
  },
  { test: (p) => p.startsWith("/life/schedule"), route: "/life/schedule" },
  { test: (p) => p.startsWith("/life/announcing"), route: "/life/announcing" },
  { test: (p) => p.startsWith("/life/reviews"), route: "/life/reviews" },
  { test: (p) => p.startsWith("/life/news"), route: "/life/news" },
  { test: (p) => p.startsWith("/life/"), route: "/life/news" },
  {
    test: (p) => p.startsWith("/departments/ochnoe-otdelenie"),
    route: "/departments/fulltime",
  },
  {
    test: (p) => p.startsWith("/departments/zaochnoe-otdelenie"),
    route: "/departments/parttime",
  },
  {
    test: (p) =>
      p.startsWith("/departments/dopolnitelnoe-obrazovanie") ||
      p.startsWith("/departments/additional"),
    route: "/departments/additional",
  },
  {
    test: (p) => p.startsWith("/applicants/receiving-control-digits"),
    route: "/applicants/receiving-control-digits",
  },
  {
    test: (p) => p.startsWith("/applicants/inspection-board"),
    route: "/applicants/inspection-board",
  },
  {
    test: (p) => p.startsWith("/applicants/specialties"),
    route: "/applicants/specialties",
  },
  {
    test: (p) => p.startsWith("/applicants/proforientatsiya"),
    route: "/applicants/proforientatsiya",
  },
  { test: (p) => p.startsWith("/applicants"), route: "/applicants" },
  {
    test: (p) => p.startsWith("/students/poleznye-ssylki"),
    route: "/news/sport-life",
  },
  {
    test: (p) => p.startsWith("/students/student-government"),
    route: "/students/student-government",
  },
  {
    test: (p) => p.startsWith("/students/training-part"),
    route: "/students/training-part",
  },
  { test: (p) => p.startsWith("/students/gia"), route: "/students/gia" },
  {
    test: (p) => p.startsWith("/students/announcing"),
    route: "/students/announcing",
  },
  { test: (p) => p.startsWith("/students/news"), route: "/students/news" },
  { test: (p) => p.startsWith("/students"), route: "/students" },
  {
    test: (p) => p.startsWith("/contacts/requisites"),
    route: "/contacts/requisites",
  },
  { test: (p) => p.startsWith("/contacts"), route: "/contacts" },
  { test: (p) => p === "/", route: "/" },
];

export function officialSitePathToAppRoute(
  sourcePage: string | null | undefined
): string | null {
  if (!sourcePage) return null;
  const p = normalizeSourcePath(sourcePage);
  for (const { test, route } of rules) {
    if (test(p)) return route;
  }
  return null;
}
