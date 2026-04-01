import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function DepartmentsParttimePage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Заочное отделение</h1>
        <PdfAttachmentsSection pdfAppRoute="/departments/parttime" />
      </div>
    </section>
  );
}
