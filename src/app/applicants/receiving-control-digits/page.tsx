import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function ApplicantsDigitsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Контрольные цифры приёма</h1>
        <PdfAttachmentsSection pdfAppRoute="/applicants/receiving-control-digits" />
      </div>
    </section>
  );
}
