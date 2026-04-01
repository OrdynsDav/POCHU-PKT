import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";

export default function LifeReviewsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>Отзывы</h1>
        <PdfAttachmentsSection pdfAppRoute="/life/reviews" />
      </div>
    </section>
  );
}
