import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function LifeSchedulePage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Расписание занятий</h1>
        <PdfAttachmentsSection pdfAppRoute="/life/schedule" />
      </div>
    </section>
  );
}
