"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainNavigation } from "@/config/site";
import styles from "./template.module.css";

type AppTemplateProps = {
  children: React.ReactNode;
};

function normalizePath(path: string) {
  if (!path) return "/";
  if (path === "/") return "/";
  return path.replace(/\/+$/, "");
}

const KNOWN_PATHS = (() => {
  const paths = new Set<string>(["/"]);

  for (const item of mainNavigation) {
    if ("href" in item && item.href) {
      paths.add(normalizePath(item.href));
    }

    if ("children" in item && Array.isArray(item.children)) {
      for (const child of item.children) {
        paths.add(normalizePath(child.href));
      }
    }
  }

  return paths;
})();

export default function AppTemplate({ children }: AppTemplateProps) {
  const pathname = usePathname();
  const normalizedPath = normalizePath(decodeURI(pathname || "/"));
  const shouldAnimate = normalizedPath !== "/" && KNOWN_PATHS.has(normalizedPath);
  const [currentChildren, setCurrentChildren] = useState<React.ReactNode>(children);
  const [leavingChildren, setLeavingChildren] = useState<React.ReactNode>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!shouldAnimate) {
      setLeavingChildren(null);
      setCurrentChildren(children);
      setIsTransitioning(false);
      return;
    }

    setLeavingChildren(currentChildren);
    setCurrentChildren(children);
    setIsTransitioning(true);

    const timer = window.setTimeout(() => {
      setLeavingChildren(null);
      setIsTransitioning(false);
    }, 320);

    return () => window.clearTimeout(timer);
  }, [pathname, children, shouldAnimate]);

  return (
    <div className={styles.transitionRoot}>
      {shouldAnimate && leavingChildren ? (
        <div className={styles.leaveToLeft} aria-hidden="true">
          {leavingChildren}
        </div>
      ) : null}
      <div
        key={pathname}
        className={shouldAnimate && isTransitioning ? styles.enterFromRight : styles.pageStatic}
      >
        {currentChildren}
      </div>
    </div>
  );
}
