import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";

export default function LifeNewsPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Новости</h1>
        <PdfAttachmentsSection pdfAppRoute="/life/news" />
      </Container>
    </section>
  );
}
