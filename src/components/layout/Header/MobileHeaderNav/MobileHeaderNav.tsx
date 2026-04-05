"use client";

import Link from "next/link";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";
import { mainNavigation, siteConfig } from "@/config/site";
import { isNavWithChildren } from "../HeaderNav/navUtils";
import styles from "./MobileHeaderNav.module.css";
import { Logo } from "@/components/ui";

const externalLinkProps = {
  rel: "noopener noreferrer" as const,
};

export type MobileHeaderNavProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function MobileHeaderNav({ open, onOpenChange }: MobileHeaderNavProps) {
  const { contacts } = siteConfig;
  const closeMobile = () => onOpenChange(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const layer = (
    <div
      className={styles.overlayRoot}
      aria-hidden={!open}
      data-open={open ? "true" : undefined}
      inert={!open ? true : undefined}
    >
      <div
        role="presentation"
        className={`${styles.backdrop} ${open ? styles.backdropVisible : styles.backdropHidden}`}
        onClick={closeMobile}
      />
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        aria-label="Мобильное меню навигации"
        className={`${styles.drawer} ${open ? styles.drawerOpen : styles.drawerClosed}`}
      >
        <div className={styles.drawerHeader}>
          <Logo shortName="ПКТ" href="/" />
          <button
            type="button"
            aria-label="Закрыть меню"
            className={styles.closeButton}
            onClick={closeMobile}
          >
            <X className={styles.closeIcon} aria-hidden="true" />
          </button>
        </div>
        <nav aria-label="Мобильное меню" className={styles.nav}>
          <ul className={styles.navList}>
            {mainNavigation
              .filter((item) => item.id !== "home")
              .map((item) =>
                isNavWithChildren(item) ? (
                  <li key={item.id} className={styles.navItem}>
                    <details className={styles.details}>
                      <summary className={styles.summary}>
                        <span className={styles.summaryRow}>
                          {item.label}
                          <ChevronDown
                            className={styles.detailsChevron}
                            aria-hidden="true"
                          />
                        </span>
                      </summary>
                      <ul
                        className={styles.submenuList}
                        role="list"
                        aria-label={item.label}
                      >
                        {item.children.map((child) => (
                          <li key={child.id}>
                            <Link
                              href={child.href}
                              {...externalLinkProps}
                              className={styles.submenuLink}
                              onClick={closeMobile}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  </li>
                ) : (
                  <li key={item.id} className={styles.navItem}>
                    <Link
                      href={item.href}
                      {...externalLinkProps}
                      className={styles.topLink}
                      onClick={closeMobile}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
          </ul>
          <address className={styles.contact}>
            <Link
              className={styles.contactLink}
              href={`tel:${contacts.phone}`}
              aria-label={`Позвонить: ${contacts.phone}`}
            >
              <Phone className={styles.contactIcon} aria-hidden="true" />{" "}
              {contacts.phone}
            </Link>
            <Link
              className={styles.contactLink}
              href={`mailto:${contacts.email}`}
              aria-label={`Написать на почту: ${contacts.email}`}
            >
              <Mail className={styles.contactIcon} aria-hidden="true" />{" "}
              {contacts.email}
            </Link>
          </address>
        </nav>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Закрыть меню" : "Открыть меню"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        className={styles.menuToggle}
        onClick={() => onOpenChange(!open)}
      >
        <Menu className={styles.menuIcon} aria-hidden="true" />
      </button>
      {mounted ? createPortal(layer, document.body) : null}
    </>
  );
}
