import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function StudentsSelfGovPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Студенческое самоуправление</h1>
        <PdfAttachmentsSection pdfAppRoute="/students/student-government" />
      </Container>
    </section>
  );
}
