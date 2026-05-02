import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import { Container } from "@/components/ui";
import {
  getNewsArticleBySlug,
  getNewsArticleSlugs,
} from "@/data/news/articles";
import { formatNewsDateLong, formatNewsTime } from "@/lib/formatNewsDate";
import { NewsArticleView } from "@/components/news/NewsArticleView/NewsArticleView";
import styles from "./page.module.css";
import { Breadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getNewsArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) {
    return { title: "Новость" };
  }
  const description = article.paragraphs[0]?.slice(0, 160) ?? article.title;
  return {
    title: `${article.title} — Новости`,
    description,
    openGraph: {
      title: article.title,
      description,
      type: "article",
      publishedTime: article.publishedAt,
    },
  };
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const dateLabel = formatNewsDateLong(article.publishedAt);
  const timeLabel = formatNewsTime(article.publishedAt);

  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Новости", href: "/life/news" },
    { label: article.title, isCurrent: true },
  ];

  return (
    <section className={styles.page}>
      <Container>
        <Breadcrumbs items={breadcrumbs} />
        <article className={styles.article}>
          <header className={styles.heroBand}>
            <div className={styles.meta}>
              <time className={styles.metaTime} dateTime={article.publishedAt}>
                <span>{dateLabel}</span>
                <span>{timeLabel}</span>
              </time>
            </div>
            <h1 className={styles.title}>{article.title}</h1>
          </header>

          <NewsArticleView article={article} />

          <footer className={styles.footerNav}>
            <Link href="/life/news" className={styles.back}>
              <ChevronLeft className={styles.backIcon} size={22} strokeWidth={2} />
              Все новости
            </Link>
          </footer>
        </article>
      </Container>
    </section>
  );
}
