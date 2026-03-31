"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./template.module.css";

type AppTemplateProps = {
  children: React.ReactNode;
};

export default function AppTemplate({ children }: AppTemplateProps) {
  const pathname = usePathname();
  const shouldAnimate = pathname !== "/";
  const [currentChildren, setCurrentChildren] = useState<React.ReactNode>(children);
  const [leavingChildren, setLeavingChildren] = useState<React.ReactNode>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const isHome = pathname === "/";

    if (isHome) {
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
  }, [pathname, children]); // eslint-disable-line react-hooks/exhaustive-deps

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
