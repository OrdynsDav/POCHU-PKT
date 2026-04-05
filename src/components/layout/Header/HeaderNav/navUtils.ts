import type { MainNavChild, MainNavItem } from "@/config/site";

export function isNavWithChildren(
  item: MainNavItem
): item is Extract<MainNavItem, { children: readonly MainNavChild[] }> {
  return "children" in item && Array.isArray(item.children);
}
