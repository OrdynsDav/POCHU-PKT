import Link from "next/link";
import styles from "./NewsCard.module.css";
import { NewsCardProps } from "../types";
import { NewsCardMedia } from "./NewsCardMedia";

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
      <NewsCardMedia src={image} alt={title} />
      <div className={styles.newsCardBody}>
        <time className={styles.newsCardDate}>{date}</time>
        <h3 className={styles.newsCardTitle}>{title}</h3>
        <p className={styles.newsCardExcerpt}>{excerpt}</p>
      </div>
    </Link>
  );
}
