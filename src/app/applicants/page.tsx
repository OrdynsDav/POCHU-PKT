import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

export default function ApplicantsRulesPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Правила приёма</h1>
        <PdfAttachmentsSection pdfAppRoute="/applicants" />
      </Container>
    </section>
  );
}
