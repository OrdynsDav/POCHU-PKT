import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";

export default function LifeReviewsPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Отзывы</h1>
        <PdfAttachmentsSection pdfAppRoute="/life/reviews" />
      </Container>
    </section>
  );
}
