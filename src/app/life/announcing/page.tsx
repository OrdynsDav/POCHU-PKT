import { PdfAttachmentsSection } from "@/components/ui/pdfDownloadLink/PdfDownloadLink";
import styles from "../page.module.css";
import { Container } from "@/components/ui";
import { PageTitle } from "@/components/ui/PageTitle/PageTitle";

export default function LifeAnnouncingPage() {
  return (
    <section className={styles.page}>
      <Container>
        <PageTitle title="Объявления" />
        <PdfAttachmentsSection pdfAppRoute="/life/announcing" />
      </Container>
    </section>
  );
}
