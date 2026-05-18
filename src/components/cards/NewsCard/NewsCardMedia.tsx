"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./NewsCard.module.css";

type NewsCardMediaProps = {
  src: string;
  alt: string;
};

export function NewsCardMedia({ src, alt }: NewsCardMediaProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.newsCardMedia}>
      <span
        className={[
          styles.mediaPlaceholder,
          loaded ? styles.mediaPlaceholderHidden : "",
        ]
          .filter(Boolean)
          .join(" ")}
        aria-hidden="true"
      />
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 48em) 100vw, (max-width: 87.5em) 48vw, 40rem"
        quality={95}
        className={[
          styles.newsCardImg,
          loaded ? styles.newsCardImgLoaded : "",
        ]
          .filter(Boolean)
          .join(" ")}
        onLoad={() => setLoaded(true)}
      />
      <div className={styles.newsCardOverlay} aria-hidden />
    </div>
  );
}
