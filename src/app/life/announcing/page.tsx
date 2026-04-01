import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";

export default function LifeAnnouncingPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Объявления</h1>
        <PdfAttachmentsSection pdfAppRoute="/life/announcing" />
      </Container>
    </section>
  );
}
