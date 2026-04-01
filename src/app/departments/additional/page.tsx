import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function DepartmentsExtraPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Дополнительное образование</h1>
        <PdfAttachmentsSection pdfAppRoute="/departments/additional" />
      </div>
    </section>
  );
}
