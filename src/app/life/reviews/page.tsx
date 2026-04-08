import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function LifeReviewsPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Отзывы" />
        <PdfAttachmentsSection pdfAppRoute="/life/reviews" />
      </Container>
    </section>
  );
}
