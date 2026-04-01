import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function DepartmentsFulltimePage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Очное отделение</h1>
        <PdfAttachmentsSection pdfAppRoute="/departments/fulltime" />
      </Container>
    </section>
  );
}
