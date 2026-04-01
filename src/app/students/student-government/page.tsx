import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function StudentsSelfGovPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Студенческое самоуправление</h1>
        <PdfAttachmentsSection pdfAppRoute="/students/student-government" />
      </div>
    </section>
  );
}
