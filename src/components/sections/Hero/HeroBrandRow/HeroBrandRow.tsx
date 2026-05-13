"use client";

import { Logo } from "@/components/ui";
import { memo } from "react";
import styles from "./HeroBrandRow.module.css";
import { HeroTypewriter } from "../HeroTypewriter/HeroTypewriter";

type HeroBrandRowProps = {
  shortName: string;
  href: string;
};

export const HeroBrandRow = memo(function HeroBrandRow({
  shortName,
  href,
}: HeroBrandRowProps) {
  return (
    <div className={`${styles.logoRow} hero-anim-right hero-delay-120`}>
      <div className={styles.logoWrap}>
        <Logo shortName={shortName} href={href} className={styles.logo} />
      </div>
      <HeroTypewriter />
    </div>
  );
});
