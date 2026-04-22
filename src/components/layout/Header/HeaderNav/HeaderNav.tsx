"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { mainNavigation } from "@/config/site";
import { MobileHeaderNav } from "@/components/layout/Header/MobileHeaderNav/MobileHeaderNav";
import { isNavWithChildren } from "./navUtils";
import styles from "./HeaderNav.module.css";

const externalLinkProps = {
  rel: "noopener noreferrer" as const,
};

export function HeaderNav() {
  const [open, setOpen] = useState(false);
  const [suppressDesktopHover, setSuppressDesktopHover] = useState(false);
  const suppressTimerRef = useRef<number | null>(null);

  const suppressHoverTemporarily = useCallback((ms: number = 220) => {
    setSuppressDesktopHover(true);

    if (suppressTimerRef.current !== null) {
      window.clearTimeout(suppressTimerRef.current);
    }

    suppressTimerRef.current = window.setTimeout(() => {
      setSuppressDesktopHover(false);
      suppressTimerRef.current = null;
    }, ms);
  }, []);

  useEffect(() => {
    return () => {
      if (suppressTimerRef.current !== null) {
        window.clearTimeout(suppressTimerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.root}>
      <nav aria-label="Основное меню" className={styles.desktopNav}>
        <ul
          className={`${styles.desktopNavList} ${suppressDesktopHover ? styles.desktopNavListNoHover : ""}`}
          role="menubar"
        >
          {mainNavigation.map((item) =>
            isNavWithChildren(item) ? (
              <li
                key={item.id}
                className={styles.navItemWithDropdown}
                role="none"
              >
                <button
                  type="button"
                  className={styles.submenuTrigger}
                  aria-haspopup="true"
                  aria-controls={`submenu-${item.id}`}
                  title={item.label}
                >
                  <span className={styles.submenuTriggerLabel}>
                    {item.label}
                  </span>
                  <ChevronDown
                    className={styles.submenuTriggerChevron}
                    aria-hidden="true"
                  />
                </button>
                <ul
                  id={`submenu-${item.id}`}
                  role="menu"
                  aria-label={item.label}
                  className={
                    item.children.length > 6
                      ? styles.submenuWide
                      : styles.submenu
                  }
                >
                  {item.children.map((child) => (
                    <li key={child.id} role="none" className={styles.submenuItem}>
                      <Link
                        role="menuitem"
                        href={child.href}
                        {...externalLinkProps}
                        className={styles.submenuLink}
                        onClick={() => suppressHoverTemporarily(220)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={item.id} role="none">
                <Link
                  role="menuitem"
                  href={item.href}
                  {...externalLinkProps}
                  className={styles.topLevelLink}
                  onClick={() => suppressHoverTemporarily(220)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
      <MobileHeaderNav open={open} onOpenChange={setOpen} />
    </div>
  );
}
