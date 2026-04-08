import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function LifeSchedulePage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Расписание занятий" />
        <PdfAttachmentsSection pdfAppRoute="/life/schedule" />
      </Container>
    </section>
  );
}
