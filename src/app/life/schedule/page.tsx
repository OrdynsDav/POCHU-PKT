import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";

export default function LifeSchedulePage() {
  return (
    <section className={styles.page}>
      <Container>
        <h1 className={styles.title}>Расписание занятий</h1>
        <PdfAttachmentsSection pdfAppRoute="/life/schedule" />
      </Container>
    </section>
  );
}
