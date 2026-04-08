import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function AboutEmploymentPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Трудоустройство выпускников" />
        <PdfAttachmentsSection pdfAppRoute="/about/material-support/employment.php" />
      </Container>
    </section>
  );
}
