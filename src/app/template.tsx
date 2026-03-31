"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import styles from "./template.module.css";

type AppTemplateProps = {
  children: React.ReactNode;
};

/**
 * Принудительно размонтирует предыдущую страницу на каждом роут-переходе.
 * Это оставляет layout (шапка/подвал) постоянным, но сам контент страницы
 * всегда монтируется как новый модуль.
 */
export default function AppTemplate({ children }: AppTemplateProps) {
  const pathname = usePathname();
  const [currentChildren, setCurrentChildren] = useState<React.ReactNode>(children);
  const [leavingChildren, setLeavingChildren] = useState<React.ReactNode>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
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
      {leavingChildren ? (
        <div className={styles.leaveToLeft} aria-hidden="true">
          {leavingChildren}
        </div>
      ) : null}
      <div
        key={pathname}
        className={isTransitioning ? styles.enterFromRight : styles.pageStatic}
      >
        {currentChildren}
      </div>
    </div>
  );
}
