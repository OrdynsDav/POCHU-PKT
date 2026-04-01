import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "./page.module.css";

export default function StudentsRulesPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Правила внутреннего распорядка</h1>
        <PdfAttachmentsSection pdfAppRoute="/students" />
      </div>
    </section>
  );
}
