import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function ApplicantsCommissionPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Приёмная комиссия</h1>
        <PdfAttachmentsSection pdfAppRoute="/applicants/inspection-board" />
      </div>
    </section>
  );
}
