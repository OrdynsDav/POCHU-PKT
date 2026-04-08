import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import { Container } from "@/components/ui";
import styles from "../page.module.css";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function StudentsAnnouncingPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Объявления" />
        <PdfAttachmentsSection pdfAppRoute="/students/announcing" />
      </Container>
    </section>
  );
}
