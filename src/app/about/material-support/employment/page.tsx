import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function AboutEmploymentPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Трудоустройство выпускников</h1>
        <PdfAttachmentsSection pdfAppRoute="/about/material-support/employment.php" />
      </div>
    </section>
  );
}
