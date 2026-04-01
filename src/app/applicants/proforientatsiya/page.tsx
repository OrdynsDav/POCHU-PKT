import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function ApplicantsProforPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Профориентация</h1>
        <PdfAttachmentsSection pdfAppRoute="/applicants/proforientatsiya" />
      </Container>
    </section>
  );
}
