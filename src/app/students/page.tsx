import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

export default function StudentsRulesPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Правила внутреннего распорядка</h1>
        <PdfAttachmentsSection pdfAppRoute="/students" />
      </Container>
    </section>
  );
}
