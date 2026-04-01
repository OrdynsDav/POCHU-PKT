import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function DepartmentsExtraPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Дополнительное образование</h1>
        <PdfAttachmentsSection pdfAppRoute="/departments/additional" />
      </Container>
    </section>
  );
}
