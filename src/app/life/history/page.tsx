import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";

export default function LifeHistoryPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>История техникума</h1>
        <PdfAttachmentsSection pdfAppRoute="/life/history" />
      </Container>
    </section>
  );
}
