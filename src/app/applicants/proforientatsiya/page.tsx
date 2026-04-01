import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function ApplicantsProforPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Профориентация</h1>
        <PdfAttachmentsSection pdfAppRoute="/applicants/proforientatsiya" />
      </div>
    </section>
  );
}
