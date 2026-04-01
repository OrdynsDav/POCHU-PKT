import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function StudentsNewsPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Новости</h1>
        <PdfAttachmentsSection pdfAppRoute="/students/news" />
      </Container>
    </section>
  );
}
