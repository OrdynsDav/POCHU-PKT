import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "./page.module.css";

export default function NewsSportLifePage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Студенческий спортивный клуб</h1>
        <PdfAttachmentsSection pdfAppRoute="/news/sport-life" />
      </Container>
    </section>
  );
}
