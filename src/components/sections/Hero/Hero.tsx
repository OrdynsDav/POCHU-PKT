"use client";

import { GraduationCap } from "lucide-react";
import { Container, Logo } from "@/components/ui";
import Image from "next/image";
import { HeroActions } from "./HeroActions/HeroActions";
import { siteConfig } from "@/config/site";
import styles from "./Hero.module.css";

const HERO_IMG = "/images/hero.webp";

export function Hero() {
  const { logo } = siteConfig;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className={styles.hero}
    >
      <Container>
        <div className={styles.mediaLayer}>
          <Image
            src={HERO_IMG}
            alt="Псковский Кооперативный Техникум"
            priority
            className={styles.heroImage}
            quality={90}
            fill
            sizes="100vw"
            placeholder="empty"
          />
          <div className={styles.overlayHorizontal} />
          <div className={styles.overlayVertical} />
        </div>
        <div className={styles.blobTop} aria-hidden="true" />
        <div className={styles.blobBottom} aria-hidden="true" />
        <div className={styles.content}>
          <div className={styles.inner}>
            <div
              className={`${styles.badge} hero-anim-left`}
            >
              <GraduationCap className={styles.badgeIcon} />
              <span>Приём на 2026/2027 учебный год открыт</span>
            </div>
            <div className={`${styles.logoWrap} hero-anim-right hero-delay-120`}>
              <Logo
                shortName={logo.shortName}
                href={logo.href}
                className={styles.logo}
              />
            </div>
            <h1 id="hero-heading" className={styles.heading}>
              <span className={`${styles.headingLine} hero-anim-left hero-delay-180`}>
                Псковский
              </span>
              <span
                className={`${styles.headingGradient} hero-anim-right hero-delay-260`}
              >
                Кооперативный
              </span>
              <span className={`${styles.headingLine} hero-anim-left hero-delay-320`}>
                Техникум
              </span>
            </h1>

            <p
              className={`${styles.lead} hero-anim-right hero-delay-260`}
            >
              Профессиональное образование с&nbsp;1945&nbsp;года. Современные
              специальности, опытные преподаватели и&nbsp;успешные выпускники.
            </p>
            <HeroActions />
          </div>
        </div>
      </Container>
    </section>
  );
}
