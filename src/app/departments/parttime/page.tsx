import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function DepartmentsParttimePage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Заочное отделение</h1>
        <PdfAttachmentsSection pdfAppRoute="/departments/parttime" />
      </Container>
    </section>
  );
}
