import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function NewsSportLifePage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Студенческий спортивный клуб</h1>
        <PdfAttachmentsSection pdfAppRoute="/news/sport-life" />
      </div>
    </section>
  );
}
