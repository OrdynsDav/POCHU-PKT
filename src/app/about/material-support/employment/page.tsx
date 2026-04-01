import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";

export default function AboutEmploymentPage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Трудоустройство выпускников</h1>
        <PdfAttachmentsSection pdfAppRoute="/about/material-support/employment.php" />
      </Container>
    </section>
  );
}
