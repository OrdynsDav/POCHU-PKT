import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "./page.module.css";

export default function ApplicantsRulesPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Правила приёма</h1>
        <PdfAttachmentsSection pdfAppRoute="/applicants" />
      </div>
    </section>
  );
}
