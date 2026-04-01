import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function StudentsAnnouncingPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Объявления</h1>
        <PdfAttachmentsSection pdfAppRoute="/students/announcing" />
      </div>
    </section>
  );
}
