"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { siteConfig, mainNavigation } from "@/config/site";
import type { MainNavChild, MainNavItem } from "@/config/site";
import styles from "./HeaderNav.module.css";

const externalLinkProps = {
  rel: "noopener noreferrer" as const,
};

function isNavWithChildren(
  item: MainNavItem
): item is Extract<MainNavItem, { children: readonly MainNavChild[] }> {
  return "children" in item && Array.isArray(item.children);
}

export function HeaderNav() {
  const { contacts } = siteConfig;
  const [open, setOpen] = useState(false);
  const [suppressDesktopHover, setSuppressDesktopHover] = useState(false);
  const pathname = usePathname();

  const closeMobile = () => setOpen(false);

  useEffect(() => {
    setOpen(false);
    setSuppressDesktopHover(true);

    const timer = window.setTimeout(() => {
      setSuppressDesktopHover(false);
    }, 220);

    return () => {
      window.clearTimeout(timer);
    };
  }, [pathname]);

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
                        onClick={() => setSuppressDesktopHover(true)}
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
                  onClick={() => setSuppressDesktopHover(true)}
                >
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>

      <button
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={styles.mobileMenuToggle}
        onClick={() => setOpen((prev) => !prev)}
      >
        <Menu className={styles.mobileMenuIcon} aria-hidden="true" />
      </button>

      <div className={styles.mobileOnly}>
        <div
          role="presentation"
          aria-hidden="true"
          className={`${styles.mobileBackdrop} ${open ? styles.mobileBackdropOpen : styles.mobileBackdropClosed}`}
          onClick={closeMobile}
        />
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Мобильное меню навигации"
          className={`${styles.mobileDrawer} ${open ? styles.mobileDrawerOpen : styles.mobileDrawerClosed}`}
        >
          <div className={styles.mobileDrawerHeader}>
            <button
              type="button"
              aria-label="Закрыть меню"
              className={styles.mobileCloseButton}
              onClick={closeMobile}
            >
              <X className={styles.mobileCloseIcon} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Мобильное меню" className={styles.mobileNav}>
            {mainNavigation.map((item) =>
              isNavWithChildren(item) ? (
                <details key={item.id} className={styles.mobileDetails}>
                  <summary className={styles.mobileSummary}>
                    <span className={styles.mobileSummaryRow}>
                      {item.label}
                      <ChevronDown
                        className={styles.mobileDetailsChevron}
                        aria-hidden="true"
                      />
                    </span>
                  </summary>
                  <ul
                    className={styles.mobileSubmenuList}
                    role="list"
                    aria-label={item.label}
                  >
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <Link
                          href={child.href}
                          {...externalLinkProps}
                          className={styles.mobileSubmenuLink}
                          onClick={closeMobile}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <Link
                  key={item.id}
                  href={item.href}
                  {...externalLinkProps}
                  className={styles.mobileTopLink}
                  onClick={closeMobile}
                >
                  {item.label}
                </Link>
              )
            )}
            <address className={styles.mobileContact}>
              <Link
                className={styles.mobileContactLink}
                href={`tel:${contacts.phone}`}
                aria-label={`Позвонить: ${contacts.phone}`}
              >
                <Phone className={styles.mobileContactIcon} aria-hidden="true" />{" "}
                {contacts.phone}
              </Link>
              <Link
                className={styles.mobileContactLink}
                href={`mailto:${contacts.email}`}
                aria-label={`Написать на почту: ${contacts.email}`}
              >
                <Mail className={styles.mobileContactIcon} aria-hidden="true" />{" "}
                {contacts.email}
              </Link>
            </address>
          </nav>
        </div>
      </div>
    </div>
  );
}
