import Link from "next/link";
import Image from "next/image";
import styles from "./NewsCard.module.css";
import { NewsCardProps } from "../types";

function isExternalHref(href: string) {
  return /^https?:\/\//i.test(href);
}

export function NewsCard({ link, image, title, date, excerpt }: NewsCardProps) {
  const external = isExternalHref(link);
  return (
    <Link
      href={link}
      {...(external
        ? { target: "_blank" as const, rel: "noopener noreferrer" }
        : {})}
      className={styles.newsCard}
    >
      <div className={styles.newsCardMedia}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 48vw, 40rem"
          quality={95}
          className={styles.newsCardImg}
        />
        <div className={styles.newsCardOverlay} aria-hidden />
      </div>
      <div className={styles.newsCardBody}>
        <time className={styles.newsCardDate}>{date}</time>
        <h3 className={styles.newsCardTitle}>{title}</h3>
        <p className={styles.newsCardExcerpt}>{excerpt}</p>
      </div>
    </Link>
  );
}
