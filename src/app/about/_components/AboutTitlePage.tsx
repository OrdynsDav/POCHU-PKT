import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../AboutPage.module.css";

type AboutTitlePageProps = {
  title: string;
  /** Маршрут приложения для подбора PDF (см. getPdfsForRoute) */
  pdfAppRoute?: string;
};

export function AboutTitlePage({ title, pdfAppRoute }: AboutTitlePageProps) {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{title}</h1>
        {pdfAppRoute ? <PdfAttachmentsSection pdfAppRoute={pdfAppRoute} /> : null}
      </div>
    </section>
  );
}
