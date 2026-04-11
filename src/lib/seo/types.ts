import type { Metadata } from "next";

export type SeoInput = {
  /** Заголовок страницы (без суффикса бренда или уже с ним). */
  title: string;
  description: string;
  /** Путь страницы (например `/life/news/slug`), либо абсолютный URL. */
  path: string;
  keywords?: string[];
  /** По умолчанию index + follow для публичных лендингов и юридических страниц. */
  robots?: Metadata["robots"];
  /** Путь от корня сайта; `null` — без изображения в OG/Twitter. */
  image?: string | null;
  ogType?: "website" | "article";
  /** Добавить суффикс бренда к `title` (по умолчанию да). */
  withBranding?: boolean;
  /** Подпись к превью в OG/Twitter; по умолчанию совпадает с `title` страницы. */
  ogImageAlt?: string;
  /** Размеры превью (для несоответствующих 512×512 картинок, напр. обложка блога). */
  ogImageWidth?: number;
  ogImageHeight?: number;
};