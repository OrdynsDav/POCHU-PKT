import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function StudentsGiaPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Государственная итоговая аттестация</h1>
        <PdfAttachmentsSection pdfAppRoute="/students/gia" />
      </Container>
    </section>
  );
}
