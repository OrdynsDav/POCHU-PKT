"use client";

import dynamic from "next/dynamic";
import type { NewsArticle } from "@/data/news/articles";
import styles from "./NewsArticleView.module.css";

const NewsArticleGallery = dynamic(
  () =>
    import("@/components/news/NewsArticleGallery/NewsArticleGallery").then(
      (m) => m.NewsArticleGallery,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className={styles.galleryPlaceholder}
        role="status"
        aria-live="polite"
        aria-label="Загрузка галереи фотографий"
      />
    ),
  },
);

type NewsArticleViewProps = {
  article: NewsArticle;
};

export function NewsArticleView({ article }: NewsArticleViewProps) {
  return (
    <>
      <NewsArticleGallery images={article.images} title={article.title} />
      <div className={styles.body}>
        {article.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </>
  );
}
