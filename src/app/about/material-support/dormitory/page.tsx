import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function AboutDormitoryPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Общежитие</h1>
        <PdfAttachmentsSection pdfAppRoute="/about/material-support/dormitory.php" />
      </div>
    </section>
  );
}
