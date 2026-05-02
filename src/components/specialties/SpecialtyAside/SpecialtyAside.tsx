"use client";

import { memo, useMemo } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { SPECIALTIES } from "@/data/specialties";
import type { SpecialtyItem } from "@/data/specialties";
import { useSpecialtyNavTransition } from "@/components/specialties/SpecialtyNavTransitionProvider";
import styles from "./SpecialtyAside.module.css";

type RowProps = {
  href: string;
  title: string;
  code: string;
  Icon: SpecialtyItem["icon"];
  isActive: boolean;
  onNavigate: (href: string) => void;
};

const SpecialtyAsideRow = memo(function SpecialtyAsideRow({
  href,
  title,
  code,
  Icon,
  isActive,
  onNavigate,
}: RowProps) {
  return (
    <Link
      href={href}
      className={isActive ? styles.rowActive : styles.row}
      aria-current={isActive ? "page" : undefined}
      scroll={false}
      onClick={(e) => {
        if (e.button !== 0) {
          return;
        }
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
          return;
        }
        e.preventDefault();
        onNavigate(href);
      }}
    >
      <span className={styles.iconWrap} aria-hidden>
        <Icon className={styles.icon} />
      </span>
      <span className={styles.rowBody}>
        <span className={styles.rowTitle}>{title}</span>
        <span className={styles.rowCode}>{code}</span>
      </span>
    </Link>
  );
});

export function SpecialtyAside() {
  const params = useParams();
  const { startSpecialtyNavigation } = useSpecialtyNavTransition();
  const idParam = params.id;
  const activeId =
    typeof idParam === "string" ? idParam : idParam?.[0] ?? "";

  const rows = useMemo(
    () =>
      SPECIALTIES.map((spec) => (
        <SpecialtyAsideRow
          key={spec.id}
          href={`/applicants/specialties/${spec.id}`}
          title={spec.title}
          code={spec.code}
          Icon={spec.icon}
          isActive={spec.id === activeId}
          onNavigate={startSpecialtyNavigation}
        />
      )),
    [activeId, startSpecialtyNavigation],
  );

  return (
    <aside className={styles.aside} aria-label="Специальности">
      <h2 className={styles.heading}>Специальности</h2>
      <div
        className={styles.navScroll}
        data-scroll-region="aside"
      >
        <nav className={styles.nav}>{rows}</nav>
      </div>
    </aside>
  );
}
