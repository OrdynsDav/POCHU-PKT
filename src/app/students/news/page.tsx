import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function StudentsNewsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Новости</h1>
        <PdfAttachmentsSection pdfAppRoute="/students/news" />
      </div>
    </section>
  );
}
