import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function AboutDormitoryPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Общежитие</h1>
        <PdfAttachmentsSection pdfAppRoute="/about/material-support/dormitory.php" />
      </Container>
    </section>
  );
}
