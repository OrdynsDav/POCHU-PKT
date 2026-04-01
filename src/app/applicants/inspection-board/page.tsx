import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function ApplicantsCommissionPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Приёмная комиссия</h1>
        <PdfAttachmentsSection pdfAppRoute="/applicants/inspection-board" />
      </Container>
    </section>
  );
}
