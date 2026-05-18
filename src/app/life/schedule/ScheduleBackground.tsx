"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./page.module.css";

const HERO_BG_SRC = "/images/schedule-bg.jpg";

export function ScheduleBackground() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.background} aria-hidden="true">
      <span
        className={[
          styles.mediaPlaceholder,
          loaded ? styles.mediaPlaceholderHidden : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
      <Image
        src={HERO_BG_SRC}
        sizes="100vw"
        className={[
          styles.backgroundImage,
          loaded ? styles.backgroundImageLoaded : "",
        ]
          .filter(Boolean)
          .join(" ")}
        alt="Фоновое изображение"
        fill
        priority
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
