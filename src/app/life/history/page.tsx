import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function LifeHistoryPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>История техникума</h1>
        <PdfAttachmentsSection pdfAppRoute="/life/history" />
      </div>
    </section>
  );
}
